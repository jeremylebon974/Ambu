import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DispatchEngine, DispatchResult } from './dispatch.engine';
import { DispatchRequestDto } from './dto/dispatch-request.dto';
import { EventBusService, SystemEvent } from '../../events/event-bus.service';

@Injectable()
export class DispatchService {
  private readonly logger = new Logger(DispatchService.name);

  constructor(
    private prisma: PrismaService,
    private dispatchEngine: DispatchEngine,
    private eventBus: EventBusService,
  ) {}

  async dispatch(dto: DispatchRequestDto, organizationId: string): Promise<DispatchResult> {
    // Vérifier que la mission existe
    const mission = await this.prisma.mission.findFirst({
      where: { id: dto.missionId, organizationId },
    });

    if (!mission) {
      throw new NotFoundException('Mission introuvable');
    }

    // Lancer le moteur de dispatch
    const result = await this.dispatchEngine.findBestVehicle(dto);

    if (result.success && result.recommended) {
      const { vehicleId, crewId, estimatedEta } = result.recommended;

      // Assigner automatiquement le véhicule et l'équipage
      await this.prisma.mission.update({
        where: { id: dto.missionId },
        data: {
          status: 'ASSIGNED' as any,
          crewId: crewId || undefined,
        },
      });

      // Mettre le véhicule en mission
      await this.dispatchEngine.updateVehicleStatus(vehicleId, 'ON_MISSION');

      // Émettre l'événement
      await this.eventBus.emit(SystemEvent.MISSION_ASSIGNED, organizationId, {
        missionId: dto.missionId,
        vehicleId,
        crewId,
        estimatedEta,
        score: result.recommended.score,
      });

      this.logger.log(
        `Mission ${dto.missionId} assignée → véhicule ${vehicleId} | ETA: ${estimatedEta} min`,
      );
    }

    return result;
  }

  async getAvailableVehicles(organizationId: string) {
    return this.prisma.vehicle.findMany({
      where: {
        organizationId,
        status: 'AVAILABLE' as any,
      },
      include: {
        crews: {
          where: { isActive: true },
          include: {
            members: { include: { user: true } },
          },
        },
      },
    });
  }

  async getDispatchStats(organizationId: string) {
    const [total, available, onMission, maintenance] = await Promise.all([
      this.prisma.vehicle.count({ where: { organizationId } }),
      this.prisma.vehicle.count({ where: { organizationId, status: 'AVAILABLE' as any } }),
      this.prisma.vehicle.count({ where: { organizationId, status: 'ON_MISSION' as any } }),
      this.prisma.vehicle.count({ where: { organizationId, status: 'MAINTENANCE' as any } }),
    ]);

    return { total, available, onMission, maintenance };
  }
}

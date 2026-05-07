import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto, MissionStatus } from './dto/update-mission.dto';
import { AssignMissionDto } from './dto/assign-mission.dto';

@Injectable()
export class MissionsService {
  private readonly logger = new Logger(MissionsService.name);

  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMissionDto, organizationId: string) {
    const mission = await this.prisma.mission.create({
      data: {
        organizationId,
        patientId: dto.patientId,
        address: dto.pickupAddress,
        notes: dto.notes,
        scheduledAt: new Date(dto.scheduledPickup),
        status: 'PENDING' as any,
        priority: dto.priority === 'P1' ? 1 : dto.priority === 'P2' ? 2 : dto.priority === 'P4' ? 4 : 3,
      },
      include: {
        patient: true,
        crew: { include: { members: { include: { user: true } } } },
      },
    });

    await this.prisma.missionEvent.create({
      data: {
        missionId: mission.id,
        type: 'MISSION_CREATED',
        data: { organizationId },
      },
    });

    this.logger.log(`Mission créée : ${mission.id}`);
    return mission;
  }

  async findAll(organizationId: string, status?: string) {
    return this.prisma.mission.findMany({
      where: {
        organizationId,
        ...(status && { status: status as any }),
      },
      include: {
        patient: true,
        crew: { include: { members: { include: { user: true } } } },
      },
      orderBy: { scheduledAt: 'asc' },
    });
  }

  async findOne(id: string, organizationId: string) {
    const mission = await this.prisma.mission.findFirst({
      where: { id, organizationId },
      include: {
        patient: true,
        crew: { include: { members: { include: { user: true } } } },
        events: { orderBy: { createdAt: 'asc' } },
        documents: true,
      },
    });

    if (!mission) throw new NotFoundException('Mission introuvable');
    return mission;
  }

  async assign(id: string, dto: AssignMissionDto, organizationId: string) {
    const mission = await this.findOne(id, organizationId);

    if (mission.status !== 'PENDING') {
      throw new BadRequestException('Mission déjà assignée');
    }

    const updated = await this.prisma.mission.update({
      where: { id },
      data: {
        crewId: dto.crewId,
        status: 'ASSIGNED' as any,
      },
    });

    await this.prisma.missionEvent.create({
      data: {
        missionId: id,
        type: 'MISSION_ASSIGNED',
        data: { crewId: dto.crewId, vehicleId: dto.vehicleId },
      },
    });

    this.logger.log(`Mission ${id} assignée à équipage ${dto.crewId}`);
    return updated;
  }

  async updateStatus(id: string, dto: UpdateMissionDto, organizationId: string, userId: string) {
    await this.findOne(id, organizationId);

    const updated = await this.prisma.mission.update({
      where: { id },
      data: {
        ...(dto.status && { status: dto.status as any }),
        ...(dto.actualPickup && { startedAt: new Date(dto.actualPickup) }),
        ...(dto.actualDropoff && { completedAt: new Date(dto.actualDropoff) }),
        ...(dto.notes && { notes: dto.notes }),
      },
    });

    if (dto.status) {
      await this.prisma.missionEvent.create({
        data: {
          missionId: id,
          type: 'STATUS_UPDATED',
          data: { newStatus: dto.status, updatedBy: userId },
        },
      });
    }

    if (dto.status === MissionStatus.VALIDATED) {
      this.logger.log(`Mission ${id} validée — pipeline facturation déclenché`);
    }

    return updated;
  }

  async getEvents(id: string, organizationId: string) {
    await this.findOne(id, organizationId);
    return this.prisma.missionEvent.findMany({
      where: { missionId: id },
      orderBy: { createdAt: 'asc' },
    });
  }
}

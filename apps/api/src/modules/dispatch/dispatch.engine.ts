import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DispatchRequestDto, Priority } from './dto/dispatch-request.dto';

export interface VehicleCandidate {
  vehicleId: string;
  crewId: string;
  score: number;
  estimatedEta: number;
  reasons: string[];
}

export interface DispatchResult {
  success: boolean;
  recommended: VehicleCandidate | null;
  alternatives: VehicleCandidate[];
  message: string;
}

@Injectable()
export class DispatchEngine {
  private readonly logger = new Logger(DispatchEngine.name);

  constructor(private prisma: PrismaService) {}

  async findBestVehicle(dto: DispatchRequestDto): Promise<DispatchResult> {
    this.logger.log(`Dispatch — mission ${dto.missionId} | priorité ${dto.priority || 'P3'}`);

    // 1. Récupérer tous les véhicules disponibles avec leur équipage
    const availableVehicles = await this.prisma.vehicle.findMany({
      where: {
        status: 'AVAILABLE' as any,
      },
      include: {
        crews: {
          where: { isActive: true },
          include: {
            members: {
              include: { user: true },
            },
          },
        },
        organization: true,
      },
    });

    if (availableVehicles.length === 0) {
      return {
        success: false,
        recommended: null,
        alternatives: [],
        message: 'Aucun véhicule disponible',
      };
    }

    // 2. Filtrer selon compatibilité type transport
    const compatible = availableVehicles.filter(v =>
      this.isVehicleCompatible(v, dto),
    );

    if (compatible.length === 0) {
      return {
        success: false,
        recommended: null,
        alternatives: [],
        message: 'Aucun véhicule compatible avec les besoins du patient',
      };
    }

    // 3. Scorer chaque véhicule
    const scored: VehicleCandidate[] = compatible.map(v => {
      const crew = v.crews[0];
      return this.scoreVehicle(v, crew, dto);
    });

    // 4. Trier par score décroissant
    scored.sort((a, b) => b.score - a.score);

    const recommended = scored[0];
    const alternatives = scored.slice(1, 3);

    this.logger.log(
      `Meilleur véhicule : ${recommended.vehicleId} (score: ${recommended.score})`,
    );

    return {
      success: true,
      recommended,
      alternatives,
      message: `Véhicule assigné automatiquement (score: ${recommended.score}/100)`,
    };
  }

  private isVehicleCompatible(vehicle: any, dto: DispatchRequestDto): boolean {
    const constraints = vehicle.constraints as any || {};

    // Vérifier oxygène
    if (dto.requiresOxygen && !constraints.hasOxygen) return false;

    // Vérifier brancard bariatrique si patient > 150kg
    if (dto.requiresStretcher && !constraints.hasStretcher) return false;

    // Vérifier type de transport
    if (dto.type === 'AMBULANCE_COUCHE' && vehicle.type !== 'AMBULANCE') return false;

    // Vérifier qu'il y a un équipage actif
    if (!vehicle.crews || vehicle.crews.length === 0) return false;

    return true;
  }

  private scoreVehicle(vehicle: any, crew: any, dto: DispatchRequestDto): VehicleCandidate {
    let score = 100;
    const reasons: string[] = [];

    // Critère 1 — Priorité mission (40 pts)
    const priority = dto.priority || Priority.P3;
    if (priority === Priority.P1 || priority === Priority.P2) {
      // Pour urgences, on privilégie la disponibilité
      score += 40;
      reasons.push('Véhicule disponible pour urgence');
    }

    // Critère 2 — Nombre de membres équipage (20 pts)
    const memberCount = crew?.members?.length || 0;
    if (memberCount >= 2) {
      score += 20;
      reasons.push(`Équipage complet (${memberCount} membres)`);
    } else if (memberCount === 1) {
      score += 10;
      reasons.push('Équipage partiel');
    }

    // Critère 3 — Type de véhicule adapté (20 pts)
    if (vehicle.type === 'AMBULANCE') {
      score += 20;
      reasons.push('Ambulance médicalisée');
    } else if (vehicle.type === 'VSL') {
      score += 10;
      reasons.push('VSL');
    }

    // Critère 4 — Équipements (20 pts)
    const constraints = vehicle.constraints as any || {};
    if (constraints.hasOxygen) {
      score += 5;
      reasons.push('Équipé O2');
    }
    if (constraints.hasDefibrillator) {
      score += 5;
      reasons.push('Équipé défibrillateur');
    }
    if (constraints.hasStretcher) {
      score += 10;
      reasons.push('Brancard disponible');
    }

    // ETA simulé (sera remplacé par calcul GPS réel)
    const estimatedEta = Math.floor(Math.random() * 15) + 5;

    return {
      vehicleId: vehicle.id,
      crewId: crew?.id || '',
      score: Math.min(score, 100),
      estimatedEta,
      reasons,
    };
  }

  async updateVehicleStatus(vehicleId: string, status: string): Promise<void> {
    await this.prisma.vehicle.update({
      where: { id: vehicleId },
      data: { status: status as any },
    });
  }
}

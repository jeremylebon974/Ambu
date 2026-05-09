import { Injectable, Logger, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { PdaLoginDto, PdaStatusDto, PdaGpsDto, PdaSignatureDto, PdaIncidentDto } from './dto/pda-auth.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class PdaService {
  private readonly logger = new Logger(PdaService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // ── AUTHENTIFICATION PDA ──────────────────────────────

  async login(dto: PdaLoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      include: { organization: true },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('Accès refusé');
    }

    if (!['AMBULANCIER', 'ADMIN', 'SUPER_ADMIN'].includes(user.role)) {
      throw new UnauthorizedException('Rôle non autorisé sur PDA');
    }

    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Identifiants incorrects');

    // Lier le véhicule à la session
    if (dto.vehicleId) {
      await this.prisma.vehicle.update({
        where: { id: dto.vehicleId },
        data: { status: 'AVAILABLE' as any },
      });
    }

    const token = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role,
      organizationId: user.organizationId,
      vehicleId: dto.vehicleId,
      deviceId: dto.deviceId,
    }, {
      secret: process.env.JWT_SECRET,
      expiresIn: '12h',
    });

    this.logger.log(`PDA Login: ${user.email} | véhicule: ${dto.vehicleId}`);

    return {
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        organizationId: user.organizationId,
      },
      vehicleId: dto.vehicleId,
    };
  }

  // ── MISSIONS DU JOUR ──────────────────────────────────

  async getMyMissions(userId: string, organizationId: string) {
    const crewMember = await this.prisma.crewMember.findFirst({
      where: { userId },
      include: { crew: true },
    });

    if (!crewMember) return [];

    return this.prisma.mission.findMany({
      where: {
        organizationId,
        crewId: crewMember.crewId,
        status: { notIn: ['CANCELLED'] as any },
      },
      include: {
        patient: true,
        events: {
          orderBy: { createdAt: 'desc' },
          take: 5,
        },
      },
      orderBy: { scheduledAt: 'asc' },
    });
  }

  // ── MISE A JOUR STATUT MISSION ────────────────────────

  async updateMissionStatus(dto: PdaStatusDto, userId: string, organizationId: string) {
    const mission = await this.prisma.mission.findFirst({
      where: { id: dto.missionId, organizationId },
    });

    if (!mission) throw new NotFoundException('Mission introuvable');

    await this.prisma.mission.update({
      where: { id: dto.missionId },
      data: { status: dto.status as any },
    });

    await this.prisma.missionEvent.create({
      data: {
        missionId: dto.missionId,
        type: 'STATUS_UPDATED' as any,
        data: {
          newStatus: dto.status,
          lat: dto.lat,
          lng: dto.lng,
          updatedBy: userId,
        },
      },
    });

    this.logger.log(`Mission ${dto.missionId} → ${dto.status} par ${userId}`);
    return { success: true, status: dto.status };
  }

  // ── GPS LIVE ──────────────────────────────────────────

  async updateGps(dto: PdaGpsDto, organizationId: string) {
    await this.prisma.gpsTrack.create({
      data: {
        vehicleId: dto.vehicleId,
        latitude: parseFloat(dto.lat),
        longitude: parseFloat(dto.lng),
        speed: parseFloat(dto.speed),
        heading: parseFloat(dto.heading),
      },
    });

    return { success: true };
  }

  // ── SIGNATURE PATIENT ─────────────────────────────────

  async saveSignature(dto: PdaSignatureDto, organizationId: string) {
    await this.prisma.missionEvent.create({
      data: {
        missionId: dto.missionId,
        type: 'PATIENT_SIGNED' as any,
        data: {
          signedBy: dto.signedBy,
          lat: dto.lat,
          lng: dto.lng,
          timestamp: new Date().toISOString(),
        },
      },
    });

    this.logger.log(`Signature enregistrée — mission ${dto.missionId}`);
    return { success: true };
  }

  // ── INCIDENT ──────────────────────────────────────────

  async reportIncident(dto: PdaIncidentDto, userId: string, organizationId: string) {
    await this.prisma.missionEvent.create({
      data: {
        missionId: dto.missionId,
        type: 'INCIDENT' as any,
        data: {
          type: dto.type,
          description: dto.description,
          lat: dto.lat,
          lng: dto.lng,
          reportedBy: userId,
          timestamp: new Date().toISOString(),
        },
      },
    });

    this.logger.log(`Incident signalé — mission ${dto.missionId} | type: ${dto.type}`);
    return { success: true };
  }

  // ── CHECKLIST ─────────────────────────────────────────

  async validateChecklist(missionId: string, items: string[], userId: string) {
    await this.prisma.missionEvent.create({
      data: {
        missionId,
        type: 'CHECKLIST_VALIDATED' as any,
        data: {
          items,
          validatedBy: userId,
          timestamp: new Date().toISOString(),
        },
      },
    });

    return { success: true };
  }
}

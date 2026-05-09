import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventBusService, SystemEvent } from '../../events/event-bus.service';
import { RegulatorRequestDto, RegulatorDecision, UrgencyLevel } from './dto/regulator.dto';

@Injectable()
export class AIRegulatorService {
  private readonly logger = new Logger(AIRegulatorService.name);
  private readonly claudeApiUrl = 'https://api.anthropic.com/v1/messages';

  constructor(
    private prisma: PrismaService,
    private eventBus: EventBusService,
  ) {}

  // ── ANALYSE DEMANDE ENTRANTE ──────────────────────────

  async analyzeRequest(dto: RegulatorRequestDto, organizationId: string): Promise<{
    decision: RegulatorDecision;
    missionId?: string;
    message: string;
  }> {
    this.logger.log(`AI Régulateur — analyse demande: ${dto.source || 'UNKNOWN'}`);

    // 1. Récupérer le contexte exploitation actuel
    const context = await this.getExploitationContext(organizationId);

    // 2. Analyser la demande avec Claude
    const decision = await this.callClaudeRegulator(dto, context);

    if (!decision) {
      return {
        decision: this.getDefaultDecision(),
        message: 'Analyse IA échouée — intervention humaine requise',
      };
    }

    // 3. Si dispatch automatique possible
    if (decision.autoDispatch && decision.confidence >= 80) {
      const missionId = await this.createMissionFromDecision(decision, organizationId);

      await this.eventBus.emit(SystemEvent.MISSION_CREATED, organizationId, {
        missionId,
        source: dto.source,
        aiGenerated: true,
        confidence: decision.confidence,
      });

      this.logger.log(`Mission créée automatiquement: ${missionId} | confiance: ${decision.confidence}%`);

      return {
        decision,
        missionId,
        message: `✅ Mission créée automatiquement (confiance IA: ${decision.confidence}%)`,
      };
    }

    // 4. Sinon → proposition au régulateur humain
    return {
      decision,
      message: `⚠️ Validation humaine requise (confiance IA: ${decision.confidence}%)`,
    };
  }

  // ── CONTEXTE EXPLOITATION ─────────────────────────────

  private async getExploitationContext(organizationId: string) {
    const [availableVehicles, activeMissions, pendingMissions] = await Promise.all([
      this.prisma.vehicle.count({
        where: { organizationId },
      }),
      this.prisma.mission.count({
        where: { organizationId },
      }),
      this.prisma.mission.count({
        where: { organizationId },
      }),
    ]);

    return {
      availableVehicles,
      activeMissions,
      pendingMissions,
      saturationLevel: this.calculateSaturation(availableVehicles, activeMissions),
      timestamp: new Date().toISOString(),
      hour: new Date().getHours(),
    };
  }

  private calculateSaturation(available: number, active: number): string {
    const total = available + active;
    if (total === 0) return 'CRITIQUE';
    const ratio = active / total;
    if (ratio >= 0.9) return 'CRITIQUE';
    if (ratio >= 0.7) return 'ELEVEE';
    if (ratio >= 0.5) return 'MODEREE';
    return 'FAIBLE';
  }

  // ── APPEL CLAUDE REGULATEUR ───────────────────────────

  private async callClaudeRegulator(
    dto: RegulatorRequestDto,
    context: any,
  ): Promise<RegulatorDecision | null> {
    const prompt = `Tu es un régulateur ambulancier expert avec 20 ans d'expérience dans les transports sanitaires français.

DEMANDE REÇUE:
Source: ${dto.source || 'INCONNUE'}
Demande brute: "${dto.rawRequest}"
${dto.patientName ? `Patient: ${dto.patientName}` : ''}
${dto.patientAddress ? `Adresse: ${dto.patientAddress}` : ''}
${dto.destination ? `Destination: ${dto.destination}` : ''}
${dto.samuRef ? `Référence SAMU: ${dto.samuRef}` : ''}
${dto.callerPhone ? `Téléphone appelant: ${dto.callerPhone}` : ''}

CONTEXTE EXPLOITATION:
- Véhicules disponibles: ${context.availableVehicles}
- Missions en cours: ${context.activeMissions}
- Missions en attente: ${context.pendingMissions}
- Saturation flotte: ${context.saturationLevel}
- Heure: ${context.hour}h

MISSION:
1. Analyse la demande et extrais toutes les informations pertinentes
2. Détermine le niveau d'urgence réel (pas celui déclaré)
3. Choisis le type de transport adapté (AMBULANCE_ASSIS, AMBULANCE_COUCHE, VSL, TAXI)
4. Détermine la priorité (P1=urgence vitale, P2=urgent, P3=normal, P4=planifié)
5. Identifie les besoins médicaux spéciaux
6. Détermine si le dispatch peut être automatique ou nécessite validation humaine
7. Donne un score de confiance (0-100)

RÈGLES FRANÇAISES:
- P1: risque vital immédiat → dispatch immédiat obligatoire
- P2: urgence relative → dispatch dans 15 min
- P3: transport normal → planification possible
- Toujours vérifier la prescription médicale pour VSL
- Bariatrie > 150kg → brancard bariatrique obligatoire
- Oxygène → ambulance médicalisée uniquement

Réponds UNIQUEMENT en JSON valide:
{
  "urgencyLevel": "IMMEDIATE|URGENT|NORMAL|PLANIFIED",
  "transportType": "AMBULANCE_ASSIS|AMBULANCE_COUCHE|VSL|TAXI",
  "priority": "P1|P2|P3|P4",
  "patientName": "nom extrait ou INCONNU",
  "patientAddress": "adresse extraite ou INCONNUE",
  "destination": "destination extraite ou INCONNUE",
  "medicalNeeds": ["besoin1", "besoin2"],
  "estimatedDuration": 45,
  "requiresOxygen": false,
  "requiresStretcher": false,
  "isUrgent": false,
  "ngapCode": "AMB|VSL",
  "reasoning": "Explication détaillée en français",
  "confidence": 85,
  "autoDispatch": true
}`;

    try {
      this.logger.log(`Appel Claude API — clé présente: ${!!process.env.ANTHROPIC_API_KEY}`);
      const response = await fetch(this.claudeApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY || '',
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-5',
          max_tokens: 1500,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      if (!response.ok) {
        this.logger.error(`Claude API error: ${response.status}`);
        return null;
      }

      const data = await response.json() as any;
      const text = data.content?.[0]?.text || '';
      const clean = text.replace(/```json|```/g, '').trim();
      return JSON.parse(clean) as RegulatorDecision;

    } catch (error) {
      this.logger.error('Erreur Claude Régulateur', JSON.stringify(error));
      return null;
    }
  }

  // ── CRÉATION MISSION AUTOMATIQUE ──────────────────────

  private async createMissionFromDecision(
    decision: RegulatorDecision,
    organizationId: string,
  ): Promise<string> {
    const mission = await this.prisma.mission.create({
      data: {
        organizationId,
        status: 'PENDING' as any,
        priority: decision.priority as any,
        address: `${decision.patientAddress} → ${decision.destination}`,
        notes: `IA: ${decision.reasoning}`,
      },
    });

    return mission.id;
  }

  // ── DÉCISION PAR DÉFAUT ───────────────────────────────

  private getDefaultDecision(): RegulatorDecision {
    return {
      urgencyLevel: UrgencyLevel.NORMAL,
      transportType: 'AMBULANCE_ASSIS',
      priority: 'P3',
      patientName: 'INCONNU',
      patientAddress: 'INCONNUE',
      destination: 'INCONNUE',
      medicalNeeds: [],
      estimatedDuration: 60,
      requiresOxygen: false,
      requiresStretcher: false,
      isUrgent: false,
      ngapCode: 'AMB',
      reasoning: 'Analyse IA indisponible',
      confidence: 0,
      autoDispatch: false,
    };
  }

  // ── ANALYSE FLOTTE EN TEMPS REEL ──────────────────────

  async getFleetStatus(organizationId: string) {
    const [vehicles, missions] = await Promise.all([
      this.prisma.vehicle.findMany({
        where: { organizationId },
        include: {
          crews: {
            where: { isActive: true },
            include: { members: { include: { user: true } } },
          },
        },
      }),
      this.prisma.mission.findMany({
        where: {
          organizationId,
          status: { notIn: ['COMPLETED', 'VALIDATED', 'CANCELLED'] as any },
        },
        include: { patient: true },
        orderBy: { createdAt: 'desc' },
        take: 20,
      }),
    ]);

    return {
      vehicles,
      missions,
      stats: {
        totalVehicles: vehicles.length,
        available: vehicles.filter((v: any) => v.status === 'AVAILABLE').length,
        onMission: vehicles.filter((v: any) => v.status === 'ON_MISSION').length,
        activeMissions: missions.length,
      },
    };
  }
}

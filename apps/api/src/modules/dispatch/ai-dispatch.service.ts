import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DispatchRequestDto } from './dto/dispatch-request.dto';
import { DispatchResult, VehicleCandidate } from './dispatch.engine';

interface AIDecision {
  vehicleId: string;
  crewId: string;
  score: number;
  reasoning: string;
  warnings: string[];
  alternatives: { vehicleId: string; reason: string }[];
}

@Injectable()
export class AIDispatchService {
  private readonly logger = new Logger(AIDispatchService.name);
  private readonly claudeApiUrl = 'https://api.anthropic.com/v1/messages';

  constructor(private prisma: PrismaService) {}

  async dispatch(dto: DispatchRequestDto, organizationId: string): Promise<DispatchResult> {
    this.logger.log(`AI Dispatch — mission ${dto.missionId}`);

    // 1. Collecter toutes les données nécessaires
    const [vehicles, mission] = await Promise.all([
      this.getAvailableVehicles(organizationId),
      this.getMissionDetails(dto.missionId, organizationId),
    ]);

    if (vehicles.length === 0) {
      return {
        success: false,
        recommended: null,
        alternatives: [],
        message: 'Aucun véhicule disponible',
      };
    }

    // 2. Construire le prompt pour Claude
    const prompt = this.buildDispatchPrompt(dto, vehicles, mission);

    // 3. Appeler Claude API
    const decision = await this.callClaudeAPI(prompt);

    if (!decision) {
      return {
        success: false,
        recommended: null,
        alternatives: [],
        message: 'Erreur IA — dispatch manuel requis',
      };
    }

    // 4. Construire le résultat
    const recommended: VehicleCandidate = {
      vehicleId: decision.vehicleId,
      crewId: decision.crewId,
      score: decision.score,
      estimatedEta: 10,
      reasons: [decision.reasoning, ...decision.warnings],
    };

    const alternatives: VehicleCandidate[] = decision.alternatives.map(alt => ({
      vehicleId: alt.vehicleId,
      crewId: '',
      score: 0,
      estimatedEta: 0,
      reasons: [alt.reason],
    }));

    this.logger.log(`IA Decision: véhicule ${decision.vehicleId} | score: ${decision.score}`);

    return {
      success: true,
      recommended,
      alternatives,
      message: `IA: ${decision.reasoning}`,
    };
  }

  private async getAvailableVehicles(organizationId: string) {
    return this.prisma.vehicle.findMany({
      where: { organizationId, status: 'AVAILABLE' as any },
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

  private async getMissionDetails(missionId: string, organizationId: string) {
    return this.prisma.mission.findFirst({
      where: { id: missionId, organizationId },
      include: { patient: true },
    });
  }

  private buildDispatchPrompt(dto: DispatchRequestDto, vehicles: any[], mission: any): string {
    const vehiclesList = vehicles.map((v, i) => {
      const crew = v.crews[0];
      const memberCount = crew?.members?.length || 0;
      const constraints = v.constraints as any || {};
      return `
Véhicule ${i + 1}:
- ID: ${v.id}
- Plaque: ${v.plate}
- Type: ${v.type}
- Équipage ID: ${crew?.id || 'aucun'}
- Membres équipage: ${memberCount}
- Oxygène: ${constraints.hasOxygen ? 'oui' : 'non'}
- Brancard bariatrique: ${constraints.hasStretcher ? 'oui' : 'non'}
- Défibrillateur: ${constraints.hasDefibrillator ? 'oui' : 'non'}
- Hauteur: ${constraints.height || 'inconnue'}m
- Contraintes lieux interdits: ${JSON.stringify(constraints.restrictedLocations || [])}`;
    }).join('\n');

    const patientInfo = mission?.patient ? `
Patient:
- Nom: ${mission.patient.lastName} ${mission.patient.firstName}
- NSS: ${mission.patient.nss || 'non renseigné'}
- Mobilité: ${mission.patient.mobility || 'non renseignée'}` : 'Patient: non renseigné';

    return `Tu es un régulateur ambulancier expert avec 20 ans d'expérience.
Analyse cette demande de transport et choisis le meilleur véhicule disponible.

MISSION:
- ID: ${dto.missionId}
- Type transport: ${dto.type}
- Priorité: ${dto.priority || 'P3'}
- Urgence: ${dto.isUrgent ? 'OUI' : 'non'}
- Adresse prise en charge: ${dto.pickupAddress}
- Adresse destination: ${dto.dropoffAddress}
- Oxygène requis: ${dto.requiresOxygen ? 'OUI' : 'non'}
- Brancard requis: ${dto.requiresStretcher ? 'OUI' : 'non'}

${patientInfo}

VÉHICULES DISPONIBLES:
${vehiclesList}

INSTRUCTIONS:
1. Analyse chaque véhicule selon les besoins de la mission
2. Vérifie la compatibilité équipements/patient
3. Prends en compte la priorité et l'urgence
4. Choisis le MEILLEUR véhicule
5. Donne un score de 0 à 100
6. Signale tout risque ou problème détecté

Réponds UNIQUEMENT en JSON valide avec cette structure exacte:
{
  "vehicleId": "id_du_vehicule_choisi",
  "crewId": "id_equipage_choisi",
  "score": 85,
  "reasoning": "Explication en français en 1-2 phrases",
  "warnings": ["avertissement 1 si applicable"],
  "alternatives": [
    {"vehicleId": "id_alternatif", "reason": "raison courte"}
  ]
}`;
  }

  private async callClaudeAPI(prompt: string): Promise<AIDecision | null> {
    try {
      const response = await fetch(this.claudeApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
          'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
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
      const decision = JSON.parse(clean) as AIDecision;

      return decision;
    } catch (error) {
      this.logger.error('Erreur appel Claude API', error);
      return null;
    }
  }
}

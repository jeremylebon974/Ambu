import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../modules/prisma/prisma.service';
import { EventBusService, SystemEvent } from '../events/event-bus.service';

interface ComplianceCheck {
  rule: string;
  passed: boolean;
  message: string;
  severity: 'blocking' | 'warning';
}

@Injectable()
@Processor('compliance-queue')
export class ComplianceWorker extends WorkerHost {
  private readonly logger = new Logger(ComplianceWorker.name);

  constructor(
    private prisma: PrismaService,
    private eventBus: EventBusService,
  ) {
    super();
  }

  async process(job: Job): Promise<any> {
    const { data, organizationId } = job.data;
    const { missionId } = data;

    this.logger.log(`ComplianceWorker — mission ${missionId}`);

    const mission = await this.prisma.mission.findFirst({
      where: { id: missionId },
      include: { patient: true },
    });

    if (!mission) return { success: false };

    const checks: ComplianceCheck[] = [
      this.checkSignature(mission),
      this.checkTimings(mission),
      this.checkPatient(mission.patient),
      this.checkKm(mission),
    ];

    const blockingFailures = checks.filter(c => !c.passed && c.severity === 'blocking');
    const passed = blockingFailures.length === 0;
    const score = Math.round((checks.filter(c => c.passed).length / checks.length) * 100);

    if (!passed) {
      await this.eventBus.emit(SystemEvent.ANOMALY_DETECTED, organizationId, {
        missionId,
        anomalies: blockingFailures,
      });
      this.logger.warn(`Anomalies détectées — mission ${missionId}`);
    } else {
      await this.eventBus.emit(SystemEvent.INVOICE_READY, organizationId, {
        missionId,
      });
      this.logger.log(`Conformité OK — mission ${missionId} score: ${score}%`);
    }

    return { passed, score, checks };
  }

  private checkSignature(mission: any): ComplianceCheck {
    const ok = !!mission.patientSignature;
    return {
      rule: 'SIGNATURE_PATIENT',
      passed: ok,
      message: ok ? 'Signature présente' : 'Signature patient manquante',
      severity: 'blocking',
    };
  }

  private checkTimings(mission: any): ComplianceCheck {
    const ok = !!mission.actualPickup && !!mission.actualDropoff;
    return {
      rule: 'TIMINGS',
      passed: ok,
      message: ok ? 'Horaires réels présents' : 'Horaires réels manquants',
      severity: 'blocking',
    };
  }

  private checkPatient(patient: any): ComplianceCheck {
    const nssRegex = /^[12][0-9]{14}$/;
    const ok = patient && nssRegex.test((patient.nss || '').replace(/\s/g, ''));
    return {
      rule: 'NSS_VALID',
      passed: ok,
      message: ok ? 'N° Sécu valide' : 'N° Sécu invalide ou manquant',
      severity: 'blocking',
    };
  }

  private checkKm(mission: any): ComplianceCheck {
    const ok = !!mission.actualKm && mission.actualKm > 0;
    return {
      rule: 'KM_REEL',
      passed: ok,
      message: ok ? `${mission.actualKm} km enregistrés` : 'Kilométrage réel manquant',
      severity: 'warning',
    };
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

export enum SystemEvent {
  MISSION_CREATED     = 'mission.created',
  MISSION_ASSIGNED    = 'mission.assigned',
  MISSION_VALIDATED   = 'mission.validated',
  MISSION_CANCELLED   = 'mission.cancelled',
  ANOMALY_DETECTED    = 'anomaly.detected',
  INVOICE_PREPARED    = 'invoice.prepared',
  INVOICE_READY       = 'invoice.ready',
  CPAM_READY          = 'cpam.ready',
  GPS_UPDATE          = 'vehicle.gps_update',
}

export interface EventPayload {
  event: SystemEvent;
  organizationId: string;
  data: Record<string, any>;
  timestamp: Date;
}

@Injectable()
export class EventBusService {
  private readonly logger = new Logger(EventBusService.name);

  constructor(
    @InjectQueue('sync-queue')        private syncQueue: Queue,
    @InjectQueue('dossier-queue')     private dossierQueue: Queue,
    @InjectQueue('compliance-queue')  private complianceQueue: Queue,
    @InjectQueue('invoice-queue')     private invoiceQueue: Queue,
    @InjectQueue('notification-queue') private notifQueue: Queue,
  ) {}

  async emit(event: SystemEvent, organizationId: string, data: Record<string, any>): Promise<void> {
    const payload: EventPayload = {
      event,
      organizationId,
      data,
      timestamp: new Date(),
    };

    this.logger.log(`Event: ${event} | Org: ${organizationId}`);

    await this.routeToQueues(event, payload);
  }

  private async routeToQueues(event: SystemEvent, payload: EventPayload): Promise<void> {
    switch (event) {
      case SystemEvent.MISSION_VALIDATED:
        await Promise.all([
          this.syncQueue.add('sync-mission-data', payload, {
            priority: 1,
            attempts: 3,
            backoff: { type: 'exponential', delay: 2000 },
          }),
          this.dossierQueue.add('create-dossier', payload, {
            priority: 1,
            attempts: 3,
            backoff: { type: 'exponential', delay: 2000 },
          }),
        ]);
        break;

      case SystemEvent.INVOICE_PREPARED:
        await this.complianceQueue.add('check-compliance', payload, {
          priority: 1,
          attempts: 2,
        });
        break;

      case SystemEvent.INVOICE_READY:
        await this.invoiceQueue.add('generate-invoice', payload, {
          priority: 2,
          attempts: 3,
        });
        break;

      case SystemEvent.ANOMALY_DETECTED:
        await Promise.all([
          this.notifQueue.add('alert-admin', payload, { priority: 1 }),
          this.notifQueue.add('update-dashboard', payload, { priority: 2 }),
        ]);
        break;

      case SystemEvent.CPAM_READY:
        await this.notifQueue.add('cpam-transmission', payload, {
          priority: 2,
          attempts: 5,
          backoff: { type: 'exponential', delay: 5000 },
        });
        break;

      default:
        this.logger.warn(`Événement non routé : ${event}`);
    }
  }
}

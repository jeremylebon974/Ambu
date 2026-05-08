import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { SyncWorker } from './sync.worker';
import { ComplianceWorker } from './compliance.worker';
import { InvoiceWorker } from './invoice.worker';
import { NotificationWorker } from './notification.worker';
import { PrismaService } from '../modules/prisma/prisma.service';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [
    EventsModule,
    BullModule.registerQueue(
      { name: 'sync-queue' },
      { name: 'dossier-queue' },
      { name: 'compliance-queue' },
      { name: 'invoice-queue' },
      { name: 'notification-queue' },
    ),
  ],
  providers: [
    SyncWorker,
    ComplianceWorker,
    InvoiceWorker,
    NotificationWorker,
    PrismaService,
  ],
  exports: [EventsModule],
})
export class WorkersModule {}

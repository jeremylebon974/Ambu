import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { EventBusService } from './event-bus.service';

@Module({
  imports: [
    BullModule.registerQueue(
      { name: 'sync-queue' },
      { name: 'dossier-queue' },
      { name: 'compliance-queue' },
      { name: 'invoice-queue' },
      { name: 'notification-queue' },
    ),
  ],
  providers: [EventBusService],
  exports: [EventBusService],
})
export class EventsModule {}

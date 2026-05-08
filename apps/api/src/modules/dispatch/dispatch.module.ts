import { Module } from '@nestjs/common';
import { DispatchController } from './dispatch.controller';
import { DispatchService } from './dispatch.service';
import { DispatchEngine } from './dispatch.engine';
import { PrismaService } from '../prisma/prisma.service';
import { EventsModule } from '../../events/events.module';

@Module({
  imports: [EventsModule],
  controllers: [DispatchController],
  providers: [DispatchService, DispatchEngine, PrismaService],
  exports: [DispatchService, DispatchEngine],
})
export class DispatchModule {}

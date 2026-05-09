import { Module } from '@nestjs/common';
import { DispatchController } from './dispatch.controller';
import { DispatchService } from './dispatch.service';
import { DispatchEngine } from './dispatch.engine';
import { AIDispatchService } from './ai-dispatch.service';
import { PrismaService } from '../prisma/prisma.service';
import { EventsModule } from '../../events/events.module';

@Module({
  imports: [EventsModule],
  controllers: [DispatchController],
  providers: [DispatchService, DispatchEngine, AIDispatchService, PrismaService],
  exports: [DispatchService, DispatchEngine, AIDispatchService],
})
export class DispatchModule {}

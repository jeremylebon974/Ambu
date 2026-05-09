import { Module } from '@nestjs/common';
import { AIRegulatorController } from './ai-regulator.controller';
import { AIRegulatorService } from './ai-regulator.service';
import { PrismaService } from '../prisma/prisma.service';
import { EventsModule } from '../../events/events.module';

@Module({
  imports: [EventsModule],
  controllers: [AIRegulatorController],
  providers: [AIRegulatorService, PrismaService],
  exports: [AIRegulatorService],
})
export class AIRegulatorModule {}

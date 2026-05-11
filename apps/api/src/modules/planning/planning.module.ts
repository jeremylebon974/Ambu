import { Module } from '@nestjs/common';
import { PlanningController } from './planning.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PlanningController],
  providers: [PrismaService],
})
export class PlanningModule {}

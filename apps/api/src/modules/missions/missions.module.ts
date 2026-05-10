import { Module } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { MissionsController } from './missions.controller';
import { VehiclesController } from './vehicles.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MissionsController, VehiclesController],
  providers: [MissionsService, PrismaService],
  exports: [MissionsService],
})
export class MissionsModule {}
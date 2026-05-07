import { Module } from '@nestjs/common';
import { MissionsController } from './missions.controller';
import { MissionsService } from './missions.service';
import { MissionsGateway } from './missions.gateway';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MissionsController],
  providers: [MissionsService, MissionsGateway, PrismaService],
  exports: [MissionsService, MissionsGateway],
})
export class MissionsModule {}

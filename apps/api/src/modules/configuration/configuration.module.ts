import { Module } from '@nestjs/common';
import { ConfigurationController } from './configuration.controller';
import { ConfigurationService } from './configuration.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ConfigurationController],
  providers: [ConfigurationService, PrismaService],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}

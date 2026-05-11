import { Module } from '@nestjs/common';
import { PresenceController } from './presence.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PresenceController],
  providers: [PrismaService],
})
export class PresenceModule {}

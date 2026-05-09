import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PdaController } from './pda.controller';
import { PdaService } from './pda.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'dev-secret',
      signOptions: { expiresIn: '12h' },
    }),
  ],
  controllers: [PdaController],
  providers: [PdaService, PrismaService],
  exports: [PdaService],
})
export class PdaModule {}

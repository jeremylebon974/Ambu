import { Controller, Get, Post, Body, Param, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@Controller('pda-devices')
export class PdaDeviceController {
  constructor(private prisma: PrismaService) {}

  // GET /pda-devices — liste tous les PDA (protégé)
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req: any) {
    return this.prisma.pda.findMany({
      where: { organizationId: req.user.organizationId },
      include: {
        vehicle: { select: { plate: true, type: true, status: true } },
        currentUser: { select: { firstName: true, lastName: true, role: true } },
      },
      orderBy: { reference: 'asc' },
    });
  }

  // GET /pda-devices/:reference — infos d'un PDA
  @UseGuards(JwtAuthGuard)
  @Get(':reference')
  async findOne(@Param('reference') reference: string, @Request() req: any) {
    return this.prisma.pda.findFirst({
      where: { reference, organizationId: req.user.organizationId },
      include: {
        vehicle: { select: { plate: true, type: true, status: true, metadata: true } },
        currentUser: { select: { firstName: true, lastName: true, role: true } },
      },
    });
  }

  // POST /pda-devices/:reference/connect — ambulancier se connecte sur un PDA
  @UseGuards(JwtAuthGuard)
  @Post(':reference/connect')
  async connect(@Param('reference') reference: string, @Request() req: any) {
    const pda = await this.prisma.pda.findFirst({
      where: { reference, organizationId: req.user.organizationId },
    });

    if (!pda) throw new Error('PDA non trouvé');

    return this.prisma.pda.update({
      where: { id: pda.id },
      data: {
        currentUserId: req.user.id,
        lastSeen: new Date(),
      },
      include: {
        vehicle: { select: { plate: true, type: true } },
      },
    });
  }

  // POST /pda-devices/:reference/disconnect — ambulancier se déconnecte
  @UseGuards(JwtAuthGuard)
  @Post(':reference/disconnect')
  async disconnect(@Param('reference') reference: string, @Request() req: any) {
    const pda = await this.prisma.pda.findFirst({
      where: { reference, organizationId: req.user.organizationId },
    });

    if (!pda) throw new Error('PDA non trouvé');

    return this.prisma.pda.update({
      where: { id: pda.id },
      data: { currentUserId: null, lastSeen: new Date() },
    });
  }

  // POST /pda-devices/:reference/heartbeat — PDA envoie son heartbeat
  @UseGuards(JwtAuthGuard)
  @Post(':reference/heartbeat')
  async heartbeat(@Param('reference') reference: string, @Request() req: any) {
    const pda = await this.prisma.pda.findFirst({
      where: { reference, organizationId: req.user.organizationId },
    });

    if (!pda) throw new Error('PDA non trouvé');

    return this.prisma.pda.update({
      where: { id: pda.id },
      data: { lastSeen: new Date() },
    });
  }
}

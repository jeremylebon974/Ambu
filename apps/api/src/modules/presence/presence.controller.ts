import { Controller, Post, Get, Delete, Body, Query, Request, UseGuards, HttpCode, HttpStatus, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

const FRESHNESS_MS = 30_000;

@Controller('presence')
export class PresenceController {
  constructor(private prisma: PrismaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.OK)
  async upsert(@Body() body: { pathname: string }, @Request() req: any) {
    if (!body?.pathname) throw new BadRequestException('pathname requis');
    const userId = req.user.id;
    const role = req.user.role;
    const organizationId = req.user.organizationId;

    return this.prisma.presence.upsert({
      where: { userId },
      update: { pathname: body.pathname, role, lastSeen: new Date() },
      create: { userId, pathname: body.pathname, role, organizationId },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async checkAdminPresence(@Query('pathname') pathname: string, @Request() req: any) {
    if (!pathname) throw new BadRequestException('pathname requis');
    const threshold = new Date(Date.now() - FRESHNESS_MS);
    const presence = await this.prisma.presence.findFirst({
      where: {
        pathname,
        organizationId: req.user.organizationId,
        role: { in: ['ADMIN', 'SUPER_ADMIN'] },
        lastSeen: { gte: threshold },
        userId: { not: req.user.id },
      },
      select: { userId: true, role: true, lastSeen: true, pathname: true },
    });
    return { active: !!presence, presence };
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  @HttpCode(HttpStatus.OK)
  async delete(@Request() req: any) {
    await this.prisma.presence.deleteMany({ where: { userId: req.user.id } });
    return { ok: true };
  }
}

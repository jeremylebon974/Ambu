import { Controller, Get, Post, Delete, Body, Query, Param, Request, UseGuards, HttpCode, HttpStatus, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('planning')
@UseGuards(JwtAuthGuard)
export class PlanningController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findByMonth(
    @Query('month') month: string,
    @Query('userId') userId: string | undefined,
    @Request() req: any,
  ) {
    if (!month || !/^\d{4}-\d{2}$/.test(month)) {
      throw new BadRequestException('month requis au format YYYY-MM');
    }
    const [year, m] = month.split('-').map(Number);
    const start = new Date(Date.UTC(year, m - 1, 1));
    const end = new Date(Date.UTC(year, m, 1));

    return this.prisma.planning.findMany({
      where: {
        organizationId: req.user.organizationId,
        date: { gte: start, lt: end },
        ...(userId ? { userId } : {}),
      },
      include: {
        user: { select: { id: true, firstName: true, lastName: true, role: true } },
      },
      orderBy: [{ date: 'asc' }, { userId: 'asc' }],
    });
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async upsert(
    @Body() body: { userId: string; date: string; code: string; note?: string; startTime?: string; endTime?: string },
    @Request() req: any,
  ) {
    if (!body?.userId || !body?.date || !body?.code) {
      throw new BadRequestException('userId, date, code requis');
    }
    const date = new Date(body.date);
    if (isNaN(date.getTime())) throw new BadRequestException('date invalide');

    const target = await this.prisma.user.findUnique({ where: { id: body.userId } });
    if (!target) throw new NotFoundException('Utilisateur introuvable');
    if (target.organizationId !== req.user.organizationId) {
      throw new ForbiddenException('Utilisateur hors organisation');
    }

    return this.prisma.planning.upsert({
      where: { userId_date: { userId: body.userId, date } },
      update: {
        code: body.code,
        note: body.note,
        startTime: body.startTime,
        endTime: body.endTime,
        validatedBy: null,
        validatedAt: null,
      },
      create: {
        userId: body.userId,
        organizationId: req.user.organizationId,
        date,
        code: body.code,
        note: body.note,
        startTime: body.startTime,
        endTime: body.endTime,
      },
    });
  }

  @Post('validate')
  @HttpCode(HttpStatus.OK)
  async validateMonth(
    @Body() body: { month: string; userIds?: string[] },
    @Request() req: any,
  ) {
    if (!body?.month || !/^\d{4}-\d{2}$/.test(body.month)) {
      throw new BadRequestException('month requis au format YYYY-MM');
    }
    if (req.user.role !== 'ADMIN' && req.user.role !== 'SUPER_ADMIN') {
      throw new ForbiddenException('Seul un administrateur peut valider');
    }
    const [year, m] = body.month.split('-').map(Number);
    const start = new Date(Date.UTC(year, m - 1, 1));
    const end = new Date(Date.UTC(year, m, 1));

    const result = await this.prisma.planning.updateMany({
      where: {
        organizationId: req.user.organizationId,
        date: { gte: start, lt: end },
        ...(body.userIds && body.userIds.length > 0 ? { userId: { in: body.userIds } } : {}),
      },
      data: {
        validatedBy: req.user.id,
        validatedAt: new Date(),
      },
    });

    return { validated: result.count, month: body.month };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: string, @Request() req: any) {
    const entry = await this.prisma.planning.findUnique({ where: { id } });
    if (!entry) throw new NotFoundException('Poste introuvable');
    if (entry.organizationId !== req.user.organizationId) {
      throw new ForbiddenException('Poste hors organisation');
    }
    await this.prisma.planning.delete({ where: { id } });
    return { ok: true };
  }
}

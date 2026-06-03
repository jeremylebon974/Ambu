import { Controller, Get, Post, Patch, Delete, Body, Param, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@UseGuards(JwtAuthGuard)
@Controller('vehicles')
export class VehiclesController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findAll(@Request() req: any) {
    return this.prisma.vehicle.findMany({
      where: { organizationId: req.user.organizationId, isActive: true },
      select: { id: true, plate: true, type: true, status: true, metadata: true },
      orderBy: { plate: 'asc' },
    });
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: any, @Request() req: any) {
    return this.prisma.vehicle.create({
      data: {
        plate:          body.numero,
        model:          body.type,
        type:           body.type,
        metadata:       { diplomeRequis: body.diplomeRequis, equipements: body.equipements, ...(body.imageUrl ? { imageUrl: body.imageUrl } : {}) },
        organizationId: req.user.organizationId,
      },
      select: { id: true, plate: true, type: true, status: true, metadata: true },
    });
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() body: any, @Request() req: any) {
    const vehicle = await this.prisma.vehicle.findFirst({ where: { id, organizationId: req.user.organizationId } });
    if (!vehicle) return { error: 'Not found' };
    const currentMeta = (vehicle.metadata as Record<string, any>) ?? {};
    return this.prisma.vehicle.update({
      where: { id },
      data: {
        metadata: {
          ...currentMeta,
          ...(body.kmActuel !== undefined ? { kmActuel: body.kmActuel } : {}),
          ...(body.etat !== undefined   ? { etat: body.etat }         : {}),
        },
      },
      select: { id: true, plate: true, type: true, status: true, metadata: true },
    });
  }

  @Get('entretiens')
  async getEntretiens(@Request() req: any) {
    try {
      const vehicles = await this.prisma.vehicle.findMany({
        where: { organizationId: req.user.organizationId, isActive: true },
        select: { id: true },
      });
      const ids = vehicles.map(v => v.id);
      return await (this.prisma as any).vehicleEntretien.findMany({
        where: { vehicleId: { in: ids }, done: false },
        include: { vehicle: { select: { plate: true } } },
        orderBy: { datePrevu: 'asc' },
        take: 20,
      });
    } catch {
      return [];
    }
  }

  @Post(':id/entretiens')
  @HttpCode(HttpStatus.CREATED)
  async addEntretien(@Param('id') id: string, @Body() body: any, @Request() req: any) {
    try {
      return await (this.prisma as any).vehicleEntretien.create({
        data: {
          vehicleId: id,
          type:      body.type,
          datePrevu: new Date(body.datePrevu),
          kmPrevu:   body.kmPrevu ? parseInt(body.kmPrevu) : null,
        },
      });
    } catch {
      return { error: 'Migration non appliquée — relancez npx prisma migrate dev' };
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string, @Request() req: any) {
    await this.prisma.vehicle.deleteMany({
      where: { id, organizationId: req.user.organizationId },
    });
    return { message: 'Véhicule supprimé' };
  }
}

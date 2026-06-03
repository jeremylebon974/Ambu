import { Controller, Get, Post, Delete, Body, Param, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
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

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string, @Request() req: any) {
    await this.prisma.vehicle.deleteMany({
      where: { id, organizationId: req.user.organizationId },
    });
    return { message: 'Véhicule supprimé' };
  }
}

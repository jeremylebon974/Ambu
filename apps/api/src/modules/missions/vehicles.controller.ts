import { Controller, Get, Request, UseGuards } from '@nestjs/common';
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
}

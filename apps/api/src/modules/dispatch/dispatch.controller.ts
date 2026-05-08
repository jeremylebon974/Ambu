import { Controller, Post, Get, Body, Request, UseGuards } from '@nestjs/common';
import { DispatchService } from './dispatch.service';
import { DispatchRequestDto } from './dto/dispatch-request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@UseGuards(JwtAuthGuard)
@Controller('dispatch')
export class DispatchController {
  constructor(private dispatchService: DispatchService) {}

  // POST /dispatch — lancer le dispatch automatique
  @Post()
  @Roles('REGULATEUR', 'ADMIN', 'SUPER_ADMIN')
  async dispatch(@Body() dto: DispatchRequestDto, @Request() req: any) {
    return this.dispatchService.dispatch(dto, req.user.organizationId);
  }

  // GET /dispatch/vehicles — véhicules disponibles
  @Get('vehicles')
  async getAvailableVehicles(@Request() req: any) {
    return this.dispatchService.getAvailableVehicles(req.user.organizationId);
  }

  // GET /dispatch/stats — statistiques flotte
  @Get('stats')
  async getStats(@Request() req: any) {
    return this.dispatchService.getDispatchStats(req.user.organizationId);
  }
}

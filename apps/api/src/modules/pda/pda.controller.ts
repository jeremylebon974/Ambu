import { Controller, Post, Get, Body, Request, Query, UseGuards, Patch } from '@nestjs/common';
import { PdaService } from './pda.service';
import { PdaLoginDto, PdaStatusDto, PdaGpsDto, PdaSignatureDto, PdaIncidentDto } from './dto/pda-auth.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';

@Controller('pda')
export class PdaController {
  constructor(private pdaService: PdaService) {}

  // POST /pda/login — connexion ambulancier
  @Public()
  @Post('login')
  async login(@Body() dto: PdaLoginDto) {
    return this.pdaService.login(dto);
  }

  // GET /pda/missions — missions du jour
  @UseGuards(JwtAuthGuard)
  @Get('missions')
  async getMyMissions(@Request() req: any) {
    return this.pdaService.getMyMissions(req.user.id, req.user.organizationId);
  }

  // PATCH /pda/mission/status — changer statut mission
  @UseGuards(JwtAuthGuard)
  @Patch('mission/status')
  async updateStatus(@Body() dto: PdaStatusDto, @Request() req: any) {
    return this.pdaService.updateMissionStatus(dto, req.user.id, req.user.organizationId);
  }

  // POST /pda/gps — position GPS live
  @UseGuards(JwtAuthGuard)
  @Post('gps')
  async updateGps(@Body() dto: PdaGpsDto, @Request() req: any) {
    return this.pdaService.updateGps(dto, req.user.id, req.user.organizationId);
  }

  // POST /pda/signature — signature patient
  @UseGuards(JwtAuthGuard)
  @Post('signature')
  async saveSignature(@Body() dto: PdaSignatureDto, @Request() req: any) {
    return this.pdaService.saveSignature(dto, req.user.organizationId);
  }

  // POST /pda/incident — signaler incident
  @UseGuards(JwtAuthGuard)
  @Post('incident')
  async reportIncident(@Body() dto: PdaIncidentDto, @Request() req: any) {
    return this.pdaService.reportIncident(dto, req.user.id, req.user.organizationId);
  }

  // GET /pda/incidents — tous les incidents de l'organisation
  @UseGuards(JwtAuthGuard)
  @Get('incidents')
  async getIncidents(@Request() req: any, @Query('userId') userId?: string) {
    return this.pdaService.getIncidents(req.user.organizationId, userId);
  }

  // POST /pda/checklist — valider checklist
  @UseGuards(JwtAuthGuard)
  @Post('checklist')
  async validateChecklist(
    @Body() body: { missionId: string; items: string[] },
    @Request() req: any,
  ) {
    return this.pdaService.validateChecklist(body.missionId, body.items, req.user.id);
  }
}

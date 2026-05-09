import { Controller, Post, Get, Body, Request, UseGuards } from '@nestjs/common';
import { AIRegulatorService } from './ai-regulator.service';
import { RegulatorRequestDto } from './dto/regulator.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@UseGuards(JwtAuthGuard)
@Controller('regulator')
export class AIRegulatorController {
  constructor(private regulatorService: AIRegulatorService) {}

  // POST /regulator/analyze — analyser une demande entrante
  @Post('analyze')
  @Roles('REGULATEUR', 'ADMIN', 'SUPER_ADMIN')
  async analyzeRequest(@Body() dto: RegulatorRequestDto, @Request() req: any) {
    return this.regulatorService.analyzeRequest(dto, req.user.organizationId);
  }

  // GET /regulator/fleet — état temps réel de la flotte
  @Get('fleet')
  @Roles('REGULATEUR', 'ADMIN', 'SUPER_ADMIN')
  async getFleetStatus(@Request() req: any) {
    return this.regulatorService.getFleetStatus(req.user.organizationId);
  }
}

import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { SaveConfigurationDto } from './dto/configuration.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@UseGuards(JwtAuthGuard)
@Controller('configuration')
export class ConfigurationController {
  constructor(private configurationService: ConfigurationService) {}

  // GET /configuration — récupérer la configuration
  @Get()
  async getConfiguration(@Request() req: any) {
    return this.configurationService.getConfiguration(req.user.organizationId);
  }

  // POST /configuration — sauvegarder la configuration
  @Post()
  @Roles('ADMIN', 'SUPER_ADMIN', 'REGULATEUR')
  async saveConfiguration(@Body() dto: SaveConfigurationDto, @Request() req: any) {
    await this.configurationService.saveConfiguration(dto, req.user.organizationId);
    return { success: true, message: 'Configuration sauvegardée' };
  }
}

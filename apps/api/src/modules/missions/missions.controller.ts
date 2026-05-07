import { Controller, Get, Post, Patch, Body, Param, Query, Request, UseGuards } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { AssignMissionDto } from './dto/assign-mission.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@UseGuards(JwtAuthGuard)
@Controller('missions')
export class MissionsController {
  constructor(private missionsService: MissionsService) {}

  @Post()
  @Roles('REGULATEUR', 'ADMIN', 'SUPER_ADMIN')
  async create(@Body() dto: CreateMissionDto, @Request() req: any) {
    return this.missionsService.create(dto, req.user.organizationId);
  }

  @Get()
  async findAll(@Request() req: any, @Query('status') status?: string) {
    return this.missionsService.findAll(req.user.organizationId, status);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: any) {
    return this.missionsService.findOne(id, req.user.organizationId);
  }

  @Patch(':id/assign')
  @Roles('REGULATEUR', 'ADMIN', 'SUPER_ADMIN')
  async assign(@Param('id') id: string, @Body() dto: AssignMissionDto, @Request() req: any) {
    return this.missionsService.assign(id, dto, req.user.organizationId);
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body() dto: UpdateMissionDto, @Request() req: any) {
    return this.missionsService.updateStatus(id, dto, req.user.organizationId, req.user.id);
  }

  @Get(':id/events')
  async getEvents(@Param('id') id: string, @Request() req: any) {
    return this.missionsService.getEvents(id, req.user.organizationId);
  }
}

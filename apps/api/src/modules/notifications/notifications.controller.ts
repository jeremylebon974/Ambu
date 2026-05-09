import { Controller, Post, Get, Body, Request, UseGuards, Query } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { SendSmsDto, MissionConfirmationDto } from './dto/notification.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Public } from '../auth/decorators/public.decorator';

@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  // POST /notifications/sms — envoyer SMS manuel
  @UseGuards(JwtAuthGuard)
  @Roles('REGULATEUR', 'ADMIN', 'SUPER_ADMIN')
  @Post('sms')
  async sendSms(@Body() dto: SendSmsDto) {
    return this.notificationsService.sendSms(dto);
  }

  // POST /notifications/mission-confirmation — confirmer mission par SMS
  @UseGuards(JwtAuthGuard)
  @Roles('REGULATEUR', 'ADMIN', 'SUPER_ADMIN')
  @Post('mission-confirmation')
  async sendMissionConfirmation(@Body() dto: MissionConfirmationDto) {
    return this.notificationsService.sendMissionConfirmation(dto);
  }

  // POST /notifications/webhook/sms — webhook Twilio réponses SMS
  @Public()
  @Post('webhook/sms')
  async handleSmsWebhook(
    @Body() body: any,
    @Query('missionId') missionId: string,
  ) {
    await this.notificationsService.handleSmsReply(
      body.From,
      body.Body,
      missionId,
    );
    return '<Response></Response>';
  }
}

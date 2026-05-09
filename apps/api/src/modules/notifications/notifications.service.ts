import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SendSmsDto, SendCallDto, MissionConfirmationDto } from './dto/notification.dto';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);
  private readonly twilioAccountSid = process.env.TWILIO_ACCOUNT_SID || '';
  private readonly twilioAuthToken = process.env.TWILIO_AUTH_TOKEN || '';
  private readonly twilioPhone = process.env.TWILIO_PHONE || '';
  private readonly confirmationTimeoutMs = 3 * 60 * 1000; // 3 minutes
  private pendingConfirmations = new Map<string, NodeJS.Timeout>();

  constructor(private prisma: PrismaService) {}

  // ── SMS ───────────────────────────────────────────────

  async sendSms(dto: SendSmsDto): Promise<{ success: boolean; sid?: string }> {
    try {
      const url = `https://api.twilio.com/2010-04-01/Accounts/${this.twilioAccountSid}/Messages.json`;

      const body = new URLSearchParams({
        To: dto.to,
        From: this.twilioPhone,
        Body: dto.message,
      });

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`${this.twilioAccountSid}:${this.twilioAuthToken}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      if (!response.ok) {
        const error = await response.json() as any;
        this.logger.error(`SMS échoué: ${error.message}`);
        return { success: false };
      }

      const data = await response.json() as any;
      this.logger.log(`SMS envoyé → ${dto.to} | SID: ${data.sid}`);
      return { success: true, sid: data.sid };

    } catch (error) {
      this.logger.error('Erreur envoi SMS', error);
      return { success: false };
    }
  }

  // ── APPEL IA ──────────────────────────────────────────

  async sendCall(dto: SendCallDto): Promise<{ success: boolean; sid?: string }> {
    try {
      const url = `https://api.twilio.com/2010-04-01/Accounts/${this.twilioAccountSid}/Calls.json`;

      const twimlMessage = encodeURIComponent(dto.message);
      const twimlUrl = `http://twimlets.com/message?Message=${twimlMessage}`;

      const body = new URLSearchParams({
        To: dto.to,
        From: this.twilioPhone,
        Url: twimlUrl,
        Method: 'GET',
      });

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`${this.twilioAccountSid}:${this.twilioAuthToken}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      if (!response.ok) {
        const error = await response.json() as any;
        this.logger.error(`Appel échoué: ${error.message}`);
        return { success: false };
      }

      const data = await response.json() as any;
      this.logger.log(`Appel lancé → ${dto.to} | SID: ${data.sid}`);
      return { success: true, sid: data.sid };

    } catch (error) {
      this.logger.error('Erreur appel', error);
      return { success: false };
    }
  }

  // ── CONFIRMATION MISSION ──────────────────────────────

  async sendMissionConfirmation(dto: MissionConfirmationDto): Promise<void> {
    const mission = await this.prisma.mission.findFirst({
      where: { id: dto.missionId },
      include: { patient: true },
    });

    if (!mission) return;

    const smsMessage = `🚑 MISSION ASSIGNÉE
Ref: ${dto.missionId.slice(-6).toUpperCase()}
Adresse: ${mission.address || 'Voir application'}
Priorité: ${mission.priority}

Répondez OUI pour confirmer ou NON pour refuser.
Délai: 3 minutes.`;

    await this.sendSms({
      to: dto.phoneNumber,
      message: smsMessage,
      missionId: dto.missionId,
    });

    await this.prisma.notification.create({
      data: {
        user: { connect: { id: dto.ambulancierId } },
        organization: { connect: { id: mission.organizationId } },
        type: 'MISSION_ASSIGNED' as any,
        title: 'Mission assignée',
        message: `Mission ${dto.missionId.slice(-6).toUpperCase()} — confirmation requise`,
        data: { missionId: dto.missionId, channel: 'SMS' },
      },
    });

    // Timer 3 minutes → appel IA si pas de réponse
    const timeout = setTimeout(async () => {
      await this.triggerConfirmationCall(dto);
    }, this.confirmationTimeoutMs);

    this.pendingConfirmations.set(dto.missionId, timeout);
    this.logger.log(`Confirmation SMS envoyée — mission ${dto.missionId} | timer 3min démarré`);
  }

  // ── APPEL IA SI PAS DE REPONSE ────────────────────────

  private async triggerConfirmationCall(dto: MissionConfirmationDto): Promise<void> {
    this.logger.warn(`Timeout confirmation — mission ${dto.missionId} → appel IA`);

    const user = await this.prisma.user.findUnique({
      where: { id: dto.ambulancierId },
    });

    const firstName = user?.firstName || 'Ambulancier';

    const callMessage = `Bonjour ${firstName}.
Vous avez une mission urgente assignée.
Référence ${dto.missionId.slice(-6).toUpperCase()}.
Veuillez confirmer immédiatement sur votre application PDA
ou rappeler la régulation.
Cette mission nécessite votre confirmation dans les plus brefs délais.
Merci.`;

    await this.sendCall({
      to: dto.phoneNumber,
      message: callMessage,
      missionId: dto.missionId,
    });

    // Notifier le régulateur
    await this.notifyRegulators(dto.missionId, dto.ambulancierId);
  }

  // ── CONFIRMATION REÇUE (webhook Twilio) ───────────────

  async handleSmsReply(from: string, body: string, missionId: string): Promise<void> {
    const response = body.trim().toUpperCase();

    if (response === 'OUI' || response === 'O') {
      await this.prisma.mission.update({
        where: { id: missionId },
        data: { status: 'ASSIGNED' as any },
      });

      const timeout = this.pendingConfirmations.get(missionId);
      if (timeout) {
        clearTimeout(timeout);
        this.pendingConfirmations.delete(missionId);
      }

      this.logger.log(`Mission ${missionId} confirmée par SMS`);

      await this.sendSms({
        to: from,
        message: `✅ Mission ${missionId.slice(-6).toUpperCase()} confirmée. Bonne intervention !`,
        missionId,
      });

    } else if (response === 'NON' || response === 'N') {
      await this.prisma.mission.update({
        where: { id: missionId },
        data: { status: 'PENDING' as any },
      });

      this.logger.warn(`Mission ${missionId} refusée par SMS`);

      await this.sendSms({
        to: from,
        message: `❌ Refus enregistré. La régulation va trouver un autre équipage.`,
        missionId,
      });
    }
  }

  // ── ALERTE RÉGULATEURS ────────────────────────────────

  private async notifyRegulators(missionId: string, organizationId: string): Promise<void> {
    const regulators = await this.prisma.user.findMany({
      where: {
        organizationId,
        role: { in: ['REGULATEUR', 'ADMIN'] as any },
        isActive: true,
      },
    });

    for (const reg of regulators) {
      await this.prisma.notification.create({
        data: {
          user: { connect: { id: reg.id } },
          organization: { connect: { id: organizationId } },
          type: 'URGENT_ALERT' as any,
          title: '⚠️ Confirmation mission en attente',
          message: `L'ambulancier n'a pas confirmé la mission ${missionId.slice(-6).toUpperCase()} — intervention requise`,
          data: { missionId },
        },
      });
    }
  }
}

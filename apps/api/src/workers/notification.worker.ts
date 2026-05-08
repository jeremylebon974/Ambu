import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../modules/prisma/prisma.service';

@Injectable()
@Processor('notification-queue')
export class NotificationWorker extends WorkerHost {
  private readonly logger = new Logger(NotificationWorker.name);

  constructor(private prisma: PrismaService) {
    super();
  }

  async process(job: Job): Promise<any> {
    const { name } = job;
    const { data, organizationId } = job.data;

    this.logger.log(`NotificationWorker — job: ${name}`);

    switch (name) {
      case 'alert-admin':
        await this.alertAdmin(organizationId, data);
        break;
      case 'update-dashboard':
        await this.updateDashboard(organizationId, data);
        break;
      case 'cpam-transmission':
        await this.prepareCpam(organizationId, data);
        break;
      default:
        this.logger.warn(`Job inconnu : ${name}`);
    }

    return { success: true };
  }

  private async alertAdmin(organizationId: string, data: any) {
    const admins = await this.prisma.user.findMany({
      where: {
        organizationId,
        role: { in: ['ADMIN', 'SUPER_ADMIN', 'COMPTABLE'] as any },
        isActive: true,
      },
    });

    for (const admin of admins) {
      await this.prisma.notification.create({
        data: {
          userId: admin.id,
          organizationId,
          type: 'ANOMALY_DETECTED' as any,
          title: 'Anomalie détectée',
          message: `Anomalie sur mission ${data.missionId} — intervention requise`,
          data: data,
        } as any,
      });
    }

    this.logger.log(`Alertes envoyées à ${admins.length} admin(s)`);
  }

  private async updateDashboard(organizationId: string, data: any) {
    this.logger.log(`Dashboard mis à jour — org: ${organizationId}`);
  }

  private async prepareCpam(organizationId: string, data: any) {
    if (data.invoiceId) {
      await this.prisma.invoice.update({
        where: { id: data.invoiceId },
        data: {
          status: 'TRANSMITTED' as any,
          notes: `LOT-${new Date().toISOString().split('T')[0]}`,
        },
      });
      this.logger.log(`CPAM préparé — facture ${data.invoiceId}`);
    }
  }
}

import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../modules/prisma/prisma.service';
import { EventBusService, SystemEvent } from '../events/event-bus.service';

@Injectable()
@Processor('invoice-queue')
export class InvoiceWorker extends WorkerHost {
  private readonly logger = new Logger(InvoiceWorker.name);

  constructor(
    private prisma: PrismaService,
    private eventBus: EventBusService,
  ) {
    super();
  }

  async process(job: Job): Promise<any> {
    const { data, organizationId } = job.data;
    const { missionId } = data;

    this.logger.log(`InvoiceWorker — mission ${missionId}`);

    const mission = await this.prisma.mission.findFirst({
      where: { id: missionId },
      include: { patient: true },
    });

    if (!mission) return { success: false };

    const lines = this.calculateNgapLines(mission);
    const totalAmount = lines.reduce((sum, l) => sum + l.total, 0);
    const invoiceNumber = `FAC-${Date.now()}`;

    const invoice = await this.prisma.invoice.create({
      data: {
        organizationId,
        patientId: mission.patientId,
        missionId: mission.id,
        number: invoiceNumber,
        status: 'DRAFT' as any,
        amount: totalAmount,
        vatRate: 0,
        notes: `CPAM|${totalAmount * 0.65}|${totalAmount * 0.35}`,
        lines: {
          create: lines,
        },
      } as any,
    });

    await this.eventBus.emit(SystemEvent.CPAM_READY, organizationId, {
      missionId,
      invoiceId: invoice.id,
      invoiceNumber,
      totalAmount,
    });

    this.logger.log(`Facture générée : ${invoiceNumber} — ${totalAmount}€`);
    return { success: true, invoiceId: invoice.id, invoiceNumber, totalAmount };
  }

  private calculateNgapLines(mission: any) {
    const lines = [];
    const km = mission.actualKm || 0;

    lines.push({
      code: 'AMB',
      label: 'Prise en charge ambulance',
      quantity: 1,
      unitPrice: 27.30,
      total: 27.30,
    });

    lines.push({
      code: 'MCI',
      label: 'Majoration conditions intervention',
      quantity: 1,
      unitPrice: 18.00,
      total: 18.00,
    });

    if (km > 0) {
      const kmPrice = km * 0.62;
      lines.push({
        code: 'KM',
        label: `Kilométrage (${km} km)`,
        quantity: km,
        unitPrice: 0.62,
        total: kmPrice,
      });
    }

    if (mission.isUrgent) {
      lines.push({
        code: 'IFI',
        label: 'Indemnité forfaitaire intervention',
        quantity: 1,
        unitPrice: 4.00,
        total: 4.00,
      });
    }

    return lines;
  }
}

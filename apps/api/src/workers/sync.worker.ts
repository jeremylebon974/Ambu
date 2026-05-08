import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../modules/prisma/prisma.service';

@Injectable()
@Processor('sync-queue')
export class SyncWorker extends WorkerHost {
  private readonly logger = new Logger(SyncWorker.name);

  constructor(private prisma: PrismaService) {
    super();
  }

  async process(job: Job): Promise<any> {
    const { data } = job.data;
    const { missionId, organizationId } = data;

    this.logger.log(`SyncWorker — mission ${missionId}`);

    const mission = await this.prisma.mission.findFirst({
      where: { id: missionId, organizationId },
      include: {
        patient: true,
        crew: {
          include: {
            members: { include: { user: true } },
          },
        },
      },
    });

    if (!mission) {
      this.logger.error(`Mission introuvable : ${missionId}`);
      return { success: false };
    }

    this.logger.log(`SyncWorker terminé — mission ${missionId}`);
    return { success: true, missionId };
  }
}

import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { PrismaService } from '../modules/prisma/prisma.service';
import { EventBusService } from '../events/event-bus.service';
export declare class ComplianceWorker extends WorkerHost {
    private prisma;
    private eventBus;
    private readonly logger;
    constructor(prisma: PrismaService, eventBus: EventBusService);
    process(job: Job): Promise<any>;
    private checkSignature;
    private checkTimings;
    private checkPatient;
    private checkKm;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SyncWorker_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncWorker = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../modules/prisma/prisma.service");
let SyncWorker = SyncWorker_1 = class SyncWorker extends bullmq_1.WorkerHost {
    constructor(prisma) {
        super();
        this.prisma = prisma;
        this.logger = new common_1.Logger(SyncWorker_1.name);
    }
    async process(job) {
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
};
exports.SyncWorker = SyncWorker;
exports.SyncWorker = SyncWorker = SyncWorker_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, bullmq_1.Processor)('sync-queue'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SyncWorker);
//# sourceMappingURL=sync.worker.js.map
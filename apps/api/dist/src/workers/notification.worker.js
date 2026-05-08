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
var NotificationWorker_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationWorker = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../modules/prisma/prisma.service");
let NotificationWorker = NotificationWorker_1 = class NotificationWorker extends bullmq_1.WorkerHost {
    constructor(prisma) {
        super();
        this.prisma = prisma;
        this.logger = new common_1.Logger(NotificationWorker_1.name);
    }
    async process(job) {
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
    async alertAdmin(organizationId, data) {
        const admins = await this.prisma.user.findMany({
            where: {
                organizationId,
                role: { in: ['ADMIN', 'SUPER_ADMIN', 'COMPTABLE'] },
                isActive: true,
            },
        });
        for (const admin of admins) {
            await this.prisma.notification.create({
                data: {
                    userId: admin.id,
                    organizationId,
                    type: 'ANOMALY_DETECTED',
                    title: 'Anomalie détectée',
                    message: `Anomalie sur mission ${data.missionId} — intervention requise`,
                    data: data,
                },
            });
        }
        this.logger.log(`Alertes envoyées à ${admins.length} admin(s)`);
    }
    async updateDashboard(organizationId, data) {
        this.logger.log(`Dashboard mis à jour — org: ${organizationId}`);
    }
    async prepareCpam(organizationId, data) {
        if (data.invoiceId) {
            await this.prisma.invoice.update({
                where: { id: data.invoiceId },
                data: {
                    status: 'TRANSMITTED',
                    notes: `LOT-${new Date().toISOString().split('T')[0]}`,
                },
            });
            this.logger.log(`CPAM préparé — facture ${data.invoiceId}`);
        }
    }
};
exports.NotificationWorker = NotificationWorker;
exports.NotificationWorker = NotificationWorker = NotificationWorker_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, bullmq_1.Processor)('notification-queue'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationWorker);
//# sourceMappingURL=notification.worker.js.map
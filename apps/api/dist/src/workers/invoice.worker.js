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
var InvoiceWorker_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceWorker = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../modules/prisma/prisma.service");
const event_bus_service_1 = require("../events/event-bus.service");
let InvoiceWorker = InvoiceWorker_1 = class InvoiceWorker extends bullmq_1.WorkerHost {
    constructor(prisma, eventBus) {
        super();
        this.prisma = prisma;
        this.eventBus = eventBus;
        this.logger = new common_1.Logger(InvoiceWorker_1.name);
    }
    async process(job) {
        const { data, organizationId } = job.data;
        const { missionId } = data;
        this.logger.log(`InvoiceWorker — mission ${missionId}`);
        const mission = await this.prisma.mission.findFirst({
            where: { id: missionId },
            include: { patient: true },
        });
        if (!mission)
            return { success: false };
        const lines = this.calculateNgapLines(mission);
        const totalAmount = lines.reduce((sum, l) => sum + l.total, 0);
        const invoiceNumber = `FAC-${Date.now()}`;
        const invoice = await this.prisma.invoice.create({
            data: {
                organizationId,
                patientId: mission.patientId,
                missionId: mission.id,
                number: invoiceNumber,
                status: 'DRAFT',
                amount: totalAmount,
                vatRate: 0,
                notes: `CPAM|${totalAmount * 0.65}|${totalAmount * 0.35}`,
                lines: {
                    create: lines,
                },
            },
        });
        await this.eventBus.emit(event_bus_service_1.SystemEvent.CPAM_READY, organizationId, {
            missionId,
            invoiceId: invoice.id,
            invoiceNumber,
            totalAmount,
        });
        this.logger.log(`Facture générée : ${invoiceNumber} — ${totalAmount}€`);
        return { success: true, invoiceId: invoice.id, invoiceNumber, totalAmount };
    }
    calculateNgapLines(mission) {
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
};
exports.InvoiceWorker = InvoiceWorker;
exports.InvoiceWorker = InvoiceWorker = InvoiceWorker_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, bullmq_1.Processor)('invoice-queue'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        event_bus_service_1.EventBusService])
], InvoiceWorker);
//# sourceMappingURL=invoice.worker.js.map
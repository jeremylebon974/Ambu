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
var ComplianceWorker_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceWorker = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../modules/prisma/prisma.service");
const event_bus_service_1 = require("../events/event-bus.service");
let ComplianceWorker = ComplianceWorker_1 = class ComplianceWorker extends bullmq_1.WorkerHost {
    constructor(prisma, eventBus) {
        super();
        this.prisma = prisma;
        this.eventBus = eventBus;
        this.logger = new common_1.Logger(ComplianceWorker_1.name);
    }
    async process(job) {
        const { data, organizationId } = job.data;
        const { missionId } = data;
        this.logger.log(`ComplianceWorker — mission ${missionId}`);
        const mission = await this.prisma.mission.findFirst({
            where: { id: missionId },
            include: { patient: true },
        });
        if (!mission)
            return { success: false };
        const checks = [
            this.checkSignature(mission),
            this.checkTimings(mission),
            this.checkPatient(mission.patient),
            this.checkKm(mission),
        ];
        const blockingFailures = checks.filter(c => !c.passed && c.severity === 'blocking');
        const passed = blockingFailures.length === 0;
        const score = Math.round((checks.filter(c => c.passed).length / checks.length) * 100);
        if (!passed) {
            await this.eventBus.emit(event_bus_service_1.SystemEvent.ANOMALY_DETECTED, organizationId, {
                missionId,
                anomalies: blockingFailures,
            });
            this.logger.warn(`Anomalies détectées — mission ${missionId}`);
        }
        else {
            await this.eventBus.emit(event_bus_service_1.SystemEvent.INVOICE_READY, organizationId, {
                missionId,
            });
            this.logger.log(`Conformité OK — mission ${missionId} score: ${score}%`);
        }
        return { passed, score, checks };
    }
    checkSignature(mission) {
        const ok = !!mission.patientSignature;
        return {
            rule: 'SIGNATURE_PATIENT',
            passed: ok,
            message: ok ? 'Signature présente' : 'Signature patient manquante',
            severity: 'blocking',
        };
    }
    checkTimings(mission) {
        const ok = !!mission.actualPickup && !!mission.actualDropoff;
        return {
            rule: 'TIMINGS',
            passed: ok,
            message: ok ? 'Horaires réels présents' : 'Horaires réels manquants',
            severity: 'blocking',
        };
    }
    checkPatient(patient) {
        const nssRegex = /^[12][0-9]{14}$/;
        const ok = patient && nssRegex.test((patient.nss || '').replace(/\s/g, ''));
        return {
            rule: 'NSS_VALID',
            passed: ok,
            message: ok ? 'N° Sécu valide' : 'N° Sécu invalide ou manquant',
            severity: 'blocking',
        };
    }
    checkKm(mission) {
        const ok = !!mission.actualKm && mission.actualKm > 0;
        return {
            rule: 'KM_REEL',
            passed: ok,
            message: ok ? `${mission.actualKm} km enregistrés` : 'Kilométrage réel manquant',
            severity: 'warning',
        };
    }
};
exports.ComplianceWorker = ComplianceWorker;
exports.ComplianceWorker = ComplianceWorker = ComplianceWorker_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, bullmq_1.Processor)('compliance-queue'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        event_bus_service_1.EventBusService])
], ComplianceWorker);
//# sourceMappingURL=compliance.worker.js.map
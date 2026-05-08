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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EventBusService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBusService = exports.SystemEvent = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
var SystemEvent;
(function (SystemEvent) {
    SystemEvent["MISSION_CREATED"] = "mission.created";
    SystemEvent["MISSION_ASSIGNED"] = "mission.assigned";
    SystemEvent["MISSION_VALIDATED"] = "mission.validated";
    SystemEvent["MISSION_CANCELLED"] = "mission.cancelled";
    SystemEvent["ANOMALY_DETECTED"] = "anomaly.detected";
    SystemEvent["INVOICE_PREPARED"] = "invoice.prepared";
    SystemEvent["INVOICE_READY"] = "invoice.ready";
    SystemEvent["CPAM_READY"] = "cpam.ready";
    SystemEvent["GPS_UPDATE"] = "vehicle.gps_update";
})(SystemEvent || (exports.SystemEvent = SystemEvent = {}));
let EventBusService = EventBusService_1 = class EventBusService {
    constructor(syncQueue, dossierQueue, complianceQueue, invoiceQueue, notifQueue) {
        this.syncQueue = syncQueue;
        this.dossierQueue = dossierQueue;
        this.complianceQueue = complianceQueue;
        this.invoiceQueue = invoiceQueue;
        this.notifQueue = notifQueue;
        this.logger = new common_1.Logger(EventBusService_1.name);
    }
    async emit(event, organizationId, data) {
        const payload = {
            event,
            organizationId,
            data,
            timestamp: new Date(),
        };
        this.logger.log(`Event: ${event} | Org: ${organizationId}`);
        await this.routeToQueues(event, payload);
    }
    async routeToQueues(event, payload) {
        switch (event) {
            case SystemEvent.MISSION_VALIDATED:
                await Promise.all([
                    this.syncQueue.add('sync-mission-data', payload, {
                        priority: 1,
                        attempts: 3,
                        backoff: { type: 'exponential', delay: 2000 },
                    }),
                    this.dossierQueue.add('create-dossier', payload, {
                        priority: 1,
                        attempts: 3,
                        backoff: { type: 'exponential', delay: 2000 },
                    }),
                ]);
                break;
            case SystemEvent.INVOICE_PREPARED:
                await this.complianceQueue.add('check-compliance', payload, {
                    priority: 1,
                    attempts: 2,
                });
                break;
            case SystemEvent.INVOICE_READY:
                await this.invoiceQueue.add('generate-invoice', payload, {
                    priority: 2,
                    attempts: 3,
                });
                break;
            case SystemEvent.ANOMALY_DETECTED:
                await Promise.all([
                    this.notifQueue.add('alert-admin', payload, { priority: 1 }),
                    this.notifQueue.add('update-dashboard', payload, { priority: 2 }),
                ]);
                break;
            case SystemEvent.CPAM_READY:
                await this.notifQueue.add('cpam-transmission', payload, {
                    priority: 2,
                    attempts: 5,
                    backoff: { type: 'exponential', delay: 5000 },
                });
                break;
            default:
                this.logger.warn(`Événement non routé : ${event}`);
        }
    }
};
exports.EventBusService = EventBusService;
exports.EventBusService = EventBusService = EventBusService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bullmq_1.InjectQueue)('sync-queue')),
    __param(1, (0, bullmq_1.InjectQueue)('dossier-queue')),
    __param(2, (0, bullmq_1.InjectQueue)('compliance-queue')),
    __param(3, (0, bullmq_1.InjectQueue)('invoice-queue')),
    __param(4, (0, bullmq_1.InjectQueue)('notification-queue')),
    __metadata("design:paramtypes", [bullmq_2.Queue,
        bullmq_2.Queue,
        bullmq_2.Queue,
        bullmq_2.Queue,
        bullmq_2.Queue])
], EventBusService);
//# sourceMappingURL=event-bus.service.js.map
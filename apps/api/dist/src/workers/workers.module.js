"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkersModule = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const sync_worker_1 = require("./sync.worker");
const compliance_worker_1 = require("./compliance.worker");
const invoice_worker_1 = require("./invoice.worker");
const notification_worker_1 = require("./notification.worker");
const prisma_service_1 = require("../modules/prisma/prisma.service");
const events_module_1 = require("../events/events.module");
let WorkersModule = class WorkersModule {
};
exports.WorkersModule = WorkersModule;
exports.WorkersModule = WorkersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            events_module_1.EventsModule,
            bullmq_1.BullModule.registerQueue({ name: 'sync-queue' }, { name: 'dossier-queue' }, { name: 'compliance-queue' }, { name: 'invoice-queue' }, { name: 'notification-queue' }),
        ],
        providers: [
            sync_worker_1.SyncWorker,
            compliance_worker_1.ComplianceWorker,
            invoice_worker_1.InvoiceWorker,
            notification_worker_1.NotificationWorker,
            prisma_service_1.PrismaService,
        ],
        exports: [events_module_1.EventsModule],
    })
], WorkersModule);
//# sourceMappingURL=workers.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bullmq_1 = require("@nestjs/bullmq");
const core_1 = require("@nestjs/core");
const auth_module_1 = require("./modules/auth/auth.module");
const missions_module_1 = require("./modules/missions/missions.module");
const events_module_1 = require("./events/events.module");
const workers_module_1 = require("./workers/workers.module");
const dispatch_module_1 = require("./modules/dispatch/dispatch.module");
const pda_module_1 = require("./modules/pda/pda.module");
const ai_regulator_module_1 = require("./modules/ai-regulator/ai-regulator.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const configuration_module_1 = require("./modules/configuration/configuration.module");
const presence_module_1 = require("./modules/presence/presence.module");
const planning_module_1 = require("./modules/planning/planning.module");
const jwt_auth_guard_1 = require("./modules/auth/guards/jwt-auth.guard");
const roles_guard_1 = require("./modules/auth/guards/roles.guard");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            bullmq_1.BullModule.forRoot({
                connection: {
                    host: process.env.REDIS_HOST || 'localhost',
                    port: parseInt(process.env.REDIS_PORT || '6379'),
                    password: process.env.REDIS_PASSWORD || undefined,
                },
            }),
            auth_module_1.AuthModule,
            missions_module_1.MissionsModule,
            events_module_1.EventsModule,
            workers_module_1.WorkersModule,
            dispatch_module_1.DispatchModule,
            pda_module_1.PdaModule,
            ai_regulator_module_1.AIRegulatorModule,
            notifications_module_1.NotificationsModule,
            configuration_module_1.ConfigurationModule,
            presence_module_1.PresenceModule,
            planning_module_1.PlanningModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
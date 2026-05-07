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
var MissionsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const update_mission_dto_1 = require("./dto/update-mission.dto");
let MissionsService = MissionsService_1 = class MissionsService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(MissionsService_1.name);
    }
    async create(dto, organizationId) {
        const mission = await this.prisma.mission.create({
            data: {
                organizationId,
                patientId: dto.patientId,
                address: dto.pickupAddress,
                notes: dto.notes,
                scheduledAt: new Date(dto.scheduledPickup),
                status: 'PENDING',
                priority: dto.priority === 'P1' ? 1 : dto.priority === 'P2' ? 2 : dto.priority === 'P4' ? 4 : 3,
            },
            include: {
                patient: true,
                crew: { include: { members: { include: { user: true } } } },
            },
        });
        await this.prisma.missionEvent.create({
            data: {
                missionId: mission.id,
                type: 'MISSION_CREATED',
                data: { organizationId },
            },
        });
        this.logger.log(`Mission créée : ${mission.id}`);
        return mission;
    }
    async findAll(organizationId, status) {
        return this.prisma.mission.findMany({
            where: {
                organizationId,
                ...(status && { status: status }),
            },
            include: {
                patient: true,
                crew: { include: { members: { include: { user: true } } } },
            },
            orderBy: { scheduledAt: 'asc' },
        });
    }
    async findOne(id, organizationId) {
        const mission = await this.prisma.mission.findFirst({
            where: { id, organizationId },
            include: {
                patient: true,
                crew: { include: { members: { include: { user: true } } } },
                events: { orderBy: { createdAt: 'asc' } },
                documents: true,
            },
        });
        if (!mission)
            throw new common_1.NotFoundException('Mission introuvable');
        return mission;
    }
    async assign(id, dto, organizationId) {
        const mission = await this.findOne(id, organizationId);
        if (mission.status !== 'PENDING') {
            throw new common_1.BadRequestException('Mission déjà assignée');
        }
        const updated = await this.prisma.mission.update({
            where: { id },
            data: {
                crewId: dto.crewId,
                status: 'ASSIGNED',
            },
        });
        await this.prisma.missionEvent.create({
            data: {
                missionId: id,
                type: 'MISSION_ASSIGNED',
                data: { crewId: dto.crewId, vehicleId: dto.vehicleId },
            },
        });
        this.logger.log(`Mission ${id} assignée à équipage ${dto.crewId}`);
        return updated;
    }
    async updateStatus(id, dto, organizationId, userId) {
        await this.findOne(id, organizationId);
        const updated = await this.prisma.mission.update({
            where: { id },
            data: {
                ...(dto.status && { status: dto.status }),
                ...(dto.actualPickup && { startedAt: new Date(dto.actualPickup) }),
                ...(dto.actualDropoff && { completedAt: new Date(dto.actualDropoff) }),
                ...(dto.notes && { notes: dto.notes }),
            },
        });
        if (dto.status) {
            await this.prisma.missionEvent.create({
                data: {
                    missionId: id,
                    type: 'STATUS_UPDATED',
                    data: { newStatus: dto.status, updatedBy: userId },
                },
            });
        }
        if (dto.status === update_mission_dto_1.MissionStatus.VALIDATED) {
            this.logger.log(`Mission ${id} validée — pipeline facturation déclenché`);
        }
        return updated;
    }
    async getEvents(id, organizationId) {
        await this.findOne(id, organizationId);
        return this.prisma.missionEvent.findMany({
            where: { missionId: id },
            orderBy: { createdAt: 'asc' },
        });
    }
};
exports.MissionsService = MissionsService;
exports.MissionsService = MissionsService = MissionsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MissionsService);
//# sourceMappingURL=missions.service.js.map
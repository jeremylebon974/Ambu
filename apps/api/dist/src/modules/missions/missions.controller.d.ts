import { MissionsService } from './missions.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { AssignMissionDto } from './dto/assign-mission.dto';
export declare class MissionsController {
    private missionsService;
    constructor(missionsService: MissionsService);
    create(dto: CreateMissionDto, req: any): Promise<{
        patient: {
            id: string;
            address: string | null;
            phone: string | null;
            email: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            firstName: string;
            lastName: string;
            organizationId: string;
            birthDate: Date | null;
            gender: string | null;
            socialNumber: string | null;
        };
        crew: {
            members: ({
                user: {
                    id: string;
                    phone: string | null;
                    email: string;
                    isActive: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                    organizationId: string;
                };
            } & {
                id: string;
                createdAt: Date;
                role: string;
                crewId: string;
                userId: string;
            })[];
        } & {
            id: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            vehicleId: string;
        };
    } & {
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    }>;
    findAll(req: any, status?: string): Promise<({
        patient: {
            id: string;
            address: string | null;
            phone: string | null;
            email: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            firstName: string;
            lastName: string;
            organizationId: string;
            birthDate: Date | null;
            gender: string | null;
            socialNumber: string | null;
        };
        crew: {
            members: ({
                user: {
                    id: string;
                    phone: string | null;
                    email: string;
                    isActive: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                    organizationId: string;
                };
            } & {
                id: string;
                createdAt: Date;
                role: string;
                crewId: string;
                userId: string;
            })[];
        } & {
            id: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            vehicleId: string;
        };
    } & {
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    })[]>;
    findOne(id: string, req: any): Promise<{
        patient: {
            id: string;
            address: string | null;
            phone: string | null;
            email: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            firstName: string;
            lastName: string;
            organizationId: string;
            birthDate: Date | null;
            gender: string | null;
            socialNumber: string | null;
        };
        crew: {
            members: ({
                user: {
                    id: string;
                    phone: string | null;
                    email: string;
                    isActive: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                    organizationId: string;
                };
            } & {
                id: string;
                createdAt: Date;
                role: string;
                crewId: string;
                userId: string;
            })[];
        } & {
            id: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            vehicleId: string;
        };
        events: {
            id: string;
            createdAt: Date;
            type: string;
            missionId: string;
            data: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
        documents: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            type: import("../../../generated/prisma/enums").DocumentType;
            patientId: string | null;
            missionId: string | null;
            filename: string;
            url: string;
            mimeType: string | null;
            sizeBytes: number | null;
            isEncrypted: boolean;
        }[];
    } & {
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    }>;
    assign(id: string, dto: AssignMissionDto, req: any): Promise<{
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    }>;
    updateStatus(id: string, dto: UpdateMissionDto, req: any): Promise<{
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    }>;
    getEvents(id: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        missionId: string;
        data: import("@prisma/client/runtime/client").JsonValue | null;
    }[]>;
}

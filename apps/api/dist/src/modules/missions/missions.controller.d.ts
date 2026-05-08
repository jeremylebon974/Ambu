import { MissionsService } from './missions.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { AssignMissionDto } from './dto/assign-mission.dto';
export declare class MissionsController {
    private missionsService;
    constructor(missionsService: MissionsService);
    create(dto: CreateMissionDto, req: any): Promise<{
        patient: {
            email: string | null;
            id: string;
            firstName: string;
            lastName: string;
            isActive: boolean;
            phone: string | null;
            organizationId: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            birthDate: Date | null;
            gender: string | null;
            socialNumber: string | null;
        };
        crew: {
            members: ({
                user: {
                    email: string;
                    id: string;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    isActive: boolean;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                    phone: string | null;
                    organizationId: string;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: string;
                role: string;
                createdAt: Date;
                crewId: string;
                userId: string;
            })[];
        } & {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            vehicleId: string;
        };
    } & {
        id: string;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        patientId: string | null;
        priority: number;
        notes: string | null;
        status: import("../../../generated/prisma/enums").MissionStatus;
        crewId: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
    }>;
    findAll(req: any, status?: string): Promise<({
        patient: {
            email: string | null;
            id: string;
            firstName: string;
            lastName: string;
            isActive: boolean;
            phone: string | null;
            organizationId: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            birthDate: Date | null;
            gender: string | null;
            socialNumber: string | null;
        };
        crew: {
            members: ({
                user: {
                    email: string;
                    id: string;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    isActive: boolean;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                    phone: string | null;
                    organizationId: string;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: string;
                role: string;
                createdAt: Date;
                crewId: string;
                userId: string;
            })[];
        } & {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            vehicleId: string;
        };
    } & {
        id: string;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        patientId: string | null;
        priority: number;
        notes: string | null;
        status: import("../../../generated/prisma/enums").MissionStatus;
        crewId: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
    })[]>;
    findOne(id: string, req: any): Promise<{
        patient: {
            email: string | null;
            id: string;
            firstName: string;
            lastName: string;
            isActive: boolean;
            phone: string | null;
            organizationId: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            birthDate: Date | null;
            gender: string | null;
            socialNumber: string | null;
        };
        crew: {
            members: ({
                user: {
                    email: string;
                    id: string;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    isActive: boolean;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                    phone: string | null;
                    organizationId: string;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: string;
                role: string;
                createdAt: Date;
                crewId: string;
                userId: string;
            })[];
        } & {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            vehicleId: string;
        };
        events: {
            id: string;
            createdAt: Date;
            data: import("@prisma/client/runtime/client").JsonValue | null;
            type: string;
            missionId: string;
        }[];
        documents: {
            url: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            patientId: string | null;
            type: import("../../../generated/prisma/enums").DocumentType;
            missionId: string | null;
            filename: string;
            mimeType: string | null;
            sizeBytes: number | null;
            isEncrypted: boolean;
        }[];
    } & {
        id: string;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        patientId: string | null;
        priority: number;
        notes: string | null;
        status: import("../../../generated/prisma/enums").MissionStatus;
        crewId: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
    }>;
    assign(id: string, dto: AssignMissionDto, req: any): Promise<{
        id: string;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        patientId: string | null;
        priority: number;
        notes: string | null;
        status: import("../../../generated/prisma/enums").MissionStatus;
        crewId: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
    }>;
    updateStatus(id: string, dto: UpdateMissionDto, req: any): Promise<{
        id: string;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        patientId: string | null;
        priority: number;
        notes: string | null;
        status: import("../../../generated/prisma/enums").MissionStatus;
        crewId: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
    }>;
    getEvents(id: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        type: string;
        missionId: string;
    }[]>;
}

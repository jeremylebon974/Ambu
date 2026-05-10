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
            isActive: boolean;
            organizationId: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            firstName: string;
            lastName: string;
            birthDate: Date | null;
            gender: string | null;
            phone: string | null;
            email: string | null;
            socialNumber: string | null;
        };
        crew: {
            members: ({
                user: {
                    id: string;
                    isActive: boolean;
                    organizationId: string;
                    createdAt: Date;
                    updatedAt: Date;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    email: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    passwordHash: string;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                };
            } & {
                id: string;
                createdAt: Date;
                crewId: string;
                userId: string;
                role: string;
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
        status: import("../../../generated/prisma/enums").MissionStatus;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
        crewId: string | null;
    }>;
    findAll(req: any, status?: string): Promise<({
        patient: {
            id: string;
            isActive: boolean;
            organizationId: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            firstName: string;
            lastName: string;
            birthDate: Date | null;
            gender: string | null;
            phone: string | null;
            email: string | null;
            socialNumber: string | null;
        };
        crew: {
            members: ({
                user: {
                    id: string;
                    isActive: boolean;
                    organizationId: string;
                    createdAt: Date;
                    updatedAt: Date;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    email: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    passwordHash: string;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                };
            } & {
                id: string;
                createdAt: Date;
                crewId: string;
                userId: string;
                role: string;
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
        status: import("../../../generated/prisma/enums").MissionStatus;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
        crewId: string | null;
    })[]>;
    findOne(id: string, req: any): Promise<{
        patient: {
            id: string;
            isActive: boolean;
            organizationId: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            firstName: string;
            lastName: string;
            birthDate: Date | null;
            gender: string | null;
            phone: string | null;
            email: string | null;
            socialNumber: string | null;
        };
        crew: {
            members: ({
                user: {
                    id: string;
                    isActive: boolean;
                    organizationId: string;
                    createdAt: Date;
                    updatedAt: Date;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    email: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    passwordHash: string;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                };
            } & {
                id: string;
                createdAt: Date;
                crewId: string;
                userId: string;
                role: string;
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
            type: string;
            createdAt: Date;
            missionId: string;
            data: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
        documents: {
            id: string;
            type: import("../../../generated/prisma/enums").DocumentType;
            createdAt: Date;
            updatedAt: Date;
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
        status: import("../../../generated/prisma/enums").MissionStatus;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
        crewId: string | null;
    }>;
    assign(id: string, dto: AssignMissionDto, req: any): Promise<{
        id: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
        crewId: string | null;
    }>;
    updateStatus(id: string, dto: UpdateMissionDto, req: any): Promise<{
        id: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
        crewId: string | null;
    }>;
    getEvents(id: string, req: any): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        missionId: string;
        data: import("@prisma/client/runtime/client").JsonValue | null;
    }[]>;
}

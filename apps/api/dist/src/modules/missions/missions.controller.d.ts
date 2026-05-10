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
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            firstName: string;
            lastName: string;
            birthDate: Date | null;
            gender: string | null;
            phone: string | null;
            email: string | null;
            socialNumber: string | null;
            isActive: boolean;
        };
        crew: {
            members: ({
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    organizationId: string;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    email: string;
                    isActive: boolean;
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
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            vehicleId: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        patientId: string | null;
        crewId: string | null;
        organizationId: string;
    }>;
    findAll(req: any, status?: string): Promise<({
        patient: {
            id: string;
            address: string | null;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            firstName: string;
            lastName: string;
            birthDate: Date | null;
            gender: string | null;
            phone: string | null;
            email: string | null;
            socialNumber: string | null;
            isActive: boolean;
        };
        crew: {
            members: ({
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    organizationId: string;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    email: string;
                    isActive: boolean;
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
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            vehicleId: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        patientId: string | null;
        crewId: string | null;
        organizationId: string;
    })[]>;
    findOne(id: string, req: any): Promise<{
        patient: {
            id: string;
            address: string | null;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            firstName: string;
            lastName: string;
            birthDate: Date | null;
            gender: string | null;
            phone: string | null;
            email: string | null;
            socialNumber: string | null;
            isActive: boolean;
        };
        crew: {
            members: ({
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    organizationId: string;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    email: string;
                    isActive: boolean;
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
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            vehicleId: string;
        };
        events: {
            data: import("@prisma/client/runtime/client").JsonValue | null;
            id: string;
            createdAt: Date;
            missionId: string;
            type: string;
        }[];
        documents: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            patientId: string | null;
            missionId: string | null;
            type: import("../../../generated/prisma/enums").DocumentType;
            filename: string;
            url: string;
            mimeType: string | null;
            sizeBytes: number | null;
            isEncrypted: boolean;
        }[];
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        patientId: string | null;
        crewId: string | null;
        organizationId: string;
    }>;
    assign(id: string, dto: AssignMissionDto, req: any): Promise<{
        id: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        patientId: string | null;
        crewId: string | null;
        organizationId: string;
    }>;
    updateStatus(id: string, dto: UpdateMissionDto, req: any): Promise<{
        id: string;
        status: import("../../../generated/prisma/enums").MissionStatus;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        patientId: string | null;
        crewId: string | null;
        organizationId: string;
    }>;
    getEvents(id: string, req: any): Promise<{
        data: import("@prisma/client/runtime/client").JsonValue | null;
        id: string;
        createdAt: Date;
        missionId: string;
        type: string;
    }[]>;
}

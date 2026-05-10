import { PrismaService } from '../prisma/prisma.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { AssignMissionDto } from './dto/assign-mission.dto';
export declare class MissionsService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    create(dto: CreateMissionDto, organizationId: string): Promise<{
        crew: {
            members: ({
                user: {
                    id: string;
                    phone: string | null;
                    email: string;
                    isActive: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    organizationId: string;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
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
        patient: {
            id: string;
            address: string | null;
            phone: string | null;
            email: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            firstName: string;
            lastName: string;
            birthDate: Date | null;
            gender: string | null;
            socialNumber: string | null;
        };
    } & {
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").MissionStatus;
        organizationId: string;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    }>;
    findAll(organizationId: string, status?: string): Promise<({
        crew: {
            members: ({
                user: {
                    id: string;
                    phone: string | null;
                    email: string;
                    isActive: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    organizationId: string;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
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
        patient: {
            id: string;
            address: string | null;
            phone: string | null;
            email: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            firstName: string;
            lastName: string;
            birthDate: Date | null;
            gender: string | null;
            socialNumber: string | null;
        };
    } & {
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").MissionStatus;
        organizationId: string;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    })[]>;
    findOne(id: string, organizationId: string): Promise<{
        crew: {
            members: ({
                user: {
                    id: string;
                    phone: string | null;
                    email: string;
                    isActive: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    organizationId: string;
                    passwordHash: string;
                    firstName: string;
                    lastName: string;
                    role: import("../../../generated/prisma/enums").UserRole;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
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
        patient: {
            id: string;
            address: string | null;
            phone: string | null;
            email: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            firstName: string;
            lastName: string;
            birthDate: Date | null;
            gender: string | null;
            socialNumber: string | null;
        };
        documents: {
            url: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            type: import("../../../generated/prisma/enums").DocumentType;
            patientId: string | null;
            missionId: string | null;
            filename: string;
            mimeType: string | null;
            sizeBytes: number | null;
            isEncrypted: boolean;
        }[];
        events: {
            id: string;
            createdAt: Date;
            type: string;
            data: import("@prisma/client/runtime/client").JsonValue | null;
            missionId: string;
        }[];
    } & {
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").MissionStatus;
        organizationId: string;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    }>;
    assign(id: string, dto: AssignMissionDto, organizationId: string): Promise<{
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").MissionStatus;
        organizationId: string;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    }>;
    updateStatus(id: string, dto: UpdateMissionDto, organizationId: string, userId: string): Promise<{
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums").MissionStatus;
        organizationId: string;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    }>;
    getEvents(id: string, organizationId: string): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        missionId: string;
    }[]>;
}

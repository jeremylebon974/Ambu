import { PrismaService } from '../prisma/prisma.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { AssignMissionDto } from './dto/assign-mission.dto';
export declare class MissionsService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    create(dto: CreateMissionDto, organizationId: string): Promise<{
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
    findAll(organizationId: string, status?: string): Promise<({
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
    findOne(id: string, organizationId: string): Promise<{
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
    assign(id: string, dto: AssignMissionDto, organizationId: string): Promise<{
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
    updateStatus(id: string, dto: UpdateMissionDto, organizationId: string, userId: string): Promise<{
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
    getEvents(id: string, organizationId: string): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        missionId: string;
        data: import("@prisma/client/runtime/client").JsonValue | null;
    }[]>;
}

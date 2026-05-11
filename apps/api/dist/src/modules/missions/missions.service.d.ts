import { PrismaService } from '../prisma/prisma.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto, MissionStatus } from './dto/update-mission.dto';
import { AssignMissionDto } from './dto/assign-mission.dto';
export declare class MissionsService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    create(dto: CreateMissionDto, organizationId: string): Promise<{
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
        status: MissionStatus;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    }>;
    findAll(organizationId: string, status?: string): Promise<({
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
        status: MissionStatus;
        crewId: string | null;
        priority: number;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
    })[]>;
    findOne(id: string, organizationId: string): Promise<{
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
        events: {
            id: string;
            createdAt: Date;
            type: string;
            missionId: string;
            data: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
    } & {
        id: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: MissionStatus;
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
        organizationId: string;
        status: MissionStatus;
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
        organizationId: string;
        status: MissionStatus;
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
        missionId: string;
        data: import("@prisma/client/runtime/client").JsonValue | null;
    }[]>;
}

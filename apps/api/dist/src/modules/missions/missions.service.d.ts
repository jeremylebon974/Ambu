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
            organizationId: string;
            createdAt: Date;
            isActive: boolean;
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
                    role: import("../../../generated/prisma/enums").UserRole;
                    organizationId: string;
                    createdAt: Date;
                    isActive: boolean;
                    updatedAt: Date;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    email: string;
                    passwordHash: string;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                };
            } & {
                id: string;
                userId: string;
                role: string;
                createdAt: Date;
                crewId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            name: string;
            isActive: boolean;
            updatedAt: Date;
            vehicleId: string;
        };
    } & {
        id: string;
        organizationId: string;
        createdAt: Date;
        status: MissionStatus;
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
            organizationId: string;
            createdAt: Date;
            isActive: boolean;
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
                    role: import("../../../generated/prisma/enums").UserRole;
                    organizationId: string;
                    createdAt: Date;
                    isActive: boolean;
                    updatedAt: Date;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    email: string;
                    passwordHash: string;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                };
            } & {
                id: string;
                userId: string;
                role: string;
                createdAt: Date;
                crewId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            name: string;
            isActive: boolean;
            updatedAt: Date;
            vehicleId: string;
        };
    } & {
        id: string;
        organizationId: string;
        createdAt: Date;
        status: MissionStatus;
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
            organizationId: string;
            createdAt: Date;
            isActive: boolean;
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
                    role: import("../../../generated/prisma/enums").UserRole;
                    organizationId: string;
                    createdAt: Date;
                    isActive: boolean;
                    updatedAt: Date;
                    firstName: string;
                    lastName: string;
                    phone: string | null;
                    email: string;
                    passwordHash: string;
                    refreshToken: string | null;
                    lastLoginAt: Date | null;
                };
            } & {
                id: string;
                userId: string;
                role: string;
                createdAt: Date;
                crewId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            name: string;
            isActive: boolean;
            updatedAt: Date;
            vehicleId: string;
        };
        events: {
            id: string;
            createdAt: Date;
            type: string;
            data: import("@prisma/client/runtime/client").JsonValue | null;
            missionId: string;
        }[];
        documents: {
            id: string;
            createdAt: Date;
            type: import("../../../generated/prisma/enums").DocumentType;
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
        organizationId: string;
        createdAt: Date;
        status: MissionStatus;
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
        organizationId: string;
        createdAt: Date;
        status: MissionStatus;
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
        organizationId: string;
        createdAt: Date;
        status: MissionStatus;
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
        createdAt: Date;
        type: string;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        missionId: string;
    }[]>;
}

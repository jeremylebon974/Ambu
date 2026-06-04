import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    private readonly logger;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(dto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("../../../generated/prisma/enums").UserRole;
            organizationId: string;
        };
    }>;
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("../../../generated/prisma/enums").UserRole;
            organizationId: string;
        };
    }>;
    refresh(userId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
    getMe(userId: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import("../../../generated/prisma/enums").UserRole;
        organizationId: string;
        organization: {
            id: string;
            email: string | null;
            isActive: boolean;
            phone: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            siret: string | null;
            address: string | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
        };
    }>;
    listUsers(organizationId: string): Promise<{
        id: string;
        email: string;
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
    }[]>;
    updateUser(id: string, dto: {
        firstName?: string;
        lastName?: string;
        email?: string;
        role?: string;
    }): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import("../../../generated/prisma/enums").UserRole;
    }>;
    createSession(userId: string, action: string, vehiclePlate?: string, organizationId?: string): Promise<{
        id: string;
        organizationId: string | null;
        createdAt: Date;
        action: string;
        entity: string;
        entityId: string | null;
        oldData: import("@prisma/client/runtime/client").JsonValue | null;
        newData: import("@prisma/client/runtime/client").JsonValue | null;
        ipAddress: string | null;
        userAgent: string | null;
        userId: string | null;
    }>;
    getSessions(userId: string): Promise<{
        id: string;
        organizationId: string | null;
        createdAt: Date;
        action: string;
        entity: string;
        entityId: string | null;
        oldData: import("@prisma/client/runtime/client").JsonValue | null;
        newData: import("@prisma/client/runtime/client").JsonValue | null;
        ipAddress: string | null;
        userAgent: string | null;
        userId: string | null;
    }[]>;
    deleteUser(id: string, requesterId: string): Promise<{
        message: string;
    }>;
    private generateTokens;
}

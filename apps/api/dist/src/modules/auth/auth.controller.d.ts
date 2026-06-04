import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RefreshDto } from './dto/refresh.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
    refresh(dto: RefreshDto, req: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
    getMe(req: any): Promise<{
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
    listUsers(req: any): Promise<{
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
    updateUser(id: string, body: any): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import("../../../generated/prisma/enums").UserRole;
    }>;
    createSession(body: {
        action: string;
        vehiclePlate?: string;
    }, req: any): Promise<{
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
    getSessions(userId: string, req: any): Promise<{
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
    deleteUser(id: string, req: any): Promise<{
        message: string;
    }>;
}

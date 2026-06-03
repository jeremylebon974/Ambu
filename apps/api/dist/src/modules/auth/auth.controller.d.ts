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
        firstName: string;
        lastName: string;
        role: import("../../../generated/prisma/enums").UserRole;
    }[]>;
    updateUser(id: string, body: any): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import("../../../generated/prisma/enums").UserRole;
    }>;
    deleteUser(id: string, req: any): Promise<{
        message: string;
    }>;
}

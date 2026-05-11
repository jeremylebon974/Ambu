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
            createdAt: Date;
            name: string;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            isActive: boolean;
            updatedAt: Date;
            address: string | null;
            phone: string | null;
            email: string | null;
            siret: string | null;
        };
    }>;
    private generateTokens;
}

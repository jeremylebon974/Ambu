import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      include: { organization: true },
    });
    if (!user) throw new UnauthorizedException('Email ou mot de passe incorrect');
    if (!user.isActive) throw new UnauthorizedException('Compte désactivé');
    const passwordValid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!passwordValid) throw new UnauthorizedException('Email ou mot de passe incorrect');
    await this.prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });
    const tokens = await this.generateTokens(user);
    this.logger.log(`Connexion : ${user.email}`);
    return { user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, organizationId: user.organizationId }, ...tokens };
  }

  async refresh(userId: string, refreshToken: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.refreshToken) throw new UnauthorizedException('Accès refusé');
    const tokenValid = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!tokenValid) throw new UnauthorizedException('Refresh token invalide');
    return this.generateTokens(user);
  }

  async logout(userId: string) {
    await this.prisma.user.update({ where: { id: userId }, data: { refreshToken: null } });
    return { message: 'Déconnexion réussie' };
  }

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { organization: true },
    });
    if (!user) throw new UnauthorizedException('Utilisateur introuvable');
    return { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, organizationId: user.organizationId, organization: user.organization };
  }

  private async generateTokens(user: any) {
    const payload = { sub: user.id, email: user.email, role: user.role, organizationId: user.organizationId };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET || 'dev-secret', expiresIn: '15m' }),
      this.jwtService.signAsync(payload, { secret: process.env.JWT_REFRESH_SECRET || 'dev-refresh', expiresIn: '7d' }),
    ]);
    const hashed = await bcrypt.hash(refreshToken, 10);
    await this.prisma.user.update({ where: { id: user.id }, data: { refreshToken: hashed } });
    return { accessToken, refreshToken };
  }
}

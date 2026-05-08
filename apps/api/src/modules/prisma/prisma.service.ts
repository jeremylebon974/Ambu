import 'dotenv/config';
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '../../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private pool: pg.Pool;
  private heartbeat: NodeJS.Timeout | null = null;

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL non définie — vérifiez apps/api/.env');
    }

    const pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      max: 10,
      min: 2,
      idleTimeoutMillis: 0,
      connectionTimeoutMillis: 10000,
      keepAlive: true,
      keepAliveInitialDelayMillis: 10000,
    });

    pool.on('error', () => {});

    const adapter = new PrismaPg(pool);
    super({ adapter });
    this.pool = pool;
  }

  async onModuleInit() {
    const client = await this.pool.connect();
    client.release();

    try {
      await this.$connect();
      this.logger.log('✅ Base de données connectée');
      this.heartbeat = setInterval(() => {
        void this.pool.query('SELECT 1').catch(() => undefined);
      }, 30000);
    } catch (error) {
      this.logger.error('❌ Erreur connexion', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    if (this.heartbeat) clearInterval(this.heartbeat);
    await this.$disconnect();
    await this.pool.end();
  }
}

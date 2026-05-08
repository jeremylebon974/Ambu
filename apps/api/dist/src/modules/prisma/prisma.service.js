"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PrismaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
require("dotenv/config");
const common_1 = require("@nestjs/common");
const client_1 = require("../../../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = __importDefault(require("pg"));
let PrismaService = PrismaService_1 = class PrismaService extends client_1.PrismaClient {
    constructor() {
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL non définie — vérifiez apps/api/.env');
        }
        const pool = new pg_1.default.Pool({
            connectionString: process.env.DATABASE_URL,
            max: 10,
            min: 2,
            idleTimeoutMillis: 0,
            connectionTimeoutMillis: 10000,
            keepAlive: true,
            keepAliveInitialDelayMillis: 10000,
        });
        pool.on('error', (_err) => { });
        const adapter = new adapter_pg_1.PrismaPg(pool);
        super({ adapter });
        this.logger = new common_1.Logger(PrismaService_1.name);
        this.heartbeat = null;
        this.pool = pool;
    }
    async onModuleInit() {
        const client = await this.pool.connect();
        client.release();
        try {
            await this.$connect();
            this.logger.log('✅ Base de données connectée');
            this.heartbeat = setInterval(async () => {
                try {
                    await this.pool.query('SELECT 1');
                }
                catch { }
            }, 30000);
        }
        catch (error) {
            this.logger.error('❌ Erreur connexion', error);
            throw error;
        }
    }
    async onModuleDestroy() {
        if (this.heartbeat)
            clearInterval(this.heartbeat);
        await this.$disconnect();
        await this.pool.end();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = PrismaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const bcrypt = __importStar(require("bcryptjs"));
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
});
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    console.log('🌱 Seed démarré...');
    const existingOrg = await prisma.organization.findFirst({
        where: { name: 'Groupe Ambulance Paille en Queue' },
    });
    const org = existingOrg || await prisma.organization.create({
        data: {
            name: 'Groupe Ambulance Paille en Queue',
            siret: '12345678901234',
            address: '1 rue des Ambulanciers, Nantes, 44000',
            phone: '02 40 00 00 00',
            email: 'contact@paille-en-queue.fr',
            isActive: true,
        },
    });
    console.log(`✅ Organisation : ${org.name}`);
    const adminPassword = await bcrypt.hash('Admin1234!', 10);
    const existingAdmin = await prisma.user.findUnique({
        where: { email: 'admin@paille-en-queue.fr' },
    });
    const admin = existingAdmin || await prisma.user.create({
        data: {
            organizationId: org.id,
            email: 'admin@paille-en-queue.fr',
            passwordHash: adminPassword,
            firstName: 'Jeremy',
            lastName: 'Admin',
            role: 'ADMIN',
            isActive: true,
        },
    });
    console.log(`✅ Admin : ${admin.email}`);
    const regulPassword = await bcrypt.hash('Regul1234!', 10);
    const existingRegul = await prisma.user.findUnique({
        where: { email: 'regulateur@paille-en-queue.fr' },
    });
    const regulateur = existingRegul || await prisma.user.create({
        data: {
            organizationId: org.id,
            email: 'regulateur@paille-en-queue.fr',
            passwordHash: regulPassword,
            firstName: 'Marie',
            lastName: 'Regulateur',
            role: 'REGULATEUR',
            isActive: true,
        },
    });
    console.log(`✅ Régulateur : ${regulateur.email}`);
    const ambPassword = await bcrypt.hash('Ambul1234!', 10);
    const existingAmb = await prisma.user.findUnique({
        where: { email: 'ambulancier@paille-en-queue.fr' },
    });
    const ambulancier = existingAmb || await prisma.user.create({
        data: {
            organizationId: org.id,
            email: 'ambulancier@paille-en-queue.fr',
            passwordHash: ambPassword,
            firstName: 'Thomas',
            lastName: 'Dupont',
            role: 'AMBULANCIER',
            isActive: true,
        },
    });
    console.log(`✅ Ambulancier : ${ambulancier.email}`);
    console.log('');
    console.log('🎉 Seed terminé !');
    console.log('');
    console.log('Comptes de test :');
    console.log('  Admin       : admin@paille-en-queue.fr / Admin1234!');
    console.log('  Régulateur  : regulateur@paille-en-queue.fr / Regul1234!');
    console.log('  Ambulancier : ambulancier@paille-en-queue.fr / Ambul1234!');
}
main()
    .catch(console.error)
    .finally(() => pool.end());
//# sourceMappingURL=seed.js.map
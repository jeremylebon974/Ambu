import "dotenv/config";
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

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
      role: 'ADMIN' as any,
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
      role: 'REGULATEUR' as any,
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
      role: 'AMBULANCIER' as any,
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

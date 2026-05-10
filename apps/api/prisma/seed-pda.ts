import "dotenv/config";
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  console.log('🌱 Seed PDA VIEsionnaire...');

  const org = await prisma.organization.findFirst();
  if (!org) throw new Error('Organisation non trouvée — lance seed.ts d\'abord');

  const vehicles = await prisma.vehicle.findMany({
    where: { organizationId: org.id },
    orderBy: { plate: 'asc' },
  });

  const pdas = [];

  for (let i = 1; i <= 30; i++) {
    const reference = `PDA-${String(i).padStart(3, '0')}`;
    const vehicle = vehicles[i - 1] || null;

    const existing = await prisma.pda.findUnique({ where: { reference } });
    if (!existing) {
      const pda = await prisma.pda.create({
        data: {
          reference,
          organizationId: org.id,
          vehicleId: vehicle?.id || null,
          isActive: true,
        },
      });
      pdas.push(pda);
      console.log(`✅ ${reference} → Véhicule ${vehicle?.plate || 'Non assigné'}`);
    } else {
      pdas.push(existing);
      console.log(`⏭️  ${reference} — déjà existant`);
    }
  }

  console.log('\n🎉 Seed PDA terminé !');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ ${pdas.length} PDA créés`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\nRéférences PDA-001 à PDA-030');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcryptjs';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  console.log('🌱 Seed démo VIEsionnaire...');

  // Organisation
  const org = await prisma.organization.findFirst();
  if (!org) throw new Error('Organisation non trouvée — lance seed.ts d\'abord');

  // ── VÉHICULES ─────────────────────────────────────────
  const DEPOT = { latitude: -21.3647, longitude: 55.6182 };

  const vehiculesData = [
    { plate: '798', type: 'AMBULANCE', status: 'AVAILABLE',    constraints: { capacite: 1, brancard: true,  fauteuil: false, oxygene: true,  defibrillateur: true  } },
    { plate: '817', type: 'AMBULANCE', status: 'AVAILABLE',    constraints: { capacite: 1, brancard: true,  fauteuil: false, oxygene: true,  defibrillateur: true  } },
    { plate: '275', type: 'AMBULANCE', status: 'AVAILABLE',    constraints: { capacite: 1, brancard: true,  fauteuil: false, oxygene: true,  defibrillateur: false } },
    { plate: '694', type: 'AMBULANCE', status: 'ON_MISSION',   constraints: { capacite: 1, brancard: true,  fauteuil: false, oxygene: true,  defibrillateur: true  } },
    { plate: '652', type: 'VSL',       status: 'AVAILABLE',    constraints: { capacite: 3, brancard: false, fauteuil: true,  oxygene: false, defibrillateur: false } },
    { plate: 'DY',  type: 'VSL',       status: 'AVAILABLE',    constraints: { capacite: 3, brancard: false, fauteuil: true,  oxygene: false, defibrillateur: false } },
    { plate: '539', type: 'AMBULANCE', status: 'AVAILABLE',    constraints: { capacite: 1, brancard: true,  fauteuil: false, oxygene: true,  defibrillateur: true  } },
    { plate: '399', type: 'AMBULANCE', status: 'AVAILABLE',    constraints: { capacite: 1, brancard: true,  fauteuil: false, oxygene: false, defibrillateur: false } },
    { plate: '818', type: 'AMBULANCE', status: 'MAINTENANCE',  constraints: { capacite: 1, brancard: true,  fauteuil: false, oxygene: true,  defibrillateur: true  } },
    { plate: '697', type: 'VSL',       status: 'AVAILABLE',    constraints: { capacite: 3, brancard: false, fauteuil: true,  oxygene: false, defibrillateur: false } },
    { plate: '985', type: 'AMBULANCE', status: 'ON_MISSION',   constraints: { capacite: 1, brancard: true,  fauteuil: false, oxygene: true,  defibrillateur: false } },
    { plate: '751', type: 'VSL',       status: 'AVAILABLE',    constraints: { capacite: 3, brancard: false, fauteuil: true,  oxygene: false, defibrillateur: false } },
    { plate: '515', type: 'AMBULANCE', status: 'AVAILABLE',    constraints: { capacite: 1, brancard: true,  fauteuil: false, oxygene: true,  defibrillateur: true  } },
    { plate: '102', type: 'AMBULANCE', status: 'AVAILABLE',    constraints: { capacite: 1, brancard: true,  fauteuil: false, oxygene: false, defibrillateur: false } },
    { plate: '219', type: 'VSL',       status: 'AVAILABLE',    constraints: { capacite: 3, brancard: false, fauteuil: true,  oxygene: false, defibrillateur: false } },
  ];

  const vehicules: any[] = [];
  for (const v of vehiculesData) {
    const existing = await prisma.vehicle.findFirst({ where: { plate: v.plate, organizationId: org.id } });
    if (!existing) {
      const created = await prisma.vehicle.create({
        data: {
          plate: v.plate,
          model: v.type === 'AMBULANCE' ? 'Mercedes Sprinter' : 'Citroën Berlingo',
          type: v.type,
          status: v.status as any,
          organizationId: org.id,
          metadata: v.constraints,
        },
      });
      await prisma.gpsTrack.create({
        data: {
          vehicleId: created.id,
          latitude: DEPOT.latitude,
          longitude: DEPOT.longitude,
          speed: 0,
          heading: 0,
        },
      });
      vehicules.push(created);
      console.log(`✅ Véhicule ${v.plate}`);
    } else {
      vehicules.push(existing);
    }
  }

  // ── PERSONNEL ─────────────────────────────────────────
  const personnelData = [
    { lastName: 'AUGUSTINE', firstName: 'Kevin', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'AUTAL', firstName: 'Jean Cédric', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'BOYER', firstName: 'Jean Florent', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'DIJOUX', firstName: 'Mike Boris', role: 'AMBULANCIER', diplome: 'AA' },
    { lastName: 'FONTAINE', firstName: 'Fred', role: 'AMBULANCIER', diplome: 'AA' },
    { lastName: 'FONTAINE', firstName: 'Mathieu', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'FRANCOMME', firstName: 'Aurélien', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'HANNIER', firstName: 'Mikael', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'HOARAU', firstName: 'Ophélie', role: 'AMBULANCIER', diplome: 'AA' },
    { lastName: 'LEBIHAN', firstName: 'Johan', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'MAILLOT', firstName: 'Memona', role: 'AMBULANCIER', diplome: 'AA' },
    { lastName: 'MOREL', firstName: 'Mickaël', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'NATIVEL', firstName: 'Gérard', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'OLIVAR', firstName: 'Sandrine', role: 'AMBULANCIER', diplome: 'AA' },
    { lastName: 'PAYET', firstName: 'Alexia', role: 'AMBULANCIER', diplome: 'AA' },
    { lastName: 'PAYET', firstName: 'Emilienne', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'PAYET', firstName: 'Eva Marie', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'PRIANON', firstName: 'Roberto', role: 'AMBULANCIER', diplome: 'AA' },
    { lastName: 'RAMANA', firstName: 'Paul', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'ROBIN', firstName: 'Emeline', role: 'AMBULANCIER', diplome: 'AA' },
    { lastName: 'VENARD', firstName: 'Anne Sophie', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'VENARD', firstName: 'Raphaël', role: 'AMBULANCIER', diplome: 'DEA' },
    { lastName: 'VLODY', firstName: 'Sabine', role: 'AMBULANCIER', diplome: 'AA' },
  ];

  const users: any[] = [];
  const passwordHash = await bcrypt.hash('Ambul1234!', 10);

  for (const p of personnelData) {
    const email = `${p.firstName.toLowerCase().replace(/ /g, '.').normalize('NFD').replace(/[̀-ͯ]/g, '')}.${p.lastName.toLowerCase()}@viesionnaire.fr`;
    const existing = await prisma.user.findUnique({ where: { email } });
    if (!existing) {
      const created = await prisma.user.create({
        data: {
          email,
          passwordHash,
          firstName: p.firstName,
          lastName: p.lastName,
          role: p.role as any,
          organizationId: org.id,
          isActive: true,
        },
      });
      users.push({ ...created, diplome: p.diplome });
      console.log(`✅ ${p.lastName} ${p.firstName} — ${p.diplome}`);
    } else {
      users.push({ ...existing, diplome: p.diplome });
    }
  }

  // ── ÉQUIPAGES ─────────────────────────────────────────
  const equipages = [
    { vehicule: '798', membres: ['AUGUSTINE', 'AUTAL'] },
    { vehicule: '817', membres: ['BOYER', 'DIJOUX'] },
    { vehicule: '275', membres: ['FONTAINE', 'FRANCOMME'] },
    { vehicule: '694', membres: ['HANNIER', 'HOARAU'] },
    { vehicule: '652', membres: ['LEBIHAN'] },
    { vehicule: '539', membres: ['MOREL', 'NATIVEL'] },
    { vehicule: '399', membres: ['PAYET', 'PRIANON'] },
  ];

  for (const eq of equipages) {
    const vehicule = vehicules.find(v => v.plate === eq.vehicule);
    if (!vehicule) continue;

    const existingCrew = await prisma.crew.findFirst({ where: { vehicleId: vehicule.id } });
    if (existingCrew) continue;

    const crew = await prisma.crew.create({
      data: {
        name: `Équipage ${eq.vehicule}`,
        vehicleId: vehicule.id,
        isActive: true,
      },
    });

    for (const nom of eq.membres) {
      const user = users.find(u => u.lastName === nom);
      if (!user) continue;
      await prisma.crewMember.create({
        data: { crewId: crew.id, userId: user.id, role: 'AMBULANCIER' },
      });
    }
    console.log(`✅ Équipage véhicule ${eq.vehicule}`);
  }

  // ── PATIENTS ──────────────────────────────────────────
  const patientsData = [
    { lastName: 'DUPONT', firstName: 'Jean', socialNumber: '1850612974012', address: '12 Rue de la Paix, Saint-Denis 97400' },
    { lastName: 'MARTIN', firstName: 'Marie', socialNumber: '2780934521043', address: '45 Avenue de la Victoire, Saint-Pierre 97410' },
    { lastName: 'BERNARD', firstName: 'Pierre', socialNumber: '1650823456789', address: '8 Rue des Flamboyants, Le Tampon 97430' },
    { lastName: 'THOMAS', firstName: 'Sylvie', socialNumber: '2710445678901', address: '23 Chemin des Lataniers, Saint-Paul 97460' },
    { lastName: 'ROBERT', firstName: 'Michel', socialNumber: '1560756789012', address: '67 Rue Sainte-Marie, Sainte-Marie 97438' },
  ];

  const patients: any[] = [];
  for (const p of patientsData) {
    const existing = await prisma.patient.findFirst({ where: { lastName: p.lastName, organizationId: org.id } });
    if (!existing) {
      const created = await prisma.patient.create({
        data: {
          lastName: p.lastName,
          firstName: p.firstName,
          socialNumber: p.socialNumber,
          address: p.address,
          organizationId: org.id,
        },
      });
      patients.push(created);
      console.log(`✅ Patient ${p.lastName} ${p.firstName}`);
    } else {
      patients.push(existing);
    }
  }

  // ── MISSIONS ──────────────────────────────────────────
  const crew1 = await prisma.crew.findFirst({ include: { vehicle: true } });

  const missionsData = [
    { status: 'PENDING', priority: 1, address: '12 Rue de la Paix, Saint-Denis → CHU Réunion', patientIndex: 0 },
    { status: 'ASSIGNED', priority: 2, address: '45 Avenue de la Victoire, Saint-Pierre → Clinique Sainte-Clotilde', patientIndex: 1 },
    { status: 'EN_ROUTE',        priority: 3, address: '8 Rue des Flamboyants, Le Tampon → Centre Dialyse Sud', patientIndex: 2 },
    { status: 'COMPLETED', priority: 3, address: '23 Chemin des Lataniers, Saint-Paul → CHU Réunion', patientIndex: 3 },
    { status: 'PENDING', priority: 2, address: '67 Rue Sainte-Marie → Clinique Les Tamarins', patientIndex: 4 },
  ];

  for (const m of missionsData) {
    await prisma.mission.create({
      data: {
        status: m.status as any,
        priority: m.priority as any,
        address: m.address,
        organizationId: org.id,
        patientId: patients[m.patientIndex]?.id,
        crewId: crew1?.id,
      },
    });
    console.log(`✅ Mission ${m.priority} — ${m.status}`);
  }

  console.log('\n🎉 Seed démo terminé !');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ ${vehiculesData.length} véhicules`);
  console.log(`✅ ${personnelData.length} salariés`);
  console.log(`✅ ${equipages.length} équipages`);
  console.log(`✅ ${patientsData.length} patients`);
  console.log(`✅ ${missionsData.length} missions`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

main()
  .catch(console.error)
  .finally(() => pool.end());

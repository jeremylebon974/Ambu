'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../../../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

function LogoViesionnaire({ height = 32, onClick }: { height?: number; onClick?: () => void }) {
  return (
    <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg height={height} viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2 L22 36 L42 2 L35 2 L22 26 L9 2 Z" fill="white"/>
        <rect x="24" y="0" width="9" height="7" rx="1" fill="#EF4444" transform="rotate(-12 28 3)"/>
        <path d="M26 8 L34 8 L42 2 L35 2 Z" fill="#cccccc" opacity="0.4"/>
      </svg>
      <div style={{ fontSize: '15px', fontWeight: '900', letterSpacing: '-0.01em', fontFamily: 'DM Sans, sans-serif' }}>
        <span style={{ color: '#EF4444' }}>VIE</span>
        <span style={{ color: '#FFFFFF' }}>sionnaire</span>
      </div>
    </div>
  );
}

const DIPLOME_COLORS: Record<string, string> = {
  DEA: '#14B8A6',
  AA: '#3B82F6',
  VSL: '#F59E0B',
  Taxi: '#8B5CF6',
};

const personnel = [
  { lastName: 'AUGUSTINE', firstName: 'Kevin', diplome: 'DEA', statut: 'EN SERVICE', vehicule: 'AMB-001' },
  { lastName: 'AUTAL', firstName: 'Jean Cédric', diplome: 'DEA', statut: 'EN SERVICE', vehicule: 'AMB-002' },
  { lastName: 'BOYER', firstName: 'Jean Florent', diplome: 'DEA', statut: 'REPOS', vehicule: '—' },
  { lastName: 'DIJOUX', firstName: 'Mike Boris', diplome: 'AA', statut: 'EN SERVICE', vehicule: 'AMB-003' },
  { lastName: 'FONTAINE', firstName: 'Fred', diplome: 'AA', statut: 'REPOS', vehicule: '—' },
  { lastName: 'FONTAINE', firstName: 'Mathieu', diplome: 'DEA', statut: 'EN SERVICE', vehicule: 'VSL-001' },
  { lastName: 'FRANCOMME', firstName: 'Aurélien', diplome: 'DEA', statut: 'EN SERVICE', vehicule: 'AMB-004' },
  { lastName: 'HANNIER', firstName: 'Mikael', diplome: 'DEA', statut: 'REPOS', vehicule: '—' },
  { lastName: 'HOARAU', firstName: 'Ophélie', diplome: 'AA', statut: 'EN SERVICE', vehicule: 'AMB-005' },
  { lastName: 'LEBIHAN', firstName: 'Johan', diplome: 'DEA', statut: 'EN SERVICE', vehicule: 'AMB-006' },
  { lastName: 'MAILLOT', firstName: 'Memona', diplome: 'AA', statut: 'REPOS', vehicule: '—' },
  { lastName: 'MOREL', firstName: 'Mickaël', diplome: 'DEA', statut: 'EN SERVICE', vehicule: 'VSL-002' },
  { lastName: 'NATIVEL', firstName: 'Gérard', diplome: 'DEA', statut: 'EN SERVICE', vehicule: 'AMB-007' },
  { lastName: 'OLIVAR', firstName: 'Sandrine', diplome: 'AA', statut: 'REPOS', vehicule: '—' },
  { lastName: 'PAYET', firstName: 'Alexia', diplome: 'AA', statut: 'EN SERVICE', vehicule: 'AMB-008' },
  { lastName: 'PAYET', firstName: 'Emilienne', diplome: 'DEA', statut: 'REPOS', vehicule: '—' },
  { lastName: 'PAYET', firstName: 'Eva Marie', diplome: 'DEA', statut: 'EN SERVICE', vehicule: 'AMB-009' },
  { lastName: 'PRIANON', firstName: 'Roberto', diplome: 'AA', statut: 'EN SERVICE', vehicule: 'VSL-003' },
  { lastName: 'RAMANA', firstName: 'Paul', diplome: 'DEA', statut: 'REPOS', vehicule: '—' },
  { lastName: 'ROBIN', firstName: 'Emeline', diplome: 'AA', statut: 'EN SERVICE', vehicule: 'AMB-010' },
  { lastName: 'VENARD', firstName: 'Anne Sophie', diplome: 'DEA', statut: 'EN SERVICE', vehicule: 'AMB-011' },
  { lastName: 'VENARD', firstName: 'Raphaël', diplome: 'DEA', statut: 'REPOS', vehicule: '—' },
  { lastName: 'VLODY', firstName: 'Sabine', diplome: 'AA', statut: 'EN SERVICE', vehicule: 'AMB-012' },
];

export default function DirectionPersonnelPage() {
  const router = useRouter();
  const [filtreDiplome, setFiltreDiplome] = useState('Tous');
  const [recherche, setRecherche] = useState('');
  const [vehiclePlates, setVehiclePlates] = useState<string[]>([]);

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=direction'); return; }
    loadVehicles();
  }, [router]);

  const loadVehicles = async () => {
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/vehicles`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setVehiclePlates(data.map((v: any) => v.plate).filter(Boolean));
        }
      }
    } catch {}
  };

  // Associe les plaques réelles aux personnels EN SERVICE (par ordre d'apparition)
  const getVehicleForPersonnel = (p: typeof personnel[0], index: number): string => {
    if (p.statut !== 'EN SERVICE') return '—';
    const enServiceIndex = personnel
      .filter(x => x.statut === 'EN SERVICE')
      .indexOf(p);
    return vehiclePlates[enServiceIndex] || p.vehicule;
  };

  const filtered = personnel.filter(p => {
    const matchDiplome = filtreDiplome === 'Tous' || p.diplome === filtreDiplome;
    const matchRecherche = recherche === '' ||
      `${p.lastName} ${p.firstName}`.toLowerCase().includes(recherche.toLowerCase());
    return matchDiplome && matchRecherche;
  });

  const stats = {
    total: personnel.length,
    dea: personnel.filter(p => p.diplome === 'DEA').length,
    aa: personnel.filter(p => p.diplome === 'AA').length,
    vsl: personnel.filter(p => p.diplome === 'VSL').length,
    enService: personnel.filter(p => p.statut === 'EN SERVICE').length,
  };

  return (
    <div style={{ minHeight: '100vh', background: '#07090F', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5' }}>

      {/* HEADER */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          background: '#0D1017',
          borderBottom: '1px solid #1E2535',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>
        <LogoViesionnaire height={26} onClick={() => router.push('/direction')} />
      </motion.div>

      <div style={{ padding: '24px 32px', maxWidth: '1100px', margin: '0 auto' }}>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px' }}
        >
          👥 Personnel — Gestion des équipes
        </motion.h1>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}
        >
          {[
            { label: 'Total', value: stats.total, color: '#E8ECF5' },
            { label: 'DEA', value: stats.dea, color: '#14B8A6' },
            { label: 'AA', value: stats.aa, color: '#3B82F6' },
            { label: 'VSL', value: stats.vsl, color: '#F59E0B' },
            { label: 'En service', value: stats.enService, color: '#22C55E' },
          ].map(s => (
            <div key={s.label} style={{
              background: '#0D1017',
              border: `1px solid ${s.color}25`,
              borderRadius: '10px',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ fontSize: '22px', fontWeight: '800', color: s.color, fontFamily: 'DM Mono, monospace' }}>{s.value}</span>
              <span style={{ fontSize: '12px', color: '#6B7A99' }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Filtres + Recherche */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}
        >
          <input
            value={recherche}
            onChange={e => setRecherche(e.target.value)}
            placeholder="🔍 Rechercher par nom..."
            style={{
              flex: 1,
              minWidth: '200px',
              background: '#111622',
              border: '1px solid #2A3348',
              borderRadius: '10px',
              color: '#E8ECF5',
              padding: '10px 14px',
              fontSize: '13px',
              fontFamily: 'DM Sans, sans-serif',
              outline: 'none',
            }}
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            {['Tous', 'DEA', 'AA', 'VSL', 'Taxi'].map(f => (
              <button
                key={f}
                onClick={() => setFiltreDiplome(f)}
                style={{
                  background: filtreDiplome === f ? (DIPLOME_COLORS[f] || '#14B8A6') + '20' : '#111622',
                  border: `1px solid ${filtreDiplome === f ? (DIPLOME_COLORS[f] || '#14B8A6') : '#2A3348'}`,
                  borderRadius: '8px',
                  color: filtreDiplome === f ? (DIPLOME_COLORS[f] || '#14B8A6') : '#6B7A99',
                  padding: '8px 14px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: filtreDiplome === f ? '700' : '400',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >{f}</button>
            ))}
          </div>
        </motion.div>

        {/* Tableau */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '14px', overflow: 'hidden' }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#111622', borderBottom: '1px solid #1E2535' }}>
                {['Nom Prénom', 'Diplôme', 'Statut', 'Véhicule', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, index) => (
                <tr key={`${p.lastName}-${p.firstName}`} style={{ borderBottom: '1px solid #1E2535' }}>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#E8ECF5' }}>{p.lastName}</div>
                    <div style={{ fontSize: '12px', color: '#6B7A99' }}>{p.firstName}</div>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      background: (DIPLOME_COLORS[p.diplome] || '#6B7A99') + '20',
                      color: DIPLOME_COLORS[p.diplome] || '#6B7A99',
                      border: `1px solid ${(DIPLOME_COLORS[p.diplome] || '#6B7A99')}40`,
                      borderRadius: '6px',
                      padding: '3px 10px',
                      fontSize: '12px',
                      fontWeight: '700',
                    }}>{p.diplome}</span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      fontSize: '12px',
                      color: p.statut === 'EN SERVICE' ? '#22C55E' : '#6B7A99',
                      fontWeight: '600',
                    }}>
                      {p.statut === 'EN SERVICE' ? '● ' : '○ '}{p.statut}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6B7A99', fontFamily: 'DM Mono, monospace' }}>
                    {getVehicleForPersonnel(p, index)}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <button
                      onClick={() => router.push('/planning')}
                      style={{
                        background: '#3B82F620',
                        border: '1px solid #3B82F640',
                        borderRadius: '6px',
                        color: '#3B82F6',
                        padding: '5px 12px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '600',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >📅 Planning</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>
                    Aucun résultat
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}

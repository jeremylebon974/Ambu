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

const MONTANT: Record<number, number> = { 1: 150, 2: 110, 3: 85, 4: 65 };
const MONTANT_DEFAULT = 85;

const STATUS_LABEL: Record<string, string> = {
  COMPLETED: 'Facturée',
  VALIDATED: 'Validée',
  PENDING: 'En attente',
  ASSIGNED: 'En attente',
  EN_ROUTE: 'En attente',
  ON_SCENE: 'En attente',
  TRANSPORTING: 'En attente',
  CANCELLED: 'Annulée',
};

const STATUS_COLOR: Record<string, string> = {
  COMPLETED: '#22C55E',
  VALIDATED: '#14B8A6',
  PENDING: '#F59E0B',
  ASSIGNED: '#F59E0B',
  EN_ROUTE: '#F59E0B',
  ON_SCENE: '#F59E0B',
  TRANSPORTING: '#3B82F6',
  CANCELLED: '#EF4444',
};

export default function DirectionFacturationPage() {
  const router = useRouter();
  const [missions, setMissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtre, setFiltre] = useState('Toutes');

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=direction'); return; }
    loadMissions();
  }, [router]);

  const loadMissions = async () => {
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/missions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMissions(Array.isArray(data) ? data : []);
    } catch {
      setMissions([]);
    } finally {
      setLoading(false);
    }
  };

  const getMontant = (m: any) => MONTANT[m.priority] ?? MONTANT_DEFAULT;

  const filtered = missions.filter(m => {
    if (filtre === 'Toutes') return true;
    if (filtre === 'Facturées') return m.status === 'COMPLETED' || m.status === 'VALIDATED';
    if (filtre === 'En attente') return ['PENDING', 'ASSIGNED', 'EN_ROUTE', 'ON_SCENE', 'TRANSPORTING'].includes(m.status);
    if (filtre === 'Annulées') return m.status === 'CANCELLED';
    return true;
  });

  const completees = missions.filter(m => m.status === 'COMPLETED' || m.status === 'VALIDATED');
  const caEstime = completees.reduce((sum, m) => sum + getMontant(m), 0);
  const enAttente = missions.filter(m => ['PENDING', 'ASSIGNED', 'EN_ROUTE', 'ON_SCENE', 'TRANSPORTING'].includes(m.status)).length;
  const tauxRecouvrement = missions.length > 0
    ? Math.round((completees.length / missions.length) * 100)
    : 0;

  const exportCSV = () => {
    const rows = [
      ['Date', 'Patient', 'Priorité', 'Montant', 'Statut'],
      ...filtered.map(m => [
        m.scheduledAt ? new Date(m.scheduledAt).toLocaleDateString('fr-FR') : '—',
        m.patient ? `${m.patient.lastName} ${m.patient.firstName}` : '—',
        `P${m.priority}`,
        `${getMontant(m)} €`,
        STATUS_LABEL[m.status] || m.status,
      ]),
    ];
    const csv = rows.map(r => r.join(';')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'facturation-viesionnaire.csv';
    a.click();
    URL.revokeObjectURL(url);
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
        <div style={{ flex: 1 }} />
        <button
          onClick={() => router.push('/regulateur')}
          style={{ background: 'transparent', border: '1px solid #1E2535', borderRadius: '8px', color: '#6B7A99', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}
        >🔗 Vers régulateur</button>
      </motion.div>

      <div style={{ padding: '24px 32px', maxWidth: '1100px', margin: '0 auto' }}>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px' }}
        >
          💶 Facturation
        </motion.h1>

        {/* KPIs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '28px' }}
        >
          {[
            { label: 'CA estimé', value: `${caEstime.toLocaleString('fr-FR')} €`, color: '#22C55E', icon: '💶' },
            { label: 'Missions facturées', value: completees.length, color: '#14B8A6', icon: '✅' },
            { label: 'En attente', value: enAttente, color: '#F59E0B', icon: '⏳' },
            { label: 'Taux recouvrement', value: `${tauxRecouvrement}%`, color: tauxRecouvrement >= 70 ? '#22C55E' : '#EF4444', icon: '📊' },
          ].map(kpi => (
            <div key={kpi.label} style={{
              background: '#0D1017',
              border: `1px solid ${kpi.color}25`,
              borderRadius: '14px',
              padding: '20px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{kpi.label}</span>
                <span style={{ fontSize: '20px' }}>{kpi.icon}</span>
              </div>
              <div style={{ fontSize: '26px', fontWeight: '800', color: kpi.color, fontFamily: 'DM Mono, monospace' }}>{kpi.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Filtres + Export */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}
        >
          {['Toutes', 'Facturées', 'En attente', 'Annulées'].map(f => (
            <button
              key={f}
              onClick={() => setFiltre(f)}
              style={{
                background: filtre === f ? '#22C55E20' : '#111622',
                border: `1px solid ${filtre === f ? '#22C55E' : '#2A3348'}`,
                borderRadius: '8px',
                color: filtre === f ? '#22C55E' : '#6B7A99',
                padding: '8px 14px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: filtre === f ? '700' : '400',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >{f}</button>
          ))}
          <div style={{ flex: 1 }} />
          <button
            onClick={exportCSV}
            style={{
              background: '#3B82F620',
              border: '1px solid #3B82F640',
              borderRadius: '8px',
              color: '#3B82F6',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: '600',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >📥 Exporter CSV</button>
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
                {['Date', 'Patient', 'Type transport', 'Priorité', 'Montant estimé', 'Statut'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>Chargement...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>Aucune mission</td></tr>
              ) : filtered.map(m => (
                <tr key={m.id} style={{ borderBottom: '1px solid #1E2535' }}>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6B7A99' }}>
                    {m.scheduledAt ? new Date(m.scheduledAt).toLocaleDateString('fr-FR') : '—'}
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#E8ECF5' }}>
                    {m.patient ? `${m.patient.lastName} ${m.patient.firstName}` : '—'}
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6B7A99' }}>
                    {m.type || 'Ambulance'}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      background: m.priority === 1 ? '#EF444420' : m.priority === 2 ? '#F59E0B20' : '#14B8A620',
                      color: m.priority === 1 ? '#EF4444' : m.priority === 2 ? '#F59E0B' : '#14B8A6',
                      border: `1px solid ${m.priority === 1 ? '#EF444440' : m.priority === 2 ? '#F59E0B40' : '#14B8A640'}`,
                      borderRadius: '6px',
                      padding: '2px 8px',
                      fontSize: '12px',
                      fontWeight: '700',
                    }}>P{m.priority}</span>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '14px', fontWeight: '700', color: '#22C55E', fontFamily: 'DM Mono, monospace' }}>
                    {getMontant(m)} €
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      background: (STATUS_COLOR[m.status] || '#6B7A99') + '20',
                      color: STATUS_COLOR[m.status] || '#6B7A99',
                      border: `1px solid ${(STATUS_COLOR[m.status] || '#6B7A99')}40`,
                      borderRadius: '6px',
                      padding: '3px 10px',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}>{STATUS_LABEL[m.status] || m.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}

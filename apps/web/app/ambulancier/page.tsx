'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../../lib/auth';
import { DirectionBadge } from '../../components/DirectionBadge';

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

const statusColors: Record<string, string> = {
  PENDING: '#F59E0B',
  ASSIGNED: '#3B82F6',
  EN_ROUTE: '#8B5CF6',
  ON_SCENE: '#14B8A6',
  TRANSPORTING: '#06B6D4',
  COMPLETED: '#22C55E',
  CANCELLED: '#EF4444',
};

const statusLabels: Record<string, string> = {
  PENDING: 'En attente',
  ASSIGNED: 'Assignée',
  EN_ROUTE: 'En route',
  ON_SCENE: 'Sur place',
  TRANSPORTING: 'En transport',
  COMPLETED: 'Terminée',
  CANCELLED: 'Annulée',
};

export default function AmbulanciePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [missions, setMissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statut, setStatut] = useState('EN SERVICE');
  const [sosEnvoye, setSosEnvoye] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=ambulancier'); return; }
    loadData();
  }, [router]);

  const loadData = async () => {
    const u = auth.getUser();
    setUser(u);
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/missions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setMissions(Array.isArray(data) ? data : []);
      }
    } catch {}
    setLoading(false);
  };

  const envoyerSOS = async () => {
    try {
      const token = auth.getToken();
      await fetch(`${API_URL}/pda/incident`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ type: 'SOS', gravite: 'CRITIQUE', description: 'Alerte SOS régulation' }),
      });
    } catch (_) {}
    setSosEnvoye(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#07090F', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5' }}>
      <DirectionBadge />

      {/* HEADER MOBILE */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          background: '#0D1017',
          borderBottom: '1px solid #1E2535',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '16px', padding: '0 4px' }}>←</button>
          <LogoViesionnaire height={26} onClick={() => router.push('/ambulancier')} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: '#14B8A620',
              color: '#14B8A6',
              border: '1px solid #14B8A640',
              borderRadius: '20px',
              padding: '4px 12px',
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            ● {statut}
          </motion.div>
          <button
            onClick={() => { auth.logout(); router.push('/'); }}
            style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}
          >⏻</button>
        </div>
      </motion.div>

      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>

        {/* STATUT RAPIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'linear-gradient(135deg, #14B8A620, #3B82F610)',
            border: '1px solid #14B8A630',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: '13px', color: '#6B7A99', marginBottom: '4px' }}>Mon statut</div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#14B8A6' }}>{statut}</div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['EN SERVICE', 'PAUSE', 'FIN DE SERVICE'].map(s => (
              <button
                key={s}
                onClick={() => setStatut(s)}
                style={{
                  background: statut === s ? '#14B8A6' : '#111622',
                  border: '1px solid #1E2535',
                  borderRadius: '8px',
                  color: statut === s ? 'white' : '#6B7A99',
                  padding: '6px 10px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  fontWeight: '600',
                }}
              >{s}</button>
            ))}
          </div>
        </motion.div>

        {/* MISSIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: '20px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '700', margin: 0 }}>Mes missions du jour</h2>
            <span style={{ color: '#6B7A99', fontSize: '12px' }}>{missions.length} mission{missions.length !== 1 ? 's' : ''}</span>
          </div>

          {loading ? (
            <div style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '14px', padding: '32px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>
              Chargement...
            </div>
          ) : missions.length === 0 ? (
            <div style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '14px', padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📋</div>
              <div style={{ color: '#6B7A99', fontSize: '13px' }}>Aucune mission assignée</div>
              <div style={{ color: '#3A4560', fontSize: '12px', marginTop: '4px' }}>La régulation vous contactera bientôt</div>
            </div>
          ) : missions.map((m: any) => (
            <div key={m.id} onClick={() => router.push(`/missions/${m.id}`)}
              style={{ cursor: 'pointer', background: '#0D1017', border: `1px solid ${statusColors[m.status] || '#1E2535'}30`, borderRadius: '14px', padding: '16px', marginBottom: '10px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', color: '#6B7A99', fontFamily: 'DM Mono, monospace' }}>{m.id?.slice(-8).toUpperCase()}</span>
                <span style={{ fontSize: '11px', fontWeight: '700', color: statusColors[m.status] || '#6B7A99', background: (statusColors[m.status] || '#6B7A99') + '20', border: `1px solid ${statusColors[m.status] || '#6B7A99'}40`, borderRadius: '20px', padding: '2px 10px' }}>
                  {statusLabels[m.status] || m.status}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: '#E8ECF5', marginBottom: '4px' }}>{m.address || '—'}</div>
              {m.patient && <div style={{ fontSize: '12px', color: '#6B7A99' }}>👤 {m.patient.lastName} {m.patient.firstName}</div>}
            </div>
          ))}
        </motion.div>

        {/* ACTIONS RAPIDES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ marginBottom: '20px' }}
        >
          <h2 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '12px' }}>Actions rapides</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              { label: 'Mon planning', icon: '📅', color: '#3B82F6', path: '/planning' },
              { label: 'Carte GPS', icon: '🗺️', color: '#14B8A6', path: '/map/ambulancier' },
              { label: 'Mes documents', icon: '📄', color: '#8B5CF6', path: '/ambulancier/documents' },
              { label: 'Signaler incident', icon: '⚠️', color: '#EF4444', path: '/ambulancier/incident' },
              { label: 'Terminal PDA', icon: '📱', color: '#14B8A6', path: '/pda' },
            ].map(a => (
              <motion.button
                key={a.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => router.push(a.path)}
                style={{
                  background: a.color + '10',
                  border: `1px solid ${a.color}30`,
                  borderRadius: '12px',
                  padding: '16px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: '#E8ECF5',
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{a.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: '600' }}>{a.label}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* BOUTON SOS */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.95 }}
          onClick={envoyerSOS}
          disabled={sosEnvoye}
          style={{
            width: '100%',
            background: sosEnvoye ? '#22C55E' : 'linear-gradient(135deg, #EF4444, #DC2626)',
            border: 'none',
            borderRadius: '14px',
            padding: '18px',
            color: 'white',
            fontSize: '16px',
            fontWeight: '800',
            cursor: sosEnvoye ? 'not-allowed' : 'pointer',
            letterSpacing: '0.05em',
          }}
        >
          {sosEnvoye ? '✅ Alerte envoyée !' : '🆘 ALERTE SOS RÉGULATION'}
        </motion.button>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const menuItems = [
  { label: 'Vue globale',   icon: '📊', path: '/direction' },
  { label: 'Régulation',    icon: '🎛️', path: '/regulateur' },
  { label: 'Planning',      icon: '📅', path: '/planning' },
  { label: 'Facturation',   icon: '💶', path: '/direction/facturation' },
  { label: 'Véhicules',     icon: '🚑', path: '/direction/vehicules' },
  { label: 'Employés',      icon: '👥', path: '/direction/employes' },
  { label: 'Incidents',     icon: '⚠️', path: '/direction/incidents', active: true },
  { label: 'Configuration', icon: '⚙️', path: '/direction/configuration' },
];

const GRAVITE_STYLE: Record<string, { bg: string; color: string }> = {
  FAIBLE:   { bg: '#22C55E20', color: '#22C55E' },
  MODERE:   { bg: '#F59E0B20', color: '#F59E0B' },
  ALERTE:   { bg: '#F59E0B20', color: '#F59E0B' },
  GRAVE:    { bg: '#EF444420', color: '#EF4444' },
  CRITIQUE: { bg: '#EF444420', color: '#EF4444' },
  SOS:      { bg: '#EF444420', color: '#EF4444' },
};

function LogoViesionnaire({ height = 32, onClick }: { height?: number; onClick?: () => void }) {
  return (
    <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg height={height} viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2 L22 36 L42 2 L35 2 L22 26 L9 2 Z" fill="white"/>
        <rect x="24" y="0" width="9" height="7" rx="1" fill="#EF4444" transform="rotate(-12 28 3)"/>
        <path d="M26 8 L34 8 L42 2 L35 2 Z" fill="#cccccc" opacity="0.4"/>
      </svg>
      <div style={{ fontSize: '15px', fontWeight: '900', letterSpacing: '-0.01em', fontFamily: 'DM Sans, sans-serif' }}>
        <span style={{ color: '#EF4444' }}>VIE</span><span style={{ color: '#FFFFFF' }}>sionnaire</span>
      </div>
    </div>
  );
}

function fmt(dt: string): string {
  const d = new Date(dt);
  return d.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export default function IncidentsPage() {
  const router = useRouter();
  const [incidents, setIncidents] = useState<any[]>([]);
  const [loading,   setLoading]   = useState(true);
  const [search,    setSearch]    = useState('');
  const [expanded,  setExpanded]  = useState<string | null>(null);

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=direction'); return; }
    fetch(`${API_URL}/pda/incidents`, { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(r => r.ok ? r.json() : [])
      .then(data => setIncidents(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const filtered = incidents.filter(inc => {
    if (!search) return true;
    const d  = (inc.newData as any) ?? {};
    const s  = search.toLowerCase();
    return (
      (d.type?.toLowerCase().includes(s)) ||
      (d.vehiclePlate?.toLowerCase().includes(s)) ||
      (d.description?.toLowerCase().includes(s)) ||
      (inc.user?.lastName?.toLowerCase().includes(s)) ||
      (inc.user?.firstName?.toLowerCase().includes(s))
    );
  });

  return (
    <div style={{ minHeight: '100vh', background: '#07090F', display: 'flex', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5' }}>

      {/* SIDEBAR */}
      <motion.aside initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        style={{ width: '220px', background: '#0D1017', borderRight: '1px solid #1E2535', display: 'flex', flexDirection: 'column', padding: '24px 12px', flexShrink: 0 }}>
        <div style={{ padding: '0 8px 24px', borderBottom: '1px solid #1E2535', marginBottom: '16px' }}>
          <button onClick={() => router.push('/direction')} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '12px', padding: '0 0 8px', display: 'block' }}>← Retour</button>
          <LogoViesionnaire height={30} onClick={() => router.push('/direction')} />
          <div style={{ fontSize: '11px', color: '#6B7A99', marginTop: '8px' }}>👔 Direction</div>
        </div>
        {menuItems.map(item => (
          <motion.button key={item.path} whileHover={{ x: 4 }} onClick={() => router.push(item.path)}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '8px', border: 'none', background: item.active ? '#1A2235' : 'transparent', color: item.active ? '#14B8A6' : '#6B7A99', cursor: 'pointer', fontSize: '13px', fontWeight: item.active ? '600' : '400', marginBottom: '4px', textAlign: 'left', width: '100%', borderLeft: item.active ? '2px solid #14B8A6' : '2px solid transparent' }}>
            <span>{item.icon}</span><span>{item.label}</span>
          </motion.button>
        ))}
        <div style={{ flex: 1 }} />
        <button onClick={() => { auth.logout(); router.push('/'); }}
          style={{ background: 'transparent', border: '1px solid #1E2535', borderRadius: '8px', color: '#6B7A99', padding: '8px', cursor: 'pointer', fontSize: '12px' }}>
          Déconnexion
        </button>
      </motion.aside>

      {/* CONTENU */}
      <div style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 4px' }}>⚠️ Incidents signalés</h1>
            <p style={{ color: '#6B7A99', fontSize: '13px', margin: 0 }}>{filtered.length} incident{filtered.length !== 1 ? 's' : ''}</p>
          </div>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher..."
            style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '10px', color: '#E8ECF5', padding: '8px 14px', fontSize: '13px', outline: 'none', width: '220px' }} />
        </motion.div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '64px', color: '#6B7A99' }}>Chargement...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px', color: '#6B7A99' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
            <div>Aucun incident signalé</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filtered.map((inc, i) => {
              const d       = (inc.newData as any) ?? {};
              const gravite = d.gravite ?? inc.action ?? '—';
              const gs      = GRAVITE_STYLE[gravite?.toUpperCase()] ?? GRAVITE_STYLE['GRAVE'];
              const isOpen  = expanded === inc.id;
              return (
                <motion.div key={inc.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                  style={{ background: '#0D1017', border: `1px solid ${gs.color}30`, borderRadius: '14px', overflow: 'hidden' }}>

                  {/* Ligne principale */}
                  <div onClick={() => setExpanded(isOpen ? null : inc.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', cursor: 'pointer' }}>

                    {/* Photo miniature */}
                    <div style={{ flexShrink: 0 }}>
                      {d.photoUrl ? (
                        <img src={d.photoUrl} alt="" style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: '10px', border: '1px solid #1E2535' }} />
                      ) : (
                        <div style={{ width: 56, height: 56, background: gs.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>⚠️</div>
                      )}
                    </div>

                    {/* Infos */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <span style={{ fontWeight: '700', fontSize: '14px' }}>{d.type ?? inc.action ?? '—'}</span>
                        <span style={{ background: gs.bg, color: gs.color, border: `1px solid ${gs.color}40`, padding: '2px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>
                          {gravite}
                        </span>
                        {d.vehiclePlate && (
                          <span style={{ background: '#3B82F610', color: '#3B82F6', border: '1px solid #3B82F630', padding: '2px 8px', borderRadius: '6px', fontSize: '11px', fontFamily: 'monospace', fontWeight: '700' }}>
                            🚑 {d.vehiclePlate}
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '12px', color: '#6B7A99', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {d.description ?? '—'}
                      </div>
                    </div>

                    {/* Employé + date */}
                    <div style={{ flexShrink: 0, textAlign: 'right' }}>
                      {inc.user && (
                        <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '2px' }}>
                          {inc.user.firstName} {inc.user.lastName}
                        </div>
                      )}
                      <div style={{ fontSize: '11px', color: '#6B7A99', fontFamily: 'monospace' }}>{fmt(inc.createdAt)}</div>
                    </div>

                    <span style={{ color: '#6B7A99', fontSize: '12px', flexShrink: 0 }}>{isOpen ? '▲' : '▼'}</span>
                  </div>

                  {/* Détail expandé */}
                  {isOpen && (
                    <div style={{ borderTop: '1px solid #1E2535', padding: '16px 20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                      {d.photoUrl && (
                        <img src={d.photoUrl} alt="Photo incident" style={{ width: '100%', maxWidth: '320px', maxHeight: '260px', objectFit: 'cover', borderRadius: '12px', border: '1px solid #1E2535', flexShrink: 0 }} />
                      )}
                      <div style={{ flex: 1, minWidth: '220px' }}>
                        <div style={{ fontSize: '13px', color: '#E8ECF5', lineHeight: 1.6, marginBottom: '12px' }}>{d.description}</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {d.vehiclePlate && <Tag label="Véhicule" value={d.vehiclePlate} color="#3B82F6" />}
                          {d.latitude     && <Tag label="GPS" value={`${Number(d.latitude).toFixed(4)}, ${Number(d.longitude).toFixed(4)}`} color="#14B8A6" />}
                          {inc.user       && <Tag label="Signalé par" value={`${inc.user.firstName} ${inc.user.lastName}`} color="#8B5CF6" />}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function Tag({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ background: color + '10', border: `1px solid ${color}30`, borderRadius: '8px', padding: '4px 10px', fontSize: '12px' }}>
      <span style={{ color: '#6B7A99' }}>{label} : </span>
      <span style={{ color, fontWeight: '600', fontFamily: 'monospace' }}>{value}</span>
    </div>
  );
}

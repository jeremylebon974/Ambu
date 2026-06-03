'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

type User = { id: string; firstName: string; lastName: string; email: string; role: string; avatar?: string; metadata?: { diplome?: string; contrat?: string; heuresSemaine?: number } };
type Tab  = 'missions' | 'km' | 'incidents' | 'connexions';

const ROLE_COLOR: Record<string, string> = {
  SUPER_ADMIN: '#EF4444', ADMIN: '#F59E0B', REGULATEUR: '#3B82F6',
  AMBULANCIER: '#14B8A6', COMPTABLE: '#8B5CF6', PATIENT: '#6B7A99',
};

const ROLE_ICON: Record<string, string> = {
  AMBULANCIER: '🩺', REGULATEUR: '🎛️', ADMIN: '⚙️', SUPER_ADMIN: '🔑', COMPTABLE: '📊',
};

const menuItems = [
  { label: 'Vue globale',   icon: '📊', path: '/direction' },
  { label: 'Régulation',    icon: '🎛️', path: '/regulateur' },
  { label: 'Planning',      icon: '📅', path: '/planning' },
  { label: 'Facturation',   icon: '💶', path: '/direction/facturation' },
  { label: 'Véhicules',     icon: '🚑', path: '/direction/vehicules' },
  { label: 'Employés',      icon: '👥', path: '/direction/employes', active: true },
  { label: 'Configuration', icon: '⚙️', path: '/direction/configuration' },
];

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

async function safeFetch(url: string, token: string): Promise<any[]> {
  try {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch { return []; }
}

function fmt(dt: string | undefined, mode: 'date' | 'time' | 'datetime' = 'datetime'): string {
  if (!dt) return '—';
  const d = new Date(dt);
  if (mode === 'date')     return d.toLocaleDateString('fr-FR');
  if (mode === 'time')     return d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  return d.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function duration(start: string, end?: string): string {
  if (!start || !end) return '—';
  const diff = new Date(end).getTime() - new Date(start).getTime();
  const m = Math.round(diff / 60000);
  if (m < 60) return `${m} min`;
  return `${Math.floor(m / 60)}h${String(m % 60).padStart(2, '0')}`;
}

const TABS: { key: Tab; label: string; icon: string }[] = [
  { key: 'missions',   label: 'Missions',    icon: '📋' },
  { key: 'km',         label: 'Kilométrage', icon: '🛣️' },
  { key: 'incidents',  label: 'Incidents',   icon: '⚠️' },
  { key: 'connexions', label: 'Connexions',  icon: '📡' },
];

// ── EMPTY STATE ───────────────────────────────────────────────────────────────
function EmptyState() {
  return <div style={{ textAlign: 'center', padding: '40px', color: '#6B7A99', fontSize: '13px' }}>Aucune donnée disponible</div>;
}

// ── TAB CONTENTS ──────────────────────────────────────────────────────────────
function MissionsTab({ data }: { data: any[] }) {
  if (!data.length) return <EmptyState />;
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #1E2535' }}>
          {['Date', 'Heure', 'Patient', 'Départ → Arrivée', 'Statut', 'Durée'].map(h => (
            <th key={h} style={thStyle}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((m, i) => (
          <tr key={m.id ?? i} style={{ borderBottom: '1px solid #111622' }}>
            <td style={tdStyle}>{fmt(m.scheduledAt ?? m.createdAt, 'date')}</td>
            <td style={tdStyle}>{fmt(m.scheduledAt ?? m.startedAt, 'time')}</td>
            <td style={tdStyle}>{m.patient ? `${m.patient.lastName ?? ''} ${m.patient.firstName ?? ''}`.trim() : '—'}</td>
            <td style={{ ...tdStyle, fontSize: '12px', maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.address ?? '—'}</td>
            <td style={tdStyle}>
              <span style={{ background: '#14B8A620', color: '#14B8A6', border: '1px solid #14B8A640', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>
                {m.status ?? '—'}
              </span>
            </td>
            <td style={{ ...tdStyle, fontFamily: 'monospace', color: '#14B8A6' }}>{duration(m.startedAt, m.completedAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function KmTab({ data }: { data: any[] }) {
  if (!data.length) return <EmptyState />;
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #1E2535' }}>
          {['Date', 'Véhicule', 'Km départ', 'Km arrivée', 'Km parcourus', 'Statut'].map(h => (
            <th key={h} style={thStyle}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((l, i) => {
          const parcourus = l.kmArrivee && l.kmDepart ? l.kmArrivee - l.kmDepart : null;
          return (
            <tr key={l.id ?? i} style={{ borderBottom: '1px solid #111622' }}>
              <td style={tdStyle}>{fmt(l.date ?? l.createdAt, 'datetime')}</td>
              <td style={{ ...tdStyle, fontFamily: 'monospace', color: '#14B8A6', fontWeight: '700' }}>{l.vehicle?.plate ?? l.vehicleId ?? '—'}</td>
              <td style={{ ...tdStyle, fontFamily: 'monospace' }}>{l.kmDepart?.toLocaleString('fr-FR') ?? '—'}</td>
              <td style={{ ...tdStyle, fontFamily: 'monospace' }}>{l.kmArrivee?.toLocaleString('fr-FR') ?? '—'}</td>
              <td style={{ ...tdStyle, fontFamily: 'monospace', color: parcourus ? '#22C55E' : '#6B7A99', fontWeight: '700' }}>
                {parcourus !== null ? `+${parcourus.toLocaleString('fr-FR')} km` : '—'}
              </td>
              <td style={tdStyle}>
                <span style={{ background: l.statut === 'TERMINE' ? '#22C55E20' : '#F59E0B20', color: l.statut === 'TERMINE' ? '#22C55E' : '#F59E0B', border: `1px solid ${l.statut === 'TERMINE' ? '#22C55E' : '#F59E0B'}40`, padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>
                  {l.statut ?? 'EN_COURS'}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function IncidentsTab({ data }: { data: any[] }) {
  if (!data.length) return <EmptyState />;
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #1E2535' }}>
          {['Date', 'Type', 'Description'].map(h => (
            <th key={h} style={thStyle}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((inc, i) => (
          <tr key={inc.id ?? i} style={{ borderBottom: '1px solid #111622' }}>
            <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>{fmt(inc.createdAt ?? inc.date, 'datetime')}</td>
            <td style={tdStyle}>
              <span style={{ background: '#EF444420', color: '#EF4444', border: '1px solid #EF444440', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>
                {inc.type ?? '—'}
              </span>
            </td>
            <td style={{ ...tdStyle, color: '#6B7A99', fontSize: '12px' }}>{inc.description ?? inc.message ?? '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ConnexionsTab({ data }: { data: any[] }) {
  if (!data.length) return <EmptyState />;
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #1E2535' }}>
          {['Date', 'Connexion', 'Déconnexion', 'Véhicule', 'Durée session'].map(h => (
            <th key={h} style={thStyle}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((s, i) => (
          <tr key={s.id ?? i} style={{ borderBottom: '1px solid #111622' }}>
            <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>{fmt(s.connectedAt ?? s.createdAt, 'date')}</td>
            <td style={{ ...tdStyle, fontFamily: 'monospace', color: '#22C55E' }}>{fmt(s.connectedAt ?? s.createdAt, 'time')}</td>
            <td style={{ ...tdStyle, fontFamily: 'monospace', color: '#EF4444' }}>{s.disconnectedAt ? fmt(s.disconnectedAt, 'time') : <span style={{ color: '#22C55E', fontSize: '11px' }}>● En ligne</span>}</td>
            <td style={{ ...tdStyle, fontFamily: 'monospace', color: '#14B8A6', fontWeight: '700' }}>{s.vehicle?.plate ?? s.vehicleId ?? '—'}</td>
            <td style={{ ...tdStyle, fontFamily: 'monospace', color: '#6B7A99' }}>{duration(s.connectedAt ?? s.createdAt, s.disconnectedAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function EmployesPage() {
  const router  = useRouter();

  const [users,   setUsers]   = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search,  setSearch]  = useState('');

  // Modal historique
  const [histUser,    setHistUser]    = useState<User | null>(null);
  const [histTab,     setHistTab]     = useState<Tab>('missions');
  const [histLoading, setHistLoading] = useState(false);
  const [histData, setHistData] = useState<{ missions: any[]; km: any[]; incidents: any[]; connexions: any[] }>({
    missions: [], km: [], incidents: [], connexions: [],
  });

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=direction'); return; }
    fetch(`${API_URL}/auth/users`, { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(r => r.ok ? r.json() : [])
      .then(data => setUsers(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!histUser) return;
    setHistLoading(true);
    setHistTab('missions');
    const t = auth.getToken() ?? '';
    Promise.all([
      safeFetch(`${API_URL}/missions?userId=${histUser.id}`, t),
      safeFetch(`${API_URL}/vehicles/logs?userId=${histUser.id}`, t),
      safeFetch(`${API_URL}/pda/incidents?userId=${histUser.id}`, t),
      safeFetch(`${API_URL}/pda/sessions?userId=${histUser.id}`, t),
    ]).then(([missions, km, incidents, connexions]) => {
      setHistData({ missions, km, incidents, connexions });
    }).finally(() => setHistLoading(false));
  }, [histUser]);

  const filtered = users.filter(u =>
    !search ||
    u.lastName.toLowerCase().includes(search.toLowerCase()) ||
    u.firstName.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  const byRole      = users.reduce<Record<string, number>>((a, u) => { a[u.role] = (a[u.role] ?? 0) + 1; return a; }, {});
  const operationnels = (byRole['AMBULANCIER'] ?? 0) + (byRole['REGULATEUR'] ?? 0);

  const tabDataMap: Record<Tab, any[]> = {
    missions:   histData.missions,
    km:         histData.km,
    incidents:  histData.incidents,
    connexions: histData.connexions,
  };

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

        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 4px' }}>👥 Employés</h1>
          <p style={{ color: '#6B7A99', fontSize: '13px', margin: 0 }}>Annuaire et répartition des rôles</p>
        </motion.div>

        {/* RÉSUMÉ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Total employés', value: users.length,               color: '#14B8A6', icon: '👥' },
            { label: 'Opérationnels',  value: operationnels,              color: '#22C55E', icon: '🚑' },
            { label: 'Ambulanciers',   value: byRole['AMBULANCIER'] ?? 0, color: '#3B82F6', icon: '🩺' },
            { label: 'Régulateurs',    value: byRole['REGULATEUR']  ?? 0, color: '#8B5CF6', icon: '🎛️' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}
              style={{ background: '#0D1017', border: `1px solid ${s.color}20`, borderRadius: '14px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>{s.label}</div>
                  <div style={{ fontSize: '32px', fontWeight: '800', color: s.color, fontFamily: 'DM Mono, monospace' }}>{s.value}</div>
                </div>
                <div style={{ fontSize: '28px' }}>{s.icon}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BARRE RECHERCHE */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ fontSize: '14px', fontWeight: '600' }}>Annuaire</span>
          <span style={{ fontSize: '12px', color: '#6B7A99' }}>({filtered.length})</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher par nom, email, rôle..."
            style={{ marginLeft: 'auto', background: '#0D1017', border: '1px solid #1E2535', borderRadius: '10px', color: '#E8ECF5', padding: '8px 14px', fontSize: '13px', outline: 'none', width: '260px' }} />
        </motion.div>

        {/* GRILLE CARTES */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '48px', color: '#6B7A99' }}>Chargement...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px', color: '#6B7A99' }}>Aucun résultat</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {filtered.map((u, i) => (
              <motion.div key={u.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}
                whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

                {/* Ligne photo + identité */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {u.avatar
                    ? <img src={u.avatar} alt="" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '2px solid #1E2535', flexShrink: 0 }} />
                    : <div style={{ width: 80, height: 80, borderRadius: '50%', background: (ROLE_COLOR[u.role] ?? '#6B7A99') + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', border: `1px solid ${(ROLE_COLOR[u.role] ?? '#6B7A99')}30`, flexShrink: 0 }}>
                        {ROLE_ICON[u.role] ?? '👤'}
                      </div>
                  }
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '16px', fontWeight: '700', lineHeight: 1.2, marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {u.firstName} {u.lastName}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6B7A99', fontFamily: 'monospace', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '6px' }}>
                      {u.email}
                    </div>
                    <span style={{ background: (ROLE_COLOR[u.role] ?? '#6B7A99') + '20', color: ROLE_COLOR[u.role] ?? '#6B7A99', border: `1px solid ${(ROLE_COLOR[u.role] ?? '#6B7A99')}40`, padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '600' }}>
                      {u.role}
                    </span>
                  </div>
                </div>

                {/* Méta */}
                {(u.metadata?.diplome || u.metadata?.contrat || u.metadata?.heuresSemaine) && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {u.metadata?.diplome && (
                      <span style={{ background: '#3B82F610', color: '#3B82F6', border: '1px solid #3B82F620', padding: '2px 8px', borderRadius: '6px', fontSize: '11px' }}>
                        🎓 {u.metadata.diplome}
                      </span>
                    )}
                    {u.metadata?.contrat && (
                      <span style={{ background: '#8B5CF610', color: '#8B5CF6', border: '1px solid #8B5CF620', padding: '2px 8px', borderRadius: '6px', fontSize: '11px' }}>
                        📄 {u.metadata.contrat}
                      </span>
                    )}
                    {u.metadata?.heuresSemaine && (
                      <span style={{ background: '#F59E0B10', color: '#F59E0B', border: '1px solid #F59E0B20', padding: '2px 8px', borderRadius: '6px', fontSize: '11px' }}>
                        ⏱️ {u.metadata.heuresSemaine}h/sem
                      </span>
                    )}
                  </div>
                )}

                {/* Bouton historique */}
                <button onClick={() => setHistUser(u)}
                  style={{ width: '100%', background: '#14B8A620', color: '#14B8A6', border: '1px solid #14B8A640', borderRadius: '10px', padding: '10px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', marginTop: 'auto' }}>
                  📋 Historique
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* ── MODAL HISTORIQUE ─────────────────────────────────────────── */}
      <AnimatePresence>
        {histUser && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setHistUser(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px' }}>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#07090F', border: '1px solid #1E2535', borderRadius: '20px', width: '90vw', maxWidth: '900px', maxHeight: '85vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

              {/* Header modal */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px 28px', borderBottom: '1px solid #1E2535', flexShrink: 0 }}>
                {histUser.avatar
                  ? <img src={histUser.avatar} alt="" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid #1E2535' }} />
                  : <div style={{ width: 48, height: 48, borderRadius: '50%', background: (ROLE_COLOR[histUser.role] ?? '#6B7A99') + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                      {ROLE_ICON[histUser.role] ?? '👤'}
                    </div>
                }
                <div>
                  <div style={{ fontSize: '17px', fontWeight: '800' }}>{histUser.firstName} {histUser.lastName}</div>
                  <div style={{ fontSize: '12px', color: '#6B7A99', fontFamily: 'monospace' }}>{histUser.email}</div>
                </div>
                <span style={{ marginLeft: '8px', background: (ROLE_COLOR[histUser.role] ?? '#6B7A99') + '20', color: ROLE_COLOR[histUser.role] ?? '#6B7A99', border: `1px solid ${(ROLE_COLOR[histUser.role] ?? '#6B7A99')}40`, padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                  {histUser.role}
                </span>
                <button onClick={() => setHistUser(null)} style={{ marginLeft: 'auto', background: 'transparent', border: '1px solid #1E2535', borderRadius: '8px', color: '#6B7A99', padding: '6px 12px', cursor: 'pointer', fontSize: '13px' }}>✕ Fermer</button>
              </div>

              {/* Onglets */}
              <div style={{ display: 'flex', borderBottom: '1px solid #1E2535', flexShrink: 0, background: '#0D1017' }}>
                {TABS.map(t => (
                  <button key={t.key} onClick={() => setHistTab(t.key)}
                    style={{ flex: 1, padding: '14px', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: histTab === t.key ? '700' : '400', color: histTab === t.key ? '#14B8A6' : '#6B7A99', borderBottom: histTab === t.key ? '2px solid #14B8A6' : '2px solid transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontFamily: 'DM Sans, sans-serif' }}>
                    <span>{t.icon}</span> {t.label}
                    {tabDataMap[t.key].length > 0 && (
                      <span style={{ background: '#14B8A620', color: '#14B8A6', borderRadius: '10px', padding: '1px 6px', fontSize: '11px', fontWeight: '700' }}>
                        {tabDataMap[t.key].length}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Contenu onglet */}
              <div style={{ flex: 1, overflowY: 'auto', background: '#07090F' }}>
                {histLoading ? (
                  <div style={{ textAlign: 'center', padding: '48px', color: '#6B7A99', fontSize: '13px' }}>Chargement...</div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div key={histTab} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.15 }}>
                      {histTab === 'missions'   && <MissionsTab   data={histData.missions}   />}
                      {histTab === 'km'         && <KmTab         data={histData.km}         />}
                      {histTab === 'incidents'  && <IncidentsTab  data={histData.incidents}  />}
                      {histTab === 'connexions' && <ConnexionsTab data={histData.connexions} />}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: '10px 16px', textAlign: 'left', color: '#6B7A99', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap',
};
const tdStyle: React.CSSProperties = {
  padding: '10px 16px', color: '#E8ECF5', fontSize: '13px',
};

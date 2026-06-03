'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

type User = { id: string; firstName: string; lastName: string; email: string; role: string; avatar?: string };

const ROLE_COLOR: Record<string, string> = {
  SUPER_ADMIN:  '#EF4444',
  ADMIN:        '#F59E0B',
  REGULATEUR:   '#3B82F6',
  AMBULANCIER:  '#14B8A6',
  COMPTABLE:    '#8B5CF6',
  PATIENT:      '#6B7A99',
};

const menuItems = [
  { label: 'Vue globale',  icon: '📊', path: '/direction' },
  { label: 'Régulation',   icon: '🎛️', path: '/regulateur' },
  { label: 'Planning',     icon: '📅', path: '/planning' },
  { label: 'Facturation',  icon: '💶', path: '/direction/facturation' },
  { label: 'Véhicules',    icon: '🚑', path: '/direction/vehicules' },
  { label: 'Employés',     icon: '👥', path: '/direction/employes', active: true },
  { label: 'Configuration',icon: '⚙️', path: '/direction/configuration' },
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

export default function EmployesPage() {
  const router  = useRouter();
  const [users,   setUsers]   = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search,  setSearch]  = useState('');

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=direction'); return; }
    fetch(`${API_URL}/auth/users`, { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(r => r.ok ? r.json() : [])
      .then(data => { setUsers(Array.isArray(data) ? data : []); })
      .finally(() => setLoading(false));
  }, []);

  const filtered = users.filter(u =>
    search === '' ||
    u.lastName.toLowerCase().includes(search.toLowerCase()) ||
    u.firstName.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  // Résumé par rôle
  const byRole = users.reduce<Record<string, number>>((acc, u) => {
    acc[u.role] = (acc[u.role] ?? 0) + 1;
    return acc;
  }, {});

  const operationnels = (byRole['AMBULANCIER'] ?? 0) + (byRole['REGULATEUR'] ?? 0);

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

        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 4px' }}>👥 Employés</h1>
          <p style={{ color: '#6B7A99', fontSize: '13px', margin: 0 }}>Annuaire et répartition des rôles</p>
        </motion.div>

        {/* RÉSUMÉ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Total employés',    value: users.length,            color: '#14B8A6', icon: '👥' },
            { label: 'Opérationnels',     value: operationnels,           color: '#22C55E', icon: '🚑' },
            { label: 'Ambulanciers',      value: byRole['AMBULANCIER'] ?? 0, color: '#3B82F6', icon: '🩺' },
            { label: 'Régulateurs',       value: byRole['REGULATEUR']  ?? 0, color: '#8B5CF6', icon: '🎛️' },
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

        {/* TABLEAU */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ background: '#0D1017', borderRadius: '14px', border: '1px solid #1E2535', overflow: 'hidden' }}>

          <div style={{ padding: '16px 20px', borderBottom: '1px solid #1E2535', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>Annuaire</span>
            <span style={{ fontSize: '12px', color: '#6B7A99' }}>({filtered.length})</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher..."
              style={{ marginLeft: 'auto', background: '#111622', border: '1px solid #2A3348', borderRadius: '8px', color: '#E8ECF5', padding: '6px 12px', fontSize: '13px', outline: 'none', width: '200px' }}
            />
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1E2535' }}>
                {['Photo', 'Nom', 'Prénom', 'Email', 'Rôle', 'H/semaine'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#6B7A99', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: '#6B7A99' }}>Chargement...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: '#6B7A99' }}>Aucun résultat</td></tr>
              ) : filtered.map(u => (
                <tr key={u.id} style={{ borderBottom: '1px solid #111622' }}>
                  <td style={{ padding: '10px 16px' }}>
                    {u.avatar
                      ? <img src={u.avatar} alt="" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid #1E2535' }} />
                      : <div style={{ width: 40, height: 40, borderRadius: '50%', background: (ROLE_COLOR[u.role] ?? '#6B7A99') + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', border: `1px solid ${(ROLE_COLOR[u.role] ?? '#6B7A99')}30` }}>
                          {u.role === 'AMBULANCIER' ? '🩺' : u.role === 'REGULATEUR' ? '🎛️' : u.role === 'ADMIN' ? '⚙️' : '👤'}
                        </div>
                    }
                  </td>
                  <td style={{ padding: '12px 16px', fontWeight: '600', color: '#E8ECF5', fontSize: '13px' }}>{u.lastName}</td>
                  <td style={{ padding: '12px 16px', color: '#E8ECF5', fontSize: '13px' }}>{u.firstName}</td>
                  <td style={{ padding: '12px 16px', color: '#6B7A99', fontSize: '12px', fontFamily: 'monospace' }}>{u.email}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{
                      background: (ROLE_COLOR[u.role] ?? '#6B7A99') + '20',
                      color:       ROLE_COLOR[u.role] ?? '#6B7A99',
                      border:     `1px solid ${(ROLE_COLOR[u.role] ?? '#6B7A99')}40`,
                      padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '600',
                    }}>{u.role}</span>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#6B7A99', fontSize: '13px', fontFamily: 'monospace' }}>—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}

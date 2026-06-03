'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../../../lib/auth';
import { DirectionBadge } from '../../../components/DirectionBadge';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const ROLE_COLORS: Record<string, string> = {
  ADMIN:       '#EF4444',
  REGULATEUR:  '#14B8A6',
  AMBULANCIER: '#3B82F6',
  PATIENT:     '#22C55E',
};

const ROLES = ['AMBULANCIER', 'REGULATEUR', 'ADMIN', 'PATIENT'];

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

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export default function DirectionPersonnelPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [recherche, setRecherche] = useState('');
  const [filtreRole, setFiltreRole] = useState('Tous');
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', role: 'AMBULANCIER' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=direction'); return; }
    loadUsers();
  }, [router]);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/auth/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(Array.isArray(data) ? data : []);
      }
    } catch {}
    setLoading(false);
  };

  const handleSubmit = async () => {
    setError('');
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError('Tous les champs sont obligatoires.');
      return;
    }
    setSubmitting(true);
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setModalOpen(false);
        setForm({ firstName: '', lastName: '', email: '', password: '', role: 'AMBULANCIER' });
        await loadUsers();
      } else {
        const data = await res.json();
        setError(data.message || 'Erreur lors de la création.');
      }
    } catch {
      setError('Erreur réseau.');
    }
    setSubmitting(false);
  };

  const filtered = users.filter(u => {
    const matchRole = filtreRole === 'Tous' || u.role === filtreRole;
    const matchRecherche = recherche === '' ||
      `${u.lastName} ${u.firstName} ${u.email}`.toLowerCase().includes(recherche.toLowerCase());
    return matchRole && matchRecherche;
  });

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#111622',
    border: '1px solid #2A3348',
    borderRadius: '8px',
    color: '#E8ECF5',
    padding: '10px 12px',
    fontSize: '13px',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#07090F', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5' }}>
      <DirectionBadge />

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
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>
          <LogoViesionnaire height={26} onClick={() => router.push('/direction')} />
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => { setError(''); setModalOpen(true); }}
          style={{
            background: 'linear-gradient(135deg, #14B8A6, #3B82F6)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            padding: '8px 18px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: '600',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >+ Ajouter un employé</motion.button>
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
            { label: 'Total', value: users.length, color: '#E8ECF5' },
            ...ROLES.map(r => ({ label: r, value: users.filter(u => u.role === r).length, color: ROLE_COLORS[r] || '#6B7A99' })),
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

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}
        >
          <input
            value={recherche}
            onChange={e => setRecherche(e.target.value)}
            placeholder="🔍 Rechercher par nom ou email..."
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
            {['Tous', ...ROLES].map(f => (
              <button
                key={f}
                onClick={() => setFiltreRole(f)}
                style={{
                  background: filtreRole === f ? (ROLE_COLORS[f] || '#14B8A6') + '20' : '#111622',
                  border: `1px solid ${filtreRole === f ? (ROLE_COLORS[f] || '#14B8A6') : '#2A3348'}`,
                  borderRadius: '8px',
                  color: filtreRole === f ? (ROLE_COLORS[f] || '#14B8A6') : '#6B7A99',
                  padding: '8px 14px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: filtreRole === f ? '700' : '400',
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
                {['Nom', 'Prénom', 'Email', 'Rôle', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>
                    Chargement...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>
                    Aucun résultat
                  </td>
                </tr>
              ) : filtered.map(u => (
                <tr key={u.id} style={{ borderBottom: '1px solid #1E2535' }}>
                  <td style={{ padding: '14px 16px', fontSize: '14px', fontWeight: '600', color: '#E8ECF5' }}>{u.lastName}</td>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#A0AABB' }}>{u.firstName}</td>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6B7A99', fontFamily: 'DM Mono, monospace' }}>{u.email}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      background: (ROLE_COLORS[u.role] || '#6B7A99') + '20',
                      color: ROLE_COLORS[u.role] || '#6B7A99',
                      border: `1px solid ${(ROLE_COLORS[u.role] || '#6B7A99')}40`,
                      borderRadius: '6px',
                      padding: '3px 10px',
                      fontSize: '11px',
                      fontWeight: '700',
                    }}>{u.role}</span>
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
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1000, backdropFilter: 'blur(4px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#0D1017',
                border: '1px solid #1E2535',
                borderRadius: '16px',
                padding: '28px',
                width: '100%',
                maxWidth: '440px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '16px', fontWeight: '800', margin: 0 }}>Ajouter un employé</h2>
                <button
                  onClick={() => setModalOpen(false)}
                  style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '20px', lineHeight: 1 }}
                >×</button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '11px', color: '#6B7A99', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Prénom</label>
                    <input
                      value={form.firstName}
                      onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                      placeholder="Marie"
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '11px', color: '#6B7A99', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Nom</label>
                    <input
                      value={form.lastName}
                      onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                      placeholder="DUPONT"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#6B7A99', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Email</label>
                  <input
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="marie.dupont@viesionnaire.fr"
                    type="email"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#6B7A99', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Mot de passe</label>
                  <input
                    value={form.password}
                    onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                    placeholder="Minimum 8 caractères"
                    type="password"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#6B7A99', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Rôle</label>
                  <select
                    value={form.role}
                    onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    {ROLES.map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {error && (
                  <div style={{ background: '#EF444415', border: '1px solid #EF444430', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: '#EF4444' }}>
                    {error}
                  </div>
                )}

                <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
                  <button
                    onClick={() => setModalOpen(false)}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: '1px solid #2A3348',
                      borderRadius: '8px',
                      color: '#6B7A99',
                      padding: '10px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >Annuler</button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    disabled={submitting}
                    style={{
                      flex: 2,
                      background: submitting ? '#1E2535' : 'linear-gradient(135deg, #14B8A6, #3B82F6)',
                      border: 'none',
                      borderRadius: '8px',
                      color: submitting ? '#6B7A99' : 'white',
                      padding: '10px',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      fontSize: '13px',
                      fontWeight: '600',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >{submitting ? 'Création...' : 'Créer l\'employé'}</motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

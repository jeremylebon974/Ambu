'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

type Meta = { diplomeRequis?: string; equipements?: string; imageUrl?: string; kmActuel?: number; etat?: string };
type Vehicle = { id: string; plate: string; type: string; status: string; metadata: Meta | null };
type Entretien = { id: string; vehicleId: string; type: string; datePrevu: string; kmPrevu?: number; done: boolean; vehicle?: { plate: string } };

const ETAT_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  'OK':          { bg: '#22C55E20', color: '#22C55E', label: 'OK' },
  'À contrôler': { bg: '#F59E0B20', color: '#F59E0B', label: 'À contrôler' },
  'En panne':    { bg: '#EF444420', color: '#EF4444', label: 'En panne' },
};

const menuItems = [
  { label: 'Vue globale',  icon: '📊', path: '/direction' },
  { label: 'Régulation',   icon: '🎛️', path: '/regulateur' },
  { label: 'Planning',     icon: '📅', path: '/planning' },
  { label: 'Facturation',  icon: '💶', path: '/direction/facturation' },
  { label: 'Véhicules',    icon: '🚑', path: '/direction/vehicules', active: true },
  { label: 'Employés',     icon: '👥', path: '/direction/employes' },
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

export default function VehiculesDirectionPage() {
  const router = useRouter();
  const [vehicles,    setVehicles]    = useState<Vehicle[]>([]);
  const [entretiens,  setEntretiens]  = useState<Entretien[]>([]);
  const [loading,     setLoading]     = useState(true);

  // Modal km
  const [kmModal,   setKmModal]   = useState<Vehicle | null>(null);
  const [kmValue,   setKmValue]   = useState('');
  const [etatValue, setEtatValue] = useState('OK');
  const [savingKm,  setSavingKm]  = useState(false);

  // Modal entretien
  const [entModal,    setEntModal]    = useState(false);
  const [entForm,     setEntForm]     = useState({ vehicleId: '', type: 'Vidange', datePrevu: '', kmPrevu: '' });
  const [savingEnt,   setSavingEnt]   = useState(false);

  const headers = () => ({ 'Content-Type': 'application/json', Authorization: `Bearer ${auth.getToken()}` });

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=direction'); return; }
    Promise.all([
      fetch(`${API_URL}/vehicles`, { headers: headers() }).then(r => r.ok ? r.json() : []),
      fetch(`${API_URL}/vehicles/entretiens`, { headers: headers() }).then(r => r.ok ? r.json() : []),
    ]).then(([v, e]) => {
      setVehicles(Array.isArray(v) ? v : []);
      setEntretiens(Array.isArray(e) ? e : []);
    }).finally(() => setLoading(false));
  }, []);

  const openKmModal = (v: Vehicle) => {
    setKmModal(v);
    setKmValue(String(v.metadata?.kmActuel ?? ''));
    setEtatValue(v.metadata?.etat ?? 'OK');
  };

  const saveKm = async () => {
    if (!kmModal) return;
    setSavingKm(true);
    const res = await fetch(`${API_URL}/vehicles/${kmModal.id}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({ kmActuel: parseInt(kmValue) || 0, etat: etatValue }),
    });
    if (res.ok) {
      const updated = await res.json();
      setVehicles(vs => vs.map(v => v.id === updated.id ? updated : v));
      setKmModal(null);
    }
    setSavingKm(false);
  };

  const saveEntretien = async () => {
    if (!entForm.vehicleId || !entForm.datePrevu) return;
    setSavingEnt(true);
    const res = await fetch(`${API_URL}/vehicles/${entForm.vehicleId}/entretiens`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(entForm),
    });
    if (res.ok) {
      const created = await res.json();
      if (!created.error) setEntretiens(e => [...e, created]);
      setEntModal(false);
      setEntForm({ vehicleId: '', type: 'Vidange', datePrevu: '', kmPrevu: '' });
    }
    setSavingEnt(false);
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
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '22px', fontWeight: '800', margin: 0 }}>🚑 Flotte de véhicules</h1>
            <p style={{ color: '#6B7A99', fontSize: '13px', margin: '4px 0 0' }}>Kilométrage, état et entretiens</p>
          </div>
          <button onClick={() => setEntModal(true)}
            style={{ background: 'linear-gradient(135deg, #14B8A6, #3B82F6)', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 20px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}>
            + Ajouter entretien
          </button>
        </motion.div>

        {/* GRILLE VÉHICULES */}
        {loading ? (
          <div style={{ color: '#6B7A99', textAlign: 'center', padding: '48px' }}>Chargement...</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {vehicles.map((v, i) => {
              const meta   = v.metadata ?? {};
              const km     = meta.kmActuel ?? 0;
              const etat   = meta.etat ?? 'OK';
              const style  = ETAT_STYLE[etat] ?? ETAT_STYLE['OK'];
              return (
                <motion.div key={v.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} whileHover={{ y: -4 }}
                  style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '14px', padding: '20px' }}>
                  {/* Photo + plate */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    {meta.imageUrl
                      ? <img src={meta.imageUrl} alt="" style={{ width: 56, height: 40, objectFit: 'cover', borderRadius: '8px', border: '1px solid #1E2535' }} />
                      : <div style={{ width: 56, height: 40, background: '#111622', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🚑</div>
                    }
                    <div>
                      <div style={{ fontFamily: 'monospace', fontWeight: '700', fontSize: '16px', color: '#14B8A6' }}>{v.plate}</div>
                      <div style={{ fontSize: '12px', color: '#6B7A99' }}>{v.type}</div>
                    </div>
                    <span style={{ marginLeft: 'auto', background: style.bg, color: style.color, border: `1px solid ${style.color}40`, padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '600' }}>
                      {style.label}
                    </span>
                  </div>
                  {/* KM */}
                  <div style={{ background: '#111622', borderRadius: '8px', padding: '12px', marginBottom: '12px' }}>
                    <div style={{ fontSize: '11px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Kilométrage actuel</div>
                    <div style={{ fontSize: '22px', fontWeight: '800', color: '#E8ECF5', fontFamily: 'DM Mono, monospace' }}>
                      {km.toLocaleString('fr-FR')} <span style={{ fontSize: '13px', color: '#6B7A99', fontWeight: '400' }}>km</span>
                    </div>
                  </div>
                  {/* Entretiens liés */}
                  {entretiens.filter(e => e.vehicleId === v.id).length > 0 && (
                    <div style={{ fontSize: '11px', color: '#F59E0B', marginBottom: '12px' }}>
                      ⚠ {entretiens.filter(e => e.vehicleId === v.id).length} entretien(s) à venir
                    </div>
                  )}
                  <button onClick={() => openKmModal(v)}
                    style={{ width: '100%', background: '#1A2235', border: '1px solid #2A3348', borderRadius: '8px', color: '#E8ECF5', padding: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>
                    ✏ Mettre à jour km / état
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ENTRETIENS À VENIR */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ background: '#0D1017', borderRadius: '14px', border: '1px solid #1E2535', padding: '24px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '16px' }}>🔧 Entretiens à venir</h2>
          {entretiens.length === 0 ? (
            <div style={{ color: '#6B7A99', fontSize: '13px', textAlign: 'center', padding: '24px' }}>
              Aucun entretien planifié
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #1E2535' }}>
                  {['Véhicule', 'Type', 'Date prévue', 'Km prévu'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#6B7A99', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {entretiens.map(e => (
                  <tr key={e.id} style={{ borderBottom: '1px solid #111622' }}>
                    <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: '#14B8A6', fontWeight: '700' }}>{e.vehicle?.plate ?? e.vehicleId}</td>
                    <td style={{ padding: '10px 12px', color: '#E8ECF5', fontSize: '13px' }}>{e.type}</td>
                    <td style={{ padding: '10px 12px', color: '#F59E0B', fontSize: '13px' }}>{new Date(e.datePrevu).toLocaleDateString('fr-FR')}</td>
                    <td style={{ padding: '10px 12px', color: '#6B7A99', fontSize: '13px', fontFamily: 'monospace' }}>{e.kmPrevu ? `${e.kmPrevu.toLocaleString('fr-FR')} km` : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>
      </div>

      {/* MODAL KM */}
      {kmModal && (
        <div onClick={() => setKmModal(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '16px', padding: '32px', width: '340px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>✏ Véhicule {kmModal.plate}</h3>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Kilométrage actuel</label>
              <input value={kmValue} onChange={e => setKmValue(e.target.value)} type="number" placeholder="Ex: 125000" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>État</label>
              <select value={etatValue} onChange={e => setEtatValue(e.target.value)} style={selectStyle}>
                <option value="OK">OK</option>
                <option value="À contrôler">À contrôler</option>
                <option value="En panne">En panne</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={saveKm} disabled={savingKm}
                style={{ flex: 1, background: savingKm ? '#1E2535' : 'linear-gradient(135deg, #14B8A6, #3B82F6)', color: savingKm ? '#6B7A99' : 'white', border: 'none', borderRadius: '8px', padding: '10px', cursor: 'pointer', fontWeight: '600' }}>
                {savingKm ? 'Sauvegarde...' : '💾 Sauvegarder'}
              </button>
              <button onClick={() => setKmModal(null)} style={{ background: 'transparent', border: '1px solid #2A3348', borderRadius: '8px', color: '#6B7A99', padding: '10px 16px', cursor: 'pointer' }}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL ENTRETIEN */}
      {entModal && (
        <div onClick={() => setEntModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '16px', padding: '32px', width: '380px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>🔧 Planifier un entretien</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div>
                <label style={labelStyle}>Véhicule</label>
                <select value={entForm.vehicleId} onChange={e => setEntForm(f => ({ ...f, vehicleId: e.target.value }))} style={selectStyle}>
                  <option value="">Sélectionner...</option>
                  {vehicles.map(v => <option key={v.id} value={v.id}>{v.plate} — {v.type}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Type d'entretien</label>
                <select value={entForm.type} onChange={e => setEntForm(f => ({ ...f, type: e.target.value }))} style={selectStyle}>
                  {['Vidange', 'Contrôle technique', 'Révision', 'Pneus', 'Carrosserie', 'Autre'].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Date prévue</label>
                <input type="date" value={entForm.datePrevu} onChange={e => setEntForm(f => ({ ...f, datePrevu: e.target.value }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Km prévu (optionnel)</label>
                <input type="number" value={entForm.kmPrevu} onChange={e => setEntForm(f => ({ ...f, kmPrevu: e.target.value }))} placeholder="Ex: 150000" style={inputStyle} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={saveEntretien} disabled={savingEnt || !entForm.vehicleId || !entForm.datePrevu}
                style={{ flex: 1, background: savingEnt ? '#1E2535' : 'linear-gradient(135deg, #14B8A6, #3B82F6)', color: 'white', border: 'none', borderRadius: '8px', padding: '10px', cursor: 'pointer', fontWeight: '600' }}>
                {savingEnt ? 'Sauvegarde...' : '+ Planifier'}
              </button>
              <button onClick={() => setEntModal(false)} style={{ background: 'transparent', border: '1px solid #2A3348', borderRadius: '8px', color: '#6B7A99', padding: '10px 16px', cursor: 'pointer' }}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = { color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' };
const inputStyle: React.CSSProperties = { background: '#111622', border: '1px solid #2A3348', borderRadius: '6px', color: '#E8ECF5', padding: '8px 10px', fontSize: '13px', outline: 'none', width: '100%', boxSizing: 'border-box' };
const selectStyle: React.CSSProperties = { background: '#111622', border: '1px solid #2A3348', borderRadius: '6px', color: '#E8ECF5', padding: '8px 10px', fontSize: '13px', outline: 'none', cursor: 'pointer', width: '100%' };

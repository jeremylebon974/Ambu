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

const CODES_COLORS: Record<string, string> = {
  PJ: '#14B8A6',
  PN: '#8B5CF6',
  AC: '#F59E0B',
  RH: '#6B7A99',
  CP: '#22C55E',
  FM: '#3B82F6',
};

const JOURS_COURT = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export default function AmbulanciePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [missions, setMissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statut,       setStatut]       = useState('EN SERVICE');
  const [sosEnvoye,    setSosEnvoye]    = useState(false);
  const [weekPlanning, setWeekPlanning] = useState<Record<string, string>>({});
  const [vehicleActuel, setVehicleActuel] = useState<string | null>(null);
  const [kmModal,      setKmModal]      = useState<'DEPART' | 'ARRIVEE' | null>(null);
  const [kmInput,      setKmInput]      = useState('');
  const [savingKm,     setSavingKm]     = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=ambulancier'); return; }
    setVehicleActuel(localStorage.getItem('vehicleActuel'));
    loadData();
  }, [router]);

  // GPS tracker silencieux toutes les 30 secondes
  useEffect(() => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) return;
    let lastMoveTime = Date.now();
    let lastPos: { lat: number; lng: number } | null = null;
    const calcDist = (a: { lat: number; lng: number }, b: { lat: number; lng: number }) => {
      const R = 6371000;
      const dLat = (b.lat - a.lat) * Math.PI / 180;
      const dLon = (b.lng - a.lng) * Math.PI / 180;
      const aa = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
      return R * 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
    };
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const timestamp = Date.now();
        try {
          const token = auth.getToken() ?? '';
          await fetch(`${API_URL}/pda/gps`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({ lat, lng, timestamp }),
          });
        } catch {}
        const current = { lat, lng };
        if (lastPos) {
          if (calcDist(lastPos, current) >= 50) lastMoveTime = timestamp;
          if (timestamp - lastMoveTime > 15 * 60 * 1000) {
            try {
              const token = auth.getToken() ?? '';
              await fetch(`${API_URL}/pda/incident`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ type: 'GPS_IMMOBILE', gravite: 'ALERTE', description: 'Véhicule immobile depuis 15 minutes' }),
              });
              lastMoveTime = timestamp;
            } catch {}
          }
        }
        lastPos = current;
      }, () => {}, { enableHighAccuracy: false, timeout: 10000 });
    }, 30000);
    return () => clearInterval(interval);
  }, []);

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
    loadMyPlanning(u);
    setLoading(false);
  };

  const loadMyPlanning = async (currentUser: any) => {
    if (!currentUser?.id) return;
    const token = auth.getToken();
    const today = new Date();
    const monthsNeeded = new Set<string>();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      monthsNeeded.add(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    }
    try {
      const responses = await Promise.all(
        Array.from(monthsNeeded).map(month =>
          fetch(`${API_URL}/planning?month=${month}&userId=${currentUser.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          }).then(r => r.ok ? r.json() : [])
        )
      );
      const flat = responses.flat();
      const map: Record<string, string> = {};
      flat.forEach((p: any) => {
        const ds = new Date(p.date).toISOString().slice(0, 10);
        map[ds] = p.code;
      });
      setWeekPlanning(map);
    } catch {}
  };

  const handleEndOfService = () => {
    if (!window.confirm('Terminer votre service ?')) return;
    localStorage.removeItem('vehicleActuel');
    auth.logout();
    router.push('/');
  };

  const handleKmSubmit = async () => {
    if (!kmInput || !vehicleActuel) return;
    setSavingKm(true);
    try {
      const token = auth.getToken() ?? '';
      const body = kmModal === 'DEPART'
        ? { plate: vehicleActuel, kmDepart: Number(kmInput), statut: 'DEPART' }
        : { plate: vehicleActuel, kmArrivee: Number(kmInput), statut: 'ARRIVEE' };
      await fetch(`${API_URL}/vehicles/logs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
      setKmModal(null);
      setKmInput('');
    } catch {}
    setSavingKm(false);
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
                onClick={() => s === 'FIN DE SERVICE' ? handleEndOfService() : setStatut(s)}
                style={{
                  background: statut === s ? (s === 'FIN DE SERVICE' ? '#EF4444' : '#14B8A6') : '#111622',
                  border: `1px solid ${s === 'FIN DE SERVICE' ? '#EF444440' : '#1E2535'}`,
                  borderRadius: '8px',
                  color: statut === s ? 'white' : (s === 'FIN DE SERVICE' ? '#EF4444' : '#6B7A99'),
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

        {/* MON PLANNING CETTE SEMAINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          style={{ marginBottom: '20px' }}
        >
          <h2 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '12px' }}>📅 Mon planning cette semaine</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px' }}>
            {Array.from({ length: 7 }).map((_, i) => {
              const d = new Date();
              d.setDate(d.getDate() + i);
              const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
              const dayIdx = d.getDay() === 0 ? 6 : d.getDay() - 1;
              const code = weekPlanning[dateStr];
              const color = CODES_COLORS[code] || '#2A3348';
              const isToday = i === 0;
              return (
                <div key={dateStr} style={{
                  background: isToday ? '#0D1017' : '#0A0C12',
                  border: `1px solid ${isToday ? '#14B8A640' : '#1E2535'}`,
                  borderRadius: '10px',
                  padding: '8px 4px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '10px', color: '#6B7A99', textTransform: 'uppercase', fontWeight: '600' }}>
                    {JOURS_COURT[dayIdx]}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: isToday ? '#14B8A6' : '#E8ECF5', margin: '2px 0' }}>
                    {d.getDate()}
                  </div>
                  {code ? (
                    <div style={{
                      background: color + '25', color, border: `1px solid ${color}50`,
                      borderRadius: '4px', padding: '2px 0', fontSize: '10px',
                      fontWeight: '700', fontFamily: 'monospace',
                    }}>{code}</div>
                  ) : (
                    <div style={{ fontSize: '10px', color: '#3A4560', fontFamily: 'monospace' }}>—</div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* MON VÉHICULE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          style={{ marginBottom: '20px' }}
        >
          <h2 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '12px' }}>🚑 Mon véhicule</h2>
          <div style={{ background: '#0D1017', border: '1px solid #3B82F640', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/pda/scan')}
              style={{ background: '#3B82F615', border: '1px solid #3B82F640', borderRadius: '12px', padding: '14px', color: '#3B82F6', fontSize: '14px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              📷 Scanner QR véhicule
            </motion.button>
            {vehicleActuel && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                  <div style={{ fontSize: '11px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Véhicule affecté</div>
                  <div style={{ fontSize: '28px', fontWeight: '900', fontFamily: 'DM Mono, monospace', color: '#3B82F6', background: '#3B82F610', border: '2px solid #3B82F640', borderRadius: '10px', padding: '8px 20px', display: 'inline-block', letterSpacing: '0.08em' }}>
                    {vehicleActuel}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <motion.button whileTap={{ scale: 0.96 }} onClick={() => { setKmModal('DEPART'); setKmInput(''); }}
                    style={{ background: '#22C55E15', border: '1px solid #22C55E40', borderRadius: '10px', padding: '14px', color: '#22C55E', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
                    🟢 Km départ
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.96 }} onClick={() => { setKmModal('ARRIVEE'); setKmInput(''); }}
                    style={{ background: '#EF444415', border: '1px solid #EF444440', borderRadius: '10px', padding: '14px', color: '#EF4444', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
                    🔴 Km arrivée
                  </motion.button>
                </div>
              </div>
            )}
          </div>
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

        {/* MODAL KM */}
        {kmModal && (
          <div onClick={() => setKmModal(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', zIndex: 1000, padding: '0 0 24px' }}>
            <div onClick={e => e.stopPropagation()}
              style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '20px 20px 12px 12px', padding: '28px 24px', width: '100%', maxWidth: '480px' }}>
              <div style={{ fontSize: '16px', fontWeight: '800', marginBottom: '6px' }}>
                {kmModal === 'DEPART' ? '🟢 Kilométrage de départ' : '🔴 Kilométrage d\'arrivée'}
              </div>
              <div style={{ fontSize: '12px', color: '#6B7A99', fontFamily: 'monospace', marginBottom: '20px' }}>{vehicleActuel}</div>
              <input
                type="number"
                inputMode="numeric"
                value={kmInput}
                onChange={e => setKmInput(e.target.value)}
                placeholder="Ex : 145 230"
                autoFocus
                style={{ width: '100%', boxSizing: 'border-box', background: '#111622', border: '2px solid #2A3348', borderRadius: '12px', color: '#E8ECF5', padding: '16px', fontSize: '24px', fontWeight: '700', fontFamily: 'DM Mono, monospace', outline: 'none', textAlign: 'center', marginBottom: '16px' }}
              />
              <div style={{ display: 'flex', gap: '12px' }}>
                <motion.button whileTap={{ scale: 0.97 }} onClick={handleKmSubmit} disabled={savingKm || !kmInput}
                  style={{ flex: 1, background: savingKm ? '#1E2535' : 'linear-gradient(135deg, #14B8A6, #3B82F6)', color: savingKm ? '#6B7A99' : 'white', border: 'none', borderRadius: '12px', padding: '16px', fontSize: '15px', fontWeight: '800', cursor: savingKm || !kmInput ? 'not-allowed' : 'pointer' }}>
                  {savingKm ? '⏳ Envoi...' : '✓ Valider'}
                </motion.button>
                <button onClick={() => setKmModal(null)}
                  style={{ background: 'transparent', border: '1px solid #2A3348', borderRadius: '12px', color: '#6B7A99', padding: '16px 20px', cursor: 'pointer', fontSize: '14px' }}>
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}

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

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../../lib/auth';
import { DirectionBadge } from '../../components/DirectionBadge';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

type PdaStatus = 'DISPONIBLE' | 'EN_MISSION' | 'PAUSE' | 'FIN_SERVICE';

export default function PdaPage() {
  const router = useRouter();
  const [pdaRef, setPdaRef] = useState('');
  const [selectedPda, setSelectedPda] = useState<any>(null);
  const [connected, setConnected] = useState(false);
  const [status, setStatus] = useState<PdaStatus>('DISPONIBLE');
  const [missions, setMissions] = useState<any[]>([]);
  const [activeMission, setActiveMission] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [gpsInterval, setGpsInterval] = useState<any>(null);
  const [position, setPosition] = useState({ lat: -21.3647, lng: 55.6182 });
  const [log, setLog] = useState<string[]>([]);
  const [pdaList, setPdaList] = useState<any[]>([]);

  const addLog = (msg: string) => {
    setLog(prev => [`[${new Date().toLocaleTimeString('fr-FR')}] ${msg}`, ...prev.slice(0, 19)]);
  };

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login'); return; }
    loadPdaList();
  }, [router]);

  const loadPdaList = async () => {
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/pda-devices`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPdaList(Array.isArray(data) ? data : []);
    } catch (err) {
      addLog('❌ Erreur chargement liste PDA');
    }
  };

  const connectPda = async () => {
    if (!pdaRef) return;
    setLoading(true);
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/pda-devices/${pdaRef}/connect`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setSelectedPda(data);
      setConnected(true);
      addLog(`✅ Connecté sur ${pdaRef} — Véhicule ${data.vehicle?.plate || 'Non assigné'}`);
      loadMissions();
      startHeartbeat();
      startGps();
    } catch (err) {
      addLog(`❌ Erreur connexion PDA ${pdaRef}`);
    }
    setLoading(false);
  };

  const disconnectPda = async () => {
    try {
      const token = auth.getToken();
      await fetch(`${API_URL}/pda-devices/${pdaRef}/disconnect`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (gpsInterval) clearInterval(gpsInterval);
      setConnected(false);
      setSelectedPda(null);
      setMissions([]);
      setActiveMission(null);
      addLog(`🔌 Déconnecté de ${pdaRef}`);
    } catch (err) {
      addLog('❌ Erreur déconnexion');
    }
  };

  const startHeartbeat = () => {
    setInterval(async () => {
      const token = auth.getToken();
      await fetch(`${API_URL}/pda-devices/${pdaRef}/heartbeat`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
    }, 30000);
  };

  const startGps = () => {
    const interval = setInterval(async () => {
      const token = auth.getToken();
      const newPos = {
        lat: position.lat + (Math.random() - 0.5) * 0.001,
        lng: position.lng + (Math.random() - 0.5) * 0.001,
      };
      setPosition(newPos);
      await fetch(`${API_URL}/pda/gps`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ latitude: newPos.lat, longitude: newPos.lng, speed: Math.random() * 80 }),
      });
      addLog(`📍 GPS envoyé: ${newPos.lat.toFixed(4)}, ${newPos.lng.toFixed(4)}`);
    }, 15000);
    setGpsInterval(interval);
  };

  const loadMissions = async () => {
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/missions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMissions(data.slice(0, 5));
      addLog(`📋 ${data.length} mission(s) chargée(s)`);
    } catch (err) {
      addLog('❌ Erreur chargement missions');
    }
  };

  const updateMissionStatus = async (missionId: string, newStatus: string) => {
    try {
      const token = auth.getToken();
      await fetch(`${API_URL}/missions/${missionId}/status`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      addLog(`✅ Mission → ${newStatus}`);
      loadMissions();
    } catch (err) {
      addLog('❌ Erreur mise à jour statut');
    }
  };

  const statusColors: Record<string, string> = {
    PENDING: '#F59E0B',
    ASSIGNED: '#3B82F6',
    EN_ROUTE: '#8B5CF6',
    ON_SCENE: '#14B8A6',
    TRANSPORTING: '#06B6D4',
    COMPLETED: '#22C55E',
    CANCELLED: '#EF4444',
  };

  const missionWorkflow = ['ASSIGNED', 'EN_ROUTE', 'ON_SCENE', 'TRANSPORTING', 'COMPLETED'];

  if (!connected) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#03050A',
        fontFamily: 'DM Sans, sans-serif',
        color: '#E8ECF5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <DirectionBadge />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: '#0D1017',
            border: '1px solid #1E2535',
            borderRadius: '20px',
            padding: '40px',
            width: '400px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>📱</div>
            <div style={{ fontWeight: '800', fontSize: '20px', marginBottom: '4px' }}>
              <span style={{ color: '#EF4444' }}>VIE</span>sionnaire PDA
            </div>
            <div style={{ color: '#6B7A99', fontSize: '13px' }}>Terminal terrain ambulancier</div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '6px' }}>
              Référence PDA
            </label>
            <select
              value={pdaRef}
              onChange={e => setPdaRef(e.target.value)}
              style={{
                width: '100%',
                background: '#111622',
                border: '1px solid #2A3348',
                borderRadius: '8px',
                color: '#E8ECF5',
                padding: '10px 12px',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            >
              <option value="">Sélectionnez un PDA...</option>
              {pdaList.map(p => (
                <option key={p.reference} value={p.reference}>
                  {p.reference} {p.vehicle ? `→ Véhicule ${p.vehicle.plate}` : '→ Non assigné'}
                  {p.currentUser ? ` (${p.currentUser.lastName})` : ''}
                </option>
              ))}
            </select>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={connectPda}
            disabled={!pdaRef || loading}
            style={{
              width: '100%',
              background: pdaRef ? 'linear-gradient(135deg, #14B8A6, #3B82F6)' : '#1E2535',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              padding: '14px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: pdaRef ? 'pointer' : 'not-allowed',
              marginBottom: '16px',
            }}
          >
            {loading ? '⏳ Connexion...' : '🔌 Connecter le PDA'}
          </motion.button>

          <button
            onClick={() => router.back()}
            style={{ width: '100%', background: 'transparent', border: '1px solid #1E2535', borderRadius: '8px', color: '#6B7A99', padding: '10px', cursor: 'pointer', fontSize: '13px' }}
          >
            ← Retour
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#03050A',
      fontFamily: 'DM Sans, sans-serif',
      color: '#E8ECF5',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <DirectionBadge />
      {/* HEADER PDA */}
      <div style={{
        background: '#0D1017',
        borderBottom: '1px solid #1E2535',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontWeight: '800', fontSize: '14px' }}>
            <span style={{ color: '#EF4444' }}>VIE</span>sionnaire
          </span>
          <span style={{ background: '#14B8A620', color: '#14B8A6', border: '1px solid #14B8A640', borderRadius: '6px', padding: '2px 10px', fontSize: '12px', fontWeight: '700' }}>
            {pdaRef}
          </span>
          {selectedPda?.vehicle && (
            <span style={{ color: '#6B7A99', fontSize: '12px' }}>
              🚑 {selectedPda.vehicle.plate}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#14B8A6' }}
          />
          <span style={{ color: '#14B8A6', fontSize: '12px' }}>CONNECTÉ</span>
          <button
            onClick={disconnectPda}
            style={{ background: '#EF444420', border: '1px solid #EF444440', borderRadius: '6px', color: '#EF4444', padding: '4px 10px', cursor: 'pointer', fontSize: '12px' }}
          >
            Déconnecter
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* COLONNE GAUCHE — Statut + Missions */}
        <div style={{ flex: 1, padding: '16px', overflowY: 'auto', borderRight: '1px solid #1E2535' }}>

          {/* Statut ambulancier */}
          <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '16px', marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', color: '#6B7A99', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Mon statut</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(['DISPONIBLE', 'EN_MISSION', 'PAUSE', 'FIN_SERVICE'] as PdaStatus[]).map(s => (
                <button
                  key={s}
                  onClick={() => { setStatus(s); addLog(`📊 Statut → ${s}`); }}
                  style={{
                    background: status === s ? '#14B8A6' : '#111622',
                    border: `1px solid ${status === s ? '#14B8A6' : '#2A3348'}`,
                    borderRadius: '8px',
                    color: status === s ? 'white' : '#6B7A99',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: status === s ? '700' : '400',
                  }}
                >{s.replace('_', ' ')}</button>
              ))}
            </div>
          </div>

          {/* GPS */}
          <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '16px', marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', color: '#6B7A99', marginBottom: '8px' }}>📍 Position GPS</div>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '13px', color: '#14B8A6' }}>
              {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
            </div>
            <div style={{ fontSize: '11px', color: '#3A4560', marginTop: '4px' }}>Saint-Joseph, La Réunion — Envoi auto toutes 15s</div>
          </div>

          {/* Missions */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700' }}>Mes missions</div>
              <button onClick={loadMissions} style={{ background: 'transparent', border: 'none', color: '#14B8A6', cursor: 'pointer', fontSize: '12px' }}>
                🔄 Actualiser
              </button>
            </div>

            {missions.length === 0 ? (
              <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '24px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>
                Aucune mission assignée
              </div>
            ) : (
              missions.map(m => (
                <motion.div
                  key={m.id}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setActiveMission(activeMission?.id === m.id ? null : m)}
                  style={{
                    background: activeMission?.id === m.id ? '#1A2235' : '#0D1017',
                    border: `1px solid ${statusColors[m.status] || '#1E2535'}30`,
                    borderRadius: '12px',
                    padding: '14px',
                    marginBottom: '8px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontFamily: 'DM Mono, monospace', color: '#6B7A99' }}>{m.id.slice(-8).toUpperCase()}</span>
                    <span style={{
                      background: (statusColors[m.status] || '#6B7A99') + '20',
                      color: statusColors[m.status] || '#6B7A99',
                      border: `1px solid ${statusColors[m.status] || '#6B7A99'}40`,
                      borderRadius: '6px',
                      padding: '2px 8px',
                      fontSize: '11px',
                      fontWeight: '700',
                    }}>{m.status}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#E8ECF5', marginBottom: '4px' }}>{m.address}</div>
                  <div style={{ fontSize: '11px', color: '#6B7A99' }}>Priorité {m.priority}</div>

                  {/* Workflow buttons */}
                  <AnimatePresence>
                    {activeMission?.id === m.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ marginTop: '12px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}
                      >
                        {missionWorkflow.map(s => (
                          <button
                            key={s}
                            onClick={e => { e.stopPropagation(); updateMissionStatus(m.id, s); }}
                            style={{
                              background: m.status === s ? (statusColors[s] || '#14B8A6') : '#111622',
                              border: `1px solid ${statusColors[s] || '#2A3348'}40`,
                              borderRadius: '6px',
                              color: m.status === s ? 'white' : '#6B7A99',
                              padding: '4px 8px',
                              cursor: 'pointer',
                              fontSize: '11px',
                              fontWeight: '600',
                            }}
                          >{s.replace('_', ' ')}</button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </div>

          {/* SOS */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => addLog('🆘 ALERTE SOS envoyée à la régulation !')}
            style={{
              width: '100%',
              marginTop: '16px',
              background: 'linear-gradient(135deg, #EF4444, #DC2626)',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              padding: '16px',
              fontSize: '15px',
              fontWeight: '800',
              cursor: 'pointer',
            }}
          >
            🆘 ALERTE SOS RÉGULATION
          </motion.button>

          {/* SCAN DOCUMENT */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/pda/scan')}
            style={{
              width: '100%',
              marginTop: '10px',
              background: '#0D1017',
              border: '1px solid #8B5CF640',
              borderRadius: '12px',
              color: '#8B5CF6',
              padding: '14px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            📸 Scanner un document
          </motion.button>
        </div>

        {/* COLONNE DROITE — Log activité */}
        <div style={{ width: '280px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '12px', color: '#6B7A99', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Journal activité
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {log.map((entry, i) => (
              <div key={i} style={{
                fontSize: '11px',
                color: i === 0 ? '#E8ECF5' : '#6B7A99',
                fontFamily: 'DM Mono, monospace',
                padding: '4px 0',
                borderBottom: '1px solid #0D1017',
              }}>
                {entry}
              </div>
            ))}
            {log.length === 0 && (
              <div style={{ color: '#3A4560', fontSize: '12px' }}>En attente d'activité...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

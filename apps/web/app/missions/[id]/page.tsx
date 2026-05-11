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

const STATUS_CONFIG: Record<string, { label: string; color: string; nextStatus?: string; nextLabel?: string; nextColor?: string }> = {
  PENDING:     { label: 'En attente',   color: '#F59E0B', nextStatus: 'ASSIGNED',     nextLabel: '✅ Assigner',          nextColor: '#3B82F6' },
  ASSIGNED:    { label: 'Assignée',     color: '#3B82F6', nextStatus: 'EN_ROUTE',     nextLabel: '🚑 Démarrer',           nextColor: '#8B5CF6' },
  EN_ROUTE:    { label: 'En route',     color: '#8B5CF6', nextStatus: 'ON_SCENE',     nextLabel: '📍 Sur place',          nextColor: '#14B8A6' },
  ON_SCENE:    { label: 'Sur place',    color: '#14B8A6', nextStatus: 'TRANSPORTING', nextLabel: '🏥 Démarrer transport', nextColor: '#06B6D4' },
  TRANSPORTING:{ label: 'En transport', color: '#06B6D4', nextStatus: 'COMPLETED',    nextLabel: '✅ Terminer',           nextColor: '#22C55E' },
  COMPLETED:   { label: 'Terminée',     color: '#22C55E' },
  CANCELLED:   { label: 'Annulée',      color: '#EF4444' },
};

const TIMELINE_LABELS: Record<string, string> = {
  PENDING: 'Mission créée',
  ASSIGNED: 'Équipage assigné',
  EN_ROUTE: 'Départ vers patient',
  ON_SCENE: 'Arrivée chez patient',
  TRANSPORTING: 'Transport démarré',
  COMPLETED: 'Mission terminée',
  CANCELLED: 'Mission annulée',
};

export default function MissionDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [mission, setMission] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login'); return; }
    loadMission();
  }, []);

  const loadMission = async () => {
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/missions/${params.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 404) { setNotFound(true); setLoading(false); return; }
      if (!res.ok) throw new Error();
      setMission(await res.json());
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (newStatus: string) => {
    setUpdating(true);
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/missions/${params.id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) setMission(await res.json());
    } catch {}
    setUpdating(false);
  };

  const cfg = mission ? STATUS_CONFIG[mission.status] ?? { label: mission.status, color: '#6B7A99' } : null;

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#07090F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{ width: '36px', height: '36px', border: '3px solid #1E2535', borderTop: '3px solid #14B8A6', borderRadius: '50%' }} />
    </div>
  );

  if (notFound) return (
    <div style={{ minHeight: '100vh', background: '#07090F', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <div style={{ fontSize: '48px' }}>🔍</div>
      <div style={{ fontSize: '18px', fontWeight: '700' }}>Mission introuvable</div>
      <div style={{ fontSize: '13px', color: '#6B7A99' }}>L'identifiant {params.id} ne correspond à aucune mission.</div>
      <button onClick={() => router.push('/dashboard')} style={{ background: '#14B8A6', border: 'none', borderRadius: '10px', color: 'white', padding: '12px 24px', cursor: 'pointer', fontWeight: '600', fontSize: '14px' }}>
        ← Retour au dashboard
      </button>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#07090F', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5' }}>

      {/* HEADER */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        style={{ background: '#0D1017', borderBottom: '1px solid #1E2535', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}
      >
        <button onClick={() => router.push('/dashboard')} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>
        <LogoViesionnaire height={26} onClick={() => router.push('/dashboard')} />
        <span style={{ color: '#2A3348' }}>|</span>
        <span style={{ color: '#6B7A99', fontSize: '13px', fontFamily: 'DM Mono, monospace' }}>
          Mission {params.id.slice(-8).toUpperCase()}
        </span>
        <div style={{ flex: 1 }} />
        {cfg && (
          <span style={{
            background: cfg.color + '20', color: cfg.color,
            border: `1px solid ${cfg.color}40`,
            borderRadius: '20px', padding: '5px 14px',
            fontSize: '12px', fontWeight: '700',
          }}>{cfg.label}</span>
        )}
      </motion.div>

      <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>

        {/* Infos principales */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '14px', padding: '20px', marginBottom: '16px' }}
        >
          <div style={{ fontSize: '12px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>Informations mission</div>
          {[
            { label: 'Adresse', value: mission.address || '—' },
            { label: 'Type', value: mission.type || 'Ambulance' },
            { label: 'Priorité', value: `P${mission.priority}` },
            { label: 'Créée le', value: mission.createdAt ? new Date(mission.createdAt).toLocaleString('fr-FR') : '—' },
            { label: 'Planifiée', value: mission.scheduledAt ? new Date(mission.scheduledAt).toLocaleString('fr-FR') : '—' },
          ].map(f => (
            <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #1E2535' }}>
              <span style={{ color: '#6B7A99', fontSize: '13px' }}>{f.label}</span>
              <span style={{ color: '#E8ECF5', fontSize: '13px', fontWeight: '600' }}>{f.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Patient */}
        {mission.patient && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ background: '#0D1017', border: '1px solid #3B82F625', borderRadius: '14px', padding: '20px', marginBottom: '16px' }}
          >
            <div style={{ fontSize: '12px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>👤 Patient</div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#E8ECF5', marginBottom: '4px' }}>
              {mission.patient.lastName} {mission.patient.firstName}
            </div>
            {mission.patient.address && (
              <div style={{ fontSize: '13px', color: '#6B7A99' }}>📍 {mission.patient.address}</div>
            )}
          </motion.div>
        )}

        {/* Équipage */}
        {mission.crew && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{ background: '#0D1017', border: '1px solid #14B8A625', borderRadius: '14px', padding: '20px', marginBottom: '16px' }}
          >
            <div style={{ fontSize: '12px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>🚑 Équipage</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#E8ECF5', marginBottom: '4px' }}>{mission.crew.name}</div>
            {mission.crew.vehicle && (
              <div style={{ fontSize: '13px', color: '#14B8A6', fontFamily: 'DM Mono, monospace' }}>{mission.crew.vehicle.plate}</div>
            )}
          </motion.div>
        )}

        {/* Timeline */}
        {mission.events && mission.events.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '14px', padding: '20px', marginBottom: '20px' }}
          >
            <div style={{ fontSize: '12px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>📋 Timeline</div>
            {mission.events.map((evt: any, i: number) => {
              const evtCfg = STATUS_CONFIG[evt.status] ?? { color: '#6B7A99' };
              return (
                <div key={evt.id || i} style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: evtCfg.color, flexShrink: 0, marginTop: '3px' }} />
                    {i < mission.events.length - 1 && (
                      <div style={{ width: '2px', flex: 1, background: '#1E2535', marginTop: '4px' }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: '8px' }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#E8ECF5' }}>
                      {TIMELINE_LABELS[evt.status] || evt.status}
                    </div>
                    <div style={{ fontSize: '11px', color: '#6B7A99', marginTop: '2px' }}>
                      {evt.createdAt ? new Date(evt.createdAt).toLocaleString('fr-FR') : ''}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Actions */}
        {cfg && mission.status !== 'COMPLETED' && mission.status !== 'CANCELLED' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            style={{ display: 'flex', gap: '10px' }}
          >
            {cfg.nextStatus && (
              <button
                onClick={() => updateStatus(cfg.nextStatus!)}
                disabled={updating}
                style={{
                  flex: 1,
                  background: cfg.nextColor || '#14B8A6',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  padding: '14px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: updating ? 'not-allowed' : 'pointer',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                {updating ? '⏳ Mise à jour...' : cfg.nextLabel}
              </button>
            )}
            <button
              onClick={() => updateStatus('CANCELLED')}
              disabled={updating}
              style={{
                background: '#EF444415',
                border: '1px solid #EF444430',
                borderRadius: '12px',
                color: '#EF4444',
                padding: '14px 20px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: updating ? 'not-allowed' : 'pointer',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Annuler
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

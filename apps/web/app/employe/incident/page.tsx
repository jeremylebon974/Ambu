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

const typesIncident = [
  'Accident véhicule',
  'Panne',
  'Patient agressif',
  'Problème médical',
  'Incident route',
  'Autre',
];

const gravites = [
  { value: 'FAIBLE', label: 'Faible 🟡' },
  { value: 'MODERE', label: 'Modéré 🟠' },
  { value: 'GRAVE', label: 'Grave 🔴' },
  { value: 'CRITIQUE', label: 'Critique 🆘' },
];

export default function AmbulancierIncidentPage() {
  const router = useRouter();
  const [type, setType] = useState('');
  const [gravite, setGravite] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState(-21.3647);
  const [longitude, setLongitude] = useState(55.6182);
  const [envoi, setEnvoi] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=employe'); return; }
    navigator.geolocation?.getCurrentPosition(
      pos => { setLatitude(pos.coords.latitude); setLongitude(pos.coords.longitude); },
      () => {}
    );
  }, [router]);

  const envoyer = async () => {
    if (!type || !gravite || !description.trim()) return;
    setEnvoi('loading');
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/pda/incident`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ type, gravite, description, latitude, longitude }),
      });
      if (!res.ok) throw new Error();
      setEnvoi('success');
    } catch {
      setEnvoi('error');
    }
  };

  const inputStyle = {
    width: '100%',
    background: '#111622',
    border: '1px solid #2A3348',
    borderRadius: '10px',
    color: '#E8ECF5',
    padding: '12px 14px',
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    boxSizing: 'border-box' as const,
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
        <LogoViesionnaire height={26} onClick={() => router.push('/employe')} />
      </motion.div>

      <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px' }}
        >
          ⚠️ Signaler un incident
        </motion.h1>

        {envoi === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: '#22C55E15',
              border: '1px solid #22C55E40',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <div style={{ fontSize: '17px', fontWeight: '800', color: '#22C55E', marginBottom: '8px' }}>
              Signalement envoyé à la régulation
            </div>
            <div style={{ fontSize: '13px', color: '#6B7A99', marginBottom: '24px' }}>
              La régulation a été notifiée et prend en charge votre signalement.
            </div>
            <button
              onClick={() => router.push('/employe')}
              style={{
                background: '#22C55E',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Retour au tableau de bord
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Type */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                Type d'incident
              </label>
              <select
                value={type}
                onChange={e => setType(e.target.value)}
                style={inputStyle}
              >
                <option value="">— Sélectionner —</option>
                {typesIncident.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Gravité */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                Gravité
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {gravites.map(g => (
                  <button
                    key={g.value}
                    onClick={() => setGravite(g.value)}
                    style={{
                      background: gravite === g.value ? '#EF444420' : '#111622',
                      border: `1px solid ${gravite === g.value ? '#EF4444' : '#2A3348'}`,
                      borderRadius: '10px',
                      color: gravite === g.value ? '#EF4444' : '#6B7A99',
                      padding: '10px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: gravite === g.value ? '700' : '400',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                Description <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Décrivez l'incident en détail..."
                rows={4}
                style={{ ...inputStyle, resize: 'none' }}
              />
            </div>

            {/* Position GPS */}
            <div style={{
              background: '#111622',
              border: '1px solid #1E2535',
              borderRadius: '10px',
              padding: '12px 14px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12px',
              color: '#6B7A99',
            }}>
              <span>📍</span>
              Position GPS : {latitude.toFixed(4)}, {longitude.toFixed(4)}
            </div>

            {/* Erreur */}
            {envoi === 'error' && (
              <div style={{
                background: '#EF444415',
                border: '1px solid #EF444440',
                borderRadius: '10px',
                padding: '12px 14px',
                marginBottom: '16px',
                color: '#EF4444',
                fontSize: '13px',
              }}>
                ⚠️ Erreur lors de l'envoi. Vérifiez votre connexion et réessayez.
              </div>
            )}

            {/* Bouton envoi */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={envoyer}
              disabled={!type || !gravite || !description.trim() || envoi === 'loading'}
              style={{
                width: '100%',
                background: !type || !gravite || !description.trim()
                  ? '#1E2535'
                  : 'linear-gradient(135deg, #EF4444, #DC2626)',
                border: 'none',
                borderRadius: '14px',
                color: !type || !gravite || !description.trim() ? '#6B7A99' : 'white',
                padding: '16px',
                fontSize: '15px',
                fontWeight: '700',
                cursor: !type || !gravite || !description.trim() ? 'not-allowed' : 'pointer',
              }}
            >
              {envoi === 'loading' ? '⏳ Envoi en cours...' : '🚨 Envoyer le signalement'}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

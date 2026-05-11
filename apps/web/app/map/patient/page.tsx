'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/auth';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { DirectionBadge } from '../../../components/DirectionBadge';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function MapPatientPage() {
  const router = useRouter();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [eta, setEta] = useState(12);
  const [status, setStatus] = useState('EN_ROUTE');
  const [ambulance, setAmbulance] = useState({ plate: '—', driver: '—', type: 'Ambulance' });
  const [position, setPosition] = useState({ lat: -21.3800, lng: 55.6100 });

  const statusSteps = [
    { key: 'ASSIGNED', label: 'Ambulance assignée', icon: '✅', done: true },
    { key: 'EN_ROUTE', label: 'En route vers vous', icon: '🚑', done: true, active: true },
    { key: 'ON_SCENE', label: 'Arrivée chez vous', icon: '📍', done: false },
    { key: 'TRANSPORTING', label: 'Transport en cours', icon: '🏥', done: false },
    { key: 'COMPLETED', label: 'Arrivée destination', icon: '✓', done: false },
  ];

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=patient'); return; }
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [55.6182, -21.3700],
      zoom: 13,
    });

    map.current.on('load', () => {
      // Marker ambulance animé
      const el = document.createElement('div');
      el.innerHTML = `
        <div style="
          background: white;
          border: 3px solid #14B8A6;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          box-shadow: 0 0 20px rgba(20,184,166,0.6), 0 4px 12px rgba(0,0,0,0.3);
          cursor: pointer;
        ">🚑</div>
      `;

      marker.current = new mapboxgl.Marker({ element: el })
        .setLngLat([position.lng, position.lat])
        .addTo(map.current!);

      // Marker destination patient
      const destEl = document.createElement('div');
      destEl.innerHTML = `
        <div style="
          background: #EF4444;
          border: 3px solid white;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: 0 4px 12px rgba(239,68,68,0.4);
        ">📍</div>
      `;
      new mapboxgl.Marker({ element: destEl })
        .setLngLat([55.6300, -21.3600])
        .addTo(map.current!);

      // Simuler mouvement ambulance
      simulateMovement();

      // Charger la mission active du patient
      const token = auth.getToken();
      fetch(`${API_URL}/missions`, { headers: { Authorization: `Bearer ${token}` } })
        .then(r => r.json())
        .then((data: any[]) => {
          const active = Array.isArray(data)
            ? data.find(m => ['ASSIGNED', 'EN_ROUTE', 'ON_SCENE', 'TRANSPORTING'].includes(m.status))
            : null;
          if (active) {
            setStatus(active.status);
            if (active.crew?.vehicle) {
              setAmbulance({
                plate: active.crew.vehicle.plate || '—',
                driver: active.crew.name || '—',
                type: active.crew.vehicle.type || 'Ambulance',
              });
            }
          }
        })
        .catch(() => {});

      // ETA countdown
      const etaTimer = setInterval(() => {
        setEta(prev => {
          if (prev <= 1) { clearInterval(etaTimer); setStatus('ON_SCENE'); return 0; }
          return prev - 1;
        });
      }, 8000);
    });
  }, []);

  const simulateMovement = () => {
    let lat = -21.3800;
    let lng = 55.6100;
    const targetLat = -21.3600;
    const targetLng = 55.6300;

    const move = () => {
      const progress = Math.random() * 0.008;
      lat += (targetLat - lat) * progress + (Math.random() - 0.5) * 0.0005;
      lng += (targetLng - lng) * progress + (Math.random() - 0.5) * 0.0005;

      if (marker.current) {
        marker.current.setLngLat([lng, lat]);
      }

      setPosition({ lat, lng });

      if (Math.abs(lat - targetLat) > 0.002 || Math.abs(lng - targetLng) > 0.002) {
        setTimeout(move, 2000);
      }
    };

    setTimeout(move, 1000);
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      fontFamily: 'DM Sans, sans-serif',
      color: '#1A1A2E',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <DirectionBadge />
      {/* CARTE plein écran */}
      <div ref={mapContainer} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} />

      {/* HEADER flottant */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontWeight: '800', fontSize: '15px', color: '#1A1A2E' }}>
            <span style={{ color: '#EF4444' }}>VIE</span>sionnaire
          </div>
          <div style={{ fontSize: '12px', color: '#6B7A99' }}>Suivi de votre transport</div>
        </div>

        <div style={{
          background: '#14B8A6',
          color: 'white',
          borderRadius: '20px',
          padding: '8px 16px',
          fontWeight: '800',
          fontSize: '15px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }}
            style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }} />
          {eta > 0 ? `${eta} min` : 'Arrivé !'}
        </div>
      </motion.div>

      {/* CARD INFOS BAS — style Uber */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background: 'white',
          borderRadius: '24px 24px 0 0',
          padding: '20px 20px 32px',
          boxShadow: '0 -8px 32px rgba(0,0,0,0.15)',
        }}
      >
        {/* Handle */}
        <div style={{ width: '40px', height: '4px', background: '#E5E7EB', borderRadius: '2px', margin: '0 auto 16px' }} />

        {/* Ambulancier */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
          padding: '12px',
          background: '#F9FAFB',
          borderRadius: '12px',
        }}>
          <div style={{
            width: '48px', height: '48px',
            background: 'linear-gradient(135deg, #14B8A6, #3B82F6)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
          }}>🧑‍⚕️</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: '700', fontSize: '15px', color: '#1A1A2E' }}>{ambulance.driver}</div>
            <div style={{ fontSize: '12px', color: '#6B7A99' }}>{ambulance.type} • {ambulance.plate}</div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ background: '#14B8A620', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '18px' }}>📞</button>
            <button style={{ background: '#3B82F620', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '18px' }}>💬</button>
          </div>
        </div>

        {/* Progression étapes */}
        <div style={{ marginBottom: '8px' }}>
          <div style={{ fontSize: '12px', color: '#6B7A99', marginBottom: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Progression de votre transport
          </div>
          {statusSteps.map((step, i) => (
            <div key={step.key} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{
                width: '28px', height: '28px',
                borderRadius: '50%',
                background: step.done ? '#14B8A6' : '#F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                flexShrink: 0,
                border: step.active ? '2px solid #14B8A6' : 'none',
                boxShadow: step.active ? '0 0 8px rgba(20,184,166,0.4)' : 'none',
              }}>
                {step.done ? '✓' : step.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: step.active ? '700' : '400',
                  color: step.done ? '#1A1A2E' : '#9CA3AF',
                }}>{step.label}</div>
              </div>
              {step.active && eta > 0 && (
                <div style={{ fontSize: '12px', color: '#14B8A6', fontWeight: '700' }}>{eta} min</div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

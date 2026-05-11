'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/auth';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { DirectionBadge } from '../../../components/DirectionBadge';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function MapAmbulanciePage() {
  const router = useRouter();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const myMarker = useRef<mapboxgl.Marker | null>(null);
  const patientMarker = useRef<mapboxgl.Marker | null>(null);

  const [mission, setMission] = useState<any>(null);
  const [missionId, setMissionId] = useState<string | null>(null);
  const [patientName, setPatientName] = useState('Patient • Mission active');
  const [step, setStep] = useState<'EN_ROUTE' | 'ON_SCENE' | 'TRANSPORTING'>('EN_ROUTE');
  const [eta, setEta] = useState(8);
  const [myPos, setMyPos] = useState({ lat: -21.3850, lng: 55.6050 });

  const patientPos = { lat: -21.3600, lng: 55.6300 };
  const destPos = { lat: -21.3400, lng: 55.6500 };

  const updateMissionStatus = async (newStatus: string) => {
    setStep(newStatus as any);
    if (!missionId) return;
    try {
      const token = auth.getToken();
      await fetch(`${API_URL}/missions/${missionId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch {}
  };

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=ambulancier'); return; }
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [55.6182, -21.3700],
      zoom: 12,
      pitch: 20,
    });

    map.current.on('load', () => {
      // Marker ambulancier (moi)
      const myEl = document.createElement('div');
      myEl.innerHTML = `<div style="
        background: #14B8A6;
        border: 3px solid white;
        border-radius: 50%;
        width: 44px; height: 44px;
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
        box-shadow: 0 0 16px rgba(20,184,166,0.7), 0 4px 12px rgba(0,0,0,0.4);
      ">🚑</div>`;
      myMarker.current = new mapboxgl.Marker({ element: myEl })
        .setLngLat([myPos.lng, myPos.lat])
        .addTo(map.current!);

      // Marker patient
      const patEl = document.createElement('div');
      patEl.innerHTML = `<div style="
        background: #EF4444;
        border: 3px solid white;
        border-radius: 50%;
        width: 36px; height: 36px;
        display: flex; align-items: center; justify-content: center;
        font-size: 18px;
        box-shadow: 0 0 12px rgba(239,68,68,0.5);
      ">👤</div>`;
      patientMarker.current = new mapboxgl.Marker({ element: patEl })
        .setLngLat([patientPos.lng, patientPos.lat])
        .addTo(map.current!);

      // Ligne itinéraire
      map.current!.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [myPos.lng, myPos.lat],
              [patientPos.lng, patientPos.lat],
            ],
          },
          properties: {},
        },
      });
      map.current!.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        paint: {
          'line-color': '#14B8A6',
          'line-width': 4,
          'line-opacity': 0.8,
          'line-dasharray': [2, 1],
        },
      });

      simulateMovement();

      // Charger la mission active
      const token = auth.getToken();
      fetch(`${API_URL}/missions`, { headers: { Authorization: `Bearer ${token}` } })
        .then(r => r.json())
        .then((data: any[]) => {
          const active = Array.isArray(data)
            ? data.find(m => ['ASSIGNED', 'EN_ROUTE', 'ON_SCENE', 'TRANSPORTING'].includes(m.status))
            : null;
          if (active) {
            setMissionId(active.id);
            setMission(active);
            if (active.patient) setPatientName(`${active.patient.lastName} ${active.patient.firstName}`);
          }
        })
        .catch(() => {});

      const etaTimer = setInterval(() => {
        setEta(prev => {
          if (prev <= 1) { clearInterval(etaTimer); setStep('ON_SCENE'); return 0; }
          return prev - 1;
        });
      }, 6000);
    });
  }, []);

  const simulateMovement = () => {
    let lat = myPos.lat;
    let lng = myPos.lng;

    const move = () => {
      const progress = 0.004 + Math.random() * 0.006;
      lat += (patientPos.lat - lat) * progress + (Math.random() - 0.5) * 0.0003;
      lng += (patientPos.lng - lng) * progress + (Math.random() - 0.5) * 0.0003;

      myMarker.current?.setLngLat([lng, lat]);
      setMyPos({ lat, lng });

      if (Math.abs(lat - patientPos.lat) > 0.003 || Math.abs(lng - patientPos.lng) > 0.003) {
        setTimeout(move, 1800);
      }
    };
    setTimeout(move, 800);
  };

  const stepConfig = [
    { key: 'EN_ROUTE', label: 'En route vers patient', color: '#3B82F6', icon: '🚑' },
    { key: 'ON_SCENE', label: 'Sur place', color: '#14B8A6', icon: '📍' },
    { key: 'TRANSPORTING', label: 'Transport en cours', color: '#8B5CF6', icon: '🏥' },
  ];

  const current = stepConfig.find(s => s.key === step)!;

  return (
    <div style={{
      height: '100vh', width: '100vw',
      fontFamily: 'DM Sans, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      background: '#07090F',
    }}>
      <DirectionBadge />
      {/* CARTE */}
      <div ref={mapContainer} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} />

      {/* HEADER flottant */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
          background: 'rgba(7,9,15,0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #1E2535',
          padding: '14px 20px',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}
      >
        <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#E8ECF5' }}>
            <span style={{ color: '#EF4444' }}>VIE</span>sionnaire — Ma mission
          </div>
          <div style={{ fontSize: '11px', color: '#6B7A99' }}>Vue PDA ambulancier</div>
        </div>
        <div style={{
          background: current.color + '20',
          border: `1px solid ${current.color}50`,
          borderRadius: '20px',
          padding: '6px 14px',
          color: current.color,
          fontSize: '12px',
          fontWeight: '700',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '6px', height: '6px', borderRadius: '50%', background: current.color }} />
          {current.label}
        </div>
      </motion.div>

      {/* CARD BAS */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
          background: 'rgba(13,16,23,0.97)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px 20px 0 0',
          borderTop: '1px solid #1E2535',
          padding: '20px 20px 32px',
        }}
      >
        {/* ETA */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em' }}>ETA patient</div>
            <div style={{ fontSize: '28px', fontWeight: '800', color: eta > 0 ? '#14B8A6' : '#22C55E', fontFamily: 'DM Mono, monospace' }}>
              {eta > 0 ? `${eta} min` : 'Arrivé'}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {stepConfig.map(s => (
              <button
                key={s.key}
                onClick={() => updateMissionStatus(s.key)}
                style={{
                  background: step === s.key ? s.color + '25' : '#111622',
                  border: `1px solid ${step === s.key ? s.color : '#1E2535'}`,
                  borderRadius: '8px',
                  color: step === s.key ? s.color : '#6B7A99',
                  padding: '6px 10px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  fontWeight: '700',
                }}
              >{s.icon}</button>
            ))}
          </div>
        </div>

        {/* Patient info */}
        <div style={{
          background: '#111622',
          border: '1px solid #1E2535',
          borderRadius: '12px',
          padding: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '14px',
        }}>
          <div style={{
            width: '40px', height: '40px',
            background: '#EF444420',
            border: '1px solid #EF444440',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px', flexShrink: 0,
          }}>👤</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#E8ECF5' }}>{patientName}</div>
            <div style={{ fontSize: '12px', color: '#6B7A99', marginTop: '2px' }}>📍 Adresse prise en charge</div>
          </div>
          <button style={{ background: '#14B8A620', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', fontSize: '16px' }}>📞</button>
        </div>

        {/* Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <button
            onClick={() => updateMissionStatus('ON_SCENE')}
            style={{
              background: '#14B8A620',
              border: '1px solid #14B8A640',
              borderRadius: '10px',
              color: '#14B8A6',
              padding: '12px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '13px',
            }}
          >📍 Sur place</button>
          <button
            onClick={() => updateMissionStatus('TRANSPORTING')}
            style={{
              background: '#8B5CF620',
              border: '1px solid #8B5CF640',
              borderRadius: '10px',
              color: '#8B5CF6',
              padding: '12px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '13px',
            }}
          >🏥 En transport</button>
        </div>
      </motion.div>
    </div>
  );
}

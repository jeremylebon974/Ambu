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

const DEPOT: [number, number] = [55.6182, -21.3647]; // Fallback si pas GPS

export default function MapAmbulanciePage() {
  const router = useRouter();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map          = useRef<mapboxgl.Map | null>(null);
  const myMarker     = useRef<mapboxgl.Marker | null>(null);
  const patientMarker = useRef<mapboxgl.Marker | null>(null);
  const watchId      = useRef<number | null>(null);
  const gpsInterval  = useRef<ReturnType<typeof setInterval> | null>(null);

  const [mission,     setMission]     = useState<any>(null);
  const [missionId,   setMissionId]   = useState<string | null>(null);
  const [patientName, setPatientName] = useState('Patient • Mission active');
  const [step,        setStep]        = useState<'EN_ROUTE' | 'ON_SCENE' | 'TRANSPORTING'>('EN_ROUTE');
  const [eta,         setEta]         = useState<number | null>(null);
  const [myPos,       setMyPos]       = useState<{ lat: number; lng: number } | null>(null);
  const [gpsError,    setGpsError]    = useState(false);

  // Position fixe du patient (sera remplacée par les données de la mission)
  const patientPos = { lat: -21.3600, lng: 55.6300 };

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

  // Récupère le tracé réel depuis l'API Mapbox Directions
  const fetchAndDrawRoute = async (fromLng: number, fromLat: number, toLng: number, toLat: number) => {
    if (!map.current) return;
    try {
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${fromLng},${fromLat};${toLng},${toLat}?geometries=geojson&overview=full&access_token=${mapboxgl.accessToken}`;
      const res  = await fetch(url);
      const data = await res.json();
      const coords = data.routes?.[0]?.geometry?.coordinates;
      if (!coords) return;

      // Durée estimée en minutes
      const durationSec = data.routes[0].duration;
      setEta(Math.round(durationSec / 60));

      const geojson: GeoJSON.Feature = {
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: coords },
        properties: {},
      };

      if (map.current.getSource('route')) {
        (map.current.getSource('route') as mapboxgl.GeoJSONSource).setData(geojson);
      } else {
        map.current.addSource('route', { type: 'geojson', data: geojson });
        map.current.addLayer({
          id:     'route-line',
          type:   'line',
          source: 'route',
          layout: { 'line-join': 'round', 'line-cap': 'round' },
          paint: {
            'line-color':     '#14B8A6',
            'line-width':     4,
            'line-opacity':   0.9,
            'line-dasharray': [2, 1],
          },
        });
      }
    } catch {}
  };

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=employe'); return; }
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: DEPOT,
      zoom: 12,
      pitch: 20,
    });

    map.current.on('load', () => {
      // Marker patient
      const patEl = document.createElement('div');
      patEl.innerHTML = `<div style="background:#EF4444;border:3px solid white;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 0 12px rgba(239,68,68,0.5);">👤</div>`;
      patientMarker.current = new mapboxgl.Marker({ element: patEl })
        .setLngLat([patientPos.lng, patientPos.lat])
        .addTo(map.current!);

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
    });

    // Géolocalisation réelle via watchPosition
    if (navigator.geolocation) {
      watchId.current = navigator.geolocation.watchPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setGpsError(false);
          setMyPos({ lat, lng });

          // Créer ou déplacer le marker "moi"
          if (!myMarker.current) {
            const myEl = document.createElement('div');
            myEl.innerHTML = `<div style="background:#14B8A6;border:3px solid white;border-radius:50%;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 0 16px rgba(20,184,166,0.7);">🚑</div>`;
            myMarker.current = new mapboxgl.Marker({ element: myEl })
              .setLngLat([lng, lat])
              .addTo(map.current!);
            map.current?.flyTo({ center: [lng, lat], zoom: 13 });
          } else {
            myMarker.current.setLngLat([lng, lat]);
          }

          // Recalculer le tracé vers le patient
          if (map.current?.loaded()) {
            fetchAndDrawRoute(lng, lat, patientPos.lng, patientPos.lat);
          }
        },
        () => {
          setGpsError(true);
          // Fallback : marker statique au dépôt
          if (!myMarker.current) {
            const myEl = document.createElement('div');
            myEl.innerHTML = `<div style="background:#F59E0B;border:3px solid white;border-radius:50%;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:20px;">🚑</div>`;
            myMarker.current = new mapboxgl.Marker({ element: myEl })
              .setLngLat(DEPOT)
              .addTo(map.current!);
          }
        },
        { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 },
      );
    }

    // POST /pda/gps toutes les 30 secondes
    gpsInterval.current = setInterval(() => {
      if (!myPos) return;
      const token = auth.getToken() ?? '';
      fetch(`${API_URL}/pda/gps`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ lat: myPos.lat, lng: myPos.lng, timestamp: Date.now() }),
      }).catch(() => {});
    }, 30000);

    return () => {
      if (watchId.current !== null) navigator.geolocation.clearWatch(watchId.current);
      if (gpsInterval.current) clearInterval(gpsInterval.current);
      map.current?.remove();
    };
  }, []);

  // Envoyer la position dès qu'elle change (ref pour capturer la valeur courante dans setInterval)
  const myPosRef = useRef(myPos);
  useEffect(() => { myPosRef.current = myPos; }, [myPos]);

  // Recalculer le tracé à chaque changement de position
  useEffect(() => {
    if (!myPos || !map.current?.loaded()) return;
    fetchAndDrawRoute(myPos.lng, myPos.lat, patientPos.lng, patientPos.lat);
  }, [myPos]);

  const stepConfig = [
    { key: 'EN_ROUTE',     label: 'En route vers patient', color: '#3B82F6', icon: '🚑' },
    { key: 'ON_SCENE',     label: 'Sur place',              color: '#14B8A6', icon: '📍' },
    { key: 'TRANSPORTING', label: 'Transport en cours',     color: '#8B5CF6', icon: '🏥' },
  ];

  const current = stepConfig.find(s => s.key === step)!;

  return (
    <div style={{ height: '100vh', width: '100vw', fontFamily: 'DM Sans, sans-serif', position: 'relative', overflow: 'hidden', background: '#07090F' }}>
      <DirectionBadge />

      {/* CARTE */}
      <div ref={mapContainer} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} />

      {/* Alerte GPS dégradé */}
      {gpsError && (
        <div style={{ position: 'absolute', top: '70px', left: '50%', transform: 'translateX(-50%)', background: '#F59E0B20', border: '1px solid #F59E0B60', borderRadius: '10px', padding: '8px 16px', color: '#F59E0B', fontSize: '12px', zIndex: 20, backdropFilter: 'blur(8px)' }}>
          ⚠️ GPS indisponible — position approximative
        </div>
      )}

      {/* HEADER flottant */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, background: 'rgba(7,9,15,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #1E2535', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#E8ECF5' }}><span style={{ color: '#EF4444' }}>VIE</span>sionnaire — Ma mission</div>
          <div style={{ fontSize: '11px', color: '#6B7A99' }}>GPS {gpsError ? 'approximatif' : 'temps réel'}</div>
        </div>
        <div style={{ background: current.color + '20', border: `1px solid ${current.color}50`, borderRadius: '20px', padding: '6px 14px', color: current.color, fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '6px', height: '6px', borderRadius: '50%', background: current.color }} />
          {current.label}
        </div>
      </motion.div>

      {/* CARD BAS */}
      <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10, background: 'rgba(13,16,23,0.97)', backdropFilter: 'blur(20px)', borderRadius: '20px 20px 0 0', borderTop: '1px solid #1E2535', padding: '20px 20px 32px' }}>

        {/* ETA */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em' }}>ETA patient</div>
            <div style={{ fontSize: '28px', fontWeight: '800', color: eta !== null ? '#14B8A6' : '#6B7A99', fontFamily: 'DM Mono, monospace' }}>
              {eta !== null ? `${eta} min` : '—'}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {stepConfig.map(s => (
              <button key={s.key} onClick={() => updateMissionStatus(s.key)}
                style={{ background: step === s.key ? s.color + '25' : '#111622', border: `1px solid ${step === s.key ? s.color : '#1E2535'}`, borderRadius: '8px', color: step === s.key ? s.color : '#6B7A99', padding: '6px 10px', cursor: 'pointer', fontSize: '10px', fontWeight: '700' }}>
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Patient info */}
        <div style={{ background: '#111622', border: '1px solid #1E2535', borderRadius: '12px', padding: '14px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div style={{ width: 40, height: 40, background: '#EF444420', border: '1px solid #EF444440', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>👤</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#E8ECF5' }}>{patientName}</div>
            <div style={{ fontSize: '12px', color: '#6B7A99', marginTop: '2px' }}>📍 Adresse prise en charge</div>
          </div>
          <button style={{ background: '#14B8A620', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', fontSize: '16px' }}>📞</button>
        </div>

        {/* Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <button onClick={() => updateMissionStatus('ON_SCENE')}
            style={{ background: '#14B8A620', border: '1px solid #14B8A640', borderRadius: '10px', color: '#14B8A6', padding: '12px', cursor: 'pointer', fontWeight: '700', fontSize: '13px' }}>
            📍 Sur place
          </button>
          <button onClick={() => updateMissionStatus('TRANSPORTING')}
            style={{ background: '#8B5CF620', border: '1px solid #8B5CF640', borderRadius: '10px', color: '#8B5CF6', padding: '12px', cursor: 'pointer', fontWeight: '700', fontSize: '13px' }}>
            🏥 En transport
          </button>
        </div>
      </motion.div>
    </div>
  );
}

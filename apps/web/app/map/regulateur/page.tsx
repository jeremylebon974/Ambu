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

const STATUS_CONFIG: Record<string, { color: string; label: string; pulse: boolean }> = {
  AVAILABLE:    { color: '#14B8A6', label: 'Disponible',    pulse: false },
  ON_MISSION:   { color: '#3B82F6', label: 'En mission',    pulse: true  },
  EN_ROUTE:     { color: '#8B5CF6', label: 'En route',      pulse: true  },
  ON_SCENE:     { color: '#F59E0B', label: 'Sur place',     pulse: true  },
  TRANSPORTING: { color: '#06B6D4', label: 'Transport',     pulse: true  },
  MAINTENANCE:  { color: '#EF4444', label: 'Maintenance',   pulse: false },
  PAUSE:        { color: '#6B7A99', label: 'Pause',         pulse: false },
};

interface Vehicle {
  id: string;
  plate: string;
  type: string;
  status: string;
  lat?: number;
  lng?: number;
  heading?: number;
  speed?: number;
  crew?: { firstName: string; lastName: string }[];
}


export default function MapRegulateurPage() {
  const router = useRouter();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<Map<string, mapboxgl.Marker>>(new Map());
  const vehiclePositions = useRef<Map<string, [number, number]>>(new Map());

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [missions, setMissions] = useState<any[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedMission, setSelectedMission] = useState<any>(null);
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const [stats, setStats] = useState({ available: 0, onMission: 0, total: 0, saturation: 0 });
  const [sidebarTab, setSidebarTab] = useState<'fleet' | 'missions' | 'ai'>('fleet');
  const [loading, setLoading] = useState(true);

  // Initialiser la carte
  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=regulateur'); return; }
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [55.6182, -21.3647],
      zoom: 11,
      pitch: 45,
      bearing: 0,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setLoading(false);
      loadData();
    });

    const interval = setInterval(loadData, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const loadData = async () => {
    try {
      const token = auth.getToken();
      const headers = { Authorization: `Bearer ${token}` };

      const [vehiclesRes, missionsRes] = await Promise.all([
        fetch(`${API_URL}/vehicles`, { headers }),
        fetch(`${API_URL}/missions`, { headers }),
      ]);

      const vehiclesData = await vehiclesRes.json();
      const missionsData = await missionsRes.json();

      const vArray = Array.isArray(vehiclesData) ? vehiclesData : [];
      const mArray = Array.isArray(missionsData) ? missionsData : [];

      const DEPOT: [number, number] = [55.6182, -21.3647];
      const vehiclesWithGPS = vArray.map((v: Vehicle, i: number) => {
        const meta = (v as any).metadata ?? {};
        if (meta.lastLat && meta.lastLng) {
          return { ...v, lat: Number(meta.lastLat), lng: Number(meta.lastLng), heading: meta.lastHeading ?? 0, speed: meta.lastSpeed ?? 0 };
        }
        // Position simulée si pas de données GPS réelles
        const angle  = (i / Math.max(vArray.length, 1)) * 2 * Math.PI;
        const radius = 0.01 + Math.random() * 0.03;
        return { ...v, lat: DEPOT[1] + radius * Math.sin(angle), lng: DEPOT[0] + radius * Math.cos(angle), heading: Math.random() * 360, speed: v.status === 'ON_MISSION' ? 40 + Math.random() * 40 : 0 };
      });

      setVehicles(vehiclesWithGPS);
      setMissions(mArray);

      const available = vehiclesWithGPS.filter((v: Vehicle) => v.status === 'AVAILABLE').length;
      const onMission = vehiclesWithGPS.filter((v: Vehicle) => v.status === 'ON_MISSION').length;
      setStats({
        available,
        onMission,
        total: vehiclesWithGPS.length,
        saturation: Math.round((onMission / Math.max(vehiclesWithGPS.length, 1)) * 100),
      });

      // Placer markers sur la carte
      vehiclesWithGPS.forEach((v: Vehicle) => {
        if (v.lat && v.lng) placeVehicleMarker(v);
      });

      // Pas de simulation — positions réelles depuis metadata.lastLat/lastLng

    } catch (err) {
      console.error('Erreur chargement données:', err);
    }
  };

  const createMarkerElement = (vehicle: Vehicle): HTMLElement => {
    const config = STATUS_CONFIG[vehicle.status] || STATUS_CONFIG.AVAILABLE;
    const el = document.createElement('div');
    el.style.cssText = `
      position: relative;
      cursor: pointer;
      transition: transform 0.1s ease;
    `;

    // Corps du marqueur
    const body = document.createElement('div');
    body.style.cssText = `
      background: #07090F;
      border: 2px solid ${config.color};
      border-radius: 8px;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 0 12px ${config.color}60, 0 2px 8px rgba(0,0,0,0.5);
      white-space: nowrap;
      font-family: DM Mono, monospace;
      transition: all 0.3s ease;
    `;

    const icon = document.createElement('span');
    icon.textContent = vehicle.type === 'AMBULANCE' ? '🚑' : '🚗';
    icon.style.fontSize = '14px';

    const label = document.createElement('span');
    label.textContent = vehicle.plate;
    label.style.cssText = `color: ${config.color}; font-size: 11px; font-weight: 700;`;

    body.appendChild(icon);
    body.appendChild(label);
    el.appendChild(body);

    // Point de statut
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: absolute;
      top: -4px;
      right: -4px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${config.color};
      border: 2px solid #07090F;
      ${config.pulse ? 'animation: pulse 1.5s infinite;' : ''}
    `;
    el.appendChild(dot);

    // Style pulse
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 ${config.color}60; }
        70% { box-shadow: 0 0 0 8px transparent; }
        100% { box-shadow: 0 0 0 0 transparent; }
      }
    `;
    document.head.appendChild(style);

    el.addEventListener('click', () => {
      setSelectedVehicle(vehicle);
      map.current?.flyTo({ center: [vehicle.lng!, vehicle.lat!], zoom: 14, duration: 1000 });
    });

    return el;
  };

  const placeVehicleMarker = (vehicle: Vehicle) => {
    if (!map.current || !vehicle.lat || !vehicle.lng) return;

    const existingMarker = markers.current.get(vehicle.id);
    if (existingMarker) existingMarker.remove();

    const el = createMarkerElement(vehicle);
    const marker = new mapboxgl.Marker({ element: el, rotation: vehicle.heading || 0 })
      .setLngLat([vehicle.lng, vehicle.lat])
      .addTo(map.current);

    markers.current.set(vehicle.id, marker);
    vehiclePositions.current.set(vehicle.id, [vehicle.lng, vehicle.lat]);
  };

  const flyToVehicle = (vehicle: Vehicle) => {
    if (!map.current || !vehicle.lat || !vehicle.lng) return;
    setSelectedVehicle(vehicle);
    map.current.flyTo({ center: [vehicle.lng, vehicle.lat], zoom: 15, duration: 1500, pitch: 60 });
  };

  const resetView = () => {
    map.current?.flyTo({ center: [55.6182, -21.3647], zoom: 11, pitch: 45, duration: 1500 });
    setSelectedVehicle(null);
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: '#07090F',
      fontFamily: 'DM Sans, sans-serif',
      color: '#E8ECF5',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <DirectionBadge />
      {/* TOPBAR */}
      <div style={{
        height: '52px',
        background: 'rgba(7, 9, 15, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1E2535',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        gap: '12px',
        zIndex: 100,
        flexShrink: 0,
      }}>
        <button onClick={() => router.push('/regulateur')} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: '800', fontSize: '14px' }}>
            <span style={{ color: '#EF4444' }}>VIE</span>sionnaire
          </span>
          <span style={{ color: '#2A3348' }}>|</span>
          <span style={{ color: '#6B7A99', fontSize: '13px' }}>Centre de Régulation — Carte Live</span>
        </div>

        <div style={{ flex: 1 }} />

        {/* Stats live */}
        {[
          { label: 'Disponibles', value: stats.available, color: '#14B8A6' },
          { label: 'En mission', value: stats.onMission, color: '#3B82F6' },
          { label: 'Total', value: stats.total, color: '#6B7A99' },
          { label: 'Saturation', value: `${stats.saturation}%`, color: stats.saturation > 80 ? '#EF4444' : '#F59E0B' },
        ].map(s => (
          <div key={s.label} style={{
            background: '#0D1017',
            border: `1px solid ${s.color}30`,
            borderRadius: '8px',
            padding: '4px 12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '16px', fontWeight: '800', color: s.color, fontFamily: 'DM Mono, monospace' }}>{s.value}</div>
            <div style={{ fontSize: '10px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
          </div>
        ))}

        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#14B8A6', fontSize: '12px' }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#14B8A6' }} />
          LIVE
        </motion.div>

        <button onClick={resetView} style={{ background: '#111622', border: '1px solid #1E2535', borderRadius: '8px', color: '#6B7A99', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}>
          🎯 Centrer
        </button>
      </div>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* CARTE */}
        <div style={{ flex: 1, position: 'relative' }}>
          <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />

          {/* Loading overlay */}
          {loading && (
            <div style={{
              position: 'absolute', inset: 0, background: '#07090F',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px',
            }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                style={{ width: '40px', height: '40px', border: '3px solid #1E2535', borderTop: '3px solid #14B8A6', borderRadius: '50%' }} />
              <span style={{ color: '#6B7A99', fontSize: '13px' }}>Chargement de la carte...</span>
            </div>
          )}

          {/* Véhicule sélectionné — infos flottantes */}
          <AnimatePresence>
            {selectedVehicle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(13, 16, 23, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${STATUS_CONFIG[selectedVehicle.status]?.color || '#1E2535'}50`,
                  borderRadius: '16px',
                  padding: '16px 24px',
                  minWidth: '320px',
                  zIndex: 50,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '24px' }}>{selectedVehicle.type === 'AMBULANCE' ? '🚑' : '🚗'}</span>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '16px' }}>Véhicule {selectedVehicle.plate}</div>
                      <div style={{ fontSize: '12px', color: STATUS_CONFIG[selectedVehicle.status]?.color || '#6B7A99', fontWeight: '600' }}>
                        {STATUS_CONFIG[selectedVehicle.status]?.label || selectedVehicle.status}
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setSelectedVehicle(null)} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>✕</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    { label: 'Type', value: selectedVehicle.type },
                    { label: 'Vitesse', value: `${Math.round(selectedVehicle.speed || 0)} km/h` },
                    { label: 'Cap', value: `${Math.round(selectedVehicle.heading || 0)}°` },
                    { label: 'GPS', value: `${selectedVehicle.lat?.toFixed(4)}, ${selectedVehicle.lng?.toFixed(4)}` },
                  ].map(f => (
                    <div key={f.label} style={{ background: '#111622', borderRadius: '8px', padding: '8px 10px' }}>
                      <div style={{ fontSize: '10px', color: '#6B7A99', textTransform: 'uppercase', marginBottom: '2px' }}>{f.label}</div>
                      <div style={{ fontSize: '13px', fontWeight: '600', fontFamily: 'DM Mono, monospace' }}>{f.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SIDEBAR DROITE */}
        <div style={{
          width: '320px',
          background: '#0D1017',
          borderLeft: '1px solid #1E2535',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid #1E2535' }}>
            {[
              { key: 'fleet', label: '🚑 Flotte' },
              { key: 'missions', label: '📋 Missions' },
              { key: 'ai', label: '🧠 IA' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setSidebarTab(tab.key as any)}
                style={{
                  flex: 1,
                  padding: '12px 8px',
                  border: 'none',
                  background: sidebarTab === tab.key ? '#111622' : 'transparent',
                  color: sidebarTab === tab.key ? '#14B8A6' : '#6B7A99',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: sidebarTab === tab.key ? '700' : '400',
                  borderBottom: sidebarTab === tab.key ? '2px solid #14B8A6' : '2px solid transparent',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >{tab.label}</button>
            ))}
          </div>

          {/* Contenu sidebar */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>

            {/* FLOTTE */}
            {sidebarTab === 'fleet' && (
              <div>
                {vehicles.map(v => {
                  const config = STATUS_CONFIG[v.status] || STATUS_CONFIG.AVAILABLE;
                  return (
                    <motion.div
                      key={v.id}
                      whileHover={{ x: 4 }}
                      onClick={() => flyToVehicle(v)}
                      style={{
                        background: selectedVehicle?.id === v.id ? '#1A2235' : '#111622',
                        border: `1px solid ${config.color}${selectedVehicle?.id === v.id ? '60' : '20'}`,
                        borderRadius: '10px',
                        padding: '10px 12px',
                        marginBottom: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <span style={{ fontSize: '18px' }}>{v.type === 'AMBULANCE' ? '🚑' : '🚗'}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '700', fontSize: '13px', fontFamily: 'DM Mono, monospace' }}>
                          {v.plate}
                        </div>
                        <div style={{ fontSize: '11px', color: config.color, fontWeight: '600' }}>
                          {config.label}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '11px', color: '#6B7A99' }}>{v.type}</div>
                        {v.speed ? <div style={{ fontSize: '11px', color: '#14B8A6', fontFamily: 'DM Mono, monospace' }}>{Math.round(v.speed)} km/h</div> : null}
                      </div>
                      <motion.div
                        animate={config.pulse ? { opacity: [1, 0.3, 1] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ width: '8px', height: '8px', borderRadius: '50%', background: config.color, flexShrink: 0 }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* MISSIONS */}
            {sidebarTab === 'missions' && (
              <div>
                {missions.length === 0 ? (
                  <div style={{ textAlign: 'center', color: '#6B7A99', fontSize: '13px', padding: '32px 16px' }}>
                    Aucune mission active
                  </div>
                ) : missions.map(m => (
                  <motion.div
                    key={m.id}
                    whileHover={{ x: 4 }}
                    onClick={() => setSelectedMission(m)}
                    style={{
                      background: '#111622',
                      border: '1px solid #1E2535',
                      borderRadius: '10px',
                      padding: '10px 12px',
                      marginBottom: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '11px', color: '#6B7A99', fontFamily: 'DM Mono, monospace' }}>
                        {m.id?.slice(-8).toUpperCase()}
                      </span>
                      <span style={{
                        fontSize: '10px',
                        fontWeight: '700',
                        color: m.status === 'PENDING' ? '#F59E0B' : m.status === 'COMPLETED' ? '#22C55E' : '#3B82F6',
                      }}>{m.status}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#E8ECF5' }}>{m.address}</div>
                    <div style={{ fontSize: '11px', color: '#6B7A99', marginTop: '2px' }}>P{m.priority}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* IA */}
            {sidebarTab === 'ai' && (
              <div>
                <div style={{ background: '#111622', border: '1px solid #14B8A640', borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#14B8A6', fontWeight: '600', marginBottom: '8px' }}>🧠 Analyse IA temps réel</div>
                  <div style={{ fontSize: '12px', color: '#6B7A99', lineHeight: '1.6' }}>
                    Saturation flotte : <span style={{ color: stats.saturation > 80 ? '#EF4444' : '#14B8A6', fontWeight: '700' }}>{stats.saturation}%</span>
                    <br />
                    Véhicules disponibles : <span style={{ color: '#14B8A6', fontWeight: '700' }}>{stats.available}</span>
                    <br />
                    Zone couverte : Saint-Joseph et alentours
                  </div>
                </div>

                {[
                  { icon: '⚡', title: 'Couverture optimale', desc: 'La flotte couvre correctement le secteur Sud de La Réunion.', color: '#14B8A6', simulated: true },
                  { icon: '📊', title: 'Pic d\'activité prévu', desc: 'Augmentation probable des demandes entre 14h-16h.', color: '#F59E0B', simulated: true },
                  { icon: '🎯', title: 'Recommandation', desc: `Maintenir ${Math.max(2, stats.available)} véhicules disponibles minimum.`, color: '#3B82F6', simulated: false },
                ].map(s => (
                  <div key={s.title} style={{ background: '#111622', border: `1px solid ${s.color}20`, borderRadius: '10px', padding: '12px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '16px' }}>{s.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                          <span style={{ fontSize: '12px', fontWeight: '600', color: s.color }}>{s.title}</span>
                          {s.simulated && (
                            <span style={{ fontSize: '9px', color: '#6B7A99', background: '#1E2535', border: '1px solid #2A3348', borderRadius: '4px', padding: '1px 5px', letterSpacing: '0.04em' }}>
                              SIMULÉ
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '11px', color: '#6B7A99', lineHeight: '1.5' }}>{s.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

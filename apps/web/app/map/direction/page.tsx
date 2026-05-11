'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/auth';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const MONTANT: Record<number, number> = { 1: 150, 2: 110, 3: 85, 4: 65 };

export default function MapDirectionPage() {
  const router = useRouter();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    available: 0, onMission: 0, maintenance: 0, total: 0,
    saturation: 0, caJour: '0 €', missions: 0,
  });

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=direction'); return; }
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [55.6182, -21.3647],
      zoom: 10,
      pitch: 30,
    });

    map.current.on('load', () => {
      setLoading(false);
      loadData();
    });
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
      const vehiclesWithGPS = vArray.map((v: any, i: number) => {
        const angle = (i / Math.max(vArray.length, 1)) * 2 * Math.PI;
        const radius = 0.01 + Math.random() * 0.05;
        return {
          ...v,
          lat: DEPOT[1] + radius * Math.sin(angle),
          lng: DEPOT[0] + radius * Math.cos(angle),
        };
      });

      setVehicles(vehiclesWithGPS);

      const available = vehiclesWithGPS.filter((v: any) => v.status === 'AVAILABLE').length;
      const onMission = vehiclesWithGPS.filter((v: any) => v.status === 'ON_MISSION').length;
      const maintenance = vehiclesWithGPS.filter((v: any) => v.status === 'MAINTENANCE').length;

      setStats({
        available,
        onMission,
        maintenance,
        total: vehiclesWithGPS.length,
        saturation: Math.round((onMission / Math.max(vehiclesWithGPS.length, 1)) * 100),
        caJour: `${mArray
          .filter((m: any) => m.status === 'COMPLETED' || m.status === 'VALIDATED')
          .reduce((sum: number, m: any) => sum + (MONTANT[m.priority] ?? 85), 0)
          .toLocaleString('fr-FR')} €`,
        missions: mArray.length,
      });

      // Ajouter markers
      vehiclesWithGPS.forEach((v: any) => {
        const color = v.status === 'AVAILABLE' ? '#14B8A6' :
          v.status === 'ON_MISSION' ? '#3B82F6' :
          v.status === 'MAINTENANCE' ? '#F59E0B' : '#6B7A99';

        const el = document.createElement('div');
        el.style.cssText = `
          background: #07090F;
          border: 2px solid ${color};
          border-radius: 6px;
          padding: 3px 7px;
          color: ${color};
          font-size: 10px;
          font-weight: 700;
          font-family: DM Mono, monospace;
          cursor: pointer;
          box-shadow: 0 0 10px ${color}40;
          white-space: nowrap;
        `;
        el.textContent = `${v.type === 'AMBULANCE' ? '🚑' : '🚗'} ${v.plate}`;

        new mapboxgl.Marker({ element: el })
          .setLngLat([v.lng, v.lat])
          .setPopup(new mapboxgl.Popup({ offset: 20 }).setHTML(`
            <div style="background:#0D1017;color:#E8ECF5;padding:10px;border-radius:8px;font-family:DM Sans,sans-serif;min-width:150px">
              <div style="font-weight:700;margin-bottom:6px">🚑 ${v.plate}</div>
              <div style="font-size:12px;color:${color};margin-bottom:4px">${v.status}</div>
              <div style="font-size:11px;color:#6B7A99">${v.type}</div>
            </div>
          `))
          .addTo(map.current!);
      });

      // Heatmap zones d'activité
      if (map.current?.getStyle()) {
        addHeatmap(vehiclesWithGPS);
      }

    } catch (err) {
      console.error('Erreur:', err);
    }
  };

  const addHeatmap = (vehiclesList: any[]) => {
    if (!map.current) return;
    try {
      map.current.addSource('vehicles-heat', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: vehiclesList.map(v => ({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [v.lng, v.lat] },
            properties: { weight: v.status === 'ON_MISSION' ? 1 : 0.3 },
          })),
        },
      });

      map.current.addLayer({
        id: 'vehicles-heat-layer',
        type: 'heatmap',
        source: 'vehicles-heat',
        paint: {
          'heatmap-weight': ['get', 'weight'],
          'heatmap-intensity': 0.6,
          'heatmap-color': [
            'interpolate', ['linear'], ['heatmap-density'],
            0, 'rgba(20,184,166,0)',
            0.3, 'rgba(20,184,166,0.3)',
            0.6, 'rgba(59,130,246,0.5)',
            1, 'rgba(239,68,68,0.7)',
          ],
          'heatmap-radius': 40,
          'heatmap-opacity': 0.4,
        },
      });
    } catch (e) {}
  };

  const kpis = [
    { label: 'Véhicules disponibles', value: stats.available, total: stats.total, color: '#14B8A6', icon: '🚑' },
    { label: 'En mission', value: stats.onMission, total: stats.total, color: '#3B82F6', icon: '📍' },
    { label: 'Maintenance', value: stats.maintenance, total: stats.total, color: '#EF4444', icon: '🔧' },
    { label: 'Saturation', value: `${stats.saturation}%`, color: stats.saturation > 70 ? '#EF4444' : '#22C55E', icon: '📊' },
    { label: 'CA estimé / jour', value: stats.caJour, color: '#22C55E', icon: '💶' },
    { label: 'Missions totales', value: stats.missions, color: '#F59E0B', icon: '📋' },
  ];

  return (
    <div style={{
      height: '100vh', width: '100vw',
      background: '#07090F',
      fontFamily: 'DM Sans, sans-serif',
      color: '#E8ECF5',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* TOPBAR */}
      <div style={{
        height: '52px',
        background: 'rgba(7,9,15,0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1E2535',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        gap: '12px',
        zIndex: 100,
        flexShrink: 0,
      }}>
        <button onClick={() => router.push('/direction')} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>
        <span style={{ fontWeight: '800', fontSize: '14px' }}>
          <span style={{ color: '#EF4444' }}>VIE</span>sionnaire
        </span>
        <span style={{ color: '#2A3348' }}>|</span>
        <span style={{ color: '#6B7A99', fontSize: '13px' }}>Vue Direction — Exploitation globale</span>
        <div style={{ flex: 1 }} />
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F59E0B', fontSize: '12px' }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
          VUE DIRECTION
        </motion.div>
      </div>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* CARTE */}
        <div style={{ flex: 1, position: 'relative' }}>
          <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />

          {loading && (
            <div style={{ position: 'absolute', inset: 0, background: '#07090F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                style={{ width: '40px', height: '40px', border: '3px solid #1E2535', borderTop: '3px solid #F59E0B', borderRadius: '50%' }} />
            </div>
          )}
        </div>

        {/* SIDEBAR KPIs */}
        <div style={{
          width: '280px',
          background: '#0D1017',
          borderLeft: '1px solid #1E2535',
          padding: '16px',
          overflowY: 'auto',
        }}>
          <div style={{ fontSize: '12px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', fontWeight: '600' }}>
            Tableau de bord exécutif
          </div>

          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: '#111622',
                border: `1px solid ${kpi.color}20`,
                borderRadius: '12px',
                padding: '14px',
                marginBottom: '10px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{kpi.label}</span>
                <span style={{ fontSize: '18px' }}>{kpi.icon}</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: kpi.color, fontFamily: 'DM Mono, monospace' }}>
                {kpi.value}
              </div>
              {kpi.total && (
                <div style={{ marginTop: '6px', background: '#0D1017', borderRadius: '4px', height: '4px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${(Number(kpi.value) / kpi.total) * 100}%`,
                    background: kpi.color,
                    borderRadius: '4px',
                    transition: 'width 1s ease',
                  }} />
                </div>
              )}
            </motion.div>
          ))}

          {/* Légende heatmap */}
          <div style={{ background: '#111622', borderRadius: '12px', padding: '14px', marginTop: '16px' }}>
            <div style={{ fontSize: '11px', color: '#6B7A99', marginBottom: '8px', fontWeight: '600' }}>Heatmap activité</div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginBottom: '4px' }}>
              <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: 'linear-gradient(90deg, rgba(20,184,166,0.3), rgba(59,130,246,0.5), rgba(239,68,68,0.7))' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#6B7A99' }}>
              <span>Faible</span><span>Moyen</span><span>Fort</span>
            </div>
          </div>

          <button
            onClick={() => router.push('/map/regulateur')}
            style={{
              width: '100%',
              marginTop: '16px',
              background: 'linear-gradient(135deg, #14B8A6, #3B82F6)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              padding: '12px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '13px',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            🎛️ Vue Régulateur →
          </button>
        </div>
      </div>
    </div>
  );
}

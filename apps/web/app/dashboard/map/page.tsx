'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/auth';
import { api } from '../../../lib/api-client';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface Vehicle {
  id: string;
  plate: string;
  type: string;
  status: string;
  lat?: number;
  lng?: number;
}

const STATUS_COLORS: Record<string, string> = {
  AVAILABLE: '#14b8a6',
  ON_MISSION: '#3b82f6',
  MAINTENANCE: '#f59e0b',
  OFFLINE: '#6b7a99',
};

const STATUS_LABELS: Record<string, string> = {
  AVAILABLE: 'Disponible',
  ON_MISSION: 'En mission',
  MAINTENANCE: 'Maintenance',
  OFFLINE: 'Hors ligne',
};

export default function MapPage() {
  const router = useRouter();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<Record<string, mapboxgl.Marker>>({});
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      router.push('/login');
      return;
    }

    // Initialiser la carte
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-1.5534, 47.2184], // Nantes
      zoom: 11,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      loadVehicles();
    });

    // WebSocket pour positions live
    const wsUrl = process.env.NEXT_PUBLIC_API_URL?.replace('http', 'ws') || 'ws://localhost:3001';
    const socket = new WebSocket(`${wsUrl}/dispatch`);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.event === 'vehicle:position') {
        updateVehiclePosition(data.vehicleId, data.lat, data.lng);
      }
    };

    return () => {
      socket.close();
      map.current?.remove();
    };
  }, [router]);

  const loadVehicles = async () => {
    try {
      const token = auth.getToken();
      if (!token) return;

      const data = await api.getDispatchVehicles(token);
      setVehicles(data);

      // Placer les marqueurs sur la carte
      data.forEach((vehicle: Vehicle) => {
        if (vehicle.lat && vehicle.lng) {
          addMarker(vehicle);
        }
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addMarker = (vehicle: Vehicle) => {
    if (!map.current) return;

    const el = document.createElement('div');
    el.style.cssText = `
      width: 36px;
      height: 36px;
      background: ${STATUS_COLORS[vehicle.status] || '#6b7a99'};
      border-radius: 50%;
      border: 3px solid white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    `;
    el.innerHTML = '🚑';
    el.onclick = () => setSelectedVehicle(vehicle);

    const marker = new mapboxgl.Marker({ element: el })
      .setLngLat([vehicle.lng!, vehicle.lat!])
      .addTo(map.current);

    markers.current[vehicle.id] = marker;
  };

  const updateVehiclePosition = (vehicleId: string, lat: number, lng: number) => {
    const marker = markers.current[vehicleId];
    if (marker) {
      marker.setLngLat([lng, lat]);
    }
    setVehicles(prev => prev.map(v =>
      v.id === vehicleId ? { ...v, lat, lng } : v
    ));
  };

  return (
    <div style={{ height: '100vh', background: '#07090f', display: 'flex', fontFamily: 'DM Sans, sans-serif' }}>

      {/* SIDEBAR */}
      <div style={{
        width: '300px',
        background: '#0d1017',
        borderRight: '1px solid #1e2535',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
      }}>
        {/* Header */}
        <div style={{
          padding: '16px',
          borderBottom: '1px solid #1e2535',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <button
            onClick={() => router.push('/dashboard')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#6b7a99',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >←</button>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', color: '#e8ecf5', fontSize: '15px' }}>
            🗺️ Carte dispatch
          </span>
        </div>

        {/* Stats */}
        <div style={{ padding: '12px 16px', borderBottom: '1px solid #1e2535' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {Object.entries(STATUS_COLORS).map(([status, color]) => (
              <div key={status} style={{
                background: '#111622',
                borderRadius: '8px',
                padding: '8px',
                border: `1px solid ${color}30`,
              }}>
                <div style={{ fontSize: '11px', color: '#6b7a99', marginBottom: '2px' }}>
                  {STATUS_LABELS[status]}
                </div>
                <div style={{ fontSize: '20px', fontWeight: '700', color, fontFamily: 'DM Mono, monospace' }}>
                  {vehicles.filter(v => v.status === status).length}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Liste véhicules */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
          {loading ? (
            <div style={{ color: '#6b7a99', textAlign: 'center', padding: '20px', fontSize: '13px' }}>
              Chargement...
            </div>
          ) : vehicles.length === 0 ? (
            <div style={{ color: '#6b7a99', textAlign: 'center', padding: '20px', fontSize: '13px' }}>
              Aucun véhicule
            </div>
          ) : vehicles.map(vehicle => (
            <div
              key={vehicle.id}
              onClick={() => {
                setSelectedVehicle(vehicle);
                if (vehicle.lat && vehicle.lng && map.current) {
                  map.current.flyTo({ center: [vehicle.lng, vehicle.lat], zoom: 14 });
                }
              }}
              style={{
                padding: '10px 12px',
                borderRadius: '8px',
                marginBottom: '4px',
                cursor: 'pointer',
                background: selectedVehicle?.id === vehicle.id ? '#1a2235' : 'transparent',
                border: `1px solid ${selectedVehicle?.id === vehicle.id ? '#2a3348' : 'transparent'}`,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: STATUS_COLORS[vehicle.status] || '#6b7a99',
                flexShrink: 0,
              }} />
              <div>
                <div style={{ color: '#e8ecf5', fontSize: '13px', fontWeight: '500' }}>
                  {vehicle.plate}
                </div>
                <div style={{ color: '#6b7a99', fontSize: '11px' }}>
                  {vehicle.type} · {STATUS_LABELS[vehicle.status] || vehicle.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Véhicule sélectionné */}
        {selectedVehicle && (
          <div style={{
            padding: '16px',
            borderTop: '1px solid #1e2535',
            background: '#111622',
          }}>
            <div style={{ fontSize: '12px', color: '#6b7a99', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Véhicule sélectionné
            </div>
            <div style={{ color: '#e8ecf5', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
              {selectedVehicle.plate}
            </div>
            <div style={{ color: '#6b7a99', fontSize: '12px', marginBottom: '8px' }}>
              {selectedVehicle.type} · {STATUS_LABELS[selectedVehicle.status]}
            </div>
            {selectedVehicle.lat && (
              <div style={{ color: '#3a4560', fontSize: '11px', fontFamily: 'DM Mono, monospace' }}>
                {selectedVehicle.lat.toFixed(4)}, {selectedVehicle.lng?.toFixed(4)}
              </div>
            )}
          </div>
        )}
      </div>

      {/* CARTE */}
      <div ref={mapContainer} style={{ flex: 1, position: 'relative' }}>
        {loading && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#e8ecf5',
            fontSize: '14px',
            zIndex: 5,
          }}>
            Chargement de la carte...
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/auth';
import { DirectionBadge } from '../../components/DirectionBadge';
import mapboxgl from 'mapbox-gl';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

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

interface Mission {
  id: string;
  status: string;
  priority: string;
  address: string;
  patient?: { firstName: string; lastName: string };
  createdAt: string;
}

interface Vehicle {
  id: string;
  plate: string;
  type: string;
  status: string;
}

interface FleetStats {
  total: number;
  available: number;
  onMission: number;
  activeMissions: number;
}

const PRIORITY_COLORS: Record<string, string> = {
  P1: '#EF4444',
  P2: '#F59E0B',
  P3: '#14B8A6',
  P4: '#6B7A99',
};

const STATUS_COLORS: Record<string, string> = {
  AVAILABLE: '#14B8A6',
  ON_MISSION: '#3B82F6',
  MAINTENANCE: '#F59E0B',
  OFFLINE: '#6B7A99',
};

export default function RegulateurPage() {
  const router = useRouter();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [stats, setStats] = useState<FleetStats>({ total: 0, available: 0, onMission: 0, activeMissions: 0 });
  const [loading, setLoading] = useState(true);
  const [aiInput, setAiInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'missions' | 'vehicles' | 'ai'>('missions');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      router.push('/login');
      return;
    }
    loadData();
    initMap();

    const timer = setInterval(() => setTime(new Date()), 1000);
    const refresh = setInterval(loadData, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(refresh);
      map.current?.remove();
    };
  }, [router]);

  const loadData = async () => {
    const token = auth.getToken();
    if (!token) return;
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const [mRes, vRes] = await Promise.all([
        fetch(`${API_URL}/missions`, { headers }),
        fetch(`${API_URL}/vehicles`, { headers }),
      ]);
      const mArray: Mission[]  = mRes.ok ? await mRes.json() : [];
      const vArray: Vehicle[]  = vRes.ok ? await vRes.json() : [];
      setMissions(Array.isArray(mArray) ? mArray : []);
      setVehicles(Array.isArray(vArray) ? vArray : []);
      setStats({
        total:          vArray.length,
        available:      vArray.filter(v => v.status === 'AVAILABLE').length,
        onMission:      vArray.filter(v => v.status === 'ON_MISSION').length,
        activeMissions: mArray.filter(m => !['COMPLETED', 'CANCELLED'].includes(m.status)).length,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const initMap = () => {
    if (!mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [55.6182, -21.3647],
      zoom: 11,
    });
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', async () => {
      try {
        const token = auth.getToken();
        const res = await fetch(`${API_URL}/vehicles`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        const data = await res.json();
        const DEPOT: [number, number] = [55.6182, -21.3647];

        data.forEach((v: any, i: number) => {
          const angle = (i / Math.max(data.length, 1)) * 2 * Math.PI;
          const lng = DEPOT[0] + 0.005 * Math.cos(angle);
          const lat = DEPOT[1] + 0.005 * Math.sin(angle);

          const color = v.status === 'AVAILABLE' ? '#14B8A6'
            : v.status === 'ON_MISSION' ? '#3B82F6'
            : v.status === 'MAINTENANCE' ? '#F59E0B'
            : '#6B7A99';

          const el = document.createElement('div');
          el.style.cssText = `background:#0D1017;border:2px solid ${color};border-radius:6px;padding:4px 8px;color:${color};font-size:11px;font-weight:700;font-family:DM Mono,monospace;cursor:pointer;white-space:nowrap;box-shadow:0 0 8px ${color}40;`;
          el.textContent = v.plate;

          new mapboxgl.Marker({ element: el })
            .setLngLat([lng, lat])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<div style="color:#E8ECF5;background:#0D1017;padding:8px;border-radius:6px;font-family:DM Sans,sans-serif">
                  <div style="font-weight:700;margin-bottom:4px">${v.plate}</div>
                  <div style="font-size:12px;color:${color}">${v.status}</div>
                  <div style="font-size:11px;color:#6B7A99">${v.type}</div>
                </div>`
              )
            )
            .addTo(map.current!);
        });
      } catch (err) {
        console.error('Erreur chargement véhicules carte:', err);
      }
    });
  };

  const handleAIDispatch = async () => {
    if (!aiInput.trim()) return;
    setAiLoading(true);
    setAiResult(null);
    const token = auth.getToken();
    if (!token) return;
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/regulator/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          rawRequest: aiInput,
          source: 'APPLICATION',
        }),
      });
      const data = await result.json();
      setAiResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };

  const getSaturationColor = () => {
    if (stats.total === 0) return '#6B7A99';
    const ratio = stats.onMission / stats.total;
    if (ratio >= 0.9) return '#EF4444';
    if (ratio >= 0.7) return '#F59E0B';
    return '#14B8A6';
  };

  return (
    <div style={{ height: '100vh', background: '#07090F', display: 'flex', flexDirection: 'column', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden' }}>
      <DirectionBadge />

      {/* HEADER */}
      <div style={{
        height: '56px',
        background: '#0D1017',
        borderBottom: '1px solid #1E2535',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        gap: '16px',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '16px', padding: '0 4px' }}>←</button>
          <LogoViesionnaire height={30} onClick={() => router.push('/regulateur')} />
          <span style={{ color: '#2A3348', fontSize: '14px' }}>|</span>
          <span style={{ color: '#6B7A99', fontSize: '13px' }}>Centre de Régulation</span>
        </div>

        <div style={{ flex: 1 }} />

        {/* Stats header */}
        {[
          { label: 'Disponibles', value: stats.available, color: '#14B8A6' },
          { label: 'En mission', value: stats.onMission, color: '#3B82F6' },
          { label: 'Missions actives', value: stats.activeMissions, color: '#F59E0B' },
        ].map(s => (
          <div key={s.label} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: '#111622',
            borderRadius: '8px',
            border: `1px solid ${s.color}20`,
          }}>
            <span style={{ color: s.color, fontSize: '18px', fontWeight: '700', fontFamily: 'DM Mono, monospace' }}>{s.value}</span>
            <span style={{ color: '#6B7A99', fontSize: '11px' }}>{s.label}</span>
          </div>
        ))}

        {/* Horloge */}
        <div style={{
          padding: '6px 14px',
          background: '#111622',
          borderRadius: '8px',
          border: '1px solid #1E2535',
          color: '#E8ECF5',
          fontSize: '14px',
          fontFamily: 'DM Mono, monospace',
          fontWeight: '600',
        }}>
          {time.toLocaleTimeString('fr-FR')}
        </div>

        <button
          onClick={() => router.push('/map/regulateur')}
          style={{
            background: 'linear-gradient(135deg, #14B8A6, #3B82F6)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            padding: '6px 12px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '600',
          }}
        >
          🗺️ Carte Live
        </button>

        <button
          onClick={() => router.push('/dashboard')}
          style={{
            background: 'transparent',
            border: '1px solid #1E2535',
            borderRadius: '8px',
            color: '#6B7A99',
            padding: '6px 12px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          ← Dashboard
        </button>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* SIDEBAR GAUCHE */}
        <div style={{
          width: '340px',
          background: '#0D1017',
          borderRight: '1px solid #1E2535',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
        }}>
          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid #1E2535' }}>
            {[
              { key: 'missions', label: '📋 Missions' },
              { key: 'vehicles', label: '🚑 Flotte' },
              { key: 'ai', label: '🧠 IA' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                style={{
                  flex: 1,
                  padding: '12px 4px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === tab.key ? '2px solid #14B8A6' : '2px solid transparent',
                  color: activeTab === tab.key ? '#E8ECF5' : '#6B7A99',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: activeTab === tab.key ? '600' : '400',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>

            {/* MISSIONS TAB */}
            {activeTab === 'missions' && (
              <div>
                {loading ? (
                  <div style={{ color: '#6B7A99', textAlign: 'center', padding: '20px', fontSize: '13px' }}>Chargement...</div>
                ) : missions.length === 0 ? (
                  <div style={{ color: '#6B7A99', textAlign: 'center', padding: '20px', fontSize: '13px' }}>Aucune mission</div>
                ) : missions.map(m => (
                  <div key={m.id} style={{
                    padding: '12px',
                    borderRadius: '10px',
                    marginBottom: '8px',
                    background: '#111622',
                    border: '1px solid #1E2535',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ color: '#6B7A99', fontSize: '11px', fontFamily: 'monospace' }}>
                        {m.id.slice(-6).toUpperCase()}
                      </span>
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        background: `${PRIORITY_COLORS[m.priority] || '#6B7A99'}20`,
                        color: PRIORITY_COLORS[m.priority] || '#6B7A99',
                        border: `1px solid ${PRIORITY_COLORS[m.priority] || '#6B7A99'}40`,
                      }}>
                        {m.priority}
                      </span>
                    </div>
                    <div style={{ color: '#E8ECF5', fontSize: '13px', marginBottom: '4px' }}>{m.address}</div>
                    {m.patient && (
                      <div style={{ color: '#6B7A99', fontSize: '12px' }}>
                        👤 {m.patient.lastName} {m.patient.firstName}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* VEHICLES TAB */}
            {activeTab === 'vehicles' && (
              <div>
                {vehicles.length === 0 ? (
                  <div style={{ color: '#6B7A99', textAlign: 'center', padding: '20px', fontSize: '13px' }}>Aucun véhicule</div>
                ) : vehicles.map(v => (
                  <div key={v.id} style={{
                    padding: '12px',
                    borderRadius: '10px',
                    marginBottom: '8px',
                    background: '#111622',
                    border: '1px solid #1E2535',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: STATUS_COLORS[v.status] || '#6B7A99',
                      flexShrink: 0,
                    }} />
                    <div>
                      <div style={{ color: '#E8ECF5', fontSize: '13px', fontWeight: '500' }}>{v.plate}</div>
                      <div style={{ color: '#6B7A99', fontSize: '11px' }}>{v.type}</div>
                    </div>
                    <div style={{ marginLeft: 'auto', color: STATUS_COLORS[v.status] || '#6B7A99', fontSize: '11px' }}>
                      {v.status}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* AI TAB */}
            {activeTab === 'ai' && (
              <div>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ color: '#6B7A99', fontSize: '11px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Demande en langage naturel
                  </div>
                  <textarea
                    value={aiInput}
                    onChange={e => setAiInput(e.target.value)}
                    placeholder="Ex: Patient Dupont, 78 ans, dialyse CHU Nantes lundi 8h, fauteuil roulant..."
                    style={{
                      width: '100%',
                      height: '100px',
                      background: '#111622',
                      border: '1px solid #2A3348',
                      borderRadius: '8px',
                      color: '#E8ECF5',
                      padding: '10px',
                      fontSize: '13px',
                      resize: 'none',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <button
                    onClick={handleAIDispatch}
                    disabled={aiLoading || !aiInput.trim()}
                    style={{
                      width: '100%',
                      padding: '10px',
                      marginTop: '8px',
                      background: aiLoading ? '#1E2535' : 'linear-gradient(135deg, #14B8A6, #3B82F6)',
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: aiLoading ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {aiLoading ? '🧠 Analyse en cours...' : '🧠 Analyser avec l\'IA'}
                  </button>
                </div>

                {aiResult && (
                  <div style={{
                    background: '#111622',
                    borderRadius: '10px',
                    border: '1px solid #1E2535',
                    padding: '12px',
                  }}>
                    <div style={{ color: '#14B8A6', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>
                      ✅ Résultat IA
                    </div>
                    {aiResult.decision && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {[
                          { label: 'Urgence', value: aiResult.decision.urgencyLevel },
                          { label: 'Transport', value: aiResult.decision.transportType },
                          { label: 'Priorité', value: aiResult.decision.priority },
                          { label: 'Patient', value: aiResult.decision.patientName },
                          { label: 'Confiance', value: `${aiResult.decision.confidence}%` },
                        ].map(item => (
                          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: '#6B7A99', fontSize: '12px' }}>{item.label}</span>
                            <span style={{ color: '#E8ECF5', fontSize: '12px', fontWeight: '500' }}>{item.value}</span>
                          </div>
                        ))}
                        {aiResult.decision.reasoning && (
                          <div style={{
                            marginTop: '8px',
                            padding: '8px',
                            background: '#07090F',
                            borderRadius: '6px',
                            color: '#6B7A99',
                            fontSize: '11px',
                            lineHeight: '1.5',
                          }}>
                            {aiResult.decision.reasoning}
                          </div>
                        )}
                        <div style={{ color: aiResult.decision.autoDispatch ? '#14B8A6' : '#F59E0B', fontSize: '12px', marginTop: '4px' }}>
                          {aiResult.decision.autoDispatch ? '✅ Dispatch automatique' : '⚠️ Validation humaine requise'}
                        </div>
                      </div>
                    )}
                    <div style={{ color: '#6B7A99', fontSize: '11px', marginTop: '8px' }}>{aiResult.message}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* CARTE CENTRALE */}
        <div ref={mapContainer} style={{ flex: 1, position: 'relative' }}>
          {/* Overlay saturation */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: '#0D1017EE',
            borderRadius: '10px',
            border: '1px solid #1E2535',
            padding: '12px 16px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: getSaturationColor(),
              boxShadow: `0 0 8px ${getSaturationColor()}`,
            }} />
            <span style={{ color: '#E8ECF5', fontSize: '13px', fontWeight: '600' }}>
              Saturation flotte
            </span>
            <span style={{ color: getSaturationColor(), fontSize: '13px', fontWeight: '700', fontFamily: 'DM Mono, monospace' }}>
              {stats.total > 0 ? Math.round((stats.onMission / stats.total) * 100) : 0}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

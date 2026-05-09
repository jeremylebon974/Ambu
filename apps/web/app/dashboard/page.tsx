'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/auth';
import { api } from '../../lib/api-client';

const STATUS_LABELS: Record<string, string> = {
  PENDING: 'En attente',
  ASSIGNED: 'Assignée',
  EN_ROUTE_PICKUP: 'En route (prise en charge)',
  AT_PICKUP: 'Sur place (prise en charge)',
  EN_ROUTE_DROPOFF: 'En route (destination)',
  AT_DROPOFF: 'Sur place (destination)',
  COMPLETED: 'Terminée',
  CANCELLED: 'Annulée',
  ANOMALY: 'Anomalie',
};

const STATUS_COLORS: Record<string, string> = {
  PENDING: '#f59e0b',
  ASSIGNED: '#3b82f6',
  EN_ROUTE_PICKUP: '#8b5cf6',
  AT_PICKUP: '#06b6d4',
  EN_ROUTE_DROPOFF: '#8b5cf6',
  AT_DROPOFF: '#06b6d4',
  COMPLETED: '#10b981',
  CANCELLED: '#ef4444',
  ANOMALY: '#f97316',
};

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [missions, setMissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      router.push('/login');
      return;
    }
    void loadMissions();
  }, [router]);

  async function loadMissions() {
    try {
      setLoading(true);
      setUser(auth.getUser());
      const token = auth.getToken()!;
      const data = await api.getMissions(token);
      setMissions(data);
    } catch (e: any) {
      setError(e.message || 'Erreur de chargement');
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    auth.logout();
    router.push('/login');
  }

  const filtered = missions.filter((m) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active') {
      return ['PENDING', 'ASSIGNED', 'EN_ROUTE_PICKUP', 'AT_PICKUP', 'EN_ROUTE_DROPOFF', 'AT_DROPOFF'].includes(m.status);
    }
    if (activeFilter === 'completed') return m.status === 'COMPLETED';
    if (activeFilter === 'cancelled') return m.status === 'CANCELLED';
    return true;
  });

  const stats = {
    total: missions.length,
    active: missions.filter((m) =>
      ['PENDING', 'ASSIGNED', 'EN_ROUTE_PICKUP', 'AT_PICKUP', 'EN_ROUTE_DROPOFF', 'AT_DROPOFF'].includes(m.status)
    ).length,
    completed: missions.filter((m) => m.status === 'COMPLETED').length,
    cancelled: missions.filter((m) => m.status === 'CANCELLED').length,
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090f', color: '#e2e8f0', fontFamily: 'system-ui, sans-serif' }}>
      {/* Topbar */}
      <div style={{
        height: 60,
        backgroundColor: '#0d111b',
        borderBottom: '1px solid #1e2a3a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, backgroundColor: '#3b82f6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
            🚑
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, color: '#f1f5f9' }}>Paille en Queue</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {user && (
            <span style={{ fontSize: 14, color: '#94a3b8' }}>
              {user.firstName} {user.lastName} — <span style={{ color: '#3b82f6' }}>{user.role}</span>
            </span>
          )}
          <button
            onClick={() => router.push('/regulateur')}
            style={{
              backgroundColor: '#14B8A6',
              border: 'none',
              color: '#fff',
              padding: '6px 14px',
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Centre de Régulation
          </button>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #334155',
              color: '#94a3b8',
              padding: '6px 14px',
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: '32px 24px', maxWidth: 1400, margin: '0 auto' }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#f1f5f9', marginBottom: 24 }}>
          Tableau de bord
        </h1>

        {/* Stats cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Total missions', value: stats.total, color: '#3b82f6' },
            { label: 'En cours', value: stats.active, color: '#f59e0b' },
            { label: 'Terminées', value: stats.completed, color: '#10b981' },
            { label: 'Annulées', value: stats.cancelled, color: '#ef4444' },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                backgroundColor: '#0d111b',
                border: '1px solid #1e2a3a',
                borderRadius: 12,
                padding: '20px 24px',
              }}
            >
              <div style={{ fontSize: 13, color: '#64748b', marginBottom: 8 }}>{card.label}</div>
              <div style={{ fontSize: 36, fontWeight: 700, color: card.color }}>{card.value}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {[
            { key: 'all', label: 'Toutes' },
            { key: 'active', label: 'En cours' },
            { key: 'completed', label: 'Terminées' },
            { key: 'cancelled', label: 'Annulées' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                padding: '7px 16px',
                borderRadius: 6,
                border: '1px solid',
                borderColor: activeFilter === f.key ? '#3b82f6' : '#1e2a3a',
                backgroundColor: activeFilter === f.key ? '#1d3461' : 'transparent',
                color: activeFilter === f.key ? '#93c5fd' : '#64748b',
                cursor: 'pointer',
                fontSize: 13,
              }}
            >
              {f.label}
            </button>
          ))}
          <button
            onClick={loadMissions}
            style={{
              marginLeft: 'auto',
              padding: '7px 16px',
              borderRadius: 6,
              border: '1px solid #1e2a3a',
              backgroundColor: '#3b82f6',
              color: '#fff',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            Actualiser
          </button>
        </div>

        {/* Error */}
        {error && (
          <div style={{ backgroundColor: '#450a0a', border: '1px solid #b91c1c', borderRadius: 8, padding: '12px 16px', marginBottom: 20, color: '#fca5a5', fontSize: 14 }}>
            {error}
          </div>
        )}

        {/* Table */}
        <div style={{ backgroundColor: '#0d111b', border: '1px solid #1e2a3a', borderRadius: 12, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#111827', borderBottom: '1px solid #1e2a3a' }}>
                {['Référence', 'Patient', 'Type', 'Priorité', 'Statut', 'Prise en charge', 'Actions'].map((h) => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} style={{ padding: 40, textAlign: 'center', color: '#475569' }}>
                    Chargement...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ padding: 40, textAlign: 'center', color: '#475569' }}>
                    Aucune mission
                  </td>
                </tr>
              ) : (
                filtered.map((mission) => (
                  <tr
                    key={mission.id}
                    style={{ borderBottom: '1px solid #1e2a3a' }}
                  >
                    <td style={{ padding: '14px 16px', fontSize: 13, color: '#94a3b8', fontFamily: 'monospace' }}>
                      {mission.reference || mission.id.slice(0, 8)}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 14, color: '#e2e8f0' }}>
                      {mission.patient ? `${mission.patient.firstName} ${mission.patient.lastName}` : '—'}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: '#94a3b8' }}>
                      {mission.type || '—'}
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{
                        fontSize: 12,
                        padding: '2px 8px',
                        borderRadius: 4,
                        backgroundColor: mission.priority <= 1 ? '#450a0a' : mission.priority === 2 ? '#431407' : '#1c1917',
                        color: mission.priority <= 1 ? '#fca5a5' : mission.priority === 2 ? '#fdba74' : '#a8a29e',
                      }}>
                        P{mission.priority}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{
                        fontSize: 12,
                        padding: '3px 10px',
                        borderRadius: 20,
                        backgroundColor: `${STATUS_COLORS[mission.status] || '#64748b'}22`,
                        color: STATUS_COLORS[mission.status] || '#64748b',
                        border: `1px solid ${STATUS_COLORS[mission.status] || '#64748b'}44`,
                      }}>
                        {STATUS_LABELS[mission.status] || mission.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: '#94a3b8' }}>
                      {mission.scheduledAt ? new Date(mission.scheduledAt).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) : '—'}
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <button
                        onClick={() => router.push(`/missions/${mission.id}`)}
                        style={{
                          fontSize: 12,
                          padding: '5px 12px',
                          borderRadius: 6,
                          border: '1px solid #1e2a3a',
                          backgroundColor: 'transparent',
                          color: '#3b82f6',
                          cursor: 'pointer',
                        }}
                      >
                        Voir
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/auth';
import { DirectionBadge } from '../../components/DirectionBadge';

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

const CODES_COLORS: Record<string, string> = {
  PJ: '#14B8A6',
  PN: '#8B5CF6',
  AC: '#F59E0B',
  RH: '#6B7A99',
  CP: '#22C55E',
  FM: '#3B82F6',
};

const CODES_LABELS: Record<string, string> = {
  PJ: 'Permanence jour (07h-19h)',
  PN: 'Permanence nuit (19h-07h)',
  AC: 'Activité continue (07h-19h)',
  RH: 'Repos hebdo',
  CP: 'Congé payé',
  FM: 'Formation',
};

const JOURS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const MOIS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}

export default function PlanningPage() {
  const router = useRouter();
  const today = new Date();
  const [mois, setMois] = useState(today.getMonth());
  const [annee, setAnnee] = useState(today.getFullYear());
  const [users, setUsers] = useState<User[]>([]);
  const [planningMap, setPlanningMap] = useState<Record<string, Record<string, { id: string; code: string }>>>({});
  const [selectedCell, setSelectedCell] = useState<{ userId: string; date: string } | null>(null);
  const [showCodePicker, setShowCodePicker] = useState(false);
  const [validating, setValidating] = useState(false);
  const [validatedAt, setValidatedAt] = useState<string | null>(null);

  const monthStr = `${annee}-${String(mois + 1).padStart(2, '0')}`;

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login'); return; }
    loadUsers();
  }, [router]);

  useEffect(() => { loadPlanning(); }, [monthStr]);

  const loadUsers = async () => {
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/auth/users`, { headers: { Authorization: `Bearer ${token}` } });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) setUsers(data);
      }
    } catch {}
  };

  const loadPlanning = async () => {
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/planning?month=${monthStr}`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) return;
      const data = await res.json();
      const map: Record<string, Record<string, { id: string; code: string }>> = {};
      let anyValidated: string | null = null;
      (Array.isArray(data) ? data : []).forEach((p: any) => {
        const dateStr = new Date(p.date).toISOString().slice(0, 10);
        if (!map[p.userId]) map[p.userId] = {};
        map[p.userId][dateStr] = { id: p.id, code: p.code };
        if (p.validatedAt && !anyValidated) anyValidated = p.validatedAt;
      });
      setPlanningMap(map);
      setValidatedAt(anyValidated);
    } catch {}
  };

  const getDaysInMonth = () => {
    const days = [];
    const lastDay = new Date(annee, mois + 1, 0);
    for (let d = 1; d <= lastDay.getDate(); d++) {
      const date = new Date(annee, mois, d);
      days.push({
        date: `${annee}-${String(mois + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
        jour: d,
        jourSemaine: date.getDay() === 0 ? 6 : date.getDay() - 1,
        isWeekend: date.getDay() === 0 || date.getDay() === 6,
      });
    }
    return days;
  };
  const days = getDaysInMonth();

  const setCode = async (userId: string, date: string, code: string) => {
    const token = auth.getToken();
    try {
      if (code === '') {
        const existing = planningMap[userId]?.[date];
        if (existing) {
          await fetch(`${API_URL}/planning/${existing.id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
          });
          setPlanningMap(prev => {
            const next = { ...prev };
            if (next[userId]) {
              const copy = { ...next[userId] };
              delete copy[date];
              next[userId] = copy;
            }
            return next;
          });
        }
      } else {
        const res = await fetch(`${API_URL}/planning`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ userId, date, code }),
        });
        if (res.ok) {
          const saved = await res.json();
          setPlanningMap(prev => ({
            ...prev,
            [userId]: { ...(prev[userId] || {}), [date]: { id: saved.id, code: saved.code } },
          }));
        }
      }
    } catch {}
    setShowCodePicker(false);
    setSelectedCell(null);
  };

  const getCode = (userId: string, date: string) => planningMap[userId]?.[date]?.code || '';
  const countCode = (userId: string, code: string) =>
    Object.values(planningMap[userId] || {}).filter(j => j.code === code).length;

  const handleValidate = async () => {
    setValidating(true);
    try {
      const token = auth.getToken();
      await fetch(`${API_URL}/planning/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ month: monthStr }),
      });
      await loadPlanning();
    } catch {}
    setValidating(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#07090F', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5' }}>
      <DirectionBadge />

      {/* HEADER */}
      <div style={{
        height: '56px', background: '#0D1017', borderBottom: '1px solid #1E2535',
        display: 'flex', alignItems: 'center', padding: '0 20px', gap: '12px',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>
        <LogoViesionnaire height={28} onClick={() => router.push('/planning')} />
        <span style={{ color: '#2A3348', fontSize: '14px' }}>|</span>
        <span style={{ color: '#6B7A99', fontSize: '13px' }}>📅 Planning</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '16px' }}>
          <button onClick={() => { if (mois === 0) { setMois(11); setAnnee(a => a - 1); } else setMois(m => m - 1); }}
            style={{ background: '#111622', border: '1px solid #1E2535', borderRadius: '6px', color: '#E8ECF5', padding: '4px 10px', cursor: 'pointer' }}>‹</button>
          <span style={{ fontWeight: '700', fontSize: '14px', minWidth: '140px', textAlign: 'center' }}>
            {MOIS[mois]} {annee}
          </span>
          <button onClick={() => { if (mois === 11) { setMois(0); setAnnee(a => a + 1); } else setMois(m => m + 1); }}
            style={{ background: '#111622', border: '1px solid #1E2535', borderRadius: '6px', color: '#E8ECF5', padding: '4px 10px', cursor: 'pointer' }}>›</button>
        </div>

        {validatedAt && (
          <span style={{ marginLeft: '12px', fontSize: '11px', color: '#22C55E', background: '#22C55E15', border: '1px solid #22C55E40', padding: '3px 10px', borderRadius: '6px', fontWeight: '700' }}>
            ✓ Validé
          </span>
        )}

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', gap: '6px' }}>
          {Object.entries(CODES_COLORS).map(([code, color]) => (
            <span key={code} title={CODES_LABELS[code]} style={{
              background: color + '20', color, border: `1px solid ${color}40`,
              padding: '2px 8px', borderRadius: '4px', fontSize: '11px',
              fontFamily: 'monospace', fontWeight: '700',
            }}>{code}</span>
          ))}
        </div>

        <button
          onClick={handleValidate}
          disabled={validating}
          style={{
            background: validating ? '#1E2535' : 'linear-gradient(135deg, #22C55E, #14B8A6)',
            border: 'none', borderRadius: '8px', color: 'white',
            padding: '8px 16px', cursor: validating ? 'not-allowed' : 'pointer',
            fontWeight: '600', fontSize: '13px',
          }}
        >
          {validating ? '⏳ Validation...' : '✓ Valider le planning'}
        </button>

        <button onClick={() => router.push('/configuration')} style={{ background: '#111622', border: '1px solid #1E2535', borderRadius: '8px', color: '#6B7A99', padding: '8px 12px', cursor: 'pointer', fontSize: '12px' }}>
          ⚙️ Config
        </button>
      </div>

      {/* TABLEAU */}
      <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: 'calc(100vh - 56px)' }}>
        <table style={{ borderCollapse: 'collapse', minWidth: '100%' }}>
          <thead style={{ position: 'sticky', top: 0, zIndex: 50, background: '#0D1017' }}>
            <tr>
              <th style={{ position: 'sticky', left: 0, background: '#0D1017', zIndex: 60, padding: '8px 16px', textAlign: 'left', borderBottom: '1px solid #1E2535', borderRight: '1px solid #1E2535', fontSize: '11px', color: '#6B7A99', minWidth: '200px', textTransform: 'uppercase' }}>Salarié</th>
              <th style={{ position: 'sticky', left: '200px', background: '#0D1017', zIndex: 60, padding: '8px 8px', borderBottom: '1px solid #1E2535', borderRight: '2px solid #2A3348', fontSize: '11px', color: '#6B7A99', minWidth: '70px', textTransform: 'uppercase' }}>Rôle</th>

              {days.map(day => (
                <th key={day.date} style={{
                  padding: '4px 2px', textAlign: 'center',
                  borderBottom: '1px solid #1E2535', borderRight: '1px solid #1E2535',
                  fontSize: '10px', color: day.isWeekend ? '#F59E0B' : '#6B7A99',
                  minWidth: '36px', background: day.isWeekend ? '#111622' : '#0D1017',
                }}>
                  <div style={{ fontWeight: '600' }}>{JOURS[day.jourSemaine]}</div>
                  <div style={{ fontSize: '12px', color: '#E8ECF5', fontWeight: '700' }}>{day.jour}</div>
                </th>
              ))}

              {['PJ', 'PN', 'RH', 'CP'].map(c => (
                <th key={c} style={{
                  padding: '4px 6px', textAlign: 'center',
                  borderBottom: '1px solid #1E2535', borderLeft: c === 'PJ' ? '2px solid #2A3348' : '1px solid #1E2535',
                  fontSize: '10px', color: CODES_COLORS[c], minWidth: '36px', background: '#0D1017',
                }}>{c}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={u.id} style={{ background: i % 2 === 0 ? '#07090F' : '#0A0C12' }}>
                <td style={{ position: 'sticky', left: 0, background: i % 2 === 0 ? '#07090F' : '#0A0C12', zIndex: 10, padding: '6px 16px', borderBottom: '1px solid #1E2535', borderRight: '1px solid #1E2535', whiteSpace: 'nowrap', fontSize: '13px', fontWeight: '500' }}>
                  {u.lastName} <span style={{ color: '#6B7A99', fontSize: '12px' }}>{u.firstName}</span>
                </td>
                <td style={{ position: 'sticky', left: '200px', background: i % 2 === 0 ? '#07090F' : '#0A0C12', zIndex: 10, padding: '6px 8px', borderBottom: '1px solid #1E2535', borderRight: '2px solid #2A3348', textAlign: 'center', fontSize: '10px', color: '#14B8A6', fontWeight: '700', fontFamily: 'monospace' }}>
                  {u.role}
                </td>

                {days.map(day => {
                  const code = getCode(u.id, day.date);
                  const color = CODES_COLORS[code] || '';
                  const isSelected = selectedCell?.userId === u.id && selectedCell?.date === day.date;
                  return (
                    <td
                      key={day.date}
                      onClick={() => { setSelectedCell({ userId: u.id, date: day.date }); setShowCodePicker(true); }}
                      style={{
                        padding: '0', borderBottom: '1px solid #1E2535', borderRight: '1px solid #1E2535',
                        textAlign: 'center', cursor: 'pointer',
                        background: isSelected ? '#2A3348' : day.isWeekend ? '#0D0F18' : 'transparent',
                        transition: 'background 0.1s',
                      }}
                    >
                      {code && (
                        <div style={{
                          margin: '2px', background: color + '25', color,
                          border: `1px solid ${color}50`, borderRadius: '4px',
                          padding: '2px 0', fontSize: '11px', fontWeight: '700', fontFamily: 'monospace',
                        }}>{code}</div>
                      )}
                    </td>
                  );
                })}

                {['PJ', 'PN', 'RH', 'CP'].map(c => (
                  <td key={c} style={{
                    padding: '6px', borderBottom: '1px solid #1E2535',
                    borderLeft: c === 'PJ' ? '2px solid #2A3348' : '1px solid #1E2535',
                    textAlign: 'center', fontSize: '12px',
                    color: countCode(u.id, c) > 0 ? CODES_COLORS[c] : '#2A3348',
                    fontFamily: 'monospace', fontWeight: '700',
                  }}>{countCode(u.id, c) || '-'}</td>
                ))}
              </tr>
            ))}
            {users.length === 0 && (
              <tr><td colSpan={days.length + 6} style={{ padding: '40px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>
                Aucun utilisateur trouvé. Vérifie que GET /auth/users répond correctement.
              </td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* POPUP */}
      {showCodePicker && selectedCell && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => { setShowCodePicker(false); setSelectedCell(null); }}
        >
          <div onClick={e => e.stopPropagation()} style={{ background: '#0D1017', border: '1px solid #2A3348', borderRadius: '14px', padding: '20px', minWidth: '320px' }}>
            <div style={{ fontWeight: '700', marginBottom: '16px', fontSize: '14px' }}>Choisir un code</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {Object.entries(CODES_COLORS).map(([code, color]) => (
                <button
                  key={code}
                  onClick={() => setCode(selectedCell.userId, selectedCell.date, code)}
                  title={CODES_LABELS[code]}
                  style={{
                    background: color + '20', color, border: `1px solid ${color}50`,
                    borderRadius: '8px', padding: '10px', cursor: 'pointer',
                    fontWeight: '700', fontSize: '13px', fontFamily: 'monospace', textAlign: 'left',
                  }}
                >
                  <div>{code}</div>
                  <div style={{ fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: '500', opacity: 0.85, marginTop: '2px' }}>{CODES_LABELS[code]}</div>
                </button>
              ))}
              <button
                onClick={() => setCode(selectedCell.userId, selectedCell.date, '')}
                style={{ background: '#1E2535', color: '#6B7A99', border: '1px solid #2A3348', borderRadius: '8px', padding: '10px', cursor: 'pointer', fontSize: '13px', gridColumn: '1 / -1' }}
              >✕ Effacer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

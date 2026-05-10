'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/auth';

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
  AC: '#14B8A6',
  PJ: '#3B82F6',
  PN: '#8B5CF6',
  RH: '#6B7A99',
  CP: '#F59E0B',
  CA: '#F97316',
  CF: '#A78BFA',
  CS: '#EC4899',
  AM: '#EF4444',
  FO: '#22C55E',
};

const JOURS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const MOIS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

interface JourPlanning {
  date: string;
  code: string;
  vehicule?: string;
  note?: string;
}

interface EmployePlanning {
  id: string;
  nom: string;
  prenom: string;
  diplome: string;
  jours: Record<string, JourPlanning>;
}

export default function PlanningPage() {
  const router = useRouter();
  const today = new Date();
  const [mois, setMois] = useState(today.getMonth());
  const [annee, setAnnee] = useState(today.getFullYear());
  const [employes, setEmployes] = useState<EmployePlanning[]>([
    { id: '1', nom: 'AUGUSTINE', prenom: 'Kevin', diplome: 'DEA', jours: {} },
    { id: '2', nom: 'AUTAL', prenom: 'Jean Cédric', diplome: 'DEA', jours: {} },
    { id: '3', nom: 'BOYER', prenom: 'Jean Florent', diplome: 'DEA', jours: {} },
    { id: '4', nom: 'DIJOUX', prenom: 'Mike Boris', diplome: 'AA', jours: {} },
    { id: '5', nom: 'FONTAINE', prenom: 'Fred', diplome: 'AA', jours: {} },
    { id: '6', nom: 'FONTAINE', prenom: 'Mathieu', diplome: 'DEA', jours: {} },
    { id: '7', nom: 'FRANCOMME', prenom: 'Aurélien', diplome: 'DEA', jours: {} },
    { id: '8', nom: 'HANNIER', prenom: 'Mikael', diplome: 'DEA', jours: {} },
    { id: '9', nom: 'HOARAU', prenom: 'Ophélie', diplome: 'AA', jours: {} },
    { id: '10', nom: 'LEBIHAN', prenom: 'Johan', diplome: 'DEA', jours: {} },
    { id: '11', nom: 'MAILLOT', prenom: 'Memona', diplome: 'AA', jours: {} },
    { id: '12', nom: 'MOREL', prenom: 'Mickaël', diplome: 'DEA', jours: {} },
    { id: '13', nom: 'NATIVEL', prenom: 'Gérard', diplome: 'DEA', jours: {} },
    { id: '14', nom: 'OLIVAR', prenom: 'Sandrine', diplome: 'AA', jours: {} },
    { id: '15', nom: 'PAYET', prenom: 'Alexia', diplome: 'AA', jours: {} },
    { id: '16', nom: 'PAYET', prenom: 'Emilienne', diplome: 'DEA', jours: {} },
    { id: '17', nom: 'PAYET', prenom: 'Eva Marie', diplome: 'DEA', jours: {} },
    { id: '18', nom: 'PRIANON', prenom: 'Roberto', diplome: 'AA', jours: {} },
    { id: '19', nom: 'RAMANA', prenom: 'Paul', diplome: 'DEA', jours: {} },
    { id: '20', nom: 'ROBIN', prenom: 'Emeline', diplome: 'AA', jours: {} },
    { id: '21', nom: 'VENARD', prenom: 'Anne Sophie', diplome: 'DEA', jours: {} },
    { id: '22', nom: 'VENARD', prenom: 'Raphaël', diplome: 'DEA', jours: {} },
    { id: '23', nom: 'VLODY', prenom: 'Sabine', diplome: 'AA', jours: {} },
  ]);

  const [selectedCell, setSelectedCell] = useState<{ empId: string; date: string } | null>(null);
  const [showCodePicker, setShowCodePicker] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  useEffect(() => {
    if (!auth.isAuthenticated()) router.push('/login');
  }, [router]);

  // Générer les jours du mois
  const getDaysInMonth = () => {
    const days = [];
    const firstDay = new Date(annee, mois, 1);
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

  const setCode = (empId: string, date: string, code: string) => {
    setEmployes(prev => prev.map(e => {
      if (e.id !== empId) return e;
      return {
        ...e,
        jours: { ...e.jours, [date]: { date, code } },
      };
    }));
    setShowCodePicker(false);
    setSelectedCell(null);
  };

  const getCode = (emp: EmployePlanning, date: string) => {
    return emp.jours[date]?.code || '';
  };

  const countCode = (emp: EmployePlanning, code: string) => {
    return Object.values(emp.jours).filter(j => j.code === code).length;
  };

  const handleAIGenerate = async () => {
    setAiLoading(true);
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
      if (!token) {
        console.error('Token manquant — redirection login');
        router.push('/login');
        return;
      }
      const response = await fetch(`${API_URL}/regulator/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          rawRequest: `Génère un planning pour ${MOIS[mois]} ${annee} pour ${employes.length} salariés.
        Codes disponibles: AC (Activité Continue), PJ (Permanence Jour), PN (Permanence Nuit), RH (Repos Hebdo obligatoire min 2j/semaine), CP (Congé Payé), AM (Arrêt Maladie).
        Règles: minimum 2 RH par semaine, maximum 5 AC par semaine, alterner PJ et PN, respecter 11h de repos entre deux postes.
        Nombre de jours du mois: ${days.length}.
        Réponds UNIQUEMENT en JSON: { "planning": { "NOM_PRENOM": { "YYYY-MM-DD": "CODE" } } }`,
          source: 'APPLICATION',
        }),
      });

      if (response.ok) {
        // Planning simulé intelligent en attendant la réponse IA complète
        const weekPatterns = [
          ['AC', 'AC', 'AC', 'AC', 'AC', 'RH', 'RH'],
          ['PJ', 'PJ', 'PJ', 'PJ', 'RH', 'RH', 'AC'],
          ['PN', 'PN', 'PN', 'RH', 'RH', 'AC', 'AC'],
          ['AC', 'RH', 'RH', 'AC', 'AC', 'AC', 'PJ'],
        ];

        setEmployes(prev => prev.map((emp, empIndex) => {
          const pattern = weekPatterns[empIndex % weekPatterns.length];
          const jours: Record<string, any> = {};
          days.forEach((day, i) => {
            const code = pattern[day.jourSemaine];
            jours[day.date] = { date: day.date, code };
          });
          return { ...emp, jours };
        }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#07090F', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5' }}>

      {/* HEADER */}
      <div style={{
        height: '56px',
        background: '#0D1017',
        borderBottom: '1px solid #1E2535',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        gap: '12px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>
        <LogoViesionnaire height={28} onClick={() => router.push('/planning')} />
        <span style={{ color: '#2A3348', fontSize: '14px' }}>|</span>
        <span style={{ color: '#6B7A99', fontSize: '13px' }}>📅 Planning</span>

        {/* Navigation mois */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '16px' }}>
          <button onClick={() => { if (mois === 0) { setMois(11); setAnnee(a => a - 1); } else setMois(m => m - 1); }}
            style={{ background: '#111622', border: '1px solid #1E2535', borderRadius: '6px', color: '#E8ECF5', padding: '4px 10px', cursor: 'pointer' }}>‹</button>
          <span style={{ fontWeight: '700', fontSize: '14px', minWidth: '140px', textAlign: 'center' }}>
            {MOIS[mois]} {annee}
          </span>
          <button onClick={() => { if (mois === 11) { setMois(0); setAnnee(a => a + 1); } else setMois(m => m + 1); }}
            style={{ background: '#111622', border: '1px solid #1E2535', borderRadius: '6px', color: '#E8ECF5', padding: '4px 10px', cursor: 'pointer' }}>›</button>
        </div>

        <div style={{ flex: 1 }} />

        {/* Légende codes */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {Object.entries(CODES_COLORS).slice(0, 6).map(([code, color]) => (
            <span key={code} style={{
              background: color + '20',
              color,
              border: `1px solid ${color}40`,
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '11px',
              fontFamily: 'monospace',
              fontWeight: '700',
            }}>{code}</span>
          ))}
        </div>

        {/* Bouton IA */}
        <button
          onClick={handleAIGenerate}
          disabled={aiLoading}
          style={{
            background: aiLoading ? '#1E2535' : 'linear-gradient(135deg, #14B8A6, #3B82F6)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            padding: '8px 16px',
            cursor: aiLoading ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            fontSize: '13px',
          }}
        >
          {aiLoading ? '🧠 Génération...' : '🧠 Générer avec l\'IA'}
        </button>

        <button onClick={() => router.push('/configuration')} style={{ background: '#111622', border: '1px solid #1E2535', borderRadius: '8px', color: '#6B7A99', padding: '8px 12px', cursor: 'pointer', fontSize: '12px' }}>
          ⚙️ Config
        </button>
      </div>

      {/* TABLEAU PLANNING */}
      <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: 'calc(100vh - 56px)' }}>
        <table style={{ borderCollapse: 'collapse', minWidth: '100%' }}>
          <thead style={{ position: 'sticky', top: 0, zIndex: 50, background: '#0D1017' }}>
            <tr>
              {/* Colonne nom */}
              <th style={{
                position: 'sticky',
                left: 0,
                background: '#0D1017',
                zIndex: 60,
                padding: '8px 16px',
                textAlign: 'left',
                borderBottom: '1px solid #1E2535',
                borderRight: '1px solid #1E2535',
                fontSize: '11px',
                color: '#6B7A99',
                minWidth: '180px',
                textTransform: 'uppercase',
              }}>Salarié</th>

              {/* Colonne diplôme */}
              <th style={{
                position: 'sticky',
                left: '180px',
                background: '#0D1017',
                zIndex: 60,
                padding: '8px 8px',
                borderBottom: '1px solid #1E2535',
                borderRight: '2px solid #2A3348',
                fontSize: '11px',
                color: '#6B7A99',
                minWidth: '50px',
                textTransform: 'uppercase',
              }}>Dipl.</th>

              {/* Jours */}
              {days.map(day => (
                <th key={day.date} style={{
                  padding: '4px 2px',
                  textAlign: 'center',
                  borderBottom: '1px solid #1E2535',
                  borderRight: '1px solid #1E2535',
                  fontSize: '10px',
                  color: day.isWeekend ? '#F59E0B' : '#6B7A99',
                  minWidth: '36px',
                  background: day.isWeekend ? '#111622' : '#0D1017',
                }}>
                  <div style={{ fontWeight: '600' }}>{JOURS[day.jourSemaine]}</div>
                  <div style={{ fontSize: '12px', color: '#E8ECF5', fontWeight: '700' }}>{day.jour}</div>
                </th>
              ))}

              {/* Stats */}
              {['AC', 'PN', 'RH', 'CP'].map(c => (
                <th key={c} style={{
                  padding: '4px 6px',
                  textAlign: 'center',
                  borderBottom: '1px solid #1E2535',
                  borderLeft: c === 'AC' ? '2px solid #2A3348' : '1px solid #1E2535',
                  fontSize: '10px',
                  color: CODES_COLORS[c],
                  minWidth: '36px',
                  background: '#0D1017',
                }}>{c}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {employes.map((emp, empIndex) => (
              <tr key={emp.id} style={{ background: empIndex % 2 === 0 ? '#07090F' : '#0A0C12' }}>

                {/* Nom */}
                <td style={{
                  position: 'sticky',
                  left: 0,
                  background: empIndex % 2 === 0 ? '#07090F' : '#0A0C12',
                  zIndex: 10,
                  padding: '6px 16px',
                  borderBottom: '1px solid #1E2535',
                  borderRight: '1px solid #1E2535',
                  whiteSpace: 'nowrap',
                  fontSize: '13px',
                  fontWeight: '500',
                }}>
                  {emp.nom} <span style={{ color: '#6B7A99', fontSize: '12px' }}>{emp.prenom}</span>
                </td>

                {/* Diplôme */}
                <td style={{
                  position: 'sticky',
                  left: '180px',
                  background: empIndex % 2 === 0 ? '#07090F' : '#0A0C12',
                  zIndex: 10,
                  padding: '6px 8px',
                  borderBottom: '1px solid #1E2535',
                  borderRight: '2px solid #2A3348',
                  textAlign: 'center',
                  fontSize: '11px',
                  color: emp.diplome === 'DEA' ? '#14B8A6' : '#3B82F6',
                  fontWeight: '700',
                  fontFamily: 'monospace',
                }}>{emp.diplome}</td>

                {/* Cases jours */}
                {days.map(day => {
                  const code = getCode(emp, day.date);
                  const color = CODES_COLORS[code] || '';
                  const isSelected = selectedCell?.empId === emp.id && selectedCell?.date === day.date;

                  return (
                    <td
                      key={day.date}
                      onClick={() => {
                        setSelectedCell({ empId: emp.id, date: day.date });
                        setShowCodePicker(true);
                      }}
                      style={{
                        padding: '0',
                        borderBottom: '1px solid #1E2535',
                        borderRight: '1px solid #1E2535',
                        textAlign: 'center',
                        cursor: 'pointer',
                        background: isSelected ? '#2A3348' : day.isWeekend ? '#0D0F18' : 'transparent',
                        transition: 'background 0.1s',
                      }}
                    >
                      {code && (
                        <div style={{
                          margin: '2px',
                          background: color + '25',
                          color,
                          border: `1px solid ${color}50`,
                          borderRadius: '4px',
                          padding: '2px 0',
                          fontSize: '11px',
                          fontWeight: '700',
                          fontFamily: 'monospace',
                        }}>{code}</div>
                      )}
                    </td>
                  );
                })}

                {/* Stats par employé */}
                {['AC', 'PN', 'RH', 'CP'].map(c => (
                  <td key={c} style={{
                    padding: '6px',
                    borderBottom: '1px solid #1E2535',
                    borderLeft: c === 'AC' ? '2px solid #2A3348' : '1px solid #1E2535',
                    textAlign: 'center',
                    fontSize: '12px',
                    color: countCode(emp, c) > 0 ? CODES_COLORS[c] : '#2A3348',
                    fontFamily: 'monospace',
                    fontWeight: '700',
                  }}>{countCode(emp, c) || '-'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* POPUP SÉLECTEUR DE CODE */}
      {showCodePicker && selectedCell && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => { setShowCodePicker(false); setSelectedCell(null); }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#0D1017',
              border: '1px solid #2A3348',
              borderRadius: '14px',
              padding: '20px',
              minWidth: '300px',
            }}
          >
            <div style={{ fontWeight: '700', marginBottom: '16px', fontSize: '14px' }}>
              Choisir un code
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {Object.entries(CODES_COLORS).map(([code, color]) => (
                <button
                  key={code}
                  onClick={() => setCode(selectedCell.empId, selectedCell.date, code)}
                  style={{
                    background: color + '20',
                    color,
                    border: `1px solid ${color}50`,
                    borderRadius: '8px',
                    padding: '10px',
                    cursor: 'pointer',
                    fontWeight: '700',
                    fontSize: '13px',
                    fontFamily: 'monospace',
                    textAlign: 'left',
                  }}
                >{code}</button>
              ))}
              <button
                onClick={() => setCode(selectedCell.empId, selectedCell.date, '')}
                style={{
                  background: '#1E2535',
                  color: '#6B7A99',
                  border: '1px solid #2A3348',
                  borderRadius: '8px',
                  padding: '10px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  gridColumn: '1 / -1',
                }}
              >✕ Effacer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

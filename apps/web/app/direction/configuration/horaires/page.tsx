'use client';

import { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function saveConfig(section: string, data: any) {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  await fetch(`${API_URL}/configuration`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ [section]: data }),
  });
}

export default function HorairesPage() {
  const [saved, setSaved] = useState(false);
  const [horaires, setHoraires] = useState([
    { nom: 'Matin', debut: '07:00', fin: '19:00', duree: '12h', nuit: false, description: '' },
    { nom: 'Soir',  debut: '12:00', fin: '24:00', duree: '12h', nuit: true,  description: '' },
    { nom: 'Nuit',  debut: '19:00', fin: '07:00', duree: '12h', nuit: true,  description: '' },
  ]);

  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>⏰ Horaires de travail</h2>
      <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
        Définissez vos postes habituels. L'IA respectera ces horaires pour le calcul des repos et amplitudes.
      </p>

      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', overflow: 'hidden', marginBottom: '16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1E2535' }}>
              {['Nom du poste', 'Début', 'Fin', 'Durée', 'Poste de nuit', 'Description'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#6B7A99', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horaires.map((h, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1E2535' }}>
                <td style={{ padding: '12px 16px' }}>
                  <input value={h.nom} onChange={e => { const u=[...horaires]; u[i].nom=e.target.value; setHoraires(u); }} style={inputStyle} />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input type="time" value={h.debut} onChange={e => { const u=[...horaires]; u[i].debut=e.target.value; setHoraires(u); }} style={inputStyle} />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input type="time" value={h.fin} onChange={e => { const u=[...horaires]; u[i].fin=e.target.value; setHoraires(u); }} style={inputStyle} />
                </td>
                <td style={{ padding: '12px 16px', color: '#14B8A6', fontFamily: 'monospace' }}>{h.duree}</td>
                <td style={{ padding: '12px 16px' }}>
                  <input type="checkbox" checked={h.nuit} onChange={e => { const u=[...horaires]; u[i].nuit=e.target.checked; setHoraires(u); }} />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input value={h.description} onChange={e => { const u=[...horaires]; u[i].description=e.target.value; setHoraires(u); }} placeholder="Notes..." style={inputStyle} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={async () => { await saveConfig('horaires', horaires); setSaved(true); setTimeout(() => setSaved(false), 3000); }}
        style={saveButtonStyle}
      >{saved ? '✅ Sauvegardé !' : '💾 Sauvegarder les horaires'}</button>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: '#111622', border: '1px solid #2A3348', borderRadius: '6px',
  color: '#E8ECF5', padding: '6px 10px', fontSize: '13px', outline: 'none',
  width: '100%', boxSizing: 'border-box',
};

const saveButtonStyle: React.CSSProperties = {
  marginTop: '16px', background: 'linear-gradient(135deg, #14B8A6, #3B82F6)',
  color: 'white', border: 'none', borderRadius: '10px', padding: '12px 24px',
  cursor: 'pointer', fontWeight: '700', fontSize: '14px', width: '100%',
};

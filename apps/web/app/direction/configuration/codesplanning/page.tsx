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

export default function CodesplanningPage() {
  const [saved, setSaved] = useState(false);
  const [codes, setCodes] = useState([
    { code: 'AC', label: 'Activité Continue',  couleur: '#14B8A6', description: 'Journée normale de travail — ambulance ou VSL' },
    { code: 'PJ', label: 'Permanence Jour',    couleur: '#3B82F6', description: 'Poste de jour — disponible en journée' },
    { code: 'PN', label: 'Permanence Nuit',    couleur: '#8B5CF6', description: 'Poste de nuit — majoration nuit applicable' },
    { code: 'RH', label: 'Repos Hebdomadaire', couleur: '#6B7A99', description: 'Repos légal obligatoire minimum 35h' },
    { code: 'CP', label: 'Congé Payé',         couleur: '#F59E0B', description: 'Congé payé annuel' },
    { code: 'CA', label: 'Congé Annuel',       couleur: '#F97316', description: 'Congé annuel planifié' },
    { code: 'CF', label: 'Congé Formation',    couleur: '#A78BFA', description: 'Formation professionnelle rémunérée' },
    { code: 'CS', label: 'Congé Sans Solde',   couleur: '#EC4899', description: 'Congé non rémunéré' },
    { code: 'AM', label: 'Arrêt Maladie',      couleur: '#EF4444', description: 'Arrêt de travail médical — remplacement requis' },
    { code: 'FO', label: 'Formation',          couleur: '#22C55E', description: 'Formation interne ou externe' },
  ]);
  const [newCode, setNewCode] = useState({ code: '', label: '', couleur: '#14B8A6', description: '' });

  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>📋 Codes planning</h2>
      <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
        Définissez vos codes planning et leur signification. L'IA utilisera ces codes pour générer et lire votre planning.
      </p>

      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', overflow: 'hidden', marginBottom: '16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1E2535' }}>
              {['Code', 'Libellé complet', 'Couleur', 'Description / Notes', 'Action'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#6B7A99', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {codes.map((c, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1E2535' }}>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ background: c.couleur + '20', color: c.couleur, border: `1px solid ${c.couleur}40`, padding: '4px 10px', borderRadius: '6px', fontSize: '13px', fontWeight: '700', fontFamily: 'monospace' }}>{c.code}</span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input value={c.label} onChange={e => { const u=[...codes]; u[i].label=e.target.value; setCodes(u); }} placeholder="Ex: Ambulance Couché" style={inputStyle} />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input type="color" value={c.couleur} onChange={e => { const u=[...codes]; u[i].couleur=e.target.value; setCodes(u); }} style={{ width: '40px', height: '32px', borderRadius: '6px', border: 'none', cursor: 'pointer' }} />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input value={c.description} onChange={e => { const u=[...codes]; u[i].description=e.target.value; setCodes(u); }} placeholder="Notes optionnelles..." style={inputStyle} />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <button onClick={() => setCodes(codes.filter((_, j) => j !== i))} style={{ background: '#EF444420', color: '#EF4444', border: '1px solid #EF444440', borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', fontSize: '12px' }}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #2A3348', padding: '16px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input value={newCode.code} onChange={e => setNewCode({...newCode, code: e.target.value.toUpperCase()})} placeholder="Code (ex: NJ)" style={{...inputStyle, width: '80px'}} maxLength={4} />
        <input value={newCode.label} onChange={e => setNewCode({...newCode, label: e.target.value})} placeholder="Libellé complet" style={{...inputStyle, flex: 1}} />
        <input value={newCode.description} onChange={e => setNewCode({...newCode, description: e.target.value})} placeholder="Description..." style={{...inputStyle, flex: 2}} />
        <input type="color" value={newCode.couleur} onChange={e => setNewCode({...newCode, couleur: e.target.value})} style={{ width: '40px', height: '36px', borderRadius: '6px', border: 'none', cursor: 'pointer' }} />
        <button
          onClick={() => { if (newCode.code && newCode.label) { setCodes([...codes, newCode]); setNewCode({ code: '', label: '', couleur: '#14B8A6', description: '' }); } }}
          style={{ background: '#14B8A6', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
        >+ Ajouter</button>
      </div>

      <button
        onClick={async () => { await saveConfig('codes', codes); setSaved(true); setTimeout(() => setSaved(false), 3000); }}
        style={saveButtonStyle}
      >{saved ? '✅ Sauvegardé !' : '💾 Sauvegarder les codes'}</button>
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

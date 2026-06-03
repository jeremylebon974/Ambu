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

export default function VehiculesPage() {
  const [saved, setSaved] = useState(false);
  const [vehicules, setVehicules] = useState([
    { numero: '798', type: 'AMB', diplomeRequis: 'DEA', equipements: 'O2, Brancard', actif: true },
    { numero: '817', type: 'AMB', diplomeRequis: 'DEA', equipements: 'O2, Brancard', actif: true },
    { numero: '275', type: 'AMB', diplomeRequis: 'DEA', equipements: 'O2',           actif: true },
    { numero: '694', type: 'AMB', diplomeRequis: 'DEA', equipements: 'O2, Brancard', actif: true },
    { numero: '652', type: 'VSL', diplomeRequis: 'AA',  equipements: '',             actif: true },
    { numero: 'DY',  type: 'VSL', diplomeRequis: 'AA',  equipements: '',             actif: true },
    { numero: '539', type: 'AMB', diplomeRequis: 'DEA', equipements: 'O2',           actif: true },
  ]);
  const [newV, setNewV] = useState({ numero: '', type: 'AMB', diplomeRequis: 'DEA', equipements: '', actif: true });

  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>🚑 Flotte de véhicules</h2>
      <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
        Enregistrez vos véhicules avec leurs numéros, types et équipements.
      </p>

      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', overflow: 'hidden', marginBottom: '16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1E2535' }}>
              {['N° Véhicule', 'Type', 'Diplôme requis', 'Équipements', 'Actif', 'Action'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#6B7A99', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vehicules.map((v, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1E2535' }}>
                <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: '#14B8A6', fontWeight: '700' }}>{v.numero}</td>
                <td style={{ padding: '12px 16px' }}>
                  <select value={v.type} onChange={e => { const u=[...vehicules]; u[i].type=e.target.value; setVehicules(u); }} style={selectStyle}>
                    <option value="AMB">Ambulance</option>
                    <option value="VSL">VSL</option>
                    <option value="TAXI">Taxi conventionné</option>
                  </select>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <select value={v.diplomeRequis} onChange={e => { const u=[...vehicules]; u[i].diplomeRequis=e.target.value; setVehicules(u); }} style={selectStyle}>
                    <option value="DEA">DEA obligatoire</option>
                    <option value="AA">Auxiliaire minimum</option>
                    <option value="TAXI">Taxi conventionné</option>
                  </select>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input value={v.equipements} onChange={e => { const u=[...vehicules]; u[i].equipements=e.target.value; setVehicules(u); }} placeholder="O2, Brancard, DAE..." style={inputStyle} />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input type="checkbox" checked={v.actif} onChange={e => { const u=[...vehicules]; u[i].actif=e.target.checked; setVehicules(u); }} />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <button onClick={() => setVehicules(vehicules.filter((_, j) => j !== i))} style={{ background: '#EF444420', color: '#EF4444', border: '1px solid #EF444440', borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', fontSize: '12px' }}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #2A3348', padding: '16px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input value={newV.numero} onChange={e => setNewV({...newV, numero: e.target.value})} placeholder="N° véhicule" style={{...inputStyle, width: '120px'}} />
        <select value={newV.type} onChange={e => setNewV({...newV, type: e.target.value})} style={selectStyle}>
          <option value="AMB">Ambulance</option>
          <option value="VSL">VSL</option>
          <option value="TAXI">Taxi</option>
        </select>
        <select value={newV.diplomeRequis} onChange={e => setNewV({...newV, diplomeRequis: e.target.value})} style={selectStyle}>
          <option value="DEA">DEA obligatoire</option>
          <option value="AA">Auxiliaire minimum</option>
        </select>
        <input value={newV.equipements} onChange={e => setNewV({...newV, equipements: e.target.value})} placeholder="Équipements..." style={{...inputStyle, flex: 1}} />
        <button
          onClick={() => { if (newV.numero) { setVehicules([...vehicules, newV]); setNewV({ numero: '', type: 'AMB', diplomeRequis: 'DEA', equipements: '', actif: true }); } }}
          style={{ background: '#14B8A6', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
        >+ Ajouter</button>
      </div>

      <button
        onClick={async () => { await saveConfig('vehicules', vehicules); setSaved(true); setTimeout(() => setSaved(false), 3000); }}
        style={saveButtonStyle}
      >{saved ? '✅ Sauvegardé !' : '💾 Sauvegarder les véhicules'}</button>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: '#111622', border: '1px solid #2A3348', borderRadius: '6px',
  color: '#E8ECF5', padding: '6px 10px', fontSize: '13px', outline: 'none',
  width: '100%', boxSizing: 'border-box',
};

const selectStyle: React.CSSProperties = {
  background: '#111622', border: '1px solid #2A3348', borderRadius: '6px',
  color: '#E8ECF5', padding: '6px 10px', fontSize: '13px', outline: 'none',
  cursor: 'pointer', width: '100%',
};

const saveButtonStyle: React.CSSProperties = {
  marginTop: '16px', background: 'linear-gradient(135deg, #14B8A6, #3B82F6)',
  color: 'white', border: 'none', borderRadius: '10px', padding: '12px 24px',
  cursor: 'pointer', fontWeight: '700', fontSize: '14px', width: '100%',
};

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

export default function LegalPage() {
  const [saved, setSaved] = useState(false);
  const [config, setConfig] = useState({
    reposQuotidienMin: 11,
    reposHebdoMin: 35,
    amplitudeMax: 12,
    heuresMaxSemaine: 48,
    heuresMinSemaine: 35,
    pauseMinimale: 30,
    convention: 'transport_sanitaire',
    majorationNuit: 25,
    majorationDimanche: 25,
    majorationFerie: 100,
  });

  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>⚖️ Contraintes légales</h2>
      <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
        Paramétrez les règles légales applicables à votre société. L'IA les respectera automatiquement.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '20px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#14B8A6' }}>⏱️ Temps de repos obligatoires</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            {[
              { label: 'Repos quotidien minimum (heures)', key: 'reposQuotidienMin' },
              { label: 'Repos hebdomadaire minimum (heures)', key: 'reposHebdoMin' },
              { label: 'Amplitude maximale journalière (heures)', key: 'amplitudeMax' },
            ].map(f => (
              <div key={f.key}>
                <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '6px' }}>{f.label}</label>
                <input
                  type="number"
                  value={config[f.key as keyof typeof config]}
                  onChange={e => setConfig({...config, [f.key]: parseInt(e.target.value)})}
                  style={{...inputStyle, fontFamily: 'monospace', fontWeight: '700', color: '#14B8A6'}}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '20px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#3B82F6' }}>📊 Heures de travail</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            {[
              { label: 'Heures min/semaine', key: 'heuresMinSemaine' },
              { label: 'Heures max/semaine', key: 'heuresMaxSemaine' },
              { label: 'Pause minimale (minutes)', key: 'pauseMinimale' },
            ].map(f => (
              <div key={f.key}>
                <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '6px' }}>{f.label}</label>
                <input
                  type="number"
                  value={config[f.key as keyof typeof config]}
                  onChange={e => setConfig({...config, [f.key]: parseInt(e.target.value)})}
                  style={{...inputStyle, fontFamily: 'monospace', fontWeight: '700', color: '#3B82F6'}}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '20px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#F59E0B' }}>💰 Majorations</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            {[
              { label: 'Majoration nuit (%)', key: 'majorationNuit' },
              { label: 'Majoration dimanche (%)', key: 'majorationDimanche' },
              { label: 'Majoration férié (%)', key: 'majorationFerie' },
            ].map(f => (
              <div key={f.key}>
                <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '6px' }}>{f.label}</label>
                <input
                  type="number"
                  value={config[f.key as keyof typeof config]}
                  onChange={e => setConfig({...config, [f.key]: parseInt(e.target.value)})}
                  style={{...inputStyle, fontFamily: 'monospace', fontWeight: '700', color: '#F59E0B'}}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={async () => { await saveConfig('legal', config); setSaved(true); setTimeout(() => setSaved(false), 3000); }}
          style={saveButtonStyle}
        >{saved ? '✅ Sauvegardé !' : '💾 Sauvegarder la configuration légale'}</button>
      </div>
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

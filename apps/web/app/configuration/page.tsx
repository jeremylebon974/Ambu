'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function saveConfig(section: string, data: any) {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  await fetch(`${API_URL}/configuration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ [section]: data }),
  });
}

export default function ConfigurationPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('codes');

  const sections = [
    { key: 'codes', label: '📋 Codes planning', icon: '📋' },
    { key: 'horaires', label: '⏰ Horaires', icon: '⏰' },
    { key: 'vehicules', label: '🚑 Véhicules', icon: '🚑' },
    { key: 'diplomes', label: '🎓 Diplômes', icon: '🎓' },
    { key: 'personnel', label: '👥 Personnel', icon: '👥' },
    { key: 'legal', label: '⚖️ Légal', icon: '⚖️' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#07090F',
      fontFamily: 'DM Sans, sans-serif',
      color: '#E8ECF5',
    }}>
      {/* HEADER */}
      <div style={{
        height: '56px',
        background: '#0D1017',
        borderBottom: '1px solid #1E2535',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        gap: '16px',
      }}>
        <button
          onClick={() => router.push('/dashboard')}
          style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}
        >←</button>
        <span style={{ fontWeight: '800', fontSize: '16px' }}>⚙️ Configuration société</span>
        <span style={{ color: '#6B7A99', fontSize: '13px' }}>— Paramètres de votre exploitation</span>
      </div>

      <div style={{ display: 'flex', height: 'calc(100vh - 56px)' }}>

        {/* SIDEBAR */}
        <div style={{
          width: '220px',
          background: '#0D1017',
          borderRight: '1px solid #1E2535',
          padding: '16px 8px',
        }}>
          {sections.map(s => (
            <button
              key={s.key}
              onClick={() => setActiveSection(s.key)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: 'none',
                background: activeSection === s.key ? '#1A2235' : 'transparent',
                color: activeSection === s.key ? '#14B8A6' : '#6B7A99',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: activeSection === s.key ? '600' : '400',
                marginBottom: '4px',
                borderLeft: activeSection === s.key ? '2px solid #14B8A6' : '2px solid transparent',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* CONTENU */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>

          {/* CODES PLANNING */}
          {activeSection === 'codes' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>📋 Codes planning</h2>
              <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
                Définissez vos codes planning et leur signification. L'IA utilisera ces codes pour générer et lire votre planning.
              </p>
              <CodesTable />
            </div>
          )}

          {/* HORAIRES */}
          {activeSection === 'horaires' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>⏰ Horaires de travail</h2>
              <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
                Définissez vos postes habituels. L'IA respectera ces horaires pour le calcul des repos et amplitudes.
              </p>
              <HorairesTable />
            </div>
          )}

          {/* VEHICULES */}
          {activeSection === 'vehicules' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>🚑 Flotte de véhicules</h2>
              <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
                Enregistrez vos véhicules avec leurs numéros, types et équipements.
              </p>
              <VehiculesTable />
            </div>
          )}

          {/* DIPLOMES */}
          {activeSection === 'diplomes' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>🎓 Diplômes et habilitations</h2>
              <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
                Configurez les règles de compatibilité diplômes/véhicules. L'IA bloquera les assignations invalides.
              </p>
              <DiplomesConfig />
            </div>
          )}

          {/* PERSONNEL */}
          {activeSection === 'personnel' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>👥 Personnel</h2>
              <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
                Importez ou saisissez votre liste de personnel avec leurs diplômes et contrats.
              </p>
              <PersonnelConfig />
            </div>
          )}

          {/* LEGAL */}
          {activeSection === 'legal' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>⚖️ Contraintes légales</h2>
              <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
                Paramétrez les règles légales applicables à votre société. L'IA les respectera automatiquement.
              </p>
              <LegalConfig />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── COMPOSANT CODES ────────────────────────────────────────────────────────

function CodesTable() {
  const [saved, setSaved] = useState(false);
  const [codes, setCodes] = useState([
    { code: 'AC', label: 'Activité Continue', couleur: '#14B8A6', description: 'Journée normale de travail — ambulance ou VSL' },
    { code: 'PJ', label: 'Permanence Jour', couleur: '#3B82F6', description: 'Poste de jour — disponible en journée' },
    { code: 'PN', label: 'Permanence Nuit', couleur: '#8B5CF6', description: 'Poste de nuit — majoration nuit applicable' },
    { code: 'RH', label: 'Repos Hebdomadaire', couleur: '#6B7A99', description: 'Repos légal obligatoire minimum 35h' },
    { code: 'CP', label: 'Congé Payé', couleur: '#F59E0B', description: 'Congé payé annuel' },
    { code: 'CA', label: 'Congé Annuel', couleur: '#F97316', description: 'Congé annuel planifié' },
    { code: 'CF', label: 'Congé Formation', couleur: '#A78BFA', description: 'Formation professionnelle rémunérée' },
    { code: 'CS', label: 'Congé Sans Solde', couleur: '#EC4899', description: 'Congé non rémunéré' },
    { code: 'AM', label: 'Arrêt Maladie', couleur: '#EF4444', description: 'Arrêt de travail médical — remplacement requis' },
    { code: 'FO', label: 'Formation', couleur: '#22C55E', description: 'Formation interne ou externe' },
  ]);

  const [newCode, setNewCode] = useState({ code: '', label: '', couleur: '#14B8A6', description: '' });

  return (
    <div>
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
                  <span style={{
                    background: c.couleur + '20',
                    color: c.couleur,
                    border: `1px solid ${c.couleur}40`,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '700',
                    fontFamily: 'monospace',
                  }}>{c.code}</span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input
                    value={c.label}
                    onChange={e => {
                      const updated = [...codes];
                      updated[i].label = e.target.value;
                      setCodes(updated);
                    }}
                    placeholder="Ex: Ambulance Couché"
                    style={inputStyle}
                  />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input
                    type="color"
                    value={c.couleur}
                    onChange={e => {
                      const updated = [...codes];
                      updated[i].couleur = e.target.value;
                      setCodes(updated);
                    }}
                    style={{ width: '40px', height: '32px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
                  />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <input
                    value={c.description}
                    onChange={e => {
                      const updated = [...codes];
                      updated[i].description = e.target.value;
                      setCodes(updated);
                    }}
                    placeholder="Notes optionnelles..."
                    style={inputStyle}
                  />
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <button
                    onClick={() => setCodes(codes.filter((_, j) => j !== i))}
                    style={{ background: '#EF444420', color: '#EF4444', border: '1px solid #EF444440', borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', fontSize: '12px' }}
                  >Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ajouter code */}
      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #2A3348', padding: '16px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input value={newCode.code} onChange={e => setNewCode({...newCode, code: e.target.value.toUpperCase()})} placeholder="Code (ex: NJ)" style={{...inputStyle, width: '80px'}} maxLength={4} />
        <input value={newCode.label} onChange={e => setNewCode({...newCode, label: e.target.value})} placeholder="Libellé complet" style={{...inputStyle, flex: 1}} />
        <input value={newCode.description} onChange={e => setNewCode({...newCode, description: e.target.value})} placeholder="Description..." style={{...inputStyle, flex: 2}} />
        <input type="color" value={newCode.couleur} onChange={e => setNewCode({...newCode, couleur: e.target.value})} style={{ width: '40px', height: '36px', borderRadius: '6px', border: 'none', cursor: 'pointer' }} />
        <button
          onClick={() => {
            if (newCode.code && newCode.label) {
              setCodes([...codes, newCode]);
              setNewCode({ code: '', label: '', couleur: '#14B8A6', description: '' });
            }
          }}
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

// ── COMPOSANT HORAIRES ─────────────────────────────────────────────────────

function HorairesTable() {
  const [saved, setSaved] = useState(false);
  const [horaires, setHoraires] = useState([
    { nom: 'Matin', debut: '07:00', fin: '19:00', duree: '12h', nuit: false, description: '' },
    { nom: 'Soir', debut: '12:00', fin: '24:00', duree: '12h', nuit: true, description: '' },
    { nom: 'Nuit', debut: '19:00', fin: '07:00', duree: '12h', nuit: true, description: '' },
  ]);

  return (
    <div>
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

// ── COMPOSANT VEHICULES ────────────────────────────────────────────────────

function VehiculesTable() {
  const [saved, setSaved] = useState(false);
  const [vehicules, setVehicules] = useState([
    { numero: '798', type: 'AMB', diplomeRequis: 'DEA', equipements: 'O2, Brancard', actif: true },
    { numero: '817', type: 'AMB', diplomeRequis: 'DEA', equipements: 'O2, Brancard', actif: true },
    { numero: '275', type: 'AMB', diplomeRequis: 'DEA', equipements: 'O2', actif: true },
    { numero: '694', type: 'AMB', diplomeRequis: 'DEA', equipements: 'O2, Brancard', actif: true },
    { numero: '652', type: 'VSL', diplomeRequis: 'AA', equipements: '', actif: true },
    { numero: 'DY', type: 'VSL', diplomeRequis: 'AA', equipements: '', actif: true },
    { numero: '539', type: 'AMB', diplomeRequis: 'DEA', equipements: 'O2', actif: true },
  ]);

  const [newV, setNewV] = useState({ numero: '', type: 'AMB', diplomeRequis: 'DEA', equipements: '', actif: true });

  return (
    <div>
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
                  <button
                    onClick={() => setVehicules(vehicules.filter((_, j) => j !== i))}
                    style={{ background: '#EF444420', color: '#EF4444', border: '1px solid #EF444440', borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', fontSize: '12px' }}
                  >Supprimer</button>
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
          onClick={() => {
            if (newV.numero) {
              setVehicules([...vehicules, newV]);
              setNewV({ numero: '', type: 'AMB', diplomeRequis: 'DEA', equipements: '', actif: true });
            }
          }}
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

// ── COMPOSANT DIPLOMES ─────────────────────────────────────────────────────

function DiplomesConfig() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {[
        { titre: '🏥 Ambulance', couleur: '#14B8A6', regles: [
          'Obligatoire : minimum 1 DEA (Diplômé d\'État Ambulancier)',
          'Impossible : 2 Auxiliaires Ambulanciers seuls',
          'Impossible : VSL seul sur ambulance',
          'SMUR/Urgence P1 : DEA + AFGSU niveau 2 recommandé',
        ]},
        { titre: '🚗 VSL', couleur: '#3B82F6', regles: [
          'Minimum : Auxiliaire Ambulancier seul autorisé',
          'Transport assis uniquement',
          'Pas de transport allongé',
        ]},
        { titre: '🚕 Taxi conventionné', couleur: '#F59E0B', regles: [
          'Carte taxi obligatoire',
          'Convention CPAM requise',
          'Transport assis simple uniquement',
        ]},
      ].map(cat => (
        <div key={cat.titre} style={{ background: '#0D1017', borderRadius: '12px', border: `1px solid ${cat.couleur}30`, padding: '20px' }}>
          <h3 style={{ color: cat.couleur, fontSize: '15px', fontWeight: '700', marginBottom: '12px' }}>{cat.titre}</h3>
          {cat.regles.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.couleur, flexShrink: 0 }} />
              <span style={{ color: '#E8ECF5', fontSize: '13px' }}>{r}</span>
            </div>
          ))}
          <div style={{ marginTop: '12px', padding: '10px', background: '#111622', borderRadius: '8px' }}>
            <textarea placeholder="Ajoutez vos règles spécifiques..." style={{ width: '100%', background: 'transparent', border: 'none', color: '#6B7A99', fontSize: '12px', resize: 'none', outline: 'none', minHeight: '60px', boxSizing: 'border-box' }} />
          </div>
        </div>
      ))}
      <button style={saveButtonStyle}>💾 Sauvegarder les règles diplômes</button>
    </div>
  );
}

// ── COMPOSANT PERSONNEL ────────────────────────────────────────────────────

function PersonnelConfig() {
  return (
    <div>
      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '24px', marginBottom: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '12px' }}>📤</div>
        <div style={{ color: '#E8ECF5', fontSize: '15px', fontWeight: '600', marginBottom: '8px' }}>Importer votre liste personnel</div>
        <div style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '16px' }}>Format Excel ou CSV accepté — colonnes : Nom, Prénom, Diplôme, Contrat, Heures/semaine</div>
        <button style={{ background: '#14B8A6', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', cursor: 'pointer', fontWeight: '600' }}>
          📁 Importer fichier Excel
        </button>
      </div>

      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#6B7A99' }}>OU SAISIE MANUELLE</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
          {[
            { label: 'Nom', placeholder: 'Dupont' },
            { label: 'Prénom', placeholder: 'Jean' },
          ].map(f => (
            <div key={f.label}>
              <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' }}>{f.label}</label>
              <input placeholder={f.placeholder} style={inputStyle} />
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
          <div>
            <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' }}>Diplôme</label>
            <select style={selectStyle}>
              <option>DEA</option>
              <option>Auxiliaire Ambulancier</option>
              <option>VSL</option>
              <option>Taxi conventionné</option>
            </select>
          </div>
          <div>
            <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' }}>Contrat</label>
            <select style={selectStyle}>
              <option>CDI</option>
              <option>CDD</option>
              <option>Temps partiel</option>
              <option>Intérim</option>
            </select>
          </div>
          <div>
            <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' }}>H/semaine</label>
            <input placeholder="35" type="number" style={inputStyle} />
          </div>
        </div>
        <button style={{ background: '#14B8A6', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 20px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}>
          + Ajouter ce salarié
        </button>
      </div>
    </div>
  );
}

// ── COMPOSANT LEGAL ────────────────────────────────────────────────────────

function LegalConfig() {
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
  );
}

// ── STYLES PARTAGÉS ────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  background: '#111622',
  border: '1px solid #2A3348',
  borderRadius: '6px',
  color: '#E8ECF5',
  padding: '6px 10px',
  fontSize: '13px',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
};

const selectStyle: React.CSSProperties = {
  background: '#111622',
  border: '1px solid #2A3348',
  borderRadius: '6px',
  color: '#E8ECF5',
  padding: '6px 10px',
  fontSize: '13px',
  outline: 'none',
  cursor: 'pointer',
  width: '100%',
};

const saveButtonStyle: React.CSSProperties = {
  marginTop: '16px',
  background: 'linear-gradient(135deg, #14B8A6, #3B82F6)',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  padding: '12px 24px',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '14px',
  width: '100%',
};

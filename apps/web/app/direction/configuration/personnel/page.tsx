'use client';

import { useState } from 'react';
import { auth } from '../../../../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function PersonnelPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [access, setAccess] = useState({ email: '', password: '', confirmPassword: '', role: 'AMBULANCIER' });
  const [pwdErrors,    setPwdErrors]    = useState<string[]>([]);
  const [accessStatus, setAccessStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const [submitting,   setSubmitting]   = useState(false);

  const validatePassword = (pwd: string, confirm: string): string[] => {
    const errors: string[] = [];
    if (pwd.length < 8)            errors.push('8 caractères minimum');
    if (!/[A-Z]/.test(pwd))        errors.push('1 majuscule requise');
    if (!/[0-9]/.test(pwd))        errors.push('1 chiffre requis');
    if (!/[@!#$%&*]/.test(pwd))    errors.push('1 caractère spécial requis (@!#$%&*)');
    if (confirm && pwd !== confirm) errors.push('Les mots de passe ne correspondent pas');
    return errors;
  };

  const handleCreateAccess = async () => {
    setAccessStatus(null);
    const errors = validatePassword(access.password, access.confirmPassword);
    setPwdErrors(errors);
    if (errors.length > 0) return;
    if (!access.email || !firstName || !lastName) {
      setAccessStatus({ ok: false, msg: 'Veuillez renseigner Nom, Prénom et Email.' });
      return;
    }
    setSubmitting(true);
    try {
      const token = auth.getToken();
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ email: access.email, password: access.password, firstName, lastName, role: access.role }),
      });
      if (res.ok) {
        setAccessStatus({ ok: true, msg: `Compte créé pour ${firstName} ${lastName}.` });
        setAccess({ email: '', password: '', confirmPassword: '', role: 'AMBULANCIER' });
        setPwdErrors([]);
      } else {
        const data = await res.json();
        setAccessStatus({ ok: false, msg: data.message || 'Erreur lors de la création.' });
      }
    } catch {
      setAccessStatus({ ok: false, msg: 'Erreur réseau.' });
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>👥 Personnel</h2>
      <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
        Importez ou saisissez votre liste de personnel avec leurs diplômes et contrats.
      </p>

      {/* IMPORT */}
      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '24px', marginBottom: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '12px' }}>📤</div>
        <div style={{ color: '#E8ECF5', fontSize: '15px', fontWeight: '600', marginBottom: '8px' }}>Importer votre liste personnel</div>
        <div style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '16px' }}>Format Excel ou CSV accepté — colonnes : Nom, Prénom, Diplôme, Contrat, Heures/semaine</div>
        <button style={{ background: '#14B8A6', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', cursor: 'pointer', fontWeight: '600' }}>
          📁 Importer fichier Excel
        </button>
      </div>

      {/* SAISIE MANUELLE */}
      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '20px', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#6B7A99' }}>OU SAISIE MANUELLE</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
          <div>
            <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' }}>Nom</label>
            <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Dupont" style={inputStyle} />
          </div>
          <div>
            <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' }}>Prénom</label>
            <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Jean" style={inputStyle} />
          </div>
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

      {/* ACCÈS PLATEFORME */}
      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #3B82F630', padding: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px', color: '#3B82F6' }}>🔑 Accès plateforme</h3>
        <p style={{ color: '#6B7A99', fontSize: '12px', marginBottom: '16px' }}>
          Crée un compte pour {firstName || 'cet employé'} {lastName || ''}. Utilise le Nom et Prénom saisis ci-dessus.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' }}>Email</label>
            <input value={access.email} onChange={e => setAccess(a => ({ ...a, email: e.target.value }))} placeholder="jean.dupont@viesionnaire.fr" type="email" style={inputStyle} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' }}>Mot de passe</label>
              <input
                value={access.password}
                onChange={e => { const p = e.target.value; setAccess(a => ({ ...a, password: p })); setPwdErrors(validatePassword(p, access.confirmPassword)); }}
                placeholder="Minimum 8 caractères"
                type="password"
                style={{ ...inputStyle, borderColor: pwdErrors.length > 0 ? '#EF4444' : '#2A3348' }}
              />
            </div>
            <div>
              <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' }}>Confirmer mot de passe</label>
              <input
                value={access.confirmPassword}
                onChange={e => { const c = e.target.value; setAccess(a => ({ ...a, confirmPassword: c })); setPwdErrors(validatePassword(access.password, c)); }}
                placeholder="Répéter le mot de passe"
                type="password"
                style={{ ...inputStyle, borderColor: pwdErrors.some(e => e.includes('correspondent')) ? '#EF4444' : '#2A3348' }}
              />
            </div>
          </div>
          {pwdErrors.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {pwdErrors.map(e => <div key={e} style={{ fontSize: '11px', color: '#EF4444' }}>✕ {e}</div>)}
            </div>
          )}
          <div>
            <label style={{ color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px' }}>Rôle</label>
            <select value={access.role} onChange={e => setAccess(a => ({ ...a, role: e.target.value }))} style={selectStyle}>
              <option value="AMBULANCIER">AMBULANCIER</option>
              <option value="REGULATEUR">REGULATEUR</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          {accessStatus && (
            <div style={{ background: accessStatus.ok ? '#22C55E15' : '#EF444415', border: `1px solid ${accessStatus.ok ? '#22C55E30' : '#EF444430'}`, borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: accessStatus.ok ? '#22C55E' : '#EF4444' }}>
              {accessStatus.msg}
            </div>
          )}
          <button
            onClick={handleCreateAccess}
            disabled={submitting}
            style={{ background: submitting ? '#1E2535' : 'linear-gradient(135deg, #3B82F6, #8B5CF6)', color: submitting ? '#6B7A99' : 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', cursor: submitting ? 'not-allowed' : 'pointer', fontWeight: '600', fontSize: '13px', alignSelf: 'flex-start' }}
          >{submitting ? 'Création...' : '🔑 Créer l\'accès'}</button>
        </div>
      </div>
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

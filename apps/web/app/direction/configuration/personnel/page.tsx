'use client';

import { useState, useEffect } from 'react';
import { auth } from '../../../../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const INITIAL_FORM = {
  lastName: '', firstName: '', email: '',
  diplome: 'DEA', contrat: 'CDI', heures: '35',
  role: 'AMBULANCIER', password: '', confirmPassword: '',
};

function validatePassword(pwd: string, confirm: string): string[] {
  const errors: string[] = [];
  if (pwd.length < 8)            errors.push('8 caractères minimum');
  if (!/[A-Z]/.test(pwd))        errors.push('1 majuscule requise');
  if (!/[0-9]/.test(pwd))        errors.push('1 chiffre requis');
  if (!/[@!#$%&*]/.test(pwd))    errors.push('1 caractère spécial requis (@!#$%&*)');
  if (confirm && pwd !== confirm) errors.push('Les mots de passe ne correspondent pas');
  return errors;
}

type User = { id: string; firstName: string; lastName: string; email: string; role: string };

export default function PersonnelPage() {
  const [users,       setUsers]       = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [form,        setForm]        = useState(INITIAL_FORM);
  const [pwdErrors,   setPwdErrors]   = useState<string[]>([]);
  const [status,      setStatus]      = useState<{ ok: boolean; msg: string } | null>(null);
  const [submitting,  setSubmitting]  = useState(false);

  const token = () => auth.getToken();

  const loadUsers = async () => {
    setLoadingUsers(true);
    try {
      const res = await fetch(`${API_URL}/auth/users`, {
        headers: { Authorization: `Bearer ${token()}` },
      });
      if (res.ok) setUsers(await res.json());
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => { loadUsers(); }, []);

  const set = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }));

  const handleDelete = async (u: User) => {
    if (!confirm(`Supprimer ${u.firstName} ${u.lastName} ?`)) return;
    await fetch(`${API_URL}/auth/users/${u.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token()}` },
    });
    loadUsers();
  };

  const handleSubmit = async () => {
    setStatus(null);
    const errors = validatePassword(form.password, form.confirmPassword);
    setPwdErrors(errors);
    if (errors.length > 0) return;
    if (!form.lastName || !form.firstName || !form.email) {
      setStatus({ ok: false, msg: 'Veuillez renseigner Nom, Prénom et Email.' });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token()}` },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName:  form.lastName,
          email:     form.email,
          password:  form.password,
          role:      form.role,
        }),
      });
      if (res.ok) {
        setStatus({ ok: true, msg: `Compte créé pour ${form.firstName} ${form.lastName}.` });
        setForm(INITIAL_FORM);
        setPwdErrors([]);
        loadUsers();
      } else {
        const data = await res.json();
        setStatus({ ok: false, msg: data.message || 'Erreur lors de la création.' });
      }
    } catch {
      setStatus({ ok: false, msg: 'Erreur réseau.' });
    }
    setSubmitting(false);
  };

  const ROLE_COLOR: Record<string, string> = {
    SUPER_ADMIN:  '#EF4444',
    ADMIN:        '#F59E0B',
    REGULATEUR:   '#3B82F6',
    AMBULANCIER:  '#14B8A6',
    COMPTABLE:    '#8B5CF6',
    PATIENT:      '#6B7A99',
  };

  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>👥 Personnel</h2>
      <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
        Consultez les comptes existants et créez de nouveaux employés.
      </p>

      {/* TABLEAU EMPLOYÉS */}
      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', overflow: 'hidden', marginBottom: '32px' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #1E2535' }}>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#E8ECF5' }}>Comptes existants</span>
          <span style={{ marginLeft: '8px', fontSize: '12px', color: '#6B7A99' }}>({users.length})</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1E2535' }}>
              {['Nom', 'Prénom', 'Email', 'Rôle', 'Actions'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#6B7A99', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loadingUsers ? (
              <tr><td colSpan={5} style={{ padding: '24px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>Chargement...</td></tr>
            ) : users.length === 0 ? (
              <tr><td colSpan={5} style={{ padding: '24px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>Aucun compte</td></tr>
            ) : users.map(u => (
              <tr key={u.id} style={{ borderBottom: '1px solid #1E2535' }}>
                <td style={{ padding: '12px 16px', color: '#E8ECF5', fontSize: '13px', fontWeight: '600' }}>{u.lastName}</td>
                <td style={{ padding: '12px 16px', color: '#E8ECF5', fontSize: '13px' }}>{u.firstName}</td>
                <td style={{ padding: '12px 16px', color: '#6B7A99', fontSize: '13px', fontFamily: 'monospace' }}>{u.email}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{
                    background: (ROLE_COLOR[u.role] ?? '#6B7A99') + '20',
                    color:       ROLE_COLOR[u.role] ?? '#6B7A99',
                    border:     `1px solid ${(ROLE_COLOR[u.role] ?? '#6B7A99')}40`,
                    padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '600',
                  }}>{u.role}</span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  {u.role !== 'SUPER_ADMIN' && (
                    <button
                      onClick={() => handleDelete(u)}
                      style={{ background: '#EF444420', color: '#EF4444', border: '1px solid #EF444440', borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', fontSize: '12px' }}
                    >Supprimer</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FORMULAIRE CRÉATION */}
      <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '16px', color: '#E8ECF5' }}>+ Nouvel employé</div>
      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '24px', maxWidth: '640px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={labelStyle}>Nom</label>
            <input value={form.lastName}  onChange={e => set('lastName', e.target.value)}  placeholder="Dupont" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Prénom</label>
            <input value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="Jean"   style={inputStyle} />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Email</label>
          <input value={form.email} onChange={e => set('email', e.target.value)} placeholder="jean.dupont@viesionnaire.fr" type="email" style={inputStyle} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={labelStyle}>Diplôme</label>
            <select value={form.diplome} onChange={e => set('diplome', e.target.value)} style={selectStyle}>
              <option value="DEA">DEA</option>
              <option value="AA">Auxiliaire Ambulancier</option>
              <option value="VSL">VSL</option>
              <option value="TAXI">Taxi conventionné</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Contrat</label>
            <select value={form.contrat} onChange={e => set('contrat', e.target.value)} style={selectStyle}>
              <option value="CDI">CDI</option>
              <option value="CDD">CDD</option>
              <option value="INTERIM">Intérim</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>H/semaine</label>
            <input value={form.heures} onChange={e => set('heures', e.target.value)} type="number" placeholder="35" style={inputStyle} />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Rôle plateforme</label>
          <select value={form.role} onChange={e => set('role', e.target.value)} style={selectStyle}>
            <option value="AMBULANCIER">AMBULANCIER</option>
            <option value="REGULATEUR">REGULATEUR</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: pwdErrors.length > 0 ? '8px' : '24px' }}>
          <div>
            <label style={labelStyle}>Mot de passe</label>
            <input
              value={form.password}
              onChange={e => { set('password', e.target.value); setPwdErrors(validatePassword(e.target.value, form.confirmPassword)); }}
              placeholder="Minimum 8 caractères"
              type="password"
              style={{ ...inputStyle, borderColor: pwdErrors.length > 0 ? '#EF4444' : '#2A3348' }}
            />
          </div>
          <div>
            <label style={labelStyle}>Confirmer mot de passe</label>
            <input
              value={form.confirmPassword}
              onChange={e => { set('confirmPassword', e.target.value); setPwdErrors(validatePassword(form.password, e.target.value)); }}
              placeholder="Répéter le mot de passe"
              type="password"
              style={{ ...inputStyle, borderColor: pwdErrors.some(e => e.includes('correspondent')) ? '#EF4444' : '#2A3348' }}
            />
          </div>
        </div>

        {pwdErrors.length > 0 && (
          <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {pwdErrors.map(e => <div key={e} style={{ fontSize: '11px', color: '#EF4444' }}>✕ {e}</div>)}
          </div>
        )}

        {status && (
          <div style={{
            marginBottom: '16px',
            background: status.ok ? '#22C55E15' : '#EF444415',
            border: `1px solid ${status.ok ? '#22C55E30' : '#EF444430'}`,
            borderRadius: '8px', padding: '10px 14px',
            fontSize: '13px', color: status.ok ? '#22C55E' : '#EF4444',
          }}>
            {status.msg}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={submitting}
          style={{
            width: '100%',
            background: submitting ? '#1E2535' : 'linear-gradient(135deg, #14B8A6, #3B82F6)',
            color: submitting ? '#6B7A99' : 'white',
            border: 'none', borderRadius: '10px',
            padding: '12px 24px', cursor: submitting ? 'not-allowed' : 'pointer',
            fontWeight: '700', fontSize: '14px',
          }}
        >{submitting ? 'Création en cours...' : '+ Créer l\'employé'}</button>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  color: '#6B7A99', fontSize: '12px', display: 'block', marginBottom: '4px',
};

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

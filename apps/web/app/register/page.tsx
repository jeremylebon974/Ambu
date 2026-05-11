'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

function LogoViesionnaire({ height = 36, onClick }: { height?: number; onClick?: () => void }) {
  return (
    <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <svg height={height} viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2 L22 36 L42 2 L35 2 L22 26 L9 2 Z" fill="white"/>
        <rect x="24" y="0" width="9" height="7" rx="1" fill="#EF4444" transform="rotate(-12 28 3)"/>
        <path d="M26 8 L34 8 L42 2 L35 2 Z" fill="#cccccc" opacity="0.4"/>
      </svg>
      <div style={{ fontSize: '22px', fontWeight: '900', letterSpacing: '-0.01em', fontFamily: 'DM Sans, sans-serif' }}>
        <span style={{ color: '#EF4444' }}>VIE</span>
        <span style={{ color: '#FFFFFF' }}>sionnaire</span>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  color: '#6b7a99',
  fontSize: '12px',
  marginBottom: '6px',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#111622',
  border: '1px solid #2a3348',
  borderRadius: '10px',
  padding: '10px 14px',
  color: '#e8ecf5',
  fontSize: '13px',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'DM Sans, sans-serif',
};

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Email invalide'); return;
    }
    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères'); return;
    }
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas'); return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, role: 'PATIENT' }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Inscription impossible');
      }
      await auth.login(email, password);
      router.push('/patient');
    } catch (err: any) {
      setError(err.message || 'Erreur lors de l\'inscription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#07090f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'DM Sans, sans-serif',
      padding: '20px',
    }}>
      <div style={{
        background: '#0d1017',
        border: '1px solid #1e2535',
        borderRadius: '16px',
        padding: '40px',
        width: '440px',
        maxWidth: '100%',
      }}>
        <div style={{ marginBottom: '8px' }}>
          <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6b7a99', cursor: 'pointer', fontSize: '13px', padding: '0 0 8px' }}>← Retour</button>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <LogoViesionnaire height={44} onClick={() => router.push('/')} />
          <p style={{ color: '#e8ecf5', fontSize: '15px', fontWeight: '700', margin: '16px 0 4px' }}>Créer mon espace patient</p>
          <p style={{ color: '#6b7a99', fontSize: '12px', margin: 0 }}>Suivi de vos transports et documents médicaux</p>
        </div>

        <form onSubmit={handleRegister} autoComplete="off">
          <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Prénom</label>
              <input value={firstName} onChange={e => setFirstName(e.target.value)} required style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Nom</label>
              <input value={lastName} onChange={e => setLastName(e.target.value)} required style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} placeholder="vous@exemple.fr" />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Mot de passe</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={inputStyle} placeholder="8 caractères minimum" />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Confirmer le mot de passe</label>
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required style={inputStyle} placeholder="••••••••" />
          </div>

          {error && (
            <div style={{
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '8px',
              padding: '10px 14px',
              color: '#fca5a5',
              fontSize: '12px',
              marginBottom: '16px',
            }}>{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              background: loading ? '#0f766e' : '#14b8a6',
              border: 'none',
              borderRadius: '10px',
              color: '#fff',
              fontSize: '14px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'Syne, sans-serif',
              transition: 'all 0.15s',
            }}
          >
            {loading ? 'Création...' : 'Créer mon compte'}
          </button>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            onClick={() => router.push('/login?role=patient')}
            style={{ background: 'transparent', border: 'none', color: '#6b7a99', cursor: 'pointer', fontSize: '13px' }}
          >Déjà un compte ? Se connecter →</button>
        </div>
      </div>
    </div>
  );
}

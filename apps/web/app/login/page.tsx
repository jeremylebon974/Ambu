'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/auth';

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

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await auth.login(email, password);
      const userRole = data?.user?.role;
      const destination =
        userRole === 'ADMIN' || userRole === 'SUPER_ADMIN' ? '/direction' :
        userRole === 'REGULATEUR' ? '/regulateur' :
        userRole === 'AMBULANCIER' ? '/ambulancier' :
        userRole === 'PATIENT' ? '/patient' :
        '/dashboard';
      router.push(destination);
    } catch (err: any) {
      setError(err.message || 'Email ou mot de passe incorrect');
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
    }}>
      <div style={{
        background: '#0d1017',
        border: '1px solid #1e2535',
        borderRadius: '16px',
        padding: '40px',
        width: '400px',
        maxWidth: '90vw',
      }}>
        <div style={{ marginBottom: '8px' }}>
          <button
            onClick={() => router.back()}
            style={{ background: 'transparent', border: 'none', color: '#6b7a99', cursor: 'pointer', fontSize: '13px', padding: '0 0 8px' }}
          >← Retour</button>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <LogoViesionnaire height={44} onClick={() => router.push('/')} />
          <p style={{ color: '#6b7a99', fontSize: '13px', margin: '16px 0 0' }}>
            Connectez-vous à votre espace
          </p>
        </div>

        <form onSubmit={handleLogin} autoComplete="off">
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              color: '#6b7a99',
              fontSize: '12px',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="off"
              placeholder="admin@viesionnaire.fr"
              style={{
                width: '100%',
                background: '#111622',
                border: '1px solid #2a3348',
                borderRadius: '10px',
                padding: '10px 14px',
                color: '#e8ecf5',
                fontSize: '13px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: '#6b7a99',
              fontSize: '12px',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="off"
              placeholder="••••••••"
              style={{
                width: '100%',
                background: '#111622',
                border: '1px solid #2a3348',
                borderRadius: '10px',
                padding: '10px 14px',
                color: '#e8ecf5',
                fontSize: '13px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
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
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div style={{
          marginTop: '24px',
          padding: '14px',
          background: '#111622',
          borderRadius: '10px',
          fontSize: '11px',
          color: '#6b7a99',
          fontFamily: 'DM Mono, monospace',
        }}>
          <div style={{ marginBottom: '4px', color: '#3a4560' }}>Comptes de test :</div>
          <div>admin@viesionnaire.fr / Admin1234!</div>
          <div>regulateur@viesionnaire.fr / Regul1234!</div>
        </div>
      </div>
    </div>
  );
}

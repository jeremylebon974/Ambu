'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/auth';

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
      await auth.login(email, password);
      router.push('/dashboard');
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
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #14b8a6, #3b82f6)',
            borderRadius: '12px',
            margin: '0 auto 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
          }}>🚑</div>
          <h1 style={{
            color: '#e8ecf5',
            fontSize: '22px',
            fontWeight: '800',
            fontFamily: 'Syne, sans-serif',
            margin: '0 0 6px',
          }}>Paille en Queue</h1>
          <p style={{ color: '#6b7a99', fontSize: '13px', margin: 0 }}>
            Plateforme de gestion ambulancière
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
              placeholder="admin@paille-en-queue.fr"
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
          <div>admin@paille-en-queue.fr / Admin1234!</div>
          <div>regulateur@paille-en-queue.fr / Regul1234!</div>
        </div>
      </div>
    </div>
  );
}

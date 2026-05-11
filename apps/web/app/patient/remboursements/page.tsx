'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { auth } from '../../../lib/auth';

function LogoViesionnaire({ height = 32, onClick }: { height?: number; onClick?: () => void }) {
  return (
    <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg height={height} viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2 L22 36 L42 2 L35 2 L22 26 L9 2 Z" fill="white"/>
        <rect x="24" y="0" width="9" height="7" rx="1" fill="#EF4444" transform="rotate(-12 28 3)"/>
        <path d="M26 8 L34 8 L42 2 L35 2 Z" fill="#cccccc" opacity="0.4"/>
      </svg>
      <div style={{ fontSize: '15px', fontWeight: '900', letterSpacing: '-0.01em', fontFamily: 'DM Sans, sans-serif' }}>
        <span style={{ color: '#EF4444' }}>VIE</span>
        <span style={{ color: '#FFFFFF' }}>sionnaire</span>
      </div>
    </div>
  );
}

export default function PatientRemboursementsPage() {
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=patient'); return; }
  }, [router]);

  return (
    <div style={{ minHeight: '100vh', background: '#07090F', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5' }}>

      {/* HEADER */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          background: '#0D1017',
          borderBottom: '1px solid #1E2535',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>
        <LogoViesionnaire height={26} onClick={() => router.push('/patient')} />
      </motion.div>

      <div style={{ padding: '24px 32px', maxWidth: '900px', margin: '0 auto' }}>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px' }}
        >
          💶 Mes remboursements
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            background: '#0D1017',
            border: '1px solid #1E2535',
            borderRadius: '14px',
            padding: '64px 24px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.5 }}>💶</div>
          <div style={{ fontSize: '16px', fontWeight: '700', color: '#E8ECF5', marginBottom: '8px' }}>
            Aucun remboursement en cours
          </div>
          <div style={{ fontSize: '13px', color: '#6B7A99', maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>
            Les remboursements sont traités par votre caisse d'assurance maladie après validation du transport.
          </div>

          <button
            onClick={() => router.push('/patient')}
            style={{
              marginTop: '24px',
              background: '#14B8A620',
              border: '1px solid #14B8A640',
              borderRadius: '10px',
              color: '#14B8A6',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '700',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >← Retour</button>
        </motion.div>
      </div>
    </div>
  );
}

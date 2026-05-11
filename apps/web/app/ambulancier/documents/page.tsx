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

const categories = [
  { label: 'Ordonnances', icon: '📋', color: '#14B8A6' },
  { label: 'Bons de transport', icon: '🚑', color: '#3B82F6' },
  { label: 'Rapports de mission', icon: '📊', color: '#8B5CF6' },
  { label: 'Documents scannés', icon: '📸', color: '#F59E0B' },
];

export default function AmbulancierDocumentsPage() {
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=ambulancier'); return; }
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
        <LogoViesionnaire height={26} onClick={() => router.push('/ambulancier')} />
      </motion.div>

      <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}
        >
          📄 Mes documents
        </motion.h1>

        {/* Info PDA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            background: '#14B8A610',
            border: '1px solid #14B8A630',
            borderRadius: '10px',
            padding: '12px 16px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '13px',
            color: '#14B8A6',
          }}
        >
          <span>📱</span>
          Vos documents sont synchronisés avec le PDA
        </motion.div>

        {/* Grille catégories */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: '#0D1017',
                border: `1px solid ${cat.color}25`,
                borderRadius: '14px',
                padding: '20px',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>{cat.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#E8ECF5', marginBottom: '8px' }}>{cat.label}</div>
              <span style={{
                background: '#F59E0B20',
                color: '#F59E0B',
                border: '1px solid #F59E0B40',
                borderRadius: '6px',
                padding: '2px 10px',
                fontSize: '11px',
                fontWeight: '700',
              }}>
                0 document
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bouton scanner */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push('/pda/scan')}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #14B8A6, #3B82F6)',
            border: 'none',
            borderRadius: '14px',
            color: 'white',
            padding: '16px',
            fontSize: '15px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
        >
          📸 Scanner un document
        </motion.button>
      </div>
    </div>
  );
}

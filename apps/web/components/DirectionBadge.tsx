'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../lib/auth';

const VISIBLE_PATHS = [
  '/regulateur',
  '/ambulancier',
  '/patient',
  '/map/regulateur',
  '/map/ambulancier',
  '/map/patient',
];

export function DirectionBadge() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDirection, setIsDirection] = useState(false);

  useEffect(() => {
    const user = auth.getUser();
    setIsDirection(user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN');
  }, []);

  if (!isDirection) return null;
  if (!VISIBLE_PATHS.includes(pathname || '')) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '12px',
        right: '12px',
        zIndex: 9999,
        background: '#EF4444',
        color: '#FFFFFF',
        opacity: 0.92,
        borderRadius: '20px',
        padding: '6px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '12px',
        fontWeight: '700',
        boxShadow: '0 4px 14px rgba(239,68,68,0.35)',
        pointerEvents: 'auto',
      }}
    >
      <motion.div
        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFFFFF' }}
      />
      <span style={{ letterSpacing: '0.04em' }}>VUE DIRECTION</span>
      <button
        onClick={() => router.push('/direction')}
        style={{
          background: 'rgba(255,255,255,0.18)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#FFFFFF',
          borderRadius: '12px',
          padding: '3px 10px',
          cursor: 'pointer',
          fontSize: '11px',
          fontWeight: '700',
          fontFamily: 'DM Sans, sans-serif',
        }}
      >← Direction</button>
    </div>
  );
}

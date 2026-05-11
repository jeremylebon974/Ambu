'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const POLL_MS = 5_000;
const HEARTBEAT_MS = 5_000;

const EXCLUDED_PATHS = ['/direction', '/direction/personnel', '/direction/facturation'];

export function DirectionBadge() {
  const pathname = usePathname();
  const [role, setRole] = useState<string | null>(null);
  const [signalActive, setSignalActive] = useState(false);

  useEffect(() => {
    const user = auth.getUser();
    setRole(user?.role ?? null);
  }, []);

  const isDirection = role === 'ADMIN' || role === 'SUPER_ADMIN';
  const isExcluded = EXCLUDED_PATHS.some(p => pathname?.startsWith(p));

  // Writer — Direction envoie sa présence toutes les 5s
  useEffect(() => {
    if (!isDirection || !pathname || isExcluded) return;

    const token = auth.getToken();
    if (!token) return;

    const write = async () => {
      try {
        await fetch(`${API_URL}/presence`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ pathname }),
        });
      } catch {}
    };

    write();
    const heartbeat = setInterval(write, HEARTBEAT_MS);

    return () => {
      clearInterval(heartbeat);
      try {
        fetch(`${API_URL}/presence`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch {}
    };
  }, [isDirection, pathname, isExcluded]);

  // Reader — autres rôles polling toutes les 5s
  useEffect(() => {
    if (isDirection || !pathname) return;

    const token = auth.getToken();
    if (!token) return;

    const check = async () => {
      try {
        const res = await fetch(`${API_URL}/presence?pathname=${encodeURIComponent(pathname)}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setSignalActive(data?.active === true);
      } catch {
        setSignalActive(false);
      }
    };

    check();
    const poll = setInterval(check, POLL_MS);
    return () => clearInterval(poll);
  }, [isDirection, pathname]);

  if (isDirection) return null;

  return (
    <AnimatePresence>
      {signalActive && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 9999,
            background: '#F59E0B',
            color: '#1A1A2E',
            borderRadius: '14px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'DM Sans, sans-serif',
            boxShadow: '0 10px 25px rgba(245, 158, 11, 0.35)',
            maxWidth: '260px',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.55, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1A1A2E', flexShrink: 0 }}
          />
          <div>
            <div style={{ fontSize: '13px', fontWeight: '800' }}>👁️ Direction en ligne</div>
            <div style={{ fontSize: '11px', opacity: 0.85 }}>La direction consulte cet espace</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

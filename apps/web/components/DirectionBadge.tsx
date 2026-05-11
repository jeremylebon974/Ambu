'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../lib/auth';

const STORAGE_KEY = 'directionOnline';
const FRESHNESS_MS = 30_000;
const POLL_MS = 5_000;
const HEARTBEAT_MS = 5_000;

export function DirectionBadge() {
  const pathname = usePathname();
  const [role, setRole] = useState<string | null>(null);
  const [signalActive, setSignalActive] = useState(false);

  useEffect(() => {
    const user = auth.getUser();
    setRole(user?.role ?? null);
  }, []);

  const isDirection = role === 'ADMIN' || role === 'SUPER_ADMIN';

  // Writer (Direction) : écrit + heartbeat tant que la page est montée
  useEffect(() => {
    if (!isDirection || !pathname) return;
    if (pathname.startsWith('/direction')) return;

    const write = () => {
      try {
        const user = auth.getUser();
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          pathname,
          userId: user?.id,
          role: user?.role,
          timestamp: Date.now(),
        }));
      } catch {}
    };

    write();
    const heartbeat = setInterval(write, HEARTBEAT_MS);

    return () => {
      clearInterval(heartbeat);
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const data = JSON.parse(raw);
          if (data.pathname === pathname) localStorage.removeItem(STORAGE_KEY);
        }
      } catch {}
    };
  }, [isDirection, pathname]);

  // Reader (autres rôles) : poll toutes les 5s
  useEffect(() => {
    if (isDirection || !pathname) return;

    const check = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) { setSignalActive(false); return; }
        const data = JSON.parse(raw);
        const currentUser = auth.getUser();
        const fresh = Date.now() - data.timestamp < FRESHNESS_MS;
        const matches = data.pathname === pathname;
        const isDirectionUser = data.role === 'ADMIN' || data.role === 'SUPER_ADMIN';
        const isDifferentUser = data.userId !== currentUser?.id;
        setSignalActive(fresh && matches && isDirectionUser && isDifferentUser);
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

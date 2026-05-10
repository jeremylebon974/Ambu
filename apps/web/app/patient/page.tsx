'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../../lib/auth';

export default function PatientPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=patient'); return; }
    const u = auth.getUser();
    setUser(u);
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
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '22px' }}>🏥</span>
          <div>
            <div style={{ fontWeight: '700', fontSize: '14px' }}>
              {user ? `${user.firstName} ${user.lastName}` : 'Mon espace patient'}
            </div>
            <div style={{ fontSize: '11px', color: '#6B7A99' }}>Paille en Queue — Transport Sanitaire</div>
          </div>
        </div>
        <button
          onClick={() => { auth.logout(); router.push('/'); }}
          style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}
        >⏻</button>
      </motion.div>

      <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>

        {/* Prochain transport */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'linear-gradient(135deg, #22C55E15, #14B8A610)',
            border: '1px solid #22C55E30',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '20px',
          }}
        >
          <div style={{ fontSize: '12px', color: '#6B7A99', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Prochain transport
          </div>
          <div style={{ fontSize: '22px', fontWeight: '800', color: '#22C55E', marginBottom: '4px' }}>
            Aucun transport planifié
          </div>
          <div style={{ fontSize: '13px', color: '#6B7A99' }}>
            Contactez votre médecin pour planifier un transport
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}
        >
          {[
            { label: 'Mes transports', icon: '🚑', color: '#14B8A6' },
            { label: 'Mes documents', icon: '📄', color: '#3B82F6' },
            { label: 'Mes rendez-vous', icon: '📅', color: '#F59E0B' },
            { label: 'Remboursements', icon: '💶', color: '#22C55E' },
          ].map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: '#0D1017',
                border: `1px solid ${a.color}20`,
                borderRadius: '14px',
                padding: '20px',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{a.icon}</div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: a.color }}>{a.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            background: '#0D1017',
            border: '1px solid #1E2535',
            borderRadius: '14px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Besoin d'aide ?</div>
          <div style={{ fontSize: '13px', color: '#6B7A99', marginBottom: '16px' }}>
            Notre équipe est disponible 24h/24 pour vos transports sanitaires
          </div>
          <button style={{
            background: '#14B8A6',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            padding: '12px 24px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px',
          }}>
            📞 Nous contacter
          </button>
        </motion.div>
      </div>
    </div>
  );
}

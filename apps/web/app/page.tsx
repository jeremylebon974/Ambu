'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const portails = [
  {
    id: 'direction',
    titre: 'Direction',
    sousTitre: 'Tableau de bord exécutif',
    emoji: '👔',
    description: 'KPI temps réel, facturation, performance exploitation, rapports mensuels automatiques.',
    couleur: '#F59E0B',
    path: '/login?role=direction',
    features: ['Chiffre d\'affaires', 'Performance flotte', 'Rapports IA'],
  },
  {
    id: 'regulateur',
    titre: 'Régulateur',
    sousTitre: 'Centre de régulation IA',
    emoji: '🎛️',
    description: 'Dispatch intelligent, carte temps réel, planning équipages, cerveau IA opérationnel.',
    couleur: '#14B8A6',
    path: '/login?role=regulateur',
    features: ['Dispatch IA', 'Carte live', 'Planning auto'],
  },
  {
    id: 'ambulancier',
    titre: 'Employé',
    sousTitre: 'Terminal terrain PDA',
    emoji: '🚑',
    description: 'Missions, navigation, signatures, statuts temps réel, communication régulation.',
    couleur: '#3B82F6',
    path: '/login?role=ambulancier',
    features: ['Mes missions', 'GPS live', 'Signature patient'],
  },
  {
    id: 'patient',
    titre: 'Patient',
    sousTitre: 'Espace personnel',
    emoji: '🏥',
    description: 'Suivi transport, documents, historique, rendez-vous et remboursements.',
    couleur: '#22C55E',
    path: '/login?role=patient',
    features: ['Mon transport', 'Mes documents', 'Historique'],
  },
];


// Composant logo VIEsionnaire
function LogoViesionnaire({ height = 36, onClick }: { height?: number; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: '10px' }}
    >
      <svg height={height} viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2 L22 36 L42 2 L35 2 L22 26 L9 2 Z" fill="white"/>
        <rect x="24" y="0" width="9" height="7" rx="1" fill="#EF4444" transform="rotate(-12 28 3)"/>
        <path d="M26 8 L34 8 L42 2 L35 2 Z" fill="#cccccc" opacity="0.4"/>
      </svg>
      <div style={{ lineHeight: 1.15 }}>
        <div style={{ fontSize: '17px', fontWeight: '900', letterSpacing: '-0.01em', fontFamily: '"DM Sans", sans-serif' }}>
          <span style={{ color: '#EF4444' }}>VIE</span>
          <span style={{ color: '#FFFFFF' }}>sionnaire</span>
        </div>
        <div style={{ fontSize: '9px', color: '#6B7A99', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
          Médical • Innovation • Humanité
        </div>
      </div>
    </div>
  );
}

// Composant particule animée
function Particle({ delay, x, y }: { delay: number; x: number; y: number }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: '2px',
        height: '2px',
        borderRadius: '50%',
        background: '#14B8A6',
        pointerEvents: 'none',
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [0, -30, -60],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 4,
      }}
    />
  );
}

export default function HomePage() {
  const router = useRouter();
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [liveStats, setLiveStats] = useState([
    { label: 'Véhicules actifs',     value: '—',  icon: '🚑', color: '#14B8A6' },
    { label: 'Missions aujourd\'hui', value: '—', icon: '📋', color: '#3B82F6' },
    { label: 'Salariés',             value: '23', icon: '👥', color: '#F59E0B' },
    { label: 'Ponctualité',          value: '—',  icon: '⏱️', color: '#22C55E' },
  ]);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const particles = [
    { id: 0, x: 73, y: 77, delay: 2.9 },
    { id: 1, x: 32, y: 24, delay: 1.2 },
    { id: 2, x: 17, y: 3, delay: 0.5 },
    { id: 3, x: 16, y: 1, delay: 2.8 },
    { id: 4, x: 87, y: 48, delay: 2.6 },
    { id: 5, x: 35, y: 4, delay: 2.6 },
    { id: 6, x: 34, y: 87, delay: 1.5 },
    { id: 7, x: 27, y: 82, delay: 0.2 },
    { id: 8, x: 27, y: 79, delay: 0.5 },
    { id: 9, x: 12, y: 35, delay: 1.3 },
    { id: 10, x: 42, y: 49, delay: 2.2 },
    { id: 11, x: 35, y: 12, delay: 0.9 },
    { id: 12, x: 76, y: 42, delay: 1.6 },
    { id: 13, x: 58, y: 25, delay: 2.9 },
    { id: 14, x: 51, y: 80, delay: 1.6 },
    { id: 15, x: 39, y: 34, delay: 0.9 },
    { id: 16, x: 54, y: 23, delay: 2.1 },
    { id: 17, x: 62, y: 22, delay: 1.5 },
    { id: 18, x: 2, y: 40, delay: 2.1 },
    { id: 19, x: 89, y: 77, delay: 1.5 },
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [vRes, mRes] = await Promise.all([
          fetch(`${API_URL}/vehicles`),
          fetch(`${API_URL}/missions`),
        ]);
        const vArray = vRes.ok ? await vRes.json() : [];
        const mArray = mRes.ok ? await mRes.json() : [];
        const v = Array.isArray(vArray) ? vArray : [];
        const m = Array.isArray(mArray) ? mArray : [];

        const actifs = v.filter((x: any) => x.status === 'AVAILABLE' || x.status === 'ON_MISSION').length;
        const completed = m.filter((x: any) => x.status === 'COMPLETED').length;
        const ponctualite = m.length > 0 ? Math.round((completed / m.length) * 100) : 0;

        setLiveStats([
          { label: 'Véhicules actifs',     value: actifs > 0 ? String(actifs) : '—',          icon: '🚑', color: '#14B8A6' },
          { label: 'Missions aujourd\'hui', value: m.length > 0 ? String(m.length) : '—',      icon: '📋', color: '#3B82F6' },
          { label: 'Salariés',             value: '23',                                          icon: '👥', color: '#F59E0B' },
          { label: 'Ponctualité',          value: m.length > 0 ? `${ponctualite}%` : '—',      icon: '⏱️', color: '#22C55E' },
        ]);
      } catch {
        // garde les valeurs '—' par défaut
      }
    };
    fetchStats();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: '100vh',
        background: '#03050A',
        fontFamily: '"DM Sans", sans-serif',
        color: '#E8ECF5',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* FOND ANIMÉ */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {/* Grille */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />

        {/* Glow central */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Glow bleu */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Particules */}
        {particles.map(p => (
          <Particle key={p.id} x={p.x} y={p.y} delay={p.delay} />
        ))}
      </div>

      {/* HEADER */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(3, 5, 10, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(20, 184, 166, 0.1)',
          padding: '0 40px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <motion.div whileHover={{ scale: 1.03 }}>
          <LogoViesionnaire height={38} onClick={() => router.push('/')} />
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#14B8A6',
              fontSize: '12px',
              fontFamily: '"DM Mono", monospace',
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6' }} />
            Système IA actif
          </motion.div>

          <div style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '13px',
            color: '#6B7A99',
          }}>
            {mounted ? time.toLocaleTimeString('fr-FR') : ''}
          </div>

        </div>
      </motion.header>

      {/* CONTENU */}
      <div style={{ position: 'relative', zIndex: 1, paddingTop: '64px' }}>

        {/* HERO */}
        <motion.section
          style={{ y: heroY, opacity: heroOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '80px 40px 60px',
            textAlign: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(20, 184, 166, 0.08)',
                color: '#14B8A6',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                borderRadius: '20px',
                padding: '6px 16px',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '28px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
              }}
            >
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6' }}
              />
              Intelligence Artificielle Opérationnelle
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: '52px',
                fontWeight: '900',
                marginBottom: '20px',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
              }}
            >
              La régulation ambulance
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #14B8A6 0%, #3B82F6 50%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                réinventée par l'IA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                color: '#6B7A99',
                fontSize: '17px',
                maxWidth: '580px',
                margin: '0 auto 50px',
                lineHeight: '1.7',
              }}
            >
              Dispatch intelligent, planning automatique, facturation CPAM et suivi terrain en temps réel — tout en un seul système.
            </motion.p>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
                marginBottom: '80px',
              }}
            >
              {liveStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  style={{
                    background: 'rgba(13, 16, 23, 0.8)',
                    border: `1px solid ${s.color}20`,
                    borderRadius: '14px',
                    padding: '20px 16px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div style={{ fontSize: '22px', marginBottom: '8px' }}>{s.icon}</div>
                  <div style={{
                    fontSize: '30px',
                    fontWeight: '800',
                    fontFamily: '"DM Mono", monospace',
                    color: s.color,
                    letterSpacing: '-0.02em',
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '11px', color: '#6B7A99', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* PORTAILS */}
        <section style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px 100px',
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <div style={{
              fontSize: '11px',
              color: '#3A4560',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.15em',
              fontWeight: '600',
              marginBottom: '8px',
            }}>
              Accès par profil
            </div>
            <div style={{ fontSize: '22px', fontWeight: '700', color: '#E8ECF5' }}>
              Choisissez votre espace
            </div>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}>
            {portails.map((p, i) => (
              <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredCard(p.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => router.push(p.path)}
                style={{
                  background: 'rgba(13, 16, 23, 0.9)',
                  border: `1px solid ${hoveredCard === p.id ? p.couleur + '60' : p.couleur + '20'}`,
                  borderRadius: '20px',
                  padding: '28px',
                  cursor: 'pointer',
                  textAlign: 'left' as const,
                  position: 'relative' as const,
                  overflow: 'hidden' as const,
                  backdropFilter: 'blur(10px)',
                  transition: 'border-color 0.3s',
                }}
              >
                {/* Glow hover */}
                <AnimatePresence>
                  {hoveredCard === p.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: `linear-gradient(90deg, transparent, ${p.couleur}, transparent)`,
                      }}
                    />
                  )}
                </AnimatePresence>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <motion.div
                    animate={hoveredCard === p.id ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: '56px',
                      height: '56px',
                      background: p.couleur + '15',
                      border: `1px solid ${p.couleur}30`,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '26px',
                      flexShrink: 0,
                    }}
                  >
                    {p.emoji}
                  </motion.div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '800', fontSize: '20px', color: '#E8ECF5', marginBottom: '2px' }}>
                      {p.titre}
                    </div>
                    <div style={{ fontSize: '12px', color: p.couleur, fontWeight: '600', letterSpacing: '0.04em' }}>
                      {p.sousTitre}
                    </div>
                  </div>

                  <motion.div
                    animate={hoveredCard === p.id ? { x: 4 } : { x: 0 }}
                    style={{ color: p.couleur, fontSize: '20px', marginTop: '4px' }}
                  >→</motion.div>
                </div>

                <p style={{ color: '#6B7A99', fontSize: '13px', lineHeight: '1.6', margin: '0 0 16px' }}>
                  {p.description}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const }}>
                  {p.features.map(f => (
                    <span
                      key={f}
                      style={{
                        background: p.couleur + '10',
                        color: p.couleur,
                        border: `1px solid ${p.couleur}25`,
                        borderRadius: '6px',
                        padding: '3px 10px',
                        fontSize: '11px',
                        fontWeight: '600',
                      }}
                    >{f}</span>
                  ))}
                </div>
              </motion.button>

              {p.id === 'patient' && (
                <button
                  onClick={() => router.push('/register')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#22C55E',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '600',
                    textAlign: 'center',
                    padding: '6px',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >Pas encore de compte ? S'inscrire →</button>
              )}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            borderTop: '1px solid #0D1017',
            padding: '24px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#3A4560',
            fontSize: '12px',
          }}
        >
          <span>© 2026 VIEsionnaire — Médical • Innovation • Humanité</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#14B8A6' }}>
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#14B8A6' }}
            />
            Système IA opérationnel 24/7
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

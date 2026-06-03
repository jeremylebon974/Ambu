'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const MONTANT: Record<number, number> = { 1: 150, 2: 110, 3: 85, 4: 65 };

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

const menuItems = [
  { label: 'Vue globale', icon: '📊', path: '/direction', active: true },
  { label: 'Régulation', icon: '🎛️', path: '/regulateur' },
  { label: 'Planning', icon: '📅', path: '/planning' },
  { label: 'Personnel', icon: '👥', path: '/direction/personnel' },
  { label: 'Facturation', icon: '💶', path: '/direction/facturation' },
  { label: 'Configuration', icon: '⚙️', path: '/direction/configuration' },
];


export default function DirectionPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [kpis, setKpis] = useState([
    { label: 'CA du mois',           value: '—',   evolution: '', color: '#22C55E', icon: '💶' },
    { label: 'Missions aujourd\'hui', value: '—',   evolution: '', color: '#14B8A6', icon: '📋' },
    { label: 'Véhicules actifs',      value: '—',   evolution: '', color: '#3B82F6', icon: '🚑' },
    { label: 'Taux ponctualité',      value: '—',   evolution: '', color: '#F59E0B', icon: '⏱️' },
    { label: 'Salariés en service',   value: '14',  evolution: '61%', color: '#8B5CF6', icon: '👥' },
    { label: 'Alertes actives',       value: '0',   evolution: '', color: '#EF4444', icon: '⚠️' },
  ]);

  const loadKpis = async () => {
    try {
      const token = auth.getToken();
      const headers = { Authorization: `Bearer ${token}` };
      const [vRes, mRes] = await Promise.all([
        fetch(`${API_URL}/vehicles`, { headers }),
        fetch(`${API_URL}/missions`, { headers }),
      ]);
      const v = vRes.ok ? await vRes.json() : [];
      const m = mRes.ok ? await mRes.json() : [];
      const vArray = Array.isArray(v) ? v : [];
      const mArray = Array.isArray(m) ? m : [];

      const actifs = vArray.filter((x: any) => x.status === 'AVAILABLE' || x.status === 'ON_MISSION').length;
      const total = vArray.length;
      const completed = mArray.filter((x: any) => x.status === 'COMPLETED' || x.status === 'VALIDATED');
      const ca = completed.reduce((sum: number, x: any) => sum + (MONTANT[x.priority] ?? 85), 0);
      const ponctualite = mArray.length > 0 ? Math.round((completed.length / mArray.length) * 100) : 0;

      setKpis([
        { label: 'CA du mois',           value: `${ca.toLocaleString('fr-FR')} €`,                        evolution: '', color: '#22C55E', icon: '💶' },
        { label: 'Missions aujourd\'hui', value: String(mArray.length),                                    evolution: '', color: '#14B8A6', icon: '📋' },
        { label: 'Véhicules actifs',      value: `${actifs}/${total}`,                                     evolution: `${total > 0 ? Math.round((actifs / total) * 100) : 0}%`, color: '#3B82F6', icon: '🚑' },
        { label: 'Taux ponctualité',      value: `${ponctualite}%`,                                        evolution: '', color: '#F59E0B', icon: '⏱️' },
        { label: 'Salariés en service',   value: '14',                                                     evolution: '61%', color: '#8B5CF6', icon: '👥' },
        { label: 'Alertes actives',       value: '0',                                                      evolution: '', color: '#EF4444', icon: '⚠️' },
      ]);
    } catch {}
  };

  useEffect(() => {
    if (!auth.isAuthenticated()) { router.push('/login?role=direction'); return; }
    const u = auth.getUser();
    setUser(u);
    loadKpis();
  }, [router]);

  return (
    <div style={{ minHeight: '100vh', background: '#07090F', display: 'flex', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5' }}>

      {/* SIDEBAR */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        style={{
          width: '220px',
          background: '#0D1017',
          borderRight: '1px solid #1E2535',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 12px',
          flexShrink: 0,
        }}
      >
        <div style={{ padding: '0 8px 24px', borderBottom: '1px solid #1E2535', marginBottom: '16px' }}>
          <button
            onClick={() => router.back()}
            style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '12px', padding: '0 0 8px', display: 'block' }}
          >← Retour</button>
          <LogoViesionnaire height={30} onClick={() => router.push('/direction')} />
          <div style={{ fontSize: '11px', color: '#6B7A99', marginTop: '8px' }}>👔 Direction — Tableau de bord exécutif</div>
        </div>

        {menuItems.map(item => (
          <motion.button
            key={item.path}
            whileHover={{ x: 4 }}
            onClick={() => router.push(item.path)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              border: 'none',
              background: item.active ? '#1A2235' : 'transparent',
              color: item.active ? '#14B8A6' : '#6B7A99',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: item.active ? '600' : '400',
              marginBottom: '4px',
              textAlign: 'left',
              width: '100%',
              borderLeft: item.active ? '2px solid #14B8A6' : '2px solid transparent',
            }}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </motion.button>
        ))}

        <div style={{ flex: 1 }} />

        <button
          onClick={() => { auth.logout(); router.push('/'); }}
          style={{
            background: 'transparent',
            border: '1px solid #1E2535',
            borderRadius: '8px',
            color: '#6B7A99',
            padding: '8px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          Déconnexion
        </button>
      </motion.aside>

      {/* CONTENU */}
      <div style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}
        >
          <div>
            <h1 style={{ fontSize: '22px', fontWeight: '800', margin: 0 }}>Vue d'exploitation</h1>
            <p style={{ color: '#6B7A99', fontSize: '13px', margin: '4px 0 0' }}>
              {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#14B8A6', fontSize: '12px' }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6' }} />
            Temps réel
          </motion.div>
        </motion.div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                background: '#0D1017',
                border: `1px solid ${kpi.color}20`,
                borderRadius: '14px',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#6B7A99', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {kpi.label}
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: kpi.color, fontFamily: 'DM Mono, monospace' }}>
                    {kpi.value}
                  </div>
                </div>
                <div style={{ fontSize: '28px' }}>{kpi.icon}</div>
              </div>
              <div style={{ marginTop: '12px', fontSize: '12px', color: kpi.color }}>
                {kpi.evolution} vs mois dernier
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accès rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ background: '#0D1017', borderRadius: '14px', border: '1px solid #1E2535', padding: '24px' }}
        >
          <h2 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '16px' }}>Accès rapides</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            {[
              { label: 'Centre Régulation', icon: '🎛️', path: '/regulateur', color: '#14B8A6' },
              { label: 'Planning', icon: '📅', path: '/planning', color: '#3B82F6' },
              { label: 'Carte GPS', icon: '🗺️', path: '/map/direction', color: '#8B5CF6' },
              { label: 'Configuration', icon: '⚙️', path: '/direction/configuration', color: '#F59E0B' },
              { label: 'Personnel', icon: '👥', path: '/direction/personnel', color: '#14B8A6' },
              { label: 'Facturation', icon: '💶', path: '/direction/facturation', color: '#22C55E' },
            ].map(a => (
              <motion.button
                key={a.path}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => router.push(a.path)}
                style={{
                  background: a.color + '10',
                  border: `1px solid ${a.color}30`,
                  borderRadius: '12px',
                  padding: '16px',
                  cursor: 'pointer',
                  color: a.color,
                  fontSize: '13px',
                  fontWeight: '600',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{a.icon}</div>
                {a.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

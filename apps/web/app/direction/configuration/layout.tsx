'use client';

import { usePathname, useRouter } from 'next/navigation';
import { DirectionBadge } from '../../../components/DirectionBadge';

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

const sections = [
  { key: 'codesplanning', label: '📋 Codes planning', path: '/direction/configuration/codesplanning' },
  { key: 'horaires',      label: '⏰ Horaires',        path: '/direction/configuration/horaires' },
  { key: 'vehicules',     label: '🚑 Véhicules',       path: '/direction/configuration/vehicules' },
  { key: 'diplomes',      label: '🎓 Diplômes',        path: '/direction/configuration/diplomes' },
  { key: 'personnel',     label: '👥 Personnel',       path: '/direction/configuration/personnel' },
  { key: 'legal',         label: '⚖️ Légal',           path: '/direction/configuration/legal' },
];

export default function ConfigurationLayout({ children }: { children: React.ReactNode }) {
  const router   = useRouter();
  const pathname = usePathname();

  const activeKey = sections.find(s => pathname === s.path)?.key ?? '';

  return (
    <div style={{ minHeight: '100vh', background: '#07090F', fontFamily: 'DM Sans, sans-serif', color: '#E8ECF5' }}>
      <DirectionBadge />

      {/* HEADER */}
      <div style={{ height: '56px', background: '#0D1017', borderBottom: '1px solid #1E2535', display: 'flex', alignItems: 'center', padding: '0 24px', gap: '16px' }}>
        <button
          onClick={() => router.push('/direction')}
          style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}
        >←</button>
        <LogoViesionnaire height={28} onClick={() => router.push('/direction')} />
        <span style={{ color: '#2A3348', fontSize: '14px' }}>|</span>
        <span style={{ color: '#6B7A99', fontSize: '13px' }}>⚙️ Configuration société</span>
      </div>

      <div style={{ display: 'flex', height: 'calc(100vh - 56px)' }}>

        {/* SIDEBAR */}
        <div style={{ width: '220px', background: '#0D1017', borderRight: '1px solid #1E2535', padding: '16px 8px', flexShrink: 0 }}>
          {sections.map(s => (
            <button
              key={s.key}
              onClick={() => router.push(s.path)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: 'none',
                background: activeKey === s.key ? '#1A2235' : 'transparent',
                color: activeKey === s.key ? '#14B8A6' : '#6B7A99',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: activeKey === s.key ? '600' : '400',
                marginBottom: '4px',
                borderLeft: activeKey === s.key ? '2px solid #14B8A6' : '2px solid transparent',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* CONTENU */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

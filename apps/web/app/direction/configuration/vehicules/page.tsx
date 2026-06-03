'use client';

import { useState, useEffect, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { auth } from '../../../../lib/auth';

const API_URL        = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const CLOUDINARY_URL  = 'https://api.cloudinary.com/v1_1/drcipztzo/image/upload';
const UPLOAD_PRESET   = 'HoldingBSC';

type Vehicle = {
  id: string;
  plate: string;
  type: string;
  status: string;
  metadata: { diplomeRequis?: string; equipements?: string; imageUrl?: string } | null;
};

const INITIAL_NEW = { numero: '', type: 'AMB', diplomeRequis: 'DEA', equipements: '' };

async function uploadToCloudinary(file: File): Promise<string> {
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', UPLOAD_PRESET);
  const res = await fetch(CLOUDINARY_URL, { method: 'POST', body: fd });
  if (!res.ok) throw new Error('Upload Cloudinary échoué');
  const data = await res.json();
  return data.secure_url as string;
}

export default function VehiculesPage() {
  const [vehicles,    setVehicles]    = useState<Vehicle[]>([]);
  const [loading,     setLoading]     = useState(true);
  const [newV,        setNewV]        = useState(INITIAL_NEW);
  const [photo,       setPhoto]       = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [adding,      setAdding]      = useState(false);
  const [qrVehicle,   setQrVehicle]   = useState<Vehicle | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const headers = () => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${auth.getToken()}`,
  });

  const loadVehicles = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/vehicles`, { headers: headers() });
      if (res.ok) setVehicles(await res.json());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadVehicles(); }, []);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setPhoto(file);
    setPhotoPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleAdd = async () => {
    if (!newV.numero) return;
    setAdding(true);
    try {
      let imageUrl: string | undefined;
      if (photo) {
        try { imageUrl = await uploadToCloudinary(photo); }
        catch { setAdding(false); return; }
      }

      const res = await fetch(`${API_URL}/vehicles`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({ ...newV, ...(imageUrl ? { imageUrl } : {}) }),
      });
      if (res.ok) {
        const created = await res.json();
        setVehicles(v => [...v, created]);
        setNewV(INITIAL_NEW);
        setPhoto(null);
        setPhotoPreview(null);
        if (fileRef.current) fileRef.current.value = '';
      }
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (v: Vehicle) => {
    if (!confirm(`Supprimer le véhicule ${v.plate} ?`)) return;
    await fetch(`${API_URL}/vehicles/${v.id}`, { method: 'DELETE', headers: headers() });
    setVehicles(prev => prev.filter(x => x.id !== v.id));
  };

  const downloadQr = () => {
    const canvas = document.getElementById('qr-dl-canvas') as HTMLCanvasElement | null;
    if (!canvas || !qrVehicle) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `qr-vehicule-${qrVehicle.plate}.png`;
    a.click();
  };

  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>🚑 Flotte de véhicules</h2>
      <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
        Gérez vos véhicules. Les QR codes permettent aux ambulanciers de s'identifier sur les PDA.
      </p>

      {/* TABLEAU */}
      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', overflow: 'hidden', marginBottom: '16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1E2535' }}>
              {['Photo', 'N° Véhicule', 'Type', 'Diplôme requis', 'Équipements', 'Statut', 'Actions'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#6B7A99', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={7} style={{ padding: '24px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>Chargement...</td></tr>
            ) : vehicles.length === 0 ? (
              <tr><td colSpan={7} style={{ padding: '24px', textAlign: 'center', color: '#6B7A99', fontSize: '13px' }}>Aucun véhicule enregistré</td></tr>
            ) : vehicles.map(v => (
              <tr key={v.id} style={{ borderBottom: '1px solid #1E2535' }}>
                <td style={{ padding: '10px 16px' }}>
                  {v.metadata?.imageUrl
                    ? <img src={v.metadata.imageUrl} alt="" style={{ width: 60, height: 40, objectFit: 'cover', borderRadius: '6px', border: '1px solid #1E2535' }} />
                    : <div style={{ width: 60, height: 40, background: '#111622', borderRadius: '6px', border: '1px solid #1E2535', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🚑</div>
                  }
                </td>
                <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: '#14B8A6', fontWeight: '700' }}>{v.plate}</td>
                <td style={{ padding: '12px 16px', color: '#E8ECF5', fontSize: '13px' }}>{v.type}</td>
                <td style={{ padding: '12px 16px', color: '#E8ECF5', fontSize: '13px' }}>{v.metadata?.diplomeRequis ?? '—'}</td>
                <td style={{ padding: '12px 16px', color: '#E8ECF5', fontSize: '13px' }}>{v.metadata?.equipements || '—'}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{
                    background: v.status === 'AVAILABLE' ? '#22C55E20' : '#F59E0B20',
                    color:      v.status === 'AVAILABLE' ? '#22C55E'   : '#F59E0B',
                    border: `1px solid ${v.status === 'AVAILABLE' ? '#22C55E40' : '#F59E0B40'}`,
                    padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '600',
                  }}>
                    {v.status === 'AVAILABLE' ? 'Disponible' : v.status}
                  </span>
                </td>
                <td style={{ padding: '12px 16px', display: 'flex', gap: '8px' }}>
                  <button onClick={() => setQrVehicle(v)} style={{ background: '#3B82F620', color: '#3B82F6', border: '1px solid #3B82F640', borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', fontSize: '12px' }}>QR Code</button>
                  <button onClick={() => handleDelete(v)} style={{ background: '#EF444420', color: '#EF4444', border: '1px solid #EF444440', borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', fontSize: '12px' }}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AJOUTER */}
      <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #2A3348', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '12px' }}>
          <input value={newV.numero} onChange={e => setNewV({...newV, numero: e.target.value})} placeholder="N° véhicule" style={{...inputStyle, width: '120px'}} />
          <select value={newV.type} onChange={e => setNewV({...newV, type: e.target.value})} style={selectStyle}>
            <option value="AMB">Ambulance</option>
            <option value="VSL">VSL</option>
            <option value="TAXI">Taxi</option>
          </select>
          <select value={newV.diplomeRequis} onChange={e => setNewV({...newV, diplomeRequis: e.target.value})} style={selectStyle}>
            <option value="DEA">DEA obligatoire</option>
            <option value="AA">Auxiliaire minimum</option>
          </select>
          <input value={newV.equipements} onChange={e => setNewV({...newV, equipements: e.target.value})} placeholder="Équipements..." style={{...inputStyle, flex: 1}} />
        </div>

        {/* Photo véhicule */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          {photoPreview
            ? <img src={photoPreview} alt="" style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: '8px', border: '2px solid #14B8A6' }} />
            : <div style={{ width: 120, height: 80, background: '#111622', borderRadius: '8px', border: '2px dashed #2A3348', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🚑</div>
          }
          <div>
            <div style={{ color: '#6B7A99', fontSize: '12px', marginBottom: '4px' }}>Photo du véhicule (optionnel)</div>
            <input ref={fileRef} type="file" accept="image/*" onChange={handlePhotoChange} style={{ color: '#E8ECF5', fontSize: '13px' }} />
          </div>
        </div>

        <button
          onClick={handleAdd}
          disabled={adding || !newV.numero}
          style={{ background: adding ? '#1E2535' : '#14B8A6', color: adding ? '#6B7A99' : 'white', border: 'none', borderRadius: '8px', padding: '8px 20px', cursor: adding ? 'not-allowed' : 'pointer', fontWeight: '600', fontSize: '13px' }}
        >{adding ? 'Ajout...' : '+ Ajouter le véhicule'}</button>
      </div>

      {/* MODAL QR CODE */}
      {qrVehicle && (
        <div onClick={() => setQrVehicle(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#0D1017', border: '1px solid #1E2535', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', minWidth: '280px' }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#E8ECF5' }}>QR Code — Véhicule {qrVehicle.plate}</div>
            <div style={{ background: 'white', padding: '16px', borderRadius: '12px' }}>
              <QRCodeCanvas id="qr-dl-canvas" value={`https://holdingbsc.re/pda/scan?vehicle=${qrVehicle.plate}`} size={180} level="H" />
            </div>
            <div style={{ color: '#6B7A99', fontSize: '12px', fontFamily: 'monospace' }}>
              holdingbsc.re/pda/scan?vehicle={qrVehicle.plate}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={downloadQr} style={{ background: 'linear-gradient(135deg, #14B8A6, #3B82F6)', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}>⬇ Télécharger PNG</button>
              <button onClick={() => setQrVehicle(null)} style={{ background: 'transparent', color: '#6B7A99', border: '1px solid #2A3348', borderRadius: '8px', padding: '10px 20px', cursor: 'pointer', fontSize: '13px' }}>Fermer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: '#111622', border: '1px solid #2A3348', borderRadius: '6px',
  color: '#E8ECF5', padding: '6px 10px', fontSize: '13px', outline: 'none',
  width: '100%', boxSizing: 'border-box',
};

const selectStyle: React.CSSProperties = {
  background: '#111622', border: '1px solid #2A3348', borderRadius: '6px',
  color: '#E8ECF5', padding: '6px 10px', fontSize: '13px', outline: 'none',
  cursor: 'pointer',
};

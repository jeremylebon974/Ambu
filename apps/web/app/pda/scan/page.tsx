'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { auth } from '../../../lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface PatientData {
  nom?: string;
  prenom?: string;
  dateNaissance?: string;
  numeroSS?: string;
  adresse?: string;
  medecin?: string;
  typeDocument?: string;
  confidence?: number;
}

export default function PdaScanPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scanning, setScanning] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<PatientData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cameraMode, setCameraMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const analyzeImage = async (base64: string, mediaType: string) => {
    setScanning(true);
    setError(null);
    setResult(null);

    try {
      const token = auth.getToken();
      const response = await fetch(`${API_URL}/pda/scan-document`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ image: base64, mediaType }),
      });

      if (!response.ok) throw new Error('Erreur analyse');
      const data = await response.json();
      setResult(data);
    } catch (err) {
      // Fallback — analyse directe Claude API depuis le frontend
      await analyzeWithClaude(base64, mediaType);
    } finally {
      setScanning(false);
    }
  };

  const analyzeWithClaude = async (base64: string, mediaType: string) => {
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-5',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: [
              {
                type: 'image',
                source: { type: 'base64', media_type: mediaType, data: base64 },
              },
              {
                type: 'text',
                text: `Analyse ce document et extrait les informations patient en JSON uniquement, sans texte avant ou après.
Format exact attendu:
{
  "typeDocument": "CARTE_VITALE|CNI|PASSEPORT|ORDONNANCE|AUTRE",
  "nom": "...",
  "prenom": "...",
  "dateNaissance": "JJ/MM/AAAA",
  "numeroSS": "...",
  "adresse": "...",
  "medecin": "...",
  "confidence": 0.95
}
Si un champ n'est pas visible, mets null. Réponds UNIQUEMENT avec le JSON.`,
              },
            ],
          }],
        }),
      });

      const data = await response.json();
      const text = data.content[0]?.text || '{}';
      const clean = text.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      setResult(parsed);
    } catch (err) {
      setError('Impossible d\'analyser le document. Vérifiez la qualité de l\'image.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
      const mediaType = file.type as 'image/jpeg' | 'image/png' | 'image/webp';
      setPreview(reader.result as string);
      analyzeImage(base64, mediaType);
    };
    reader.readAsDataURL(file);
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraMode(true);
      }
    } catch (err) {
      setError('Impossible d\'accéder à la caméra');
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
    const base64 = dataUrl.split(',')[1];
    setPreview(dataUrl);
    setCameraMode(false);
    const stream = videoRef.current.srcObject as MediaStream;
    stream?.getTracks().forEach(t => t.stop());
    analyzeImage(base64, 'image/jpeg');
  };

  const savePatient = async () => {
    if (!result) return;
    setSaving(true);
    try {
      const token = auth.getToken();
      await fetch(`${API_URL}/patients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: result.prenom || '',
          lastName: result.nom || '',
          dateOfBirth: result.dateNaissance || '',
          address: result.adresse || '',
        }),
      });
      setSaved(true);
      setTimeout(() => router.back(), 2000);
    } catch (err) {
      setError('Erreur sauvegarde patient');
    }
    setSaving(false);
  };

  const docTypeColor: Record<string, string> = {
    CARTE_VITALE: '#22C55E',
    CNI: '#3B82F6',
    PASSEPORT: '#8B5CF6',
    ORDONNANCE: '#14B8A6',
    AUTRE: '#6B7A99',
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#03050A',
      fontFamily: 'DM Sans, sans-serif',
      color: '#E8ECF5',
    }}>
      {/* HEADER */}
      <div style={{
        background: '#0D1017',
        borderBottom: '1px solid #1E2535',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <button onClick={() => router.back()} style={{ background: 'transparent', border: 'none', color: '#6B7A99', cursor: 'pointer', fontSize: '18px' }}>←</button>
        <span style={{ fontWeight: '700', fontSize: '15px' }}>📸 Scanner un document</span>
        <span style={{ color: '#6B7A99', fontSize: '12px' }}>IA • Reconnaissance automatique</span>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>

        {/* CAMERA MODE */}
        {cameraMode && (
          <div style={{ marginBottom: '20px' }}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ width: '100%', borderRadius: '12px', border: '2px solid #14B8A6' }}
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={capturePhoto}
              style={{
                width: '100%',
                marginTop: '12px',
                background: '#14B8A6',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                padding: '14px',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              📸 Capturer la photo
            </motion.button>
          </div>
        )}

        {/* BOUTONS SCAN */}
        {!cameraMode && !scanning && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={startCamera}
              style={{
                background: '#0D1017',
                border: '1px solid #14B8A640',
                borderRadius: '14px',
                padding: '24px 16px',
                cursor: 'pointer',
                textAlign: 'center',
                color: '#E8ECF5',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>📷</div>
              <div style={{ fontWeight: '600', fontSize: '14px' }}>Caméra</div>
              <div style={{ color: '#6B7A99', fontSize: '12px', marginTop: '4px' }}>Photo en direct</div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => fileInputRef.current?.click()}
              style={{
                background: '#0D1017',
                border: '1px solid #3B82F640',
                borderRadius: '14px',
                padding: '24px 16px',
                cursor: 'pointer',
                textAlign: 'center',
                color: '#E8ECF5',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🖼️</div>
              <div style={{ fontWeight: '600', fontSize: '14px' }}>Galerie</div>
              <div style={{ color: '#6B7A99', fontSize: '12px', marginTop: '4px' }}>Choisir une image</div>
            </motion.button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>
        )}

        {/* TYPES DE DOCUMENTS */}
        {!scanning && !result && !cameraMode && (
          <div style={{ background: '#0D1017', borderRadius: '12px', border: '1px solid #1E2535', padding: '16px', marginBottom: '20px' }}>
            <div style={{ fontSize: '12px', color: '#6B7A99', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Documents acceptés
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { label: '🏥 Carte Vitale', color: '#22C55E' },
                { label: '🪪 CNI', color: '#3B82F6' },
                { label: '🛂 Passeport', color: '#8B5CF6' },
                { label: '📋 Ordonnance', color: '#14B8A6' },
              ].map(d => (
                <span key={d.label} style={{
                  background: d.color + '15',
                  color: d.color,
                  border: `1px solid ${d.color}30`,
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}>{d.label}</span>
              ))}
            </div>
          </div>
        )}

        {/* PREVIEW IMAGE */}
        {preview && !cameraMode && (
          <div style={{ marginBottom: '16px' }}>
            <img
              src={preview}
              alt="Document scanné"
              style={{ width: '100%', borderRadius: '12px', border: '1px solid #1E2535', maxHeight: '200px', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* SCANNING */}
        {scanning && (
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              background: '#0D1017',
              border: '1px solid #14B8A640',
              borderRadius: '14px',
              padding: '32px',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🧠</div>
            <div style={{ fontWeight: '700', fontSize: '15px', color: '#14B8A6', marginBottom: '4px' }}>
              IA en cours d'analyse...
            </div>
            <div style={{ color: '#6B7A99', fontSize: '13px' }}>
              Reconnaissance du document et extraction des données
            </div>
          </motion.div>
        )}

        {/* ERREUR */}
        {error && (
          <div style={{
            background: '#EF444415',
            border: '1px solid #EF444440',
            borderRadius: '12px',
            padding: '16px',
            color: '#EF4444',
            fontSize: '13px',
            marginBottom: '16px',
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* RÉSULTAT */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Type document */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
            }}>
              <span style={{
                background: (docTypeColor[result.typeDocument || 'AUTRE'] || '#6B7A99') + '20',
                color: docTypeColor[result.typeDocument || 'AUTRE'] || '#6B7A99',
                border: `1px solid ${docTypeColor[result.typeDocument || 'AUTRE'] || '#6B7A99'}40`,
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '13px',
                fontWeight: '700',
              }}>
                {result.typeDocument || 'Document détecté'}
              </span>
              {result.confidence && (
                <span style={{ color: '#6B7A99', fontSize: '12px' }}>
                  Confiance : {Math.round((result.confidence || 0) * 100)}%
                </span>
              )}
            </div>

            {/* Données extraites */}
            <div style={{
              background: '#0D1017',
              border: '1px solid #1E2535',
              borderRadius: '14px',
              padding: '20px',
              marginBottom: '16px',
            }}>
              <div style={{ fontSize: '13px', color: '#6B7A99', marginBottom: '16px', fontWeight: '600' }}>
                ✅ Données extraites automatiquement
              </div>

              {[
                { label: 'Nom', value: result.nom },
                { label: 'Prénom', value: result.prenom },
                { label: 'Date de naissance', value: result.dateNaissance },
                { label: 'N° Sécurité Sociale', value: result.numeroSS },
                { label: 'Adresse', value: result.adresse },
                { label: 'Médecin traitant', value: result.medecin },
              ].map(field => field.value && (
                <div key={field.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '10px 0',
                  borderBottom: '1px solid #1E2535',
                }}>
                  <span style={{ color: '#6B7A99', fontSize: '13px', flexShrink: 0, marginRight: '16px' }}>
                    {field.label}
                  </span>
                  <span style={{ color: '#E8ECF5', fontSize: '13px', fontWeight: '600', textAlign: 'right' }}>
                    {field.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Boutons action */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={savePatient}
                disabled={saving || saved}
                style={{
                  flex: 1,
                  background: saved ? '#22C55E' : 'linear-gradient(135deg, #14B8A6, #3B82F6)',
                  border: 'none',
                  borderRadius: '10px',
                  color: 'white',
                  padding: '14px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: saving || saved ? 'not-allowed' : 'pointer',
                }}
              >
                {saved ? '✅ Patient sauvegardé !' : saving ? '⏳ Sauvegarde...' : '💾 Créer fiche patient'}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => { setResult(null); setPreview(null); setError(null); }}
                style={{
                  background: '#111622',
                  border: '1px solid #2A3348',
                  borderRadius: '10px',
                  color: '#6B7A99',
                  padding: '14px 16px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                🔄 Rescanner
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

'use client';

const saveButtonStyle: React.CSSProperties = {
  marginTop: '16px', background: 'linear-gradient(135deg, #14B8A6, #3B82F6)',
  color: 'white', border: 'none', borderRadius: '10px', padding: '12px 24px',
  cursor: 'pointer', fontWeight: '700', fontSize: '14px', width: '100%',
};

export default function DiplomesPage() {
  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>🎓 Diplômes et habilitations</h2>
      <p style={{ color: '#6B7A99', fontSize: '13px', marginBottom: '24px' }}>
        Configurez les règles de compatibilité diplômes/véhicules. L'IA bloquera les assignations invalides.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { titre: '🏥 Ambulance', couleur: '#14B8A6', regles: [
            'Obligatoire : minimum 1 DEA (Diplômé d\'État Ambulancier)',
            'Impossible : 2 Auxiliaires Ambulanciers seuls',
            'Impossible : VSL seul sur ambulance',
            'SMUR/Urgence P1 : DEA + AFGSU niveau 2 recommandé',
          ]},
          { titre: '🚗 VSL', couleur: '#3B82F6', regles: [
            'Minimum : Auxiliaire Ambulancier seul autorisé',
            'Transport assis uniquement',
            'Pas de transport allongé',
          ]},
          { titre: '🚕 Taxi conventionné', couleur: '#F59E0B', regles: [
            'Carte taxi obligatoire',
            'Convention CPAM requise',
            'Transport assis simple uniquement',
          ]},
        ].map(cat => (
          <div key={cat.titre} style={{ background: '#0D1017', borderRadius: '12px', border: `1px solid ${cat.couleur}30`, padding: '20px' }}>
            <h3 style={{ color: cat.couleur, fontSize: '15px', fontWeight: '700', marginBottom: '12px' }}>{cat.titre}</h3>
            {cat.regles.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.couleur, flexShrink: 0 }} />
                <span style={{ color: '#E8ECF5', fontSize: '13px' }}>{r}</span>
              </div>
            ))}
            <div style={{ marginTop: '12px', padding: '10px', background: '#111622', borderRadius: '8px' }}>
              <textarea placeholder="Ajoutez vos règles spécifiques..." style={{ width: '100%', background: 'transparent', border: 'none', color: '#6B7A99', fontSize: '12px', resize: 'none', outline: 'none', minHeight: '60px', boxSizing: 'border-box' }} />
            </div>
          </div>
        ))}
        <button style={saveButtonStyle}>💾 Sauvegarder les règles diplômes</button>
      </div>
    </div>
  );
}

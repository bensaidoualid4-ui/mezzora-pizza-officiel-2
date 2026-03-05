import React from 'react';
import { formulesMidi } from '../data/menuData';

const FormulesMidi = () => (
  <div className="py-8 max-w-3xl mx-auto" data-testid="formules-midi-section">
    <div className="text-center mb-12">
      <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Du lundi au vendredi</p>
      <h2 className="font-serif text-3xl md:text-4xl font-normal italic text-[var(--cream)] mb-3">Formules Midi</h2>
      <p className="text-[var(--cream-muted)] text-sm">De 11h00 à 14h30</p>
    </div>

    <div className="space-y-6">
      {formulesMidi.map((f) => (
        <div key={f.id} data-testid={`formule-card-${f.id}`} className="flex justify-between items-start border-b border-white/5 pb-6">
          <div>
            <h3 className="font-serif text-xl text-[var(--cream)] mb-1">{f.name}</h3>
            <p className="text-[var(--cream-muted)] text-sm leading-relaxed max-w-md">{f.description}</p>
            {f.exclusions && <p className="text-[var(--gold)]/60 text-xs mt-1 italic">{f.exclusions}</p>}
          </div>
          <span className="text-[var(--gold)] font-serif text-xl flex-shrink-0 ml-6">{f.price.toFixed(2)}€</span>
        </div>
      ))}
    </div>
  </div>
);

export default FormulesMidi;

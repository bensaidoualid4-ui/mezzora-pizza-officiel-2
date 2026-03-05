import React from 'react';
import { formulesMidi } from '../data/menuData';
import { Clock, Award } from 'lucide-react';

const FormulesMidi = () => {
  return (
    <div className="py-8" data-testid="formules-midi-section">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
          <Clock className="w-4 h-4 text-amber-700" />
          <span className="text-amber-800 font-bold text-xs">Du lundi au vendredi</span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-mz-brown mb-2">
          Formules Midi
        </h2>
        <p className="text-mz-muted text-sm">
          De 11h00 à 14h30 — La pause déjeuner parfaite
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {formulesMidi.map((formule) => (
          <div
            key={formule.id}
            data-testid={`formule-card-${formule.id}`}
            className="warm-card p-5 rounded-2xl relative"
          >
            {formule.id === 'pizza-sandwich' && (
              <div className="absolute -top-2.5 -right-2.5 bg-mz-red text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                <Award className="w-3 h-3" />
                UNIQUE
              </div>
            )}
            
            <h3 className="text-base font-bold text-mz-brown mb-2">{formule.name}</h3>
            <p className="text-mz-muted text-sm leading-relaxed mb-2">{formule.description}</p>
            {formule.exclusions && (
              <p className="text-xs text-mz-red italic mb-3">{formule.exclusions}</p>
            )}
            <div className="flex items-center justify-end pt-2 border-t border-gray-100">
              <span className="text-xl font-bold text-mz-red">{formule.price.toFixed(2)} €</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-lg mx-auto">
        <div className="bg-green-50 p-5 rounded-2xl border border-green-200">
          <h4 className="font-bold text-sm text-mz-brown mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-mz-green" />
            Nos engagements fraîcheur
          </h4>
          <ul className="text-mz-muted text-xs space-y-1">
            <li>&#10003; 100% Pâte fraîche préparée chaque jour</li>
            <li>&#10003; Légumes frais quotidiennement</li>
            <li>&#10003; Viande fraîche de qualité</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormulesMidi;

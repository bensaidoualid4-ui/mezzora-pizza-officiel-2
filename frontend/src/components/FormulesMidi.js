import React from 'react';
import { formulesMidi } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Clock, Award } from 'lucide-react';

const FormulesMidi = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (formule) => {
    addToCart({
      id: formule.id,
      name: formule.name,
      price: formule.price,
      category: 'formule',
      size: 'standard',
    });
  };

  return (
    <section className="py-16 bg-white" id="formules">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
            <Clock className="w-5 h-5 text-yellow-700" />
            <span className="text-yellow-800 font-bold text-sm">Du lundi au vendredi</span>
          </div>
          <h2 className="section-title text-black mb-4">
            Formules Midi à 8,90€
          </h2>
          <p className="text-gray-600 text-lg">
            De 11h00 à 14h30 - La pause déjeuner parfaite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {formulesMidi.map((formule) => (
            <div
              key={formule.id}
              className="menu-card bg-card-bg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-500 relative"
            >
              {formule.id === 'pizza-sandwich' && (
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  UNIQUE
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-black mb-2">
                  {formule.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {formule.description}
                </p>
                {formule.exclusions && (
                  <p className="text-xs text-red-600 italic">
                    {formule.exclusions}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">
                  {formule.price.toFixed(2)} €
                </span>
                <button
                  onClick={() => handleAddToCart(formule)}
                  className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-semibold"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Ajouter
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <h4 className="font-bold text-lg text-black mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-green-600" />
              Nos engagements fraîcheur
            </h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ 100% Pâte fraîche préparée chaque jour</li>
              <li>✓ Légumes frais quotidiennement</li>
              <li>✓ Viande fraîche de qualité</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormulesMidi;

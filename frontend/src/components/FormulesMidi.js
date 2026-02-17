import React from 'react';
import { formulesMidi } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

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
          <h2 className="section-title text-black mb-4">
            Formules Midi à 8,90€
          </h2>
          <p className="text-gray-600 text-lg">
            Du lundi au vendredi, de 11h00 à 14h30
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {formulesMidi.map((formule) => (
            <div
              key={formule.id}
              className="menu-card bg-card-bg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-500"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-black mb-2">
                  {formule.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {formule.description}
                </p>
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

              {formule.id === 'le-switch' && (
                <div className="mt-3 bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
                  <p className="text-xs text-yellow-800 font-semibold">
                    ⭐ Exclusivité du midi
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormulesMidi;

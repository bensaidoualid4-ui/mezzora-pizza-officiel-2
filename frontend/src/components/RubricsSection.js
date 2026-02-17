import React, { useState } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

const RubricsSection = ({ onRubricSelect, activeRubric }) => {
  return (
    <section className="py-20 bg-primary-bg" id="rubrics">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-black mb-4">
            Comment souhaitez-vous commander ?
          </h2>
          <p className="text-gray-600 text-lg">
            Choisissez votre mode de commande préféré
          </p>
        </div>

        {/* Large Visual Cards - Style Burger King */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {/* Mezzora Table */}
          <button
            onClick={() => onRubricSelect('table')}
            className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 group ${
              activeRubric === 'table' ? 'ring-4 ring-green-500' : ''
            }`}
            style={{ height: '450px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <div className="bg-white/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">🍕</span>
                </div>
                <h3 className="text-4xl font-black mb-2 text-center" style={{ fontFamily: 'Impact, sans-serif' }}>
                  Mezzora<br />TABLE
                </h3>
                <p className="text-sm text-center opacity-90 mb-4">
                  Profitez de nos pizzas sur place
                </p>
                <div className="flex justify-center">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2">
                    Découvrir <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* Mezzora Delivery */}
          <button
            onClick={() => onRubricSelect('livraison')}
            className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 group ${
              activeRubric === 'livraison' ? 'ring-4 ring-blue-500' : ''
            }`}
            style={{ height: '450px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1526367790999-0150786686a2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold">
                OFFRE SPÉCIALE
              </div>
              
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <div className="bg-white/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">🚗</span>
                </div>
                <h3 className="text-4xl font-black mb-2 text-center" style={{ fontFamily: 'Impact, sans-serif' }}>
                  Mezzora<br />DELIVERY
                </h3>
                <p className="text-sm text-center opacity-90 mb-2">
                  Livraison à domicile rapide
                </p>
                <p className="text-xs text-center text-yellow-300 font-bold mb-4">
                  2 pizzas = 3ème OFFERTE !
                </p>
                <div className="flex justify-center">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2">
                    Commander <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* Mezzora Emporter (Click & Collect) */}
          <button
            onClick={() => onRubricSelect('emporter')}
            className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 group ${
              activeRubric === 'emporter' ? 'ring-4 ring-red-500' : ''
            }`}
            style={{ height: '450px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold">
                OFFRE SPÉCIALE
              </div>
              
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <div className="bg-white/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">
                    <ShoppingCart className="w-8 h-8" />
                  </span>
                </div>
                <h3 className="text-4xl font-black mb-2 text-center" style={{ fontFamily: 'Impact, sans-serif' }}>
                  Click &<br />COLLECT
                </h3>
                <p className="text-sm text-center opacity-90 mb-2">
                  Commandez et retirez rapidement
                </p>
                <p className="text-xs text-center text-yellow-300 font-bold mb-4">
                  2 pizzas = 3ème OFFERTE !
                </p>
                <div className="flex justify-center">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2">
                    Commander <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Découvrez nos classiques - Call to action */}
        <div className="text-center">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-2xl font-bold text-black hover:text-green-600 transition-colors"
          >
            Découvrez nos classiques
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RubricsSection;

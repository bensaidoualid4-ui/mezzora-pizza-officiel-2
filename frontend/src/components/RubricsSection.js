import React, { useState } from 'react';
import { Gift, ArrowRight, X } from 'lucide-react';
import MenuSection from './MenuSection';
import FormulesMidi from './FormulesMidi';

const RubricsSection = ({ onRubricSelect, activeRubric, onCloseMenu }) => {
  const [activeCategory, setActiveCategory] = useState('pizzas-tomate');

  // Si une rubrique est active, on affiche son contenu directement
  if (activeRubric) {
    const showCategoryTabs = activeRubric === 'menu' || activeRubric === 'offres';
    
    return (
      <section className="bg-primary-bg min-h-screen" id="rubrics">
        {/* BARRE STICKY UNIQUE avec navigation + catégories */}
        <div className="sticky top-16 z-40 bg-white shadow-lg">
          {/* Ligne 1: Navigation principale */}
          <div className="py-2 px-4 border-b">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={onCloseMenu}
                className="inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded-full font-bold hover:bg-gray-800 transition-all text-xs"
              >
                <X className="w-3 h-3" />
                <span className="hidden sm:inline">Retour</span>
              </button>

              <div className="flex flex-wrap gap-2 justify-center flex-1">
                <button
                  onClick={() => onRubricSelect('menu')}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all text-xs ${
                    activeRubric === 'menu' 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  🍕 Menu
                </button>
                <button
                  onClick={() => onRubricSelect('offres-midi')}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all text-xs ${
                    activeRubric === 'offres-midi' 
                      ? 'bg-yellow-500 text-black shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  ⏰ Formules
                </button>
                <button
                  onClick={() => onRubricSelect('offres')}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all text-xs ${
                    activeRubric === 'offres' 
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-red-100'
                  }`}
                >
                  🎁 Offres
                </button>
              </div>
            </div>
          </div>

          {/* Ligne 2: Onglets catégories (uniquement pour menu et offres) */}
          {showCategoryTabs && (
            <div className="py-2 px-2 overflow-x-auto scrollbar-hide">
              <div className="inline-flex gap-2 min-w-max">
                {[
                  { id: 'pizzas-tomate', label: '🍅 Tomate', color: 'bg-red-600' },
                  { id: 'pizzas-creme', label: '🧈 Crème', color: 'bg-yellow-500 text-black' },
                  { id: 'pizzas-bbq', label: '🔥 BBQ', color: 'bg-orange-600' },
                  { id: 'calzones', label: '🥟 Calzones', color: 'bg-purple-600' },
                  { id: 'pates', label: '🍝 Pâtes', color: 'bg-green-600' },
                  { id: 'paninis', label: '🥖 Paninis', color: 'bg-amber-600' },
                  { id: 'sandwichs', label: '🍔 Sandwichs', color: 'bg-orange-500' },
                  { id: 'texmex', label: '🌶️ Tex-Mex', color: 'bg-red-700' },
                  { id: 'salades', label: '🥗 Salades', color: 'bg-green-500' },
                  { id: 'desserts', label: '🍰 Desserts', color: 'bg-pink-500' },
                  { id: 'boissons', label: '🥤 Boissons', color: 'bg-blue-500' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveCategory(cat.id);
                      // Scroll vers le haut du contenu menu
                      document.getElementById('menu-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all text-sm ${
                      activeCategory === cat.id 
                        ? `${cat.color} text-white shadow-lg scale-105` 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contenu de la rubrique sélectionnée */}
        <div className="pb-6">
          {activeRubric === 'offres-midi' && (
            <div className="container mx-auto px-4 pt-6">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <FormulesMidi />
              </div>
            </div>
          )}
          {(activeRubric === 'menu' || activeRubric === 'offres') && (
            <MenuSection activeRubric={activeRubric} activeCategory={activeCategory} />
          )}
        </div>
      </section>
    );
  }

  // Affichage par défaut - Les grandes cartes visuelles
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Mezzora MENU */}
          <button
            onClick={() => onRubricSelect('menu')}
            className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 group"
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
                  Mezzora<br />MENU
                </h3>
                <p className="text-sm text-center opacity-90 mb-4">
                  Toutes nos spécialités italiennes
                </p>
                <div className="flex justify-center">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2">
                    Découvrir <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* Mezzora OFFRES MIDI */}
          <button
            onClick={() => onRubricSelect('offres-midi')}
            className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            style={{ height: '450px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <div className="bg-white/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">⏰</span>
                </div>
                <h3 className="text-4xl font-black mb-2 text-center" style={{ fontFamily: 'Impact, sans-serif' }}>
                  Mezzora<br />OFFRES MIDI
                </h3>
                <p className="text-sm text-center opacity-90 mb-2">
                  Formules complètes du midi
                </p>
                <p className="text-xs text-center text-yellow-300 font-bold mb-4">
                  11h00 - 14h30 • Lundi au Vendredi
                </p>
                <div className="flex justify-center">
                  <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2">
                    Découvrir <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* Click & COLLECT */}
          <button
            onClick={() => onRubricSelect('offres')}
            className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 group"
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
                OFFRE 2+1
              </div>
              
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <div className="bg-white/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">
                    <Gift className="w-8 h-8" />
                  </span>
                </div>
                <h3 className="text-4xl font-black mb-2 text-center" style={{ fontFamily: 'Impact, sans-serif' }}>
                  Nos<br />OFFRES
                </h3>
                <p className="text-sm text-center opacity-90 mb-4">
                  À emporter ou en livraison - Offres spéciales
                </p>
                <div className="flex justify-center">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2">
                    Découvrir <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RubricsSection;

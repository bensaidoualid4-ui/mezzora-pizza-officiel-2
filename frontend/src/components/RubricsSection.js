import React, { useState } from 'react';
import { X, UtensilsCrossed, Clock, Gift } from 'lucide-react';
import MenuSection from './MenuSection';
import FormulesMidi from './FormulesMidi';
import OffresSection from './OffresSection';

const RubricsSection = ({ onRubricSelect, activeRubric, onCloseMenu }) => {
  const [activeCategory, setActiveCategory] = useState('pizzas-tomate');

  const rubricTabs = [
    { id: 'menu', label: 'Notre Carte', icon: UtensilsCrossed, color: 'red' },
    { id: 'offres-midi', label: 'Formules Midi', icon: Clock, color: 'amber' },
    { id: 'offres', label: 'Offres Spéciales', icon: Gift, color: 'green' },
  ];

  const categoryTabs = [
    { id: 'pizzas-tomate', label: 'Base Tomate' },
    { id: 'pizzas-creme', label: 'Base Crème' },
    { id: 'pizzas-bbq', label: 'Base BBQ' },
    { id: 'calzones', label: 'Calzones' },
    { id: 'pates', label: 'Pâtes' },
    { id: 'paninis', label: 'Paninis' },
    { id: 'sandwichs', label: 'Sandwichs' },
    { id: 'texmex', label: 'Tex-Mex' },
    { id: 'salades', label: 'Salades' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'boissons', label: 'Boissons' },
  ];

  // Default view: show rubric selection tabs directly (no cards)
  if (!activeRubric) {
    return (
      <section className="py-14 md:py-20 bg-warm-dark" id="rubrics" data-testid="rubrics-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-mz-red font-semibold text-sm uppercase tracking-widest mb-2">Découvrir</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-mz-brown mb-4">
              Notre Carte
            </h2>
            <div className="w-16 h-1 bg-mz-red mx-auto rounded-full mb-4"></div>
            <p className="text-mz-muted text-base">
              Pizzas artisanales, formules midi et offres spéciales
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {rubricTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onRubricSelect(tab.id)}
                  data-testid={`rubric-btn-${tab.id}`}
                  className="warm-card rounded-2xl p-6 text-center group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors ${
                    tab.color === 'red' ? 'bg-red-50 group-hover:bg-red-100' :
                    tab.color === 'amber' ? 'bg-amber-50 group-hover:bg-amber-100' :
                    'bg-green-50 group-hover:bg-green-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      tab.color === 'red' ? 'text-mz-red' :
                      tab.color === 'amber' ? 'text-amber-600' :
                      'text-mz-green'
                    }`} />
                  </div>
                  <h3 className="font-bold text-mz-brown text-lg mb-1">{tab.label}</h3>
                  <p className="text-mz-muted text-xs">
                    {tab.id === 'menu' && 'Pizzas, pâtes, salades et plus'}
                    {tab.id === 'offres-midi' && 'Dès 8,90€ du lundi au vendredi'}
                    {tab.id === 'offres' && '2 achetées = la 3ème offerte'}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Active rubric view with sticky nav
  return (
    <section className="bg-warm min-h-screen" id="rubrics" data-testid="rubrics-active-section">
      {/* Sticky nav bar */}
      <div className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-md shadow-sm">
        {/* Rubric tabs */}
        <div className="py-2 px-4 border-b border-gray-100">
          <div className="container mx-auto flex items-center gap-2">
            <button
              onClick={onCloseMenu}
              data-testid="close-menu-btn"
              className="flex-shrink-0 inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-mz-brown px-3 py-1.5 rounded-full font-semibold text-xs transition-colors"
            >
              <X className="w-3 h-3" />
              <span className="hidden sm:inline">Fermer</span>
            </button>

            <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
              {rubricTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onRubricSelect(tab.id)}
                  data-testid={`tab-${tab.id}`}
                  className={`px-4 py-1.5 rounded-full font-semibold transition-all text-xs whitespace-nowrap ${
                    activeRubric === tab.id
                      ? 'bg-mz-red text-white shadow-md'
                      : 'bg-gray-100 text-mz-brown hover:bg-red-50 hover:text-mz-red'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category tabs (menu only) */}
        {activeRubric === 'menu' && (
          <div className="py-2 px-2 overflow-x-auto scrollbar-hide border-b border-gray-50">
            <div className="inline-flex gap-1.5 min-w-max px-2">
              {categoryTabs.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveCategory(cat.id);
                    document.getElementById('menu-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  data-testid={`cat-${cat.id}`}
                  className={`px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all text-xs ${
                    activeCategory === cat.id
                      ? 'bg-mz-brown text-white shadow-md'
                      : 'bg-gray-100 text-mz-muted hover:bg-gray-200 hover:text-mz-brown'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        {activeRubric === 'offres-midi' && (
          <div className="container mx-auto px-4 pt-6">
            <FormulesMidi />
          </div>
        )}
        {activeRubric === 'offres' && (
          <OffresSection />
        )}
        {activeRubric === 'menu' && (
          <MenuSection activeCategory={activeCategory} />
        )}
      </div>
    </section>
  );
};

export default RubricsSection;

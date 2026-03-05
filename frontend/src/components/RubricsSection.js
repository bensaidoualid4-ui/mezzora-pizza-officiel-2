import React, { useState } from 'react';
import { X } from 'lucide-react';
import MenuSection from './MenuSection';
import FormulesMidi from './FormulesMidi';
import OffresSection from './OffresSection';

const RubricsSection = ({ onRubricSelect, activeRubric, onCloseMenu }) => {
  const [activeCategory, setActiveCategory] = useState('pizzas-tomate');

  const tabs = [
    { id: 'menu', label: 'La Carte' },
    { id: 'offres-midi', label: 'Formules Midi' },
    { id: 'offres', label: 'Offres' },
  ];

  const categories = [
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

  if (!activeRubric) {
    return (
      <section className="py-24 md:py-32 border-t border-white/5" id="rubrics" data-testid="rubrics-section">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Découvrir</p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal italic text-[var(--cream)] mb-6">
            Notre Carte
          </h2>
          <div className="sep mb-12"></div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => onRubricSelect(t.id)} data-testid={`rubric-btn-${t.id}`}
                className="text-[var(--cream-muted)] hover:text-[var(--cream)] text-sm tracking-[0.15em] uppercase font-light transition-colors border-b border-white/10 hover:border-[var(--gold)] pb-2">
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen" id="rubrics" data-testid="rubrics-active-section">
      {/* Sticky nav */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-4">
            <button onClick={onCloseMenu} data-testid="close-menu-btn"
              className="text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors">
              <X className="w-4 h-4" />
            </button>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {tabs.map((t) => (
                <button key={t.id} onClick={() => onRubricSelect(t.id)} data-testid={`tab-${t.id}`}
                  className={`text-xs tracking-[0.15em] uppercase font-light whitespace-nowrap transition-colors pb-0.5 ${
                    activeRubric === t.id ? 'text-[var(--gold)] border-b border-[var(--gold)]' : 'text-[var(--cream-muted)] hover:text-[var(--cream)]'
                  }`}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {activeRubric === 'menu' && (
            <div className="mt-3 flex gap-3 overflow-x-auto scrollbar-hide pb-1">
              {categories.map((c) => (
                <button key={c.id} onClick={() => { setActiveCategory(c.id); document.getElementById('menu-content')?.scrollIntoView({ behavior: 'smooth' }); }}
                  data-testid={`cat-${c.id}`}
                  className={`text-[11px] tracking-wider uppercase whitespace-nowrap transition-colors ${
                    activeCategory === c.id ? 'text-[var(--cream)]' : 'text-[var(--cream-muted)] hover:text-[var(--cream)]'
                  }`}>
                  {c.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pb-16">
        {activeRubric === 'offres-midi' && <div className="container mx-auto px-6 pt-10"><FormulesMidi /></div>}
        {activeRubric === 'offres' && <OffresSection />}
        {activeRubric === 'menu' && <MenuSection activeCategory={activeCategory} />}
      </div>
    </section>
  );
};

export default RubricsSection;

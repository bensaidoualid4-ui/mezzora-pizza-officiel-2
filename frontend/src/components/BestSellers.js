import React from 'react';
import { ArrowRight } from 'lucide-react';

const bestSellers = [
  { id: 'pantagruelle', name: 'Pantagruelle', desc: 'Jambon, merguez, chorizo, oeuf, champignons, poivrons, olives', price: '17,00', image: '/images/menu/Pantagruelle.jpeg' },
  { id: 'chef', name: 'Chef', desc: 'Jambon, chorizo, merguez, oeuf, olives', price: '17,00', image: '/images/menu/Chef.jpeg' },
  { id: 'royale', name: 'Royale', desc: 'Jambon, câpres, champignons, poivrons, olives', price: '16,00', image: '/images/menu/Royale.jpeg' },
  { id: '4-fromages', name: '4 Fromages', desc: 'Mozzarella, chèvre, roquefort, camembert', price: '16,00', image: '/images/menu/4formages.jpeg' },
  { id: 'savoyarde', name: 'Savoyarde', desc: 'Crème, reblochon, lardons, pommes de terre', price: '16,00', image: '/images/menu/Savoyarde.jpeg' },
  { id: 'orientale', name: 'Orientale', desc: 'Merguez, poivrons, oignons', price: '16,00', image: '/images/menu/Orientale.jpeg' },
];

const BestSellers = ({ onViewMenu }) => {
  return (
    <section className="py-24 md:py-32" id="bestsellers" data-testid="bestsellers-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Nos incontournables</p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal italic text-[var(--cream)]">
            Les Plus Demandées
          </h2>
          <div className="sep mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {bestSellers.map((item) => (
            <div key={item.id} data-testid={`bestseller-${item.id}`}
              className="group cursor-pointer" onClick={() => onViewMenu && onViewMenu()}>
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img src={item.image} alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-[var(--cream)] mb-1">{item.name}</h3>
                  <p className="text-[var(--cream-muted)] text-xs leading-relaxed max-w-[200px]">{item.desc}</p>
                </div>
                <span className="text-[var(--gold)] font-serif text-lg">{item.price}€</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={() => onViewMenu && onViewMenu()} data-testid="view-full-menu-btn"
            className="inline-flex items-center gap-3 text-[var(--gold)] hover:text-[var(--cream)] text-sm tracking-[0.15em] uppercase font-light transition-colors border-b border-[var(--gold)]/30 hover:border-[var(--cream)]/30 pb-1">
            Voir toute la carte <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;

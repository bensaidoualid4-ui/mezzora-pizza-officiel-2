import React from 'react';
import { ArrowRight } from 'lucide-react';

const bestSellers = [
  { id: 'pantagruelle', name: 'Pantagruelle', price: '17,00', image: '/images/menu/Pantagruelle.jpeg' },
  { id: 'chef', name: 'Chef', price: '17,00', image: '/images/menu/Chef.jpeg' },
  { id: 'royale', name: 'Royale', price: '16,00', image: '/images/menu/Royale.jpeg' },
  { id: '4-fromages', name: '4 Fromages', price: '16,00', image: '/images/menu/4formages.jpeg' },
  { id: 'savoyarde', name: 'Savoyarde', price: '16,00', image: '/images/menu/Savoyarde.jpeg' },
  { id: 'orientale', name: 'Orientale', price: '16,00', image: '/images/menu/Orientale.jpeg' },
];

const BestSellers = ({ onViewMenu }) => {
  return (
    <section className="py-16 md:py-20 bg-mz-green-deep" id="bestsellers" data-testid="bestsellers-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-mz-gold font-semibold text-sm uppercase tracking-widest mb-2">Nos incontournables</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Les Plus Demandées
          </h2>
          <div className="w-16 h-1 bg-mz-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 max-w-6xl mx-auto mb-10">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              data-testid={`bestseller-${item.id}`}
              className="group cursor-pointer"
              onClick={() => onViewMenu && onViewMenu()}
            >
              <div className="relative rounded-2xl overflow-hidden mb-2 aspect-square ring-2 ring-white/10 group-hover:ring-mz-gold/50 transition-all">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-2">
                  <p className="text-white font-bold text-sm leading-tight drop-shadow">{item.name}</p>
                  <p className="text-mz-gold text-xs font-bold">{item.price}€</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onViewMenu && onViewMenu()}
            data-testid="view-full-menu-btn"
            className="inline-flex items-center gap-2 bg-mz-red hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
          >
            Voir toute la carte
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;

import React from 'react';

const OffresSection = () => (
  <div className="py-10" data-testid="offres-section">
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-[var(--red)] text-xs tracking-[0.3em] uppercase mb-4">Offres Spéciales</p>
        <h2 className="font-serif text-3xl md:text-4xl font-normal italic text-[var(--cream)] mb-3">Nos Promotions</h2>
        <div className="sep mt-6"></div>
      </div>

      {/* Main offer */}
      <div className="text-center mb-16">
        <p className="font-serif text-2xl md:text-3xl text-[var(--cream)] italic mb-2">2 Pizzas Achetées</p>
        <p className="font-serif text-4xl md:text-5xl text-[var(--red)] italic">= La 3ème Offerte</p>
        <p className="text-[var(--cream-muted)] text-xs mt-4">* Sauf Nordic & 1000 & 1 Nuits</p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div data-testid="offre-emporter">
          <h3 className="text-[var(--red)] text-xs tracking-[0.3em] uppercase mb-6">À Emporter</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-[var(--cream)]/10 pb-4">
              <div><p className="text-[var(--cream)] text-sm">2 Pizzas Senior</p><p className="text-[var(--red)] text-sm font-medium">+ 1 gratuite</p></div>
              <span className="text-[var(--gold)] font-serif text-lg">22,00€</span>
            </div>
            <div className="flex justify-between border-b border-[var(--cream)]/10 pb-4">
              <div><p className="text-[var(--cream)] text-sm">2 Pizzas Méga</p><p className="text-[var(--red)] text-sm font-medium">+ 1 gratuite</p></div>
              <span className="text-[var(--gold)] font-serif text-lg">27,00€</span>
            </div>
          </div>
        </div>

        <div data-testid="offre-livraison">
          <h3 className="text-[var(--red)] text-xs tracking-[0.3em] uppercase mb-6">Livraison</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-[var(--cream)]/10 pb-4">
              <div><p className="text-[var(--cream)] text-sm">2 Pizzas Senior</p><p className="text-[var(--red)] text-sm font-medium">+ 1 gratuite</p></div>
              <span className="text-[var(--gold)] font-serif text-lg">28,00€</span>
            </div>
            <div className="flex justify-between border-b border-[var(--cream)]/10 pb-4">
              <div><p className="text-[var(--cream)] text-sm">2 Pizzas Méga</p><p className="text-[var(--red)] text-sm font-medium">+ 1 gratuite</p></div>
              <span className="text-[var(--gold)] font-serif text-lg">36,00€</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-[var(--cream-muted)] text-sm">Livraison <span className="text-[var(--red)] font-medium">gratuite</span> dès 12€ le soir</p>
      </div>
    </div>
  </div>
);

export default OffresSection;

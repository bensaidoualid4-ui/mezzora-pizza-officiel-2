import React from 'react';
import { Gift, Truck, ShoppingBag, Star } from 'lucide-react';

const OffresSection = () => {
  return (
    <div className="bg-warm py-8" data-testid="offres-section">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
            <Gift className="w-4 h-4 text-mz-red" />
            <span className="text-mz-red font-bold text-xs">Offres Spéciales</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-mz-brown mb-2">
            Nos Promotions
          </h2>
          <p className="text-mz-muted text-sm">
            Profitez de nos offres en Click & Collect ou en livraison
          </p>
        </div>

        {/* Main 2+1 banner */}
        <div className="relative bg-mz-green rounded-2xl p-6 md:p-8 mb-6 text-white overflow-hidden" data-testid="offre-2plus1">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 text-center">
            <div className="inline-block bg-mz-gold text-green-900 px-4 py-1 rounded-full text-xs font-black mb-3 uppercase tracking-wide">
              Offre vedette
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-1">2 Pizzas Achetées</h3>
            <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-1">= La 3ème OFFERTE !</div>
            <p className="text-red-200 text-xs mt-3">* Sauf Nordic & 1000 & 1 Nuits</p>
          </div>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="warm-card rounded-2xl p-6" data-testid="offre-emporter">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-green-50 w-11 h-11 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-mz-green" />
              </div>
              <div>
                <h4 className="font-bold text-mz-brown">À Emporter</h4>
                <p className="text-xs text-mz-muted">Click & Collect en magasin</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-warm rounded-xl px-4 py-3">
                <div>
                  <p className="font-semibold text-mz-brown text-sm">2 Pizzas Senior</p>
                  <p className="text-xs text-mz-muted">+ 1 gratuite</p>
                </div>
                <span className="text-xl font-black text-mz-green">22,00 €</span>
              </div>
              <div className="flex items-center justify-between bg-warm rounded-xl px-4 py-3">
                <div>
                  <p className="font-semibold text-mz-brown text-sm">2 Pizzas Méga</p>
                  <p className="text-xs text-mz-muted">+ 1 gratuite</p>
                </div>
                <span className="text-xl font-black text-mz-green">27,00 €</span>
              </div>
            </div>
          </div>

          <div className="warm-card rounded-2xl p-6" data-testid="offre-livraison">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-50 w-11 h-11 rounded-xl flex items-center justify-center">
                <Truck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-mz-brown">Livraison</h4>
                <p className="text-xs text-mz-muted">Livré chez vous</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-warm rounded-xl px-4 py-3">
                <div>
                  <p className="font-semibold text-mz-brown text-sm">2 Pizzas Senior</p>
                  <p className="text-xs text-mz-muted">+ 1 gratuite</p>
                </div>
                <span className="text-xl font-black text-blue-600">28,00 €</span>
              </div>
              <div className="flex items-center justify-between bg-warm rounded-xl px-4 py-3">
                <div>
                  <p className="font-semibold text-mz-brown text-sm">2 Pizzas Méga</p>
                  <p className="text-xs text-mz-muted">+ 1 gratuite</p>
                </div>
                <span className="text-xl font-black text-blue-600">36,00 €</span>
              </div>
            </div>
          </div>
        </div>

        {/* Free delivery banner */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5 text-center" data-testid="offre-livraison-gratuite">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="font-bold text-mz-brown">Livraison GRATUITE</span>
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <p className="text-mz-muted text-sm">Dès 12€ de commande le soir — tous les jours !</p>
        </div>
      </div>
    </div>
  );
};

export default OffresSection;

import React from 'react';
import { Gift, Truck, ShoppingBag, Star } from 'lucide-react';

const OffresSection = () => {
  return (
    <div className="bg-white py-8" data-testid="offres-section">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Titre principal */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-100 px-5 py-2 rounded-full mb-4">
            <Gift className="w-5 h-5 text-red-600" />
            <span className="text-red-700 font-bold text-sm">Offres Spéciales</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            Nos Promotions
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Profitez de nos offres exceptionnelles en Click & Collect ou en livraison
          </p>
        </div>

        {/* Bannière principale 2+1 */}
        <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 md:p-8 mb-6 text-white overflow-hidden" data-testid="offre-2plus1">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 text-center">
            <div className="inline-block bg-yellow-400 text-red-800 px-4 py-1 rounded-full text-xs font-black mb-4 uppercase tracking-wide">
              Offre vedette
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-2">
              2 Pizzas Achetées
            </h3>
            <div className="text-5xl md:text-6xl font-black text-yellow-300 mb-2">
              = La 3ème OFFERTE !
            </div>
            <p className="text-red-200 text-xs mt-3">* Sauf Nordic & 1000 & 1 Nuits</p>
          </div>
        </div>

        {/* Les deux cartes côte à côte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

          {/* Carte À Emporter */}
          <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-green-400 transition-colors p-6" data-testid="offre-emporter">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">À Emporter</h4>
                <p className="text-xs text-gray-500">Click & Collect en magasin</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">2 Pizzas Senior</p>
                  <p className="text-xs text-gray-400">+ 1 gratuite</p>
                </div>
                <span className="text-xl font-black text-green-600">22,00 €</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">2 Pizzas Méga</p>
                  <p className="text-xs text-gray-400">+ 1 gratuite</p>
                </div>
                <span className="text-xl font-black text-green-600">27,00 €</span>
              </div>
            </div>
          </div>

          {/* Carte Livraison */}
          <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-colors p-6" data-testid="offre-livraison">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Livraison</h4>
                <p className="text-xs text-gray-500">Livré chez vous</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">2 Pizzas Senior</p>
                  <p className="text-xs text-gray-400">+ 1 gratuite</p>
                </div>
                <span className="text-xl font-black text-blue-600">28,00 €</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">2 Pizzas Méga</p>
                  <p className="text-xs text-gray-400">+ 1 gratuite</p>
                </div>
                <span className="text-xl font-black text-blue-600">36,00 €</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bannière livraison gratuite */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-300 p-5 text-center" data-testid="offre-livraison-gratuite">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-lg font-bold text-gray-900">Livraison GRATUITE</span>
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          </div>
          <p className="text-gray-600 text-sm">
            Dès 12€ de commande le soir — tous les jours !
          </p>
        </div>

      </div>
    </div>
  );
};

export default OffresSection;

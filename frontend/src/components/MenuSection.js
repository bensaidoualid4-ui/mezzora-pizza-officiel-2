import React from 'react';
import { 
  pizzasBaseTomate, 
  pizzasBaseCreme, 
  pizzasBaseBBQ,
  calzones,
  pates, 
  texMex, 
  salades,
  paninisClassiques,
  paninisGourmands,
  dessertsPatisseries,
  dessertsGlaces,
  boissons 
} from '../data/menuData';
import { Award } from 'lucide-react';

const MenuSection = ({ activeRubric = 'menu', activeCategory = 'pizzas-tomate' }) => {

  const PizzaCard = ({ pizza }) => {
    return (
      <div className="menu-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-500 relative">
        {pizza.premium && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Award className="w-3 h-3" />
            PREMIUM
          </div>
        )}
        <h3 className="text-xl font-bold text-black mb-2">{pizza.name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{pizza.ingredients}</p>

        <div className="border-t pt-4">
          <p className="text-xs text-gray-500 mb-2 font-semibold">Nos tailles :</p>
          <div className="flex gap-3 justify-between">
            <div className="text-center flex-1 bg-gray-50 rounded-lg py-2">
              <p className="text-xs text-gray-500">Junior</p>
              <p className="font-bold text-green-600">{pizza.junior.toFixed(2)}€</p>
            </div>
            <div className="text-center flex-1 bg-gray-50 rounded-lg py-2">
              <p className="text-xs text-gray-500">Senior</p>
              <p className="font-bold text-green-600">{pizza.senior.toFixed(2)}€</p>
            </div>
            <div className="text-center flex-1 bg-gray-50 rounded-lg py-2">
              <p className="text-xs text-gray-500">Méga</p>
              <p className="font-bold text-green-600">{pizza.mega.toFixed(2)}€</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SimpleItemCard = ({ item }) => (
    <div className="menu-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-500">
      <h3 className="text-xl font-bold text-black mb-2">{item.name}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {item.description || item.ingredients}
      </p>
      <div className="flex items-center justify-end">
        <span className="text-2xl font-bold text-green-600">
          {item.price.toFixed(2)} €
        </span>
      </div>
    </div>
  );

  return (
    <div className="bg-white py-6 scroll-mt-32" id="menu-content">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Click & Collect description */}
        {activeRubric === 'click-collect' && (
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-xl shadow-lg border-2 border-red-200">
              <h3 className="text-xl font-bold text-center text-black mb-4">
                🎁 OFFRES SPÉCIALES CLICK & COLLECT
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-xl shadow-md border-2 border-red-400">
                  <h4 className="text-lg font-bold text-red-600 mb-2">🛍️ À EMPORTER</h4>
                  <div className="bg-red-50 p-3 rounded-lg mb-2">
                    <p className="font-bold text-red-700 text-sm">2 Pizzas Achetées = La 3ème OFFERTE !</p>
                    <p className="text-xs text-gray-500 italic">* Sauf Nordic & 1000 & 1 Nuits</p>
                  </div>
                  <p className="text-sm text-gray-700">• 2 Pizzas Senior → 22,00 €</p>
                  <p className="text-sm text-gray-700">• 2 Pizzas Méga → 27,00 €</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md border-2 border-blue-400">
                  <h4 className="text-lg font-bold text-blue-600 mb-2">🚗 LIVRAISON</h4>
                  <p className="text-sm text-gray-700">• 2 Pizzas Senior → 28,00 €</p>
                  <p className="text-sm text-gray-700">• 2 Pizzas Méga → 36,00 €</p>
                  <div className="bg-yellow-100 p-2 rounded-lg mt-2">
                    <p className="text-xs text-yellow-800 font-semibold">🎁 Livraison GRATUITE dès 12€ le soir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contenu selon la catégorie active */}
        {activeCategory === 'pizzas-tomate' && (
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Pizzas Base Tomate</h3>
              <p className="text-gray-600">Nos pizzas traditionnelles sur base de sauce tomate</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseTomate.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'pizzas-creme' && (
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Pizzas Base Crème</h3>
              <p className="text-gray-600">Nos pizzas onctueuses sur base de crème fraîche</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseCreme.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'pizzas-bbq' && (
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Pizzas Base BBQ</h3>
              <p className="text-gray-600">Nos pizzas gourmandes sur base de sauce BBQ</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseBBQ.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'calzones' && (
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Calzones</h3>
              <p className="text-gray-600">Nos pizzas pliées et garnies généreusement</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calzones.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'pates' && (
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Pâtes</h3>
              <p className="text-gray-600">Nos penne fraîches avec sauce au choix</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pates.map((item) => (
                <SimpleItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'paninis' && (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Paninis Classiques</h3>
              <p className="text-gray-600 mb-4">Nos paninis traditionnels</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {paninisClassiques.map((item) => (
                  <SimpleItemCard key={item.id} item={item} category="paninis" />
                ))}
              </div>

              <h3 className="text-2xl font-bold text-black mb-2 mt-8">Paninis Gourmands</h3>
              <p className="text-gray-600 mb-4">Nos paninis spéciaux avec garnitures premium</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paninisGourmands.map((item) => (
                  <SimpleItemCard key={item.id} item={item} category="paninis" />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeCategory === 'texmex' && (
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Tex-Mex</h3>
              <p className="text-gray-600">Nos spécialités croustillantes et savoureuses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {texMex.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="texmex" />
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'salades' && (
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Salades</h3>
              <p className="text-gray-600">Nos grandes salades fraîches et complètes</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salades.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="salades" />
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'desserts' && (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Pâtisseries & Douceurs</h3>
              <p className="text-gray-600 mb-4">Nos desserts maison et spécialités sucrées</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {dessertsPatisseries.map((item) => (
                  <SimpleItemCard key={item.id} item={item} category="desserts" />
                ))}
              </div>

              <h3 className="text-2xl font-bold text-black mb-2 mt-8">Glaces Ben & Jerry's</h3>
              <p className="text-gray-600 mb-4">Nos pots de glace premium 465ml</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dessertsGlaces.map((item) => (
                  <SimpleItemCard key={item.id} item={item} category="desserts" />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeCategory === 'boissons' && (
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Boissons</h3>
              <p className="text-gray-600">Nos boissons pour accompagner votre repas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boissons.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="boissons" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuSection;

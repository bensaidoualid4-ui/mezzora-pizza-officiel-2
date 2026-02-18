import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
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
import { useCart } from '../context/CartContext';
import { ShoppingCart, Award } from 'lucide-react';

const MenuSection = ({ activeRubric = 'menu' }) => {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeSelect = (itemId, size) => {
    setSelectedSizes(prev => ({ ...prev, [itemId]: size }));
  };

  const handleAddPizzaToCart = (pizza) => {
    const size = selectedSizes[pizza.id] || 'junior';
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza[size],
      size: size,
      category: 'pizza',
      ingredients: pizza.ingredients,
    });
  };

  const handleAddItemToCart = (item, category) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      category: category,
      size: 'standard',
      description: item.description || item.ingredients,
    });
  };

  const PizzaCard = ({ pizza }) => {
    const selectedSize = selectedSizes[pizza.id] || 'junior';

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

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2 font-semibold">Choisir la taille :</p>
          <div className="flex gap-2">
            {['junior', 'senior', 'mega'].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(pizza.id, size)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
                <br />
                <span className="text-xs">{pizza[size].toFixed(2)}€</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleAddPizzaToCart(pizza)}
          className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 font-semibold"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    );
  };

  const SimpleItemCard = ({ item, category }) => (
    <div className="menu-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-500">
      <h3 className="text-xl font-bold text-black mb-2">{item.name}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {item.description || item.ingredients}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-green-600">
          {item.price.toFixed(2)} €
        </span>
        <button
          onClick={() => handleAddItemToCart(item, category)}
          className="bg-black hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-200 flex items-center justify-center"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white" id="menu">
      <div className="container mx-auto px-4">
        {/* Active Rubric Indicator */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-50 px-8 py-4 rounded-full shadow-md">
            <span className="text-gray-600 font-semibold">Mode sélectionné :</span>
            {activeRubric === 'menu' && (
              <span className="bg-green-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">
                🍕 Mezzora Menu
              </span>
            )}
            {activeRubric === 'click-collect' && (
              <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" /> Click & Collect
              </span>
            )}
          </div>
        </div>

        {/* Rubric Description */}
        <div className="max-w-4xl mx-auto mb-8">
          {activeRubric === 'menu' && (
            <div className="bg-green-50 p-6 rounded-xl shadow-md border-2 border-green-200">
              <p className="text-gray-700 font-semibold text-lg text-center">
                🍕 Découvrez toutes nos pizzas, pâtes, salades, tex-mex et plus encore
              </p>
            </div>
          )}
          {activeRubric === 'click-collect' && (
            <div className="bg-gradient-to-r from-red-50 to-blue-50 p-8 rounded-xl shadow-lg border-2 border-red-200">
              <h3 className="text-2xl font-bold text-center text-black mb-6">
                🎁 OFFRES SPÉCIALES CLICK & COLLECT
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* À Emporter */}
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-red-400">
                  <h4 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
                    🛍️ À EMPORTER
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-bold text-red-700 text-lg mb-2">
                        2 Pizzas Achetées = La 3ème OFFERTE !
                      </p>
                      <p className="text-xs text-gray-500 italic">
                        * Sauf Nordic & 1000 & 1 Nuits
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-700 mb-1">
                        💰 Offres spéciales :
                      </p>
                      <p className="text-sm text-gray-700">• 2 Pizzas Senior → 22,00 €</p>
                      <p className="text-sm text-gray-700">• 2 Pizzas Méga → 27,00 €</p>
                    </div>
                  </div>
                </div>

                {/* Livraison */}
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-400">
                  <h4 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                    🚗 LIVRAISON
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-bold text-blue-700 text-lg mb-2">
                        Tarifs Livraison
                      </p>
                      <p className="text-xs text-gray-600">
                        Commandez en ligne et recevez vos pizzas chaudes à domicile
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-700 mb-1">
                        💰 Nos tarifs :
                      </p>
                      <p className="text-sm text-gray-700">• 2 Pizzas Senior → 28,00 €</p>
                      <p className="text-sm text-gray-700">• 2 Pizzas Méga → 36,00 €</p>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <p className="text-sm text-yellow-800 font-semibold">
                        🎁 Frais de livraison GRATUITS le soir à partir de 12€
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg text-center border border-yellow-300">
                <p className="text-sm text-gray-700">
                  <strong>🌟 Conseil :</strong> Profitez de notre offre 2+1 pour les pizzas Sénior et Méga !
                </p>
              </div>
            </div>
          )}
        </div>

        <Tabs defaultValue="pizzas-tomate" className="w-full" onValueChange={() => {
          // Scroll to top of menu section when tab changes
          setTimeout(() => {
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }}>
          <div className="sticky top-20 z-20 bg-white shadow-lg py-6 mb-8 border-b-4 border-primary-bg">
            <TabsList className="flex flex-wrap justify-center gap-3 bg-white px-4">
              <TabsTrigger value="pizzas-tomate" className="px-6 py-3 font-bold bg-white border-2 border-gray-300 data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:border-red-600 rounded-lg transition-all">🍅 Base Tomate</TabsTrigger>
              <TabsTrigger value="pizzas-creme" className="px-6 py-3 font-bold bg-white border-2 border-gray-300 data-[state=active]:bg-yellow-500 data-[state=active]:text-black data-[state=active]:border-yellow-500 rounded-lg transition-all">🧈 Base Crème</TabsTrigger>
              <TabsTrigger value="pizzas-bbq" className="px-6 py-3 font-bold bg-white border-2 border-gray-300 data-[state=active]:bg-orange-600 data-[state=active]:text-white data-[state=active]:border-orange-600 rounded-lg transition-all">🔥 Base BBQ</TabsTrigger>
              <TabsTrigger value="calzones" className="px-6 py-3 font-bold bg-white border-2 border-gray-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:border-purple-600 rounded-lg transition-all">🥟 Calzones</TabsTrigger>
              <TabsTrigger value="pates" className="px-6 py-3 font-bold bg-white border-2 border-gray-300 data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:border-green-600 rounded-lg transition-all">🍝 Pâtes</TabsTrigger>
              <TabsTrigger value="paninis" className="px-6 py-3 font-bold bg-white border-2 border-gray-300 data-[state=active]:bg-amber-600 data-[state=active]:text-white data-[state=active]:border-amber-600 rounded-lg transition-all">🥖 Paninis</TabsTrigger>
              <TabsTrigger value="texmex" className="px-6 py-3 font-bold bg-white border-2 border-gray-300 data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:border-red-700 rounded-lg transition-all">🌶️ Tex-Mex</TabsTrigger>
              <TabsTrigger value="salades" className="px-6 py-3 font-bold bg-white border-2 border-gray-300 data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:border-green-500 rounded-lg transition-all">🥗 Salades</TabsTrigger>
              <TabsTrigger value="desserts" className="px-6 py-3 font-bold bg-white border-2 border-gray-300 data-[state=active]:bg-pink-500 data-[state=active]:text-white data-[state=active]:border-pink-500 rounded-lg transition-all">🍰 Desserts</TabsTrigger>
              <TabsTrigger value="boissons" className="px-6 py-3 font-bold bg-white border-2 border-gray-300 data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-blue-500 rounded-lg transition-all">🥤 Boissons</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="pizzas-tomate">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Pizzas Base Tomate</h3>
              <p className="text-gray-600">Nos pizzas traditionnelles sur base de sauce tomate</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseTomate.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pizzas-creme">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Pizzas Base Crème</h3>
              <p className="text-gray-600">Nos pizzas onctueuses sur base de crème fraîche</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseCreme.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pizzas-bbq">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Pizzas Base BBQ</h3>
              <p className="text-gray-600">Nos pizzas gourmandes sur base de sauce BBQ</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseBBQ.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calzones">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Calzones</h3>
              <p className="text-gray-600">Nos pizzas pliées et garnies généreusement</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calzones.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pates">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Pâtes</h3>
              <p className="text-gray-600">Nos penne fraîches avec sauce au choix</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pates.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="pates" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="paninis">
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
          </TabsContent>

          <TabsContent value="texmex">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Tex-Mex</h3>
              <p className="text-gray-600">Nos spécialités croustillantes et savoureuses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {texMex.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="texmex" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="salades">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Salades</h3>
              <p className="text-gray-600">Nos grandes salades fraîches et complètes</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salades.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="salades" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts">
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
          </TabsContent>

          <TabsContent value="boissons">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Boissons</h3>
              <p className="text-gray-600">Nos boissons pour accompagner votre repas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boissons.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="boissons" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;

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
  desserts, 
  boissons 
} from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Flame, Award } from 'lucide-react';

const MenuSection = () => {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});
  const [activeRubric, setActiveRubric] = useState('table');

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
          <ShoppingCart className="w-4 h-4" />
          Ajouter au panier
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
          className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-semibold"
        >
          <ShoppingCart className="w-4 h-4" />
          Ajouter
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-primary-bg" id="menu">
      <div className="container mx-auto px-4">
        {/* Header with Rubrics */}
        <div className="text-center mb-8">
          <h2 className="section-title text-black mb-6">Notre Menu</h2>
          
          {/* Rubrics Style Burger King */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveRubric('table')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeRubric === 'table'
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              <Flame className="w-5 h-5 inline-block mr-2" />
              Mezzora Table
            </button>
            <button
              onClick={() => setActiveRubric('emporter')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeRubric === 'emporter'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              <ShoppingCart className="w-5 h-5 inline-block mr-2" />
              Mezzora Emporter
            </button>
            <button
              onClick={() => setActiveRubric('livraison')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeRubric === 'livraison'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              🚗 Mezzora Livraison
            </button>
          </div>

          {/* Rubric Description */}
          <div className="max-w-3xl mx-auto mb-8">
            {activeRubric === 'table' && (
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700 font-semibold text-lg">
                  Toutes nos pizzas, pâtes, salades et plus à déguster sur place
                </p>
              </div>
            )}
            {activeRubric === 'emporter' && (
              <div className="bg-red-50 p-6 rounded-xl shadow-md border-2 border-red-200">
                <p className="text-gray-700 font-semibold text-lg mb-2">
                  🎁 OFFRE SPÉCIALE À EMPORTER
                </p>
                <p className="text-red-600 font-bold text-2xl">
                  2 Pizzas Achetées = La 3ème OFFERTE !
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Sur pizzas Sénior et Méga uniquement (sauf Nordic & 1000 & 1 Nuits)
                </p>
              </div>
            )}
            {activeRubric === 'livraison' && (
              <div className="bg-blue-50 p-6 rounded-xl shadow-md border-2 border-blue-200">
                <p className="text-gray-700 font-semibold text-lg mb-2">
                  🚗 LIVRAISON À DOMICILE
                </p>
                <p className="text-blue-600 font-bold text-2xl">
                  2 Pizzas Achetées = La 3ème OFFERTE !
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Sur pizzas Sénior et Méga uniquement + Frais de livraison 6€
                </p>
              </div>
            )}
          </div>
        </div>

        <Tabs defaultValue="pizzas-tomate" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent">
            <TabsTrigger value="pizzas-tomate" className="px-6 py-3">Pizzas Base Tomate</TabsTrigger>
            <TabsTrigger value="pizzas-creme" className="px-6 py-3">Pizzas Base Crème</TabsTrigger>
            <TabsTrigger value="pizzas-bbq" className="px-6 py-3">Pizzas Base BBQ</TabsTrigger>
            <TabsTrigger value="calzones" className="px-6 py-3">Calzones</TabsTrigger>
            <TabsTrigger value="pates" className="px-6 py-3">Pâtes</TabsTrigger>
            <TabsTrigger value="paninis" className="px-6 py-3">Paninis</TabsTrigger>
            <TabsTrigger value="texmex" className="px-6 py-3">Tex-Mex</TabsTrigger>
            <TabsTrigger value="salades" className="px-6 py-3">Salades</TabsTrigger>
            <TabsTrigger value="desserts" className="px-6 py-3">Desserts</TabsTrigger>
            <TabsTrigger value="boissons" className="px-6 py-3">Boissons</TabsTrigger>
          </TabsList>

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
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Desserts</h3>
              <p className="text-gray-600">Nos douceurs pour terminer en beauté</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {desserts.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="desserts" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="boissons">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">Boissons</h3>
              <p className="text-gray-600">Nos boissons pour accompagner votre repas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-6">
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

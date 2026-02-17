import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  pizzasBaseTomate, 
  pizzasBaseCreme, 
  pizzasBaseBBQ, 
  pates, 
  texMex, 
  salades, 
  desserts, 
  boissons 
} from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const MenuSection = () => {
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
      <div className="menu-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-500">
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
        <div className="text-center mb-12">
          <h2 className="section-title text-black mb-4">Notre Menu</h2>
          <p className="text-gray-600 text-lg">
            Découvrez nos spécialités italiennes préparées avec passion
          </p>
        </div>

        <Tabs defaultValue="pizzas-tomate" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent">
            <TabsTrigger value="pizzas-tomate" className="px-6 py-3">Pizzas Base Tomate</TabsTrigger>
            <TabsTrigger value="pizzas-creme" className="px-6 py-3">Pizzas Base Crème</TabsTrigger>
            <TabsTrigger value="pizzas-bbq" className="px-6 py-3">Pizzas Base BBQ</TabsTrigger>
            <TabsTrigger value="pates" className="px-6 py-3">Pâtes</TabsTrigger>
            <TabsTrigger value="texmex" className="px-6 py-3">Tex-Mex</TabsTrigger>
            <TabsTrigger value="salades" className="px-6 py-3">Salades</TabsTrigger>
            <TabsTrigger value="desserts" className="px-6 py-3">Desserts</TabsTrigger>
            <TabsTrigger value="boissons" className="px-6 py-3">Boissons</TabsTrigger>
          </TabsList>

          <TabsContent value="pizzas-tomate">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseTomate.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pizzas-creme">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseCreme.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pizzas-bbq">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzasBaseBBQ.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pates.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="pates" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="texmex">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {texMex.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="texmex" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="salades">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salades.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="salades" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {desserts.map((item) => (
                <SimpleItemCard key={item.id} item={item} category="desserts" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="boissons">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

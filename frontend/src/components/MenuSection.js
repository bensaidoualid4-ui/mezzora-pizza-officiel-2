import React from 'react';
import { 
  pizzasBaseTomate, 
  pizzasBaseCreme, 
  pizzasBaseBBQ,
  calzones,
  pates, 
  texMex,
  sandwichs,
  salades,
  paninisClassiques,
  paninisGourmands,
  dessertsPatisseries,
  dessertsGlaces,
  boissons 
} from '../data/menuData';
import { Award } from 'lucide-react';

const MenuSection = ({ activeCategory = 'pizzas-tomate' }) => {

  const PizzaCard = ({ pizza }) => (
    <div className="warm-card rounded-2xl overflow-hidden" data-testid={`pizza-card-${pizza.id}`}>
      {pizza.image && (
        <div className="h-44 overflow-hidden">
          <img 
            src={pizza.image} 
            alt={pizza.name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
      )}
      <div className="p-5">
        {pizza.premium && (
          <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full text-xs font-bold mb-2">
            <Award className="w-3 h-3" />
            PREMIUM
          </div>
        )}
        <h3 className="text-lg font-bold text-mz-text mb-1">{pizza.name}</h3>
        <p className="text-mz-muted text-sm mb-4 leading-relaxed">{pizza.ingredients}</p>
        <div className="border-t border-gray-100 pt-3">
          <div className="flex gap-2 justify-between">
            <div className="text-center flex-1 bg-mz-teal-light rounded-lg py-2">
              <p className="text-xs text-mz-muted">Junior</p>
              <p className="font-bold text-mz-green text-sm">{pizza.junior.toFixed(2)}€</p>
            </div>
            <div className="text-center flex-1 bg-mz-teal-light rounded-lg py-2">
              <p className="text-xs text-mz-muted">Senior</p>
              <p className="font-bold text-mz-green text-sm">{pizza.senior.toFixed(2)}€</p>
            </div>
            <div className="text-center flex-1 bg-mz-teal-light rounded-lg py-2">
              <p className="text-xs text-mz-muted">Méga</p>
              <p className="font-bold text-mz-green text-sm">{pizza.mega.toFixed(2)}€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SimpleItemCard = ({ item }) => (
    <div className="warm-card rounded-2xl overflow-hidden" data-testid={`item-card-${item.id}`}>
      {item.image && (
        <div className="h-40 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-bold text-mz-text mb-1">{item.name}</h3>
        <p className="text-mz-muted text-sm mb-4 leading-relaxed">
          {item.description || item.ingredients}
        </p>
        <div className="flex items-center justify-end">
          <span className="text-xl font-bold text-mz-green">{item.price.toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );

  const SectionHeader = ({ title, subtitle }) => (
    <div className="mb-5">
      <h3 className="text-xl font-bold text-mz-text mb-1">{title}</h3>
      <p className="text-mz-muted text-sm">{subtitle}</p>
    </div>
  );

  return (
    <div className="bg-white py-6 scroll-mt-32" id="menu-content" data-testid="menu-content">
      <div className="container mx-auto px-4 max-w-7xl">
        {activeCategory === 'pizzas-tomate' && (
          <div>
            <SectionHeader title="Pizzas Base Tomate" subtitle="Nos pizzas traditionnelles sur base de sauce tomate" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pizzasBaseTomate.map((pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}
            </div>
          </div>
        )}

        {activeCategory === 'pizzas-creme' && (
          <div>
            <SectionHeader title="Pizzas Base Crème" subtitle="Nos pizzas onctueuses sur base de crème fraîche" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pizzasBaseCreme.map((pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}
            </div>
          </div>
        )}

        {activeCategory === 'pizzas-bbq' && (
          <div>
            <SectionHeader title="Pizzas Base BBQ" subtitle="Nos pizzas gourmandes sur base de sauce BBQ" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pizzasBaseBBQ.map((pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}
            </div>
          </div>
        )}

        {activeCategory === 'calzones' && (
          <div>
            <SectionHeader title="Calzones" subtitle="Nos pizzas pliées et garnies généreusement" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {calzones.map((pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}
            </div>
          </div>
        )}

        {activeCategory === 'pates' && (
          <div>
            <SectionHeader title="Pâtes" subtitle="Nos penne fraîches avec sauce au choix" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pates.map((item) => <SimpleItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeCategory === 'paninis' && (
          <div>
            <SectionHeader title="Paninis Classiques" subtitle="Nos paninis traditionnels" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {paninisClassiques.map((item) => <SimpleItemCard key={item.id} item={item} />)}
            </div>
            <SectionHeader title="Paninis Gourmands" subtitle="Nos paninis spéciaux avec garnitures premium" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {paninisGourmands.map((item) => <SimpleItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeCategory === 'texmex' && (
          <div>
            <SectionHeader title="Tex-Mex" subtitle="Nos spécialités croustillantes et savoureuses" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {texMex.map((item) => <SimpleItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeCategory === 'sandwichs' && (
          <div>
            <SectionHeader title="Sandwichs" subtitle="Nos sandwichs gourmands" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sandwichs.map((item) => <SimpleItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeCategory === 'salades' && (
          <div>
            <SectionHeader title="Salades" subtitle="Nos grandes salades fraîches et complètes" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {salades.map((item) => <SimpleItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeCategory === 'desserts' && (
          <div>
            <SectionHeader title="Pâtisseries & Douceurs" subtitle="Nos desserts maison et spécialités sucrées" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {dessertsPatisseries.map((item) => <SimpleItemCard key={item.id} item={item} />)}
            </div>
            <SectionHeader title="Glaces Ben & Jerry's" subtitle="Nos pots de glace premium" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {dessertsGlaces.map((item) => <SimpleItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {activeCategory === 'boissons' && (
          <div>
            <SectionHeader title="Boissons" subtitle="Nos boissons pour accompagner votre repas" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {boissons.map((item) => <SimpleItemCard key={item.id} item={item} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuSection;

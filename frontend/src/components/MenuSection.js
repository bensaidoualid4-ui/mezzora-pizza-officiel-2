import React from 'react';
import { 
  pizzasBaseTomate, pizzasBaseCreme, pizzasBaseBBQ, calzones, pates, texMex,
  sandwichs, salades, paninisClassiques, paninisGourmands, dessertsPatisseries, dessertsGlaces, boissons 
} from '../data/menuData';

const MenuSection = ({ activeCategory = 'pizzas-tomate' }) => {

  const PizzaCard = ({ pizza }) => (
    <div className="group" data-testid={`pizza-card-${pizza.id}`}>
      {pizza.image && (
        <div className="aspect-square rounded-lg overflow-hidden mb-3 shadow-md">
          <img src={pizza.image} alt={pizza.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => e.target.style.display='none'} />
        </div>
      )}
      <h3 className="font-serif text-lg text-[var(--cream)] mb-1">{pizza.name}</h3>
      <p className="text-[var(--cream-muted)] text-xs leading-relaxed mb-3">{pizza.ingredients}</p>
      <div className="flex gap-4 text-xs">
        <span className="text-[var(--cream-muted)]">Junior <span className="text-[var(--red)] font-medium">{pizza.junior.toFixed(2)}€</span></span>
        <span className="text-[var(--cream-muted)]">Senior <span className="text-[var(--red)] font-medium">{pizza.senior.toFixed(2)}€</span></span>
        <span className="text-[var(--cream-muted)]">Méga <span className="text-[var(--red)] font-medium">{pizza.mega.toFixed(2)}€</span></span>
      </div>
    </div>
  );

  const SimpleCard = ({ item }) => (
    <div className="group" data-testid={`item-card-${item.id}`}>
      {item.image && (
        <div className="aspect-square rounded-lg overflow-hidden mb-3 shadow-md">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => e.target.style.display='none'} />
        </div>
      )}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-lg text-[var(--cream)] mb-1">{item.name}</h3>
          <p className="text-[var(--cream-muted)] text-xs leading-relaxed max-w-[220px]">{item.description || item.ingredients}</p>
        </div>
        <span className="text-[var(--red)] font-serif text-lg font-medium flex-shrink-0">{item.price.toFixed(2)}€</span>
      </div>
    </div>
  );

  const Header = ({ title, sub }) => (
    <div className="mb-8">
      <h3 className="font-serif text-2xl italic text-[var(--cream)]">{title}</h3>
      <p className="text-[var(--cream-muted)] text-xs tracking-wider mt-1">{sub}</p>
    </div>
  );

  const Grid = ({ children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">{children}</div>
  );

  return (
    <div className="py-10 scroll-mt-40" id="menu-content" data-testid="menu-content">
      <div className="container mx-auto px-6 max-w-5xl">
        {activeCategory === 'pizzas-tomate' && (<><Header title="Pizzas Base Tomate" sub="Nos pizzas traditionnelles" /><Grid>{pizzasBaseTomate.map(p => <PizzaCard key={p.id} pizza={p} />)}</Grid></>)}
        {activeCategory === 'pizzas-creme' && (<><Header title="Pizzas Base Crème" sub="Nos pizzas onctueuses" /><Grid>{pizzasBaseCreme.map(p => <PizzaCard key={p.id} pizza={p} />)}</Grid></>)}
        {activeCategory === 'pizzas-bbq' && (<><Header title="Pizzas Base BBQ" sub="Nos pizzas gourmandes" /><Grid>{pizzasBaseBBQ.map(p => <PizzaCard key={p.id} pizza={p} />)}</Grid></>)}
        {activeCategory === 'calzones' && (<><Header title="Calzones" sub="Nos pizzas pliées" /><Grid>{calzones.map(p => <PizzaCard key={p.id} pizza={p} />)}</Grid></>)}
        {activeCategory === 'pates' && (<><Header title="Pâtes" sub="Nos penne fraîches" /><Grid>{pates.map(i => <SimpleCard key={i.id} item={i} />)}</Grid></>)}
        {activeCategory === 'paninis' && (<><Header title="Paninis" sub="Classiques & Gourmands" /><Grid>{[...paninisClassiques, ...paninisGourmands].map(i => <SimpleCard key={i.id} item={i} />)}</Grid></>)}
        {activeCategory === 'texmex' && (<><Header title="Tex-Mex" sub="Nos spécialités" /><Grid>{texMex.map(i => <SimpleCard key={i.id} item={i} />)}</Grid></>)}
        {activeCategory === 'sandwichs' && (<><Header title="Sandwichs" sub="Nos sandwichs" /><Grid>{sandwichs.map(i => <SimpleCard key={i.id} item={i} />)}</Grid></>)}
        {activeCategory === 'salades' && (<><Header title="Salades" sub="Nos salades fraîches" /><Grid>{salades.map(i => <SimpleCard key={i.id} item={i} />)}</Grid></>)}
        {activeCategory === 'desserts' && (<><Header title="Desserts" sub="Nos douceurs" /><Grid>{[...dessertsPatisseries, ...dessertsGlaces].map(i => <SimpleCard key={i.id} item={i} />)}</Grid></>)}
        {activeCategory === 'boissons' && (<><Header title="Boissons" sub="Pour accompagner" /><Grid>{boissons.map(i => <SimpleCard key={i.id} item={i} />)}</Grid></>)}
      </div>
    </div>
  );
};

export default MenuSection;

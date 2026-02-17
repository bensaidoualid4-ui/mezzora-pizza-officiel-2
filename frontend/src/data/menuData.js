// Menu data for Mezzora Pizza

export const pizzasBaseTomate = [
  { id: 'royale', name: 'Royale', ingredients: 'Tomate, mozzarella, jambon, champignons', junior: 8.5, senior: 11.0, mega: 14.0 },
  { id: 'margherita', name: 'Margherita', ingredients: 'Tomate, mozzarella, basilic frais', junior: 7.0, senior: 9.5, mega: 12.0 },
  { id: 'orientale', name: 'Orientale', ingredients: 'Tomate, mozzarella, merguez, poivrons, oignons', junior: 8.5, senior: 11.0, mega: 14.0 },
  { id: 'mezzora', name: 'Mezzora', ingredients: 'Tomate, mozzarella, viande hachée, œuf, oignons', junior: 9.0, senior: 11.5, mega: 14.5 },
  { id: 'regina', name: 'Regina', ingredients: 'Tomate, mozzarella, jambon, champignons, olives', junior: 8.5, senior: 11.0, mega: 14.0 },
  { id: 'napolitaine', name: 'Napolitaine', ingredients: 'Tomate, mozzarella, anchois, câpres, olives', junior: 8.5, senior: 11.0, mega: 14.0 },
  { id: 'quatre-saisons', name: 'Quatre Saisons', ingredients: 'Tomate, mozzarella, jambon, champignons, artichauts, olives', junior: 9.0, senior: 11.5, mega: 14.5 },
];

export const pizzasBaseCreme = [
  { id: 'savoyarde', name: 'Savoyarde', ingredients: 'Crème fraîche, mozzarella, pommes de terre, lardons, oignons', junior: 9.0, senior: 11.5, mega: 14.5 },
  { id: 'nordic', name: 'Nordic', ingredients: 'Crème fraîche, mozzarella, saumon fumé, aneth', junior: 10.0, senior: 12.5, mega: 15.5 },
  { id: 'mille-nuits', name: '1000 & 1 Nuits', ingredients: 'Crème fraîche, mozzarella, poulet, champignons, curry', junior: 9.0, senior: 11.5, mega: 14.5 },
  { id: 'chevre-miel', name: 'Chèvre Miel', ingredients: 'Crème fraîche, mozzarella, chèvre, miel, noix', junior: 9.5, senior: 12.0, mega: 15.0 },
  { id: 'tartiflette', name: 'Tartiflette', ingredients: 'Crème fraîche, mozzarella, pommes de terre, reblochon, lardons', junior: 9.5, senior: 12.0, mega: 15.0 },
];

export const pizzasBaseBBQ = [
  { id: 'bbq-chicken', name: 'BBQ Chicken', ingredients: 'Sauce BBQ, mozzarella, poulet grillé, oignons rouges', junior: 9.0, senior: 11.5, mega: 14.5 },
  { id: 'bbq-beef', name: 'BBQ Beef', ingredients: 'Sauce BBQ, mozzarella, bœuf, poivrons, oignons', junior: 9.5, senior: 12.0, mega: 15.0 },
];

export const pates = [
  { id: 'bolognaise', name: 'Penne Bolognaise', description: 'Sauce tomate, viande hachée, parmesan', price: 9.0 },
  { id: 'carbonara', name: 'Penne Carbonara', description: 'Crème fraîche, lardons, parmesan, œuf', price: 9.5 },
  { id: 'fermiere', name: 'Penne Fermière', description: 'Crème fraîche, poulet, champignons, parmesan', price: 9.5 },
  { id: 'napolitaine-penne', name: 'Penne Napolitaine', description: 'Sauce tomate, ail, basilic, parmesan', price: 8.5 },
  { id: 'saumon', name: 'Penne Saumon', description: 'Crème fraîche, saumon, aneth, parmesan', price: 10.5 },
];

export const texMex = [
  { id: 'nuggets', name: 'Nuggets de Poulet', description: '6 pièces avec sauce au choix', price: 5.5 },
  { id: 'wings', name: 'Chicken Wings', description: '6 pièces épicées avec sauce', price: 6.5 },
  { id: 'mozza-sticks', name: 'Mozza Sticks', description: '6 bâtonnets de mozzarella panés', price: 5.5 },
  { id: 'tenders', name: 'Tenders de Poulet', description: '4 pièces croustillantes avec sauce', price: 6.0 },
];

export const salades = [
  { id: 'nicoise', name: 'Salade Niçoise', description: 'Salade, tomates, œuf, thon, olives, oignons', price: 8.5 },
  { id: 'norvegienne', name: 'Salade Norvégienne', description: 'Salade, saumon fumé, avocat, tomates cerises', price: 9.5 },
  { id: 'italienne', name: 'Salade Italienne', description: 'Salade, mozzarella, tomates, basilic, huile d\'olive', price: 8.0 },
  { id: 'fromagere', name: 'Salade Fromagère', description: 'Salade, chèvre chaud, noix, miel, tomates', price: 9.0 },
  { id: 'chevre-chaud', name: 'Salade Chèvre Chaud', description: 'Salade, chèvre sur toast, miel, noix', price: 9.0 },
];

export const desserts = [
  { id: 'tiramisu', name: 'Tiramisu Maison', description: 'Spécialité italienne au café', price: 4.5 },
  { id: 'tarte-daim', name: 'Tarte Daim', description: 'Tarte au caramel et amandes', price: 4.0 },
  { id: 'bj-100', name: 'Ben & Jerry\'s 100ml', description: 'Parfum au choix', price: 3.5 },
  { id: 'bj-465', name: 'Ben & Jerry\'s 465ml', description: 'Pot familial, parfum au choix', price: 8.5 },
  { id: 'panini-nutella', name: 'Panini Nutella', description: 'Panini chaud au Nutella', price: 3.5 },
];

export const boissons = [
  { id: 'coca-33', name: 'Coca-Cola 33cl', price: 2.0 },
  { id: 'coca-50', name: 'Coca-Cola 50cl', price: 3.0 },
  { id: 'coca-1l', name: 'Coca-Cola 1L', price: 4.0 },
  { id: 'coca-15l', name: 'Coca-Cola 1.5L', price: 5.0 },
  { id: 'coca-2l', name: 'Coca-Cola 2L', price: 6.0 },
  { id: 'fanta-33', name: 'Fanta 33cl', price: 2.0 },
  { id: 'sprite-33', name: 'Sprite 33cl', price: 2.0 },
  { id: 'ice-tea-33', name: 'Ice Tea 33cl', price: 2.0 },
  { id: 'eau-50', name: 'Eau 50cl', price: 1.5 },
  { id: 'eau-1l', name: 'Eau 1L', price: 2.5 },
  { id: 'perrier-33', name: 'Perrier 33cl', price: 2.5 },
];

export const formulesMidi = [
  {
    id: 'formule-pizza',
    name: 'Menu Pizza',
    description: 'Pizza Junior + Boisson 33cl',
    price: 8.9,
  },
  {
    id: 'formule-pates',
    name: 'Menu Pâtes',
    description: 'Penne au choix + Boisson 33cl',
    price: 8.9,
  },
  {
    id: 'formule-salade',
    name: 'Menu Salade',
    description: 'Salade au choix + Pain maison + Boisson 33cl',
    price: 8.9,
  },
  {
    id: 'le-switch',
    name: 'Le Switch',
    description: 'Notre pizza-sandwich exclusive du midi avec 3 ingrédients au choix',
    price: 7.5,
  },
];

export const pricingInfo = {
  emporter: {
    senior: 22.0,
    mega: 27.0,
  },
  livraison: {
    senior: 28.0,
    mega: 36.0,
  },
};

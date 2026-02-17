import React from 'react';
import { ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems, toggleCart } = useCart();
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div 
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-black">
              Mezzora Pizza
            </h1>
            <p className="text-xs text-gray-600">Pâte fraîche depuis 1997</p>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('formules')}
              className="text-gray-700 hover:text-black font-semibold transition-colors"
            >
              Formules Midi
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-black font-semibold transition-colors"
            >
              Menu
            </button>
            <a 
              href="tel:0147494904"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">01.47.49.49.04</span>
            </a>
          </nav>

          <button
            onClick={toggleCart}
            className="relative bg-black hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-200"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

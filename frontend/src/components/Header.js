import React, { useState } from 'react';
import { ShoppingCart, Phone, Menu, X, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Accueil', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Formules', action: () => scrollToSection('rubrics') },
    { label: 'Menu', action: () => scrollToSection('rubrics') },
    { label: 'Contact', action: () => scrollToSection('contact') },
    { label: 'Itinéraire', href: 'https://maps.google.com/?q=Mezzora+Pizza', external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div 
            className="cursor-pointer flex items-center gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">🍕</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-black leading-tight">
                Mezzora Pizza
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Pâte fraîche depuis 1997</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-600 font-semibold transition-colors flex items-center gap-1"
                >
                  {link.label === 'Itinéraire' && <MapPin className="w-4 h-4" />}
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-gray-700 hover:text-green-600 font-semibold transition-colors"
                >
                  {link.label}
                </button>
              )
            ))}
            <button
              onClick={toggleCart}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold transition-all flex items-center gap-2"
            >
              Commander
              {totalItems > 0 && (
                <span className="bg-white text-green-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile: Cart + Menu burger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleCart}
              className="relative bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-600 font-semibold py-2 flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label === 'Itinéraire' && <MapPin className="w-4 h-4" />}
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className="text-gray-700 hover:text-green-600 font-semibold py-2 text-left"
                  >
                    {link.label}
                  </button>
                )
              ))}
              <a 
                href="tel:0147494904"
                className="flex items-center gap-2 text-green-600 font-bold py-2"
              >
                <Phone className="w-4 h-4" />
                01.47.49.49.04
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

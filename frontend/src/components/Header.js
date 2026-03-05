import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';

const Header = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (rubric) => {
    if (onNavigate) onNavigate(rubric);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Accueil', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); if(onNavigate) onNavigate(null); } },
    { label: 'Notre Carte', action: () => handleNavClick('menu') },
    { label: 'Formules Midi', action: () => handleNavClick('offres-midi') },
    { label: 'Offres', action: () => handleNavClick('offres') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  const isOpen = mobileMenuOpen;
  const isSolid = scrolled || isOpen;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'bg-white shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      data-testid="header"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <div 
            className="cursor-pointer flex items-center"
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); if(onNavigate) onNavigate(null); }}
            data-testid="header-logo"
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/f5pdgnlq_logo%20mezzora.png" 
              alt="Mezzora Pizza" 
              className="h-11 md:h-12 w-auto"
            />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                className="text-mz-brown hover:text-mz-red font-medium transition-colors px-3 py-2 rounded-lg hover:bg-red-50 text-sm"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://maps.google.com/?q=Mezzora+Pizza+Rueil-Malmaison"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-itineraire"
              className="text-mz-brown hover:text-mz-red font-medium transition-colors px-3 py-2 rounded-lg hover:bg-red-50 text-sm inline-flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              Itinéraire
            </a>
            <a
              href="tel:0147494904"
              data-testid="header-phone-btn"
              className="ml-2 bg-mz-red hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              Commander
            </a>
          </nav>

          {/* Mobile: Phone + Burger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:0147494904"
              data-testid="header-phone-mobile"
              className="bg-mz-red text-white px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Appeler
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-mz-brown"
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100" data-testid="mobile-menu">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-mz-brown hover:text-mz-red hover:bg-red-50 font-medium py-3 px-3 text-left rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://maps.google.com/?q=Mezzora+Pizza+Rueil-Malmaison"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mz-brown hover:text-mz-red hover:bg-red-50 font-medium py-3 px-3 text-left rounded-lg transition-colors flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MapPin className="w-4 h-4" />
                Itinéraire
              </a>
              <div className="mt-2 pt-3 border-t border-gray-100">
                <a 
                  href="tel:0147494904"
                  className="flex items-center justify-center gap-2 bg-mz-red text-white font-bold py-3 rounded-xl"
                >
                  <Phone className="w-4 h-4" />
                  01 47 49 49 04
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

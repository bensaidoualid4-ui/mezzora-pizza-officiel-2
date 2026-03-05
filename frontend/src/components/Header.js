import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const nav = (id) => { if (onNavigate) onNavigate(id); setOpen(false); };
  const scroll = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };

  const links = [
    { label: 'La Carte', action: () => nav('menu') },
    { label: 'Formules', action: () => nav('offres-midi') },
    { label: 'Offres', action: () => nav('offres') },
    { label: 'Contact', action: () => scroll('contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-[#0B0B0B]/95 backdrop-blur-md' : 'bg-transparent'}`} data-testid="header">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); nav(null); }} data-testid="header-logo">
            <img src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/f5pdgnlq_logo%20mezzora.png" alt="Mezzora" className="h-10 md:h-11 w-auto brightness-0 invert" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button key={l.label} onClick={l.action} data-testid={`nav-${l.label.toLowerCase().replace(/\s/g,'-')}`}
                className="text-[var(--cream-muted)] hover:text-[var(--cream)] text-[13px] tracking-[0.15em] uppercase font-light transition-colors">
                {l.label}
              </button>
            ))}
            <a href="tel:0147494904" data-testid="header-phone-btn"
              className="text-[13px] tracking-[0.15em] uppercase font-light text-[var(--gold)] hover:text-[var(--cream)] transition-colors flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" /> Réserver
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-[var(--cream)]" data-testid="mobile-menu-toggle">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-8 pt-4 border-t border-white/10" data-testid="mobile-menu">
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <button key={l.label} onClick={l.action}
                  className="text-[var(--cream-muted)] hover:text-[var(--cream)] text-sm tracking-[0.15em] uppercase font-light text-left transition-colors">
                  {l.label}
                </button>
              ))}
              <a href="tel:0147494904"
                className="text-[var(--gold)] hover:text-[var(--cream)] text-sm tracking-[0.15em] uppercase font-light flex items-center gap-2 mt-2">
                <Phone className="w-4 h-4" /> 01 47 49 49 04
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

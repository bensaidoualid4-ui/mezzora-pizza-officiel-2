import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100svh] min-h-[600px] max-h-[900px] overflow-hidden" data-testid="hero-section">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1669717879542-65eb286d1b23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxwaXp6YSUyMGRhcmslMjBiYWNrZ3JvdW5kJTIwbW9vZHklMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzcyNjcwNjQzfDA&ixlib=rb-4.1.0&q=85&w=1920"
          alt="Pizza artisanale Mezzora"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        {/* Logo */}
        <img
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/f5pdgnlq_logo%20mezzora.png"
          alt="Mezzora Pizza"
          className="h-24 md:h-32 w-auto mb-6 drop-shadow-2xl"
          data-testid="hero-logo"
        />

        {/* Tagline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight drop-shadow-lg max-w-3xl" data-testid="hero-title">
          Pizzas Artisanales
          <span className="block text-mz-gold">depuis 1997</span>
        </h1>

        <p className="text-white/80 text-base md:text-lg mb-8 max-w-md leading-relaxed" data-testid="hero-subtitle">
          Pâte fraîche pétrie chaque jour, ingrédients sélectionnés avec soin.
          <br className="hidden md:block" />
          Le goût de l'authentique à Rueil-Malmaison.
        </p>

        {/* CTA */}
        <a
          href="tel:0147494904"
          data-testid="hero-cta"
          className="bg-mz-red hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 shadow-2xl hover:scale-105 transition-all phone-pulse mb-6"
        >
          <Phone className="w-5 h-5" />
          Commander : 01 47 49 49 04
        </a>

        <p className="text-white/50 text-xs">
          Livraison &middot; À emporter &middot; Sur place
        </p>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
          data-testid="hero-scroll-btn"
          aria-label="Découvrir le menu"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

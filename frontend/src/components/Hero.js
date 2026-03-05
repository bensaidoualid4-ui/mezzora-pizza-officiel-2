import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden" data-testid="hero-section">
      {/* DESKTOP */}
      <div className="hidden md:block relative" style={{ height: 'calc(100svh - 68px)', maxHeight: '850px' }}>
        <img
          src="https://static.prod-images.emergentagent.com/jobs/ee538f2e-eb51-4ee5-b681-005f8ee94398/images/41c19bfd916db0fe38ca288ffebf06709b72c4e76c7c705fbe0ad39862b7d76d.png"
          alt="Pizzas artisanales Mezzora"
          className="w-full h-full object-cover"
          data-testid="hero-img-desktop"
        />
        {/* Subtle gradient at bottom for text */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Bottom overlay content */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-6 lg:px-12 flex items-end justify-between">
            <div>
              <h1 className="font-display text-4xl lg:text-5xl font-black text-white drop-shadow-lg mb-2" data-testid="hero-title">
                Mezzora Pizza
              </h1>
              <p className="text-white/70 text-sm lg:text-base">
                Pizzas artisanales depuis 1997 &mdash; Rueil-Malmaison
              </p>
            </div>
            <a
              href="tel:0147494904"
              data-testid="hero-cta"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-mz-red hover:bg-red-700 text-white px-7 py-3.5 rounded-full text-base font-bold shadow-2xl hover:scale-105 transition-all phone-pulse"
            >
              <Phone className="w-5 h-5" />
              01 47 49 49 04
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce z-10"
          data-testid="hero-scroll-btn"
          aria-label="Découvrir le menu"
        >
          <ChevronDown className="w-7 h-7" />
        </button>
      </div>

      {/* MOBILE */}
      <div className="md:hidden relative" style={{ height: 'calc(100svh - 68px)' }}>
        <img
          src="https://static.prod-images.emergentagent.com/jobs/ee538f2e-eb51-4ee5-b681-005f8ee94398/images/c1bbdbdd6c9b3f889916f54fc62188658b17c3ccc93175d9ff3e5b9122cc8d19.png"
          alt="Pizza artisanale Mezzora"
          className="w-full h-full object-cover"
          data-testid="hero-img-mobile"
        />
        {/* Bottom gradient for CTA */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Bottom content */}
        <div className="absolute bottom-6 left-0 right-0 z-10 px-5 text-center">
          <h1 className="font-display text-3xl font-black text-white drop-shadow-lg mb-1" data-testid="hero-title-mobile">
            Mezzora Pizza
          </h1>
          <p className="text-white/60 text-xs mb-4">
            Artisanale depuis 1997 &mdash; Rueil-Malmaison
          </p>
          <a
            href="tel:0147494904"
            data-testid="hero-cta-mobile"
            className="inline-flex items-center gap-2 bg-mz-red hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl phone-pulse"
          >
            <Phone className="w-4 h-4" />
            Commander : 01 47 49 49 04
          </a>
        </div>

        {/* Scroll hint */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 text-white/30 animate-bounce z-10"
          aria-label="Voir le menu"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

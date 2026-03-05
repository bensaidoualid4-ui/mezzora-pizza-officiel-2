import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden" data-testid="hero-section">
      {/* DESKTOP - Image des 3 pizzas plein écran */}
      <div className="hidden md:block relative" style={{ height: 'calc(100svh - 68px)', maxHeight: '850px' }}>
        <img
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/o2carodn_Firefly_GeminiFlash_extend%20the%20background%20wood%20texture%20naturally%20on%20the%20sides%20279047.png"
          alt="Pizzas artisanales Mezzora"
          className="w-full h-full object-cover object-center"
          data-testid="hero-img-desktop"
        />
        {/* Léger gradient en bas pour le bouton */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />

        {/* CTA téléphone */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <a
            href="tel:0147494904"
            data-testid="hero-cta"
            className="inline-flex items-center gap-2 bg-mz-red hover:bg-red-700 text-white px-7 py-3.5 rounded-full text-base font-bold shadow-2xl hover:scale-105 transition-all phone-pulse"
          >
            <Phone className="w-5 h-5" />
            Commander : 01 47 49 49 04
          </a>
          <button
            onClick={scrollToNext}
            className="text-white/50 hover:text-white/80 transition-colors animate-bounce"
            data-testid="hero-scroll-btn"
            aria-label="Voir le menu"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE - Image mobile des 3 pizzas */}
      <div className="md:hidden relative" style={{ height: 'calc(100svh - 68px)' }}>
        <img
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/5j1wmrz2_hero-mezzora-mobile.png"
          alt="Pizzas artisanales Mezzora"
          className="w-full h-full object-cover object-top"
          data-testid="hero-img-mobile"
        />
        {/* Gradient bas pour CTA */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center gap-2 px-5">
          <a
            href="tel:0147494904"
            data-testid="hero-cta-mobile"
            className="inline-flex items-center gap-2 bg-mz-red hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl phone-pulse"
          >
            <Phone className="w-4 h-4" />
            Commander : 01 47 49 49 04
          </a>
          <button
            onClick={scrollToNext}
            className="text-white/40 animate-bounce"
            aria-label="Voir le menu"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

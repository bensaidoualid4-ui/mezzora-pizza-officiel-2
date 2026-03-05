import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden" data-testid="hero-section">
      {/* Full-bleed image */}
      <img
        src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/o2carodn_Firefly_GeminiFlash_extend%20the%20background%20wood%20texture%20naturally%20on%20the%20sides%20279047.png"
        alt="Pizzas artisanales Mezzora"
        className="hidden md:block w-full h-full object-cover"
        data-testid="hero-img-desktop"
      />
      <img
        src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/5j1wmrz2_hero-mezzora-mobile.png"
        alt="Pizzas artisanales Mezzora"
        className="md:hidden w-full h-full object-cover object-top"
        data-testid="hero-img-mobile"
      />

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B0B0B] to-transparent" />

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--cream)]/40 hover:text-[var(--cream)]/70 transition-colors animate-bounce z-10"
        data-testid="hero-scroll-btn"
        aria-label="Découvrir"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
};

export default Hero;

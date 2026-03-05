import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden" data-testid="hero-section">
      {/* Full-bleed pizza image */}
      <img
        src="/images/menu/Mezzora.jpeg"
        alt="Pizza Mezzora artisanale"
        className="w-full h-full object-cover scale-110"
        data-testid="hero-img"
      />

      {/* Subtle dark overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.7), 0 1px 6px rgba(0,0,0,0.5)' }}>
        <div className="w-12 h-[1px] bg-[var(--gold)] mb-6 opacity-60" />
        <p className="text-[var(--gold)] text-xs tracking-[0.35em] uppercase font-light mb-4" data-testid="hero-subtitle">
          Pizzeria Artisanale &mdash; Rueil-Malmaison
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light italic text-[var(--cream)] leading-[0.95] mb-6" data-testid="hero-title">
          Mezzora
        </h1>
        <p className="text-[var(--cream-muted)] text-sm sm:text-base font-light tracking-wide max-w-md mb-10" data-testid="hero-tagline">
          Le goût authentique de l'Italie, fait avec passion
        </p>
        <a
          href="tel:0147494904"
          className="border border-[var(--gold)]/40 text-[var(--cream)] text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition-all duration-500"
          data-testid="hero-cta"
        >
          Commander
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent z-10" />

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--cream)]/30 hover:text-[var(--cream)]/60 transition-colors animate-bounce z-20"
        data-testid="hero-scroll-btn"
        aria-label="Découvrir"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;

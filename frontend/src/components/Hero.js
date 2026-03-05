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
        className="w-full h-full object-cover object-center scale-110"
        data-testid="hero-img"
      />

      {/* Light overlay + gradients */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <div className="w-12 h-[1px] bg-[var(--gold)] mb-6 opacity-60" />
        <p className="text-[var(--gold)] text-xs tracking-[0.35em] uppercase font-light mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" data-testid="hero-subtitle">
          Pizzeria Artisanale &mdash; Rueil-Malmaison
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light italic text-white leading-[0.95] mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]" data-testid="hero-title">
          Mezzora
        </h1>
        <a
          href="tel:0147494904"
          className="bg-[var(--gold)] text-[#0B0B0B] text-sm sm:text-base font-semibold tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#d4b87a] transition-all duration-300 shadow-lg shadow-black/30"
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

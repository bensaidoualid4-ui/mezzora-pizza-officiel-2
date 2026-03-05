import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[75vh] md:h-screen overflow-hidden bg-[var(--bg)]" data-testid="hero-section">
      {/* Full-bleed pizza image */}
      <img
        src="/images/menu/Mezzora.jpeg"
        alt="Pizza Mezzora artisanale"
        className="w-full h-full object-cover object-center md:scale-110"
        data-testid="hero-img"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5 md:bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center pb-36 md:pb-0 text-center px-6 z-10">
        <p className="text-white text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.35em] uppercase font-light mb-3 md:mb-4" data-testid="hero-subtitle">
          <span className="bg-black/50 px-3 py-1.5 backdrop-blur-sm inline-block">Pizzeria Artisanale</span>
          <span className="bg-black/50 px-3 py-1.5 backdrop-blur-sm inline-block mt-1 sm:mt-0 sm:ml-1">Rueil-Malmaison</span>
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold italic text-white leading-[0.95] mb-6 md:mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]" data-testid="hero-title">
          Mezzora
        </h1>
        <a
          href="tel:0147494904"
          className="bg-[var(--red)] text-white text-sm sm:text-base font-bold tracking-[0.15em] uppercase px-10 sm:px-12 py-4 hover:bg-[#a8182f] transition-all duration-300 shadow-lg shadow-black/20 rounded-sm"
          data-testid="hero-cta"
        >
          Commander
        </a>
      </div>

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent z-10" />

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--cream)]/40 hover:text-[var(--cream)]/70 transition-colors animate-bounce z-20"
        data-testid="hero-scroll-btn"
        aria-label="Découvrir"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;

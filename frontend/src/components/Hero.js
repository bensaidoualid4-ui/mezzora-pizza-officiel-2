import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

const PizzaCircle = ({ src, alt, size, className = '', testId }) => (
  <div 
    className={`rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-4 ring-white/10 ${className}`}
    style={{ width: size, height: size }}
    data-testid={testId}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover object-center" />
  </div>
);

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0d0906]" data-testid="hero-section">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src="https://static.prod-images.emergentagent.com/jobs/ee538f2e-eb51-4ee5-b681-005f8ee94398/images/0182970044a8fa16c7d16f848ce687a563f56f1e002bf40e57bb5d7d61fc14bd.png"
          alt=""
          className="w-full h-full object-cover opacity-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/50" />
      </div>

      {/* Desktop layout */}
      <div className="relative z-10 hidden md:flex items-center min-h-[100svh] max-h-[900px]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Text side */}
            <div className="text-white">
              <p className="text-mz-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4" data-testid="hero-since">
                Depuis 1997 &mdash; Rueil-Malmaison
              </p>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6" data-testid="hero-title">
                L'art de la
                <span className="block text-mz-gold">vraie pizza</span>
                artisanale
              </h1>
              <p className="text-white/60 text-base lg:text-lg mb-8 max-w-md leading-relaxed" data-testid="hero-subtitle">
                Pâte fraîche pétrie chaque jour, ingrédients frais du marché. 
                Le goût authentique, depuis plus de 28 ans.
              </p>
              <a
                href="tel:0147494904"
                data-testid="hero-cta"
                className="inline-flex items-center gap-3 bg-mz-red hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all phone-pulse"
              >
                <Phone className="w-5 h-5" />
                01 47 49 49 04
              </a>
              <p className="text-white/30 text-xs mt-4">
                Livraison &middot; À emporter &middot; Sur place
              </p>
            </div>

            {/* Pizza images composition */}
            <div className="relative h-[520px] lg:h-[600px] flex items-center justify-center">
              {/* Main pizza - center */}
              <PizzaCircle
                src="/images/menu/Pantagruelle.jpeg"
                alt="Pizza Pantagruelle"
                size="clamp(300px, 22vw, 400px)"
                className="relative z-20"
                testId="hero-pizza-main"
              />
              {/* Secondary pizza - top right */}
              <div className="absolute top-6 right-4 lg:right-8 z-10">
                <PizzaCircle
                  src="/images/menu/4formages.jpeg"
                  alt="Pizza 4 Fromages"
                  size="clamp(160px, 12vw, 220px)"
                  className="opacity-85 ring-2 ring-white/5"
                  testId="hero-pizza-secondary"
                />
              </div>
              {/* Tertiary pizza - bottom left */}
              <div className="absolute bottom-8 left-0 lg:left-4 z-10">
                <PizzaCircle
                  src="/images/menu/Royale.jpeg"
                  alt="Pizza Royale"
                  size="clamp(140px, 10vw, 200px)"
                  className="opacity-75 ring-2 ring-white/5"
                  testId="hero-pizza-tertiary"
                />
              </div>
              {/* Glow effect behind main pizza */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-mz-red/10 rounded-full blur-[80px] z-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="relative z-10 md:hidden flex flex-col items-center justify-center min-h-[100svh] px-5 py-20">
        {/* Pizza image - prominent */}
        <div className="relative mb-8">
          <PizzaCircle
            src="/images/menu/Pantagruelle.jpeg"
            alt="Pizza Pantagruelle"
            size="260px"
            testId="hero-pizza-mobile"
          />
          {/* Small secondary pizza */}
          <div className="absolute -bottom-2 -right-6 z-10">
            <PizzaCircle
              src="/images/menu/4formages.jpeg"
              alt="Pizza 4 Fromages"
              size="100px"
              className="ring-2 ring-white/5"
            />
          </div>
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-mz-red/15 rounded-full blur-[60px] -z-10" />
        </div>

        <div className="text-center text-white">
          <p className="text-mz-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Depuis 1997 &mdash; Rueil-Malmaison
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-black leading-tight mb-4">
            L'art de la
            <span className="text-mz-gold"> vraie pizza </span>
            artisanale
          </h1>
          <p className="text-white/60 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
            Pâte fraîche pétrie chaque jour, ingrédients frais du marché.
          </p>
          <a
            href="tel:0147494904"
            data-testid="hero-cta-mobile"
            className="inline-flex items-center gap-2 bg-mz-red hover:bg-red-700 text-white px-7 py-3.5 rounded-full text-base font-bold shadow-2xl phone-pulse"
          >
            <Phone className="w-4 h-4" />
            01 47 49 49 04
          </a>
          <p className="text-white/30 text-xs mt-3">
            Livraison &middot; À emporter &middot; Sur place
          </p>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors animate-bounce"
          data-testid="hero-scroll-btn"
          aria-label="Découvrir"
        >
          <ChevronDown className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

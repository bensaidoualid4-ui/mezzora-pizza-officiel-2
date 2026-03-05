import React from 'react';
import { Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-white/5" id="about" data-testid="about-section">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Depuis 1997</p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal italic text-[var(--cream)] mb-6">
          Notre Histoire
        </h2>
        <div className="sep mb-10"></div>

        <p className="text-[var(--cream-muted)] text-base md:text-lg leading-[1.8] mb-8">
          Depuis plus de <em className="text-[var(--cream)] not-italic font-medium">28 ans</em>, Mezzora Pizza régale les habitants 
          de Rueil-Malmaison avec des pizzas artisanales préparées avec passion. 
        </p>
        <p className="text-[var(--cream-muted)] text-base md:text-lg leading-[1.8] mb-12">
          Notre secret ? Une <em className="text-[var(--cream)] not-italic font-medium">pâte fraîche</em> pétrie chaque jour, 
          des ingrédients soigneusement sélectionnés et un savoir-faire 
          transmis de génération en génération. Le goût de l'authentique, tout simplement.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-12 text-center">
          <div>
            <p className="font-serif text-4xl text-[var(--gold)]">28</p>
            <p className="text-[var(--cream-muted)] text-xs tracking-[0.2em] uppercase mt-1">Ans d'expérience</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-[var(--gold)]">100%</p>
            <p className="text-[var(--cream-muted)] text-xs tracking-[0.2em] uppercase mt-1">Pâte fraîche</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-[var(--gold)]">1997</p>
            <p className="text-[var(--cream-muted)] text-xs tracking-[0.2em] uppercase mt-1">Depuis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

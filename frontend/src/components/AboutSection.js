import React from 'react';
import { Flame, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white" id="about" data-testid="about-section">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-mz-green font-semibold text-sm uppercase tracking-widest mb-2">Depuis 1997</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-mz-text mb-4">
            Notre Histoire
          </h2>
          <div className="w-16 h-1 bg-mz-green mx-auto rounded-full"></div>
        </div>

        <p className="text-center text-mz-muted text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Depuis plus de <strong className="text-mz-text">28 ans</strong>, Mezzora Pizza régale les habitants de Rueil-Malmaison 
          avec des pizzas artisanales préparées avec passion. Notre secret ? Une pâte fraîche 
          pétrie chaque jour, des ingrédients soigneusement sélectionnés et un savoir-faire 
          transmis de génération en génération.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="green-card rounded-2xl p-6 text-center" data-testid="about-card-pate">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Flame className="w-7 h-7 text-mz-red" />
            </div>
            <h3 className="font-bold text-lg text-mz-text mb-2">Pâte Fraîche Maison</h3>
            <p className="text-mz-muted text-sm leading-relaxed">
              100% préparée sur place chaque jour. Jamais surgelée, jamais industrielle.
            </p>
          </div>

          <div className="green-card rounded-2xl p-6 text-center" data-testid="about-card-ingredients">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Award className="w-7 h-7 text-mz-green" />
            </div>
            <h3 className="font-bold text-lg text-mz-text mb-2">Ingrédients Frais</h3>
            <p className="text-mz-muted text-sm leading-relaxed">
              Légumes frais du marché, viandes de qualité, fromages sélectionnés avec soin.
            </p>
          </div>

          <div className="green-card rounded-2xl p-6 text-center" data-testid="about-card-experience">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Clock className="w-7 h-7 text-mz-gold" />
            </div>
            <h3 className="font-bold text-lg text-mz-text mb-2">28 Ans d'Expérience</h3>
            <p className="text-mz-muted text-sm leading-relaxed">
              Une institution à Rueil-Malmaison, appréciée par des milliers de clients fidèles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

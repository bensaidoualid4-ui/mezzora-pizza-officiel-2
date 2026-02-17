import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1754799565084-b381bd0b4db7)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white text-black font-bold text-sm tracking-wider rounded-md mb-4">
              PÂTE FRAÎCHE
            </span>
          </div>

          <h1 className="hero-title text-white mb-6">
            Mezzora Pizza
          </h1>
          
          <p className="hero-subtitle text-white/90 mb-4 text-xl md:text-2xl">
            28 ans de passion à Rueil-Malmaison
          </p>

          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            La qualité artisanale avec une pâte fraîche préparée chaque jour, des légumes et de la viande frais
          </p>

          <div className="offer-card bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-2xl mb-8 max-w-2xl mx-auto border-4 border-yellow-400">
            <p className="text-sm font-semibold mb-2 tracking-wide">OFFRE À EMPORTER</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              2 PIZZAS ACHETÉES
            </h2>
            <h3 className="text-5xl md:text-6xl font-black text-yellow-300 mb-3">
              LA 3ème OFFERTE !
            </h3>
            <p className="text-sm opacity-90">Sur tailles Sénior et Méga</p>
          </div>

          <button
            onClick={scrollToMenu}
            className="cta-button bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2 mb-6"
          >
            <Phone className="w-5 h-5" />
            COMMANDER MAINTENANT
          </button>

          <div className="flex flex-wrap gap-6 justify-center text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>4-6 Avenue du Président Georges Pompidou</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Ouvert 7j/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

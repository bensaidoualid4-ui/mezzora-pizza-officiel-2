import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Image Mobile */}
      <div className="block md:hidden w-full relative">
        <img 
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/5j1wmrz2_hero-mezzora-mobile.png"
          alt="Mezzora Pizza"
          className="w-full h-auto"
        />
        {/* Bouton Commander Mobile */}
        <div className="absolute bottom-4 left-0 right-0 z-10">
          <div className="text-center">
            <a
              href="tel:0147494904"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-base font-bold inline-flex items-center gap-2 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              COMMANDER MAINTENANT
            </a>
          </div>
        </div>
      </div>

      {/* Image Desktop */}
      <div className="hidden md:block w-full relative">
        <img 
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/bt4or0cs_hero-mezzora.png"
          alt="Mezzora Pizza"
          className="w-full h-auto"
        />
        {/* Bouton Commander Desktop */}
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="text-center">
            <a
              href="tel:0147494904"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold inline-flex items-center gap-2 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              COMMANDER MAINTENANT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

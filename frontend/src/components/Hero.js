import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Image Mobile - visible uniquement sur mobile */}
      <div className="block md:hidden w-full relative bg-[#b8d4d4]" style={{ minHeight: '70vh' }}>
        <div className="flex justify-center items-center h-full py-4">
          <img 
            src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/5j1wmrz2_hero-mezzora-mobile.png"
            alt="Mezzora Pizza"
            className="w-[92%] h-auto object-contain"
          />
        </div>
        {/* Bouton Commander Mobile */}
        <div className="absolute bottom-6 left-0 right-0 z-10">
          <div className="container mx-auto px-4 text-center">
            <a
              href="tel:0147494904"
              className="cta-button bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-base font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              COMMANDER MAINTENANT
            </a>
          </div>
        </div>
      </div>

      {/* Image Desktop - visible uniquement sur PC */}
      <div className="hidden md:block w-full relative bg-[#b8d4d4]" style={{ height: '90vh' }}>
        <img 
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/bt4or0cs_hero-mezzora.png"
          alt="Mezzora Pizza"
          className="w-full h-full object-contain object-top"
        />
        {/* Bouton Commander Desktop */}
        <div className="absolute bottom-16 left-0 right-0 z-10">
          <div className="container mx-auto px-4 text-center">
            <a
              href="tel:0147494904"
              className="cta-button bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2 shadow-xl"
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

import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Image Mobile */}
      <div className="block md:hidden w-full">
        <img 
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/5j1wmrz2_hero-mezzora-mobile.png"
          alt="Mezzora Pizza"
          className="w-full h-auto"
        />
      </div>

      {/* Image Desktop */}
      <div className="hidden md:block w-full">
        <img 
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/o2carodn_Firefly_GeminiFlash_extend%20the%20background%20wood%20texture%20naturally%20on%20the%20sides%20279047.png"
          alt="Mezzora Pizza"
          className="w-full h-auto"
        />
      </div>

      {/* Bouton Commander - sous l'image avec fond */}
      <div className="w-full bg-gradient-to-b from-[#d4e5e5] to-white py-6 md:py-8">
        <div className="text-center">
          <a
            href="tel:0147494904"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-xl font-bold inline-flex items-center gap-3 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
          >
            <Phone className="w-6 h-6" />
            COMMANDER MAINTENANT
          </a>
          <p className="text-gray-600 mt-3 text-sm">📞 01.47.49.49.04</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

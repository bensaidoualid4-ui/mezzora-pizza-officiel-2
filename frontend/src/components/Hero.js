import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Image Mobile */}
      <div className="block md:hidden w-full relative overflow-hidden" style={{ height: '70vh', maxHeight: '550px' }}>
        <img 
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/5j1wmrz2_hero-mezzora-mobile.png"
          alt="Mezzora Pizza"
          className="w-full h-full object-contain object-top"
        />
        {/* Bouton Commander Mobile - entre les 2 pizzas */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="tel:0147494904"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-base font-bold inline-flex items-center gap-2 shadow-2xl"
          >
            <Phone className="w-5 h-5" />
            COMMANDER
          </a>
        </div>
      </div>

      {/* Image Desktop */}
      <div className="hidden md:block w-full overflow-hidden relative" style={{ height: 'calc(100vh - 80px)', maxHeight: '800px' }}>
        <img 
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/o2carodn_Firefly_GeminiFlash_extend%20the%20background%20wood%20texture%20naturally%20on%20the%20sides%20279047.png"
          alt="Mezzora Pizza"
          className="w-full h-full object-cover object-top"
        />
        {/* Bouton Commander Desktop - entre les 2 pizzas */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="tel:0147494904"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2 shadow-2xl hover:scale-105 transition-all"
          >
            <Phone className="w-5 h-5" />
            COMMANDER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

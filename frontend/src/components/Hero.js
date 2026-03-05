import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden" data-testid="hero-section">
      {/* Image Mobile */}
      <div className="block md:hidden w-full relative">
        <img 
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/5j1wmrz2_hero-mezzora-mobile.png"
          alt="Mezzora Pizza"
          className="w-full h-auto"
        />
        <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="tel:0147494904"
            data-testid="hero-cta-mobile"
            className="bg-mz-red hover:bg-red-800 text-white px-6 py-3 rounded-full text-base font-bold inline-flex items-center gap-2 shadow-2xl phone-pulse"
          >
            <Phone className="w-5 h-5" />
            01 47 49 49 04
          </a>
        </div>
      </div>

      {/* Image Desktop */}
      <div className="hidden md:block w-full overflow-hidden relative" style={{ height: 'calc(100vh - 72px)', maxHeight: '800px' }}>
        <img 
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/o2carodn_Firefly_GeminiFlash_extend%20the%20background%20wood%20texture%20naturally%20on%20the%20sides%20279047.png"
          alt="Mezzora Pizza"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="tel:0147494904"
            data-testid="hero-cta-desktop"
            className="bg-mz-red hover:bg-red-800 text-white px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 shadow-2xl hover:scale-105 transition-all phone-pulse"
          >
            <Phone className="w-5 h-5" />
            Appelez-nous : 01 47 49 49 04
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section relative min-h-[85vh] md:min-h-screen flex items-end justify-center overflow-hidden pb-16 md:pb-24">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/af439o7l_Gemini_Generated_Image_sgnnrtsgnnrtsgnn.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Overlay plus léger pour éclaircir l'image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center">
          <a
            href="tel:0147494904"
            className="cta-button bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2 shadow-xl"
          >
            <Phone className="w-5 h-5" />
            COMMANDER MAINTENANT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

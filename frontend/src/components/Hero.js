import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section relative flex flex-col items-center justify-end overflow-hidden">
      {/* Image de fond - adaptée mobile et desktop */}
      <div 
        className="w-full"
        style={{
          aspectRatio: '1/1.2',
        }}
      >
        <img 
          src="https://customer-assets.emergentagent.com/job_pizza-mezzora/artifacts/af439o7l_Gemini_Generated_Image_sgnnrtsgnnrtsgnn.png"
          alt="Mezzora Pizza"
          className="w-full h-full object-contain md:object-cover"
          style={{
            maxHeight: '85vh',
          }}
        />
      </div>

      {/* Bouton Commander - positionné en bas sur l'image */}
      <div className="absolute bottom-8 md:bottom-16 left-0 right-0 z-10">
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
    </section>
  );
};

export default Hero;

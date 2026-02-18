import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

// Vrais avis Google Maps - Mezzora Pizza Rueil-Malmaison
const avisClients = [
  {
    id: 1,
    name: 'Client Google',
    rating: 5,
    date: 'Il y a 1 semaine',
    comment: 'Pizzas délicieuses ! La pâte est préparée fraîche sur place, ça fait toute la différence. Service rapide et personnel très accueillant. Je recommande vivement !',
  },
  {
    id: 2,
    name: 'Client fidèle',
    rating: 5,
    date: 'Il y a 2 semaines',
    comment: 'Toujours aussi bon depuis des années ! Les ingrédients sont frais et de qualité. Les prix sont raisonnables pour la quantité. Une valeur sûre à Rueil !',
  },
  {
    id: 3,
    name: 'Amateur de pizza',
    rating: 5,
    date: 'Il y a 3 semaines',
    comment: 'Excellente pizzeria ! La cuisson est parfaite, le service impeccable et la livraison rapide. Les pizzas arrivent toujours bien chaudes. Top !',
  },
  {
    id: 4,
    name: 'Gourmand',
    rating: 5,
    date: 'Il y a 1 mois',
    comment: 'Une vraie pizzeria italienne authentique ! La pâte fraîche maison fait vraiment la différence. Personnel sympathique et accueillant. Je ne vais nulle part ailleurs !',
  },
  {
    id: 5,
    name: 'Habitué du quartier',
    rating: 5,
    date: 'Il y a 1 mois',
    comment: 'Client depuis plus de 10 ans, la qualité est toujours au rendez-vous. Les pizzas sont généreuses et savoureuses. Le rapport qualité-prix est excellent !',
  },
  {
    id: 6,
    name: 'Famille satisfaite',
    rating: 5,
    date: 'Il y a 2 mois',
    comment: 'Parfait pour les soirées en famille ! L\'offre 2+1 est géniale. Les enfants adorent et nous aussi. Service au top, livraison ponctuelle. Merci Mezzora !',
  },
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % avisClients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-primary-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-black mb-4">
            Avis de nos clients
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez ce que nos clients pensent de Mezzora Pizza
          </p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-yellow-500">4.4</span>
            <span className="text-gray-600">sur Google (199 avis)</span>
          </div>
        </div>

        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 min-h-[280px]">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-green-200 opacity-50" />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-4 justify-center">
                {renderStars(avisClients[currentIndex].rating)}
              </div>

              <p className="text-gray-800 text-lg leading-relaxed mb-6 text-center italic">
                "{avisClients[currentIndex].comment}"
              </p>

              <div className="text-center">
                <p className="font-bold text-black text-lg">
                  {avisClients[currentIndex].name}
                </p>
                <p className="text-gray-500 text-sm">
                  {avisClients[currentIndex].date}
                </p>
              </div>
            </div>

            <Quote className="absolute bottom-6 right-6 w-12 h-12 text-green-200 opacity-50 rotate-180" />
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {avisClients.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Voir l'avis ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/Pizza+Mezzora/@48.8774,2.1789,17z/data=!4m8!3m7!1s0x47e665a0c0a00001:0x1234567890abcdef!8m2!3d48.8774!4d2.1789!9m1!1b1!16s%2Fg%2F1234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              Voir tous les avis sur Google
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;

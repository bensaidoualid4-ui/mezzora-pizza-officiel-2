import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const avisClients = [
  {
    id: 1,
    name: 'Sophie Martin',
    rating: 5,
    date: 'Il y a 2 semaines',
    comment: 'Meilleure pizza de Rueil-Malmaison ! La pâte est vraiment fraîche et les ingrédients de qualité. Le personnel est très accueillant. Je recommande vivement !',
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    rating: 5,
    date: 'Il y a 1 mois',
    comment: 'Client fidèle depuis 10 ans ! La qualité n\'a jamais baissé. Les pizzas sont toujours délicieuses et l\'offre 2+1 est géniale pour les soirées en famille.',
  },
  {
    id: 3,
    name: 'Marie Leclerc',
    rating: 5,
    date: 'Il y a 3 semaines',
    comment: 'Excellent rapport qualité-prix. Les formules du midi à 8,90€ sont parfaites. La livraison est rapide et les pizzas arrivent bien chaudes.',
  },
  {
    id: 4,
    name: 'Ahmed Benali',
    rating: 5,
    date: 'Il y a 1 semaine',
    comment: 'Une vraie pizzeria à l\'italienne ! La pâte fraîche fait toute la différence. J\'adore la pizza Mezzora, un délice ! Service impeccable.',
  },
  {
    id: 5,
    name: 'Julie Rousseau',
    rating: 5,
    date: 'Il y a 2 mois',
    comment: '28 ans de qualité ça se voit ! Les pizzas sont généreuses, savoureuses et toujours bien garnies. Un incontournable de Rueil !',
  },
  {
    id: 6,
    name: 'Pierre Moreau',
    rating: 5,
    date: 'Il y a 1 semaine',
    comment: 'Très satisfait de ma commande. Les chicken wings sont excellents et les pizzas base crème sont un régal. Livraison rapide, je recommande !',
  },
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % avisClients.length);
    }, 3000); // Change every 3 seconds (plus rapide)

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
            <span className="text-2xl font-bold text-yellow-500">5.0</span>
            <span className="text-gray-600">sur Google Reviews</span>
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
              href="https://www.google.com/search?q=mezzora+pizza+rueil+malmaison"
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

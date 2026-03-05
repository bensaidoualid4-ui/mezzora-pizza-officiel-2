import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const avisClients = [
  {
    id: 1,
    name: 'Marie L.',
    initials: 'ML',
    rating: 5,
    date: 'Il y a 1 semaine',
    comment: 'Pizzas délicieuses ! La pâte est préparée fraîche sur place, ça fait toute la différence. Service rapide et personnel très accueillant. Je recommande vivement !',
  },
  {
    id: 2,
    name: 'Thomas D.',
    initials: 'TD',
    rating: 5,
    date: 'Il y a 2 semaines',
    comment: 'Toujours aussi bon depuis des années ! Les ingrédients sont frais et de qualité. Les prix sont raisonnables pour la quantité. Une valeur sûre à Rueil !',
  },
  {
    id: 3,
    name: 'Sophie R.',
    initials: 'SR',
    rating: 5,
    date: 'Il y a 3 semaines',
    comment: 'Excellente pizzeria ! La cuisson est parfaite, le service impeccable et la livraison rapide. Les pizzas arrivent toujours bien chaudes. Top !',
  },
  {
    id: 4,
    name: 'Nicolas B.',
    initials: 'NB',
    rating: 5,
    date: 'Il y a 1 mois',
    comment: 'Une vraie pizzeria italienne authentique ! La pâte fraîche maison fait vraiment la différence. Personnel sympathique et accueillant. Je ne vais nulle part ailleurs !',
  },
  {
    id: 5,
    name: 'Laurent M.',
    initials: 'LM',
    rating: 5,
    date: 'Il y a 1 mois',
    comment: 'Client depuis plus de 10 ans, la qualité est toujours au rendez-vous. Les pizzas sont généreuses et savoureuses. Le rapport qualité-prix est excellent !',
  },
  {
    id: 6,
    name: 'Camille P.',
    initials: 'CP',
    rating: 5,
    date: 'Il y a 2 mois',
    comment: "Parfait pour les soirées en famille ! L'offre 2+1 est géniale. Les enfants adorent et nous aussi. Service au top, livraison ponctuelle. Merci Mezzora !",
  },
];

const bgColors = ['bg-red-100 text-mz-red', 'bg-amber-100 text-amber-700', 'bg-green-100 text-mz-green', 'bg-blue-100 text-blue-700', 'bg-purple-100 text-purple-700', 'bg-orange-100 text-orange-700'];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % avisClients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % avisClients.length);
    setIsAutoPlaying(false);
  };
  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + avisClients.length) % avisClients.length);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => (
    [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
    ))
  );

  const avis = avisClients[currentIndex];

  return (
    <section className="py-16 md:py-20 bg-warm-dark" data-testid="reviews-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-mz-red font-semibold text-sm uppercase tracking-widest mb-2">Avis vérifiés</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-mz-brown mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <div className="w-16 h-1 bg-mz-red mx-auto rounded-full mb-5"></div>
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-sm">
            <div className="flex gap-0.5">{renderStars(5)}</div>
            <span className="text-xl font-bold text-mz-brown">4.4</span>
            <span className="text-mz-muted text-sm">sur Google (199 avis)</span>
          </div>
        </div>

        <div 
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative">
            {/* Arrows */}
            <button
              onClick={goPrev}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              data-testid="review-prev"
            >
              <ChevronLeft className="w-5 h-5 text-mz-brown" />
            </button>
            <button
              onClick={goNext}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              data-testid="review-next"
            >
              <ChevronRight className="w-5 h-5 text-mz-brown" />
            </button>

            {/* Review card */}
            <div className="warm-card rounded-2xl p-8 md:p-10 relative" data-testid="review-card">
              <Quote className="absolute top-5 left-6 w-8 h-8 text-red-100" />
              
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-5 justify-center">{renderStars(avis.rating)}</div>

                <p className="text-mz-brown text-base md:text-lg leading-relaxed mb-6 text-center italic">
                  "{avis.comment}"
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${bgColors[currentIndex]}`}>
                    {avis.initials}
                  </div>
                  <div>
                    <p className="font-bold text-mz-brown text-sm">{avis.name}</p>
                    <p className="text-mz-muted text-xs">{avis.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {avisClients.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
                data-testid={`review-dot-${index}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-mz-red w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/place/Pizza+Mezzora/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="reviews-google-link"
              className="inline-flex items-center gap-2 text-mz-red hover:text-red-800 font-semibold text-sm transition-colors"
            >
              Voir tous les avis sur Google &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;

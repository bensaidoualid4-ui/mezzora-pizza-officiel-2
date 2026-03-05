import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const avisClients = [
  { id: 1, name: 'Marie L.', initials: 'ML', date: 'Il y a 1 semaine', comment: 'Pizzas délicieuses ! La pâte est préparée fraîche sur place, ça fait toute la différence. Service rapide et personnel très accueillant. Je recommande vivement !' },
  { id: 2, name: 'Thomas D.', initials: 'TD', date: 'Il y a 2 semaines', comment: 'Toujours aussi bon depuis des années ! Les ingrédients sont frais et de qualité. Les prix sont raisonnables pour la quantité. Une valeur sûre à Rueil !' },
  { id: 3, name: 'Sophie R.', initials: 'SR', date: 'Il y a 3 semaines', comment: 'Excellente pizzeria ! La cuisson est parfaite, le service impeccable et la livraison rapide. Les pizzas arrivent toujours bien chaudes. Top !' },
  { id: 4, name: 'Nicolas B.', initials: 'NB', date: 'Il y a 1 mois', comment: 'Une vraie pizzeria italienne authentique ! La pâte fraîche maison fait vraiment la différence. Personnel sympathique. Je ne vais nulle part ailleurs !' },
  { id: 5, name: 'Laurent M.', initials: 'LM', date: 'Il y a 1 mois', comment: 'Client depuis plus de 10 ans, la qualité est toujours au rendez-vous. Les pizzas sont généreuses et savoureuses. Le rapport qualité-prix est excellent !' },
  { id: 6, name: 'Camille P.', initials: 'CP', date: 'Il y a 2 mois', comment: "Parfait pour les soirées en famille ! L'offre 2+1 est géniale. Les enfants adorent et nous aussi. Service au top, livraison ponctuelle. Merci Mezzora !" },
];

const avatarColors = [
  'bg-mz-green text-white', 'bg-mz-red text-white', 'bg-mz-teal text-white',
  'bg-mz-green text-white', 'bg-mz-red text-white', 'bg-mz-teal text-white',
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const iv = setInterval(() => setCurrentIndex((p) => (p + 1) % avisClients.length), 4000);
    return () => clearInterval(iv);
  }, [auto]);

  const go = (dir) => { setCurrentIndex((p) => (p + dir + avisClients.length) % avisClients.length); setAuto(false); };
  const avis = avisClients[currentIndex];

  return (
    <section className="py-16 md:py-20 bg-mz-green-deep" data-testid="reviews-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-mz-gold font-semibold text-sm uppercase tracking-widest mb-2">Avis vérifiés</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <div className="w-16 h-1 bg-mz-red mx-auto rounded-full mb-5"></div>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-mz-gold text-mz-gold" />)}
            </div>
            <span className="text-xl font-bold text-white">4.4</span>
            <span className="text-white/60 text-sm">sur Google</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto" onMouseEnter={() => setAuto(false)} onMouseLeave={() => setAuto(true)}>
          <div className="relative">
            <button onClick={() => go(-1)} className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center transition-colors" data-testid="review-prev">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button onClick={() => go(1)} className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center transition-colors" data-testid="review-next">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10" data-testid="review-card">
              <Quote className="w-8 h-8 text-mz-gold/30 mb-4 mx-auto" />
              <div className="flex gap-0.5 mb-5 justify-center">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-mz-gold text-mz-gold" />)}
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 text-center italic">"{avis.comment}"</p>
              <div className="flex items-center justify-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${avatarColors[currentIndex]}`}>
                  {avis.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{avis.name}</p>
                  <p className="text-white/50 text-xs">{avis.date}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {avisClients.map((_, i) => (
              <button key={i} onClick={() => { setCurrentIndex(i); setAuto(false); }} data-testid={`review-dot-${i}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-mz-gold w-6' : 'bg-white/30 w-2 hover:bg-white/50'}`}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <a href="https://www.google.com/maps/place/Pizza+Mezzora/" target="_blank" rel="noopener noreferrer" data-testid="reviews-google-link"
              className="inline-flex items-center gap-2 text-mz-gold hover:text-yellow-300 font-semibold text-sm transition-colors">
              Voir tous les avis sur Google &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;

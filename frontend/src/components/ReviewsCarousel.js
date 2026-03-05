import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const avis = [
  { name: 'Marie L.', comment: 'Pizzas délicieuses ! La pâte est préparée fraîche sur place, ça fait toute la différence. Service rapide et personnel très accueillant.' },
  { name: 'Thomas D.', comment: 'Toujours aussi bon depuis des années ! Les ingrédients sont frais et de qualité. Une valeur sûre à Rueil !' },
  { name: 'Sophie R.', comment: 'Excellente pizzeria ! La cuisson est parfaite, le service impeccable. Les pizzas arrivent toujours bien chaudes.' },
  { name: 'Nicolas B.', comment: 'Une vraie pizzeria authentique ! La pâte fraîche maison fait vraiment la différence. Je ne vais nulle part ailleurs !' },
  { name: 'Laurent M.', comment: 'Client depuis plus de 10 ans, la qualité est toujours au rendez-vous. Les pizzas sont généreuses. Rapport qualité-prix excellent !' },
  { name: 'Camille P.', comment: "Parfait pour les soirées en famille ! L'offre 2+1 est géniale. Les enfants adorent. Service au top !" },
];

const ReviewsCarousel = () => {
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const iv = setInterval(() => setIdx((p) => (p + 1) % avis.length), 5000);
    return () => clearInterval(iv);
  }, [auto]);

  const go = (d) => { setIdx((p) => (p + d + avis.length) % avis.length); setAuto(false); };
  const a = avis[idx];

  return (
    <section className="py-24 md:py-32 border-t border-white/5" data-testid="reviews-section">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Avis Google</p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal italic text-[var(--cream)] mb-3">
          Nos Clients
        </h2>
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />)}
        </div>
        <p className="text-[var(--cream-muted)] text-sm mb-10">4.4/5 sur Google &middot; 199 avis</p>

        <div className="relative" onMouseEnter={() => setAuto(false)} onMouseLeave={() => setAuto(true)}>
          <button onClick={() => go(-1)} className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors" data-testid="review-prev">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => go(1)} className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors" data-testid="review-next">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="px-8" data-testid="review-card">
            <p className="font-serif text-xl md:text-2xl italic text-[var(--cream)] leading-relaxed mb-8">
              "{a.comment}"
            </p>
            <p className="text-[var(--gold)] text-sm tracking-[0.1em]">&mdash; {a.name}</p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {avis.map((_, i) => (
            <button key={i} onClick={() => { setIdx(i); setAuto(false); }} data-testid={`review-dot-${i}`}
              className={`rounded-full transition-all duration-300 ${i === idx ? 'bg-[var(--gold)] w-5 h-1.5' : 'bg-white/20 w-1.5 h-1.5'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;

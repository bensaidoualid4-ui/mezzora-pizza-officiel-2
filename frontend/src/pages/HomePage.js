import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RubricsSection from '../components/RubricsSection';
import FormulesMidi from '../components/FormulesMidi';
import MenuSection from '../components/MenuSection';
import ContactForm from '../components/ContactForm';
import ReviewsCarousel from '../components/ReviewsCarousel';
import Footer from '../components/Footer';

const HomePage = () => {
  const [activeRubric, setActiveRubric] = useState(null);

  const handleRubricSelect = (rubric) => {
    // Si on clique sur la même rubrique, on la ferme
    if (activeRubric === rubric) {
      setActiveRubric(null);
    } else {
      setActiveRubric(rubric);
    }
  };

  const handleCloseMenu = () => {
    setActiveRubric(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <RubricsSection 
          onRubricSelect={handleRubricSelect}
          activeRubric={activeRubric}
          onCloseMenu={handleCloseMenu}
        />
        <ReviewsCarousel />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

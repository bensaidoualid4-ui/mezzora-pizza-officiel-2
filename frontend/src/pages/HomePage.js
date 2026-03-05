import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import RubricsSection from '../components/RubricsSection';
import ContactForm from '../components/ContactForm';
import ReviewsCarousel from '../components/ReviewsCarousel';
import Footer from '../components/Footer';

const HomePage = () => {
  const [activeRubric, setActiveRubric] = useState(null);

  const handleRubricSelect = (rubric) => {
    if (activeRubric === rubric) {
      setActiveRubric(null);
    } else {
      setActiveRubric(rubric);
    }
    if (rubric) {
      setTimeout(() => {
        document.getElementById('rubrics')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleCloseMenu = () => {
    setActiveRubric(null);
  };

  return (
    <div className="min-h-screen" data-testid="home-page">
      <Header onNavigate={handleRubricSelect} />
      <main className="pt-[68px]">
        <Hero />
        <AboutSection />
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

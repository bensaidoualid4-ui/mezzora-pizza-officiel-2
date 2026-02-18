import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RubricsSection from '../components/RubricsSection';
import FormulesMidi from '../components/FormulesMidi';
import MenuSection from '../components/MenuSection';
import ContactForm from '../components/ContactForm';
import ReviewsCarousel from '../components/ReviewsCarousel';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';

const HomePage = () => {
  const [activeRubric, setActiveRubric] = useState(null);

  const handleRubricSelect = (rubric) => {
    setActiveRubric(rubric);
    // Smooth scroll to appropriate section
    setTimeout(() => {
      if (rubric === 'offres-midi') {
        document.getElementById('formules')?.scrollIntoView({ behavior: 'smooth' });
      } else if (rubric === 'menu' || rubric === 'click-collect') {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <CartSidebar />
      <main className="pt-20">
        <Hero />
        <RubricsSection 
          onRubricSelect={handleRubricSelect}
          activeRubric={activeRubric}
        />
        {activeRubric === 'offres-midi' && <FormulesMidi />}
        {(activeRubric === 'menu' || activeRubric === 'click-collect') && (
          <MenuSection activeRubric={activeRubric} />
        )}
        <ReviewsCarousel />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RubricsSection from '../components/RubricsSection';
import FormulesMidi from '../components/FormulesMidi';
import MenuSection from '../components/MenuSection';
import Tarifs from '../components/Tarifs';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';

const HomePage = () => {
  const [activeRubric, setActiveRubric] = useState('table');

  const handleRubricSelect = (rubric) => {
    setActiveRubric(rubric);
    // Smooth scroll to menu
    setTimeout(() => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
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
        <FormulesMidi />
        <MenuSection activeRubric={activeRubric} />
        <Tarifs />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

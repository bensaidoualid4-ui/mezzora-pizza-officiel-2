import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FormulesMidi from '../components/FormulesMidi';
import MenuSection from '../components/MenuSection';
import Tarifs from '../components/Tarifs';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CartSidebar />
      <main className="pt-20">
        <Hero />
        <FormulesMidi />
        <MenuSection />
        <Tarifs />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

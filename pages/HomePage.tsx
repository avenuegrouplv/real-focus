
import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import HomeServices from '../components/HomeServices.tsx';
import HomeProcess from '../components/HomeProcess.tsx';
import WhyUs from '../components/WhyUs.tsx';
import HomeExpertise from '../components/HomeExpertise.tsx';
import ContactForm from '../components/ContactForm.tsx';
import Footer from '../components/Footer.tsx';
import WhatsAppButton from '../components/WhatsAppButton.tsx';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HomeServices />
        <HomeProcess />
        <WhyUs />
        <HomeExpertise />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;

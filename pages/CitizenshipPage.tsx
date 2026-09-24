
import React, { useEffect } from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import CitizenshipServices from '../components/CitizenshipServices.tsx';
import CitizenshipDestinations from '../components/CitizenshipDestinations.tsx';
import CitizenshipProcess from '../components/CitizenshipProcess.tsx';
import WhyUs from '../components/WhyUs.tsx';
import CitizenshipProfessionalContent from '../components/CitizenshipProfessionalContent.tsx';
import ContactForm from '../components/ContactForm.tsx';
import Footer from '../components/Footer.tsx';
import WhatsAppButton from '../components/WhatsAppButton.tsx';

const CitizenshipPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero singleSlideIndex={2} />
        <CitizenshipServices />
        <CitizenshipDestinations />
        <CitizenshipProcess />
        <WhyUs />
        <CitizenshipProfessionalContent />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CitizenshipPage;

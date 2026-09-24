
import React, { useEffect } from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import ResidenceServices from '../components/ResidenceServices.tsx';
import ResidenceDestinations from '../components/ResidenceDestinations.tsx';
import ResidenceProcess from '../components/ResidenceProcess.tsx';
import WhyUs from '../components/WhyUs.tsx';
import ResidenceProfessionalContent from '../components/ResidenceProfessionalContent.tsx';
import ContactForm from '../components/ContactForm.tsx';
import Footer from '../components/Footer.tsx';
import WhatsAppButton from '../components/WhatsAppButton.tsx';

const ResidencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero singleSlideIndex={1} />
        <ResidenceServices />
        <ResidenceDestinations />
        <ResidenceProcess />
        <WhyUs />
        <ResidenceProfessionalContent />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ResidencePage;

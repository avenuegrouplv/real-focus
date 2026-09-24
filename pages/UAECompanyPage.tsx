
import React, { useEffect } from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Services from '../components/Services.tsx';
import CompanyTypes from '../components/CompanyTypes.tsx';
import Process from '../components/Process.tsx';
import WhyUs from '../components/WhyUs.tsx';
import ProfessionalContent from '../components/ProfessionalContent.tsx';
import ContactForm from '../components/ContactForm.tsx';
import Footer from '../components/Footer.tsx';
import WhatsAppButton from '../components/WhatsAppButton.tsx';

const UAECompanyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero singleSlideIndex={0} />
        <Services />
        <CompanyTypes />
        <Process />
        <WhyUs />
        <ProfessionalContent />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default UAECompanyPage;


import React, { useEffect } from 'react';
import Header from '../components/Header.tsx';
import ContactForm from '../components/ContactForm.tsx';
import Footer from '../components/Footer.tsx';
import WhatsAppButton from '../components/WhatsAppButton.tsx';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offices = [
    {
      city: "Dubaija (Galvenais birojs)",
      address: "Downtown Dubai, Burj Khalifa District, Tower 1, Office 1201",
      phone: "+971 52 117 88 03",
      email: "dubai@realfocus.ae",
      hours: "Pirmdiena - Piektdiena: 09:00 - 18:00 (GST)"
    },
    {
      city: "Rīga (Pārstāvniecība)",
      address: "Rīga, Latvija (Konsultācijas pēc iepriekšēja pieraksta)",
      phone: "+371 20 000 000",
      email: "latvia@realfocus.ae",
      hours: "Pirmdiena - Piektdiena: 09:00 - 18:00 (EET)"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="bg-slate-50 py-20 border-b border-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
                Kontakti
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Sazinieties ar mums, lai apspriestu Jūsu biznesa mērķus un saņemtu profesionālu juridisko atbalstu starptautiskā līmenī.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {offices.map((office, index) => (
                <div key={index} className="bg-white p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <Globe className="text-blue-900" />
                    {office.city}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 text-blue-900 rounded">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Adrese</div>
                        <div className="text-slate-700">{office.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 text-blue-900 rounded">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Tālrunis</div>
                        <div className="text-slate-700">{office.phone}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 text-blue-900 rounded">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">E-pasts</div>
                        <div className="text-slate-700">{office.email}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 text-blue-900 rounded">
                        <Clock size={20} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Darba laiks</div>
                        <div className="text-slate-700">{office.hours}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <div className="bg-slate-50">
          <ContactForm />
        </div>

        {/* Map Placeholder / Visual Element */}
        <section className="h-[400px] bg-slate-200 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80" 
            alt="World Map" 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-blue-900/90 text-white p-8 backdrop-blur-sm border border-white/20 text-center">
              <h4 className="text-xl font-bold mb-2 uppercase tracking-widest">Globāls Atbalsts</h4>
              <p className="text-sm text-blue-100">Mēs apkalpojam klientus no visas pasaules, nodrošinot attālinātas konsultācijas un klātienes tikšanās.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;

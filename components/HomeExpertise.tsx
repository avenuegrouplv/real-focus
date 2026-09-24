
import React from 'react';
import { Shield, Scale, Globe, Lock } from 'lucide-react';

const HomeExpertise: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight">
              Juridiskā Ekspertīze <br />
              <span className="text-blue-900">Globālā Mērogā</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Atšķirībā no parastiem aģentiem, mēs nodrošinām advokātu līmeņa pārraudzību visiem procesiem. Mūsu prioritāte ir klienta tiesiskā drošība un ilgtermiņa biznesa stabilitāte.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 w-fit"><Shield className="text-blue-900" /></div>
                <h4 className="font-bold text-slate-900 uppercase tracking-tight">Drošība</h4>
                <p className="text-sm text-slate-500">Mēs strādājam tikai ar legālām un valsts apstiprinātām programmām.</p>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 w-fit"><Lock className="text-blue-900" /></div>
                <h4 className="font-bold text-slate-900 uppercase tracking-tight">Konfidencialitāte</h4>
                <p className="text-sm text-slate-500">Jūsu datu aizsardzība ir mūsu prioritāte, ievērojot augstākos standartus.</p>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 w-fit"><Scale className="text-blue-900" /></div>
                <h4 className="font-bold text-slate-900 uppercase tracking-tight">Ētika</h4>
                <p className="text-sm text-slate-500">Mēs ievērojam starptautiskos profesionālās ētikas standartus.</p>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 w-fit"><Globe className="text-blue-900" /></div>
                <h4 className="font-bold text-slate-900 uppercase tracking-tight">Mobilitāte</h4>
                <p className="text-sm text-slate-500">Mēs palīdzam paplašināt Jūsu brīvības un biznesa robežas.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-slate-100 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" 
                alt="Legal Expertise" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-blue-900 text-white p-12 hidden md:block">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-sm uppercase tracking-widest font-semibold">Gadu Pieredze</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeExpertise;

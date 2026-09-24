
import React from 'react';
import { ShieldCheck, Layers, Globe2, Eye } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="text-blue-900" size={32} />,
    title: "Juridiska pieeja",
    desc: "Mēs neesam tikai aģenti – mēs esam juristi. Katrs solis ir tiesiski pamatots un drošs."
  },
  {
    icon: <Layers className="text-blue-900" size={32} />,
    title: "Strukturēts process",
    desc: "Nekādu pārsteigumu vai slēptu izmaksu. Skaidrs plāns no pirmās dienas."
  },
  {
    icon: <Globe2 className="text-blue-900" size={32} />,
    title: "Starptautiska pieredze",
    desc: "Mēs saprotam gan ES nodokļu vidi, gan AAE biznesa kultūru."
  },
  {
    icon: <Eye className="text-blue-900" size={32} />,
    title: "Caurspīdīgs modelis",
    desc: "Pilna atskaite par katru maksājumu un procesa stadiju reāllaikā."
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-blue-950 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide">Kāpēc izvēlēties REAL FOCUS?</h2>
            <p className="text-blue-200 text-lg mb-12 leading-relaxed">
              Daudzi piedāvā reģistrācijas pakalpojumus, bet tikai daži nodrošina patiesu juridisko drošību. Mēs koncentrējamies uz ilgtermiņa partnerību un jūsu aktīvu aizsardzību.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="bg-white p-3 w-fit">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-blue-200/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square border border-white/10 relative overflow-hidden">
              <img 
                src="https://picsum.photos/id/445/800/800" 
                alt="Corporate Architecture" 
                className="w-full h-full object-cover opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center bg-blue-900/80 backdrop-blur-sm p-8 border border-white/20">
                  <div className="text-5xl font-bold mb-2">12+</div>
                  <div className="text-sm uppercase tracking-widest font-semibold">Gadu pieredze starptautiskajās tiesībās</div>
                </div>
              </div>
            </div>
            {/* Decorative frames */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-blue-800 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

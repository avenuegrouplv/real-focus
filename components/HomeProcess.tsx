
import React from 'react';

const steps = [
  { num: "01", title: "Konsultācija", desc: "Mērķu definēšana un piemērotākā risinājuma izvēle." },
  { num: "02", title: "Stratēģija", desc: "Individuāla rīcības plāna un juridiskās struktūras izstrāde." },
  { num: "03", title: "Dokumenti", desc: "Pilna dokumentu paketes sagatavošana un legalizācija." },
  { num: "04", title: "Pārstāvība", desc: "Interešu pārstāvēšana valsts iestādēs un bankās." },
  { num: "05", title: "Rezultāts", desc: "Gala mērķa sasniegšana un pēcapkalpošanas atbalsts." }
];

const HomeProcess: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">Mūsu Sadarbības Principi</h2>
          <p className="text-slate-400 text-lg">
            Mēs nodrošinām caurspīdīgu un strukturētu procesu katrā sadarbības posmā, lai Jūs varētu fokusēties uz savu biznesu.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-blue-900/30 -z-0"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-blue-900 w-24 h-24 rounded-full flex items-center justify-center mb-8 border-4 border-slate-900 shadow-[0_0_30px_rgba(30,58,138,0.3)]">
                  <span className="text-3xl font-bold">{step.num}</span>
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;

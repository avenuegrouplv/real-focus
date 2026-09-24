
import React from 'react';

const steps = [
  { num: "01", title: "Konsultācija", desc: "Mērķu definēšana un jurisdikcijas izvēle." },
  { num: "02", title: "Dokumenti", desc: "Juridiskā dokumentu paketes sagatavošana un legalizācija." },
  { num: "03", title: "Reģistrācija", desc: "Uzņēmuma nosaukuma rezervācija un apstiprināšana." },
  { num: "04", title: "Licence", desc: "Tirdzniecības vai pakalpojumu licences saņemšana." },
  { num: "05", title: "Vīza", desc: "Rezidenta vīzas un Emirates ID noformēšana." },
  { num: "06", title: "Rezidentūra", desc: "Tiek iegūts AAE rezidenta statuss." },
  { num: "07", title: "Banka", desc: "Uzņēmuma bankas konta atvēršana un pārbaude." }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mūsu Sadarbības Modelis</h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            Strukturēts un caurspīdīgs septiņu soļu process, kas nodrošina paredzamu rezultātu un minimālu klienta iesaisti administratīvajos jautājumos.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-slate-100 w-16 h-16 flex items-center justify-center mb-6 group hover:border-blue-900 transition-colors">
                  <span className="text-xl font-bold text-blue-900">{step.num}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
                
                {/* Visual Arrow for mobile/tablet */}
                {index !== steps.length - 1 && (
                  <div className="sm:hidden absolute -bottom-4 left-8 text-slate-200">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-slate-50 border-l-4 border-blue-900">
          <p className="text-slate-700 italic">
            "Katrs posms tiek uzraudzīts no mūsu puses, nodrošinot pilnīgu atbilstību vietējai likumdošanai un regulējumiem."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;

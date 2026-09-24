
import React from 'react';

const steps = [
  { num: "01", title: "Sākotnējā izpēte", desc: "Klienta biogrāfijas un mērķu analīze, lai noteiktu piemērotāko programmu." },
  { num: "02", title: "Līgums", desc: "Sadarbības līguma parakstīšana un detalizēta procesa plāna izstrāde." },
  { num: "03", title: "Dokumentācija", desc: "Visu nepieciešamo dokumentu vākšana, legalizācija un pieteikuma sagatavošana." },
  { num: "04", title: "Pārbaude", desc: "Iekšējā atbilstības pārbaude pirms pieteikuma iesniegšanas valsts iestādēs." },
  { num: "05", title: "Iesniegšana", desc: "Pieteikuma iesniegšana un valsts nodevu apmaksa." },
  { num: "06", title: "Due Diligence", desc: "Valsts iestāžu veiktā pārbaude un lēmuma pieņemšana." },
  { num: "07", title: "Pase", desc: "Zvēresta nodošana (ja nepieciešams) un pilsoņa pases saņemšana." }
];

const CitizenshipProcess: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Ceļš uz jaunu pilsonību</h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            Mēs nodrošinām pilnu procesa pārraudzību, minimizējot riskus un nodrošinot, ka katrs solis atbilst starptautiskajām tiesību normām.
          </p>
        </div>

        <div className="relative">
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
                
                {index !== steps.length - 1 && (
                  <div className="sm:hidden absolute -bottom-4 left-8 text-slate-200">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-slate-50 border-l-4 border-blue-900">
          <p className="text-slate-700 italic">
            "Jauna pilsonība ir vislabākā apdrošināšanas polise Jūsu brīvībai un biznesa stabilitātei mūsdienu mainīgajā pasaulē."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CitizenshipProcess;

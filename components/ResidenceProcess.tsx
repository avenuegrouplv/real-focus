
import React from 'react';

const steps = [
  { num: "01", title: "Konsultācija", desc: "Mērķu definēšana un piemērotākās valsts/programmas izvēle." },
  { num: "02", title: "Analīze", desc: "Klienta situācijas izvērtēšana un nepieciešamo dokumentu saraksta izveide." },
  { num: "03", title: "Sagatavošana", desc: "Dokumentu tulkošana, notariāla apstiprināšana un legalizācija (Apostille)." },
  { num: "04", title: "Iesniegšana", desc: "Pieteikuma iesniegšana attiecīgās valsts imigrācijas dienestā vai vēstniecībā." },
  { num: "05", title: "Pavadīšana", desc: "Atbalsts biometrijas datu nodošanā vai intervijas laikā (ja nepieciešams)." },
  { num: "06", title: "Apstiprinājums", desc: "Lēmuma saņemšana un tālāko soļu koordinēšana." },
  { num: "07", title: "Rezidence", desc: "Uzturēšanās atļaujas kartes saņemšana un integrācijas atbalsts." }
];

const ResidenceProcess: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Kā mēs strādājam</h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            Mūsu mērķis ir padarīt uzturēšanās atļaujas saņemšanas procesu pēc iespējas paredzamāku un mierīgāku, uzņemoties visu birokrātisko slogu.
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
            "Mēs nodrošinām pilnu atbalstu ne tikai līdz kartes saņemšanai, bet arī palīdzam ar praktiskiem jautājumiem jaunajā valstī."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResidenceProcess;

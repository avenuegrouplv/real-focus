
import React from 'react';
import { Globe, ShieldAlert, Zap } from 'lucide-react';

const companyTypes = [
  {
    icon: <Globe size={24} />,
    title: "Mainland",
    description: "Uzņēmums, kas reģistrēts tieši AAE iekšējā tirgū. Ļauj veikt darījumus jebkurā vietā Emirātos bez ierobežojumiem.",
    features: ["Neierobežota darbība AAE", "Licences iegūšana", "Juridiskās adreses iegūšāna un apkalpošana", "Dubajas nodokļu maksātāja statusa iegūšana"]
  },
  {
    icon: <Zap size={24} />,
    title: "Free Zone",
    description: "Brīvās ekonomiskās zonas uzņēmums. Iespēja vienkāršot produktu sertifikāciju un optimizēt nodokļu likmes.",
    features: ["Ideāli piemērots eksporta uzņēmumiem", "Optimizētas nodokļu likmes", "Atvielogota produktu sertifikācija"]
  },
  {
    icon: <ShieldAlert size={24} />,
    title: "Offshore",
    description: "Ārvalstu uzņēmums starptautiskai darbībai un aktīvu aizsardzībai. Netiek izsniegta tirdzniecības licence AAE iekšienē.",
    features: ["Augsts privātums", "Aktīvu aizsardzība", "Vienkāršoti noteikumi"]
  }
];

const CompanyTypes: React.FC = () => {
  return (
    <section id="company-types" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Uzņēmējdarbības Formas AAE</h2>
          <p className="text-slate-600 text-lg">
            Pareiza jurisdikcijas izvēle ir kritiskais pirmais solis, lai nodrošinātu jūsu biznesa mērķu sasniegšanu un juridisko drošību.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-slate-200 bg-white">
          {companyTypes.map((type, index) => (
            <div key={index} className={`p-10 ${index !== 2 ? 'lg:border-r border-slate-200' : ''} hover:bg-slate-50 transition-colors`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 text-blue-900">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{type.title}</h3>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {type.description}
              </p>
              <ul className="space-y-4">
                {type.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="mt-1 bg-blue-900 rounded-full w-1.5 h-1.5 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTypes;

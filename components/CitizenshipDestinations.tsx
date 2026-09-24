
import React from 'react';
import { Globe, Shield, MapPin, CheckCircle2, Anchor } from 'lucide-react';

const destinations = [
  {
    icon: <Globe size={24} />,
    title: "Eiropas Savienība",
    description: "Pilsonības iegūšana Bulgārijā un Rumānijā, nodrošinot visas ES pilsoņa tiesības un brīvības.",
    features: ["Bulgārija (izcelsme/investīcijas)", "Rumānija (repatriācija)", "Bezvizu ceļošana 170+ valstīs", "Tiesības strādāt jebkurā ES valstī"]
  },
  {
    icon: <MapPin size={24} />,
    title: "Kirgizstāna un Meksika",
    description: "Ātras un efektīvas programmas stratēģiski svarīgos reģionos ar plašām biznesa iespējām.",
    features: ["Kirgizstāna (paātrināts process)", "Meksika (rezidence -> pilsonība)", "Zemas uzturēšanās prasības", "Piekļuve jauniem tirgiem"]
  },
  {
    icon: <Anchor size={24} />,
    title: "Karību un Klusā okeāna salas",
    description: "Klasiskās investīciju pilsonības programmas, kas piedāvā maksimālu privātumu un nodokļu optimizāciju.",
    features: ["Vanuatu (ātrākā pasaulē)", "Karību valstis (St. Kitts, Grenada u.c.)", "Nodokļu paradīzes statuss", "Mantojuma aizsardzība"]
  }
];

const CitizenshipDestinations: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Pieejamās Programmas</h2>
          <p className="text-slate-600 text-lg">
            Mēs piedāvājam tikai legālas un valsts apstiprinātas programmas, kas garantē drošu un paliekošu rezultātu Jums un Jūsu ģimenei.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-slate-200 bg-white shadow-sm">
          {destinations.map((type, index) => (
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
                    <CheckCircle2 size={16} className="text-blue-900 mt-0.5 flex-shrink-0" />
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

export default CitizenshipDestinations;

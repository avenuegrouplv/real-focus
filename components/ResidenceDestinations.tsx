
import React from 'react';
import { Globe, Shield, MapPin, CheckCircle2 } from 'lucide-react';

const destinations = [
  {
    icon: <Globe size={24} />,
    title: "Eiropa (ES)",
    description: "Zelta vīzas un rezidences programmas investoriem un digitālajiem klejotājiem.",
    features: ["Spānija & Portugāle", "Grieķija & Kipra", "Digitālo nomadu vīzas", "Brīva kustība Šengenas zonā"]
  },
  {
    icon: <MapPin size={24} />,
    title: "Argentīna",
    description: "Viena no pieejamākajām un ātrākajām programmām Dienvidamerikā ar skaidru ceļu uz pilsonību.",
    features: ["Rentista vīza", "Digitālo nomadu programma", "Investīciju rezidence", "Ātrs process (2-3 mēneši)"]
  },
  {
    icon: <Shield size={24} />,
    title: "Taizeme",
    description: "Ekskluzīvas ilgtermiņa uzturēšanās programmas dzīvei un biznesam Dienvidaustrumāzijā.",
    features: ["Thai Elite Visa", "LTR (Long-Term Resident)", "Biznesa rezidence", "Nodokļu rezidences priekšrocības"]
  }
];

const ResidenceDestinations: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Populārākie Galamērķi</h2>
          <p className="text-slate-600 text-lg">
            Mēs piedāvājam pārbaudītus risinājumus valstīs, kas nodrošina vislabāko dzīves kvalitāti, nodokļu vidi un pārvietošanās brīvību.
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

export default ResidenceDestinations;

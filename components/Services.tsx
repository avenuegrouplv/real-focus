
import React from 'react';
import { Building2, CreditCard, UserCheck, Scale, BarChart3, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="text-blue-900" size={32} />,
    title: "Uzņēmuma reģistrācija AAE",
    description: "Pilna procesa vadība Mainland, Free Zone vai Offshore struktūru izveidē."
  },
  {
    icon: <CreditCard className="text-blue-900" size={32} />,
    title: "Bankas konta atvēršana",
    description: "Dokumentu sagatavošana un pavadīšana sarunās ar AAE vadošajām bankām."
  },
  {
    icon: <UserCheck className="text-blue-900" size={32} />,
    title: "Vīzas un rezidence",
    description: "Investora, nodarbinātības, freelancer, nekustamā īpašuma un ģimenes vīzu noformēšana."
  },
  {
    icon: <Scale className="text-blue-900" size={32} />,
    title: "Juridiskā konsultācija",
    description: "Starptautiskā līgumu tiesības, korporatīvā pārvaldība un strīdu risināšana."
  },
  {
    icon: <BarChart3 className="text-blue-900" size={32} />,
    title: "Nodokļu un biznesa atbalsts",
    description: "Atbilstība AAE nodokļu likumdošanai (PVN, UIN) un finanšu ziņošana."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mūsu Kompetences Jomas</h2>
            <div className="w-20 h-1 bg-blue-900 mb-6"></div>
            <p className="text-slate-600 text-lg">
              REAL FOCUS nodrošina strukturētu pieeju katram biznesa aspektam, lai garantētu drošu un tiesisku pāreju uz AAE jurisdikciju.
            </p>
          </div>
          <a href="/kontakti#contact" className="text-blue-900 font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
            Visi pakalpojumi <ChevronRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="h-px w-full bg-slate-200 mb-6"></div>
              <a href="/kontakti#contact" className="text-sm font-bold text-blue-900 uppercase tracking-tighter hover:underline decoration-2 underline-offset-4">
                Uzzināt vairāk
              </a>
            </div>
          ))}
          
          <div className="p-8 bg-blue-900 flex flex-col justify-center items-start text-white">
            <h3 className="text-2xl font-bold mb-4">Nepieciešams pielāgots risinājums?</h3>
            <p className="text-blue-100 mb-8">
              Sazinieties ar mums, lai apspriestu jūsu unikālās biznesa prasības un saņemtu individuālu piedāvājumu.
            </p>
            <a href="/kontakti#contact" className="bg-white text-blue-900 px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-slate-100 transition-colors">
              Pieteikties sarunai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

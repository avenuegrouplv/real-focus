
import React from 'react';
import { Building2, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const homeServices = [
  {
    icon: <Building2 className="text-blue-900" size={40} />,
    title: "Uzņēmējdarbība AAE",
    description: "Pilna cikla atbalsts uzņēmuma reģistrācijai Dubaijā un citos emirātos. No jurisdikcijas izvēles līdz bankas konta atvēršanai.",
    link: "/uznemums-aae",
    color: "bg-blue-50"
  },
  {
    icon: <UserCheck className="text-blue-900" size={40} />,
    title: "Uzturēšanās Atļaujas",
    description: "Rezidences programmas investoriem un profesionāļiem Eiropā, Dienvidamerikā un Āzijā. Droša pārcelšanās Jums un Jūsu ģimenei.",
    link: "/uzturesanas-atlaujas",
    color: "bg-slate-50"
  },
  {
    icon: <ShieldCheck className="text-blue-900" size={40} />,
    title: "Pilsonības Iegūšana",
    description: "Otrās pases un pilsonības programmas stratēģiskai drošībai un globālai mobilitātei. Legāli un konfidenciāli risinājumi.",
    link: "/pilsoniba",
    color: "bg-blue-50"
  }
];

const HomeServices: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Mūsu Galvenie Virzieni</h2>
          <div className="w-20 h-1.5 bg-blue-900 mb-8"></div>
          <p className="text-slate-600 text-xl leading-relaxed">
            REAL FOCUS piedāvā integrētus juridiskos risinājumus globālai biznesa un personīgajai izaugsmei.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {homeServices.map((service, index) => (
            <div key={index} className={`${service.color} p-12 flex flex-col h-full border border-slate-100 hover:shadow-2xl transition-all duration-500 group`}>
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 mb-10 leading-relaxed flex-grow">
                {service.description}
              </p>
              <Link 
                to={service.link} 
                className="inline-flex items-center gap-2 text-blue-900 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
              >
                Uzzināt vairāk <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

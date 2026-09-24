
import React from 'react';
import { FileText, Users, Landmark, Briefcase, Search, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <FileText className="text-blue-900" size={32} />,
    title: "Dokumentu sagatavošana",
    description: "Pilna juridiskā palīdzība dokumentu vākšanā, tulkošanā un legalizācijā atbilstoši izvēlētās valsts prasībām."
  },
  {
    icon: <Landmark className="text-blue-900" size={32} />,
    title: "Investīciju konsultācijas",
    description: "Palīdzība nekustamā īpašuma vai biznesa investīciju izvēlē, kas kvalificējas rezidences saņemšanai."
  },
  {
    icon: <Users className="text-blue-900" size={32} />,
    title: "Ģimenes apvienošana",
    description: "Uzturēšanās atļauju noformēšana visai ģimenei, nodrošinot kopīgu pārcelšanās procesu."
  },
  {
    icon: <Briefcase className="text-blue-900" size={32} />,
    title: "Digitālo nomadu atbalsts",
    description: "Specializēti risinājumi attālinātā darba veicējiem, palīdzot pierādīt ienākumus un saņemt vīzu."
  },
  {
    icon: <Search className="text-blue-900" size={32} />,
    title: "Juridiskā pārstāvība",
    description: "Jūsu interešu pārstāvēšana imigrācijas dienestos un vēstniecībās, nodrošinot veiksmīgu rezultātu."
  }
];

const ResidenceServices: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Rezidences Pakalpojumi</h2>
            <div className="w-20 h-1 bg-blue-900 mb-6"></div>
            <p className="text-slate-600 text-lg">
              Mēs nodrošinām pilna cikla atbalstu, lai jūsu pārcelšanās vai otrās rezidences iegūšana būtu maksimāli vienkārša un droša.
            </p>
          </div>
          <a href="/kontakti#contact" className="text-blue-900 font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
            Pieteikties konsultācijai <ChevronRight size={18} />
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
            <h3 className="text-2xl font-bold mb-4">Vēlaties pārcelties?</h3>
            <p className="text-blue-100 mb-8">
              Sazinieties ar mums, lai saņemtu individuālu izvērtējumu un uzzinātu, kura programma ir vispiemērotākā jūsu situācijai.
            </p>
            <a href="/kontakti#contact" className="bg-white text-blue-900 px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-slate-100 transition-colors">
              Sākt procesu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidenceServices;

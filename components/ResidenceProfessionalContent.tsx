
import React from 'react';
import { AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

const ResidenceProfessionalContent: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4 uppercase tracking-tight">Juridiskie aspekti: Uzturēšanās atļaujas</h2>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-8 leading-relaxed">
          <p>
            Uzturēšanās atļaujas iegūšana ārvalstīs ir nopietns solis, kas prasa ne tikai finansiālu ieguldījumu, bet arī precīzu vietējās likumdošanas ievērošanu. Katrai valstij ir savas specifiskas prasības attiecībā uz ienākumu pierādīšanu, veselības apdrošināšanu un sodāmības neesamību.
          </p>
          
          <div className="bg-slate-50 p-8 border-l-4 border-blue-900">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle size={20} className="text-blue-900" />
              Biežākie šķēršļi
            </h3>
            <ul className="space-y-3 list-disc pl-5 text-sm">
              <li><strong>Nepareizi noformēti dokumenti:</strong> Pat mazākā kļūda tulkojumā vai legalizācijā var izraisīt pieteikuma noraidīšanu.</li>
              <li><strong>Ienākumu avotu pierādīšana:</strong> Daudzas valstis (īpaši ES) veic stingru "Know Your Customer" (KYC) pārbaudi.</li>
              <li><strong>Termiņu neievērošana:</strong> Vīzu un uzturēšanās atļauju procesiem ir stingri noteikti logi, kuros jāiesniedz papildus informācija.</li>
              <li><strong>Nodokļu rezidences maiņa:</strong> Pārcelšanās uz citu valsti var radīt jaunas nodokļu saistības, par kurām jābūt informētam savlaicīgi.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 uppercase tracking-tight">Kāpēc izvēlēties profesionālu atbalstu?</h3>
          <p>
            Mūsu komanda sastāv no juristiem, kuriem ir gadu desmitiem ilga pieredze starptautiskajās tiesībās. Mēs ne tikai palīdzam aizpildīt veidlapas, bet arī izstrādājam stratēģiju, kā maksimāli palielināt jūsu izredzes saņemt pozitīvu lēmumu.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 border border-slate-100 bg-slate-50">
              <ShieldCheck className="text-blue-900 mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2">Drošība un Garantija</h4>
              <p className="text-sm">Mēs strādājam tikai ar oficiālām valsts programmām un nodrošinām pilnīgu procesa caurspīdību.</p>
            </div>
            <div className="p-6 border border-slate-100 bg-slate-50">
              <HelpCircle className="text-blue-900 mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2">Individuāls plāns</h4>
              <p className="text-sm">Katrs klients saņem personīgu konsultantu, kurš pārzina konkrētās valsts specifiku un valodu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidenceProfessionalContent;

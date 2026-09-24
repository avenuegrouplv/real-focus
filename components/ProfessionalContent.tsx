
import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';

const ProfessionalContent: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Juridiskais apskats: Uzņēmējdarbība AAE</h2>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-8 leading-relaxed">
          <p>
            Dibinot uzņēmumu Apvienotajos Arābu Emirātos, starptautiskajiem investoriem jāsaskaras ar vairākiem tiesiskiem un administratīviem izaicinājumiem. Lai gan AAE piedāvā pievilcīgu nodokļu režīmu un biznesa vidi, procesuālās kļūdas var radīt būtiskus finansiālus riskus.
          </p>
          
          <div className="bg-slate-50 p-8 border-l-4 border-blue-900">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle size={20} className="text-blue-900" />
              Būtiskākie riski
            </h3>
            <ul className="space-y-3 list-disc pl-5 text-sm">
              <li><strong>Nepareiza partnera izvēle juridiskajos jautājumos:</strong> Mūsu prioritāte ir caurspīdīgs un godīgs process un sadarbība ilgtermiņā.</li>
              <li><strong>Nepareiza jurisdikcijas vai darbības veida izvēle (kopā ir 46 jurisdikcijas):</strong> Izvēloties nepareizo jurisdikciju, var tikt ierobežota vai aizliegta darbība. Mēs šo risku izslēdzam.</li>
              <li><strong>Bankas konta atvēršanas sarežģījumi:</strong> Bieži atverot bankas kontu, ir jāaizpilda garas anketas un mēdz būt dažādi šķēršļi. Mēs palīdzam bankas dokumentu noformēšanā, lai viss noritētu raiti.</li>
              <li><strong>Izmaiņas likumdošanā:</strong> AAE tiesiskā vide pastāvīgi attīstās, tādēļ nepārtraukta juridiskā uzraudzība ir būtiska.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 uppercase tracking-tight">Kāpēc izvēlēties juridisko atbalstu?</h3>
          <p>
            Atšķirībā no vienkāršiem reģistrācijas aģentiem, REAL FOCUS nodrošina advokātu līmeņa pārraudzību visam procesam. Mēs ne tikai reģistrējam uzņēmumu, bet arī izstrādājam korporatīvo struktūru, kas pasargā īpašniekus no nevajadzīgas atbildības un optimizē starptautiskās nodokļu saistības.
          </p>

          <div className="mt-12">
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 w-fit"><Shield className="text-blue-900" /></div>
              <h4 className="font-bold text-slate-900">Konfidencialitāte</h4>
              <p className="text-sm">Jūsu datu aizsardzība un darījumu konfidencialitāte ir mūsu prioritāte, ievērojot augstākos starptautiskos ētikas standartus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalContent;

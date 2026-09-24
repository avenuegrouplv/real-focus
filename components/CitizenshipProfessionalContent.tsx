
import React from 'react';
import { AlertTriangle, ShieldCheck, Lock } from 'lucide-react';

const CitizenshipProfessionalContent: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4 uppercase tracking-tight">Juridiskā analīze: Pilsonības iegūšana</h2>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-8 leading-relaxed">
          <p>
            Otrās pilsonības iegūšana ir komplekss juridisks process, kas ietver starptautisko tiesību, nodokļu likumdošanas un imigrācijas noteikumu sintēzi. Atšķirībā no uzturēšanās atļaujām, pilsonība piešķir pastāvīgas un neatsaucamas tiesības, tādēļ valstis veic ārkārtīgi stingras pārbaudes.
          </p>
          
          <div className="bg-slate-50 p-8 border-l-4 border-blue-900">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle size={20} className="text-blue-900" />
              Kritiskie riska faktori
            </h3>
            <ul className="space-y-3 list-disc pl-5 text-sm">
              <li><strong>Due Diligence (pārbaudes) neizturēšana:</strong> Jebkura nepilnība vai nepatiesa informācija biogrāfijā var novest pie mūžīga aizlieguma piedalīties programmā.</li>
              <li><strong>Nelikumīgas shēmas:</strong> Tirgū pastāv "pelēkie" piedāvājumi, kas sola ātru pasi bez oficiāla procesa. Mēs strādājam tikai ar valsts apstiprinātām programmām.</li>
              <li><strong>Nodokļu saistības:</strong> Dažas pilsonības uzliek globālas nodokļu saistības (piemēram, ASV modelis). Ir būtiski izvēlēties valsti ar labvēlīgu nodokļu režīmu.</li>
              <li><strong>Politiskā stabilitāte:</strong> Programmu noteikumi var mainīties politisku lēmumu ietekmē, tādēļ savlaicīga rīcība ir būtiska.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 uppercase tracking-tight">Mūsu pieeja un konfidencialitāte</h3>
          <p>
            REAL FOCUS nodrošina advokātu līmeņa konfidencialitāti. Mēs saprotam, ka otrās pases iegūšana bieži ir saistīta ar vēlmi pēc privātuma un drošības, tādēļ visi dati tiek apstrādāti saskaņā ar augstākajiem drošības standartiem.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 border border-slate-100 bg-slate-50">
              <ShieldCheck className="text-blue-900 mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2">100% Legāls process</h4>
              <p className="text-sm">Mēs garantējam, ka katra iegūtā pase ir izdota oficiāli un ir reģistrēta visos valsts reģistros.</p>
            </div>
            <div className="p-6 border border-slate-100 bg-slate-50">
              <Lock className="text-blue-900 mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2">Datu aizsardzība</h4>
              <p className="text-sm">Jūsu personīgā informācija nekad netiek nodota trešajām pusēm bez Jūsu tiešas piekrišanas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenshipProfessionalContent;

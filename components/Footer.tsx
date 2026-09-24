
import React from 'react';
import { Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t-8 border-blue-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-blue-900 p-1.5">
                  <Scale className="text-white" size={24} />
                </div>
                <span className="font-bold text-xl tracking-widest text-white">REAL FOCUS</span>
              </Link>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Augstākā līmeņa juridiskās konsultācijas starptautiskiem uzņēmējiem. Mēs nodrošinām drošu un caurspīdīgu pāreju uz Apvienoto Arābu Emirātu biznesa vidi.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Pakalpojumi</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Uzņēmumu dibināšana</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Bankas kontu atbalsts</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Vīzu pakalpojumi</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Juridiskais audits</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Nodokļu optimizācija</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Jurisdikcijas</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#company-types" className="hover:text-blue-400 transition-colors">Dubai Mainland</a></li>
              <li><a href="/#company-types" className="hover:text-blue-400 transition-colors">Abu Dhabi (ADGM)</a></li>
              <li><a href="/#company-types" className="hover:text-blue-400 transition-colors">DMCC Free Zone</a></li>
              <li><a href="/#company-types" className="hover:text-blue-400 transition-colors">IFZA Dubai</a></li>
              <li><a href="/#company-types" className="hover:text-blue-400 transition-colors">RAK International</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Informācija</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/par-mums" className="hover:text-blue-400 transition-colors">Par mums</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Biežāk uzdotie jautājumi</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privātuma politika</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Lietošanas noteikumi</a></li>
              <li><Link to="/kontakti" className="hover:text-blue-400 transition-colors">Kontakti</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} REAL FOCUS CONSULTING FZCO. Visas tiesības aizsargātas.</p>
          <div className="flex gap-8">
            <span className="uppercase tracking-widest">Dubaija</span>
            <span className="uppercase tracking-widest">Rīga</span>
            <span className="uppercase tracking-widest">Londona</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useEffect } from 'react';
import { ShieldCheck, Layers, Globe2, Eye, Award, Users, Target, Briefcase } from 'lucide-react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import WhatsAppButton from '../components/WhatsAppButton.tsx';

const reasons = [
  {
    icon: <ShieldCheck className="text-blue-900" size={32} />,
    title: "Juridiska pieeja",
    desc: "Mēs neesam tikai aģenti – mēs esam juristi. Katrs solis ir tiesiski pamatots un drošs."
  },
  {
    icon: <Layers className="text-blue-900" size={32} />,
    title: "Strukturēts process",
    desc: "Nekādu pārsteigumu vai slēptu izmaksu. Skaidrs plāns no pirmās dienas."
  },
  {
    icon: <Globe2 className="text-blue-900" size={32} />,
    title: "Starptautiska pieredze",
    desc: "Mēs saprotam gan ES nodokļu vidi, gan AAE biznesa kultūru."
  },
  {
    icon: <Eye className="text-blue-900" size={32} />,
    title: "Caurspīdīgs modelis",
    desc: "Pilna atskaite par katru maksājumu un procesa stadiju reāllaikā."
  }
];

const stats = [
  { label: "Gadu pieredze", value: "12+" },
  { label: "Veiksmīgi projekti", value: "500+" },
  { label: "Jurisdikcijas", value: "46" },
  { label: "Klientu apmierinātība", value: "98%" }
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="bg-slate-50 py-20 border-b border-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
                Par REAL FOCUS
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Mēs esam augstas uzticamības juridiskais partneris, kas specializējas starptautiskā biznesa strukturēšanā un aktīvu aizsardzībā.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Target className="text-blue-900" />
                    Mūsu Misija
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Nodrošināt uzņēmējiem un investoriem drošu un tiesiski pamatotu ceļu uz starptautisko tirgu, izmantojot AAE un citu jurisdikciju sniegtās priekšrocības. Mēs ticam, ka juridiskā skaidrība ir pamats ilgtspējīgai biznesa izaugsmei.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Eye className="text-blue-900" />
                    Mūsu Vīzija
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Kļūt par vadošo juridisko konsultāciju biroju Baltijas reģionā, kas piedāvā ekskluzīvus un strukturētus risinājumus globālai rezidencei un korporatīvajai pārvaldībai.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                  alt="Office environment" 
                  className="rounded-lg shadow-2xl grayscale-[20%]"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-lg hidden md:block">
                  <p className="text-lg font-bold italic">"Kvalitāte un konfidencialitāte bez kompromisiem."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-blue-900 py-16 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 uppercase">Mūsu Vērtības</h2>
              <p className="text-slate-600">Mēs strādājam, ievērojot augstākos starptautiskos ētikas standartus un nodrošinot pilnīgu caurspīdību katrā sadarbības posmā.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((item, index) => (
                <div key={index} className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" 
                  alt="Professional meeting" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 uppercase">Pieredze un Ekspertīze</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 p-2 h-fit"><Award className="text-blue-900" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Sertificēti speciālisti</h4>
                      <p className="text-slate-600 text-sm">Mūsu komandā strādā juristi ar padziļinātu izpratni par starptautiskajām tiesībām un nodokļu plānošanu.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-100 p-2 h-fit"><Users className="text-blue-900" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Individuāla pieeja</h4>
                      <p className="text-slate-600 text-sm">Katrs klients ir unikāls. Mēs neizmantojam šablonus, bet izstrādājam risinājumus, kas atbilst tieši jūsu biznesa mērķiem.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-100 p-2 h-fit"><Briefcase className="text-blue-900" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Plašs partneru tīkls</h4>
                      <p className="text-slate-600 text-sm">Mēs sadarbojamies ar vadošajām AAE bankām un valsts iestādēm, nodrošinot ātru un efektīvu jautājumu risināšanu.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;

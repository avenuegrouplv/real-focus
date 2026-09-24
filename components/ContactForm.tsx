
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Paldies! Jūsu pieteikums ir saņemts. Mūsu konsultants sazināsies ar Jums 24 stundu laikā.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="bg-white shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 bg-blue-900 p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide">Sazinieties ar mums</h2>
              <p className="text-blue-100 mb-12">
                Piesakieties bezmaksas stratēģiskajai sarunai, lai uzzinātu labākās iespējas jūsu uzņēmumam Emirātos.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Tālrunis</div>
                    <div className="font-medium">+971 52 117 88 03</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">E-pasts</div>
                    <div className="font-medium">latvia@realfocus.ae</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Adrese</div>
                    <div className="font-medium text-sm">Downtown Dubai, Burj Khalifa District, Tower 1, Office 1201</div>
                  </div>
                </div>
              </div>

              {/* Working hours removed as per request */}
            </div>

            <div className="lg:col-span-3 p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Vārds, Uzvārds</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border-b-2 border-slate-100 py-3 px-1 focus:outline-none focus:border-blue-900 transition-colors"
                      placeholder="Ievadiet savu vārdu"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">E-pasts</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border-b-2 border-slate-100 py-3 px-1 focus:outline-none focus:border-blue-900 transition-colors"
                      placeholder="piemers@pasts.lv"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Telefona numurs</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border-b-2 border-slate-100 py-3 px-1 focus:outline-none focus:border-blue-900 transition-colors"
                    placeholder="+971 ..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Jūsu jautājums vai biznesa apraksts</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border-b-2 border-slate-100 py-3 px-1 focus:outline-none focus:border-blue-900 transition-colors resize-none"
                    placeholder="Kā mēs varam Jums palīdzēt?"
                  ></textarea>
                </div>

                <div className="flex items-center gap-4 py-4">
                  <input type="checkbox" required className="w-4 h-4 accent-blue-900" />
                  <span className="text-xs text-slate-400">Es piekrītu personas datu apstrādei saskaņā ar Privātuma politiku.</span>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-900 text-white font-bold py-5 uppercase tracking-widest hover:bg-blue-800 transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  Nosūtīt pieteikumu
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    badge: "Juridiskās Konsultācijas AAE",
    title: "Uzticams juridiskais partneris uzņēmuma izveidei AAE",
    description: "Mēs nodrošinām pilna cikla juridisko atbalstu starptautiskiem investoriem un digitālajiem uzņēmējiem, kuri vēlas strukturēti un droši uzsākt darbību Emirātos.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    partners: ["DIFC", "ADGM", "DMCC"]
  },
  {
    badge: "Uzturēšanās Atļaujas",
    title: "Uzturēšanās atļaujas saņemšana visā pasaulē",
    description: "Palīdzam noformēt uzturēšanās atļaujas Eiropā, Argentīnā, Taizemē un citās valstīs, nodrošinot pilnu juridisko pavadību un dokumentu sagatavošanu.",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80",
    partners: ["Eiropa", "Argentīna", "Taizeme"]
  },
  {
    badge: "Pilsonības Iegūšana",
    title: "Pilsonības Iegūšana un Otrā Pase",
    description: "Iegūstiet pilsonību un otru pasi tādās valstīs kā Kirgizstāna, Bulgārija, Rumānija, Meksika un dažādās salās, paplašinot savas ceļošanas un biznesa iespējas.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    partners: ["Kirgizstāna", "Bulgārija", "Rumānija", "Meksika"]
  }
];

interface HeroProps {
  singleSlideIndex?: number;
}

const Hero: React.FC<HeroProps> = ({ singleSlideIndex }) => {
  const [currentSlide, setCurrentSlide] = useState(singleSlideIndex ?? 0);
  const isSlider = singleSlideIndex === undefined;

  const nextSlide = useCallback(() => {
    if (!isSlider) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [isSlider]);

  const prevSlide = useCallback(() => {
    if (!isSlider) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [isSlider]);

  useEffect(() => {
    if (!isSlider) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide, isSlider]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 -skew-x-12 transform translate-x-20 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-block py-1 px-4 bg-blue-100 text-blue-900 text-xs font-bold tracking-widest uppercase mb-6">
                {slides[currentSlide].badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-8">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/kontakti#contact" 
                  className="bg-blue-900 text-white px-8 py-4 text-center font-bold tracking-wide uppercase hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
                >
                  Saņemt bezmaksas konsultāciju
                  <ArrowRight size={18} />
                </a>
                <a 
                  href="/#services" 
                  className="bg-white border-2 border-slate-200 text-slate-800 px-8 py-4 text-center font-bold tracking-wide uppercase hover:border-blue-900 transition-all"
                >
                  Mūsu pakalpojumi
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
                <div className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  {currentSlide === 0 ? "Atzīts partneris:" : "Valstis:"}
                </div>
                {slides[currentSlide].partners.map((partner) => (
                  <div key={partner} className="font-bold text-lg text-slate-500">{partner}</div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="hidden lg:block relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 border-[12px] border-white shadow-2xl"
              >
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="w-full h-[500px] object-cover grayscale-[20%]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-900/10 -z-10"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 border-2 border-blue-900/20 -z-10"></div>
          </div>
        </div>

        {/* Navigation Controls - Minimalist Design at Bottom Right */}
        {isSlider && (
          <div className="absolute bottom-8 right-8 flex items-center gap-6 z-20">
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 transition-all duration-300 ${currentSlide === index ? 'bg-blue-900 w-12' : 'bg-slate-300 w-6'}`}
                  aria-label={`Slaids ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2 ml-4">
              <button 
                onClick={prevSlide}
                className="p-2 text-slate-400 hover:text-blue-900 transition-colors"
                aria-label="Iepriekšējais slaids"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 text-slate-400 hover:text-blue-900 transition-colors"
                aria-label="Nākamais slaids"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

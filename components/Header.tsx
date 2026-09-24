
import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sākums', href: '/' },
    { label: 'Uzņēmums AAE', href: '/uznemums-aae' },
    { label: 'Uzturēšanās Atļaujas', href: '/uzturesanas-atlaujas' },
    { label: 'Pilsonības Iegūšana', href: '/pilsoniba' },
    { label: 'Par mums', href: '/par-mums' },
    { label: 'Kontakti', href: '/kontakti' },
  ];

  const isExternal = (href: string) => href.startsWith('/#');

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-blue-900 p-1.5">
            <Scale className="text-white" size={24} />
          </div>
          <span className={`font-bold text-xl tracking-widest ${isScrolled ? 'text-blue-900' : 'text-blue-900'}`}>
            REAL FOCUS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.href.startsWith('/#') ? (
              <a 
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-900 transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                  location.pathname === item.href ? 'text-blue-900' : 'text-slate-700 hover:text-blue-900'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
          <a 
            href="/kontakti#contact"
            className="bg-blue-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-blue-800 transition-all uppercase tracking-wider"
          >
            Konsultācija
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-blue-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute top-full left-0 right-0 shadow-xl py-6 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            item.href.startsWith('/#') ? (
              <a 
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-800 border-b border-slate-50 pb-2"
              >
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.label}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium border-b border-slate-50 pb-2 ${
                  location.pathname === item.href ? 'text-blue-900' : 'text-slate-800'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
          <a 
            href="/kontakti#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-blue-900 text-white px-6 py-3 text-center font-bold"
          >
            SAŅEMT KONSULTĀCIJU
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

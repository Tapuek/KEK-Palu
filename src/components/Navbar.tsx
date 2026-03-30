import { motion } from 'motion/react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_industries'), href: '#industries' },
    { name: t('nav_advantages'), href: '#advantages' },
    { name: t('nav_infrastructure'), href: '#infrastructure' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Logo 
              className="w-32 md:w-40 h-auto transition-all duration-300" 
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-zinc-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-zinc-600' : 'text-white/90'
              }`}
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'ID' : 'EN'}
            </button>

            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-1 ${
                isScrolled
                  ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-md hover:shadow-lg'
                  : 'bg-white text-orange-900 hover:bg-zinc-100'
              }`}
            >
              {t('nav_invest')} <ChevronRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-medium ${
                isScrolled ? 'text-zinc-600' : 'text-white/90'
              }`}
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'ID' : 'EN'}
            </button>
            <button
              className={`p-2 rounded-md ${isScrolled ? 'text-zinc-900' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-xl md:hidden"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-zinc-700 hover:text-orange-600 hover:bg-zinc-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-md text-base font-semibold bg-orange-600 text-white hover:bg-orange-700"
              >
                {t('nav_invest')}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

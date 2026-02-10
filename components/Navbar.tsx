import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }
      
      const sections = ['competencies', 'journey', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'competencies', label: t.nav.competencies },
    { id: 'journey', label: t.nav.journey },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'cn' : 'en');
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-[#faf9f6]/90 backdrop-blur-md border-b border-[#ededeb]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div 
          className="font-bold text-xl text-[#37352f] tracking-tight cursor-pointer hover:text-[#6940A5] transition-colors" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Yan Zhu
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm font-medium text-[#787774]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`hover:text-[#6940A5] transition-colors relative pb-1 ${
                  activeSection === item.id ? 'text-[#37352f]' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#6940A5] rounded-full animate-fade-in" />
                )}
              </button>
            ))}
          </div>
          
          <div className="h-6 w-px bg-[#ededeb] hidden md:block" />

          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-[#787774] hover:text-[#6940A5] transition-colors px-3 py-1.5 rounded-full hover:bg-[#F7F6F3]"
          >
            <Globe size={16} />
            <span>{language === 'en' ? 'CN' : 'EN'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
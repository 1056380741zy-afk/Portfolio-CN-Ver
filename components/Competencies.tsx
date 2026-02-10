import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { BarChart3, Globe2, Mic2 } from 'lucide-react';

export const Competencies: React.FC = () => {
  const { ref, isVisible } = useReveal();
  const { t } = useLanguage();

  const ICONS = [
    <BarChart3 className="text-[#6940A5]" size={32} />,
    <Globe2 className="text-[#6940A5]" size={32} />,
    <Mic2 className="text-[#6940A5]" size={32} />
  ];

  return (
    <section id="competencies" className="py-24 px-6 max-w-7xl mx-auto">
      <div 
        ref={ref}
        className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl font-bold mb-16 text-[#37352f] uppercase">{t.competencies.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.competencies.items.map((comp, idx) => (
            <div 
              key={idx} 
              className="p-10 bg-white border border-[#ededeb] rounded-[2.5rem] hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 group flex flex-col"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#EAE4F2] rounded-2xl flex items-center justify-center mb-8 border border-[#e9e3f0] group-hover:scale-110 transition-transform duration-500">
                {ICONS[idx]}
              </div>
              
              <h3 className="text-2xl font-black mb-6 text-[#37352f]">{comp.title}</h3>
              
              <ul className="space-y-4 flex-1">
                {comp.list.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-[#787774] text-[15px] group-hover:text-[#37352f] transition-colors">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d3d1cb] group-hover:bg-[#6940A5] shrink-0 transition-colors" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
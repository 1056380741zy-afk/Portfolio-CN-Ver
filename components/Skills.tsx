import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { Wrench, Languages, Globe } from 'lucide-react';

// Using SimpleIcons for brand logos
const TOOLS = [
  // Design & Web
  { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/21759b', category: 'Design & Web' },
  { name: 'Elementor', icon: 'https://cdn.simpleicons.org/elementor/92003B', category: 'Design & Web' },
  { name: 'Canva', icon: '/images/canva-icon-logo-symbol_32329175.png', category: 'Design & Web' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E', category: 'Design & Web' },
  { name: 'Illustrator', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg', category: 'Design & Web' },
  { name: 'Dreamweaver', icon: '/images/Dreamweaver.png', category: 'Design & Web' },
  
  // Marketing & Ops
  { name: 'Stripo', icon: 'https://cdn.simpleicons.org/gmail/EA4335', category: 'Marketing' }, // Using Gmail style for Email Ops
  { name: 'Meta Biz', icon: 'https://cdn.simpleicons.org/meta/0668E1', category: 'Marketing' },
  { name: 'LinkedIn', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg', category: 'Marketing' },
  { name: 'TikTok', icon: 'https://cdn.simpleicons.org/tiktok/000000', category: 'Marketing' },
  { name: 'Google Analytics', icon: 'https://cdn.simpleicons.org/googleanalytics/E37400', category: 'Marketing' },
  
  // Office & Business
  { name: 'Microsoft Suite', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', category: 'Business' },
];

const LANGUAGE_COLORS = [
  'bg-[#DDEDEA] text-[#0F7B6C]', // Arabic
  'bg-[#DDEBF1] text-[#0B6E99]', // English
  'bg-[#FBE4E4] text-[#E03E3E]', // Chinese
];

export const Skills: React.FC = () => {
  const { ref, isVisible } = useReveal();
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div 
        ref={ref}
        className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl font-bold mb-16 text-[#37352f] uppercase">{t.skills.title}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Group 1: Tools & Software (Icon Grid) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-[#F7F6F3] border border-[#ededeb] flex items-center justify-center text-[#37352f] shadow-sm">
                  <Wrench size={20} />
               </div>
               <h3 className="text-xl font-bold text-[#37352f]">{t.skills.toolsTitle}</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
               {TOOLS.map((tool, idx) => (
                  <div 
                    key={idx}
                    className="group bg-white border border-[#E1E1E1] rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:border-[#d3d1cb] hover:-translate-y-1 transition-all duration-300 min-h-[110px]"
                  >
                     <div className="w-10 h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                        <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100" />
                     </div>
                     <span className="text-xs font-bold text-[#787774] group-hover:text-[#37352f] transition-colors text-center">
                        {tool.name}
                     </span>
                  </div>
               ))}
            </div>
          </div>

          {/* Group 2: Languages & Core Competencies */}
          <div className="lg:col-span-4 flex flex-col gap-6">
             
             {/* Languages */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F6F3] border border-[#ededeb] flex items-center justify-center text-[#37352f] shadow-sm">
                        <Languages size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-[#37352f]">{t.skills.languagesTitle}</h3>
                </div>

                <div className="space-y-3">
                    {t.skills.languages.map((lang, idx) => (
                        <div key={idx} className="bg-white border border-[#E1E1E1] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#37352f]"></div>
                                <span className="font-bold text-[#37352f] text-lg">{lang.language}</span>
                            </div>
                            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${LANGUAGE_COLORS[idx] || 'bg-gray-100 text-gray-800'} self-start sm:self-auto`}>
                                {lang.level}
                            </span>
                        </div>
                    ))}
                </div>
             </div>

             {/* Regional Competency Context */}
             <div className="bg-white border border-[#E1E1E1] rounded-xl p-6 flex-1 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4 text-[#37352f] font-bold text-sm uppercase tracking-wide">
                   <Globe size={18} className="text-[#0B6E99]" />
                   {t.skills.regionalTitle}
                </div>
                <p 
                  className="text-sm text-[#787774] leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: t.skills.regionalDesc }}
                />
                <div className="mt-auto flex gap-2 flex-wrap">
                    {t.skills.regionalTags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#F7F6F3] border border-[#ededeb] rounded text-[10px] font-bold text-[#787774] uppercase">
                        {tag}
                      </span>
                    ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
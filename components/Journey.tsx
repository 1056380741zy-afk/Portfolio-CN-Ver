import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  GraduationCap, 
  Briefcase, 
  Layout, 
  Search, 
  Mail, 
  Languages, 
  Share2, 
  Trophy, 
  MapPin 
} from 'lucide-react';

const Icons: Record<string, React.ElementType> = {
  GraduationCap, 
  Briefcase, 
  Layout, 
  Search, 
  Mail, 
  Languages, 
  Share2, 
  Trophy, 
  MapPin
};

export const Journey: React.FC = () => {
  const { ref, isVisible } = useReveal();
  const { t } = useLanguage();

  return (
    <section id="journey" className="py-24 px-6 max-w-6xl mx-auto">
      <div 
        ref={ref}
        className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl font-bold mb-16 text-[#37352f] uppercase">
          {t.journey.title}
        </h2>

        <div className="space-y-0">
          {t.journey.items.map((item, index) => {
            const IconComponent = Icons[item.icon] || Briefcase;
            const isLast = index === t.journey.items.length - 1;

            return (
              <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16 group relative">
                {/* Left Column (Metadata) - 25% */}
                <div className="md:w-1/4 flex flex-col items-start gap-2 md:text-right md:items-end">
                   <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                     item.type === 'experience' 
                       ? 'bg-[#DDEBF1] text-[#0B6E99]' // Notion Blue
                       : 'bg-[#FAEBDD] text-[#D9730D]' // Notion Orange
                   }`}>
                     {item.typeLabel}
                   </span>
                   <div className="font-bold text-[#787774] text-sm md:text-base">
                     {item.period}
                   </div>
                   <div className="flex items-center gap-1.5 text-xs text-[#9B9A97] font-medium">
                     <MapPin size={12} />
                     {item.location}
                   </div>
                </div>

                {/* Right Column (Content) - 75% */}
                <div className={`md:w-3/4 pb-12 relative ${!isLast ? 'border-b border-[#ededeb]' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-[-2.5rem] md:left-[-4.5rem] top-2 w-3 h-3 rounded-full bg-white border-[3px] border-[#d3d1cb] z-10 shadow-sm" />

                  {/* Header Content */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#ededeb] flex items-center justify-center shrink-0 shadow-sm text-[#37352f]">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#37352f] leading-tight mb-1">
                        {item.title}
                      </h3>
                      <div className="text-lg text-[#787774] font-medium">
                        {item.organization}
                      </div>
                    </div>
                  </div>

                  {/* Nested Roles */}
                  {item.roles && (
                    <div className="pl-4 border-l-2 border-[#ededeb] ml-6 mb-6 space-y-3">
                      {item.roles.map((role: any, rIdx: number) => (
                        <div key={rIdx} className="relative">
                          <div className="absolute -left-[21px] top-2 w-2 h-2 rounded-full bg-[#d3d1cb]" />
                          <div className="text-sm font-bold text-[#37352f]">{role.title}</div>
                          <div className="text-xs text-[#787774]">{role.period}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Focus / Honor Tags */}
                  {(item.focus || item.honor) && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.focus && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F7F6F3] rounded-md text-xs font-bold text-[#37352f]">
                          <span className="text-[#9B9A97] font-normal">Focus:</span> {item.focus}
                        </div>
                      )}
                      {item.honor && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FBF3DB] rounded-md text-xs font-bold text-[#DFAB01] border border-[#e8deee]">
                          <Trophy size={12} /> {item.honor}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Detailed Bullets */}
                  {item.detailedBullets && (
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {item.detailedBullets.map((bullet: any, bIdx: number) => {
                        const BulletIcon = Icons[bullet.icon] || Layout;
                        return (
                          <div key={bIdx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F7F6F3] transition-colors border border-transparent hover:border-[#ededeb]">
                            <div className="mt-0.5 text-[#9B9A97]">
                              <BulletIcon size={16} />
                            </div>
                            <div className="text-sm text-[#37352f] leading-relaxed">
                              {bullet.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Stats Grid */}
                  {item.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {item.stats.map((stat: any, sIdx: number) => (
                        <div key={sIdx} className="bg-[#F7F6F3] p-4 rounded-2xl border border-[#ededeb] flex flex-col justify-center items-start hover:shadow-md transition-shadow">
                           <div className="text-3xl font-black text-[#6940A5] mb-2">{stat.value}</div>
                           <div className="text-xs font-bold text-[#787774] uppercase tracking-wide leading-relaxed" dangerouslySetInnerHTML={{__html: stat.label}} />
                        </div>
                      ))}
                    </div>
                  )}
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
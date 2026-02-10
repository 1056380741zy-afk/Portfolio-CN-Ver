import React from 'react';
import { MapPin, Globe, Plane, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { ref, isVisible } = useReveal();
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div 
        ref={ref}
        className={`bg-white border border-[#ededeb] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Notion Cover Gradient */}
        <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-r from-[#F7F6F3] via-[#EAE4F2] to-[#DDEBF1] opacity-60" />
        
        <div className="relative z-10 mt-16 md:mt-24">
            {/* Notion Icon */}
            <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-2xl border border-[#ededeb] shadow-sm flex items-center justify-center text-5xl md:text-7xl mb-8 hover:scale-105 transition-transform duration-300 cursor-default select-none">
                🌴
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-8xl font-black text-[#37352f] tracking-tighter mb-8">
                Yan Zhu
            </h1>

            {/* Notion Properties Grid */}
            <div className="flex flex-col gap-2 mb-10 max-w-2xl">
                {/* Property 1 */}
                <div className="flex items-center gap-4 text-[#787774] py-1">
                    <div className="w-32 flex items-center gap-2 text-sm font-medium shrink-0">
                        <MapPin size={16} /> {t.hero.locationLabel}
                    </div>
                    <div className="flex-1">
                        <span className="inline-flex items-center px-2 py-1 bg-[#EAE4F2] text-[#6940A5] rounded text-sm font-medium">
                            {t.hero.locationValue}
                        </span>
                    </div>
                </div>
                {/* Property 2 */}
                <div className="flex items-center gap-4 text-[#787774] py-1">
                    <div className="w-32 flex items-center gap-2 text-sm font-medium shrink-0">
                        <Globe size={16} /> {t.hero.workModeLabel}
                    </div>
                    <div className="flex-1">
                        <span className="inline-flex items-center px-2 py-1 bg-[#DDEBF1] text-[#0B6E99] rounded text-sm font-medium">
                            {t.hero.workModeValue}
                        </span>
                    </div>
                </div>
                {/* Property 3 */}
                <div className="flex items-center gap-4 text-[#787774] py-1">
                    <div className="w-32 flex items-center gap-2 text-sm font-medium shrink-0">
                        <Plane size={16} /> {t.hero.statusLabel}
                    </div>
                    <div className="flex-1">
                        <span className="inline-flex items-center px-2 py-1 bg-[#FAEBDD] text-[#D9730D] rounded text-sm font-medium">
                            {t.hero.statusValue}
                        </span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#ededeb] mb-10" />

            {/* Intro Text Block */}
            <div className="max-w-4xl">
                 <h2 className="text-2xl md:text-3xl font-bold text-[#37352f] leading-tight mb-8">
                    {t.hero.title}
                 </h2>
                 
                 <div className="space-y-4 text-lg md:text-xl text-[#37352f] leading-relaxed mb-10 font-medium">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3">
                        <span className="text-[#9B9A97] text-base shrink-0">{t.hero.focusLabel}</span>
                        <span className="bg-[#EAE4F2] px-3 py-1 rounded-md text-[#6940A5] font-bold">
                            {t.hero.focusValue}
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3">
                        <span className="text-[#9B9A97] text-base shrink-0">{t.hero.specLabel}</span>
                        <span className="bg-[#DDEBF1] px-3 py-1 rounded-md text-[#0B6E99] font-bold">
                            {t.hero.specValue}
                        </span>
                    </div>
                 </div>

                 {/* Notion-style Buttons */}
                 <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center justify-center gap-2 px-6 py-3 bg-[#37352f] text-white rounded-lg font-medium hover:bg-[#2F2E2A] transition-all shadow-sm hover:shadow-md"
                    >
                        {t.hero.btnProjects}
                        <ArrowRight size={16} className="text-white/70 group-hover:translate-x-1 transition-transform group-hover:text-white" />
                    </button>
                    <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#ededeb] text-[#37352f] rounded-lg font-medium hover:bg-[#F7F6F3] transition-colors"
                    >
                        {t.hero.btnContact}
                    </button>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};
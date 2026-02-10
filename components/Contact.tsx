import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { ref, isVisible } = useReveal();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('zy18964266810@outlook.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div 
        ref={ref}
        className={`bg-white border border-[#ededeb] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#6940A5]/10 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Decorative Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-[3rem]">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#EAE4F2]/60 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#DDEBF1]/60 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#ededeb] rounded-full text-[#6940A5] text-xs font-bold uppercase tracking-widest mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#6940A5] animate-pulse" />
            {t.contact.tag}
          </div>
          
          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-[#37352f] tracking-tighter leading-[1.1]">
            {t.contact.titleStart} <span className="text-[#6940A5]">{t.contact.titleEnd}</span>
          </h2>
          
          {/* Description */}
          <p className="text-[#37352f] text-lg md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
            {t.contact.descStart} <span className="bg-[#EAE4F2] px-1 rounded text-[#6940A5]">{t.contact.descHighlight}</span> {t.contact.descEnd}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
            {/* Email / Copy Button */}
            <button 
              onClick={handleCopyEmail}
              className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#37352f] text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#37352f]/20 hover:-translate-y-1 min-w-[220px]"
            >
              <div className="relative z-10 flex items-center gap-3">
                {copied ? <Check size={20} /> : <Mail size={20} />}
                {copied ? t.contact.btnCopied : t.contact.btnCopy}
              </div>
              <div className={`absolute inset-0 ${copied ? 'bg-[#0F7B6C]' : 'bg-[#6940A5]'} translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out`} />
            </button>
            
            {/* LinkedIn Button */}
            <a 
              href="https://www.linkedin.com/in/ayna-yan-zhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white/80 backdrop-blur-sm text-[#37352f] border border-[#ededeb] rounded-full font-bold text-lg hover:bg-white hover:border-[#D3D1CB] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-w-[220px]"
            >
              <Linkedin size={20} className="text-[#0B6E99]" />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 text-sm text-[#9B9A97] font-medium">
            {t.contact.orEmail} <a href="mailto:zy18964266810@outlook.com" className="hover:text-[#6940A5] transition-colors underline decoration-dotted underline-offset-4">zy18964266810@outlook.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};
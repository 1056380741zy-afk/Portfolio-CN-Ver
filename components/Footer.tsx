import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 bg-[#2b2a27] text-[#787774] border-t border-[#3a3936] text-center text-sm">
      <div className="flex flex-col gap-2">
        <p>© {new Date().getFullYear()} Yan Zhu. {t.footer.rights}</p>
        <div className="flex justify-center gap-4 text-xs">
          <span>Shanghai</span>
          <span>•</span>
          <span>Dubai</span>
          <span>•</span>
          <span>Remote</span>
        </div>
      </div>
    </footer>
  );
};
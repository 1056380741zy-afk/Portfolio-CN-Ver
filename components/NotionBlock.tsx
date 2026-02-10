import React from 'react';

interface NotionBlockProps {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  className?: string;
}

export const NotionBlock: React.FC<NotionBlockProps> = ({ children, title, icon, rightElement, className = '' }) => {
  return (
    <div className={`mb-8 p-6 bg-white border border-[#E1E1E1] rounded-xl shadow-sm ${className}`}>
      {(title || rightElement) && (
        <div className="flex items-center justify-between mb-4 border-b border-[#F1F1EF] pb-2">
           {title && (
             <h3 className="text-lg font-bold text-[#37352f] flex items-center gap-2">
               {icon && <span className="flex items-center justify-center text-xl">{icon}</span>}
               {title}
             </h3>
           )}
           {rightElement}
        </div>
      )}
      <div className="text-[#37352f] leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export const NotionTag: React.FC<{ children: React.ReactNode; color?: string; className?: string }> = ({ children, color = 'gray', className = '' }) => {
  const colors: Record<string, string> = {
    gray:   'bg-[#EBECED] text-[#9B9A97]',
    brown:  'bg-[#E9E5E3] text-[#64473A]',
    orange: 'bg-[#FAEBDD] text-[#D9730D]',
    yellow: 'bg-[#FBF3DB] text-[#DFAB01]',
    green:  'bg-[#DDEDEA] text-[#0F7B6C]',
    blue:   'bg-[#DDEBF1] text-[#0B6E99]',
    purple: 'bg-[#EAE4F2] text-[#6940A5]',
    pink:   'bg-[#F4DFEB] text-[#AD1A72]',
    red:    'bg-[#FBE4E4] text-[#E03E3E]',
  };
  
  const selectedColor = colors[color] || colors.gray;

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-sm ${selectedColor} ${className} whitespace-nowrap`}>
      {children}
    </span>
  );
};

export const NotionCallout: React.FC<{ children: React.ReactNode; icon?: React.ReactNode; className?: string }> = ({ children, icon, className = '' }) => {
  return (
    <div className={`p-4 rounded-lg bg-[#F7F6F3] flex gap-4 text-[#37352f] border border-transparent hover:border-[#E1E1E1] transition-colors ${className}`}>
      {icon && <div className="text-2xl select-none flex items-start pt-0.5">{icon}</div>}
      <div className="flex-1 leading-relaxed text-base">
        {children}
      </div>
    </div>
  );
};

export const NotionProperty: React.FC<{ name: string; value: React.ReactNode; icon?: React.ReactNode }> = ({ name, value, icon }) => {
  return (
    <div className="flex items-start py-1.5 text-[15px]">
      <div className="w-32 min-w-[8rem] text-[#9B9A97] flex items-center gap-2 truncate">
         {icon}
         <span>{name}</span>
      </div>
      <div className="flex-1 text-[#37352f] flex flex-wrap gap-2 items-center font-medium min-h-[24px]">
        {value}
      </div>
    </div>
  );
};
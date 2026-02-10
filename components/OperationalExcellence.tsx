import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { FileText, Users, ArrowRight, Database, Bot, Globe, FileCheck } from 'lucide-react';

export const OperationalExcellence: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="operations" className="py-20 px-6 max-w-7xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl font-bold mb-16 text-[#37352f] uppercase">Operational Excellence</h2>

        {/* Block 1: Operational Transition */}
        <div className="mb-20">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Connecting Line (Desktop) */}
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#E1E1E1] -z-10 hidden md:block transform -translate-y-1/2"></div>

             {/* Stage 1 */}
             <div className="bg-white border border-[#E1E1E1] p-6 rounded-2xl relative group hover:border-[#9B9A97] transition-colors">
                <div className="absolute top-1/2 right-[-20px] hidden md:block bg-[#faf9f6] p-1 rounded-full z-20 text-[#D3D1CB]">
                    <ArrowRight size={16} />
                </div>
                <div className="text-xs font-bold text-[#9B9A97] uppercase tracking-widest mb-2 bg-[#faf9f6] inline-block px-2 py-0.5 rounded">Phase 01</div>
                <h3 className="text-lg font-bold text-[#37352f] mb-1">Solo Execution</h3>
                <p className="text-sm text-[#787774] font-medium">1 Pioneer (Founder Mode)</p>
             </div>

             {/* Stage 2 */}
             <div className="bg-white border border-[#0B6E99] shadow-lg shadow-[#0B6E99]/5 p-6 rounded-2xl relative transform md:-translate-y-2">
                <div className="absolute top-1/2 right-[-20px] hidden md:block bg-[#faf9f6] p-1 rounded-full z-20 text-[#D3D1CB]">
                    <ArrowRight size={16} />
                </div>
                <div className="text-xs font-bold text-[#0B6E99] uppercase tracking-widest mb-2 bg-[#DDEBF1] inline-block px-2 py-0.5 rounded">Phase 02</div>
                <h3 className="text-lg font-bold text-[#37352f] mb-1">Scaled Operations</h3>
                <p className="text-sm text-[#787774] font-medium">8 Interns (Process Architect)</p>
             </div>

             {/* Stage 3 */}
             <div className="bg-white border border-[#E1E1E1] p-6 rounded-2xl relative group hover:border-[#9B9A97] transition-colors">
                <div className="text-xs font-bold text-[#9B9A97] uppercase tracking-widest mb-2 bg-[#faf9f6] inline-block px-2 py-0.5 rounded">Phase 03</div>
                <h3 className="text-lg font-bold text-[#37352f] mb-1">Strategic Continuity</h3>
                <p className="text-sm text-[#787774] font-medium">2025 Transition</p>
             </div>
          </div>
        </div>

        {/* Block 2: SOP Repository Grid */}
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#37352f] mb-10">
            Process Architecture & SOP Repository
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: CMS */}
            <div className="bg-[#F7F6F3] border border-[#E1E1E1] p-8 rounded-[2rem] flex flex-col hover:border-[#D3D1CB] transition-all duration-300 hover:shadow-sm group">
                <div className="w-12 h-12 bg-white rounded-xl border border-[#E1E1E1] flex items-center justify-center mb-6 text-[#D9730D] shadow-sm group-hover:scale-110 transition-transform">
                    <Database size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[#37352f] text-lg mb-2">CMS Mastery</h4>
                <p className="text-sm text-[#787774] mb-8 leading-relaxed">Standardized WordPress & Elementor workflows to ensure design consistency across teams.</p>
                <div className="mt-auto bg-white border border-[#E1E1E1] rounded-xl p-4 text-xs font-bold text-[#37352f] flex items-center gap-3 shadow-sm">
                    <div className="bg-[#FAEBDD] p-1.5 rounded text-[#D9730D]">
                        <FileText size={14} />
                    </div>
                    15+ Technical Procedures
                </div>
            </div>

            {/* Card 2: Digital */}
            <div className="bg-[#F7F6F3] border border-[#E1E1E1] p-8 rounded-[2rem] flex flex-col hover:border-[#D3D1CB] transition-all duration-300 hover:shadow-sm group">
                <div className="w-12 h-12 bg-white rounded-xl border border-[#E1E1E1] flex items-center justify-center mb-6 text-[#6940A5] shadow-sm group-hover:scale-110 transition-transform">
                    <Bot size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[#37352f] text-lg mb-2">Digital Automation</h4>
                <p className="text-sm text-[#787774] mb-8 leading-relaxed">Implemented AI-driven workflows for multi-channel EDM & Social Media content generation.</p>
                
                {/* Handover Document Preview */}
                <div className="mt-auto bg-white rounded-xl border border-[#E1E1E1] p-3 shadow-sm relative overflow-hidden group-hover:translate-y-[-2px] transition-transform">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#6940A5]"></div>
                    <div className="flex items-center gap-2 mb-2 border-b border-[#F7F6F3] pb-2">
                        <FileCheck size={14} className="text-[#6940A5]" />
                        <div className="text-[10px] font-bold text-[#37352f] uppercase tracking-wider">Handover_Protocol_v2.pdf</div>
                    </div>
                    <div className="space-y-1.5 opacity-40">
                        <div className="h-1.5 w-full bg-[#EAE4F2] rounded-full"></div>
                        <div className="h-1.5 w-2/3 bg-[#EAE4F2] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Card 3: MENA */}
            <div className="bg-[#F7F6F3] border border-[#E1E1E1] p-8 rounded-[2rem] flex flex-col hover:border-[#D3D1CB] transition-all duration-300 hover:shadow-sm group">
                <div className="w-12 h-12 bg-white rounded-xl border border-[#E1E1E1] flex items-center justify-center mb-6 text-[#0B6E99] shadow-sm group-hover:scale-110 transition-transform">
                    <Globe size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[#37352f] text-lg mb-2">MENA Operations</h4>
                <p className="text-sm text-[#787774] mb-8 leading-relaxed">Established protocols for WhatsApp Private Domain management & Visa Approval workflows.</p>
                
                <div className="mt-auto bg-white border border-[#E1E1E1] rounded-xl p-4 text-xs font-bold text-[#37352f] flex items-center gap-3 shadow-sm">
                    <div className="bg-[#DDEBF1] p-1.5 rounded text-[#0B6E99]">
                        <Users size={14} />
                    </div>
                    Team Handover Ready
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
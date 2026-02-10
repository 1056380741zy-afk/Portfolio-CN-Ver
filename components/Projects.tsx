import React from 'react';
import { WEB3_PROJECTS, EXHIBITIONS } from '../constants';
import { Facebook, Linkedin, FileText, Users, ArrowRight, Database, Bot, Globe, FileCheck } from 'lucide-react';

// Brand Icons Components
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382C17.112 14.202 15.344 13.332 15.016 13.212C14.688 13.092 14.448 13.032 14.208 13.392C13.968 13.752 13.28 14.562 13.072 14.802C12.864 15.042 12.656 15.072 12.296 14.892C11.936 14.712 10.776 14.332 9.40001 13.106C8.30401 12.128 7.56401 10.922 7.34801 10.542C7.13201 10.162 7.32401 9.962 7.50401 9.782C7.66401 9.622 7.86001 9.362 8.04001 9.152C8.22001 8.942 8.28001 8.782 8.40001 8.542C8.52001 8.302 8.46001 8.092 8.36401 7.892C8.26801 7.692 7.54801 5.922 7.24801 5.202C6.95601 4.502 6.66001 4.598 6.44401 4.598C6.24801 4.592 6.02801 4.592 5.80801 4.592C5.58801 4.592 5.22801 4.672 4.92401 5.002C4.62001 5.332 3.75601 6.142 3.75601 7.792C3.75601 9.442 4.95601 11.042 5.12401 11.262C5.29201 11.482 7.50801 14.902 10.9 16.366C11.708 16.714 12.336 16.922 12.824 17.078C13.84 17.402 14.764 17.354 15.492 17.246C16.308 17.126 18.004 16.222 18.356 15.232C18.708 14.242 18.708 13.394 18.6 13.212C18.492 13.032 18.252 12.972 17.892 12.792H17.472Z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686C17.589 6.686 15.795 6.059 14.333 5.002V15.708C14.333 18.667 11.956 21.056 9.027 21.056C6.101 21.056 3.727 18.679 3.727 15.75C3.727 12.822 6.104 10.445 9.027 10.445C9.406 10.445 9.771 10.495 10.125 10.587V13.566C9.805 13.431 9.431 13.351 9.027 13.351C7.708 13.351 6.637 14.422 6.637 15.741C6.637 17.06 7.708 18.131 9.027 18.131C10.346 18.131 11.417 17.06 11.417 15.741V2H14.333C14.333 4.298 16.204 6.169 18.502 6.169V9.088C18.86 9.088 19.229 9.066 19.589 9.027V6.686Z" />
  </svg>
);

const WordPressIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.158 0C5.532 0 0 5.532 0 12.158c0 5.163 3.328 9.542 8.019 11.385L3.38 9.385c-.068-.23-.105-.473-.105-.722 0-1.42 1.15-2.57 2.57-2.57.87 0 1.643.432 2.118 1.096L6.5 7.828c-.29-.36-.732-.59-1.23-.59-.88 0-1.592.713-1.592 1.592 0 .17.027.332.077.485l5.122 14.168c1.07.2 2.176.305 3.313.305 2.176 0 4.228-.4 6.082-1.11L14.47 11.565l-1.35 4.125-1.96-6.023 2.157-6.657H13.8l2.565 7.917 2.65-8.136c1.674 2.16 2.67 4.86 2.67 7.792 0 1.48-.255 2.9-.718 4.225l-4.11-12.7z" />
  </svg>
);

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold mb-16 text-[#37352f] uppercase">Selected Projects</h2>

        {/* Part A: Web3 Market Strategy */}
        <div className="mb-32">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-[#37352f]" />
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#37352f]">
              Web3 Market Strategy & Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WEB3_PROJECTS.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white border border-[#ededeb] rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Cover Image (Top) */}
                <div className="w-full aspect-video bg-[#F7F6F3] flex items-center justify-center overflow-hidden p-8">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Body (Middle) */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                     <span className="inline-block px-3 py-1 bg-[#EAE4F2] text-[#6940A5] text-[10px] font-bold uppercase rounded-full tracking-wider">
                       {project.category}
                     </span>
                  </div>
                  
                  <h4 className="text-2xl font-black text-[#37352f] mb-4 leading-tight">
                    {project.title.split(':')[0]}
                  </h4>
                  
                  <p className="text-[#9B9A97] text-sm leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  {/* Footer (Bottom) */}
                  <div className="pt-8 border-t border-[#f1f1f0] w-full">
                    <div className="text-[10px] font-bold text-[#37352f]/40 uppercase tracking-widest mb-4">
                      INFOGRAPHIC ANALYSIS
                    </div>
                    <div className="w-full aspect-[9/16] rounded-[2rem] overflow-hidden border border-[#ededeb] relative bg-[#faf9f6]">
                       <img 
                         src={project.infographicUrl} 
                         alt="Infographic Analysis" 
                         className="w-full h-full object-cover"
                       />
                    </div>
                    {project.infographicCredit && (
                       <div className="mt-2 text-[10px] text-[#9B9A97] text-right italic font-medium">
                         {project.infographicCredit}
                       </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part B: Global B2B Campaigns (Vertical Blocks) */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-[#37352f]" />
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#37352f]">
              Global B2B Marketing Campaigns
            </h3>
          </div>

          <div className="bg-white border border-[#ededeb] rounded-[2.5rem] p-8 mb-8">
            <div className="mb-6 border-b border-[#ededeb] pb-4">
              <h4 className="font-bold text-[#37352f] text-lg">International Exhibition Campaigns: WATERTECH CHINA & WieTec</h4>
            </div>

            <div className="flex flex-col gap-12">
              
              {/* Channel Strategy Wrapper */}
              <div>
                {/* Unified Channel Strategy Header */}
                <div className="flex items-center gap-3 mb-6">
                   <span className="w-10 h-10 rounded-full bg-[#EAE4F2] flex items-center justify-center border border-[#e9e3f0] text-[#6940A5] shadow-sm text-lg">📧</span>
                   <h5 className="font-bold text-[#37352f] text-xl uppercase tracking-wide">Channel Strategy</h5>
                </div>

                <div className="flex flex-col gap-8 pl-0 md:pl-4 border-l-0 md:border-l-2 md:border-[#ededeb] md:ml-5 transition-all">
                  
                  {/* Split Layout for CASE 1: EDM Optimization */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Left Column: Image Block */}
                    <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex flex-col h-full hover:shadow-lg transition-shadow">
                       <div className="flex justify-between items-center mb-6">
                          <h6 className="font-bold text-[#37352f] flex items-center gap-3 text-base">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] shadow-sm text-sm">⚡</span>
                            EDM Optimization
                          </h6>
                          <span className="bg-[#DDEBF1] text-[#0B6E99] px-3 py-1 rounded-full text-xs font-bold tracking-wider">CASE 1</span>
                       </div>
                       
                       <div className="flex-1 rounded-xl overflow-hidden border border-[#ededeb] bg-white shadow-sm relative min-h-[400px]">
                          <img 
                            src="https://lh3.googleusercontent.com/d/11BTAQR0GcUZ3vsoSAIr-X-6rPM38TtsA" 
                            alt="eDM Case Study Long Image" 
                            className="w-full h-full object-cover lg:object-top"
                          />
                       </div>
                       <p className="text-xs text-[#9B9A97] mt-3 text-center italic">High-conversion eDM Design Case Study</p>
                    </div>

                    {/* Right Column: 3 Strategic Blocks */}
                    <div className="flex flex-col gap-4 h-full">
                       
                       {/* Block 1: Task / Challenge */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#D9730D]">🎯</span>
                            Task / Challenge
                          </h5>
                          <p className="text-sm font-bold text-[#37352f] mb-3 leading-snug">
                            Achieve high-conversion eDM design under the constraint of highly redundant brand information.
                          </p>
                          <ul className="space-y-3">
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">PAIN POINT</span>
                              <span className="leading-relaxed">Stakeholders required excessive content per issue, with strict prohibitions on text reduction.</span>
                            </li>
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">LIMITATION</span>
                              <span className="leading-relaxed">Avoid the risk of email clients blocking complex images and tables.</span>
                            </li>
                          </ul>
                       </div>

                       {/* Block 2: Action / Strategy */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#0B6E99]">⚡</span>
                            Action / Strategy
                          </h5>
                          <p className="text-xs text-[#787774] mb-3 italic">Implemented the following multi-dimensional optimizations:</p>
                          <ul className="space-y-3">
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E99] mt-1.5 shrink-0" />
                              <span className="leading-relaxed">
                                <strong className="text-[#37352f]">Interaction & Layout:</strong> Restructured visual hierarchy using 'Limited Image + High-Frequency CTA' strategy, utilizing color blocks instead of large backgrounds.
                              </span>
                            </li>
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E99] mt-1.5 shrink-0" />
                              <span className="leading-relaxed">
                                <strong className="text-[#37352f]">Matrix Placement:</strong> Precisely embedded Website Links in all modules to shorten the path from viewing to conversion.
                              </span>
                            </li>
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E99] mt-1.5 shrink-0" />
                              <span className="leading-relaxed">
                                <strong className="text-[#37352f]">AI Empowerment:</strong> Established a 'Safe Master Template' and used AI to rapidly extend sub-versions for concurrent marketing.
                              </span>
                            </li>
                          </ul>
                       </div>

                       {/* Block 3: Result / Effect */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#6940A5]">🏆</span>
                            Result / Effect
                          </h5>
                          
                          <div className="grid grid-cols-3 gap-2 mb-5 border-b border-[#ededeb] pb-5">
                             <div className="flex flex-col items-center">
                                <div className="text-xl sm:text-2xl font-black text-[#6940A5]">90.35%</div>
                                <div className="text-[10px] font-bold text-[#9B9A97] uppercase mt-1">Deliver Rate</div>
                             </div>
                             <div className="flex flex-col items-center border-l border-[#ededeb]">
                                <div className="text-xl sm:text-2xl font-black text-[#6940A5]">30.18%</div>
                                <div className="text-[10px] font-bold text-[#9B9A97] uppercase mt-1">Open Rate</div>
                             </div>
                             <div className="flex flex-col items-center border-l border-[#ededeb]">
                                <div className="text-xl sm:text-2xl font-black text-[#6940A5]">8.50%</div>
                                <div className="text-[10px] font-bold text-[#9B9A97] uppercase mt-1">CTR</div>
                             </div>
                          </div>

                          <p className="text-xs text-[#787774] leading-relaxed">
                            <strong className="text-[#37352f]">Conversion Impact:</strong> Effectively increased pre-registration CTR and sign-ups, with Google Analytics tracking step-wise growth in website traffic.
                          </p>
                       </div>

                    </div>
                  </div>

                  {/* Split Layout for CASE 2: EDM Localization */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8 border-t border-[#ededeb] border-dashed">
                    
                    {/* Left Column: Image Block */}
                    <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex flex-col h-full hover:shadow-lg transition-shadow">
                       <div className="flex justify-between items-center mb-6">
                          <h6 className="font-bold text-[#37352f] flex items-center gap-3 text-base">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] shadow-sm text-sm">🌍</span>
                            EDM Localization
                          </h6>
                          <span className="bg-[#F4DFEB] text-[#AD1A72] px-3 py-1 rounded-full text-xs font-bold tracking-wider">CASE 2</span>
                       </div>
                       
                       <div className="flex-1 rounded-xl overflow-hidden border border-[#ededeb] bg-white shadow-sm relative min-h-[400px]">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1pmEfCNFwHfGHNlx_zB2Rr8CccA99zOei" 
                            alt="Arabic eDM Localization" 
                            className="w-full h-full object-cover lg:object-top"
                          />
                       </div>
                       <p className="text-xs text-[#9B9A97] mt-3 text-center italic">RTL Adaptation & Cultural Localization</p>
                    </div>

                    {/* Right Column: 3 Strategic Blocks */}
                    <div className="flex flex-col gap-4 h-full">
                       
                       {/* Block 1: Task / Challenge */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#D9730D]">🎯</span>
                            Task / Challenge
                          </h5>
                          <p className="text-sm font-bold text-[#37352f] mb-3 leading-snug">
                            Cross-cultural visual reconstruction: Localization design for Arabic graphic content.
                          </p>
                          <ul className="space-y-3">
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">DIFFICULTY</span>
                              <span className="leading-relaxed">Handle RTL (Right-to-Left) layout logic for the MENA market without altering the original design aesthetic.</span>
                            </li>
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">REQ</span>
                              <span className="leading-relaxed">Ensure text flow, visual focus, and interactive elements align with local reading habits.</span>
                            </li>
                          </ul>
                       </div>

                       {/* Block 2: Action / Strategy */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#0B6E99]">⚡</span>
                            Action / Strategy
                          </h5>
                          <p className="text-xs text-[#787774] mb-3 italic">Agile Design Support & RTL Adaptation Scheme:</p>
                          <ul className="space-y-3">
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E99] mt-1.5 shrink-0" />
                              <span className="leading-relaxed">
                                <strong className="text-[#37352f]">Tool Synergy:</strong> Flexibly utilized Canva and professional tools for secondary creation, strictly following brand visual guidelines.
                              </span>
                            </li>
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E99] mt-1.5 shrink-0" />
                              <span className="leading-relaxed">
                                <strong className="text-[#37352f]">Localized Visual Calibration:</strong> Mirrored visual layouts to ensure CTAs, icons, and information flow perfectly match the intuition of native Arabic speakers.
                              </span>
                            </li>
                          </ul>
                       </div>

                       {/* Block 3: Result / Effect */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#6940A5]">🏆</span>
                            Result / Effect
                          </h5>
                          
                          <p className="text-sm font-bold text-[#37352f] mb-2 leading-snug">
                            Regional Coverage Expansion & Private Domain Conversion
                          </p>

                          <div className="space-y-3">
                             <div className="flex gap-3 items-start text-xs text-[#787774]">
                                <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">MENA</span>
                                <span className="leading-relaxed mt-0.5">
                                  <strong className="text-[#37352f]">Market Coverage:</strong> Successfully achieved deep coverage of brand materials in the MENA region, eliminating language and cultural barriers.
                                </span>
                             </div>
                             <div className="flex gap-3 items-start text-xs text-[#787774]">
                                <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">WA</span>
                                <span className="leading-relaxed mt-0.5">
                                  <strong className="text-[#37352f]">Channel Activation:</strong> Significantly boosted website traffic and real-time inquiry response rates on social channels like <strong className="text-[#166534]">WhatsApp</strong>.
                                </span>
                             </div>
                          </div>
                       </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Digital & Social Matrix */}
              <div className="pt-8">
                 <div className="mb-6">
                    <div className="flex items-center gap-3">
                       <span className="w-10 h-10 rounded-full bg-[#EAE4F2] flex items-center justify-center border border-[#e9e3f0] text-[#0B6E99] shadow-sm text-lg">📣</span>
                       <h5 className="font-bold text-[#37352f] text-xl uppercase tracking-wide">Digital & Social Matrix</h5>
                    </div>
                    <p className="text-[#9B9A97] text-sm md:text-base italic font-medium mt-1 ml-[3.25rem]">
                      Content Marketing (Social Media & Website)
                    </p>
                 </div>

                 <div className="pl-0 md:pl-5 border-l-0 md:border-l-2 md:border-[#ededeb] md:ml-5">
                    
                    {/* NEW Subheader Block with Icons (Moved Up) */}
                    <div className="flex flex-col items-center justify-center py-6 mb-10 border-b border-[#ededeb]">
                        <div className="flex items-center gap-8 md:gap-12 justify-center">
                           <img src="https://lh3.googleusercontent.com/d/14iDT7QGHs4pWbm9HHZgdRXbJyfzMPjWi" alt="Icon 1" className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" />
                           <img src="https://lh3.googleusercontent.com/d/15T-hrYGGmsNRNJkkPA_F0CCZP1XEQ3-K" alt="Icon 2" className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" />
                           <img src="https://lh3.googleusercontent.com/d/1TWlpuq9tNwErS-dqG47qzBuUlsLHf7F0" alt="Icon 3" className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" />
                           <img src="https://lh3.googleusercontent.com/d/1FYnWIEdLgUXeXAPI7wxtnP0PN8Hiji9O" alt="Icon 4" className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" />
                           <img src="https://lh3.googleusercontent.com/d/1hBJZ1TaF6_OLkOPYRzyTRTZoY96p31Bf" alt="Icon 5" className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>

                    {/* Featured Video Block (Moved Down) */}
                    <div className="w-full aspect-video bg-[#000] rounded-xl border border-[#ededeb] overflow-hidden mb-8 relative shadow-sm group">
                        <iframe 
                           className="w-full h-full object-cover" 
                           src="https://drive.google.com/file/d/1tMc-BrX4vtlCMj0zizs1VwAg0hW4jY10/preview" 
                           allow="fullscreen"
                           allowFullScreen
                           title="Featured Video"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#37352f] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm z-10 flex items-center gap-2 pointer-events-none">
                            <span className="w-2 h-2 rounded-full bg-[#E03E3E] animate-pulse"></span>
                            Featured Video
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column (50%) */}
                        <div className="flex flex-col gap-4">
                           {/* Img 1: 2700x1478 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '2700/1478' }}>
                              <img src="https://lh3.googleusercontent.com/d/1ysEDUeLtpUNFNsXHxGeYUrYbr_Xqs1Po" alt="Digital Banner 1" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">2700 x 1478</div>
                           </div>
                           {/* Img 2: 1438x1198 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1438/1198' }}>
                              <img src="https://lh3.googleusercontent.com/d/1hHuytPkP2kO0e-IK7xhNDuVSswXhQi4i" alt="Digital Banner 2" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1438 x 1198</div>
                           </div>
                           {/* Img 3: 1536x400 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1536/400' }}>
                              <img src="https://lh3.googleusercontent.com/d/1gavGEGGQ8LeklX6bGp3jjo9q2aKYUDNS" alt="Digital Banner 3" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1536 x 400</div>
                           </div>
                           {/* Img 4: 1536x400 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1536/400' }}>
                              <img src="https://lh3.googleusercontent.com/d/1FpR8TfOEVZvg18qJSe8PK1NzZHR0zf1A" alt="Digital Banner 4" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1536 x 400</div>
                           </div>
                           {/* Img 5: 1536x400 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1536/400' }}>
                              <img src="https://lh3.googleusercontent.com/d/1JU8cXcrA_PClwx7KufNF79iHybnSpFpJ" alt="Digital Banner 5" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1536 x 400</div>
                           </div>
                           {/* Img 6: 1536x400 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1536/400' }}>
                              <img src="https://lh3.googleusercontent.com/d/1S-CQCO6WbwnIKUGs9Ff4lNNHvx7H6IRu" alt="Digital Banner 6" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1536 x 400</div>
                           </div>
                        </div>

                        {/* Right Column (50%) */}
                        <div className="flex flex-col gap-4">
                           {/* Img 1: 1584x396 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1584/396' }}>
                              <img src="https://lh3.googleusercontent.com/d/12sJhXb0HcwjGJFYSlIvPhb4b71LKqlUH" alt="Digital Banner 7" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1584 x 396</div>
                           </div>
                           {/* Img 2: 728x91 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '728/91' }}>
                              <img src="https://lh3.googleusercontent.com/d/1Q703TRvYZ0hIBUUGsYTAxTG4ffMxQcul" alt="Digital Banner 8" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">728 x 91</div>
                           </div>
                           {/* Img 3: 628x1200 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '628/1200' }}>
                              <img src="https://lh3.googleusercontent.com/d/1rYUDQqvpIbqt-FYsSMAONKTz8m-_h84W" alt="Digital Banner 9" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">628 x 1200</div>
                           </div>
                        </div>
                    </div>
                 </div>
              </div>

              {/* Block 3: Overall Performance Impact (Bento Grid) */}
              <div className="pt-8">
                 <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-10 rounded-full bg-[#EAE4F2] flex items-center justify-center border border-[#e9e3f0] text-[#D9730D] shadow-sm text-lg">📈</span>
                    <h5 className="font-bold text-[#37352f] text-xl uppercase tracking-wide">Overall Performance Impact</h5>
                 </div>

                 {/* Operational Excellence Section - Inserted above Metrics */}
                 <div className="mb-12">
                   {/* Header for Operational Excellence */}
                   <h6 className="text-[#9B9A97] font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#6940A5]"></span>
                      Operational Excellence & Process Architecture
                   </h6>

                   {/* SOP Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Card 1: CMS */}
                      <div className="bg-[#F7F6F3] border border-[#E1E1E1] p-6 rounded-[1.5rem] flex flex-col hover:border-[#D3D1CB] transition-all duration-300 hover:shadow-sm group">
                          <div className="w-10 h-10 bg-white rounded-lg border border-[#E1E1E1] flex items-center justify-center mb-4 text-[#D9730D] shadow-sm group-hover:scale-110 transition-transform">
                              <Database size={20} strokeWidth={1.5} />
                          </div>
                          <h4 className="font-bold text-[#37352f] text-base mb-2">CMS Mastery</h4>
                          <p className="text-xs text-[#787774] mb-6 leading-relaxed flex-1">Standardized WordPress & Elementor workflows to ensure design consistency.</p>
                      </div>

                      {/* Card 2: Digital */}
                      <div className="bg-[#F7F6F3] border border-[#E1E1E1] p-6 rounded-[1.5rem] flex flex-col hover:border-[#D3D1CB] transition-all duration-300 hover:shadow-sm group">
                          <div className="w-10 h-10 bg-white rounded-lg border border-[#E1E1E1] flex items-center justify-center mb-4 text-[#6940A5] shadow-sm group-hover:scale-110 transition-transform">
                              <Bot size={20} strokeWidth={1.5} />
                          </div>
                          <h4 className="font-bold text-[#37352f] text-base mb-2">Digital Automation</h4>
                          <p className="text-xs text-[#787774] mb-6 leading-relaxed flex-1">AI-driven workflows for multi-channel EDM & Social Media content.</p>
                      </div>

                      {/* Card 3: MENA */}
                      <div className="bg-[#F7F6F3] border border-[#E1E1E1] p-6 rounded-[1.5rem] flex flex-col hover:border-[#D3D1CB] transition-all duration-300 hover:shadow-sm group">
                          <div className="w-10 h-10 bg-white rounded-lg border border-[#E1E1E1] flex items-center justify-center mb-4 text-[#0B6E99] shadow-sm group-hover:scale-110 transition-transform">
                              <Globe size={20} strokeWidth={1.5} />
                          </div>
                          <h4 className="font-bold text-[#37352f] text-base mb-2">MENA Operations</h4>
                          <p className="text-xs text-[#787774] mb-6 leading-relaxed flex-1">Protocols for WhatsApp Private Domain & Visa Approval workflows.</p>
                      </div>
                   </div>
                 </div>

                 {/* Original Metrics Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    
                    {/* Card 1: Large - The Funnel */}
                    <div className="col-span-12 md:col-span-8 bg-[#F7F6F3] border border-[#E1E1E1] rounded-[1.5rem] p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                        <div>
                            <h5 className="text-[#9B9A97] font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                               <span className="w-2 h-2 rounded-full bg-[#0B6E99]"></span>
                               Conversion Funnel Analysis
                            </h5>
                            <div className="mb-4">
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-1">
                                    <span className="text-4xl md:text-5xl font-black text-[#37352f] tracking-tight">4,714</span>
                                    <span className="text-sm font-bold text-[#0B6E99] bg-[#DDEBF1] px-2 py-0.5 rounded">Pre-registrations (+45.6% YoY)</span>
                                </div>
                                <div className="text-xl md:text-2xl font-bold text-[#37352f] leading-tight mt-2">
                                    leading to a <span className="text-[#0B6E99] underline decoration-2 underline-offset-4 decoration-[#DDEBF1]">40.6% Show-up Rate</span>.
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-[#787774] font-medium border-t border-[#E1E1E1] pt-4 mt-2 flex items-center gap-2">
                            <span className="w-4 h-px bg-[#787774]"></span>
                            Shifting from volume-based traffic to quality-focused retention.
                        </div>
                    </div>

                    {/* Card 4: Small - Decision Power */}
                    <div className="col-span-12 md:col-span-4 bg-[#F7F6F3] border border-[#E1E1E1] rounded-[1.5rem] p-6 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <h5 className="text-[#9B9A97] font-bold text-xs uppercase tracking-widest mb-3">Purchasing Authority</h5>
                        <div className="text-6xl font-black text-[#37352f] mb-3 tracking-tighter">76%</div>
                        <div className="text-xs text-[#37352f] font-bold bg-white border border-[#E1E1E1] px-3 py-1.5 rounded-full shadow-sm">
                            Decision Makers
                        </div>
                        <div className="text-[10px] text-[#9B9A97] mt-2 font-medium">
                            & Joint Decision Makers
                        </div>
                    </div>

                    {/* Card 2: Medium - Channel ROI Table */}
                    <div className="col-span-12 md:col-span-6 bg-[#F7F6F3] border border-[#E1E1E1] rounded-[1.5rem] p-6 hover:shadow-md transition-shadow duration-300">
                        <h5 className="text-[#9B9A97] font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-[#D9730D]"></span>
                             Channel ROI Attribution
                        </h5>
                        <div className="w-full text-sm space-y-3">
                            <div className="flex justify-between items-center p-3 bg-white border border-[#E1E1E1] rounded-xl shadow-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                                    <span className="text-[#37352f] font-bold">WhatsApp</span>
                                </div>
                                <span className="text-[#37352f] font-black">48.9%</span>
                            </div>
                            <div className="flex justify-between items-center px-3 py-2 border-b border-[#E1E1E1] border-dashed">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#787774]"></span>
                                    <span className="text-[#787774] font-medium">EDM</span>
                                </div>
                                <span className="text-[#787774] font-medium">43.3%</span>
                            </div>
                            <div className="flex justify-between items-center px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#787774]"></span>
                                    <span className="text-[#787774] font-medium">TikTok Ads</span>
                                </div>
                                <span className="text-[#787774] font-medium">3.1%</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Medium - MENA Strategy */}
                    <div className="col-span-12 md:col-span-6 bg-[#F7F6F3] border border-[#E1E1E1] rounded-[1.5rem] p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                         <div>
                            <h5 className="text-[#9B9A97] font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#6940A5]"></span>
                                Strategic MENA Impact
                            </h5>
                            <p className="text-[#37352f] font-bold text-lg mb-6 leading-snug">
                                Addressing <span className="text-[#6940A5] bg-[#EAE4F2] px-1 rounded">35.79%</span> of Exhibitor demand for Middle East expansion.
                            </p>
                         </div>
                         <div className="bg-white rounded-xl p-4 border border-[#E1E1E1] shadow-sm flex items-start gap-3">
                            <div className="min-w-[4px] h-full bg-[#6940A5] rounded-full"></div>
                            <p className="text-xs text-[#787774] leading-relaxed">
                                <strong className="text-[#37352f] block mb-1">VIP Matchmaking Pool</strong>
                                Saudi & UAE buyers account for <span className="text-[#37352f] font-black">8%</span> of the total high-value pool.
                            </p>
                         </div>
                    </div>

                 </div>
              </div>
            </div>
          </div>

          {/* Sub-section 2: Regional Market Activation */}
          <div className="bg-white border border-[#ededeb] rounded-[2.5rem] p-8">
            <div className="mb-6 border-b border-[#ededeb] pb-4">
              <h4 className="font-bold text-[#37352f] text-lg">Regional Market Activation</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {EXHIBITIONS.map((evt) => (
               <div key={evt.id} className="bg-white border border-[#E1E1E1] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group">
                 {/* Image Area */}
                 <div className="w-full aspect-video bg-[#F7F6F3] relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={evt.image} 
                      alt={evt.name} 
                      className={`w-full h-full ${evt.objFit || 'object-cover'} ${evt.imgPos || 'object-top'} transition-transform duration-700 group-hover:scale-105`}
                    />
                 </div>
                 
                 {/* Content Area */}
                 <div className="p-5 flex flex-col flex-1 gap-3">
                    {/* Name & Organizer */}
                    <div>
                        <h5 className="font-bold text-base text-[#37352f] mb-1 leading-snug">
                            {evt.name}
                        </h5>
                        <p className="text-xs text-[#9B9A97] font-medium uppercase tracking-wide">
                            {evt.org}
                        </p>
                    </div>

                    <div className="mt-auto space-y-3">
                        {/* Languages */}
                        <div>
                           <div className="text-[10px] text-[#9B9A97] mb-1.5 uppercase font-bold tracking-wider">Languages</div>
                           <div className="flex flex-wrap gap-1.5">
                               {evt.languages.map(l => (
                                   <span key={l} className="text-[11px] px-2 py-0.5 bg-[#DDEBF1] text-[#0B6E99] rounded-full font-medium">
                                       {l}
                                   </span>
                               ))}
                           </div>
                        </div>

                        {/* Roles */}
                        <div>
                           <div className="text-[10px] text-[#9B9A97] mb-1.5 uppercase font-bold tracking-wider">Role</div>
                           <div className="flex flex-wrap gap-1.5">
                               {evt.roles.map(r => (
                                   <span key={r} className="text-[11px] px-2 py-0.5 bg-[#EAE4F2] text-[#6940A5] rounded-full font-medium">
                                       {r}
                                   </span>
                               ))}
                           </div>
                        </div>
                    </div>
                 </div>
               </div>
             ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
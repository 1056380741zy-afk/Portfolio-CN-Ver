import React from 'react';
import { WEB3_PROJECTS, EXHIBITIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Database, Bot, Globe } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold mb-16 text-[#37352f] uppercase">{t.projects.title}</h2>

        {/* Part A: Web3 Market Strategy */}
        <div className="mb-32">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-[#37352f]" />
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#37352f]">
              {t.projects.web3Title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WEB3_PROJECTS.map((project, index) => {
              // Get translation if available, otherwise fallback to default project text
              const translatedProject = t.projects.web3Projects?.[index] || project;
              
              return (
              <div 
                key={project.id} 
                className="group bg-white border border-[#ededeb] rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Cover Image (Top) */}
                <div className="w-full aspect-video bg-[#F7F6F3] flex items-center justify-center overflow-hidden p-8">
                  <img 
                    src={project.imageUrl} 
                    alt={translatedProject.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Body (Middle) */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                     <span className="inline-block px-3 py-1 bg-[#EAE4F2] text-[#6940A5] text-[10px] font-bold uppercase rounded-full tracking-wider">
                       {translatedProject.category}
                     </span>
                  </div>
                  
                  <h4 className="text-2xl font-black text-[#37352f] mb-4 leading-tight">
                    {translatedProject.title.split(':')[0]}
                  </h4>
                  
                  <p className="text-[#9B9A97] text-sm leading-relaxed mb-8 flex-1">
                    {translatedProject.description}
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
                    {translatedProject.infographicCredit && (
                       <div className="mt-2 text-[10px] text-[#9B9A97] text-right italic font-medium">
                         {translatedProject.infographicCredit}
                       </div>
                    )}
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Part B: Global B2B Campaigns (Vertical Blocks) */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-[#37352f]" />
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#37352f]">
              {t.projects.b2bTitle}
            </h3>
          </div>

          <div className="bg-white border border-[#ededeb] rounded-[2.5rem] p-8 mb-8">
            <div className="mb-6 border-b border-[#ededeb] pb-4">
              <h4 className="font-bold text-[#37352f] text-lg">{t.projects.exhibitionTitle}</h4>
            </div>

            <div className="flex flex-col gap-12">
              
              {/* Channel Strategy Wrapper */}
              <div>
                {/* Unified Channel Strategy Header */}
                <div className="flex items-center gap-3 mb-6">
                   <span className="w-10 h-10 rounded-full bg-[#EAE4F2] flex items-center justify-center border border-[#e9e3f0] text-[#6940A5] shadow-sm text-lg">📧</span>
                   <h5 className="font-bold text-[#37352f] text-xl uppercase tracking-wide">{t.projects.channelStrategy}</h5>
                </div>

                <div className="flex flex-col gap-8 pl-0 md:pl-4 border-l-0 md:border-l-2 md:border-[#ededeb] md:ml-5 transition-all">
                  
                  {/* Split Layout for CASE 1: EDM Optimization */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Left Column: Image Block */}
                    <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex flex-col h-full hover:shadow-lg transition-shadow">
                       <div className="flex justify-between items-center mb-6">
                          <h6 className="font-bold text-[#37352f] flex items-center gap-3 text-base">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] shadow-sm text-sm">⚡</span>
                            {t.projects.case1.title}
                          </h6>
                          <span className="bg-[#DDEBF1] text-[#0B6E99] px-3 py-1 rounded-full text-xs font-bold tracking-wider">{t.projects.case1.tag}</span>
                       </div>
                       
                       <div className="flex-1 rounded-xl overflow-hidden border border-[#ededeb] bg-white shadow-sm relative min-h-[400px]">
                          <iframe 
                            src="images/freecompress-EDM.pdf" 
                            title="eDM Case Study PDF"
                            className="w-full h-full"
                          />
                       </div>
                       <p className="text-xs text-[#9B9A97] mt-3 text-center italic">{t.projects.case1.desc}</p>
                    </div>

                    {/* Right Column: 3 Strategic Blocks */}
                    <div className="flex flex-col gap-4 h-full">
                       
                       {/* Block 1: Task / Challenge */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#D9730D]">🎯</span>
                            {t.projects.case1.taskTitle}
                          </h5>
                          <p className="text-sm font-bold text-[#37352f] mb-3 leading-snug">
                            {t.projects.case1.taskDesc}
                          </p>
                          <ul className="space-y-3">
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">PAIN POINT</span>
                              <span className="leading-relaxed">{t.projects.case1.painPoint}</span>
                            </li>
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">LIMITATION</span>
                              <span className="leading-relaxed">{t.projects.case1.limitation}</span>
                            </li>
                          </ul>
                       </div>

                       {/* Block 2: Action / Strategy */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#0B6E99]">⚡</span>
                            {t.projects.case1.actionTitle}
                          </h5>
                          <p className="text-xs text-[#787774] mb-3 italic">{t.projects.case1.actionDesc}</p>
                          <ul className="space-y-3">
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E99] mt-1.5 shrink-0" />
                              <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.projects.case1.action1 }} />
                            </li>
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E99] mt-1.5 shrink-0" />
                              <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.projects.case1.action2 }} />
                            </li>
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E99] mt-1.5 shrink-0" />
                              <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.projects.case1.action3 }} />
                            </li>
                          </ul>
                       </div>

                       {/* Block 3: Result / Effect */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#6940A5]">🏆</span>
                            {t.projects.case1.resultTitle}
                          </h5>
                          
                          <div className="grid grid-cols-3 gap-2 mb-5 border-b border-[#ededeb] pb-5">
                             <div className="flex flex-col items-center">
                                <div className="text-xl sm:text-2xl font-black text-[#6940A5]">90.35%</div>
                                <div className="text-[10px] font-bold text-[#9B9A97] uppercase mt-1">{t.projects.case1.deliverRate}</div>
                             </div>
                             <div className="flex flex-col items-center border-l border-[#ededeb]">
                                <div className="text-xl sm:text-2xl font-black text-[#6940A5]">30.18%</div>
                                <div className="text-[10px] font-bold text-[#9B9A97] uppercase mt-1">{t.projects.case1.openRate}</div>
                             </div>
                             <div className="flex flex-col items-center border-l border-[#ededeb]">
                                <div className="text-xl sm:text-2xl font-black text-[#6940A5]">8.50%</div>
                                <div className="text-[10px] font-bold text-[#9B9A97] uppercase mt-1">{t.projects.case1.ctr}</div>
                             </div>
                          </div>

                          <p className="text-xs text-[#787774] leading-relaxed" dangerouslySetInnerHTML={{ __html: t.projects.case1.impact }} />
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
                            {t.projects.case2.title}
                          </h6>
                          <span className="bg-[#F4DFEB] text-[#AD1A72] px-3 py-1 rounded-full text-xs font-bold tracking-wider">{t.projects.case2.tag}</span>
                       </div>
                       
                       <div className="flex-1 rounded-xl overflow-hidden border border-[#ededeb] bg-white shadow-sm relative min-h-[400px]">
                          <iframe 
                            src="images/Landing%20Page_1420x4000.pdf" 
                            title="Arabic eDM Localization" 
                            className="w-full h-full"
                          />
                       </div>
                       <p className="text-xs text-[#9B9A97] mt-3 text-center italic">{t.projects.case2.desc}</p>
                    </div>

                    {/* Right Column: 3 Strategic Blocks */}
                    <div className="flex flex-col gap-4 h-full">
                       
                       {/* Block 1: Task / Challenge */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#D9730D]">🎯</span>
                            {t.projects.case2.taskTitle}
                          </h5>
                          <p className="text-sm font-bold text-[#37352f] mb-3 leading-snug">
                            {t.projects.case2.taskDesc}
                          </p>
                          <ul className="space-y-3">
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">DIFFICULTY</span>
                              <span className="leading-relaxed">{t.projects.case2.difficulty}</span>
                            </li>
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">REQ</span>
                              <span className="leading-relaxed">{t.projects.case2.req}</span>
                            </li>
                          </ul>
                       </div>

                       {/* Block 2: Action / Strategy */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#0B6E99]">⚡</span>
                            {t.projects.case2.actionTitle}
                          </h5>
                          <p className="text-xs text-[#787774] mb-3 italic">{t.projects.case2.actionDesc}</p>
                          <ul className="space-y-3">
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E99] mt-1.5 shrink-0" />
                              <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.projects.case2.action1 }} />
                            </li>
                            <li className="flex gap-3 items-start text-xs text-[#787774]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E99] mt-1.5 shrink-0" />
                              <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.projects.case2.action2 }} />
                            </li>
                          </ul>
                       </div>

                       {/* Block 3: Result / Effect */}
                       <div className="bg-[#F7F6F3] p-6 rounded-[2rem] border border-[#ededeb] flex-1 hover:bg-[#F2F1EE] transition-colors">
                          <h5 className="font-bold text-[#37352f] mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#ededeb] text-[#6940A5]">🏆</span>
                            {t.projects.case2.resultTitle}
                          </h5>
                          
                          <p className="text-sm font-bold text-[#37352f] mb-2 leading-snug">
                            {t.projects.case2.impactTitle}
                          </p>

                          <div className="space-y-3">
                             <div className="flex gap-3 items-start text-xs text-[#787774]">
                                <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">MENA</span>
                                <span className="leading-relaxed mt-0.5" dangerouslySetInnerHTML={{ __html: t.projects.case2.impact1 }} />
                             </div>
                             <div className="flex gap-3 items-start text-xs text-[#787774]">
                                <span className="font-bold text-[#37352f] shrink-0 bg-[#FAEBDD] px-1.5 rounded text-[10px] py-0.5 mt-0.5">WA</span>
                                <span className="leading-relaxed mt-0.5" dangerouslySetInnerHTML={{ __html: t.projects.case2.impact2 }} />
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
                       <h5 className="font-bold text-[#37352f] text-xl uppercase tracking-wide">{t.projects.digitalMatrix.title}</h5>
                    </div>
                    <p className="text-[#9B9A97] text-sm md:text-base italic font-medium mt-1 ml-[3.25rem]">
                      {t.projects.digitalMatrix.subtitle}
                    </p>
                 </div>

                 <div className="pl-0 md:pl-5 border-l-0 md:border-l-2 md:border-[#ededeb] md:ml-5">
                    
                    {/* NEW Subheader Block with Icons (Moved Up) */}
                    <div className="flex flex-col items-center justify-center py-6 mb-10 border-b border-[#ededeb]">
                        <div className="flex items-center gap-8 md:gap-12 justify-center">
                           <img src="images/icons8-facebook-240.png" alt="Facebook" className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" />
                           <img src="images/icons8-linkedin-240.png" alt="LinkedIn" className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" />
                           <img src="images/icons8-tiktok-240.png" alt="TikTok" className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" />
                           <img src="images/icons8-whatsapp-240.png" alt="WhatsApp" className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" />
                           <img src="images/icons8-wordpress-240.png" alt="WordPress" className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>

                    {/* Featured Video Block (Moved Down) */}
                    <div className="w-full aspect-video bg-[#000] rounded-xl border border-[#ededeb] overflow-hidden mb-8 relative shadow-sm group">
                        <video 
                           className="w-full h-full object-cover" 
                           controls
                        >
                          <source src="images/freecompress-demo.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#37352f] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm z-10 flex items-center gap-2 pointer-events-none">
                            <span className="w-2 h-2 rounded-full bg-[#E03E3E] animate-pulse"></span>
                            {t.projects.digitalMatrix.featuredVideo}
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column (50%) */}
                        <div className="flex flex-col gap-4">
                           {/* Img 1: 2700x1478 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '2700/1478' }}>
                              <img src="images/KV%20Banner.png" alt="Digital Banner 1" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">2700 x 1478</div>
                           </div>
                           {/* Img 2: 1438x1198 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1438/1198' }}>
                              <img src="images/AD-Square.gif" alt="Digital Banner 2" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1438 x 1198</div>
                           </div>
                           {/* Img 3: 1536x400 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1536/400' }}>
                              <img src="images/Countdown%20Banner-1.gif" alt="Digital Banner 3" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1536 x 400</div>
                           </div>
                           {/* Img 4: 1536x400 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1536/400' }}>
                              <img src="images/Countdown%20Banner-2.gif" alt="Digital Banner 4" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1536 x 400</div>
                           </div>
                           {/* Img 5: 1536x400 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1536/400' }}>
                              <img src="images/Countdown%20Banner-3.gif" alt="Digital Banner 5" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1536 x 400</div>
                           </div>
                           {/* Img 6: 1536x400 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1536/400' }}>
                              <img src="images/Countdown%20Banner-4.gif" alt="Digital Banner 6" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1536 x 400</div>
                           </div>
                        </div>

                        {/* Right Column (50%) */}
                        <div className="flex flex-col gap-4">
                           {/* Img 1: 1584x396 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '1584/396' }}>
                              <img src="images/MKT%20Banner.png" alt="Digital Banner 7" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">1584 x 396</div>
                           </div>
                           {/* Img 2: 728x91 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '728/91' }}>
                              <img src="images/AD-Horizon.gif" alt="Digital Banner 8" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity text-[10px] font-mono text-[#37352f]">728 x 91</div>
                           </div>
                           {/* Img 3: 628x1200 */}
                           <div className="w-full bg-[#F7F6F3] rounded-lg border border-[#ededeb] overflow-hidden relative group" style={{ aspectRatio: '628/1200' }}>
                              <img src="images/AD-Vertical.png" alt="Digital Banner 9" className="w-full h-full object-cover" />
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
                    <h5 className="font-bold text-[#37352f] text-xl uppercase tracking-wide">{t.projects.performance.title}</h5>
                 </div>

                 {/* Operational Excellence Section - Inserted above Metrics */}
                 <div className="mb-12">
                   {/* Header for Operational Excellence */}
                   <h6 className="text-[#9B9A97] font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#6940A5]"></span>
                      {t.projects.performance.opsTitle}
                   </h6>

                   {/* SOP Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Card 1: CMS */}
                      <div className="bg-[#F7F6F3] border border-[#E1E1E1] p-6 rounded-[1.5rem] flex flex-col hover:border-[#D3D1CB] transition-all duration-300 hover:shadow-sm group">
                          <div className="w-10 h-10 bg-white rounded-lg border border-[#E1E1E1] flex items-center justify-center mb-4 text-[#D9730D] shadow-sm group-hover:scale-110 transition-transform">
                              <Database size={20} strokeWidth={1.5} />
                          </div>
                          <h4 className="font-bold text-[#37352f] text-base mb-2">{t.projects.performance.cards[0].title}</h4>
                          <p className="text-xs text-[#787774] mb-6 leading-relaxed flex-1">{t.projects.performance.cards[0].desc}</p>
                      </div>

                      {/* Card 2: Digital */}
                      <div className="bg-[#F7F6F3] border border-[#E1E1E1] p-6 rounded-[1.5rem] flex flex-col hover:border-[#D3D1CB] transition-all duration-300 hover:shadow-sm group">
                          <div className="w-10 h-10 bg-white rounded-lg border border-[#E1E1E1] flex items-center justify-center mb-4 text-[#6940A5] shadow-sm group-hover:scale-110 transition-transform">
                              <Bot size={20} strokeWidth={1.5} />
                          </div>
                          <h4 className="font-bold text-[#37352f] text-base mb-2">{t.projects.performance.cards[1].title}</h4>
                          <p className="text-xs text-[#787774] mb-6 leading-relaxed flex-1">{t.projects.performance.cards[1].desc}</p>
                      </div>

                      {/* Card 3: MENA */}
                      <div className="bg-[#F7F6F3] border border-[#E1E1E1] p-6 rounded-[1.5rem] flex flex-col hover:border-[#D3D1CB] transition-all duration-300 hover:shadow-sm group">
                          <div className="w-10 h-10 bg-white rounded-lg border border-[#E1E1E1] flex items-center justify-center mb-4 text-[#0B6E99] shadow-sm group-hover:scale-110 transition-transform">
                              <Globe size={20} strokeWidth={1.5} />
                          </div>
                          <h4 className="font-bold text-[#37352f] text-base mb-2">{t.projects.performance.cards[2].title}</h4>
                          <p className="text-xs text-[#787774] mb-6 leading-relaxed flex-1">{t.projects.performance.cards[2].desc}</p>
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
                               {t.projects.performance.funnelTitle}
                            </h5>
                            <div className="mb-4">
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-1">
                                    <span className="text-4xl md:text-5xl font-black text-[#37352f] tracking-tight">4,714</span>
                                    <span className="text-sm font-bold text-[#0B6E99] bg-[#DDEBF1] px-2 py-0.5 rounded">{t.projects.performance.funnelStat}</span>
                                </div>
                                <div className="text-xl md:text-2xl font-bold text-[#37352f] leading-tight mt-2" dangerouslySetInnerHTML={{ __html: t.projects.performance.funnelDesc }} />
                            </div>
                        </div>
                        <div className="text-xs text-[#787774] font-medium border-t border-[#E1E1E1] pt-4 mt-2 flex items-center gap-2">
                            <span className="w-4 h-px bg-[#787774]"></span>
                            {t.projects.performance.funnelFooter}
                        </div>
                    </div>

                    {/* Card 4: Small - Decision Power */}
                    <div className="col-span-12 md:col-span-4 bg-[#F7F6F3] border border-[#E1E1E1] rounded-[1.5rem] p-6 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <h5 className="text-[#9B9A97] font-bold text-xs uppercase tracking-widest mb-3">{t.projects.performance.authorityTitle}</h5>
                        <div className="text-6xl font-black text-[#37352f] mb-3 tracking-tighter">76%</div>
                        <div className="text-xs text-[#37352f] font-bold bg-white border border-[#E1E1E1] px-3 py-1.5 rounded-full shadow-sm">
                            {t.projects.performance.authorityStat}
                        </div>
                        <div className="text-[10px] text-[#9B9A97] mt-2 font-medium">
                            {t.projects.performance.authorityFooter}
                        </div>
                    </div>

                    {/* Card 2: Medium - Channel ROI Table */}
                    <div className="col-span-12 md:col-span-6 bg-[#F7F6F3] border border-[#E1E1E1] rounded-[1.5rem] p-6 hover:shadow-md transition-shadow duration-300">
                        <h5 className="text-[#9B9A97] font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-[#D9730D]"></span>
                             {t.projects.performance.roiTitle}
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
                                {t.projects.performance.menaTitle}
                            </h5>
                            <p className="text-[#37352f] font-bold text-lg mb-6 leading-snug" dangerouslySetInnerHTML={{ __html: t.projects.performance.menaDesc }} />
                         </div>
                         <div className="bg-white rounded-xl p-4 border border-[#E1E1E1] shadow-sm flex items-start gap-3">
                            <div className="min-w-[4px] h-full bg-[#6940A5] rounded-full"></div>
                            <p className="text-xs text-[#787774] leading-relaxed">
                                <strong className="text-[#37352f] block mb-1">{t.projects.performance.menaPoolTitle}</strong>
                                <span dangerouslySetInnerHTML={{ __html: t.projects.performance.menaPoolDesc }} />
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
              <h4 className="font-bold text-[#37352f] text-lg">{t.projects.activationTitle}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {EXHIBITIONS.map((evt) => {
               // @ts-ignore
               const localizedEvt = t.projects.exhibitions[evt.id] || evt;
               return (
               <div key={evt.id} className="bg-white border border-[#E1E1E1] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group">
                 {/* Image Area */}
                 <div className="w-full aspect-video bg-[#F7F6F3] relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={evt.image} 
                      alt={localizedEvt.name} 
                      className={`w-full h-full ${evt.objFit || 'object-cover'} ${evt.imgPos || 'object-top'} transition-transform duration-700 group-hover:scale-105`}
                    />
                 </div>
                 
                 {/* Content Area */}
                 <div className="p-5 flex flex-col flex-1 gap-3">
                    {/* Name & Organizer */}
                    <div>
                        <h5 className="font-bold text-base text-[#37352f] mb-1 leading-snug">
                            {localizedEvt.name}
                        </h5>
                        <p className="text-xs text-[#9B9A97] font-medium uppercase tracking-wide">
                            {localizedEvt.org}
                        </p>
                    </div>

                    <div className="mt-auto space-y-3">
                        {/* Languages */}
                        <div>
                           <div className="text-[10px] text-[#9B9A97] mb-1.5 uppercase font-bold tracking-wider">{t.projects.activation.lang}</div>
                           <div className="flex flex-wrap gap-1.5">
                               {evt.languages.map((l) => (
                                   <span key={l} className="text-[11px] px-2 py-0.5 bg-[#DDEBF1] text-[#0B6E99] rounded-full font-medium">
                                       {l}
                                   </span>
                               ))}
                           </div>
                        </div>

                        {/* Roles */}
                        <div>
                           <div className="text-[10px] text-[#9B9A97] mb-1.5 uppercase font-bold tracking-wider">{t.projects.activation.role}</div>
                           <div className="flex flex-wrap gap-1.5">
                               {localizedEvt.roles.map((r: string) => (
                                   <span key={r} className="text-[11px] px-2 py-0.5 bg-[#EAE4F2] text-[#6940A5] rounded-full font-medium">
                                       {r}
                                   </span>
                               ))}
                           </div>
                        </div>
                    </div>
                 </div>
               </div>
             )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
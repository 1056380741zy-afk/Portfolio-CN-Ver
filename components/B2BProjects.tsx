import React from 'react';
import { NotionBlock, NotionTag, NotionCallout } from './NotionBlock';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { Map, Calendar, Languages, BarChart3, Mail, Share2, MousePointerClick } from 'lucide-react';

const data = [
  { name: '2023', value: 2500, type: 'Domestic' },
  { name: '2024', value: 4714, type: 'Total' },
  { name: 'Growth', value: 4000, type: 'Overseas' },
];

export const B2BProjects: React.FC = () => {
  return (
    <div className="px-4 md:px-12">
      <NotionBlock title="Global B2B Marketing Campaigns" icon="🌍">
        
        {/* Section 1: International Exhibition Campaigns */}
        <div className="border border-stone-200 rounded-lg bg-white overflow-hidden mb-8">
          <div className="p-4 border-b border-stone-100 bg-stone-50 flex items-center gap-2">
            <span className="text-xl">1️⃣</span>
            <h3 className="font-bold text-stone-800">International Exhibition Campaigns - WATERTECH CHINA & WieTec</h3>
          </div>
          
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Col: Channel Strategy & Visuals */}
            <div className="space-y-6">
               <div>
                  <h4 className="flex items-center gap-2 font-semibold text-stone-800 mb-3">
                    <Mail size={16} className="text-blue-500" />
                    Channel Strategy & Distribution
                  </h4>
                  <p className="text-sm text-stone-600 mb-3">Email Campaign (eDM) & Lead Nurturing</p>
                  <div className="grid grid-cols-2 gap-2">
                    <img src="https://picsum.photos/seed/edm1/300/400" className="rounded border border-stone-100 shadow-sm w-full h-48 object-cover" alt="EDM 1" />
                    <img src="https://picsum.photos/seed/edm2/300/400" className="rounded border border-stone-100 shadow-sm w-full h-48 object-cover" alt="EDM 2" />
                  </div>
                  <div className="mt-2 text-xs text-stone-400 italic">Edited by Adobe Illustrator</div>
               </div>
            </div>

            {/* Right Col: Digital Media & Performance */}
            <div className="space-y-8">
              
              {/* Digital Media */}
              <div>
                 <h4 className="flex items-center gap-2 font-semibold text-stone-800 mb-3">
                    <MousePointerClick size={16} className="text-purple-500" />
                    Digital Media Channels
                 </h4>
                 <p className="text-xs text-stone-500 mb-2">Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads</p>
                 <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-stone-100 rounded h-16 flex items-center justify-center text-xs text-stone-500 border border-stone-200">Google Ads</div>
                    <div className="bg-stone-100 rounded h-16 flex items-center justify-center text-xs text-stone-500 border border-stone-200">Meta Ads</div>
                    <div className="bg-stone-100 rounded h-16 flex items-center justify-center text-xs text-stone-500 border border-stone-200">TikTok</div>
                 </div>
              </div>

              {/* Social Media */}
              <div>
                 <h4 className="flex items-center gap-2 font-semibold text-stone-800 mb-3">
                    <Share2 size={16} className="text-green-500" />
                    Social Media Marketing
                 </h4>
                 <div className="flex gap-2 mb-2">
                    <NotionTag color="blue">Facebook</NotionTag>
                    <NotionTag color="green">WhatsApp</NotionTag>
                    <NotionTag color="blue">LinkedIn</NotionTag>
                    <NotionTag color="red">TikTok</NotionTag>
                 </div>
                 <p className="text-xs text-stone-600">Content Marketing & Video Content (Arabic + English)</p>
              </div>

              {/* Performance Chart */}
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-100">
                <h4 className="flex items-center gap-2 font-semibold text-stone-800 mb-3 text-sm">
                   <BarChart3 size={16} className="text-red-500" />
                   Performance, Leads & Insights
                </h4>
                <div className="h-40 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5"/>
                      <XAxis dataKey="name" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ fontSize: '12px', borderRadius: '4px', border: '1px solid #e5e5e5' }}
                        cursor={{fill: 'transparent'}}
                      />
                      <Bar dataKey="value" fill="#fb923c" radius={[4, 4, 0, 0]} barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 text-xs text-stone-500 text-center">
                  Achieved 4,714 Total Attendees (+88.6% YoY)
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section 2: Regional Market Activation */}
        <div className="mt-12">
           <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">2️⃣</span>
            <h3 className="font-bold text-stone-800">Regional Market Activation</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Event 1 */}
              <div className="border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors">
                 <div className="flex items-start gap-3">
                    <div className="bg-[#E0F2FE] p-2 rounded text-blue-600 font-bold text-xs h-10 w-10 flex items-center justify-center shrink-0">AIB</div>
                    <div>
                       <h4 className="font-semibold text-stone-900 text-sm mb-1">12th AIB-MENA Conference 2024</h4>
                       <p className="text-xs text-stone-500 mb-2">Innovating for Sustainability in a Global and Digital World</p>
                       <div className="flex flex-wrap gap-1">
                          <NotionTag color="blue">English</NotionTag>
                          <NotionTag color="red">Chinese</NotionTag>
                          <NotionTag color="green">Arabic</NotionTag>
                          <NotionTag color="purple">Event Support</NotionTag>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Event 2 */}
              <div className="border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors">
                 <div className="flex items-start gap-3">
                    <div className="bg-[#FCE7F3] p-2 rounded text-pink-600 font-bold text-xs h-10 w-10 flex items-center justify-center shrink-0">🌸</div>
                    <div>
                       <h4 className="font-semibold text-stone-900 text-sm mb-1">Encounter among Blossoms</h4>
                       <p className="text-xs text-stone-500 mb-2">The Elegant Gathering of the Song Dynasty (Dubai)</p>
                       <div className="flex flex-wrap gap-1">
                          <NotionTag color="red">Chinese</NotionTag>
                          <NotionTag color="blue">English</NotionTag>
                          <NotionTag color="green">Arabic</NotionTag>
                          <NotionTag color="orange">On-site Operations</NotionTag>
                       </div>
                    </div>
                 </div>
              </div>

               {/* Event 3 */}
               <div className="border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors">
                 <div className="flex items-start gap-3">
                    <div className="bg-[#DCFCE7] p-2 rounded text-green-600 font-bold text-xs h-10 w-10 flex items-center justify-center shrink-0">HW</div>
                    <div>
                       <h4 className="font-semibold text-stone-900 text-sm mb-1">Power the Digital Era Forward</h4>
                       <p className="text-xs text-stone-500 mb-2">Huawei Global Data Center Facility Summit 2025 (Dubai)</p>
                       <div className="flex flex-wrap gap-1">
                          <NotionTag color="blue">English</NotionTag>
                          <NotionTag color="red">Chinese</NotionTag>
                          <NotionTag color="green">Arabic</NotionTag>
                          <NotionTag color="purple">Event Support</NotionTag>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Event 4 */}
              <div className="border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors">
                 <div className="flex items-start gap-3">
                    <div className="bg-[#FFEDD5] p-2 rounded text-orange-600 font-bold text-xs h-10 w-10 flex items-center justify-center shrink-0">WT</div>
                    <div>
                       <h4 className="font-semibold text-stone-900 text-sm mb-1">WieTec & WATERTECH CHINA</h4>
                       <p className="text-xs text-stone-500 mb-2">2024/2025 International Exhibition Campaigns</p>
                       <div className="flex flex-wrap gap-1">
                          <NotionTag color="red">Chinese</NotionTag>
                          <NotionTag color="blue">English</NotionTag>
                          <NotionTag color="orange">On-site Operations</NotionTag>
                          <NotionTag color="green">Language Support</NotionTag>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </div>

      </NotionBlock>
    </div>
  );
};
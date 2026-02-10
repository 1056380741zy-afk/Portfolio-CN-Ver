import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, Legend, Cell } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, Users, Globe, Zap, CheckCircle2 } from 'lucide-react';

// Notion-inspired Color Palette
const NOTION_BLUE = "#2383E2";
const NOTION_RED = "#D44021";
const NOTION_YELLOW = "#F5B002";
const NOTION_GRAY = "#E1E1E1";
const NOTION_GREEN_BG = "#DBEDDB";
const NOTION_GREEN_TEXT = "#0F7B6C";

// Mock Data
const REACH_DATA = [
  { month: 'Jan', val23: 1000, val24: 1500 },
  { month: 'Feb', val23: 1200, val24: 1800 },
  { month: 'Mar', val23: 1100, val24: 2200 },
  { month: 'Apr', val23: 1400, val24: 2600 },
  { month: 'May', val23: 1800, val24: 3200 },
  { month: 'Jun', val23: 2500, val24: 4714 }, // Peak
];

const AUDIENCE_DATA = [
  { name: 'Procurement', value: 76, color: NOTION_BLUE },
  { name: 'Engineering', value: 15, color: NOTION_GRAY },
  { name: 'Others', value: 9, color: NOTION_GRAY },
];

const DEMAND_DATA = [
  { name: 'Q1', catA: 30, catB: 20, catC: 10 },
  { name: 'Q2', catA: 45, catB: 25, catC: 15 },
  { name: 'Q3', catA: 55, catB: 35, catC: 25 },
  { name: 'Q4', catA: 70, catB: 40, catC: 35 },
];

const MENA_DATA = [
  { year: '2022', value: 3, fill: '#DDEBF1' }, // Lightest
  { year: '2023', value: 7, fill: '#85B8E8' }, // Medium
  { year: '2024', value: 11, fill: '#2383E2' }, // Darkest (Main Blue)
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-[#ededeb] p-2 rounded shadow-sm text-xs font-medium">
        <p className="mb-1 text-[#9B9A97]">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-[#37352f]">
             <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || entry.fill }}></span>
             <span>{entry.name}: {entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const PerformanceDashboard: React.FC = () => {
  const { t } = useLanguage();

  const STATUS_CARDS = [
    { 
      label: t.projects.performance.dashboard.intlAttendance, 
      value: "48.42%", 
      icon: <Globe size={18} className="text-[#0B6E99]" />,
      bg: "bg-[#DDEBF1]" 
    },
    { 
      label: t.projects.performance.dashboard.decisionMakers, 
      value: "76%", 
      icon: <Users size={18} className="text-[#6940A5]" />,
      bg: "bg-[#EAE4F2]" 
    },
    { 
      label: t.projects.performance.dashboard.openRate, 
      value: "30.2%", 
      icon: <Zap size={18} className="text-[#D9730D]" />,
      bg: "bg-[#FAEBDD]" 
    },
    { 
      label: t.projects.performance.dashboard.growth, 
      value: "+45.6%", 
      icon: <TrendingUp size={18} className="text-[#0F7B6C]" />,
      bg: "bg-[#DDEDEA]" 
    },
  ];

  return (
    <div className="space-y-6">
       {/* Row 1: Status Cards (Forward Signals) */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATUS_CARDS.map((card, idx) => (
            <div key={idx} className="bg-white border border-[#E1E1E1] rounded-xl p-4 flex flex-col justify-between hover:border-[#D3D1CB] transition-colors shadow-sm">
               <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${card.bg}`}>
                     {card.icon}
                  </div>
               </div>
               <div>
                  <div className="text-2xl md:text-3xl font-black text-[#37352f] tracking-tight">{card.value}</div>
                  <div className="text-xs font-bold text-[#9B9A97] uppercase mt-1 tracking-wide">{card.label}</div>
               </div>
            </div>
          ))}
       </div>

       {/* Row 2: International Reach (Line Area) & MENA (Bar) */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Chart 1: International Reach */}
          <div className="md:col-span-2 bg-white border border-[#E1E1E1] rounded-xl p-6 shadow-sm">
             <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-[#37352f] flex items-center gap-2">
                   <Globe size={18} className="text-[#2383E2]" />
                   {t.projects.performance.dashboard.intlReach}
                </h4>
                <span className="px-2 py-1 rounded text-xs font-bold" style={{ backgroundColor: NOTION_GREEN_BG, color: NOTION_GREEN_TEXT }}>
                   {t.projects.performance.dashboard.yoyBadge}
                </span>
             </div>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={REACH_DATA}>
                      <defs>
                        <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={NOTION_BLUE} stopOpacity={0.2}/>
                          <stop offset="95%" stopColor={NOTION_BLUE} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9B9A97'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9B9A97'}} />
                      <Tooltip content={<CustomTooltip />} />
                      <Area type="monotone" dataKey="val24" stroke={NOTION_BLUE} strokeWidth={2} fillOpacity={1} fill="url(#colorReach)" name="2024" />
                      <Area type="monotone" dataKey="val23" stroke="#A0A0A0" strokeWidth={2} strokeDasharray="5 5" fill="none" name="2023" />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          {/* Chart 2: Regional Expansion MENA */}
          <div className="bg-white border border-[#E1E1E1] rounded-xl p-6 shadow-sm flex flex-col">
             <h4 className="font-bold text-[#37352f] mb-6 flex items-center gap-2">
                <TrendingUp size={18} className="text-[#2383E2]" />
                {t.projects.performance.dashboard.regionalExp}
             </h4>
             <div className="flex-1 w-full min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={MENA_DATA}>
                      <CartesianGrid vertical={false} horizontal={false} />
                      <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#37352f', fontWeight: 600}} dy={10} />
                      <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                      <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                        {MENA_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                   </BarChart>
                </ResponsiveContainer>
             </div>
          </div>

       </div>

       {/* Row 3: Audience Quality & Product Demand */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Chart 3: Audience Quality */}
          <div className="bg-white border border-[#E1E1E1] rounded-xl p-6 shadow-sm">
             <h4 className="font-bold text-[#37352f] mb-6 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#2383E2]" />
                {t.projects.performance.dashboard.audienceQuality}
             </h4>
             <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <BarChart layout="vertical" data={AUDIENCE_DATA} margin={{ left: 20 }}>
                      <CartesianGrid horizontal={true} vertical={false} stroke="#f0f0f0" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#37352f', fontWeight: 500}} width={80} />
                      <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                        {AUDIENCE_DATA.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                   </BarChart>
                </ResponsiveContainer>
             </div>
             <div className="flex justify-center gap-4 mt-2">
                <div className="flex items-center gap-1.5 text-xs text-[#787774]">
                   <span className="w-2 h-2 rounded-full bg-[#2383E2]"></span> {t.projects.performance.dashboard.procurement}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#787774]">
                   <span className="w-2 h-2 rounded-full bg-[#E1E1E1]"></span> {t.projects.performance.dashboard.others}
                </div>
             </div>
          </div>

          {/* Chart 4: Product Demand */}
          <div className="bg-white border border-[#E1E1E1] rounded-xl p-6 shadow-sm">
             <h4 className="font-bold text-[#37352f] mb-6 flex items-center gap-2">
                <TrendingUp size={18} className="text-[#D44021]" />
                {t.projects.performance.dashboard.productDemand}
             </h4>
             <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <LineChart data={DEMAND_DATA}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9B9A97'}} dy={10} />
                      <Tooltip content={<CustomTooltip />} />
                      {/* 0.4 curve tension as requested */}
                      <Line type="monotone" dataKey="catA" stroke={NOTION_BLUE} strokeWidth={2} dot={false} tension={0.4} />
                      <Line type="monotone" dataKey="catB" stroke={NOTION_RED} strokeWidth={2} dot={false} tension={0.4} />
                      <Line type="monotone" dataKey="catC" stroke={NOTION_YELLOW} strokeWidth={2} dot={false} tension={0.4} />
                   </LineChart>
                </ResponsiveContainer>
             </div>
          </div>

       </div>
    </div>
  );
};
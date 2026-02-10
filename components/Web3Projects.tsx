import React from 'react';
import { NotionBlock, NotionTag, NotionProperty } from './NotionBlock';
import { ExternalLink } from 'lucide-react';

const Web3Card: React.FC<{ project: any }> = ({ project }) => (
  <div className="bg-white border border-stone-200 rounded-md overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
    {/* Cover Image */}
    <div className="h-32 w-full bg-stone-100 overflow-hidden relative border-b border-stone-100">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      {project.tag && (
        <div className="absolute top-2 left-2">
           <NotionTag color="purple">{project.tag}</NotionTag>
        </div>
      )}
    </div>

    <div className="p-4 flex flex-col flex-1">
      <div className="flex items-start gap-2 mb-3">
        <span className="text-xl mt-0.5">{project.icon}</span>
        <h3 className="font-bold text-stone-900 leading-tight">{project.title}</h3>
      </div>

      {/* Properties Area */}
      <div className="space-y-0 mb-4">
        {project.properties.map((prop: any, idx: number) => (
          <NotionProperty 
            key={idx} 
            name={prop.name} 
            value={
              Array.isArray(prop.value) 
                ? prop.value.map((v: string) => <NotionTag key={v} color={prop.color || 'gray'}>{v}</NotionTag>)
                : <span className="text-stone-700">{prop.value}</span>
            } 
          />
        ))}
      </div>

      <p className="text-sm text-stone-600 mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Case Insights Section */}
      <div className="mt-auto bg-[#F7F7F5] rounded p-3 border border-stone-100">
        <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Case Insights</div>
        <ul className="space-y-1.5">
          {project.insights.map((insight: string, idx: number) => (
            <li key={idx} className="text-xs text-stone-700 flex items-start gap-1.5">
              <span className="text-stone-400 mt-0.5">•</span>
              {insight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const Web3Projects: React.FC = () => {
  const projects = [
    {
      title: "Platform Collaboration Strategy: The Sandbox × Yalla",
      icon: "🎮",
      tag: "Platform Collaboration",
      image: "https://picsum.photos/seed/sandbox_meta/600/300",
      description: "A strategic alliance analysis leveraging the voice-based social giant Yalla (39M+ users) for Metaverse expansion. Analyzed VARA policy entry, $34B UAE crypto trading growth, and synergy through 'Dubaiverse' localized scenes.",
      properties: [
        { name: "Focus", value: ["Market trends & insights", "Product-market fit"], color: "orange" },
        { name: "Region", value: ["UAE", "MENA"], color: "blue" },
      ],
      insights: [
        "VARA Policy Entry Strategy",
        "Yalla Key Data Analysis",
        "Metaverse Synergy Value",
        "Action Path: NFT Issuance"
      ]
    },
    {
      title: "Exchange Market Strategy: Binance Case Project",
      icon: "💱",
      tag: "Go-to-Market Planning",
      image: "https://picsum.photos/seed/binance_crypto/600/300",
      description: "Deep-dive into global exchange leadership utilizing PESTEL/SWOT frameworks. Examined the $213M compliance investment progress, MiCA regulatory tightening, and ecosystem growth across BNB Chain and Trust Wallet.",
      properties: [
        { name: "Focus", value: ["Market trends & insights", "Target audience"], color: "blue" },
        { name: "Strategy", value: ["Channel strategy", "Compliance"], color: "red" },
        { name: "Scope", value: ["Global"], color: "green" },
      ],
      insights: [
        "PESTEL External Analysis",
        "SWOT Internal Analysis",
        "Compliance & MiCA Mapping",
        "2024 Expansion Progress"
      ]
    },
    {
      title: "Research-Driven Strategy: Web3 & Women Participation",
      icon: "📑",
      tag: "Market & Customer Research",
      image: "https://picsum.photos/seed/research_women/600/300",
      description: "Evidence-based study on institutional and cultural drivers. Identified operational themes: policy awareness as a barrier-mitigator, program access, and the impact of family/social expectations on platform inclusiveness signals.",
      properties: [
        { name: "Methods", value: ["Market trends & insights", "Target audience"], color: "blue" },
        { name: "Journey", value: ["Buyer's journey"], color: "orange" },
        { name: "Region", value: ["UAE"], color: "blue" },
      ],
      insights: [
        "Empirical Survey & Interviews",
        "Institutional Mechanisms",
        "Operational Themes",
        "Inclusiveness Signals"
      ]
    }
  ];

  return (
    <div className="px-4 md:px-12">
      <NotionBlock title="Web3 Market Strategy & Growth" icon="🔮" rightElement={
        <button className="text-xs flex items-center gap-1 text-stone-400 hover:text-stone-600 transition-colors">
          <ExternalLink size={12} /> View all
        </button>
      }>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <Web3Card key={idx} project={p} />
          ))}
        </div>

        {/* Placeholder for the secondary row of visuals from PDF - represented as a gallery strip */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
           {[
             { title: "Cooperative Strategy", desc: "Edited by Canva", img: "https://picsum.photos/seed/slide1/400/500" },
             { title: "Strategic Recommendations", desc: "Edited by AnyGen AI (Nano Banana)", img: "https://picsum.photos/seed/slide2/400/500" },
             { title: "Women's Participation", desc: "Edited by ChatGPT & AnyGen AI", img: "https://picsum.photos/seed/slide3/400/500" }
           ].map((slide, idx) => (
             <div key={idx} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-md overflow-hidden border border-stone-200 shadow-sm relative">
                  <img src={slide.img} alt={slide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                     <div className="text-white font-medium text-sm">{slide.title}</div>
                     <div className="text-white/80 text-xs">{slide.desc}</div>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </NotionBlock>
    </div>
  );
};
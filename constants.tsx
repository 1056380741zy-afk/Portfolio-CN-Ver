import { BarChart3, Globe2, Mic2, GraduationCap, Briefcase } from 'lucide-react';

export const COMPETENCIES = [
  {
    id: 'c1',
    title: 'Marketing & Strategy',
    icon: <BarChart3 className="text-blue-500" size={24} />,
    items: [
      'Market & customer research',
      'Go-to-market strategy',
      'Campaign planning & execution',
      'Regional market analysis (MENA)'
    ]
  },
  {
    id: 'c2',
    title: 'Content & Channels',
    icon: <Globe2 className="text-green-500" size={24} />,
    items: [
      'Email marketing (EDM)',
      'Social media & community',
      'Multilingual content (ZH/EN/AR)',
      'Website content & SEO'
    ]
  },
  {
    id: 'c3',
    title: 'Events & Activation',
    icon: <Mic2 className="text-orange-500" size={24} />,
    items: [
      'International exhibitions',
      'Regional market activation',
      'On-site operations',
      'Stakeholder coordination'
    ]
  }
];

export const PROFESSIONAL_JOURNEY = [
  {
    type: "education",
    title: "MSc International Business",
    organization: "University of Birmingham",
    location: "Dubai, UAE",
    period: "Oct 2024 – Nov 2025",
    focus: "Market strategy, Web3 ecosystems, MENA institutional context",
    honor: "Full Scholarship Recipient",
    icon: "GraduationCap"
  },
  {
    type: "experience",
    title: "Marketing & Growth Strategy",
    organization: "Herui Group",
    location: "Shanghai, China",
    period: "Aug 2023 – Jun 2026",
    roles: [
      { title: "MENA Marketing Consultant (Part-time Job)", period: "Mar 2025 – Jun 2026" },
      { title: "Marketing Assistant (Internship)", period: "Aug 2023 – Aug 2024" }
    ],
    detailedBullets: [
      { icon: "Layout", text: "Updated and optimized WordPress-based website content, including banner design, logo adjustments, and layout refinement." },
      { icon: "Search", text: "Performed English SEO (TDK) optimization across multiple site pages, keyword planning, and meta descriptions." },
      { icon: "Mail", text: "Designed and executed EDM email marketing campaigns, including copywriting, graphic design, and layout." },
      { icon: "Languages", text: "Produced multilingual (ZH/EN/AR) marketing materials, magazine layouts, and key visual assets." },
      { icon: "Share2", text: "Managed overseas digital marketing campaigns across EDM, WhatsApp, Facebook, and LinkedIn." }
    ],
    stats: [
      { value: "45.6%", label: "YoY Growth<br>in Pre-registration" },
      { value: "76%", label: "Decision Makers<br>in Audience Profile" },
      { value: "1,000+", label: "New Visitors<br>from MENA Region" },
      { value: "30%", label: "EDM Open Rate<br>High Engagement" }
    ],
    icon: "Briefcase"
  },
  {
    type: "education",
    title: "Exchange Program",
    organization: "Alexandria University",
    location: "Alexandria, Egypt",
    period: "Sep 2022 – Jun 2023",
    focus: "Arabic Language & Cultural Immersion",
    honor: "Ranked 1st in GPA Evaluation",
    icon: "GraduationCap"
  },
  {
    type: "education",
    title: "Bachelor's Degree",
    organization: "Shanghai International Studies University",
    location: "Shanghai, China",
    period: "Sep 2020 – Jun 2024",
    focus: "Arabic and International Business background",
    honor: "Multiple Academic Excellence Scholarships",
    icon: "GraduationCap"
  }
];

// Retaining old JOURNEY export to prevent breaking other imports if any, though not used in new design
export const JOURNEY = [];

export const WEB3_PROJECTS = [
  {
    id: "sandbox-yalla",
    category: "Platform Collaboration",
    title: "Platform Collaboration Strategy: The Sandbox × Yalla",
    description: "A strategic alliance analysis leveraging the voice-based social giant Yalla (39M+ users) for Metaverse expansion. Analyzed VARA policy entry, $34B UAE crypto trading growth, and synergy through 'Dubaiverse' localized scenes.",
    imageUrl: "https://lh3.googleusercontent.com/d/1C89k7wuSwPhG_jYAxEsNG8tYbFAA0eiq",
    infographicUrl: "https://lh3.googleusercontent.com/d/1-XiUdGJNy2ve1LlETgxJUNFM6I0BG1Lr",
    infographicCredit: "Edited by Canva"
  },
  {
    id: "binance-strategy",
    category: "Go-to-Market Planning",
    title: "Exchange Market Strategy: Binance Case Project",
    description: "Deep-dive into global exchange leadership utilizing PESTEL/SWOT frameworks. Examined the $213M compliance investment progress, MiCA regulatory tightering, and ecosystem growth across BNB Chain and Trust Wallet.",
    imageUrl: "https://lh3.googleusercontent.com/d/1IRVS3rtTiBIi7F0cKDiCVK4EhMBzYJss",
    infographicUrl: "https://lh3.googleusercontent.com/d/1lNzje39ufWgOr_E1Jmc9L6x5lVruy85K",
    infographicCredit: "Edited by ChatGPT"
  },
  {
    id: "women-web3-uae",
    category: "Market & Customer Research",
    title: "Research-Driven Strategy: UAE Women's Participation in Web3",
    description: "Evidence-based study on institutional and cultural drivers. Identified operational themes: policy awareness as a barrier-mitigator, program access, and the impact of family/social expectations on platform inclusiveness signals.",
    imageUrl: "https://lh3.googleusercontent.com/d/1UEx2Dx5y39oK_h5lrtWH5TUVCLNNVGUI",
    infographicUrl: "https://lh3.googleusercontent.com/d/1jL4bKwjIudHfuSJjScEBYCliJS8NkDnY",
    infographicCredit: "Edited by AnyGen"
  }
];

export const EXHIBITIONS = [
  {
    id: 'e1',
    name: '12th AIB-MENA Conference 2024',
    org: 'University of Birmingham (Dubai Campus)',
    languages: ['English', 'Chinese', 'Arabic'],
    roles: ['Event Support', 'On-site Operations'],
    image: 'https://lh3.googleusercontent.com/d/1PXQVNjMjUkwj2BXX3qOIz6w4UqkKVFtO',
    imgPos: 'object-center',
    objFit: 'object-contain'
  },
  {
    id: 'e2',
    name: 'Encounter among Blossoms – The Elegant Gathering of the Song Dynasty',
    org: 'Consulate General of China in Dubai, UAE',
    languages: ['Chinese', 'English', 'Arabic'],
    roles: ['Event Support', 'Language Support', 'On-site Operations'],
    image: 'https://lh3.googleusercontent.com/d/1xaCA2BB30d6CYo5IT4jBtIeyGXHCxT1y',
    imgPos: 'object-top'
  },
  {
    id: 'e3',
    name: 'Power the Digital Era Forward - Global Data Center Facility Summit 2025 (Dubai)',
    org: 'Huawei',
    languages: ['English', 'Chinese', 'Arabic'],
    roles: ['Event Support', 'On-site Operations', 'Language Support'],
    image: 'https://lh3.googleusercontent.com/d/1vyik0sjTItcaBTAjXSoddou5pqHHbwxb',
    imgPos: 'object-center',
    objFit: 'object-contain'
  },
  {
    id: 'e4',
    name: 'WieTec & WATERTECH CHINA 2024/2025',
    org: 'Herui Group',
    languages: ['Chinese', 'English'],
    roles: ['Event Support', 'Language Support'],
    image: 'https://lh3.googleusercontent.com/d/1lCnszzpaC8LClXs2v9yxq6ZllgwtmVin',
    imgPos: 'object-top'
  }
];

export const VIDEO_EMBED_URL = "https://www.canva.com/design/DAF9NhGH6Z8/b3Id1RKuwE3fISU5_pzZow/watch?embed";
export const PERFORMANCE_DATA = [
  { label: '2023', value: 53, fullValue: 2500, display: '2,500' },
  { label: '2024', value: 100, fullValue: 4714, display: '4,714 (Total)' },
  { label: 'Growth', value: 85, fullValue: 4000, display: '+88% Overseas' },
];
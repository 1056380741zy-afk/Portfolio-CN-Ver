import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'cn';

export const translations = {
  en: {
    nav: {
      competencies: "Competencies",
      journey: "Journey",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      locationLabel: "Location",
      locationValue: "Shanghai",
      workModeLabel: "Work Mode",
      workModeValue: "Remote Capable",
      statusLabel: "Status",
      statusValue: "Open to MENA Relocation",
      title: "Bridging cultural context with execution.",
      focusLabel: "Focusing on",
      focusValue: "global B2B campaigns",
      specLabel: "Specializing in",
      specValue: "MENA market strategy",
      btnProjects: "Selected Projects",
      btnContact: "Contact Me",
    },
    competencies: {
      title: "Core Competencies",
      items: [
        {
          title: 'Marketing & Strategy',
          list: ['Market & customer research', 'Go-to-market strategy', 'Campaign planning & execution', 'Regional market analysis (MENA)']
        },
        {
          title: 'Content & Channels',
          list: ['Email marketing (EDM)', 'Social media & community', 'Multilingual content (ZH/EN/AR)', 'Website content & SEO']
        },
        {
          title: 'Events & Activation',
          list: ['International exhibitions', 'Regional market activation', 'On-site operations', 'Stakeholder coordination']
        }
      ]
    },
    journey: {
      title: "Professional Journey",
      items: [
        {
          type: "education",
          typeLabel: "education",
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
          typeLabel: "experience",
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
          typeLabel: "education",
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
          typeLabel: "education",
          title: "Bachelor's Degree",
          organization: "Shanghai International Studies University",
          location: "Shanghai, China",
          period: "Sep 2020 – Jun 2024",
          focus: "Arabic and International Business background",
          honor: "Multiple Academic Excellence Scholarships",
          icon: "GraduationCap"
        }
      ]
    },
    skills: {
      title: "Skills & Tools",
      toolsTitle: "Tools & Software",
      languagesTitle: "Languages",
      regionalTitle: "Regional Expertise",
      regionalDesc: "Leveraging native-level Arabic proficiency and deep cultural understanding to bridge <strong>China-MENA</strong> business gaps.",
      regionalTags: ["Market Entry", "Localization", "Cross-border"],
      languages: [
        { language: 'Arabic', level: 'Native-level / Professional' },
        { language: 'English', level: 'Professional Proficiency' },
        { language: 'Chinese', level: 'Native' },
      ]
    },
    contact: {
      tag: "Get in Touch",
      titleStart: "Let's work",
      titleEnd: "together.",
      descStart: "Open for",
      descHighlight: "marketing",
      descEnd: "opportunities, and AI/Web3 growth discussions.",
      btnCopy: "Copy Email",
      btnCopied: "Email Copied!",
      orEmail: "Or email directly:",
    },
    footer: {
      rights: "All Rights Reserved.",
    }
  },
  cn: {
    nav: {
      competencies: "核心胜任力",
      journey: "职场历程",
      projects: "项目案例",
      skills: "技能与工具",
      contact: "联系我",
    },
    hero: {
      locationLabel: "所在地",
      locationValue: "上海",
      workModeLabel: "工作模式",
      workModeValue: "支持远程办公",
      statusLabel: "当前状态",
      statusValue: "可接受中东/北非外派",
      title: "连接文化语境与高效执行。",
      focusLabel: "专注于",
      focusValue: "全球 B2B 营销活动",
      specLabel: "擅长于",
      specValue: "中东及北非（MENA）市场策略",
      btnProjects: "精选项目",
      btnContact: "联系我",
    },
    competencies: {
      title: "核心胜任力",
      items: [
        {
          title: '市场营销与战略',
          list: ['市场与客户调研', '市场进入策略 (GTM)', '营销活动规划与执行', '区域市场分析 (中东非/MENA)']
        },
        {
          title: '内容与渠道',
          list: ['邮件营销 (EDM)', '社交媒体与社群运营', '多语种内容创作 (中/英/阿)', '网站内容维护与 SEO 优化']
        },
        {
          title: '活动与落地',
          list: ['国际展会营销', '区域市场活动落地', '现场运营管理', '利益相关方协调']
        }
      ]
    },
    journey: {
      title: "职场与教育历程",
      items: [
        {
          type: "education",
          typeLabel: "教育背景",
          title: "国际商务硕士",
          organization: "伯明翰大学",
          location: "阿联酋，迪拜",
          period: "2024年10月 – 2025年11月",
          focus: "市场战略、Web3 生态、中东非地区体制环境",
          honor: "全额奖学金获得者",
          icon: "GraduationCap"
        },
        {
          type: "experience",
          typeLabel: "工作经验",
          title: "市场营销与增长战略",
          organization: "荷瑞集团",
          location: "中国，上海",
          period: "2023年8月 – 2026年6月",
          roles: [
            { title: "中东北非市场营销顾问（远程兼职）", period: "2025年3月 – 2026年6月" },
            { title: "市场助理 (实习)", period: "2023年8月 – 2024年8月" }
          ],
          detailedBullets: [
            { icon: "Layout", text: "更新并优化基于 WordPress 的网站内容，包括 Banner 设计、Logo 调整及版面视觉精修。" },
            { icon: "Search", text: "负责多个网站页面的英文 SEO (TDK) 优化、关键词规划及元描述撰写。" },
            { icon: "Mail", text: "策划并执行 EDM 邮件营销活动，负责文案撰写、视觉设计及排版。" },
            { icon: "Languages", text: "制作多语种 (中/英/阿) 营销材料、杂志排版及核心视觉资产。" },
            { icon: "Share2", text: "管理海外数字营销活动，覆盖 EDM、WhatsApp、Facebook 及 LinkedIn 渠道。" }
          ],
          stats: [
            { value: "45.6%", label: "预登记人数<br>同比增长" },
            { value: "76%", label: "观众画像中的<br>决策者占比" },
            { value: "1,000+", label: "中东非地区<br>新增访客数" },
            { value: "30%", label: "EDM 打开率<br>高用户参与度" }
          ],
          icon: "Briefcase"
        },
        {
          type: "education",
          typeLabel: "教育背景",
          title: "交换生项目",
          organization: "亚历山大大学｜阿拉伯语专业",
          location: "埃及，亚历山大",
          period: "2022年9月 – 2023年6月",
          focus: "阿拉伯语语言与文化沉浸",
          honor: "平均学分绩点 (GPA) 排名第一",
          icon: "GraduationCap"
        },
        {
          type: "education",
          typeLabel: "教育背景",
          title: "学士学位",
          organization: "上海外国语大学贤达经济人文学院｜阿拉伯语专业",
          location: "中国，上海",
          period: "2020年9月 – 2024年6月",
          focus: "阿拉伯语与国际商务背景",
          honor: "多次获得优秀学生奖学金",
          icon: "GraduationCap"
        }
      ]
    },
    skills: {
      title: "技能与工具",
      toolsTitle: "工具与软件",
      languagesTitle: "语言能力",
      regionalTitle: "区域专家",
      regionalDesc: "凭借专业的阿拉伯语沟通能力与深厚的跨文化洞察，架起<strong>中国与中东非地区 (MENA)</strong> 之间的商务桥梁。",
      regionalTags: ["市场进入", "本地化", "跨境贸易"],
      languages: [
        { language: '阿拉伯语', level: '专业工作水平' },
        { language: '英语', level: '专业工作水平' },
        { language: '中文', level: '母语' },
      ]
    },
    contact: {
      tag: "保持联系",
      titleStart: "期待与您",
      titleEnd: "携手合作。",
      descStart: "诚邀探讨",
      descHighlight: "市场营销",
      descEnd: "合作机会，以及 AI/Web3 增长相关课题。",
      btnCopy: "复制邮箱",
      btnCopied: "邮箱已复制！",
      orEmail: "或直接发送邮件：",
    },
    footer: {
      rights: "保留所有权利。",
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

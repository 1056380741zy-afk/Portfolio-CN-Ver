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
    projects: {
      title: "Selected Projects",
      web3Title: "Web3 Market Strategy & Growth",
      web3Projects: [
        {
          category: "Platform Collaboration",
          title: "Platform Collaboration Strategy: The Sandbox × Yalla",
          description: "A strategic alliance analysis leveraging the voice-based social giant Yalla (39M+ users) for Metaverse expansion. Analyzed VARA policy entry, $34B UAE crypto trading growth, and synergy through 'Dubaiverse' localized scenes.",
          infographicCredit: "Edited by Canva",
          insights: ["VARA Policy Entry Strategy", "Yalla Key Data Analysis", "Metaverse Synergy Value", "Action Path: NFT Issuance"]
        },
        {
          category: "Go-to-Market Planning",
          title: "Exchange Market Strategy: Binance Case Project",
          description: "Deep-dive into global exchange leadership utilizing PESTEL/SWOT frameworks. Examined the $213M compliance investment progress, MiCA regulatory tightering, and ecosystem growth across BNB Chain and Trust Wallet.",
          infographicCredit: "Edited by ChatGPT",
          insights: ["PESTEL External Analysis", "SWOT Internal Analysis", "Compliance & MiCA Mapping", "2024 Expansion Progress"]
        },
        {
          category: "Market & Customer Research",
          title: "Research-Driven Strategy: UAE Women's Participation in Web3",
          description: "Evidence-based study on institutional and cultural drivers. Identified operational themes: policy awareness as a barrier-mitigator, program access, and the impact of family/social expectations on platform inclusiveness signals.",
          infographicCredit: "Edited by AnyGen",
          insights: ["Empirical Survey & Interviews", "Institutional Mechanisms", "Operational Themes", "Inclusiveness Signals"]
        }
      ],
      b2bTitle: "Global B2B Marketing Campaigns",
      exhibitionTitle: "International Exhibition Campaigns: WATERTECH CHINA & WieTec",
      channelStrategy: "Channel Strategy",
      case1: {
        tag: "CASE 1",
        title: "EDM Optimization",
        desc: "High-conversion eDM Design Case Study (PDF)",
        taskTitle: "Task / Challenge",
        taskDesc: "Achieve high-conversion eDM design under the constraint of highly redundant brand information.",
        painPoint: "Stakeholders required excessive content per issue, with strict prohibitions on text reduction.",
        limitation: "Avoid the risk of email clients blocking complex images and tables.",
        actionTitle: "Action / Strategy",
        actionDesc: "Implemented the following multi-dimensional optimizations:",
        action1: "<strong class='text-[#37352f]'>Interaction & Layout:</strong> Restructured visual hierarchy using 'Limited Image + High-Frequency CTA' strategy, utilizing color blocks instead of large backgrounds.",
        action2: "<strong class='text-[#37352f]'>Matrix Placement:</strong> Precisely embedded Website Links in all modules to shorten the path from viewing to conversion.",
        action3: "<strong class='text-[#37352f]'>AI Empowerment:</strong> Established a 'Safe Master Template' and used AI to rapidly extend sub-versions for concurrent marketing.",
        resultTitle: "Result / Effect",
        deliverRate: "Deliver Rate",
        openRate: "Open Rate",
        ctr: "CTR",
        impact: "<strong class='text-[#37352f]'>Conversion Impact:</strong> Effectively increased pre-registration CTR and sign-ups, with Google Analytics tracking step-wise growth in website traffic."
      },
      case2: {
        tag: "CASE 2",
        title: "EDM Localization",
        desc: "RTL Adaptation & Cultural Localization",
        taskTitle: "Task / Challenge",
        taskDesc: "Cross-cultural visual reconstruction: Localization design for Arabic graphic content.",
        difficulty: "Handle RTL (Right-to-Left) layout logic for the MENA market without altering the original design aesthetic.",
        req: "Ensure text flow, visual focus, and interactive elements align with local reading habits.",
        actionTitle: "Action / Strategy",
        actionDesc: "Agile Design Support & RTL Adaptation Scheme:",
        action1: "<strong class='text-[#37352f]'>Tool Synergy:</strong> Flexibly utilized Canva and professional tools for secondary creation, strictly following brand visual guidelines.",
        action2: "<strong class='text-[#37352f]'>Localized Visual Calibration:</strong> Mirrored visual layouts to ensure CTAs, icons, and information flow perfectly match the intuition of native Arabic speakers.",
        resultTitle: "Result / Effect",
        impactTitle: "Regional Coverage Expansion & Private Domain Conversion",
        impact1: "<strong class='text-[#37352f]'>Market Coverage:</strong> Successfully achieved deep coverage of brand materials in the MENA region, eliminating language and cultural barriers.",
        impact2: "<strong class='text-[#37352f]'>Channel Activation:</strong> Significantly boosted website traffic and real-time inquiry response rates on social channels like <strong class='text-[#166534]'>WhatsApp</strong>."
      },
      digitalMatrix: {
        title: "Digital & Social Matrix",
        subtitle: "Content Marketing (Social Media & Website)",
        featuredVideo: "Featured Video"
      },
      performance: {
        title: "Overall Performance Impact",
        opsTitle: "Operational Excellence & Process Architecture",
        cards: [
          { title: "CMS Mastery", desc: "Standardized WordPress & Elementor workflows to ensure design consistency." },
          { title: "Digital Automation", desc: "AI-driven workflows for multi-channel EDM & Social Media content." },
          { title: "MENA Operations", desc: "Protocols for WhatsApp Private Domain & Visa Approval workflows." }
        ],
        dashboard: {
          intlReach: "International Reach",
          audienceQuality: "Audience Quality",
          productDemand: "Product Demand",
          regionalExp: "Regional Expansion: MENA",
          signals: "Forward Signals",
          yoyBadge: "YoY +45.6%",
          procurement: "Procurement",
          others: "Others",
          growth: "Growth",
          decisionMakers: "Decision Makers",
          openRate: "Avg Open Rate",
          intlAttendance: "Int'l Attendance"
        }
      },
      activationTitle: "Regional Market Activation",
      activation: {
        lang: "Languages",
        role: "Role"
      },
      exhibitions: {
        e1: { name: '12th AIB-MENA Conference 2024', org: 'University of Birmingham (Dubai Campus)', roles: ['Event Support', 'On-site Operations'] },
        e2: { name: 'Encounter among Blossoms – The Elegant Gathering of the Song Dynasty', org: 'Consulate General of China in Dubai, UAE', roles: ['Event Support', 'Language Support', 'On-site Operations'] },
        e3: { name: 'Power the Digital Era Forward - Global Data Center Facility Summit 2025 (Dubai)', org: 'Huawei', roles: ['Event Support', 'On-site Operations', 'Language Support'] },
        e4: { name: 'WieTec & WATERTECH CHINA 2024/2025', org: '荷瑞集团', roles: ['Event Support', 'Language Support'] }
      }
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
    projects: {
      title: "项目案例",
      web3Title: "Web3 市场战略与增长",
      web3Projects: [
        {
          category: "平台合作",
          title: "平台合作策略：The Sandbox × Yalla",
          description: "针对语音社交巨头 Yalla（3900万+用户）进军元宇宙的战略联盟分析。分析了 VARA 政策准入、阿联酋 340 亿美元的加密交易增长，以及通过“Dubaiverse”本地化场景实现的协同效应。",
          infographicCredit: "由 Canva 编辑",
          insights: ["VARA 政策准入策略", "Yalla 关键数据分析", "元宇宙协同价值", "行动路径：NFT 发行"]
        },
        {
          category: "市场进入规划 (GTM)",
          title: "交易所市场策略：币安案例项目",
          description: "利用 PESTEL/SWOT 框架深入剖析全球交易所龙头的市场策略。审视了其 2.13 亿美元的合规投资进展、MiCA 监管紧缩下的应对，以及 BNB Chain 和 Trust Wallet 的生态增长。",
          infographicCredit: "由 ChatGPT 编辑",
          insights: ["PESTEL 外部环境分析", "SWOT 内部优势分析", "合规与 MiCA 映射", "2024 扩张进程"]
        },
        {
          category: "市场与客户调研",
          title: "研究驱动策略：阿联酋女性在 Web3 的参与度",
          description: "基于证据的体制与文化驱动因素研究。确定了关键运营主题：作为障碍缓解因素的政策认知、项目准入渠道，以及家庭/社会期望对平台包容性信号的影响。",
          infographicCredit: "由 AnyGen 编辑",
          insights: ["实证调查与访谈", "制度机制分析", "运营主题洞察", "包容性信号研究"]
        }
      ],
      b2bTitle: "全球 B2B 营销战役",
      exhibitionTitle: "国际展会营销：上海国际水展 (WATERTECH CHINA) & 世环会 (WieTec)",
      channelStrategy: "渠道策略",
      case1: {
        tag: "案例 1",
        title: "EDM 邮件优化",
        desc: "高转化 EDM 设计案例研究 (PDF)",
        taskTitle: "任务 / 挑战",
        taskDesc: "在品牌信息高度冗余的限制下，实现高转化的 EDM 设计。",
        painPoint: "在高文本量且要求不对文字做删减的情况下进行图文排版",
        limitation: "避免复杂的图片和表格被邮件客户端拦截的风险。",
        actionTitle: "行动 / 策略",
        actionDesc: "实施了以下多维度优化：",
        action1: "<strong class='text-[#37352f]'>交互与布局：</strong> 重构视觉层级，采用“少图 + 高频 CTA”策略，利用色块代替大背景图。",
        action2: "<strong class='text-[#37352f]'>矩阵布局：</strong> 在所有模块中精准植入官网链接，缩短从浏览到转化的路径。",
        action3: "<strong class='text-[#37352f]'>AI 赋能：</strong> 建立“安全母版”，利用 AI 快速延展子版本以支持并发营销。",
        resultTitle: "结果 / 成效",
        deliverRate: "送达率",
        openRate: "打开率",
        ctr: "点击率",
        impact: "<strong class='text-[#37352f]'>转化影响：</strong> 有效提升了预登记点击率和注册量，Google Analytics 追踪到网站流量的阶梯式增长。"
      },
      case2: {
        tag: "案例 2",
        title: "EDM 本地化",
        desc: "RTL 适配与文化本地化",
        taskTitle: "任务 / 挑战",
        taskDesc: "跨文化视觉重构：阿拉伯语图文内容的本地化设计。",
        difficulty: "在不改变原有设计美感的前提下，处理针对 MENA 市场的 RTL（从右至左）排版逻辑。",
        req: "确保文本流、视觉焦点和交互元素符合当地阅读习惯。",
        actionTitle: "行动 / 策略",
        actionDesc: "敏捷设计支持与 RTL 适配方案：",
        action1: "<strong class='text-[#37352f]'>工具协同：</strong> 灵活运用 Canva 和专业工具进行二次创作，严格遵循品牌视觉规范。",
        action2: "<strong class='text-[#37352f]'>本地化视觉校准：</strong> 镜像翻转视觉布局，确保 CTA、图标和信息流完美契合阿拉伯语母语者的直觉。",
        resultTitle: "结果 / 成效",
        impactTitle: "区域覆盖扩展与私域转化",
        impact1: "<strong class='text-[#37352f]'>市场覆盖：</strong> 成功实现了品牌物料在 MENA 地区的深度覆盖，消除了语言和文化障碍。",
        impact2: "<strong class='text-[#37352f]'>渠道激活：</strong> 显著提升了网站流量以及 <strong class='text-[#166534]'>WhatsApp</strong> 等社交渠道的实时询盘响应率。"
      },
      digitalMatrix: {
        title: "数字与社交矩阵",
        subtitle: "内容营销（社交媒体与网站）",
        featuredVideo: "精选视频"
      },
      performance: {
        title: "整体绩效影响力",
        opsTitle: "卓越运营与流程架构",
        cards: [
          { title: "CMS 精通", desc: "标准化 WordPress & Elementor 工作流，确保设计一致性。" },
          { title: "数字化自动化", desc: "AI 驱动的多渠道 EDM 和社交媒体内容工作流。" },
          { title: "MENA 运营", desc: "WhatsApp 私域管理及签证审批工作流协议。" }
        ],
        dashboard: {
          intlReach: "国际影响力",
          audienceQuality: "观众质量分布",
          productDemand: "产品需求趋势",
          regionalExp: "区域扩张：中东非 (MENA)",
          signals: "前瞻性信号",
          yoyBadge: "同比 +45.6%",
          procurement: "采购/决策",
          others: "其他",
          growth: "增长",
          decisionMakers: "拥有决策权",
          openRate: "EDM 打开率",
          intlAttendance: "国际观众占比"
        }
      },
      activationTitle: "区域市场活动落地",
      activation: {
        lang: "语言",
        role: "角色"
      },
      exhibitions: {
        e1: { name: '第12届 AIB-MENA 会议 2024', org: '伯明翰大学（迪拜校区）', roles: ['会议支持', '现场运营'] },
        e2: { name: '花间相遇——宋代雅集', org: '中国驻迪拜总领事馆', roles: ['活动支持', '语言支持', '现场运营'] },
        e3: { name: '点亮数字时代——2025华为全球数据中心设施峰会（迪拜）', org: '华为', roles: ['活动支持', '现场运营', '语言支持'] },
        e4: { name: 'WieTec & WATERTECH CHINA 2024/2025', org: '荷瑞集团', roles: ['活动支持', '语言支持'] }
      }
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
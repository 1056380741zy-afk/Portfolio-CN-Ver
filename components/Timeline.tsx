import React from 'react';
import { NotionBlock, NotionTag } from './NotionBlock';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { ExperienceItem, EducationItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Marketing Assistant (Internship)',
    company: 'Herui Group, Shanghai',
    period: 'Aug 2023 – Aug 2024',
    location: 'Shanghai, China',
    description: [
      'Updated and optimized WordPress website content, SEO (TDK) optimization, daily visits increased by 200.',
      'Designed EDM campaigns with 30.18% open rate and 8.5% click rate.',
      'Managed overseas digital marketing (WhatsApp, Facebook, LinkedIn).',
      'Supported international exhibition campaigns reaching 4,000+ attendees.'
    ]
  },
  {
    id: 'exp2',
    role: 'MENA Marketing Consultant (Part-time)',
    company: 'Herui Group',
    period: 'Mar 2025 – Jun 2026',
    location: 'Shanghai/Remote',
    description: [
      'Consulting on regional market activation and content localization for Middle East North Africa markets.'
    ]
  }
];

const education: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'MSc International Business',
    school: 'University of Birmingham',
    period: 'Oct 2024 – Nov 2025',
    location: 'Dubai, UAE',
    focus: 'Market strategy, Web3 ecosystems, MENA institutional context',
    achievements: ['Full Scholarship Recipient']
  },
  {
    id: 'edu2',
    degree: 'Exchange Program (Arabic)',
    school: 'Alexandria University',
    period: 'Sep 2022 – Jun 2023',
    location: 'Alexandria, Egypt',
    achievements: ['Ranked 1st in GPA Evaluation']
  },
  {
    id: 'edu3',
    degree: 'Bachelor\'s Degree',
    school: 'Shanghai International Studies University',
    period: 'Sep 2020 – Jun 2024',
    location: 'Shanghai, China',
    focus: 'Arabic and International Business',
    achievements: ['Multiple Academic Excellence Scholarships']
  }
];

export const Timeline: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 mb-12">
      <NotionBlock title="Experience" icon={<Briefcase size={20} className="text-stone-400" />}>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-4 border-l-2 border-stone-200">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-stone-400"></div>
              <h4 className="font-semibold text-stone-800">{exp.role}</h4>
              <div className="text-sm text-stone-500 mb-2 flex flex-wrap gap-2 items-center">
                <span className="font-medium">{exp.company}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar size={12}/> {exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1 text-stone-600">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="leading-snug">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </NotionBlock>

      <NotionBlock title="Education" icon={<GraduationCap size={20} className="text-stone-400" />}>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-4 border-l-2 border-stone-200">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-stone-400"></div>
              <h4 className="font-semibold text-stone-800">{edu.degree}</h4>
              <div className="text-sm text-stone-500 mb-2 flex flex-col sm:flex-row sm:gap-2">
                <span className="font-medium">{edu.school}</span>
                <span className="hidden sm:inline">•</span>
                <span>{edu.period}</span>
              </div>
              {edu.focus && (
                <div className="mb-2">
                   <NotionTag color="gray">{edu.focus}</NotionTag>
                </div>
              )}
              {edu.achievements && (
                <div className="text-sm text-stone-600 italic">
                  {edu.achievements.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      </NotionBlock>
    </div>
  );
};
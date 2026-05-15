'use client';

import { useState } from 'react';
import { useLang } from '@/context/language-context';

type Step = { label: string; tool: string };
type Result = { metric: string; value: string };
type Study = {
  tag: string;
  industry: string;
  title: string;
  problem: string;
  pipeline: Step[];
  results: Result[];
  quote: string;
};

const studies: { en: Study[]; he: Study[] } = {
  en: [
    {
      tag: 'Retail Chain · Azure Stack',
      industry: '🛒',
      title: 'From 7 Disconnected Systems to One Source of Truth',
      problem:
        'A retail chain with 40 branches had sales data scattered across an ERP, a CRM, a POS system, and 4 Excel-based reports emailed weekly. No one trusted the numbers. Decisions took days.',
      pipeline: [
        { label: 'ERP + POS + CRM', tool: 'Raw Sources' },
        { label: 'Ingest & Schedule', tool: 'Azure Data Factory' },
        { label: 'Clean & Model', tool: 'Azure SQL + dbt' },
        { label: 'Visualize', tool: 'Power BI' },
        { label: 'Alert & Automate', tool: 'N8N' },
      ],
      results: [
        { metric: 'Daily reports', value: 'Fully automated' },
        { metric: 'Time saved', value: '12 hrs/week' },
        { metric: 'Data sources unified', value: '7 → 1' },
        { metric: 'Trust in numbers', value: 'From zero to daily use' },
      ],
      quote:
        '"For the first time, every branch manager opens the same dashboard on Monday morning and sees the same truth."',
    },
    {
      tag: 'SaaS Startup · AWS Stack + AI',
      industry: '💻',
      title: 'An AI Agent That Answers Business Questions in Plain Language',
      problem:
        'A B2B SaaS company was growing fast but flying blind — no clear picture of churn, activation rates, or which features drove retention. The data existed in S3 logs, but no one could query it without an engineer.',
      pipeline: [
        { label: 'App Events & Logs', tool: 'S3 Raw Storage' },
        { label: 'Transform & Load', tool: 'AWS Glue + Lambda' },
        { label: 'Warehouse', tool: 'Amazon Redshift' },
        { label: 'KPI Dashboards', tool: 'Power BI' },
        { label: 'Ask in Natural Language', tool: 'AI Agent (RAG)' },
      ],
      results: [
        { metric: 'Churn visibility', value: 'Real-time' },
        { metric: 'Time to insight', value: '3 days → 30 sec' },
        { metric: 'Non-tech users querying data', value: 'CEO, Sales, CS' },
        { metric: 'AI questions answered/day', value: '50+ without an engineer' },
      ],
      quote:
        '"The CEO now asks our AI agent questions every morning instead of waiting for the weekly data meeting."',
    },
  ],
  he: [
    {
      tag: 'רשת קמעונאות · Azure Stack',
      industry: '🛒',
      title: 'מ-7 מערכות מנותקות למקור אמת אחד',
      problem:
        'רשת קמעונאות עם 40 סניפים שמרה נתוני מכירות ב-ERP, CRM, מערכת קופה ו-4 קבצי Excel שנשלחו במייל מדי שבוע. אף אחד לא סמך על המספרים. כל החלטה לקחה ימים.',
      pipeline: [
        { label: 'ERP + קופה + CRM', tool: 'מקורות גולמיים' },
        { label: 'איסוף ותזמון', tool: 'Azure Data Factory' },
        { label: 'ניקוי ומידול', tool: 'Azure SQL + dbt' },
        { label: 'ויזואליזציה', tool: 'Power BI' },
        { label: 'התראות ואוטומציה', tool: 'N8N' },
      ],
      results: [
        { metric: 'דוחות יומיים', value: 'אוטומטיים לחלוטין' },
        { metric: 'זמן שנחסך', value: '12 שעות/שבוע' },
        { metric: 'מקורות נתונים', value: '7 → 1' },
        { metric: 'אמון במספרים', value: 'משימוש אפס לשימוש יומי' },
      ],
      quote:
        '"לראשונה, כל מנהל סניף פותח את אותו הדשבורד ביום שני בבוקר ורואה את אותה האמת."',
    },
    {
      tag: 'SaaS Startup · AWS + AI',
      industry: '💻',
      title: 'סוכן AI שעונה על שאלות עסקיות בשפה פשוטה',
      problem:
        'חברת B2B SaaS צמחה מהר אבל טסה עיוורת — אף אחד לא ידע את שיעור הנטישה, האקטיבציה, או אילו פיצ\'רים מחזיקים לקוחות. הנתונים היו ב-S3, אבל אף אחד לא יכול היה לשאול שאלות בלי מהנדס.',
      pipeline: [
        { label: 'Events ולוגים', tool: 'S3 גולמי' },
        { label: 'טרנספורמציה וטעינה', tool: 'AWS Glue + Lambda' },
        { label: 'מחסן נתונים', tool: 'Amazon Redshift' },
        { label: 'דשבורדי KPI', tool: 'Power BI' },
        { label: 'שאלות בשפה טבעית', tool: 'סוכן AI (RAG)' },
      ],
      results: [
        { metric: 'נראות לנטישה', value: 'בזמן אמת' },
        { metric: 'זמן לתובנה', value: '3 ימים → 30 שניות' },
        { metric: 'משתמשים לא-טכניים שמשתמשים', value: 'מנכ"ל, מכירות, שירות' },
        { metric: 'שאלות AI ביום', value: '50+ בלי מהנדס' },
      ],
      quote:
        '"המנכ"ל שואל את סוכן ה-AI שאלות כל בוקר במקום לחכות לישיבת הנתונים השבועית."',
    },
  ],
};

export default function CaseStudies() {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const data = studies[lang];
  const study = data[active];

  const sectionTag = lang === 'en' ? 'Case Studies' : 'תרחישים עסקיים';
  const sectionTitle1 = lang === 'en' ? 'Real problems.' : 'בעיות אמיתיות.';
  const sectionTitle2 = lang === 'en' ? 'Real pipelines.' : 'צינורות אמיתיים.';
  const sectionSub =
    lang === 'en'
      ? 'Each engagement follows the same principle: understand the business first, then build the right data system around it.'
      : 'כל פרויקט פועל לפי אותו עיקרון: קודם מבינים את העסק, אחר כך בונים סביבו את מערכת הנתונים הנכונה.';
  const pipelineLabel = lang === 'en' ? 'Pipeline' : 'צינור הנתונים';
  const resultsLabel = lang === 'en' ? 'Results' : 'תוצאות';

  return (
    <section id="cases" className="bg-[#070C15] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            {sectionTag}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              {sectionTitle1}
            </span>{' '}
            {sectionTitle2}
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">{sectionSub}</p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-3 justify-center mb-10 flex-wrap">
          {data.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === i
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                  : 'bg-white/3 border-white/10 text-white/50 hover:border-white/20 hover:text-white/70'
              }`}
              style={{ background: active === i ? undefined : 'rgba(255,255,255,0.02)' }}
            >
              {s.industry} {s.tag}
            </button>
          ))}
        </div>

        {/* Card */}
        <div
          key={`${lang}-${active}`}
          className="rounded-2xl border border-white/5 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          {/* Card header */}
          <div className="p-8 border-b border-white/5">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{study.title}</h3>
            <p className="text-white/50 leading-relaxed max-w-3xl">{study.problem}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
            {/* Pipeline */}
            <div className="p-8">
              <h4 className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-6">
                {pipelineLabel}
              </h4>
              <div className="space-y-3" dir="ltr">
                {study.pipeline.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 flex items-center justify-between gap-3 rounded-xl bg-white/3 border border-white/5 px-4 py-2.5"
                      style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <span className="text-sm text-white/60">{step.label}</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 shrink-0">
                        {step.tool}
                      </span>
                    </div>
                    {i < study.pipeline.length - 1 && (
                      <div className="absolute" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Results + Quote */}
            <div className="p-8 flex flex-col gap-6">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-6">
                  {resultsLabel}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {study.results.map((r, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/5 p-4"
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                    >
                      <div className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                        {r.value}
                      </div>
                      <div className="text-xs text-white/40 mt-1">{r.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
                <p className="text-sm text-cyan-100/70 italic leading-relaxed">{study.quote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

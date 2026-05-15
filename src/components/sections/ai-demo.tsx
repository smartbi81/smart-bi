'use client';

import { BIAgentChat } from '@/components/ui/bi-agent-chat';
import { useLang } from '@/context/language-context';

export default function AIDemo() {
  const { lang } = useLang();

  const tag    = lang === 'en' ? 'Live Demo' : 'דמו חי';
  const title1 = lang === 'en' ? 'Ask your data' : 'שאל את';
  const title2 = lang === 'en' ? 'anything.' : 'הנתונים שלך.';
  const sub    = lang === 'en'
    ? 'This is a live preview of the AI agent we build for clients. Type a question or click a suggestion — the agent pulls data, runs analysis, and visualizes the answer in seconds.'
    : 'זהו תצוגה מקדימה של סוכן ה-AI שאנחנו בונים ללקוחות. הקלד שאלה או לחץ על הצעה — הסוכן מושך נתונים, מריץ ניתוח ומציג את התשובה תוך שניות.';

  const features = lang === 'en'
    ? ['Natural language queries', 'Live charts & tables', 'Connects to your real data', 'Supports Hebrew & English']
    : ['שאילתות בשפה טבעית', 'גרפים וטבלאות חיים', 'מתחבר לנתונים האמיתיים שלך', 'תומך בעברית ואנגלית'];

  return (
    <section id="demo" className="bg-[#070C15] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">{tag}</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white font-garmoshka">
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              {title1}
            </span>{' '}
            {title2}
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">{sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Features list */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-6">
              {lang === 'en' ? 'What the agent can do' : 'מה הסוכן יכול לעשות'}
            </p>
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <span className="text-white/70 text-sm">{f}</span>
              </div>
            ))}

            {/* Disclaimer */}
            <div className="mt-8 rounded-xl border border-white/5 p-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <p className="text-xs text-white/30 leading-relaxed">
                {lang === 'en'
                  ? '⚡ This demo uses simulated data. In production, the agent connects directly to your databases, warehouses, and BI systems.'
                  : '⚡ הדמו משתמש בנתונים מדומים. בסביבת ייצור, הסוכן מתחבר ישירות למסדי הנתונים, מחסני הנתונים ומערכות ה-BI שלך.'}
              </p>
            </div>
          </div>

          {/* Chat */}
          <div className="lg:col-span-3">
            <BIAgentChat />
          </div>
        </div>
      </div>
    </section>
  );
}

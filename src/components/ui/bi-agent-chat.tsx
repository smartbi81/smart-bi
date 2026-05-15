'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import { SendIcon, LoaderIcon, BotIcon, UserIcon, BarChart2Icon, TableIcon, TrendingUpIcon, SparklesIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/language-context';

/* ─── Types ─────────────────────────────────────────── */
type ChartBar  = { label: string; value: number; color: string };
type KpiCard   = { label: string; value: string; trend: string; up: boolean };
type TableRow  = Record<string, string | number>;

type VisualData =
  | { type: 'bars';  title: string; bars: ChartBar[] }
  | { type: 'kpis';  cards: KpiCard[] }
  | { type: 'table'; columns: string[]; rows: TableRow[] };

interface Message {
  role: 'user' | 'agent';
  text: string;
  visual?: VisualData;
}

/* ─── Suggested questions ───────────────────────────── */
const suggestions = {
  en: [
    { label: 'Q1 Revenue breakdown', icon: <BarChart2Icon className="w-3.5 h-3.5" /> },
    { label: 'Top 5 customers by revenue', icon: <TableIcon className="w-3.5 h-3.5" /> },
    { label: 'Monthly KPIs summary', icon: <TrendingUpIcon className="w-3.5 h-3.5" /> },
    { label: 'Churn rate by segment', icon: <BarChart2Icon className="w-3.5 h-3.5" /> },
  ],
  he: [
    { label: 'פירוט הכנסות רבעון 1', icon: <BarChart2Icon className="w-3.5 h-3.5" /> },
    { label: 'טופ 5 לקוחות לפי הכנסה', icon: <TableIcon className="w-3.5 h-3.5" /> },
    { label: 'סיכום KPIs חודשי', icon: <TrendingUpIcon className="w-3.5 h-3.5" /> },
    { label: 'שיעור נטישה לפי סגמנט', icon: <BarChart2Icon className="w-3.5 h-3.5" /> },
  ],
};

/* ─── Mock responses ─────────────────────────────────── */
const mockResponses: Record<string, { text: { en: string; he: string }; visual: VisualData }> = {
  '0': {
    text: {
      en: "Here's the Q1 revenue breakdown by product line. **Software licenses** led with ₪2.4M, followed by **services** at ₪1.8M. Total Q1: **₪4.9M** — up 18% vs Q4.",
      he: "הנה פירוט הכנסות רבעון 1 לפי קו מוצרים. **רישיונות תוכנה** הובילו עם ₪2.4M, אחריהם **שירותים** ב-₪1.8M. סה\"כ רבעון 1: **₪4.9M** — עלייה של 18% לעומת רבעון 4.",
    },
    visual: {
      type: 'bars',
      title: 'Q1 Revenue by Product Line (₪M)',
      bars: [
        { label: 'Software', value: 78, color: 'bg-cyan-400' },
        { label: 'Services', value: 58, color: 'bg-violet-400' },
        { label: 'Support', value: 38, color: 'bg-blue-400' },
        { label: 'Training', value: 22, color: 'bg-indigo-400' },
      ],
    },
  },
  '1': {
    text: {
      en: "Your **top 5 customers** account for 63% of total revenue. Acme Corp alone contributes 24%. Consider priority support SLAs for this tier.",
      he: "**5 הלקוחות המובילים** שלך מהווים 63% מסך ההכנסות. Acme Corp לבד תורמת 24%. מומלץ לשקול SLAs של תמיכה מועדפת לשכבה זו.",
    },
    visual: {
      type: 'table',
      columns: ['Customer', 'Revenue', 'Growth', 'Segment'],
      rows: [
        { Customer: 'Acme Corp',     Revenue: '₪1.18M', Growth: '+31%', Segment: 'Enterprise' },
        { Customer: 'Globex Ltd',    Revenue: '₪890K',  Growth: '+12%', Segment: 'Enterprise' },
        { Customer: 'Initech',       Revenue: '₪670K',  Growth: '+8%',  Segment: 'Mid-Market' },
        { Customer: 'Umbrella Inc',  Revenue: '₪540K',  Growth: '-3%',  Segment: 'Mid-Market' },
        { Customer: 'Hooli',         Revenue: '₪490K',  Growth: '+44%', Segment: 'Startup' },
      ],
    },
  },
  '2': {
    text: {
      en: "Monthly KPIs are mostly **green**. MRR hit a new high of ₪1.63M. Churn stayed flat at 1.9%. NPS improved to **68** — your best score this year.",
      he: "ה-KPIs החודשיים רובם **ירוקים**. MRR הגיע לשיא חדש של ₪1.63M. הנטישה נשארה ב-1.9%. NPS עלה ל-**68** — הציון הטוב ביותר השנה.",
    },
    visual: {
      type: 'kpis',
      cards: [
        { label: 'MRR', value: '₪1.63M', trend: '+7.2%', up: true },
        { label: 'Churn Rate', value: '1.9%', trend: '−0.1pp', up: true },
        { label: 'NPS', value: '68', trend: '+5 pts', up: true },
        { label: 'New Logos', value: '12', trend: '+4 vs last mo.', up: true },
      ],
    },
  },
  '3': {
    text: {
      en: "Churn is highest in the **SMB** segment at 5.8%, driven mainly by pricing sensitivity. Enterprise churn is only 0.4%. Recommend a targeted retention campaign for SMB.",
      he: "הנטישה הגבוהה ביותר בסגמנט **SMB** עם 5.8%, שנובעת בעיקר מרגישות למחיר. נטישת Enterprise היא רק 0.4%. מומלץ מסע שימור ממוקד ל-SMB.",
    },
    visual: {
      type: 'bars',
      title: 'Churn Rate by Segment (%)',
      bars: [
        { label: 'SMB',        value: 88, color: 'bg-red-400' },
        { label: 'Mid-Market', value: 42, color: 'bg-yellow-400' },
        { label: 'Enterprise', value: 6,  color: 'bg-cyan-400' },
        { label: 'Startup',    value: 60, color: 'bg-orange-400' },
      ],
    },
  },
};

/* ─── Visual renderers ───────────────────────────────── */
function BarChart({ data }: { data: Extract<VisualData, { type: 'bars' }> }) {
  return (
    <div className="mt-3 rounded-xl bg-white/3 border border-white/5 p-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <p className="text-xs text-white/40 mb-3 font-medium">{data.title}</p>
      <div className="space-y-2.5">
        {data.bars.map((b) => (
          <div key={b.label} className="flex items-center gap-3">
            <span className="text-xs text-white/50 w-20 shrink-0 text-right">{b.label}</span>
            <div className="flex-1 h-5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${b.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${b.value}%` }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              />
            </div>
            <span className="text-xs text-white/40 w-8 shrink-0">{b.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KpiCards({ data }: { data: Extract<VisualData, { type: 'kpis' }> }) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-2">
      {data.cards.map((c) => (
        <div key={c.label} className="rounded-xl border border-white/5 p-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <p className="text-xs text-white/40 mb-1">{c.label}</p>
          <p className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">{c.value}</p>
          <p className={`text-xs mt-0.5 ${c.up ? 'text-emerald-400' : 'text-red-400'}`}>{c.trend}</p>
        </div>
      ))}
    </div>
  );
}

function DataTable({ data }: { data: Extract<VisualData, { type: 'table' }> }) {
  return (
    <div className="mt-3 rounded-xl border border-white/5 overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-white/5">
            {data.columns.map((c) => (
              <th key={c} className="px-3 py-2 text-left text-white/30 font-medium">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors">
              {data.columns.map((col) => (
                <td key={col} className={`px-3 py-2 ${
                  String(row[col]).startsWith('+') ? 'text-emerald-400' :
                  String(row[col]).startsWith('-') ? 'text-red-400' : 'text-white/70'
                }`}>
                  {String(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Visual({ data }: { data: VisualData }) {
  if (data.type === 'bars')  return <BarChart data={data} />;
  if (data.type === 'kpis')  return <KpiCards data={data} />;
  if (data.type === 'table') return <DataTable data={data} />;
  return null;
}

/* ─── Format bold markdown ────────────────────────────── */
function FormattedText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <span>
      {parts.map((p, i) =>
        i % 2 === 1
          ? <strong key={i} className="text-cyan-300 font-semibold">{p}</strong>
          : <span key={i}>{p}</span>
      )}
    </span>
  );
}

/* ─── Typing dots ─────────────────────────────────────── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-cyan-400"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

/* ─── Main component ──────────────────────────────────── */
export function BIAgentChat() {
  const { lang } = useLang();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const suggs = suggestions[lang];

  const greeting = lang === 'en'
    ? "Hi! I'm your BI agent. Ask me anything about your business data — I'll pull the numbers and visualize them for you."
    : 'היי! אני סוכן ה-BI שלך. שאל אותי כל דבר על נתוני העסק — אביא את המספרים ואציג אותם ויזואלית.';

  // Show greeting on mount / lang change
  useEffect(() => {
    setMessages([{ role: 'agent', text: greeting }]);
  }, [lang]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    // Find matching mock response by suggestion index
    const idx = suggs.findIndex((s) => s.label === text);
    const mockKey = idx >= 0 ? String(idx) : String(Math.floor(Math.random() * 4));
    const mock = mockResponses[mockKey];

    await new Promise((r) => setTimeout(r, 1600));

    setMessages((m) => [
      ...m,
      {
        role: 'agent',
        text: mock?.text[lang] ?? (lang === 'en'
          ? 'I found relevant data for your query. Here is a summary of the key metrics.'
          : 'מצאתי נתונים רלוונטיים לשאילתה שלך. הנה סיכום של המדדים המרכזיים.'),
        visual: mock?.visual,
      },
    ]);
    setLoading(false);
  }, [loading, lang, suggs]);

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <div className="flex flex-col h-[600px] rounded-2xl border border-white/5 overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.015)' }}>

      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5"
        style={{ background: 'rgba(0,212,255,0.04)' }}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center shrink-0">
          <SparklesIcon className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">SMART BI Agent</p>
          <p className="text-xs text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            {lang === 'en' ? 'Live demo — try it!' : 'דמו חי — נסה!'}
          </p>
        </div>
        <div className="ms-auto text-xs text-white/20 font-mono">v2.0 · AI</div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn('flex gap-2.5', msg.role === 'user' ? 'justify-end' : 'justify-start')}
            >
              {msg.role === 'agent' && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                  <BotIcon className="w-3.5 h-3.5 text-white" />
                </div>
              )}

              <div className={cn('max-w-[82%]', msg.role === 'user' ? 'items-end' : 'items-start', 'flex flex-col')}>
                <div className={cn(
                  'rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-sm'
                    : 'border border-white/5 text-white/80 rounded-bl-sm',
                )}
                  style={msg.role === 'agent' ? { background: 'rgba(255,255,255,0.03)' } : {}}>
                  <FormattedText text={msg.text} />
                </div>
                {msg.visual && <Visual data={msg.visual} />}
              </div>

              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <UserIcon className="w-3.5 h-3.5 text-white/60" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shrink-0">
              <BotIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="rounded-2xl rounded-bl-sm border border-white/5 px-4 py-2.5"
              style={{ background: 'rgba(255,255,255,0.03)' }}>
              <TypingDots />
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
        {suggs.map((s, i) => (
          <button
            key={i}
            onClick={() => send(s.label)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400/70 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 text-xs whitespace-nowrap transition-all duration-200 shrink-0"
          >
            {s.icon}
            {s.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 pb-4">
        <div className="flex items-end gap-2 rounded-xl border border-white/10 px-3 py-2"
          style={{ background: 'rgba(255,255,255,0.04)' }}>
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder={lang === 'en' ? 'Ask about your data...' : 'שאל על הנתונים שלך...'}
            className="flex-1 bg-transparent resize-none text-sm text-white/80 placeholder-white/20 outline-none py-1 max-h-24"
            style={{ lineHeight: '1.5' }}
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading}
            className={cn(
              'w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 shrink-0',
              input.trim() && !loading
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105'
                : 'bg-white/5 text-white/20'
            )}
          >
            {loading
              ? <LoaderIcon className="w-4 h-4 animate-spin" />
              : <SendIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

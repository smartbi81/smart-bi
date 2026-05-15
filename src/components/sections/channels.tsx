'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/language-context';

const ui = {
  he: {
    sub:   'המידע מגיע אליכם — לא ממתין שתגיעו אליו',
    title: 'תקציר מנהלים — כל בוקר ב-07:00',
    body:  'מה קרה אמש, למה זה קרה, ומה לעשות היום — ישירות לנייד או למחשב שלכם, בלי לפתוח שום דשבורד.',
    tab1:  'וואטסאפ',
    tab2:  'מייל',
    more:  '+3',
  },
  en: {
    sub:   'Information reaches you — it doesn\'t wait for you to come to it',
    title: 'Executive Briefing — Every Morning at 7:00 AM',
    body:  'What happened last night, why it happened, and what to do today — straight to your phone or computer, without opening any dashboard.',
    tab1:  'WhatsApp',
    tab2:  'Email',
    more:  '+3',
  },
};

/* ─── fade-up helper ─────────────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ─── SVG icons ──────────────────────────────────────────────────────────── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}
function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  );
}
function TeamsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.625 7.125h-4.5a.375.375 0 0 0-.375.375v4.125a4.125 4.125 0 0 1-8.25 0V3.375A.375.375 0 0 0 7.125 3h-4.5a.375.375 0 0 0-.375.375v8.25a9.75 9.75 0 0 0 9.75 9.75 9.75 9.75 0 0 0 9.75-9.75v-4.5a.375.375 0 0 0-.375-.375zM9.75 3a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0z"/>
    </svg>
  );
}

/* ─── WhatsApp phone mockup ──────────────────────────────────────────────── */
type MsgLine = { text: string; bold?: boolean; sub?: boolean; red?: boolean; orange?: boolean; green?: boolean; mono?: boolean };
type Msg = { from: 'bot' | 'user'; time: string; lines: MsgLine[] };

function WhatsAppMockup() {
  const messages: Msg[] = [
    {
      from: 'bot',
      time: '07:00',
      lines: [
        { text: '📊 *תקציר מנהלים | שלישי 14.5.25*', bold: true },
        { text: 'שלום יוסי 👋 הנה מה שקרה אמש וצריך לדעת.' },
      ],
    },
    {
      from: 'bot',
      time: '07:00',
      lines: [
        { text: '*ביצועי אמש — סיכום:*', bold: true },
        { text: '💰  הכנסות:  ₪287,400', mono: true },
        { text: '📉  שינוי:    -12% ממוצע 7 ימים', mono: true, red: true },
        { text: '🎯  יעד:      ₪310,000  (93% הושג)', mono: true },
      ],
    },
    {
      from: 'bot',
      time: '07:01',
      lines: [
        { text: '*למה זה קרה?*', bold: true },
        { text: '' },
        { text: '❌  ערוץ האונליין צנח 23%', red: true },
        { text: '    ↳ תקלה טכנית ב-11:20, תוקנה 14:30', sub: true },
        { text: '' },
        { text: '🌧️  סניפי הצפון: 8%- מהיעד', orange: true },
        { text: '    ↳ מזג אוויר קשה, תנועת לקוחות נמוכה', sub: true },
        { text: '' },
        { text: '✅  לקוחות עסקיים: +6%', green: true },
        { text: '    ↳ קמפיין שני הניב תוצאות טובות', sub: true },
      ],
    },
    {
      from: 'bot',
      time: '07:02',
      lines: [
        { text: '*מה לעשות היום?*', bold: true },
        { text: '' },
        { text: '1️⃣  שלח פיצוי ל-2,340 לקוחות שנתקעו בתקלה' },
        { text: '2️⃣  בדוק תגבורת לסניפי הצפון לסוף השבוע' },
        { text: '3️⃣  יעד היום: ₪320,000 — בהישג יד' },
        { text: '' },
        { text: 'לאישור כל הפעולות, ענה: *"אשר"* ✅', sub: true },
      ],
    },
    { from: 'user', time: '07:04', lines: [{ text: 'אשר ✅' }] },
    {
      from: 'bot',
      time: '07:04',
      lines: [{ text: '✅ כל 3 הפעולות אושרו ומתבצעות. אעדכן אותך בסיום.' }],
    },
  ];

  return (
    /* phone frame */
    <div className="relative mx-auto select-none" style={{ width: 318 }}>
      {/* outer shell */}
      <div
        className="relative rounded-[46px] p-[10px]"
        style={{
          background: 'linear-gradient(145deg,#2a2a2a,#111)',
          boxShadow: '0 0 0 1px #444, 0 30px 80px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.07)',
        }}
      >
        {/* screen */}
        <div className="rounded-[38px] overflow-hidden bg-[#0b1f15]" style={{ height: 640 }}>

          {/* status bar */}
          <div className="relative flex items-center justify-between px-6 pt-3 pb-1 bg-[#075E54]">
            <span className="text-white text-[11px] font-semibold">09:41</span>
            {/* dynamic island */}
            <div className="absolute left-1/2 top-2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
            <div className="flex items-center gap-0.5">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="6" width="3" height="12" rx="1"/><rect x="6" y="4" width="3" height="14" rx="1"/><rect x="11" y="1" width="3" height="17" rx="1"/><rect x="16" y="3" width="3" height="15" rx="1" opacity=".4"/></svg>
              <svg className="w-5 h-3 text-white" viewBox="0 0 25 12" fill="none"><rect x=".5" y=".5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity=".35"/><rect x="1.5" y="1.5" width="17" height="9" rx="2.5" fill="currentColor"/><path d="M23 4v4a2 2 0 0 0 0-4z" fill="currentColor" fillOpacity=".4"/></svg>
            </div>
          </div>

          {/* WA header */}
          <div className="flex items-center gap-3 px-3 py-2.5 bg-[#075E54]">
            <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0">SB</div>
            <div>
              <p className="text-white text-sm font-semibold leading-none">Smart BI Insights</p>
              <p className="text-green-200/60 text-[10px]">מקוון</p>
            </div>
            <div className="ms-auto flex gap-3">
              <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            </div>
          </div>

          {/* chat bg + messages */}
          <div
            className="overflow-y-auto px-3 py-3 space-y-2"
            style={{ height: 510, background: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.015\'%3E%3Cpolygon points=\'10,0 20,10 10,20 0,10\'/%3E%3C/g%3E%3C/svg%3E") repeat, #0b1f15' }}
            dir="ltr"
          >
            {/* date divider */}
            <div className="flex justify-center my-2">
              <span className="text-[10px] text-white/30 bg-white/5 rounded-full px-3 py-0.5">היום</span>
            </div>

            {messages.map((msg, mi) => (
              <div key={mi} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed ${
                    msg.from === 'bot'
                      ? 'bg-[#1a3022] rounded-tl-sm'
                      : 'bg-[#005C4B] rounded-tr-sm'
                  }`}
                  dir="rtl"
                >
                  {msg.lines.map((l, li) =>
                    l.text === '' ? (
                      <div key={li} className="h-1" />
                    ) : (
                      <p
                        key={li}
                        className={`${l.bold ? 'font-bold text-white' : ''} ${l.sub ? 'text-white/40 text-[11px]' : 'text-white/85'} ${l.red ? 'text-red-300' : ''} ${l.orange ? 'text-orange-300' : ''} ${l.green ? 'text-green-300' : ''} ${l.mono ? 'font-mono' : ''}`}
                        dangerouslySetInnerHTML={{
                          __html: l.text
                            .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
                            .replace(/ {2}/g, '&nbsp;&nbsp;'),
                        }}
                      />
                    )
                  )}
                  <p className={`text-[9px] mt-1 text-white/25 ${msg.from === 'user' ? 'text-left' : 'text-right'}`}>
                    {msg.time}{msg.from === 'user' ? ' ✓✓' : ''}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* input bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#1a2e1e]">
            <svg className="w-5 h-5 text-white/30 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            <div className="flex-1 bg-[#2a3d2e] rounded-full px-3 py-1.5 text-[12px] text-white/20">הודעה</div>
            <svg className="w-8 h-8 text-[#00a884] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
          </div>
        </div>
      </div>
      {/* side buttons */}
      <div className="absolute -right-[3px] top-28 w-[3px] h-10 bg-[#2a2a2a] rounded-l" />
      <div className="absolute -left-[3px] top-20 w-[3px] h-7 bg-[#2a2a2a] rounded-r" />
      <div className="absolute -left-[3px] top-32 w-[3px] h-14 bg-[#2a2a2a] rounded-r" />
      <div className="absolute -left-[3px] top-48 w-[3px] h-14 bg-[#2a2a2a] rounded-r" />
    </div>
  );
}

/* ─── Email mockup ───────────────────────────────────────────────────────── */
function EmailMockup() {
  const causes = [
    { arrow: '↓', color: 'text-red-400', bg: 'bg-red-500/8 border-red-500/15', title: 'ערוץ האונליין צנח 23%', sub: 'תקלה טכנית שפרצה ב-11:20 ותוקנה ב-14:30 — לקוחות נטשו בשלב התשלום' },
    { arrow: '↓', color: 'text-orange-400', bg: 'bg-orange-500/8 border-orange-500/15', title: 'סניפי הצפון: 8% מתחת ליעד', sub: 'גשמים כבדים השפיעו על תנועת הלקוחות לאורך כל שעות הפעילות' },
    { arrow: '↑', color: 'text-green-400', bg: 'bg-green-500/8 border-green-500/15', title: 'לקוחות עסקיים פיצו חלקית: +6%', sub: 'קמפיין B2B שיצא ביום שני הניב הזמנות חדשות בצהריים' },
  ];

  return (
    /* laptop frame */
    <div className="relative mx-auto" style={{ maxWidth: 700 }}>
      {/* screen bezel */}
      <div
        className="rounded-t-2xl pt-5 px-5 pb-0"
        style={{ background: 'linear-gradient(180deg,#1e1e1e,#141414)', boxShadow: '0 0 0 1px #333' }}
      >
        {/* browser chrome */}
        <div className="bg-[#252525] rounded-t-xl overflow-hidden">
          {/* tab bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-3 flex items-center gap-2 bg-[#2d2d2d] rounded-md px-3 py-1.5">
              <svg className="w-3 h-3 text-white/20 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              <span className="text-[11px] text-white/25 truncate">mail.google.com/mail/u/0</span>
            </div>
          </div>

          {/* gmail body */}
          <div className="flex bg-[#1c1c1e]" style={{ height: 520 }}>
            {/* sidebar */}
            <div className="w-48 bg-[#1c1c1e] border-r border-white/5 flex flex-col shrink-0 py-3">
              <div className="px-3 mb-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#2a2a2a]">
                  <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                  <span className="text-sm text-white/50 font-medium">Mail</span>
                </div>
              </div>
              {[
                { label: 'Inbox', count: '3', active: true },
                { label: 'Starred', count: '' },
                { label: 'Sent', count: '' },
                { label: 'Drafts', count: '2' },
              ].map((item) => (
                <div key={item.label} className={`flex items-center justify-between px-4 py-2 rounded-r-full mx-1 cursor-default ${item.active ? 'bg-[#2d3748] text-white' : 'text-white/40 hover:bg-white/5'}`}>
                  <span className="text-xs font-medium">{item.label}</span>
                  {item.count && <span className="text-xs font-bold">{item.count}</span>}
                </div>
              ))}
            </div>

            {/* email content */}
            <div className="flex-1 overflow-y-auto" dir="rtl">
              {/* email header */}
              <div className="px-8 pt-5 pb-4 border-b border-white/6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">SB</div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-none">Smart BI Insights</p>
                      <p className="text-xs text-white/30 mt-0.5">insights@smart-bi.co.il → yossi@company.co.il</p>
                    </div>
                  </div>
                  <span className="text-xs text-white/25 shrink-0 mt-1">היום 07:00</span>
                </div>
                <h2 className="text-base font-bold text-white leading-snug">
                  📊 תקציר מנהלים | מכירות — יום שלישי, 14 במאי 2025
                </h2>
              </div>

              {/* email body */}
              <div className="px-8 py-5 space-y-5 text-sm">
                <p className="text-white/60 leading-relaxed">
                  שלום יוסי, הנה תמצית הביצועים של אמש — מה קרה, למה זה קרה, ומה לעשות היום.
                </p>

                {/* KPI box */}
                <div className="rounded-xl bg-[#161b22] border border-white/8 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/35 mb-1">הכנסות אמש</p>
                    <p className="text-3xl font-black text-white tracking-tight">₪287,400</p>
                    <p className="text-xs text-white/30 mt-1">ממוצע 7 ימים: ₪326,500</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/20 text-sm font-bold">
                      ▼ 12%
                    </span>
                    <p className="text-xs text-white/25 mt-2">93% מהיעד הושג</p>
                  </div>
                </div>

                {/* causes */}
                <div>
                  <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-3">מה גרם לכך?</p>
                  <div className="space-y-2">
                    {causes.map((c, i) => (
                      <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border ${c.bg}`}>
                        <span className={`${c.color} font-black text-lg leading-none mt-0.5 shrink-0`}>{c.arrow}</span>
                        <div>
                          <p className="text-white/80 font-semibold text-sm leading-tight">{c.title}</p>
                          <p className="text-white/35 text-xs mt-0.5 leading-relaxed">{c.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* recommendations */}
                <div>
                  <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-3">המלצות לפעולה היום</p>
                  <div className="space-y-2.5">
                    {[
                      { txt: 'שלח קמפיין פיצוי ל-2,340 לקוחות שניסו לרכוש בשעות התקלה', priority: 'דחוף' },
                      { txt: 'בדוק עם מנהל אזור צפון — ייתכן שנדרשת תגבורת לסוף השבוע', priority: 'היום' },
                      { txt: 'יעד היום: ₪320,000 — בהישג יד', priority: 'מעקב' },
                    ].map((r, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                        <div className="flex-1 flex items-start justify-between gap-3">
                          <p className="text-white/60 text-sm leading-relaxed">{r.txt}</p>
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30 shrink-0 whitespace-nowrap">{r.priority}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/6 flex items-center justify-between">
                  <p className="text-white/20 text-xs">Smart BI — מנוע התובנות שלך</p>
                  <span className="text-[10px] text-white/20 border border-white/8 rounded px-2 py-0.5 cursor-pointer">ביטול הרשמה</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* laptop base */}
      <div className="h-3 rounded-b-sm mx-1" style={{ background: 'linear-gradient(180deg,#1e1e1e,#111)', boxShadow: '0 0 0 1px #333' }} />
      <div className="h-2 rounded-b-xl mx-[-8px]" style={{ background: '#0d0d0d', boxShadow: '0 4px 20px rgba(0,0,0,0.8)' }} />
    </div>
  );
}

/* ─── main section ───────────────────────────────────────────────────────── */
const TABS_DEF = [
  { id: 'whatsapp', Icon: WhatsAppIcon, color: 'text-green-400', activeBg: 'bg-green-500/15 border-green-500/40' },
  { id: 'email',    Icon: MailIcon,    color: 'text-indigo-400', activeBg: 'bg-indigo-500/15 border-indigo-500/40' },
] as const;

const OTHER_PLATFORMS = [
  { name: 'טלגרם', Icon: TelegramIcon, color: 'text-sky-400' },
  { name: 'Slack',  Icon: SlackIcon,   color: 'text-pink-400' },
  { name: 'Teams',  Icon: TeamsIcon,   color: 'text-violet-400' },
];

export default function Channels() {
  const [tab, setTab] = useState<'whatsapp' | 'email'>('whatsapp');
  const { lang, dir } = useLang();
  const tx = ui[lang];

  return (
    <section dir={dir} className="bg-[#060912] relative overflow-hidden py-28 px-6">
      {/* bg glow */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-500/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* header */}
        <FadeUp className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            {tx.sub}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {tx.title}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {tx.body}
          </p>
        </FadeUp>

        {/* tab switcher */}
        <FadeUp delay={0.1} className="flex items-center justify-center gap-3 mb-10">
          {TABS_DEF.map(({ id, Icon, color, activeBg }, i) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                tab === id
                  ? `${activeBg} ${color}`
                  : 'border-white/10 bg-white/3 text-white/40 hover:text-white/60 hover:border-white/20'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {i === 0 ? tx.tab1 : tx.tab2}
            </button>
          ))}

          {/* other platforms hint */}
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/6 bg-white/[0.02]">
            {OTHER_PLATFORMS.map(({ name, Icon, color }) => (
              <span key={name} title={name} className={`${color} opacity-50`}>
                <Icon className="w-4 h-4" />
              </span>
            ))}
            <span className="text-white/25 text-xs me-1">{tx.more}</span>
          </div>
        </FadeUp>

        {/* mockup */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* glow ring behind mockup */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/8 via-violet-600/8 to-cyan-500/5 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative">
                {tab === 'whatsapp' ? <WhatsAppMockup /> : <EmailMockup />}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/ui/navbar';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import { useLang } from '@/context/language-context';

/* ─── animation helper ──────────────────────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── content ───────────────────────────────────────────────────────────── */
const c = {
  he: {
    back: 'חזרה לאתר',
    badge: 'הבידול שלנו',
    heroHeadline1: 'לא דשבורדים.',
    heroHeadline2: 'תובנות.',
    heroSub:
      'רוב הארגונים מוצפים בדוחות BI — ערמות של מסכים ומדדים שקשה להתמצא בהם, ואי אפשר לדעת מה באמת חשוב. Smart BI לא מייצר עוד דוחות. הוא סורק את הדאטה שלכם, מאתר את הסיבות האמיתיות לשינויים, ומספק תובנות ממוקדות עם המלצות ודרכי פעולה ברורות.',

    gapTitle: 'שני עולמות, שני מוצרים',
    gapSub: 'זה לא עניין של דוחות. זה עניין של מה שמגיע אליכם בסוף.',
    gapOthers: {
      label: 'דוחות BI',
      badge: 'הרגיל בשוק',
      items: [
        'דשבורד מוכן בשבוע במקום בחודש',
        'אותן 15 מדדים על אותו מסך',
        '3 אנשים פותחים את הדוח פעם בשבוע',
        'אתם עדיין מפרשים את המספרים בעצמכם',
        'החלטות עדיין מתקבלות מהבטן',
      ],
    },
    gapUs: {
      label: 'Smart BI',
      badge: 'הגישה שלנו',
      items: [
        'שכבת אינטליגנציה שמפרשת ומסבירה',
        'תשובות לשאלות שלכם — לא מדדים שסינן מישהו',
        'המידע מגיע עם הקשר, הסיבה וההמלצה',
        'החלטות מהירות יותר ומבוססות יותר',
      ],
    },

    capsTitle: 'מה אנחנו בונים',
    capsSub: 'שש שכבות אינטליגנציה שהופכות דאטה לכלי עבודה אמיתי',
    caps: [
      {
        icon: '💬',
        title: 'שאלות בשפה טבעית',
        sub: 'שאלו את הדאטה שלכם בעברית — תשובה מיידית',
        body: 'מנהל שואל בוואטסאפ "כמה חדרים פנויים הלילה בסניף ירושלים?" ומקבל תוך שניות גרף תפוסה, השוואה לאמש ולשבוע שעבר — בלי לפתוח דשבורד, בלי לחפש.',
        example: '"כמה הזמנות היו אתמול בערוץ האונליין?"',
        tag: 'מלונאות',
      },
      {
        icon: '📰',
        title: 'דוחות נרטיביים',
        sub: 'כל בוקר: 3 פסקאות במקום 15 KPI',
        body: 'במקום לפתוח גיליון עם 50 מספרים, המנהל מקבל מייל בוקרי שמסביר מה קרה, למה, ומה ההמלצה — בשפה שאפשר להבין בלי להיות אנליסט.',
        example: '"השבוע מכירות ירדו 8% בגלל ירידה בסגמנט העסקי בצפון. ההמלצה: לבדוק..."',
        tag: 'קמעונאות',
      },
      {
        icon: '🔍',
        title: 'זיהוי אנומליות עם הסבר',
        sub: 'לא רק "מה קרה" — אלא "למה" ו"מה עשינו בפעם הקודמת"',
        body: 'המערכת לא רק מתריעה על חריגה — היא מסבירה מאיפה היא מגיעה, ומה עבד בעבר במצב דומה. ידע שנצבר, לא רק מספרים.',
        example: '"ביטולים עלו 40% בסניף חיפה. ניתוח ההיסטוריה מראה קשר לאירועים מקומיים. בפעם הקודמת מבצע X הוריד את הביטולים תוך 48 שעות."',
        tag: 'מלונאות',
      },
      {
        icon: '🤖',
        title: 'סוכנים תומכי החלטה',
        sub: 'לא רק מידע — גם המלצה, וגם ביצוע',
        body: 'הסוכן מזהה שמלאי יורד, שולח הודעה עם המלצה, ומחכה לאישור. מנהל מאשר בהודעת "כן" — ומשם הכל קורה אוטומטית. עסק שמגיב מהר.',
        example: '"מלאי מוצר A יסתיים בעוד 4 ימים. ממליץ להזמין 500 יחידות מספק X. לאשר?"',
        tag: 'קמעונאות',
      },
      {
        icon: '🗣️',
        title: 'אקספלורציה שיחתית',
        sub: 'שיחה עם הדאטה שלכם — עם זיכרון של הקשר',
        body: 'המנהל שואל, הסוכן עונה, המנהל מעמיק — והסוכן זוכר את כל ההקשר. כמו לדבר עם אנליסט שמכיר את הנתונים שלכם לעומק, זמין 24/7.',
        example: '"הראה לי מכירות החודש → ממה זה גבוה? → ומה עם פברואר אשתקד? → מה אתה ממליץ?"',
        tag: 'כלל הסקטורים',
      },
      {
        icon: '📱',
        title: 'המידע בערוצים שאתם כבר בהם',
        sub: 'וואטסאפ, סלאק, מייל, טלגרם',
        body: 'אין ממשק חדש ללמוד. אין כלי לזכור לפתוח. ההתראות, השאלות והדוחות מגיעים אליכם — לא ממתינים שתגיעו אליהם.',
        example: 'דוח שבועי אוטומטי בוואטסאפ ב-8:00 בבוקר, עם אפשרות לשאול שאלות המשך',
        tag: 'כלל הסקטורים',
      },
    ],

    valueTitle: 'מה זה אומר עבורכם',
    valueSub: 'ההשפעה על הארגון — לא על הטכנולוגיה',
    values: [
      {
        num: '01',
        icon: '👥',
        headline: 'מ-3 לומדים ל-30 משתמשים',
        body: 'כשהמידע מגיע אחרי שאלה בוואטסאפ ולא דורש לפתוח מסך, כל המנהלים בארגון הופכים לצרכני דאטה אמיתיים — לא רק ה-2-3 שמבינים בדשבורדים.',
      },
      {
        num: '02',
        icon: '⚡',
        headline: 'החלטות מהירות ומדויקות יותר',
        body: 'כשמידע מגיע עם הקשר, סיבה והמלצה כבר ארוזים, הזמן בין "מה קרה?" ל"מה עושים?" קצר פי עשרה.',
      },
      {
        num: '03',
        icon: '📈',
        headline: 'ROI גבוה יותר על השקעת ה-BI',
        body: 'השקעה בתשתית דאטה שאף אחד לא משתמש בה היא בזבוז. כשהצריכה האמיתית של המידע גדלה, ההשקעה מצדיקה את עצמה.',
      },
      {
        num: '04',
        icon: '🎯',
        headline: 'ארגון data-driven באמת',
        body: 'לא "יש לנו דשבורד" — אלא "כשיש שאלה עסקית, הצוות פונה לדאטה". זה השינוי התרבותי שה-AI מאפשר לנו לבנות.',
      },
    ],

    ctaTitle: 'מוכנים לשמוע איך זה נראה בארגון שלכם?',
    ctaSub: 'שיחה של 30 דקות — נבין יחד מה הכי מתאים לכם',
    ctaBtn: 'קבעו שיחה',
    ctaSecondary: 'ראו דמו חי',
  },

  en: {
    back: 'Back to site',
    badge: 'Our Differentiation',
    heroHeadline1: 'Not dashboards.',
    heroHeadline2: 'Insights.',
    heroSub:
      'Most organizations are buried in BI reports — stacks of screens and metrics that are hard to navigate, with no clear sense of what actually matters. Smart BI doesn\'t produce more reports. It scans your data, finds the real reasons behind changes, and delivers focused insights with clear recommendations and courses of action.',

    gapTitle: 'Two worlds, two products',
    gapSub: "It's not about reports. It's about what you get at the end.",
    gapOthers: {
      label: 'BI Reports',
      badge: 'Market standard',
      items: [
        'Dashboard ready in a week instead of a month',
        'Same 15 metrics on the same screen',
        '3 people open the report once a week',
        'You still interpret the numbers yourself',
        'Decisions still made on gut feeling',
      ],
    },
    gapUs: {
      label: 'Smart BI',
      badge: 'Our approach',
      items: [
        'Intelligence layer that interprets and explains',
        'Answers to your questions — not pre-filtered metrics',
        'Information arrives with context, cause, and recommendation',
        'Faster, better-grounded decisions',
      ],
    },

    capsTitle: 'What we build',
    capsSub: 'Six intelligence layers that turn data into a real work tool',
    caps: [
      {
        icon: '💬',
        title: 'Natural Language Questions',
        sub: 'Ask your data in plain language — get an immediate answer',
        body: "A manager asks via WhatsApp 'How many rooms are available tonight in Jerusalem?' and within seconds gets an occupancy chart, comparison to yesterday and last week — without opening a dashboard.",
        example: '"How many orders did we have yesterday through the online channel?"',
        tag: 'Hospitality',
      },
      {
        icon: '📰',
        title: 'Narrative Reports',
        sub: 'Every morning: 3 paragraphs instead of 15 KPIs',
        body: 'Instead of opening a spreadsheet with 50 numbers, the manager receives a morning email explaining what happened, why, and what the recommendation is — in language anyone can understand.',
        example: '"This week sales dropped 8% due to a decline in the business segment in the north. Recommendation: check..."',
        tag: 'Retail',
      },
      {
        icon: '🔍',
        title: 'Anomaly Detection with Explanation',
        sub: 'Not just "what happened" — but "why" and "what worked last time"',
        body: "The system doesn't just alert on anomalies — it explains where they come from and what worked in similar past situations. Accumulated knowledge, not just numbers.",
        example: '"Cancellations rose 40% in Haifa. Analysis shows correlation with local events. Last time, Campaign X reduced cancellations within 48 hours."',
        tag: 'Hospitality',
      },
      {
        icon: '🤖',
        title: 'Decision Support Agents',
        sub: 'Not just information — recommendation and execution',
        body: "The agent detects low inventory, sends a recommendation message, and waits for approval. Manager approves with 'Yes' — and everything happens automatically.",
        example: '"Product A inventory will run out in 4 days. Recommend ordering 500 units from Supplier X. Approve?"',
        tag: 'Retail',
      },
      {
        icon: '🗣️',
        title: 'Conversational Data Exploration',
        sub: 'A conversation with your data — with context memory',
        body: "The manager asks, the agent answers, the manager digs deeper — and the agent remembers all the context. Like talking to an analyst who knows your data deeply, available 24/7.",
        example: '"Show me this month\'s sales → Why is it high? → What about February last year? → What do you recommend?"',
        tag: 'All sectors',
      },
      {
        icon: '📱',
        title: 'Data in channels you already use',
        sub: 'WhatsApp, Slack, Email, Telegram',
        body: "No new interface to learn. No tool to remember to open. Alerts, questions, and reports come to you — not waiting for you to come to them.",
        example: 'Automated weekly report via WhatsApp at 8am, with the ability to ask follow-up questions',
        tag: 'All sectors',
      },
    ],

    valueTitle: 'What this means for you',
    valueSub: 'Impact on the organization — not the technology',
    values: [
      {
        num: '01',
        icon: '👥',
        headline: 'From 3 viewers to 30 users',
        body: "When information comes after a WhatsApp question and doesn't require opening a screen, all managers in the org become real data consumers.",
      },
      {
        num: '02',
        icon: '⚡',
        headline: 'Faster, more accurate decisions',
        body: "When information arrives with context, cause, and recommendation already packaged, the time between 'what happened?' and 'what do we do?' shrinks tenfold.",
      },
      {
        num: '03',
        icon: '📈',
        headline: 'Higher ROI on BI investment',
        body: "Investment in a data infrastructure nobody uses is waste. When actual consumption of information grows, the investment justifies itself.",
      },
      {
        num: '04',
        icon: '🎯',
        headline: 'Truly data-driven organization',
        body: "Not 'we have a dashboard' — but 'when there's a business question, the team turns to data.' That's the cultural shift AI lets us build.",
      },
    ],

    ctaTitle: 'Ready to see how this looks in your organization?',
    ctaSub: "A 30-minute conversation — we'll figure out together what fits you best",
    ctaBtn: 'Schedule a call',
    ctaSecondary: 'See live demo',
  },
};

/* ─── gap card ──────────────────────────────────────────────────────────── */
type GapData = { label: string; badge: string; items: string[]; footer?: string };
function GapCard({
  data,
  variant,
}: {
  data: GapData;
  variant: 'dim' | 'bright';
}) {
  const isBright = variant === 'bright';
  return (
    <div
      className={`relative rounded-2xl border p-8 flex flex-col gap-6 transition-all duration-300 ${
        isBright
          ? 'border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 to-violet-600/10 shadow-lg shadow-cyan-500/10'
          : 'border-white/10 bg-white/3'
      }`}
    >
      {/* badge */}
      <span
        className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${
          isBright
            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
            : 'bg-white/8 text-white/40 border border-white/10'
        }`}
      >
        {data.badge}
      </span>

      {/* label */}
      <h3
        className={`text-xl font-bold ${isBright ? 'text-white' : 'text-white/50'}`}
      >
        {data.label}
      </h3>

      {/* items */}
      <ul className="flex flex-col gap-3">
        {data.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 ${
                isBright
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'bg-white/8 text-white/30'
              }`}
            >
              {isBright ? '✓' : '✗'}
            </span>
            <span
              className={`text-sm leading-relaxed ${isBright ? 'text-white/80' : 'text-white/35'}`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* footer */}
      {data.footer && (
        <div
          className={`mt-auto pt-4 border-t text-sm font-semibold ${
            isBright
              ? 'border-cyan-500/20 text-cyan-400'
              : 'border-white/8 text-white/30'
          }`}
        >
          {data.footer}
        </div>
      )}
    </div>
  );
}

/* ─── capability card ───────────────────────────────────────────────────── */
function CapCard({
  cap,
  delay,
}: {
  cap: (typeof c.he.caps)[0];
  delay: number;
}) {
  return (
    <FadeUp delay={delay}>
      <div className="group relative rounded-2xl border border-white/8 bg-white/3 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 p-7 flex flex-col gap-5 h-full">
        {/* glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-cyan-500/5 to-violet-600/5" />

        <div className="flex items-start justify-between gap-4">
          <span className="text-3xl">{cap.icon}</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20 shrink-0">
            {cap.tag}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-1">{cap.title}</h3>
          <p className="text-sm text-cyan-400/80 font-medium">{cap.sub}</p>
        </div>

        <p className="text-sm text-white/60 leading-relaxed flex-1">{cap.body}</p>

        {/* example bubble */}
        <div className="relative rounded-xl bg-[#0a1628] border border-white/8 p-4">
          <span className="absolute -top-2.5 start-4 text-[10px] text-white/30 bg-[#060912] px-2">
            דוגמה
          </span>
          <p className="text-xs text-cyan-300/70 italic leading-relaxed">{cap.example}</p>
        </div>
      </div>
    </FadeUp>
  );
}

/* ─── main component ────────────────────────────────────────────────────── */
export default function WhyPageClient() {
  const { lang, dir } = useLang();
  const tx = c[lang];

  return (
    <div className="min-h-screen bg-[#060912] text-white overflow-x-hidden" dir={dir}>
      <Navbar />

      {/* ── animated bg blobs ── */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <div className="absolute top-[-20%] start-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="absolute top-[40%] end-[-15%] w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] start-[30%] w-[400px] h-[400px] rounded-full bg-blue-600/6 blur-[100px]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8 max-w-4xl"
        >
          {/* badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {tx.badge}
          </span>

          {/* headline */}
          <div>
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none text-white/20">
              {tx.heroHeadline1}
            </h1>
            <h1
              className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none mt-2"
              style={{
                background: 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {tx.heroHeadline2}
            </h1>
          </div>

          {/* sub */}
          <p className="text-lg sm:text-xl text-white/55 leading-relaxed max-w-2xl">
            {tx.heroSub}
          </p>

          {/* scroll cue */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mt-8 flex flex-col items-center gap-2 text-white/25 text-xs"
          >
            <span>↓</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── GAP SECTION ───────────────────────────────────────────────────── */}
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">
              {tx.gapSub}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">{tx.gapTitle}</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeUp delay={0.1}>
              <GapCard data={tx.gapOthers} variant="dim" />
            </FadeUp>
            <FadeUp delay={0.2}>
              <GapCard data={tx.gapUs} variant="bright" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────────── */}
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">
              {tx.capsSub}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">{tx.capsTitle}</h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tx.caps.map((cap, i) => (
              <CapCard key={i} cap={cap} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE SECTION ─────────────────────────────────────────────────── */}
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">
              {tx.valueSub}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">{tx.valueTitle}</h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 gap-6">
            {tx.values.map((v, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl border border-white/8 bg-white/3 hover:border-cyan-500/25 hover:bg-cyan-500/5 transition-all duration-300 p-8">
                  <div className="flex items-start gap-5">
                    {/* number */}
                    <span
                      className="text-5xl font-black shrink-0 leading-none"
                      style={{
                        background: 'linear-gradient(135deg, #00D4FF40, #7C3AED40)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {v.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{v.icon}</span>
                        <h3 className="text-lg font-bold text-white">{v.headline}</h3>
                      </div>
                      <p className="text-sm text-white/55 leading-relaxed">{v.body}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-32 px-6">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center relative">
            {/* glow backdrop */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-transparent to-violet-600/15 blur-xl pointer-events-none" />
            <div className="relative rounded-3xl border border-cyan-500/20 bg-[#060912]/80 backdrop-blur-sm px-10 py-16">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                {tx.ctaTitle}
              </h2>
              <p className="text-white/50 text-lg mb-10">{tx.ctaSub}</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-full font-bold text-white text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  {tx.ctaBtn}
                </a>
                <a
                  href="/demo"
                  className="px-8 py-3.5 rounded-full font-semibold text-white/50 text-sm border border-white/10 hover:border-white/25 hover:text-white/80 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  {tx.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <div id="contact" className="relative z-10">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

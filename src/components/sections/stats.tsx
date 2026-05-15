'use client';

import { useLang } from '@/context/language-context';
import { t } from '@/lib/translations';

export default function Stats() {
  const { lang } = useLang();
  const stats = t[lang].stats;

  return (
    <section className="bg-[#060912] border-y border-white/5 py-14 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-white/40">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

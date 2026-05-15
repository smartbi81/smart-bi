'use client';

import { useLang } from '@/context/language-context';
import { t } from '@/lib/translations';

export default function Services() {
  const { lang } = useLang();
  const tx = t[lang].services;

  return (
    <section id="services" className="bg-[#060912] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            {tx.tag}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            {tx.title}{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              {tx.titleHighlight}
            </span>
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg">{tx.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tx.items.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-white/5 p-6 hover:border-cyan-500/30 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 70%)',
                }}
              />
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-cyan-500/20 text-cyan-400/70 bg-cyan-500/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

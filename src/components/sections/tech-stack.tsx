'use client';

import { useLang } from '@/context/language-context';
import { t } from '@/lib/translations';

export default function TechStack() {
  const { lang } = useLang();
  const tx = t[lang].stack;

  return (
    <section id="stack" className="bg-[#060912] py-28 px-6">
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
          <p className="mt-4 text-white/50 max-w-xl mx-auto">{tx.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tx.groups.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl border bg-gradient-to-br p-6 ${group.color}`}
            >
              <h3 className={`text-xs font-bold tracking-widest uppercase mb-4 ${group.accent}`}>
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5"
                  >
                    <span className="text-xl">{tool.icon}</span>
                    <span className="text-sm font-medium text-white/80">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

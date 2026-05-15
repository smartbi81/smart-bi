'use client';

import { useLang } from '@/context/language-context';
import { t } from '@/lib/translations';

const stepColors = [
  'from-cyan-400 to-cyan-600',
  'from-blue-400 to-blue-600',
  'from-violet-400 to-violet-600',
  'from-purple-400 to-pink-500',
];

export default function Process() {
  const { lang } = useLang();
  const tx = t[lang].process;

  return (
    <section id="process" className="bg-[#070C15] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            {tx.tag}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            {tx.title}{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              {tx.titleHighlight}
            </span>{' '}
            {tx.titleEnd}
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">{tx.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-purple-500/20" />

          {tx.steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div
                className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${stepColors[i]} flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg`}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

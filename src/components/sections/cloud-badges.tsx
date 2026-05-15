'use client';

import { useLang } from '@/context/language-context';

const clouds = [
  { name: 'Microsoft Azure', short: 'Azure', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', icon: '☁️' },
  { name: 'Amazon Web Services', short: 'AWS', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20', icon: '⚡' },
  { name: 'Google Cloud', short: 'GCP', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20', icon: '🌐' },
];

export default function CloudBadges() {
  const { lang } = useLang();
  const label = lang === 'en' ? 'Cloud Agnostic' : 'אגנוסטי לענן';

  return (
    <section className="bg-[#060912] border-y border-white/5 py-10 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
        <span className="text-xs font-semibold tracking-widest text-white/30 uppercase">{label}</span>
        <div className="flex flex-wrap justify-center gap-4">
          {clouds.map((c) => (
            <div
              key={c.name}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border ${c.bg} transition-all duration-200 hover:scale-105`}
            >
              <span className="text-lg">{c.icon}</span>
              <span className={`font-semibold text-sm ${c.color}`}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

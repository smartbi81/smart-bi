'use client';

import { useLang } from '@/context/language-context';
import { t } from '@/lib/translations';

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-[#060912] border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
            SB
          </div>
          <span className="text-white/40 text-sm">{t[lang].footer}</span>
        </div>
        <span className="text-white/20 text-xs">
          © {new Date().getFullYear()} SMART BI.{' '}
          {lang === 'en' ? 'All rights reserved.' : 'כל הזכויות שמורות.'}
        </span>
      </div>
    </footer>
  );
}

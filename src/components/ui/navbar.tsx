'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/language-context';
import { t } from '@/lib/translations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle, dir } = useLang();
  const tx = t[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* לינקים רגילים — בית, שירותים, תרחישים, צור קשר */
  const mainLinks = [
    { label: tx.home,     href: '/'        },
    { label: tx.services, href: '#services' },
    { label: tx.cases,    href: '#cases'    },
    { label: tx.contact,  href: '#contact'  },
  ];

  return (
    <nav
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060912]/80 backdrop-blur-md border-b border-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* לוגו — טקסט בלבד, ללא אייקון */}
        <a href="/" className="flex items-center">
          <span className="font-bold text-white text-lg tracking-tight">
            SMART<span className="text-cyan-400"> BI</span>
          </span>
        </a>

        {/* לינקים מרכזיים */}
        <div className="hidden md:flex items-center gap-8">
          {mainLinks.map((l) =>
            l.href.startsWith('/') && l.href !== '/' ? (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/60 hover:text-cyan-300 transition-colors duration-200"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/60 hover:text-cyan-300 transition-colors duration-200"
              >
                {l.label}
              </a>
            )
          )}
        </div>

        {/* צד פעולות: AI דמו | EN/עב | CTA */}
        <div className="flex items-center gap-4">

          {/* החלפת שפה — עדין */}
          <button
            onClick={toggle}
            className="text-xs font-semibold text-white/30 hover:text-white/65 transition-colors duration-200 tracking-wide px-1"
            aria-label="Toggle language"
          >
            {lang === 'he' ? 'EN' : 'עב'}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap"
          >
            {tx.cta}
          </a>
        </div>

      </div>
    </nav>
  );
}

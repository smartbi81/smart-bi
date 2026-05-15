'use client';

import { useState } from 'react';
import { useLang } from '@/context/language-context';
import { t } from '@/lib/translations';

// ─── הכנס כאן את ה-Form ID שלך מ-formspree.io ───────────────────────────
const FORMSPREE_ID = 'xjglqqdd';
// ─────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const { lang }  = useLang();
  const tx = t[lang].contact;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const form = e.currentTarget;
      const res  = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error ?? 'שגיאה בשליחה — נסה שוב');
      }
    } catch {
      setError('בעיית רשת — נסה שוב');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#070C15] py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            {tx.tag}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            {tx.title}{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              {tx.titleHighlight}
            </span>
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">{tx.subtitle}</p>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-10 text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">{tx.success.title}</h3>
            <p className="text-white/50">{tx.success.subtitle}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/5 p-8 space-y-5"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-white/50 mb-1.5">{tx.fields.name}</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder={tx.fields.namePlaceholder}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1.5">{tx.fields.email}</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder={tx.fields.emailPlaceholder}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/50 mb-1.5">{tx.fields.company}</label>
              <input
                name="company"
                type="text"
                placeholder={tx.fields.companyPlaceholder}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-white/50 mb-1.5">{tx.fields.message}</label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder={tx.fields.messagePlaceholder}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/25"
            >
              {loading ? '...' : tx.fields.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

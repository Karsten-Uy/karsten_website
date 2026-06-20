import { motion } from 'framer-motion';
import { careerTimeline, featuredWork } from '../data/homeShowcase';

// The Experience page is one transparent panel — a page header, the Work
// Experience timeline (one card per role, hung off a connecting line), and
// Projects as a grid of compact cards (preview on top, copy + a single link
// below). Both lists read the shared, hand-tuned copy in
// src/data/homeShowcase.js. The panel itself has no fill, so whatever page
// background is set per-route in siteConfig shows straight through; only the
// inner cards are dark (and kept mostly opaque) so their text stays legible
// over any backdrop. Visual language matches the About page / post-footer
// (cyan accent, source-code-pro, pixel-shadow).

const EYEBROW =
  'font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] pixel-shadow';
const SUB_EYEBROW =
  'font-source-code-pro text-xs font-bold uppercase tracking-[0.28em] text-[#5ce1e6] pixel-shadow';

const CARD = 'rounded-2xl border border-white/10 bg-[#0b0f1f]/80';
const CHIP =
  'rounded-full border border-[#5ce1e6]/30 bg-[#5ce1e6]/10 px-2.5 py-0.5 font-source-code-pro text-xs text-[#7de7eb]';

// Glyph shown in a project's corner badge, keyed by badge label.
const BADGE_GLYPH = { DEMO: '▶', RESEARCH: '✦', AUDIO: '♪', LIVE: '●' };

// Splits a bullet on {chip} markers and renders the marked spans as highlighted
// pills (e.g. "20K+ samples"), leaving the rest as plain text.
const renderBullet = (text) =>
  text.split(/(\{[^}]+\})/g).map((part, i) =>
    part.startsWith('{') && part.endsWith('}') ? (
      <span
        key={i}
        className="mx-0.5 inline-flex items-center rounded-md border border-[#5ce1e6]/40 bg-[#5ce1e6]/10 px-1.5 py-px text-[0.9em] text-[#5ce1e6]"
      >
        {part.slice(1, -1)}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );

// Faint, static night-sky accents — evokes the pixel sky without any extra
// motion. Purely decorative.
const Sparkles = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
    <span className="absolute left-8 top-7 text-[#5ce1e6]/40">+</span>
    <span className="absolute right-10 top-10 text-[#7de7eb]/30">✦</span>
    <span className="absolute right-24 top-1/4 h-1 w-1 rounded-full bg-[#5ce1e6]/40" />
    <span className="absolute left-1/4 top-1/3 h-px w-px rounded-full bg-white/40" />
    <span className="absolute bottom-24 left-12 h-1 w-1 rounded-full bg-white/30" />
    <span className="absolute bottom-16 right-16 text-[#5ce1e6]/30">+</span>
    <span className="absolute right-1/3 bottom-1/3 h-1 w-1 rounded-full bg-[#7de7eb]/30" />
  </div>
);

const Experience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="mx-auto w-[min(94vw,1120px)] py-8 text-left sm:py-12"
  >
    <section className="relative overflow-hidden rounded-[28px] p-6 sm:p-10">
      <Sparkles />

      <div className="relative">
        {/* Page header */}
        <header className="mb-9">
          <p className={EYEBROW}>Karsten &ldquo;Kirby&rdquo; Uy</p>
          <h1 className="mt-2 text-5xl font-bold text-white pixel-shadow sm:text-6xl">
            Experience
          </h1>
        </header>

        {/* Work Experience — timeline of role cards */}
        <p className={`mb-5 ${SUB_EYEBROW}`}>Work Experience</p>
        <div className="space-y-5">
          {careerTimeline.map((job, i) => (
            <div key={job.id} className="flex gap-4 sm:gap-5">
              {/* Logo node + connector down to the next role */}
              <div className="relative flex flex-none flex-col items-center">
                {i < careerTimeline.length - 1 && (
                  <span className="absolute left-1/2 top-14 -bottom-5 w-px -translate-x-1/2 bg-gradient-to-b from-[#5ce1e6]/60 to-[#5ce1e6]/0" />
                )}
                <div
                  className={`relative z-10 h-12 w-12 overflow-hidden rounded-xl border bg-[#0b0f1f] sm:h-14 sm:w-14 ${
                    job.current
                      ? 'border-[#5ce1e6]/60 shadow-[0_0_18px_rgba(92,225,230,0.45)]'
                      : 'border-white/15'
                  }`}
                >
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Role card */}
              <div
                className={`min-w-0 flex-1 ${CARD} p-5 transition-colors duration-200 hover:border-[#5ce1e6]/40 hover:bg-[#0b0f1f]/90`}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-bold leading-tight text-white pixel-shadow sm:text-2xl">
                    {job.company}{' '}
                    <span className="font-source-code-pro text-sm font-normal text-white/55 sm:text-base">
                      {job.subtitle}
                    </span>
                  </h3>
                  <span className="flex-none whitespace-nowrap font-source-code-pro text-xs text-white/45 sm:text-sm">
                    {job.current && (
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-[#5ce1e6] shadow-[0_0_6px_#5ce1e6]" />
                    )}
                    {job.period}
                  </span>
                </div>

                <ul className="mt-3 space-y-1.5 font-source-code-pro text-sm text-white/85 pixel-shadow sm:text-base">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2">
                      <span className="flex-none text-[#5ce1e6]">›</span>
                      <span>{renderBullet(b)}</span>
                    </li>
                  ))}
                </ul>

                {job.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span key={t} className={CHIP}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Projects — wide showcase bands (preview + paragraph + links) */}
        <p className={`mb-5 mt-12 ${SUB_EYEBROW}`}>Projects</p>
        <div className="space-y-4">
          {featuredWork.map((p) => (
            <article
              key={p.id}
              className={`overflow-hidden ${CARD} transition-colors duration-200 hover:border-[#5ce1e6]/40`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Preview (left) */}
                <div className="relative md:w-2/5 lg:w-[42%]">
                  <div className="h-48 w-full overflow-hidden md:h-full md:min-h-[228px]">
                    <img
                      src={p.thumb}
                      alt={`${p.title} preview`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {p.badge && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/55 px-2.5 py-1 font-source-code-pro text-[11px] font-bold uppercase tracking-[0.15em] text-[#5ce1e6] backdrop-blur-sm">
                      <span aria-hidden="true">{BADGE_GLYPH[p.badge] ?? '•'}</span>
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Content (right) */}
                <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-source-code-pro text-xs font-bold uppercase tracking-[0.18em] text-[#5ce1e6]">
                      {p.kind}
                    </p>
                    <span className="flex-none whitespace-nowrap font-source-code-pro text-xs text-white/45 sm:text-sm">
                      {p.period}
                    </span>
                  </div>

                  <h3 className="mt-1 text-2xl font-bold leading-tight text-white pixel-shadow sm:text-3xl">
                    {p.title}
                  </h3>

                  <p className="mt-2 font-source-code-pro text-sm leading-relaxed text-white/70 sm:text-[15px]">
                    {p.blurb ?? p.summary}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className={CHIP}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 pt-1">
                    {p.actions.map((a) => (
                      <a
                        key={a.label}
                        href={a.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          a.primary
                            ? 'inline-flex items-center gap-1 rounded-lg bg-blue-gradient px-4 py-2 font-source-code-pro text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.03]'
                            : 'inline-flex items-center gap-1 rounded-lg border border-[#5ce1e6]/40 px-4 py-2 font-source-code-pro text-sm font-semibold text-[#5ce1e6] transition-colors duration-200 hover:border-[#5ce1e6] hover:bg-[#5ce1e6]/10'
                        }
                      >
                        {a.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

export default Experience;

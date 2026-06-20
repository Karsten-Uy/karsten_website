import { motion } from 'framer-motion';
import { careerTimeline, featuredWork } from '../data/homeShowcase';
import { pageFade } from '../utils/motion';
import Bullet from '../components/Bullet';

// The Experience page is one transparent panel — a page header, the Work
// Experience timeline (one card per role, hung off a connecting line), and
// Projects as a grid of compact cards (preview on top, copy + a single link
// below). Both lists read the shared, hand-tuned copy in
// src/data/homeShowcase.js. The panel itself has no fill, so whatever page
// background is set per-route in siteConfig shows straight through; only the
// inner cards are dark (and kept mostly opaque) so their text stays legible
// over any backdrop. Visual language matches the About page / post-footer
// (cyan accent, source-code-pro, pixel-shadow).

const CARD = 'rounded-2xl border border-white/10 bg-[#0b0f1f]/80';
const CHIP =
  'rounded-full border border-[#5ce1e6]/30 bg-[#5ce1e6]/10 px-2.5 py-0.5 font-source-code-pro text-xs text-[#7de7eb]';

// Glyph shown in a project's corner badge, keyed by badge label.
const BADGE_GLYPH = { DEMO: '▶', RESEARCH: '✦', AUDIO: '♪', LIVE: '●' };

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

// Section header (Option 4 — "icon badge + full rule"): a pixel-glyph badge and
// the title on the left, a count chip on the right, all riding one full-width
// divider line (the row's bottom border).
const CALENDAR_GLYPH = (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
    <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
  </svg>
);

const DIAMOND_GLYPH = (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2.5 21 10l-9 11.5L3 10z" />
    <path d="M3 10h18" />
  </svg>
);

const SectionHeader = ({ icon, title, count, className = '' }) => (
  <div className={`flex items-center gap-3 border-b border-white/10 pb-3 ${className}`}>
    <span className="grid h-10 w-10 flex-none place-items-center rounded-lg border border-[#5ce1e6]/30 bg-[#5ce1e6]/10 text-[#5ce1e6]">
      {icon}
    </span>
    <h2 className="text-3xl font-bold text-white pixel-shadow sm:text-4xl">{title}</h2>
    <span className="ml-auto flex-none whitespace-nowrap rounded-full border border-[#5ce1e6]/30 bg-[#5ce1e6]/5 px-3 py-1 font-source-code-pro text-[11px] font-bold uppercase tracking-[0.18em] text-[#7de7eb]">
      {count}
    </span>
  </div>
);

const Experience = () => (
  <motion.div
    {...pageFade}
    className="mx-auto w-[min(94vw,1120px)] py-8 text-left sm:py-12"
  >
    <section className="relative overflow-hidden rounded-[28px] p-6 sm:p-10">
      <Sparkles />

      <div className="relative">
        {/* Work Experience — timeline of role cards */}
        <SectionHeader
          icon={CALENDAR_GLYPH}
          title="Work Experience"
          count={`${careerTimeline.length} ${careerTimeline.length === 1 ? 'ROLE' : 'ROLES'}`}
          className="mb-5"
        />
        {/* group/roles + per-item opacity = "spotlight": hovering one role dims
            the rest, the hovered one stays full opacity. */}
        <div className="group/roles space-y-5">
          {careerTimeline.map((job, i) => (
            <div
              key={job.id}
              className="flex gap-4 transition-opacity duration-200 group-hover/roles:opacity-40 hover:!opacity-100 sm:gap-5"
            >
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
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Role card — a "window-chrome" header strip (company + role +
                  date, as one tinted band) sitting over a separate content zone
                  (bullets + tags). overflow-hidden clips the strip to the card's
                  rounded corners. */}
              <div
                className={`min-w-0 flex-1 overflow-hidden ${CARD} transition-colors duration-200 hover:border-[#5ce1e6]/40`}
              >
                {/* Header strip — the "label" zone */}
                <div className="flex items-start justify-between gap-x-4 gap-y-2 border-b border-white/10 bg-[#5ce1e6]/[0.06] px-5 py-3.5">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight text-white pixel-shadow sm:text-2xl">
                      {job.company}
                    </h3>
                    {job.subtitle && (
                      <p className="mt-0.5 font-source-code-pro text-xs text-white/55 sm:text-sm">
                        {job.subtitle}
                      </p>
                    )}
                  </div>
                  <span
                    className={`flex-none whitespace-nowrap rounded-full px-3 py-1 font-source-code-pro text-[11px] font-bold uppercase tracking-[0.12em] ${
                      job.current
                        ? 'bg-blue-gradient text-black'
                        : 'border border-[#5ce1e6]/40 text-[#7de7eb]'
                    }`}
                  >
                    {job.current && (
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-black/70" />
                    )}
                    {job.period}
                  </span>
                </div>

                {/* Content zone — bullets + tags */}
                <div className="px-5 py-4">
                  <ul className="space-y-1.5 font-source-code-pro text-sm text-white/85 pixel-shadow sm:text-base">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2">
                        <span className="flex-none text-[#5ce1e6]">›</span>
                        <span><Bullet text={b} /></span>
                      </li>
                    ))}
                  </ul>

                  {job.tags.length > 0 && (
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {job.tags.map((t) => (
                        <span key={t} className={CHIP}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects — wide showcase bands (preview + paragraph + links) */}
        <SectionHeader
          icon={DIAMOND_GLYPH}
          title="Projects"
          count={`${featuredWork.length} ${featuredWork.length === 1 ? 'BUILD' : 'BUILDS'}`}
          className="mb-5 mt-12"
        />
        {/* group/builds + per-item opacity = "spotlight": hovering one project
            dims the rest, the hovered one stays full opacity. */}
        <div className="group/builds space-y-4">
          {featuredWork.map((p) => (
            <article
              key={p.id}
              className={`overflow-hidden ${CARD} transition-all duration-200 hover:border-[#5ce1e6]/40 group-hover/builds:opacity-40 hover:!opacity-100`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Preview (left) */}
                <div className="relative md:w-2/5 lg:w-[42%]">
                  <div className="h-48 w-full overflow-hidden md:h-full md:min-h-[228px]">
                    <img
                      src={p.thumb}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      decoding="async"
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

                  {p.actions?.length > 0 && (
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
                  )}
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

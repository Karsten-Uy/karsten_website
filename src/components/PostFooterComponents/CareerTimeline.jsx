import { careerTimeline } from '../../data/homeShowcase';

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

const CareerTimeline = () => (
  // Header ("Experience / My career so far") now lives in the 02 SectionDivider
  // in PostFooterHome, so this block starts straight at the timeline.
  <section className="mb-10 text-left">
    <div className="career-spotlight mx-auto max-w-5xl space-y-5">
      {careerTimeline.map((job, i) => (
        <div key={job.id} className="career-row flex gap-4 sm:gap-5">
          {/* Logo + vertical connector to the next role */}
          <div className="relative flex flex-none flex-col items-center">
            {i < careerTimeline.length - 1 && (
              <span className="absolute left-1/2 top-14 -bottom-5 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#5ce1e6]/80 to-[#5ce1e6]/0 sm:top-16" />
            )}
            <div
              className={`relative z-10 grid h-14 w-14 place-items-center rounded-2xl border bg-[#0b0f1f] sm:h-16 sm:w-16 ${
                job.current
                  ? 'border-[#5ce1e6]/50 shadow-[0_0_16px_rgba(92,225,230,0.5)]'
                  : 'border-white/10'
              }`}
            >
              <img src={job.logo} alt={`${job.company} logo`} className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
            </div>
          </div>

          {/* Role card */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl pixel-shadow">{job.company}</h3>
              {(job.current || job.period) && (
                <span
                  className={`flex-none whitespace-nowrap rounded-full border px-3 py-1 text-center font-source-code-pro text-sm ${
                    job.current
                      ? 'border-[#5ce1e6]/40 bg-gradient-to-r from-[#2d6cdf] to-[#33bbcf] text-white shadow-[0_0_12px_rgba(92,225,230,0.5)]'
                      : 'border-white/20 text-white/70'
                  }`}
                >
                  {job.current ? (
                    <span className="inline-flex items-center justify-center gap-1.5 leading-none">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5ce1e6] shadow-[0_0_6px_#5ce1e6]" />
                      {job.period || 'Current'}
                    </span>
                  ) : (
                    job.period
                  )}
                </span>
              )}
            </div>

            <p className="mt-1 mb-3 font-source-code-pro text-base text-white/70 sm:text-lg pixel-shadow">{job.subtitle}</p>

            <ul className="space-y-1.5 font-source-code-pro text-base text-white/85 sm:text-[17px] pixel-shadow">
              {job.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-2">
                  <span className="flex-none text-[#5ce1e6]">▸</span>
                  <span>{renderBullet(b)}</span>
                </li>
              ))}
            </ul>

            {job.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 px-2.5 py-0.5 font-source-code-pro text-sm text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CareerTimeline;

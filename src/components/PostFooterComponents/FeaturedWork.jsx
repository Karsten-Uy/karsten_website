import { featuredWork } from '../../data/homeShowcase';

// Selected work as a 2-up card grid: media preview (with a VIDEO / LIVE WEB
// badge and a play overlay for video links) on top, then title, kind, tags,
// and a date + CTA footer pinned to the bottom so cards line up.
const FeaturedWork = () => (
  <section className="mb-10 text-left">
    <p className="mb-2 text-center font-source-code-pro text-xs font-bold uppercase tracking-[0.3em] text-[#5ce1e6] sm:text-sm pixel-shadow">
      Featured Work
    </p>
    <h2 className="mb-6 text-center text-3xl font-bold text-white sm:mb-8 sm:text-5xl pixel-shadow">Projects</h2>

    <div className="grid gap-5 sm:grid-cols-2">
      {featuredWork.map((p) => (
        <a
          key={p.id}
          href={p.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1f]/60 transition-colors hover:border-[#5ce1e6]/40"
        >
          {/* Media preview */}
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={p.thumb}
              alt=""
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* VIDEO / LIVE WEB badge */}
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 font-source-code-pro text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              {p.hasPlay ? (
                <>
                  <span className="block h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-[#5ce1e6]" />
                  Video
                </>
              ) : (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5ce1e6]" />
                  Live Web
                </>
              )}
            </span>

            {/* Play overlay (video links only) */}
            {p.hasPlay && (
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white/85 shadow-lg transition-transform duration-150 group-hover:scale-110">
                  <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-[#0b0f1f]" />
                </span>
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-xl font-bold leading-tight text-white">{p.title}</h3>
            <p className="mt-1 font-source-code-pro text-xs tracking-[0.15em] text-[#5ce1e6]">{p.kind}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-2.5 py-0.5 font-source-code-pro text-xs text-white/75"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Footer: date + CTA, pinned to the bottom */}
            <div className="mt-auto flex items-end justify-between pt-4">
              <p className="font-source-code-pro text-xs text-white/55 sm:text-sm">{p.period}</p>
              <span className="inline-flex items-center gap-1 font-source-code-pro text-sm text-[#5ce1e6] group-hover:underline">
                {p.cta.label} <span aria-hidden="true">↗</span>
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default FeaturedWork;

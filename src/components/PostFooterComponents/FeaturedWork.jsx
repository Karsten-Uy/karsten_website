import { featuredWork } from '../../data/homeShowcase';

const FeaturedWork = () => (
  <section className="mb-8 rounded-3xl border border-white/10 bg-[#222a47]/55 p-6 text-left backdrop-blur-sm sm:p-9">
    <p className="mb-2 font-source-code-pro text-xs font-bold uppercase tracking-[0.3em] text-[#5ce1e6] sm:text-sm">
      Featured Work
    </p>
    <h2 className="mb-6 text-3xl font-bold text-white sm:mb-8 sm:text-5xl">Projects</h2>

    <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1f]/60">
      {featuredWork.map((p) => (
        <a
          key={p.id}
          href={p.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-4 transition-colors hover:bg-white/5 sm:gap-5 sm:p-5"
        >
          {/* Thumbnail with optional play overlay */}
          <div className="relative aspect-video w-24 flex-none overflow-hidden rounded-lg border border-white/10 sm:w-32">
            <img src={p.thumb} alt="" className="h-full w-full object-cover" />
            {p.hasPlay && (
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-black/55">
                  <span className="ml-0.5 block h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white" />
                </span>
              </span>
            )}
          </div>

          {/* Title / kind / tags */}
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">{p.title}</h3>
            <p className="mt-1 font-source-code-pro text-xs tracking-[0.15em] text-[#5ce1e6]">{p.kind}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-2.5 py-0.5 font-source-code-pro text-xs text-white/75"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Date + CTA */}
          <div className="flex-none text-right">
            <p className="font-source-code-pro text-xs text-white/55 sm:text-sm">{p.period}</p>
            <span className="mt-2 inline-flex items-center gap-1 font-source-code-pro text-sm text-[#5ce1e6] group-hover:underline">
              {p.cta.label} <span aria-hidden="true">↗</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default FeaturedWork;

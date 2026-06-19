import { featuredWork } from '../../data/homeShowcase';

// Selected work as a compact 2×2 grid. Each card is horizontal — a thumbnail on
// the left, with title / kind / tags / CTA stacked on the right — so the cards
// are wide and the thumbs stay low-profile. Hovering a card lifts it and flips
// it to the bright cyan accent with black text, matching the "What I Do" cards.
const FeaturedWork = () => (
  <section className="mb-10 text-left">
    <p className="mb-2 text-center font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] sm:text-base pixel-shadow">
      Featured Work
    </p>
    <h2 className="mb-6 text-center text-4xl font-bold text-white sm:mb-8 sm:text-6xl pixel-shadow">Projects</h2>

    <div className="grid gap-4 sm:grid-cols-2">
      {featuredWork.map((p) => (
        <a
          key={p.id}
          href={p.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex gap-4 rounded-2xl border border-white/10 bg-[#0b0f1f]/60 p-3 transition-all duration-200 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#5ce1e6] hover:bg-[#5ce1e6] hover:shadow-[0_0_28px_rgba(92,225,230,0.55)]"
        >
          {/* Thumbnail (left) — 16:9 so YouTube frames sit flush with no black bars */}
          <div className="aspect-video w-2/5 flex-none self-start overflow-hidden rounded-xl border border-white/10 transition-colors duration-200 group-hover:border-black/20">
            <img
              src={p.thumb}
              alt=""
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content (right) */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="text-xl font-bold leading-tight text-white transition-colors duration-200 group-hover:text-black sm:text-2xl">
              {p.title}
            </h3>
            <p className="mt-1 font-source-code-pro text-xs font-bold uppercase tracking-[0.15em] text-[#5ce1e6] transition-colors duration-200 group-hover:text-black/70">
              {p.kind}
            </p>
            <p className="mt-2 font-source-code-pro text-sm leading-snug text-white/65 transition-colors duration-200 group-hover:text-black/75">
              {p.summary}
            </p>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#5ce1e6]/40 px-2 py-0.5 font-source-code-pro text-xs text-[#7de7eb] transition-colors duration-200 group-hover:border-black/40 group-hover:text-black"
                >
                  {t}
                </span>
              ))}
            </div>

            <span className="mt-auto inline-flex items-center gap-1 pt-3 font-source-code-pro text-sm font-semibold text-[#5ce1e6] transition-colors duration-200 group-hover:text-black">
              {p.cta.label} <span aria-hidden="true">↗</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default FeaturedWork;

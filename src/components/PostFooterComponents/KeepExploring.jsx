import { Link } from 'react-router-dom';
import { keepExploring } from '../../data/home';

// Inline icons for each destination — stroke uses currentColor so they sit teal
// in the dark tile and stay teal when the card floods on hover (the tile keeps
// its dark fill). One per `icon` key in the keepExploring data.
const icons = {
  about: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </>
  ),
  experience: <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z" />,
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7.5l8.5 5.5 8.5-5.5" />
    </>
  ),
};

// "Where to next?" — closing navigation band. Three whole-card links pointing to
// the site's main destinations, numbered to hint at a first-visit reading order.
const KeepExploring = () => (
  <section className="mb-10">
    <p className="mb-2 text-center font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] sm:text-base pixel-shadow">
      {keepExploring.eyebrow}
    </p>
    <h2 className="mb-6 text-center text-4xl font-bold text-white sm:mb-8 sm:text-5xl pixel-shadow">{keepExploring.heading}</h2>

    <div className="grid gap-4 sm:grid-cols-3">
      {keepExploring.cards.map((card, i) => (
        <Link
          key={card.to}
          to={card.to}
          className="group flex flex-col rounded-2xl border border-white/10 bg-[#0b0f1f]/40 p-5 transition-all duration-200 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#5ce1e6] hover:bg-[#5ce1e6] hover:shadow-[0_0_28px_rgba(92,225,230,0.55)]"
        >
          <div className="mb-4 flex items-start justify-between">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#5ce1e6]/30 bg-[#0b0f1f]/60 text-[#5ce1e6] transition-colors duration-200 group-hover:border-black/20 group-hover:bg-[#0b0f1f]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                {icons[card.icon]}
              </svg>
            </span>
            <span
              aria-hidden="true"
              className="font-source-code-pro text-sm font-bold tracking-widest text-white/30 transition-colors duration-200 group-hover:text-black/40"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl transition-colors duration-200 group-hover:text-black">
            {card.title}
          </h3>
          <p className="mt-2 flex-1 font-source-code-pro text-base text-white/70 transition-colors duration-200 group-hover:text-black/80">
            {card.description}
          </p>

          <span className="mt-4 inline-flex items-center gap-1 font-source-code-pro text-sm font-semibold text-[#5ce1e6] transition-colors duration-200 group-hover:text-black">
            {card.ctaLabel}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
        </Link>
      ))}
    </div>
  </section>
);

export default KeepExploring;

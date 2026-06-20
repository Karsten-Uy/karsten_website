import { useState } from 'react';
import { techStack } from '../../data/home';

// Tech stack as a filterable wall. Category pills (All + each discipline) act as
// filters: pick one and its chips stay lit while the rest dim and shrink,
// isolating that group. Click the active pill again — or "All" — to reset.
const ALL = 'All';

const TechStack = () => {
  const [active, setActive] = useState(ALL);

  const categories = [ALL, ...techStack.groups.map((g) => g.title)];
  const tools = techStack.groups.flatMap((g) =>
    g.items.map((item) => ({ ...item, category: g.title }))
  );

  // Clicking the live category resets to "All"; otherwise switch to it.
  const toggle = (cat) => setActive((prev) => (prev === cat ? ALL : cat));

  return (
    <section className="mb-10">
      <p className="mb-2 font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] sm:text-base pixel-shadow">
        Toolbox
      </p>
      <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl pixel-shadow">{techStack.heading}</h2>

      {/* Category filters */}
      <div className="mb-6 flex flex-wrap justify-start gap-2">
        {categories.map((cat) => {
          const on = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => toggle(cat)}
              aria-pressed={on}
              className={[
                'rounded-full border px-4 py-1.5 font-source-code-pro text-sm font-semibold transition-all duration-200',
                on
                  ? 'border-[#5ce1e6] bg-[#5ce1e6] text-black shadow-[0_0_18px_rgba(92,225,230,0.5)]'
                  : 'border-white/15 bg-[#0b0f1f]/50 text-white/75 hover:border-[#5ce1e6]/50 hover:text-white',
              ].join(' ')}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Tool wall — fills the section width */}
      <div className="flex flex-wrap justify-start gap-2.5">
        {tools.map((item) => {
          const lit = active === ALL || item.category === active;
          const highlighted = active !== ALL && item.category === active;
          return (
            <div key={item.name} className="group/chip relative">
              <span
                className={[
                  'inline-flex items-center gap-2 rounded-full border py-1 pl-1.5 pr-3.5 font-source-code-pro text-sm transition-all duration-300',
                  !lit && 'scale-90 border-white/5 bg-[#0b0f1f]/40 text-white/40 opacity-40 grayscale',
                  lit && !highlighted && 'border-white/15 bg-[#0b0f1f]/70 text-white',
                  lit &&
                    highlighted &&
                    'border-[#5ce1e6]/60 bg-[#0b0f1f]/85 text-white shadow-[0_0_16px_rgba(92,225,230,0.3)]',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-white p-1">
                  <img src={item.logo} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </span>
                {item.name}
              </span>

              {/* Where it was used — shown on hover, only for lit chips */}
              {lit && (
                <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-52 -translate-x-1/2 rounded-lg border border-white/10 bg-[#0b0f1f] p-3 text-left opacity-0 shadow-xl transition-opacity duration-150 group-hover/chip:opacity-100">
                  <span className="block text-sm font-bold text-white">{item.name}</span>
                  <span className="mt-0.5 block font-source-code-pro text-xs leading-snug text-white/65">
                    {item.where}
                  </span>
                  <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-white/10 bg-[#0b0f1f]" />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;

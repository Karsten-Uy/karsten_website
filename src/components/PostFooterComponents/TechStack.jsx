import { techStack } from '../../data/home';

// Tech stack grouped by discipline. Each logo is a white tile; hovering shows a
// tooltip with the tool name and where it was used. Everything is driven by
// `techStack` in data/home.js — add a tool there and it appears here.
const TechStack = () => (
  <section className="mb-8 rounded-3xl border border-white/10 bg-[#222a47]/55 p-6 backdrop-blur-sm sm:p-9">
    <h2 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">{techStack.heading}</h2>

    <div className="space-y-4">
      {techStack.groups.map((group) => (
        <div
          key={group.title}
          className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0b0f1f]/40 p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5"
        >
          <div className="sm:w-44 sm:flex-none">
            <h3 className="font-bold leading-tight text-white sm:text-lg">{group.title}</h3>
            <p className="mt-1 font-source-code-pro text-xs tracking-wide text-[#5ce1e6]">{group.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {group.items.map((item) => (
              <div key={item.name} className="group relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white p-1.5 transition-transform duration-150 hover:-translate-y-1">
                  <img src={item.logo} alt={item.name} className="h-full w-full object-contain" />
                </div>

                {/* Hover tooltip: tool name + where the skill was used */}
                <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-48 -translate-x-1/2 rounded-lg border border-white/10 bg-[#0b0f1f] p-3 text-left opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100">
                  <p className="text-sm font-bold text-white">{item.name}</p>
                  <p className="mt-0.5 font-source-code-pro text-xs leading-snug text-white/60">{item.where}</p>
                  <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-white/10 bg-[#0b0f1f]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;

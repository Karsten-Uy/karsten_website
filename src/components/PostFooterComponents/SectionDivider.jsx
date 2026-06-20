// Game-HUD section banner that splits the home post-footer into three "levels"
// (01 About / 02 Experience / 03 Contact). Each bar leans into the arcade theme:
// pixel bracket corners, a LEVEL 0N · EYEBROW label, an N / TOTAL counter, the
// big title, and a segmented meter that fills further every level — so the three
// bars together read as a progress gauge for how far down the page you are.

// Fixed segment count so the meter reads as a chunky arcade gauge; lit segments
// scale with the level, giving clean thirds (5 / 10 / 15).
const SEGMENTS = 15;

// Brighter L-shaped accents at each corner — the "HUD frame" over the box border.
const Corners = () => (
  <>
    <span aria-hidden="true" className="pointer-events-none absolute left-1.5 top-1.5 h-3 w-3 border-l-2 border-t-2 border-[#5ce1e6]" />
    <span aria-hidden="true" className="pointer-events-none absolute right-1.5 top-1.5 h-3 w-3 border-r-2 border-t-2 border-[#5ce1e6]" />
    <span aria-hidden="true" className="pointer-events-none absolute bottom-1.5 left-1.5 h-3 w-3 border-b-2 border-l-2 border-[#5ce1e6]" />
    <span aria-hidden="true" className="pointer-events-none absolute bottom-1.5 right-1.5 h-3 w-3 border-b-2 border-r-2 border-[#5ce1e6]" />
  </>
);

const SectionDivider = ({ level, total, eyebrow, title }) => {
  const lit = Math.round((level / total) * SEGMENTS);
  const pad = String(level).padStart(2, '0');

  return (
    <section className="relative mb-8 rounded-lg border border-[#5ce1e6]/20 bg-[#0b0f1f]/85 px-5 py-5 shadow-[0_0_30px_rgba(8,4,12,0.5)] backdrop-blur-sm sm:px-7 sm:py-6">
      <Corners />

      {/* Level label (left) + progress counter (right) */}
      <div className="flex items-center justify-between font-source-code-pro text-[11px] font-bold uppercase tracking-[0.3em] sm:text-xs">
        <span className="text-[#5ce1e6] pixel-shadow">
          Level {pad} <span className="text-[#5ce1e6]/40">·</span> {eyebrow}
        </span>
        <span className="tracking-[0.2em] text-white/45">
          {level} / {total}
        </span>
      </div>

      <h2 className="mt-2 text-4xl font-bold leading-none text-white pixel-shadow sm:text-5xl">
        {title}
      </h2>

      {/* Segmented meter — decorative; fills to this level's share of the page */}
      <div aria-hidden="true" className="mt-4 flex gap-1">
        {Array.from({ length: SEGMENTS }).map((_, i) => (
          <span
            key={i}
            className={
              i < lit
                ? 'h-2.5 flex-1 rounded-[2px] bg-[#5ce1e6] shadow-[0_0_8px_rgba(92,225,230,0.6)]'
                : 'h-2.5 flex-1 rounded-[2px] bg-[#5ce1e6]/10'
            }
          />
        ))}
      </div>
    </section>
  );
};

export default SectionDivider;

import { caveBG } from '../../assets';

// Numbered banner that splits the home post-footer into three acts
// (01 About / 02 Experience / 03 Contact). The cave scene is shared across all
// three — only the index and header copy change — so the dividers read as one
// family. The big ghosted number is decorative (the <h2> carries the heading for
// screen readers); the numbering is honest here because the three acts have a
// real first-visit reading order: who I am -> what I've done -> how to reach me.
const SectionDivider = ({ number, eyebrow, title, subtitle }) => (
  <section className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.35)]">
    {/* Shared cave backdrop, darkened left-to-right so the header stays legible */}
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${caveBG})` }}
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-r from-[#08040c]/90 via-[#08040c]/65 to-[#08040c]/35"
    />

    <div className="relative flex flex-col gap-3 px-5 py-6 sm:px-9 sm:py-7">
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Ghosted index — decorative outline; the heading lives in the <h2> */}
        <span
          aria-hidden="true"
          className="select-none text-6xl font-bold leading-none text-transparent sm:text-8xl"
          style={{ WebkitTextStroke: '2px rgba(125,231,235,0.5)' }}
        >
          {number}
        </span>

        <div className="min-w-0">
          <p className="mb-1 font-source-code-pro text-[11px] font-bold uppercase tracking-[0.4em] text-[#5ce1e6] pixel-shadow sm:text-sm">
            {eyebrow}
          </p>
          <h2 className="text-4xl font-bold leading-none text-white pixel-shadow sm:text-6xl">
            {title}
          </h2>
        </div>
      </div>

      {/* Full-width rule, fading out to the right like the cave it sits on */}
      <div className="h-px w-full bg-gradient-to-r from-[#5ce1e6]/60 via-[#5ce1e6]/25 to-transparent" />

      <p className="font-source-code-pro text-sm text-white/75 pixel-shadow sm:text-base">
        {subtitle}
      </p>
    </div>
  </section>
);

export default SectionDivider;

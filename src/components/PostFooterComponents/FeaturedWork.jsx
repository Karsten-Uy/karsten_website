import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredWork } from '../../data/homeShowcase';
import { projectsCta } from '../../data/home';

// Selected work as a single-column list inside one framed panel — each project a
// compact row: small thumbnail (with a play badge for video) on the left, title
// / kind / tags in the middle, and the action link pinned to the right. Hovering
// a row shows a summary tooltip that follows the cursor. A "View full
// experience" button closes the section, sending visitors to the long-form
// Experience page.
const TIP_WIDTH = 288; // matches w-72

const FeaturedWork = () => {
  const [active, setActive] = useState(null); // the hovered project (or null)
  const [pos, setPos] = useState({ x: 0, y: 0 }); // cursor position

  return (
    <section className="mb-10 text-left">
      <p className="mb-2 font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] sm:text-base pixel-shadow">
        Featured Work
      </p>
      <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl pixel-shadow">Selected projects</h2>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1f]/50 backdrop-blur-sm">
        {featuredWork.map((p) => {
          // Projects without a public link (e.g. coursework that can't be shared)
          // render as a non-clickable row with a muted "Private" tag instead of a link.
          const hasLink = Boolean(p.cta?.href);
          const Wrapper = hasLink ? 'a' : 'div';
          const linkProps = hasLink
            ? { href: p.cta.href, target: '_blank', rel: 'noopener noreferrer' }
            : {};
          return (
            <Wrapper
              key={p.id}
              {...linkProps}
              onMouseEnter={() => setActive(p)}
              onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setActive((cur) => (cur === p ? null : cur))}
              className="group flex items-center gap-4 border-b border-white/[0.07] px-4 py-4 transition-colors duration-200 last:border-b-0 hover:bg-[#5ce1e6]/[0.06] sm:px-5"
            >
              {/* Thumbnail — 16:9 so YouTube frames sit flush; play badge for video */}
              <div className="relative aspect-video w-20 flex-none overflow-hidden rounded-lg border border-white/10 sm:w-24">
                <img
                  src={p.thumb}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {p.hasPlay && (
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-black/55 backdrop-blur-sm">
                      <span className="ml-0.5 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" />
                    </span>
                  </span>
                )}
              </div>

              {/* Title + kind + tags */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-lg font-bold leading-tight text-white sm:text-xl">{p.title}</h3>
                <p className="mt-0.5 font-source-code-pro text-xs font-bold uppercase tracking-[0.15em] text-[#5ce1e6]">
                  {p.kind}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 px-2 py-0.5 font-source-code-pro text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action — pinned right (muted "Private" label when there's no public link) */}
              <span className="flex-none whitespace-nowrap font-source-code-pro text-sm font-semibold text-[#5ce1e6]">
                {hasLink ? (
                  <>
                    {p.cta.label}{' '}
                    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </>
                ) : (
                  <span className="text-white/40">Private</span>
                )}
              </span>
            </Wrapper>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
          <Link
            to={projectsCta.to}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-gradient px-7 py-3 font-source-code-pro text-base font-semibold text-black transition-colors duration-200 hover:bg-none hover:bg-[#0b0f1f] hover:text-[#5ce1e6]"
          >
            {projectsCta.label} <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Summary tooltip that follows the cursor. Rendered to <body> via a portal
          so no parent's overflow/transform can clip it; pointer-events-none keeps
          it from stealing the hover. */}
      {active &&
        createPortal(
          <div
            className="pointer-events-none fixed z-[60] w-72 max-w-[80vw] rounded-lg border border-white/10 bg-[#0b0f1f] p-3 text-left shadow-xl"
            style={{
              left: Math.min(pos.x + 16, window.innerWidth - TIP_WIDTH - 12),
              top: pos.y + 16,
            }}
          >
            <span className="block text-sm font-bold text-white">{active.title}</span>
            <span className="mt-0.5 block font-source-code-pro text-xs leading-snug text-white/65">
              {active.summary}
            </span>
          </div>,
          document.body
        )}
    </section>
  );
};

export default FeaturedWork;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aboutIntro, whatIDo } from '../../data/home';
import karsten from '../../assets/karsten.png';

// Two stacked sections: a boxed "About" intro panel (the one faded box kept on
// the home post-footer), and a flat "What I Do" capability list — one row per
// discipline: icon tile + title + description.
const AboutCapabilities = () => (
  <>
    {/* About — faded intro panel */}
    <section className="mb-10">
      <div className="rounded-3xl border border-white/10 bg-[#222a47]/55 p-6 backdrop-blur-sm sm:p-9">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
          <img
            src={karsten}
            alt="Karsten Uy"
            className="h-20 w-20 flex-none rounded-2xl border border-white/15 object-cover sm:h-24 sm:w-24"
          />
          <div className="flex-1">
            <p className="mb-1 font-source-code-pro text-xs font-bold uppercase tracking-[0.3em] text-[#5ce1e6]">
              About
            </p>
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{aboutIntro.title}</h2>
            <p className="mt-2 font-source-code-pro text-sm text-white/70 sm:text-base">{aboutIntro.body}</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-none">
            <Link
              to={aboutIntro.ctaTo}
              className="inline-flex items-center gap-1 rounded-lg bg-blue-gradient px-5 py-3 font-source-code-pro text-sm font-semibold text-black"
            >
              {aboutIntro.ctaLabel} <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* What I Do — flat capability list */}
    <section className="mb-10 text-left">
      <p className="mb-2 font-source-code-pro text-xs font-bold uppercase tracking-[0.3em] text-[#5ce1e6] sm:text-sm pixel-shadow">
        {whatIDo.heading}
      </p>
      {whatIDo.subtitle && (
        <p className="mb-6 font-source-code-pro text-sm text-white/70 sm:text-base pixel-shadow">{whatIDo.subtitle}</p>
      )}

      <div className="divide-y divide-white/10 border-t border-white/10">
        {whatIDo.cards.map((item) => (
          <div key={item.title} className="flex items-start gap-4 py-5 sm:items-center sm:gap-6">
            <div className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-[#5ce1e6]/30 bg-[#0b0f1f]/60">
              <img src={item.logo} alt="" className="h-7 w-7 object-contain" />
            </div>
            <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
              <h3 className="font-bold leading-tight text-white sm:w-56 sm:flex-none sm:text-lg pixel-shadow">
                {item.title}
              </h3>
              <p className="flex-1 font-source-code-pro text-sm text-white/70 pixel-shadow">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default AboutCapabilities;

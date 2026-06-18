import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aboutIntro, whatIDo } from '../../data/home';
import karsten from '../../assets/karsten.png';

// Combined panel: a self-contained "About" feature card on top, and the
// "What I Do" disciplines as a numbered 01-04 capability index below.
const AboutCapabilities = () => (
  <section className="mb-8 rounded-3xl border border-white/10 bg-[#222a47]/55 p-6 text-left backdrop-blur-sm sm:p-9">
    {/* About feature card */}
    <div className="mb-9 flex flex-col items-start gap-5 rounded-2xl border border-white/10 bg-[#0b0f1f]/70 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
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
        <p className="mt-2 font-source-code-pro text-sm text-white/60 sm:text-base">{aboutIntro.body}</p>
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

    {/* What I Do — numbered capability index */}
    <div className="flex flex-col gap-6 md:flex-row md:gap-10">
      <div className="md:w-1/3">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{whatIDo.heading}</h2>
        {whatIDo.subtitle && (
          <p className="mt-3 font-source-code-pro text-sm text-white/60 sm:text-base">{whatIDo.subtitle}</p>
        )}
      </div>

      <div className="divide-y divide-white/10 border-t border-white/10 md:flex-1">
        {whatIDo.cards.map((item, i) => (
          <div key={item.title} className="flex items-center gap-4 py-4 sm:gap-5">
            <span className="font-source-code-pro text-lg text-white/40 sm:text-xl">
              {String(i + 1).padStart(2, '0')}
            </span>
            <img src={item.logo} alt="" className="h-8 w-8 flex-none object-contain" />
            <div className="min-w-0">
              <h3 className="font-bold leading-tight text-white sm:text-lg">{item.title}</h3>
              <p className="font-source-code-pro text-sm text-white/60">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutCapabilities;

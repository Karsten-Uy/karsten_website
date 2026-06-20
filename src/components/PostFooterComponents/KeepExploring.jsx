import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { contactBand, keepExploring } from '../../data/home';

// Closing 03 band. Opens with a centered call to reach out (the contact band),
// then a compact row of navigation cards pointing to the site's three main
// destinations.
const KeepExploring = () => (
  <section className="mb-10">
    {/* Contact band — centered call to action */}
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl pixel-shadow">{contactBand.heading}</h2>
      <p className="mx-auto mt-3 max-w-xl font-source-code-pro text-base text-white/70 sm:text-lg">
        {contactBand.body}
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 inline-block">
        <Link
          to={contactBand.ctaTo}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-gradient px-7 py-3 font-source-code-pro text-base font-semibold text-black transition-colors duration-200 hover:bg-none hover:bg-[#0b0f1f] hover:text-[#5ce1e6]"
        >
          {contactBand.ctaLabel} <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </div>

    {/* Keep exploring — compact navigation cards */}
    <p className="mb-4 text-center font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] pixel-shadow">
      {keepExploring.eyebrow}
    </p>

    <div className="grid gap-4 sm:grid-cols-2">
      {keepExploring.cards.map((card) => (
        <Link
          key={card.to}
          to={card.to}
          className="group flex flex-col rounded-2xl border border-white/10 bg-[#0b0f1f]/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#5ce1e6] hover:bg-[#5ce1e6] hover:shadow-[0_0_28px_rgba(92,225,230,0.5)]"
        >
          <h3 className="text-lg font-bold leading-tight text-white transition-colors duration-200 group-hover:text-black sm:text-xl">
            {card.title}
          </h3>
          <p className="mt-2 flex-1 font-source-code-pro text-sm leading-snug text-white/70 transition-colors duration-200 group-hover:text-black/80">
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

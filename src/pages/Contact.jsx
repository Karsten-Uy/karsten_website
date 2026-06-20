import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { contactPage, emailConfig } from '../data/contact';

// Two-column Contact page: a message form (left) sitting over the page
// background, and a solid dark identity card (right) listing the direct ways to
// reach me. Visual language matches the About / Experience pages (cyan accent,
// source-code-pro, pixel-shadow, dark rounded panels that lift to cyan on hover).
// Form copy + channels live in src/data/contact.js; submission goes through the
// existing EmailJS config.

const EYEBROW =
  'font-source-code-pro text-sm font-bold uppercase tracking-[0.3em] text-[#5ce1e6] pixel-shadow';
const FIELD_LABEL =
  'mb-2 font-source-code-pro text-xs font-bold uppercase tracking-[0.22em] text-[#5ce1e6]';
const FIELD =
  'w-full rounded-xl border border-white/10 bg-[#0b0f1f]/60 px-4 py-3 font-source-code-pro text-white placeholder-white/30 transition-colors duration-200 focus:border-[#5ce1e6] focus:outline-none focus:ring-1 focus:ring-[#5ce1e6]/40';

// Channel glyphs (cyan, currentColor). Keyed by the channel `type` in the data.
const ICONS = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C18 4.6 19 4.9 19 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5V23h-4V8z" />
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h5" />
    </svg>
  ),
};

const Modal = ({ onClose, content, variant }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      className={`mx-auto max-w-sm rounded-2xl border bg-[#11101d] p-8 text-center backdrop-blur-sm ${
        variant === 'failure' ? 'border-red-400/50' : 'border-[#5ce1e6]/40'
      }`}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4 }}
    >
      <h2
        className={`mb-3 text-2xl font-bold pixel-shadow ${
          variant === 'failure' ? 'text-red-300' : 'text-[#5ce1e6]'
        }`}
      >
        {content.title}
      </h2>
      <p className="font-source-code-pro text-white/75">{content.body}</p>
      <button
        onClick={onClose}
        className={`mt-6 rounded-lg px-5 py-2 font-source-code-pro font-semibold transition-transform duration-200 hover:scale-[1.03] ${
          variant === 'failure'
            ? 'border border-red-400/50 text-red-200'
            : 'bg-blue-gradient text-black'
        }`}
      >
        {content.close}
      </button>
    </motion.div>
  </motion.div>
);

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { eyebrow, heading, intro, fields, submitLabel, card, success, failure } = contactPage;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true); // Disable the button during submission

    emailjs
      .sendForm(emailConfig.serviceId, emailConfig.templateId, form.current, emailConfig.publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Show the success modal
          setIsFailed(false);
        },
        (error) => {
          console.error(error.text);
          setIsFailed(true); // Show the failure modal
          setIsSubmitted(false);
        }
      );
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    setIsFailed(false);
    setIsButtonDisabled(false); // Re-enable the button after the modal closes
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto grid w-[min(92vw,1024px)] gap-8 py-8 text-left sm:py-12 lg:grid-cols-[1.35fr_1fr] lg:gap-10"
    >
      {/* Left — message form (sits over the page background) */}
      <section>
        <p className={`mb-2 ${EYEBROW}`}>{eyebrow}</p>
        <h1 className="text-5xl font-bold text-white pixel-shadow sm:text-6xl">{heading}</h1>
        <p className="mt-4 max-w-md font-source-code-pro text-base text-white/70 pixel-shadow sm:text-lg">
          {intro}
        </p>

        <form ref={form} onSubmit={sendEmail} className="mt-8 flex flex-col">
          {fields.map((field) => (
            <div key={field.name} className="mb-5 flex flex-col">
              <label htmlFor={field.name} className={FIELD_LABEL}>
                {field.label}
              </label>
              {field.multiline ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={5}
                  placeholder={field.placeholder}
                  className={`${FIELD} min-h-[140px] resize-y`}
                  required
                />
              ) : (
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className={FIELD}
                  required
                />
              )}
            </div>
          ))}

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="mt-1 self-start">
            <button
              type="submit"
              className={`inline-flex items-center gap-2 rounded-xl bg-blue-gradient px-7 py-3 font-source-code-pro text-base font-semibold text-black ${
                isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={isButtonDisabled}
            >
              {submitLabel} <span aria-hidden="true">▸</span>
            </button>
          </motion.div>
        </form>
      </section>

      {/* Right — identity card. Lifts + cyan-highlights on hover (no full-blue
          flip); only the clickable channel buttons below flip fully to blue. */}
      <aside className="self-start rounded-2xl border border-white/10 bg-[#11101d]/80 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#5ce1e6] hover:shadow-[0_0_28px_rgba(92,225,230,0.4)] sm:p-6">
        {/* Profile header */}
        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 flex-none place-items-center overflow-hidden rounded-xl border-2 border-[#5ce1e6]/60 bg-[#0b0f1f] shadow-[0_0_16px_rgba(92,225,230,0.35)]">
            <img src={card.avatar} alt={card.name} className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-2xl font-bold leading-tight text-white pixel-shadow">{card.name}</p>
            <p className="font-source-code-pro text-sm text-white/55">{card.location}</p>
          </div>
        </div>

        {/* Availability status */}
        <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-[#5ce1e6]/25 bg-[#5ce1e6]/[0.06] px-4 py-3">
          <span className="h-2 w-2 flex-none rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          <span className="font-source-code-pro text-sm text-white/80">{card.status}</span>
        </div>

        {/* Direct channels */}
        <p className="mb-3 mt-6 font-source-code-pro text-xs font-bold uppercase tracking-[0.28em] text-[#5ce1e6] pixel-shadow">
          {card.channelsHeading}
        </p>
        <div className="flex flex-col gap-2.5">
          {card.channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.type === 'email' ? undefined : '_blank'}
              rel={ch.type === 'email' ? undefined : 'noopener noreferrer'}
              className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#0b0f1f]/50 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5ce1e6] hover:bg-[#5ce1e6]"
            >
              <span className="grid h-10 w-10 flex-none place-items-center rounded-lg border border-[#5ce1e6]/30 bg-[#0b0f1f]/70 text-[#5ce1e6] transition-colors duration-200 group-hover:border-black/20 group-hover:bg-[#0b0f1f]">
                {ICONS[ch.type]}
              </span>
              <span className="min-w-0">
                <span className="block font-source-code-pro text-[11px] font-bold uppercase tracking-[0.2em] text-[#5ce1e6] transition-colors duration-200 group-hover:text-black">
                  {ch.label}
                </span>
                <span className="block truncate font-source-code-pro text-sm text-white/85 transition-colors duration-200 group-hover:text-black">
                  {ch.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </aside>

      <AnimatePresence>
        {isSubmitted && <Modal onClose={handleModalClose} content={success} variant="success" />}
        {isFailed && <Modal onClose={handleModalClose} content={failure} variant="failure" />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;

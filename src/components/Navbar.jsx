import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { close, menu } from '../assets';
import { navLinks, brand, socialMedia, contactInfo } from '../data/siteConfig';

const linkVariants = {
  hover: {
    scale: 1.1,
    opacity: 0.8,
  },
  tap: {
    scale: 0.9,
  },
};

// Stagger the pause-menu items in like options dropping onto a Start screen.
const panelVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 24 } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.12 } },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Mark the current route's row with the ▸ cursor. '/' and '/home' both map to "home".
  const currentId = location.pathname === '/' ? 'home' : location.pathname.replace(/^\//, '');

  const handleNavigation = (id) => {
    setToggle(false);
    navigate(`/${id}`);
  };

  // While the pause menu is open (narrow screens only): close on Esc, and close
  // if the window widens past the breakpoint so the menu can't get stuck open.
  useEffect(() => {
    if (!toggle) return;
    // Freeze the page behind the overlay so it can't scroll while paused.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setToggle(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setToggle(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [toggle]);

  return (
    <nav className="w-full flex py-2 justify-between items-center navbar relative sm:px-20 px-2">
      {/* Wrap the logo with motion.div */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/">
          <img src={brand.logo} alt={brand.alt} className="w-[70px]" />
        </Link>
      </motion.div>

      <ul className="list-none sm:flex text-xs hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.id}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            className={`font-source-code-pro font-normal cursor-pointer text-base sm:text-lg text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
            onClick={() => handleNavigation(nav.id)}
          >
            <Link to={`/${nav.id}`} className="text-white">
              {nav.title}
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          type="button"
          className="relative z-10 p-1"
          aria-label={toggle ? 'Close menu' : 'Open menu'}
          aria-expanded={toggle}
          onClick={() => setToggle((v) => !v)}
        >
          <img
            src={toggle ? close : menu}
            alt=""
            className="w-[28px] h-[28px] object-contain"
          />
        </button>

        {/* Portal to <body> so the overlay escapes the navbar's z-10 stacking
            context — otherwise the grass strip / post-footer paint over it. */}
        {createPortal(
          <AnimatePresence>
            {toggle && (
              <motion.div
                className="pause-menu fixed inset-0 z-[100] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setToggle(false)}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
              >
                {/* CRT flavor over the dimmed scene; non-interactive. */}
                <div className="pause-scanlines" aria-hidden="true" />
                <div className="pause-vignette" aria-hidden="true" />

                {/* The overlay covers the navbar, so the close control lives here. */}
                <button
                  type="button"
                  className="pause-close"
                  aria-label="Close menu"
                  onClick={() => setToggle(false)}
                >
                  <span aria-hidden="true">✕</span>
                </button>

                {/* Taps inside the panel must not close the menu. */}
                <motion.div
                className="pause-panel"
                variants={panelVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div className="pause-title" variants={itemVariants}>
                  <span className="pause-led" aria-hidden="true" />
                  <span>❚❚ PAUSED</span>
                </motion.div>

                {navLinks.map((nav) => {
                  const isActive = currentId === nav.id;
                  return (
                    <motion.button
                      key={nav.id}
                      type="button"
                      variants={itemVariants}
                      className={`pause-row ${isActive ? 'is-active' : ''}`}
                      onClick={() => handleNavigation(nav.id)}
                    >
                      <span className="pause-row-cursor" aria-hidden="true">
                        {isActive ? '▸' : ''}
                      </span>
                      <span className="pause-row-label">{nav.title}</span>
                      <span className="pause-row-chevron" aria-hidden="true">
                        {'>'}
                      </span>
                    </motion.button>
                  );
                })}

                <motion.div className="pause-foot" variants={itemVariants}>
                  <div className="pause-jacks">
                    {socialMedia.map((s) => (
                      <a
                        key={s.id}
                        href={s.link}
                        target="_blank"
                        rel="noreferrer"
                        className="pause-jack"
                      >
                        <img src={s.icon} alt="" />
                      </a>
                    ))}
                    {/* Resume as a circular icon to match the social jacks. */}
                    <a
                      href={contactInfo.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="pause-jack"
                      aria-label="Resume"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                        <path d="M14 3v5h5" />
                        <line x1="9" y1="13" x2="15" y2="13" />
                        <line x1="9" y1="17" x2="13" y2="17" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </nav>
  );
};

export default Navbar;

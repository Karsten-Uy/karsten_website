// Shared framer-motion presets.

// Page-mount fade applied to every top-level route wrapper (Home, About,
// Experience, Projects, Contact, 404) so they all enter identically.
export const pageFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

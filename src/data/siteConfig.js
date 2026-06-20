// Site-wide configuration: navigation, social links, the hero typing titles, and
// the per-route background/overlay map. Edit these instead of digging through JSX.

import githubWhite from '../assets/github-mark-white.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.png';
import karstenLogo from '../assets/karstenLogo_pixel_art.png';
import resumePdf from '../assets/resume.pdf';

// Page background images.
import mountainsBG from '../assets/mountainsBG.gif';
import levelBG from '../assets/levelBG.gif';
import mountainBG from '../assets/mountainBG.gif';
import cityBG3 from '../assets/pixel-city3.gif';
import skyBG from '../assets/skybg.gif';

// Brand / identity shown in the navbar.
export const brand = {
  logo: karstenLogo,
  alt: 'karsten logo',
};

// Contact details used by the footer and contact page.
export const contactInfo = {
  email: 'karsten.uy@gmail.com',
  resumeUrl: resumePdf,
};

// Shown in the home page post-footer.
export const location = 'Vancouver, Canada';

// Navbar links. `id` is the route path segment (e.g. "about" -> /about).
export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  // { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export const socialMedia = [
  { id: 'social-media-2', icon: githubWhite, link: 'https://github.com/Karsten-Uy' },
  { id: 'social-media-3', icon: linkedin, link: 'https://www.linkedin.com/in/karstenuy/' },
  { id: 'social-media-4', icon: youtube, link: 'https://www.youtube.com/channel/UCpk5lRmQTTeHq7ISLFpiwzA' },
];

// Per-route appearance. `showOverlay` toggles the purple->teal gradient wash;
// `darken` (0-1) adds an extra dark veil on top of the scene to deepen it;
// `isHome` enables the home-only scroll-down button and post-footer section.
// Add a new page = add one entry here + one <Route> in App.jsx.
export const DEFAULT_PAGE = { background: mountainsBG, showOverlay: false, isHome: false };

export const pageConfig = {
  '/': { background: mountainsBG, showOverlay: false, isHome: true },
  '/home': { background: mountainsBG, showOverlay: false, isHome: true },
  '/about': { background: levelBG, showOverlay: true, darken: 0.45, isHome: false },
  '/experience': { background: mountainBG, showOverlay: true, darken: 0.3, isHome: false },
  '/contact': { background: skyBG, showOverlay: true, isHome: false },
  // '/projects' and unknown paths fall through to DEFAULT_PAGE (mountainsBG, no overlay).
};

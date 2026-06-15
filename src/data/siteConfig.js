// Site-wide configuration: navigation, social links, the hero typing titles, and
// the per-route background/overlay map. Edit these instead of digging through JSX.

import githubWhite from '../assets/github-mark-white.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.png';

// Page background images.
import skyBG from '../assets/skybg.gif';
import levelBG from '../assets/levelBG.gif';
import mountainBG from '../assets/mountainBG.gif';
import cityBG3 from '../assets/pixel-city3.gif';

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

// Rotating titles for the home-page typing animation (CentreBlock).
export const heroTitles = [
  ' Software Engineer',
  ' Hardware Designer',
  ' Full Stack Developer',
  ' Music Producer',
];

// Per-route appearance. `showOverlay` toggles the purple->teal gradient wash;
// `isHome` enables the home-only scroll-down button and post-footer section.
// Add a new page = add one entry here + one <Route> in App.jsx.
export const DEFAULT_PAGE = { background: skyBG, showOverlay: false, isHome: false };

export const pageConfig = {
  '/': { background: skyBG, showOverlay: false, isHome: true },
  '/home': { background: skyBG, showOverlay: false, isHome: true },
  '/about': { background: levelBG, showOverlay: true, isHome: false },
  '/experience': { background: mountainBG, showOverlay: true, isHome: false },
  '/contact': { background: cityBG3, showOverlay: true, isHome: false },
  // '/projects' and unknown paths fall through to DEFAULT_PAGE (skyBG, no overlay).
};

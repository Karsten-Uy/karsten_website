// All home-page content: the hero, the post-footer intro, the "What I Do"
// cards, and the tech-stack carousel.

import eda from '../assets/eda.png';
import dev from '../assets/dev.png';
import sound from '../assets/sound.png';
import musicProd from '../assets/music_prod.png';

import postgresql from '../assets/TechLogos/Postgresql.png';
import adobe from '../assets/TechLogos/adobe.png';
import aws from '../assets/TechLogos/aws.png';
import bp from '../assets/TechLogos/bp.png';
import c from '../assets/TechLogos/c.png';
import csharp from '../assets/TechLogos/csharp.png';
import cpp from '../assets/TechLogos/cpp.png';
import css from '../assets/TechLogos/css.png';
import dvr from '../assets/TechLogos/dvr.png';
import git from '../assets/TechLogos/git.png';
import html from '../assets/TechLogos/html.png';
import java from '../assets/TechLogos/java.png';
import js from '../assets/TechLogos/js.png';
import juce from '../assets/TechLogos/juce.png';
import netcore from '../assets/TechLogos/netcore.png';
import linux from '../assets/TechLogos/linux.png';
import python from '../assets/TechLogos/python.png';
import react from '../assets/TechLogos/react.png';
import studioone from '../assets/TechLogos/studioone.png';
import ableton from '../assets/TechLogos/ableton.png';
import tailwind from '../assets/TechLogos/tailwind.png';
import systemverilog from '../assets/TechLogos/sv.png';
import quartus from '../assets/TechLogos/quartus.png';
import arduino from '../assets/TechLogos/arduino.png';
import audacity from '../assets/TechLogos/Audacity.png';

// Hero (CentreBlock). `titles` rotate in the typing animation; `name.nick` is
// the highlighted nickname shown in quotes. The component renders `prefix + title`,
// so the article (a/an) lives inside each title to read correctly before
// vowel-initial words ("an Audio…", "an Embedded…").
export const hero = {
  eyebrow: "Hello, I'm",
  name: { first: 'Karsten', nick: 'Kirby', last: 'Uy' },
  prefix: 'I am',
  location: 'based in Canada',
  titles: [
    ' an Audio DSP Engineer',
    ' a Hardware Designer',
    ' an Embedded Engineer',
    ' a Music Producer',
  ],
};

// Label on the "View more" button under the home highlights.
export const featuredCta = 'View more';

// "View full experience" button below the selected-projects list — bridges the
// home highlights to the full Experience page (timeline + project bands).
export const projectsCta = { label: 'View full experience', to: '/experience' };

// Post-footer intro band (AboutHomePage).
export const aboutIntro = {
  title: 'Engineering the sounds of tomorrow',
  body: 'I design real-time audio DSP and the hardware it runs on — from fixed-point FPGA effect chains to the firmware and tools behind them. Engineer by training, producer by ear.',
  ctaLabel: 'Learn more',
  ctaTo: '/about',
};

// "What I Do" numbered capability index on the home page.
export const whatIDo = {
  heading: 'What I Do',
  subtitle: 'Where audio meets silicon',
  cards: [
    { title: 'Audio DSP', description: 'Real-time fixed-point audio DSP: distortion, dynamics, reverb, and pitch tracking.', logo: sound },
    { title: 'FPGA & Embedded', description: 'Audio algorithms running on real silicon — FPGA pipelines, firmware, and MIDI hardware.', logo: eda },
    { title: 'Software Engineering', description: 'End-to-end full-stack tools that ship.', logo: dev },
    { title: 'Music Production', description: "A producer's ear — I build for musicians because I am one.", logo: musicProd },
  ],
};

// Tech stack, grouped by discipline (mirrors the "What I Do" areas).
// To add a tool: import its logo at the top of this file, then drop a
// { name, logo, where } object into the right group's `items` array.
// `where` is the text shown in the hover tooltip (where the skill was used).
export const techStack = {
  heading: 'Tech Stack',
  groups: [
    {
      title: 'Audio DSP & Hardware',
      tagline: 'FPGA · DSP · firmware',
      items: [
        { name: 'SystemVerilog', logo: systemverilog, where: 'KFX Engine & ARC4 Decryptor RTL; Digital Systems Design' },
        { name: 'C++', logo: cpp, where: 'KFX Engine fixed-point DSP modeling' },
        { name: 'C', logo: c, where: 'Embedded firmware — JTAG-UART host link, FSMs' },
        { name: 'Python', logo: python, where: 'KFX host tooling (Tkinter GUI + CLI)' },
        { name: 'Quartus', logo: quartus, where: 'FPGA synthesis & timing closure for KFX and ARC4' },
        { name: 'Arduino', logo: arduino, where: 'Class-compliant USB-MIDI controller for KFX' },
        { name: 'Linux', logo: linux, where: 'Cross-platform embedded and dev environment' },
        { name: 'Git', logo: git, where: 'Version control across every project' },
      ],
    },
    {
      title: 'Music Production',
      tagline: 'Production · plugins',
      items: [
        { name: 'JUCE', logo: juce, where: 'KirbEqualizer audio plugin' },
        { name: 'Studio One', logo: studioone, where: 'Kirbeats music production' },
        { name: 'Ableton', logo: ableton, where: 'Kirbeats music production' },
        { name: 'Audacity', logo: audacity, where: 'Audio recording and editing' },
        { name: 'DaVinci Resolve', logo: dvr, where: 'Kirbeats video editing' },
        { name: 'Adobe Suite', logo: adobe, where: 'Cover art and media for Kirbeats' },
      ],
    },
    {
      title: 'Software & Web',
      tagline: 'Full-stack apps',
      items: [
        { name: 'React', logo: react, where: 'ICBC web apps; this portfolio' },
        { name: 'JavaScript', logo: js, where: 'Front-end across web projects' },
        { name: 'HTML', logo: html, where: 'Web UI and portfolio markup' },
        { name: 'CSS', logo: css, where: 'Responsive layouts and styling' },
        { name: 'Tailwind', logo: tailwind, where: 'Styling for this site' },
        { name: 'PostgreSQL', logo: postgresql, where: 'UBC Room Finder database' },
        { name: 'Java', logo: java, where: 'OOP coursework and projects' },
        { name: 'AWS', logo: aws, where: 'Cloud hosting and deployment' },
      ],
    },
    {
      title: 'Automation & Backend',
      tagline: 'RPA · enterprise',
      items: [
        { name: 'C#', logo: csharp, where: 'ICBC enterprise tooling' },
        { name: '.NET', logo: netcore, where: 'ICBC web and service development' },
        { name: 'Blue Prism', logo: bp, where: 'ICBC RPA automation (30+ bots)' },
      ],
    },
  ],
};

// Game-HUD banners that split the home post-footer into three "levels", in the
// natural first-visit reading order (who I am → what I've done → reach out).
// `level`/`total` drive the LEVEL 0N label, the N / TOTAL counter, and how far
// the segmented meter fills. Rendered by SectionDivider.jsx, laid out in
// PostFooterHome.jsx.
export const sectionDividers = {
  about: { level: 1, total: 3, eyebrow: 'Who I Am', title: 'About' },
  experience: { level: 2, total: 3, eyebrow: 'The Work', title: 'Experience' },
  contact: { level: 3, total: 3, eyebrow: "Let's Connect", title: 'Contact' },
};

// Closing contact band that opens the 03 section — a centered call to reach out,
// sitting above the "Keep exploring" navigation cards.
export const contactBand = {
  heading: 'Reach out, or keep exploring',
  body: 'Open to internships & new-grad roles. Drop me a line.',
  ctaLabel: 'Get in touch',
  ctaTo: '/contact',
};

// The last band on the home page, sending visitors to the three main
// destinations (who I am → what I've done → reach out). Rendered as compact
// navigation cards beneath the contact band.
export const keepExploring = {
  eyebrow: 'Keep exploring',
  heading: 'Where to next?',
  cards: [
    {
      icon: 'about',
      title: 'About',
      description: 'Who I am, what I build, and the disciplines I work across.',
      ctaLabel: 'Read more',
      to: '/about',
    },
    {
      icon: 'experience',
      title: 'Experience',
      description: 'My career timeline — Intel, Synopsys, ICBC — and the projects.',
      ctaLabel: 'See the work',
      to: '/experience',
    },
  ],
};

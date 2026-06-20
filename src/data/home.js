// All home-page content: the hero, the post-footer intro, the "What I Do"
// cards, and the tech-stack carousel.

import eda from '../assets/eda.png';
import dev from '../assets/dev.png';
import auto from '../assets/auto.png';
import sound from '../assets/sound.png';

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
import tailwind from '../assets/TechLogos/tailwind.png';

// Hero (CentreBlock). `titles` rotate in the typing animation; `name.nick` is
// the highlighted nickname shown in quotes.
export const hero = {
  eyebrow: "Hello, I'm",
  name: { first: 'Karsten', nick: 'Kirby', last: 'Uy' },
  prefix: 'I am a',
  location: 'based in Canada',
  titles: [
    ' Software Engineer',
    ' Hardware Designer',
    ' Full Stack Developer',
    ' Music Producer',
  ],
};

// Label on the "View more" button under the home highlights.
export const featuredCta = 'View more';

// Post-footer intro band (AboutHomePage).
export const aboutIntro = {
  title: 'Programming the sounds of tomorrow',
  body: 'I specialize in engineering innovative solutions and experiences, with unwavering dedication to excellence that resonate with audiences.',
  ctaLabel: 'Learn more',
  ctaTo: '/about',
};

// "What I Do" numbered capability index on the home page.
export const whatIDo = {
  heading: 'What I Do',
  subtitle: 'Four disciplines, one project',
  cards: [
    { title: 'Hardware Development', description: 'Robust hardware spanning RTL, FPGA, and embedded platforms.', logo: eda },
    { title: 'Software Engineering', description: 'End-to-end software tools that solve complex problems.', logo: dev },
    { title: 'Automation', description: 'Complex workflows turned into scalable automated processes.', logo: auto },
    { title: 'Audio Engineering', description: 'Soundscapes and tools for enjoyable audio experiences.', logo: sound },
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
      title: 'Hardware & Embedded',
      tagline: 'RTL · FPGA · firmware',
      items: [
        { name: 'C++', logo: cpp, where: 'KFX Engine fixed-point DSP; Synopsys RTL feature extractor' },
        { name: 'C', logo: c, where: 'Embedded firmware and FPGA tooling' },
        { name: 'Linux', logo: linux, where: 'Synopsys cross-platform ML packaging and dev' },
        { name: 'Git', logo: git, where: 'Version control across every project' },
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
        { name: 'Java', logo: java, where: 'OOP coursework and projects' },
        { name: 'PostgreSQL', logo: postgresql, where: 'UBC Room Finder database' },
        { name: 'AWS', logo: aws, where: 'Cloud hosting and deployment' },
      ],
    },
    {
      title: 'Automation & Backend',
      tagline: 'RPA · pipelines',
      items: [
        { name: 'Python', logo: python, where: 'Synopsys ML pipelines; UBC scraper; ICBC RPA' },
        { name: 'C#', logo: csharp, where: 'ICBC enterprise tooling' },
        { name: '.NET', logo: netcore, where: 'ICBC web and service development' },
        { name: 'Blue Prism', logo: bp, where: 'ICBC RPA automation (30+ bots)' },
      ],
    },
    {
      title: 'Audio & Media',
      tagline: 'Production · DSP',
      items: [
        { name: 'JUCE', logo: juce, where: 'KirbEqualizer audio plugin' },
        { name: 'Studio One', logo: studioone, where: 'Kirbeats music production' },
        { name: 'DaVinci Resolve', logo: dvr, where: 'Kirbeats video editing' },
        { name: 'Adobe Suite', logo: adobe, where: 'Cover art and media for Kirbeats' },
      ],
    },
  ],
};

// Numbered banners that split the home post-footer into three acts, in the
// natural first-visit reading order (who I am → what I've done → reach out).
// The cave-scene backdrop is shared; only the header copy changes per act.
// Rendered by SectionDivider.jsx and laid out in PostFooterHome.jsx.
export const sectionDividers = {
  about: {
    number: '01',
    eyebrow: 'Who I Am',
    title: 'About',
    subtitle: 'The person behind the projects',
  },
  experience: {
    number: '02',
    eyebrow: 'The Work',
    title: 'Experience',
    subtitle: 'My career so far',
  },
  contact: {
    number: '03',
    eyebrow: "Let's Connect",
    title: 'Contact',
    subtitle: 'Reach out, or keep exploring',
  },
};

// "Where to next?" — the last band on the home page, sending visitors to the
// three main destinations. The 01/02/03 markers suggest a reading order for a
// first-time visitor (who am I → what I've done → reach out). `icon` keys map to
// inline SVGs in the KeepExploring component.
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
    {
      icon: 'contact',
      title: 'Contact',
      description: 'Open to internships & new-grad roles. Drop me a line.',
      ctaLabel: 'Get in touch',
      to: '/contact',
    },
  ],
};

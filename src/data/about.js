// About page content.
//
// The About page is a single "narrative scroll" you read top to bottom:
//   hero intro → my story + at-a-glance stats → the four disciplines → CTA.
// Every piece of copy lives here so the page can be re-worded or re-ordered
// without touching the component. The visual style mirrors the home
// post-footer (cyan accent, dark cards, tool chips).

import karsten from '../assets/karsten.png';
import eda from '../assets/eda.png';
import dev from '../assets/dev.png';
import auto from '../assets/auto.png';
import sound from '../assets/sound.png';

import Intel from '../assets/intel.png';
import Synopsys from '../assets/synopsys.png';
import ICBC from '../assets/icbc.png';

export const aboutPage = {
  // ---- Hero intro panel -------------------------------------------------
  eyebrow: 'About',
  photo: karsten,
  // Heading renders as `lead` + accent word (cyan) + `tail`, e.g.
  // "Programming the sounds of tomorrow".
  title: { lead: 'Programming the ', accent: 'sounds', tail: ' of tomorrow' },
  intro:
    'I specialize in engineering innovative solutions and experiences, with unwavering dedication to excellence that resonate with audiences.',
  // Status pills under the intro. `dot: true` adds a glowing LED.
  chips: [
    { label: 'Vancouver, BC', dot: true },
    { label: 'Open to work' },
    { label: 'EE × CS' },
  ],

  // ---- My story (narrative beside the stat card) ------------------------
  story: {
    eyebrow: 'My Story',
    paragraphs: [
      'I work at the seam where hardware meets sound. From RTL and FPGA design to the software and automation that ties systems together, I like building things end to end — then making them feel good to use and hear.',
      "My north star is craft: tools that are fast, interfaces that get out of the way, and audio that has character. Outside the lab you'll find me chasing pixel-art games, synth patches, and the occasional over-engineered side project.",
    ],
  },

  // ---- "At a glance" stat card + the places I've worked -----------------
  glance: {
    heading: 'At a glance',
    stats: [
      { value: '8+', label: 'Years building' },
      { value: '40+', label: 'Projects shipped' },
      { value: '4', label: 'Disciplines' },
      { value: '3', label: 'Internships' },
    ],
    workedWithHeading: 'Worked with',
    logos: [
      { src: Intel, alt: 'Intel' },
      { src: Synopsys, alt: 'Synopsys' },
      { src: ICBC, alt: 'ICBC' },
    ],
    cta: { label: 'Learn more', to: '/experience' },
  },

  // ---- What I do (one row per discipline, with tool chips) --------------
  disciplines: {
    eyebrow: 'What I Do',
    heading: 'Four disciplines, one project',
    items: [
      {
        title: 'Hardware Development',
        description:
          'Robust hardware spanning RTL, FPGA, and embedded platforms — from spec to silicon-ready.',
        logo: eda,
        tools: ['Verilog', 'FPGA', 'Embedded C'],
      },
      {
        title: 'Software Engineering',
        description:
          'End-to-end software tools that solve complex problems — clean architecture, real users in mind.',
        logo: dev,
        tools: ['React', 'Python', 'C#'],
      },
      {
        title: 'Automation',
        description:
          'Complex workflows turned into scalable, automated processes that just run.',
        logo: auto,
        tools: ['Python', 'Bash', 'Blue Prism'],
      },
      {
        title: 'Audio Engineering',
        description:
          'Soundscapes and tools for enjoyable audio experiences — DSP that has character.',
        logo: sound,
        tools: ['JUCE', 'DSP', 'Studio One'],
      },
    ],
  },

  // ---- Closing call to action -------------------------------------------
  cta: {
    title: "Let's build something.",
    body: "Got a project at the edge of hardware and sound? I'm listening.",
    label: 'Get in touch',
    to: '/contact',
  },
};

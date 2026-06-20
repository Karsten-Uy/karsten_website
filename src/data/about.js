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
import musicProd from '../assets/music_prod.png';
import sound from '../assets/sound.png';

import Intel from '../assets/intel.png';
import Synopsys from '../assets/synopsys.png';
import ICBC from '../assets/icbc.png';

export const aboutPage = {
  // ---- Hero intro panel -------------------------------------------------
  eyebrow: 'About',
  photo: karsten,
  // Heading renders as `lead` + accent word (cyan) + `tail`, e.g.
  // "Engineering the sounds of tomorrow" (mirrors the home About panel).
  title: { lead: 'Engineering the ', accent: 'sounds', tail: ' of tomorrow' },
  intro:
    'I design real-time audio DSP and the hardware it runs on — from fixed-point FPGA effect chains to the firmware and tools behind them. Engineer by training, producer by ear.',
  // Status pills under the intro. `dot: true` adds a glowing LED.
  chips: [
    { label: 'Vancouver, BC', dot: true },
    { label: 'Open to work' },
    { label: 'UBC Computer Engineering' },
    { label: 'Graduating Nov 2027' },
  ],

  // ---- My story (narrative beside the stat card) ------------------------
  story: {
    eyebrow: 'My Story',
    paragraphs: [
      'I work where audio meets silicon, designing real-time DSP and the FPGA, firmware, and tooling that make it run. RTL effect chains, embedded control, host software: I like owning the whole signal path, from spec to the sound that comes out.',
      "That ear was trained on stage. I've played guitar and bass for 10+ years and still perform live, and I produce and mix my own music. So I build audio tools the way a musician actually wants them: fast, low-latency, and full of character. Off the clock you'll catch me gigging, biking, or over-engineering a side project.",
    ],
  },

  // ---- "At a glance" stat card + the places I've worked -----------------
  glance: {
    heading: 'At a glance',
    stats: [
      { value: '3+', label: 'Years building' },
      { value: '10+', label: 'Years performing' },
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
    heading: 'Where audio meets silicon',
    items: [
      {
        title: 'Audio DSP',
        description:
          'Real-time fixed-point audio DSP: distortion, dynamics, reverb, and pitch tracking.',
        logo: sound,
        tools: ['C++', 'Python', 'JUCE'],
      },
      {
        title: 'FPGA & Embedded',
        description:
          'Audio algorithms running on real silicon: FPGA pipelines, firmware, and MIDI hardware.',
        logo: eda,
        tools: ['SystemVerilog', 'Quartus', 'Embedded C'],
      },
      {
        title: 'Software Engineering',
        description:
          'End-to-end full-stack tools that ship: clean architecture, real users in mind.',
        logo: dev,
        tools: ['React', 'Python', 'C#'],
      },
      {
        title: 'Music Production',
        description:
          "A producer's ear: I build for musicians because I am one.",
        logo: musicProd,
        tools: ['Studio One', 'Mixing', 'Sound Design'],
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

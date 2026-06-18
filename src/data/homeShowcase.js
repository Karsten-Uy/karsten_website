// Curated content for the two home-page showcase sections (the career timeline
// and the featured-work list). Kept separate from the canonical career/projects
// data so the home cards can show short, hand-tuned copy without touching the
// full lists used by the Experience/Projects pages.
//
// In a bullet, wrap a stat in {curly braces} to render it as a highlighted chip,
// e.g. "Trained ML models on {20K+ samples} via Bash pipelines".

import Intel from '../assets/intel.png';
import Synopsys from '../assets/synopsys.png';
import ICBC from '../assets/icbc.png';
import ubcroomfinder from '../assets/ubc_room_finder.png';

const ytThumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

// Experience — "My career so far" timeline.
export const careerTimeline = [
  {
    id: 'intel',
    company: 'Intel',
    logo: Intel,
    subtitle: 'System Simulation Intern · Hardware Development',
    bullets: ['Building system simulations to validate next-generation hardware.'],
    tags: [],
    period: 'May 2026 – Present',
    current: true,
  },
  {
    id: 'synopsys',
    company: 'Synopsys Inc.',
    logo: Synopsys,
    subtitle: 'R&D EDA Engineering Intern · Automation & EDA',
    bullets: [
      'Built an AI-driven EDA verification flow for RTL design.',
      'Trained ML models on {20K+ samples} via Bash pipelines, wired into a C++ RTL feature extractor.',
      'Streamlined {10+ processes} with CLI + GUI tooling; regression across {100+ RTL designs}.',
    ],
    tags: ['C++', 'Python', 'Linux', 'TCL'],
    period: 'Jan – Aug 2025',
    current: false,
  },
  {
    id: 'icbc',
    company: 'ICBC',
    logo: ICBC,
    subtitle: 'Full-Stack Software Developer Intern · Automation & Software',
    bullets: [
      'Shipped RPA solutions in Blue Prism + Python, cutting annual costs.',
      'Built scalable web apps with React, .NET, Flask, OutSystems & SQL.',
      'Monitored {30+ automations} for uptime across enterprise systems.',
    ],
    tags: ['C#', 'Blue Prism', 'React'],
    period: 'May – Dec 2024',
    current: false,
  },
];

// Featured work — selected projects list.
export const featuredWork = [
  {
    id: 'kfx',
    title: 'Hardware Multi-FX Pedal',
    kind: 'HARDWARE · AUDIO DSP',
    tags: ['SystemVerilog', 'FPGA'],
    period: 'Dec 2025 — Present',
    cta: { label: 'Watch', href: 'https://www.youtube.com/watch?v=onfJxRNhYNg' },
    thumb: ytThumb('onfJxRNhYNg'),
    hasPlay: true,
  },
  {
    id: 'ubc',
    title: 'UBC Room Finder',
    kind: 'FULL-STACK WEB',
    tags: ['Next.js', 'PostgreSQL'],
    period: 'Dec 2025 — Present',
    cta: { label: 'View repo', href: 'https://github.com/Karsten-Uy/ubc_room_finder/' },
    thumb: ubcroomfinder,
    hasPlay: false,
  },
  {
    id: 'helix',
    title: 'Helix at Home',
    kind: 'EMBEDDED · MIDI',
    tags: ['C++', 'Arduino'],
    period: 'Nov 2024 — Present',
    cta: { label: 'Watch', href: 'https://www.youtube.com/watch?v=NCPwh5nRK9E' },
    thumb: ytThumb('NCPwh5nRK9E'),
    hasPlay: true,
  },
  {
    id: 'kirbeats',
    title: 'Kirbeats Project',
    kind: 'MUSIC PRODUCTION',
    tags: ['Studio One', 'Ableton'],
    period: 'Jul 2022 — Present',
    cta: { label: 'Listen', href: 'https://www.youtube.com/channel/UCpk5lRmQTTeHq7ISLFpiwzA' },
    thumb: ytThumb('Ve9CfWA3qNA'),
    hasPlay: true,
  },
];

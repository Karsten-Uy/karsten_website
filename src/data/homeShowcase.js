// Curated content for the showcase sections shared by the home post-footer
// (compact career timeline + featured-work grid) and the Experience page
// (full "Work Experience" timeline + "Projects" bands). Kept separate from the
// canonical career/projects lists so this hand-tuned copy can evolve without
// touching the long-form data used elsewhere.
//
// In a bullet, wrap a stat in {curly braces} to render it as a highlighted chip,
// e.g. "Trained ML models on {20K+ samples} via Bash pipelines".
//
// featuredWork fields: the home grid reads {summary, tags, cta, thumb}; the
// Experience bands additionally read {blurb, badge, actions} for the wider,
// more detail-forward layout.

import Intel from '../assets/intel.png';
import Synopsys from '../assets/synopsys.png';
import ICBC from '../assets/icbc.png';
import ubcroomfinder from '../assets/ubc_room_finder.png';
// Placeholder image — swap '../assets/robot.png' for the real MODaN image once it's added to assets.
import modan from '../assets/robot.png';

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
    summary: 'Real-time guitar effects synthesized on an FPGA in SystemVerilog.',
    blurb:
      'Real-time guitar effects synthesized on an FPGA in SystemVerilog — distortion, delay and modulation at sub-millisecond latency. A 12-stage fixed-point pipeline runs at 48 kHz with presets tuned live over USB.',
    tags: ['SystemVerilog', 'Quartus Prime', 'FPGA'],
    period: 'Dec 2025 — Present',
    badge: 'DEMO',
    thumb: ytThumb('onfJxRNhYNg'),
    hasPlay: true,
    cta: { label: 'Watch', href: 'https://www.youtube.com/watch?v=onfJxRNhYNg' },
    actions: [
      { label: 'Watch', href: 'https://www.youtube.com/watch?v=onfJxRNhYNg', primary: true },
      { label: 'Details', href: 'https://github.com/Karsten-Uy/KFX_Engine' },
    ],
  },
  {
    id: 'ubc',
    title: 'UBC Room Finder',
    kind: 'FULL-STACK WEB',
    summary: 'Find open study and class rooms across UBC in real time.',
    blurb:
      'Finds open study and class rooms across UBC in real time. A Python scraper ingests the timetable; a Next.js + Supabase app filters by building, date and time.',
    tags: ['Next.js', 'PostgreSQL', 'Python'],
    period: 'Dec 2025 — Present',
    badge: 'LIVE',
    thumb: ubcroomfinder,
    hasPlay: false,
    cta: { label: 'View repo', href: 'https://github.com/Karsten-Uy/ubc_room_finder/' },
    actions: [
      { label: 'View code', href: 'https://github.com/Karsten-Uy/ubc_room_finder/', primary: true },
    ],
  },
  {
    id: 'modan',
    title: 'MODaN',
    kind: 'ROBOTICS · PERCEPTION',
    summary: 'ROS2 perception pipeline for autonomous mobile robot navigation.',
    blurb:
      'A ROS2 perception pipeline for autonomous mobile robot navigation — depth-gated obstacle detection and Kalman tracking feeding a Follow-the-Gap motion planner.',
    tags: ['Python', 'ROS2', 'OpenCV'],
    period: 'Jan 2026 — Apr 2026',
    badge: 'RESEARCH',
    thumb: modan,
    hasPlay: false,
    cta: { label: 'View', href: 'https://github.com/Karsten-Uy' },
    actions: [
      { label: 'View', href: 'https://github.com/Karsten-Uy', primary: true },
    ],
  },
  {
    id: 'kirbeats',
    title: 'Kirbeats Project',
    kind: 'MUSIC PRODUCTION',
    summary: 'Original beats and tracks produced in Studio One and Ableton.',
    blurb:
      'Original beats and tracks produced in Studio One and Ableton, with mixing and video edits in DaVinci Resolve.',
    tags: ['Studio One', 'Ableton'],
    period: 'Jul 2022 — Present',
    badge: 'AUDIO',
    thumb: ytThumb('Ve9CfWA3qNA'),
    hasPlay: true,
    cta: { label: 'Listen', href: 'https://www.youtube.com/channel/UCpk5lRmQTTeHq7ISLFpiwzA' },
    actions: [
      { label: 'Listen', href: 'https://www.youtube.com/channel/UCpk5lRmQTTeHq7ISLFpiwzA', primary: true },
      { label: 'Watch', href: 'https://www.youtube.com/watch?v=Ve9CfWA3qNA' },
    ],
  },
];

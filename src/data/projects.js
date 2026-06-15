// Single source of truth for ALL projects. Add a project once, here, and toggle
// where it appears with the per-view flags. No other file needs editing.
//
//   media.type:
//     'embed' -> YouTube/iframe (src is an embed URL)        [Experience page]
//     'image' -> static image   (src is an imported asset)   [Experience page]
//     'video' -> local <video> with click-to-play/pause      [Projects page card]
//     'audio' -> one or more audio players (heading + clips)  [Projects page card]
//
//   per-view flags:
//     showOnExperience -> appears in the Experience page project list
//     showOnProjects   -> appears as a media card on the Projects page
//     featured         -> appears in the home-page post-footer highlights

import ubcroomfinder from '../assets/ubc_room_finder.png';
import rgmVid from '../assets/rgmVid.mp4';
import kirbequalizerDemo from '../assets/KirbEqualizerDemo.mp4';
import preAIaudio from '../assets/preAIaudio.mp3';
import postAIaudio from '../assets/postAIAudio.mp3';

export const projects = [
  // --- Experience / home highlights -----------------------------------------
  {
    id: 'hardware-multi-fx-pedal',
    title: 'Hardware Multi-FX Pedal',
    date: 'December 2025 - Present',
    category: 'Hardware Development and Audio Engineering',
    technologies: 'System Verilog, Quartus Prime',
    description:
      'A real-time multi-effects guitar processor in SystemVerilog on the DE1-SoC FPGA, implementing a 48 kHz, 16-bit pipelined DSP chain for live performance. The engine features high-fidelity fixed-point modules including lookahead compression, multi-stage amp distortion, and Schroeder reverb, all optimized for a total system latency of <1ms, featuring a YIN-algorithm pitch tracker, ADC-driven expression pedal support, and a persistent Flash memory preset system that manages four independent banks across power cycles.',
    link: 'https://www.youtube.com/embed/onfJxRNhYNg?si=2LQUfOQEICjkqymk',
    media: { type: 'embed', src: 'https://www.youtube.com/embed/-QT1ypkydgE?si=nz3-ZUu_YqF0tH8a' },
    showOnExperience: true,
    showOnProjects: false,
    featured: true,
  },
  {
    id: 'ubc-room-finder',
    title: 'UBC Room Finder',
    date: 'December 2025 - Present',
    category: 'Web Development',
    technologies: 'Next.js, PostgreSQL, Python',
    description:
      'A full-stack web application that helps students find available classrooms and lecture spaces at UBC. It uses a Python-based scraper to ingest data from the UBC Online Timetable and a Next.js frontend backed by Supabase and deployed on Vercel, enabling user-friendly searching and filtering by date, time, and building.',
    link: 'https://github.com/Karsten-Uy/ubc_room_finder/',
    media: { type: 'image', src: ubcroomfinder },
    showOnExperience: true,
    showOnProjects: false,
    featured: true,
  },
  {
    id: 'helix-at-home',
    title: 'Helix at Home',
    date: 'November 2024 - Present',
    category: 'Development and Audio Engineering',
    technologies: 'C++, Arduino, MIDI',
    description:
      'An Arduino-based MIDI controller simulating a multi-effect guitar pedalboard with 9 buttons, 3 potentiometers, 9 LEDs, and an expression pedal. Engineered the mechanical and electrical design, soldering components for durability in live performance. Programmed in C++ using the MIDIUSB library to deliver 30+ MIDI control signals for seamless DAW integration.',
    link: 'https://github.com/Karsten-Uy/HaH',
    media: { type: 'embed', src: 'https://www.youtube.com/embed/NCPwh5nRK9E?start=10' },
    showOnExperience: true,
    showOnProjects: false,
    featured: true,
  },
  {
    id: 'kirbeats-project',
    title: 'Kirbeats Project',
    date: 'July 2022 - Present',
    category: 'Audio Engineering',
    technologies: 'Studio One 5, Ableton, Adobe Suite',
    description:
      'An ongoing music production project focused on creating high-quality beats across various genres, including EDM and J-Rock. It involves producing song covers with instruments like electric guitar, acoustic guitar, bass, and drums. All videos are edited using software such as DaVinci Resolve, while audio is edited with Studio One 5.',
    link: 'https://www.youtube.com/channel/UCpk5lRmQTTeHq7ISLFpiwzA',
    media: { type: 'embed', src: 'https://www.youtube.com/embed/Ve9CfWA3qNA' },
    showOnExperience: true,
    showOnProjects: false,
    featured: true,
  },

  // --- Projects page media cards --------------------------------------------
  {
    id: 'rhythmic-groove-master',
    title: 'Rhythmic Groove Master',
    description:
      'A MIDI controller, powered by Arduino Pro Micro, designed for bass or guitar, enabling simultaneous drum and bass performance, with code written in C++.',
    link: 'https://github.com/Karsten-Uy/rhythmicgroovemaster',
    media: { type: 'video', src: rgmVid },
    showOnExperience: false,
    showOnProjects: true,
    featured: false,
  },
  {
    id: 'kirbequalizer',
    title: 'KirbEqualizer',
    description:
      'An audio equalizer with customizable highpass, lowpass, and peak filters, allowing precise control over cutoff frequencies, Q values, and gain for personalized audio output.',
    link: 'https://github.com/Karsten-Uy/KirbEqualizer',
    media: { type: 'video', src: kirbequalizerDemo },
    showOnExperience: false,
    showOnProjects: true,
    featured: false,
  },
  {
    id: 'ai-vocal-model-creation',
    title: 'AI Vocal Model Creation',
    description:
      'Combined sound engineering and programming skills to create and utilize AI vocal models tailored for musical applications.',
    media: {
      type: 'audio',
      heading: 'AI Vocal Model Samples',
      clips: [
        { src: preAIaudio, label: 'Original vocal sample' },
        { src: postAIaudio, label: 'Post AI vocal model audio' },
      ],
    },
    showOnExperience: false,
    showOnProjects: true,
    featured: false,
  },
];

// Order-preserving selectors for each view.
export const experienceProjects = projects.filter((p) => p.showOnExperience);
export const cardProjects = projects.filter((p) => p.showOnProjects);
export const featuredProjects = projects.filter((p) => p.featured);

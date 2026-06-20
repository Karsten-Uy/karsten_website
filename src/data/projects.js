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
// Placeholder image — swap '../assets/robot.png' for the real MODaN image once it's added to assets.
import modan from '../assets/robot.png';
import arc4Img from '../assets/arc4.jpg';
import kirbequalizerDemo from '../assets/KirbEqualizerDemo.mp4';
import preAIaudio from '../assets/preAIaudio.mp3';
import postAIaudio from '../assets/postAIAudio.mp3';

export const projects = [
  // --- Experience / home highlights -----------------------------------------
  {
    id: 'kfx-engine',
    title: 'KFX Engine',
    date: 'December 2025 - Present',
    category: 'Hardware Development and Audio Engineering',
    technologies: 'SystemVerilog, FPGA, Fixed-Point DSP, Python',
    description:
      'A real-time multi-effects guitar processor written in SystemVerilog on the Intel Cyclone V (DE1-SoC) FPGA, running a 12-stage, 48 kHz/16-bit pipelined DSP chain with sub-millisecond (<1ms) latency for live performance. Its fixed-point modules include a 3rd-order polynomial tanh amp distortion, an 8-sample lookahead compressor, and a multiplier-free Feedback Delay Network reverb of eight fractional-delay lines coupled by a lossless 8x8 Hadamard matrix, all holding 50 MHz timing closure through pipelining and multicycle-path constraints, alongside an always-on YIN pitch tracker for chromatic tuning. A live JTAG-UART host link (Avalon-MM adapter) and a transport-agnostic command-parser FSM let a Python Tkinter GUI and CLI read, write, dump, and save a 512-byte parameter store on the running board, while four preset banks persist across power cycles in EPCQ SPI flash via a custom erase/program FSM. A gain-ramp fade FSM and GPIO/ADC expression-pedal controls round out the engine, which also mirrors to a class-compliant Arduino USB-MIDI controller.',
    link: 'https://github.com/Karsten-Uy/KFX_Engine',
    media: { type: 'embed', src: 'https://www.youtube.com/embed/onfJxRNhYNg?si=2LQUfOQEICjkqymk' },
    showOnExperience: true,
    showOnProjects: false,
    featured: true,
  },
  {
    id: 'arc4-decryptor',
    title: 'Parallel ARC4 Decryptor',
    date: 'November 2025 - December 2025',
    category: 'Hardware Development',
    technologies: 'SystemVerilog, FPGA, ModelSim',
    description:
      'A synthesizable ARC4 decryption engine on the Intel Cyclone V (DE1-SoC) FPGA that instantiates 150+ parallel cores to crack ciphertext at 3,500+ keys/sec. Timing closure was achieved at 120 MHz by pipelining the RTL and optimizing resource utilization to 92% while mitigating routing congestion during the Quartus fitting stage. Functional correctness and throughput were verified using ModelSim and SystemVerilog UVM-inspired testbenches.',
    // No public link — coursework project that can't be shared publicly.
    media: { type: 'image', src: arc4Img },
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
    link: 'https://ubcroomfinder.vercel.app/',
    media: { type: 'image', src: ubcroomfinder },
    showOnExperience: true,
    showOnProjects: false,
    featured: true,
  },
  {
    id: 'modan',
    title: 'MODaN',
    date: 'January 2026 - April 2026',
    category: 'Robotics and Autonomous Systems',
    technologies: 'Python, ROS2, OpenCV, Kalman Filters',
    description:
      'Moving Obstacle Detection and Navigation — an autonomous racing perception and navigation system built on the F1Tenth platform. A real-time perception pipeline using an Intel RealSense D435i applies depth-gating and morphological filtering to segment obstacles at a deterministic 10 Hz, while a sensor-fusion engine of multi-frame Kalman filters tracks dynamic obstacle trajectories to cut state-estimation error from LiDAR noise and occlusions. The reactive navigation stack injects 3D visual data into LiDAR-based Follow-the-Gap to steer around moving obstacles in real time, and a ROS2 safety-interlock node evaluates Time-to-Collision at predicted intercept points to preemptively override motor commands and prevent high-speed collisions.',
    link: 'https://github.com/Karsten-Uy',
    media: { type: 'image', src: modan },
    showOnExperience: true,
    showOnProjects: false,
    featured: false,
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

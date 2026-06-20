// Single source of truth for the Career list.
// Consumed by the Experience page (full list) and the home post-footer
// (`featuredCareer`). Add a job here once and it shows up in both places.

import Intel from '../assets/intel.png';
import Synopsys from '../assets/synopsys.png';
import ICBC from '../assets/icbc.png';

// Section headings for the Experience page.
export const experienceContent = {
  title: 'My Experiences',
  careerHeading: 'Career',
  projectsHeading: 'Projects',
  projectCta: 'View Project',
};

export const career = [
  {
    id: 'intel',
    company: 'Intel',
    role: 'System Simulation Intern',
    date: 'May 2026 - Present',
    category: 'Hardware Development',
    technologies: 'SystemC, Bazel, Linux',
    description: 'Simulated hardware systems',
    logo: Intel,
    featured: true,
  },
  {
    id: 'synopsys',
    company: 'Synopsys Inc.',
    role: 'R&D EDA Engineering Intern',
    date: 'January 2025 - August 2025',
    category: 'Automation and EDA Development',
    technologies: 'C++, Python, Linux',
    description:
      'Worked in an IP R&D team to develop an AI-driven EDA verification flow for RTL design, creating Bash pipelines (20K+ samples) to train ML models and integrating them into a C++ RTL feature extractor with intuitive TCL scripts. Designed CLI and GUI workflows to streamline 10+ verification and compilation processes, integrated with hardware validation tools, and built a regression suite covering 100+ RTL designs. Ensured cross-platform deployment by packaging Python ML models with PyInstaller for Linux systems.',
    logo: Synopsys,
    featured: true,
  },
  {
    id: 'icbc',
    company: 'Insurance Corporation of British Columbia',
    role: 'Full Stack Software Developer Intern',
    date: 'May 2024 - December 2024',
    category: 'Automation and Software Development',
    technologies: 'C#, Blue Prism, React',
    description:
      'Developed and deployed RPA solutions using Blue Prism and Python, reducing annual costs and optimizing business processes. Collaborated with cross functional teams to manage workflows in JIRA and built scalable web applications with React, OutSystems, Flask, .NET, and SQL, boosting efficiency and user engagement. Monitored 30+ automation solutions to ensure seamless integration, maximum uptime, and enhanced productivity across enterprise systems.',
    logo: ICBC,
    featured: true,
  },
];

export const featuredCareer = career.filter((job) => job.featured);

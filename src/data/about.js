// About page content.

import karsten from '../assets/karsten.png';
import edab from '../assets/edab.png';
import devb from '../assets/devb.png';
import autob from '../assets/autob.png';
import soundb from '../assets/soundb.png';

export const aboutPage = {
  heading: 'About me',
  photo: karsten,
  intro:
    'I am a developer, producer, and designer who blends technical expertise with creative vision, bringing innovative projects to life through code, sound, and design.',
  helpHeading: 'I can help you with',
  helpCards: [
    {
      title: 'Hardware Development',
      description:
        'Design and implement workflows that accelerate semiconductor innovation by optimizing chip design, verification, and validation processes, enabling faster and more reliable hardware development.',
      logo: edab,
    },
    {
      title: 'Software Engineering',
      description:
        'Deliver end-to-end software tools that solve complex problems, from backend architecture to frontend interfaces, ensuring scalable, maintainable, and high-performance applications.',
      logo: devb,
    },
    {
      title: 'Automation',
      description:
        'Streamline complex workflows into scalable automated processes by integrating tools, scripting pipelines, and intelligent systems to improve efficiency and reduce manual effort.',
      logo: autob,
    },
    {
      title: 'Audio Engineering',
      description:
        'Create immersive soundscapes and audio tools that enhance experiences, combining technical precision with creative design for music production, games, and interactive media.',
      logo: soundb,
    },
  ],
};

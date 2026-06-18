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
  name: { first: 'Karsten', nick: 'kirby', last: 'Uy' },
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

// "What I Do" cards on the home page.
export const whatIDo = {
  heading: 'What I Do',
  cards: [
    { title: 'Hardware Development', description: 'Develop robust hardware spanning RTL, FPGA, and embedded platforms', logo: eda },
    { title: 'Software Engineering', description: 'Deliver end-to-end software tools that solve complex problems', logo: dev },
    { title: 'Automation', description: 'Streamline complex workflows into scalable automated processes', logo: auto },
    { title: 'Audio Engineering', description: 'Create soundscapes and tools for enjoyable audio experiences', logo: sound },
  ],
};

// Tech-stack carousel. The component duplicates this list for the looping effect.
export const techStack = {
  heading: 'Tech Stack',
  subtitle: 'My expertise spans various technologies to create cutting-edge solutions',
  logos: [
    postgresql, adobe, aws, bp, c, csharp, cpp, css, dvr, git,
    html, java, js, juce, netcore, linux, python, react, studioone, tailwind,
  ],
};

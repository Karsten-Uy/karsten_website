import React from 'react';
import { motion } from 'framer-motion';
import {
  ableton,
  adobe,
  aws,
  bp,
  c,
  csharp,
  cpp,
  css,
  dvr,
  git,
  html,
  java,
  js,
  juce,
  netcore,
  os,
  python,
  react,
  studioone,
  tailwind
} from '../../assets/TechLogos'; // Adjust the path as necessary

const techLogos = [
  ableton,
  adobe,
  aws,
  bp,
  c,
  csharp,
  cpp,
  css,
  dvr,
  git,
  html,
  java,
  js,
  juce,
  netcore,
  os,
  python,
  react,
  studioone,
  tailwind,
  ableton, // Duplicate for carousel effect
  adobe,
  aws,
  bp,
  c,
  csharp,
  cpp,
  css,
  dvr,
  git,
  html,
  java,
  js,
  juce,
  netcore,
  os,
  python,
  react,
  studioone,
  tailwind
];

const TechLogosCarousel = () => {
  return (
    <div className="tech-logos-carousel mb-10 mx-20">
      <h2 className="font-bold text-white text-3xl mb-6 text-center" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Tech Stack
      </h2>
      <p className="text-lg mb-6 text-center text-white mb-5" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        My expertise spans various technologies to create cutting-edge solutions
      </p>

      <motion.div className="carousel py-5">
        <motion.div 
          className="inner-carousel"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {techLogos.map((logo, index) => (
            <motion.div className="carousel-item" key={index}>
              <img src={logo} alt={`Technology ${index + 1}`} className="logo-image" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechLogosCarousel;

import React from 'react';
import { motion } from 'framer-motion';

const techLogos = [ // NOTE: it has to be doubled and to add more, change the caruousel item width to a percentage divisible by 100, so ye
  'logo1.png',
  'logo2.png',
  'logo3.png',
  'logo4.png',
  'logo5.png',
  'logo6.png',
  'logo7.png',
  'logo8.png',
  'logo9.png',
  'logo10.png',
  'logo11.png',
  'logo12.png',
  'logo13.png',
  'logo14.png',
  'logo15.png',
  'logo16.png',
  'logo17.png',
  'logo18.png',
  'logo19.png',
  'logo20.png',
  'logo21.png',
  'logo22.png',
  'logo23.png',
  'logo24.png',
  'logo25.png',
  'logo26.png',
  'logo27.png',
  'logo28.png',
  'logo29.png',
  'logo30.png',
  'logo31.png',
  'logo32.png',
  'logo33.png',
  'logo34.png',
  'logo35.png',
  'logo36.png',
  'logo37.png',
  'logo38.png',
  'logo39.png',
  'logo40.png'
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
          {techLogos.concat(techLogos).map((logo, index) => (
            <motion.div className="carousel-item" key={index}>
              <img src={`/path/to/logos/${logo}`} alt={`Technology ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechLogosCarousel;

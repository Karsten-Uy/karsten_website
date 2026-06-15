import { motion } from 'framer-motion';
import { techStack } from '../../data/home';

// Duplicate the list so the looping carousel has no visible seam.
const logos = [...techStack.logos, ...techStack.logos];

const TechLogosCarousel = () => {
  return (
    <div className="tech-logos-carousel mb-10 mx-20">
      <h2 className="font-bold text-white text-3xl mb-6 text-center pixel-shadow">
        {techStack.heading}
      </h2>
      <p className="text-lg mb-6 text-center text-white mb-5 pixel-shadow">
        {techStack.subtitle}
      </p>

      <motion.div className="carousel py-5">
        <motion.div
          className="inner-carousel"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {logos.map((logo, index) => (
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ExperiencesHome = ({ projects, handleMouseEnter, handleMouseLeave }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const gradientVariants = {
    initial: { background: 'transparent' },
    hover: { 
      background: 'linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)',
      transition: { duration: 0.5 }
    }
  };

  const transformVariants = {
    initial: { scale: 1 },
    hover: { scale: 0.95, transition: { duration: 0.3 } }
  };

  const textStyle = (isHovered) => ({
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    color: isHovered ? 'black' : 'white',
    transition: 'color 0.3s ease-in-out',
  });

  return (
    <section className="text-left mb-8 text-white">
      <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Career
      </h2>
      <Link
        to="/full-stack-developer"
        className="mb-6 flex flex-wrap relative block group justify-center"
        onMouseEnter={() => {
          handleMouseEnter('full-stack');
          setHoveredIndex('full-stack');
        }}
        onMouseLeave={() => {
          handleMouseLeave();
          setHoveredIndex(null);
        }}
      >
        <motion.div
          className="w-full flex transition-all duration-300 rounded-lg"
          variants={gradientVariants}
          initial="initial"
          animate={hoveredIndex === 'full-stack' ? 'hover' : 'initial'}
          whileHover={{ scale: 0.95 }}
        >
          <div className="w-1/2 p-4 transition-all duration-300">
            <p className="font-semibold text-xl transition-colors duration-300" style={textStyle(hoveredIndex === 'full-stack')}>
              Insurance Corporation of British Columbia
            </p>
            <h3 className="italic text-lg transition-colors duration-300" style={textStyle(hoveredIndex === 'full-stack')}>
              Full Stack Software Developer - Innovation and Automation
            </h3>
            <p className="text-white transition-colors duration-300" style={textStyle(hoveredIndex === 'full-stack')}>
              May 2024 - Present
            </p>
          </div>
          <div className="w-1/2 text-right p-4 transition-all duration-300">
            <p className="text-white font-semibold transition-colors duration-300" style={textStyle(hoveredIndex === 'full-stack')}>
              Automation and Development
            </p>
            <p className="text-white transition-colors duration-300" style={textStyle(hoveredIndex === 'full-stack')}>
              C#, Blue Prism, OutSystems
            </p>
          </div>
        </motion.div>
      </Link>

      <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Projects
      </h2>
      {projects.map((project, index) => (
        <Link
          to={project.link}
          key={index}
          className="mb-6 flex flex-wrap relative block group justify-center"
          onMouseEnter={() => {
            handleMouseEnter(project.link.slice(1));
            setHoveredIndex(project.link.slice(1));
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            setHoveredIndex(null);
          }}
        >
          <motion.div
            className="w-full flex transition-all duration-300 rounded-lg"
            variants={gradientVariants}
            initial="initial"
            animate={hoveredIndex === project.link.slice(1) ? 'hover' : 'initial'}
            whileHover={{ scale: 0.95 }}
          >
            <div className="w-1/2 p-4 transition-all duration-300">
              <h3 className="font-semibold text-xl transition-colors duration-300" style={textStyle(hoveredIndex === project.link.slice(1))}>
                {project.title}
              </h3>
              <p className="text-white transition-colors duration-300" style={textStyle(hoveredIndex === project.link.slice(1))}>
                {project.date}
              </p>
            </div>
            <div className="w-1/2 text-right p-4 transition-all duration-300">
              <p className="text-white font-semibold transition-colors duration-300" style={textStyle(hoveredIndex === project.link.slice(1))}>
                {project.class}
              </p>
              <p className="text-white transition-colors duration-300" style={textStyle(hoveredIndex === project.link.slice(1))}>
                {project.technologies}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}

      <div className="text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link 
            to="/experience"
            className="inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold"
          >
            View more
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesHome;

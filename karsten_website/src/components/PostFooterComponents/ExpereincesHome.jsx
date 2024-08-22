import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ExperiencesHome = ({ projects, handleMouseEnter, handleMouseLeave }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const gradientVariants = {
    initial: { 
      background: 'linear-gradient(157.81deg, rgba(222, 249, 250, 0) -43.27%, rgba(190, 243, 245, 0) -21.24%, rgba(157, 237, 240, 0) 12.19%, rgba(125, 231, 235, 0) 29.82%, rgba(92, 225, 230, 0) 51.94%, rgba(51, 187, 207, 0) 90.29%)'
    },
    hover: { 
      background: 'linear-gradient(157.81deg, rgba(222, 249, 250, 1) -43.27%, rgba(190, 243, 245, 1) -21.24%, rgba(157, 237, 240, 1) 12.19%, rgba(125, 231, 235, 1) 29.82%, rgba(92, 225, 230, 1) 51.94%, rgba(51, 187, 207, 1) 90.29%)',
      transition: { duration: 0.5 }
    }
  };

  const textStyle = (isHovered) => ({
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    color: isHovered ? 'black' : 'white',
    transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
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
          className="w-full flex transition-all duration-300 rounded-lg overflow-hidden"
          variants={gradientVariants}
          initial="initial"
          animate={hoveredIndex === 'full-stack' ? 'hover' : 'initial'}
          whileHover={{ scale: 0.95 }}
        >
          <div className="w-1/2 text-left p-4 flex flex-col transition-all duration-300">
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
            className="w-full flex transition-all duration-300 rounded-lg overflow-hidden"
            variants={gradientVariants}
            initial="initial"
            animate={hoveredIndex === project.link.slice(1) ? 'hover' : 'initial'}
            whileHover={{ scale: 0.95 }}
          >
            <div className="w-1/2 text-left p-4 flex flex-col transition-all duration-300">
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
            className="inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold shadow-lg" // Added shadow class here
          >
            View more
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesHome;

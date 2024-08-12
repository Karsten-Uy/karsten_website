// src/components/ExperiencesHome.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ExperiencesHome = ({ projects, handleMouseEnter, handleMouseLeave }) => {
  return (
    <section className="text-left mb-8 text-white">
      <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Career
      </h2>
      <Link
        to="/full-stack-developer"
        className="mb-6 flex flex-wrap relative block"
        onMouseEnter={() => handleMouseEnter('full-stack')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full md:w-1/2">
          <p className="font-semibold text-xl text-white">Insurance Corporation of British Columbia</p>
          <h3 className="italic text-lg text-white">Full Stack Software Developer - Innovation and Automation</h3>
          <p className="text-white">May 2024 - Present</p>
        </div>
        <div className="w-full md:w-1/2 text-right relative">
          <p className="text-white">Automation and Development</p>
          <p className="text-white">C#, Blue Prism, OutSystems</p>
        </div>
      </Link>

      <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Projects
      </h2>
      {projects.map((project, index) => (
        <Link
          to={project.link}
          key={index}
          className="mb-6 flex flex-wrap relative block"
          onMouseEnter={() => handleMouseEnter(project.link.slice(1))}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold text-xl text-white">{project.title}</h3>
            <p className="text-white">{project.date}</p>
          </div>
          <div className="w-full md:w-1/2 text-right relative">
            <p className="text-white">{project.class}</p>
            <p className="text-white">{project.technologies}</p>
          </div>
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

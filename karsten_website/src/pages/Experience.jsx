import React, { useState } from "react";
import { motion } from "framer-motion";

const tooltips = {
  'full-stack': 'As a Full Stack Software Developer, I focus on creating innovative solutions and automating processes across various platforms.',
  'bass-drum-pad': 'A responsive drum pad designed to enhance live performances by integrating seamless MIDI control with real-time audio processing.',
  'kirbequalizer': 'A custom audio equalizer plugin tailored for studio environments, offering precision sound shaping with a user-friendly interface.',
  'kirbeats-project': 'An ongoing music production project focused on creating and engineering high-quality beats for diverse genres and artists.',
  'portfolio-website': 'A personal portfolio website designed to showcase professional projects and skills, featuring a modern UI/UX design and responsive layout.'
};

const projects = [
  { title: 'Bass-Drum pad', date: 'May 2024', class: 'Development and Audio Engineering', technologies: 'C++, Arduino, MIDI', link: '/bass-drum-pad' },
  { title: 'KirbEqualizer', date: 'November 2023 – December 2023', class: 'Development and Audio Engineering', technologies: 'C++, JUCE, DSP', link: '/kirbequalizer' },
  { title: 'Kirbeats Project', date: 'July 2022 – Present', class: 'Audio Engineering', technologies: 'Studio One 5, Ableton, Adobe Suite', link: '/kirbeats-project' },
  { title: 'Portfolio Website', date: 'December 2023 - Present', class: 'Web and Mobile App Development', technologies: 'React, Tailwind CSS, JavaScript', link: '/portfolio-website' }
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const gradientVariants = {
    initial: {
      background: 'linear-gradient(157.81deg, rgba(222, 249, 250, 0) -43.27%, rgba(190, 243, 245, 0) -21.24%, rgba(157, 237, 240, 0) 12.19%, rgba(125, 231, 235, 0) 29.82%, rgba(92, 225, 230, 0) 51.94%, rgba(51, 187, 207, 0) 90.29%)'
    },
    hover: {
      background: 'linear-gradient(157.81deg, rgba(222, 249, 250, 1) -43.27%, rgba(190, 243, 245, 1) -21.24%, rgba(157, 237, 240, 1) 12.19%, rgba(125, 231, 235, 1) 29.82%, rgba(92, 225, 230, 1) 51.94%, rgba(51, 187, 207, 1) 90.29%)',
      transition: { duration: 0.5 }
    }
  };

  const textStyle = (isSelected) => ({
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    color: isSelected ? 'black' : 'white',
    transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
  });

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <section className="text-left mb-8 text-white">
      <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Career
      </h2>

      <motion.div
        className="mb-6 flex flex-wrap relative block group justify-center w-full transition-all duration-300 rounded-lg overflow-hidden"
        variants={gradientVariants}
        initial="initial"
        animate={selectedExperience === 'full-stack' ? 'hover' : 'initial'}
      >
        <div className="w-1/2 text-left p-4 flex flex-col">
          <p className="font-semibold text-xl" style={textStyle(selectedExperience === 'full-stack')}>
            Insurance Corporation of British Columbia
          </p>
          <h3 className="italic text-lg" style={textStyle(selectedExperience === 'full-stack')}>
            Full Stack Software Developer - Innovation and Automation
          </h3>
          <p className="text-white" style={textStyle(selectedExperience === 'full-stack')}>
            May 2024 - Present
          </p>
        </div>
        <div className="w-1/2 text-right p-4">
          <p className="text-white font-semibold" style={textStyle(selectedExperience === 'full-stack')}>
            Automation and Development
          </p>
          <p className="text-white" style={textStyle(selectedExperience === 'full-stack')}>
            C#, Blue Prism, OutSystems
          </p>
        </div>
      </motion.div>

      <div className="text-center mb-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button 
            onClick={() => handleExperienceClick('full-stack')}
            className="inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold"
          >
            View Experience
          </button>
        </motion.div>
      </div>

      <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Projects
      </h2>
      
      {projects.map((project, index) => (
        <div key={index} className="mb-6 flex flex-wrap relative block group justify-center">
          <motion.div
            className="w-full flex transition-all duration-300 rounded-lg overflow-hidden"
            variants={gradientVariants}
            initial="initial"
            animate={selectedExperience === project.link.slice(1) ? 'hover' : 'initial'}
          >
            <div className="w-1/2 text-left p-4 flex flex-col">
              <h3 className="font-semibold text-xl" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.title}
              </h3>
              <p className="text-white" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.date}
              </p>
            </div>
            <div className="w-1/2 text-right p-4">
              <p className="text-white font-semibold" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.class}
              </p>
              <p className="text-white" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.technologies}
              </p>
            </div>
          </motion.div>

          <div className="text-center mt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button 
                onClick={() => handleExperienceClick(project.link.slice(1))}
                className="inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold"
              >
                View Project
              </button>
            </motion.div>
          </div>
        </div>
      ))}

      {selectedExperience && (
        <div className="p-6 bg-gray-800 rounded-lg mt-8">
          <h3 className="text-2xl font-semibold mb-2">Details</h3>
          <p>{tooltips[selectedExperience]}</p>
        </div>
      )}
    </section>
  );
};

export default Experience;

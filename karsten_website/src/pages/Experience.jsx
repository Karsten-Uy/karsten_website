import React, { useState } from "react";
import { motion } from "framer-motion";
import { ICBC, karstenLogo } from "../assets"; // Adjusted imports as needed

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const textStyle = (isSelected) => ({
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    color: isSelected ? 'black' : 'white',
    transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
  });

  const projects = [
    { 
      title: 'Bass-Drum pad', 
      date: 'May 2024', 
      description: 'A responsive drum pad designed to enhance live performances by integrating seamless MIDI control with real-time audio processing.', 
      class: 'Development and Audio Engineering', 
      technologies: 'C++, Arduino, MIDI', 
      link: 'https://github.com/Karsten-Uy/rhythmicgroovemaster', 
      type: 'video', 
      media: 'https://www.youtube.com/embed/V1dI48DWWwA' // Replace with actual YouTube embed link
    },
    { 
      title: 'KirbEqualizer', 
      date: 'November 2023 – December 2023', 
      description: 'A custom audio equalizer plugin tailored for studio environments, offering precision sound shaping with a user-friendly interface.', 
      class: 'Development and Audio Engineering', 
      technologies: 'C++, JUCE, DSP', 
      link: 'https://github.com/Karsten-Uy/KirbEqualizer', 
      type: 'video', 
      media: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with actual YouTube embed link
    },
    { 
      title: 'Portfolio Website', 
      date: 'August 2024', 
      description: 'A personal portfolio website showcasing projects, experience, and skills, designed with a responsive and modern user interface.', 
      class: 'Web Development', 
      technologies: 'React, Tailwind CSS, Framer Motion', 
      link: 'https://github.com/Karsten-Uy/karsten_website', 
      type: 'image', 
      media: karstenLogo // Replace with actual image link or import
    },
    { 
      title: 'Kirbeats Project', 
      date: 'July 2022 – Present', 
      description: 'An ongoing music production project focused on creating and engineering high-quality beats for diverse genres and artists.', 
      class: 'Audio Engineering', 
      technologies: 'Studio One 5, Ableton, Adobe Suite', 
      link: 'https://www.youtube.com/channel/UCpk5lRmQTTeHq7ISLFpiwzA', 
      type: 'video', 
      media: 'https://www.youtube.com/embed/Ve9CfWA3qNA' // Replace with actual YouTube embed link
    }
  ];

  return (
    <section className="text-left text-white mt-14">
      <h1 className="font-bold text-5xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        My Experiences
      </h1>
      <hr className="border-t border-white-400 my-8" />

      <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Career
      </h2>

      <motion.div className="mb-6 flex flex-col">
        {/* Career Section Example */}
        <div className="flex mb-4">
          <div className="w-1/2 text-left p-4 flex flex-col">
            <p className="font-semibold text-xl" style={textStyle(selectedExperience === 'icbc')}>
              Insurance Corporation of British Columbia
            </p>
            <h3 className="italic text-lg" style={textStyle(selectedExperience === 'icbc')}>
              Full Stack Software Developer - Innovation and Automation
            </h3>
            <p className="text-white" style={textStyle(selectedExperience === 'icbc')}>
              May 2024 - Present
            </p>
          </div>
          <div className="w-1/2 text-right p-4 flex flex-col justify-between items-end">
            <p className="text-white font-semibold" style={textStyle(selectedExperience === 'icbc')}>
              Automation and Development
            </p>
            <p className="text-white" style={textStyle(selectedExperience === 'icbc')}>
              C#, Blue Prism, OutSystems
            </p>
          </div>
        </div>

        {/* ICBC Logo */}
        <div className="flex items-center">
          <div className="w-full text-left p-4 flex flex-col">
            <p className="text-white" style={textStyle(selectedExperience === 'icbc')}>
              As a Full Stack Software Developer, I focus on creating innovative solutions and automating processes across various platforms.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-4"
            >
              <a 
                href="/full-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold"
              >
                View Experience
              </a>
            </motion.div>
          </div>
          <div className="bg-white rounded-lg shadow-lg w-25 h-24 mr-4 px-1 mt-4">
            <img src={ICBC} alt="ICBC Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>

      <hr className="border-t border-white-400 my-8" />

      <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Projects
      </h2>

      {projects.map((project, index) => (
        <div key={index} className="mb-6 flex flex-col">
          {/* Project Section */}
          <div className="flex mb-4">
            <div className="w-1/2 text-left p-4 flex flex-col">
              <h3 className="font-semibold text-xl" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.title}
              </h3>
              <p className="text-white" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.date}
              </p>
            </div>
            <div className="w-1/2 text-right p-4 flex flex-col justify-between">
              <p className="text-white font-semibold" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.class}
              </p>
              <p className="text-white" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.technologies}
              </p>
            </div>
          </div>

          {/* Project Media Section */}
          <div className="flex">
            <div className="w-1/2 text-left p-4 flex flex-col">
              <p className="text-white" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4"
              >
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold"
                >
                  View Project
                </a>
              </motion.div>
            </div>
            <div className="w-1/2 p-4 flex justify-end items-center">
              {project.type === 'video' ? (
                <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={project.media} 
                    title={project.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img src={project.media} alt={project.title} className="w-25 h-24 object-cover rounded-lg" />
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;

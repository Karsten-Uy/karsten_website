import React, { useState } from "react";
import { motion } from "framer-motion";
import { ICBC, karstenLogo } from "../assets"; // Adjusted imports as needed
import styles from "../style";

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
      description: 'A responsive MIDI controller that enhances guitar and bass performances by allowing the integration of custom sounds. It attaches effortlessly to instruments, works with any MIDI-compatible DAW, and includes versatile controls such as hit-hat functionality. Powered by Arduino Pro Micro, it ensures reliable performance and offers open-source customization.', 
      class: 'Development and Audio Engineering', 
      technologies: 'C++, Arduino, MIDI', 
      link: 'https://github.com/Karsten-Uy/rhythmicgroovemaster', 
      type: 'video', 
      media: 'https://youtu.be/eT4vC7aBdxU' 
    },
    { 
      title: 'KirbEqualizer', 
      date: 'November 2023 – December 2023', 
      description: 'A custom audio equalizer plugin developed with JUCE, featuring highpass, lowpass, and peak filters for precise audio tailoring. It offers adjustable cutoff frequencies, user-defined slopes, center frequency and bandwidth control, gain modification, and global output gain, with visual response curve providing real-time feedback.', 
      class: 'Development and Audio Engineering', 
      technologies: 'C++, JUCE, DSP', 
      link: 'https://github.com/Karsten-Uy/KirbEqualizer', 
      type: 'video', 
      media: 'https://youtu.be/GVV8VcHw9x0' // Replace with actual YouTube embed link
    },
    { 
      title: 'Portfolio Website', 
      date: 'August 2024', 
      description: 'This website is a dynamic showcase of my projects and experiences, skillfully built with Vite, React.js, and Tailwind CSS for a seamless and stylish user experience. Dive into my portfolio, explore featured projects, and connect with me through this creatively crafted digital space.', 
      class: 'Web Development', 
      technologies: 'React, Tailwind CSS, Framer Motion', 
      link: 'https://github.com/Karsten-Uy/karsten_website', 
      type: 'image', 
      media: karstenLogo // Replace with actual image link or import
    },
    { 
      title: 'Kirbeats Project', 
      date: 'July 2022 – Present', 
      description: 'An ongoing music production project focused on creating high-quality beats across various genres, including EDM and J-Rock. It involves producing song covers with instruments like electric guitar, acoustic guitar, bass, and drums. All videos are edited using software such as DaVinci Resolve, while audio is edited with Studio One 5.', 
      class: 'Audio Engineering', 
      technologies: 'Studio One 5, Ableton, Adobe Suite', 
      link: 'https://www.youtube.com/channel/UCpk5lRmQTTeHq7ISLFpiwzA', 
      type: 'video', 
      media: 'https://www.youtube.com/embed/Ve9CfWA3qNA' // Replace with actual YouTube embed link
    }
  ];

  return (
    <section className="text-left text-white mt-14 mb-10 px-10 xl:max-w-[1280px]">
      <h1 className="font-bold text-6xl mb-4 mt-10" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        My Experiences
      </h1>
      <hr className="border-t border-white-400 my-8" />

      <h2 className="font-bold text-4xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Career
      </h2>

      <motion.div className="mb-6 flex flex-col">
        {/* Career Section Example */}
        <div className="flex mb-4">
          <div className="w-1/2 text-left p-4 flex flex-col">
            <p className="font-semibold text-2xl" style={textStyle(selectedExperience === 'icbc')}>
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
              Designed and implemented automation solutions with Blue Prism to streamline operational efficiency. Seamlessly collaborated with cross-functional teams to develop and test scalable web-based tools and applications using OutSystems. Conducted thorough testing and optimization of APIs and VMs to guarantee robust performance and system reliability. Additionally, created and maintained detailed technical documentation to support development and ensure smooth knowledge transfer.
            </p>

            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-4"
            >
              <a 
                href="/full-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold shadow-lg"
              >
                View Experience
              </a>
            </motion.div> */}

          </div>
          <div className="bg-white rounded-lg shadow-lg w-25 h-24 mr-4 px-1 mt-4">
            <img src={ICBC} alt="ICBC Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>

      <hr className="border-t border-white-400 my-8" />

      <h2 className="font-bold text-4xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
        Projects
      </h2>

      {projects.map((project, index) => (
        <div key={index} className="mb-6 flex flex-col">
          {/* Project Section */}
          <div className="flex mb-4">
            <div className="w-1/2 text-left p-4 flex flex-col ">
              <h3 className="font-semibold text-2xl" style={textStyle(selectedExperience === project.link.slice(1))}>
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
                  className="inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold shadow-lg"
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
                <img src={project.media} alt={project.title} className="w-80 h-80" />
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ICBC, karstenLogo, Synopsys, ubcroomfinder } from "../assets"; // Adjust imports as needed
import styles from "../style";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const textStyle = (isSelected) => ({
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
    color: isSelected ? "black" : "white",
    transition: "color 0.3s ease-in-out, text-shadow 0.3s ease-in-out",
  });

  const jobs = [
    {
      company: "Synopsys Inc.",
      role: "R&D EDA Engineering Intern",
      date: "January 2025 - August 2025",
      class: "EDA Development",
      technologies: "C++, Python, Linux",
      description:
        "Worked in an IP R&D team to develop an AI-driven EDA verification flow for RTL design, creating Bash pipelines (20K+ samples) to train ML models and integrating them into a C++ RTL feature extractor with intuitive TCL scripts. Designed CLI and GUI workflows to streamline 10+ verification and compilation processes, integrated with hardware validation tools, and built a regression suite covering 100+ RTL designs. Ensured cross-platform deployment by packaging Python ML models with PyInstaller for Linux systems.",
      logo: Synopsys,
    },
    {
      company: "Insurance Corporation of British Columbia",
      role: "Full Stack Software Developer Intern",
      date: "May 2024 - December 2024",
      class: "Automation and Development",
      technologies: "C#, Blue Prism, React",
      description:
        "Developed and deployed RPA solutions using Blue Prism and Python, reducing annual costs and optimizing business processes. Collaborated with cross functional teams to manage workflows in JIRA and built scalable web applications with React, OutSystems, Flask, .NET, and SQL, boosting efficiency and user engagement. Monitored 30+ automation solutions to ensure seamless integration, maximum uptime, and enhanced productivity across enterprise systems.",
      logo: ICBC,
    },
  ];

  const projects = [
    // { 
    //   title: 'Bass-Drum pad', 
    //   date: 'May 2024', 
    //   description: 'A responsive MIDI controller that enhances guitar and bass performances by allowing the integration of custom sounds. It attaches effortlessly to instruments, works with any MIDI-compatible DAW, and includes versatile controls such as hit-hat functionality. Powered by Arduino Pro Micro, it ensures reliable performance and offers open-source customization.', 
    //   class: 'Development and Audio Engineering', 
    //   technologies: 'C++, Arduino, MIDI', 
    //   link: 'https://github.com/Karsten-Uy/rhythmicgroovemaster', 
    //   type: 'video', 
    //   media: 'https://www.youtube.com/embed/eT4vC7aBdxU' // Updated embed link
    // },
    {
      title: "Helix at Home",
      date: "November 2024 - Present",
      description:
        "An Arduino-based MIDI controller simulating a multi-effect guitar pedalboard with 9 buttons, 3 potentiometers, 9 LEDs, and an expression pedal. Engineered the mechanical and electrical design, soldering components for durability in live performance. Programmed in C++ using the MIDIUSB library to deliver 30+ MIDI control signals for seamless DAW integration.",
      class: "Development and Audio Engineering",
      technologies: "C++, Arduino, MIDI",
      link: "https://github.com/Karsten-Uy/HaH",
      type: "video",
      media: "https://www.youtube.com/embed/NCPwh5nRK9E?start=10",
    },
    {
      title: "KirbEqualizer",
      date: "November 2023 - December 2023",
      description:
        "A custom audio equalizer plugin developed with JUCE, featuring highpass, lowpass, and peak filters for precise audio tailoring. It offers adjustable cutoff frequencies, user-defined slopes, center frequency and bandwidth control, gain modification, and global output gain, with visual response curve providing real-time feedback.",
      class: "Development and Audio Engineering",
      technologies: "C++, JUCE, DSP",
      link: "https://github.com/Karsten-Uy/KirbEqualizer",
      type: "video",
      media: "https://www.youtube.com/embed/GVV8VcHw9x0",
    },
    // {
    //   title: "Portfolio Website",
    //   date: "August 2024",
    //   description:
    //     "This website is a dynamic showcase of my projects and experiences, skillfully built with Vite, React.js, and Tailwind CSS for a seamless and stylish user experience. Dive into my portfolio, explore featured projects, and connect with me through this creatively crafted digital space.",
    //   class: "Web Development",
    //   technologies: "React, Tailwind CSS, Framer Motion",
    //   link: "https://github.com/Karsten-Uy/karsten_website",
    //   type: "image",
    //   media: karstenLogo,
    // },
    {
      title: "UBC Room Finder",
      date: "December 2025 - Present",
      description:
        "A full-stack web application that helps students find available classrooms and lecture spaces at UBC. It uses a Python-based scraper to ingest data from the UBC Online Timetable and a Next.js frontend backed by Supabase and deployed on Vercel, enabling user-friendly searching and filtering by date, time, and building.",
      class: "Web Development",
      technologies: "Next.js, PostgreSQL, Python",
      link: "https://github.com/Karsten-Uy/ubc_room_finder/",
      type: "image",
      media: ubcroomfinder,
    },
    {
      title: "Kirbeats Project",
      date: "July 2022 - Present",
      description:
        "An ongoing music production project focused on creating high-quality beats across various genres, including EDM and J-Rock. It involves producing song covers with instruments like electric guitar, acoustic guitar, bass, and drums. All videos are edited using software such as DaVinci Resolve, while audio is edited with Studio One 5.",
      class: "Audio Engineering",
      technologies: "Studio One 5, Ableton, Adobe Suite",
      link: "https://www.youtube.com/channel/UCpk5lRmQTTeHq7ISLFpiwzA",
      type: "video",
      media: "https://www.youtube.com/embed/Ve9CfWA3qNA",
    },
  ];

  return (
    <section className="text-left text-white mt-14 mb-10 px-10 xl:max-w-[1280px]">
      <h1
        className="font-bold text-6xl mb-4 mt-10"
        style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)" }}
      >
        My Experiences
      </h1>
      <hr className="border-t border-white-400 my-8" />

      <h2
        className="font-bold text-4xl mb-4"
        style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)" }}
      >
        Career
      </h2>

      {jobs.map((job, index) => (
        <motion.div key={index} className="mb-6 flex flex-col">
          <div className="flex mb-4">
            <div className="w-1/2 text-left p-4 flex flex-col">
              <p
                className="font-semibold text-2xl"
                style={textStyle(selectedExperience === job.company)}
              >
                {job.company}
              </p>
              <h3
                className="italic text-lg"
                style={textStyle(selectedExperience === job.company)}
              >
                {job.role}
              </h3>
              <p
                className="text-white"
                style={textStyle(selectedExperience === job.company)}
              >
                {job.date}
              </p>
            </div>
            <div className="w-1/2 text-right p-4 flex flex-col justify-between items-end">
              <p
                className="text-white font-semibold"
                style={textStyle(selectedExperience === job.company)}
              >
                {job.class}
              </p>
              <p
                className="text-white"
                style={textStyle(selectedExperience === job.company)}
              >
                {job.technologies}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full text-left p-4 flex flex-col">
              <p
                className="text-white"
                style={textStyle(selectedExperience === job.company)}
              >
                {job.description}
              </p>
            </div>
            <div className="bg-transparent shadow-lg w-[150px] h-[131px] mr-4 mt-4">
              <img
                src={job.logo}
                alt={`${job.company} Logo`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      ))}

      <hr className="border-t border-white-400 my-8" />

      <h2
        className="font-bold text-4xl mb-4"
        style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)" }}
      >
        Projects
      </h2>

      {projects.map((project, index) => (
        <div key={index} className="mb-6 flex flex-col">
          {/* Project Section */}
          <div className="flex mb-4">
            <div className="w-1/2 text-left p-4 flex flex-col ">
              <h3
                className="font-semibold text-2xl"
                style={textStyle(selectedExperience === project.link.slice(1))}
              >
                {project.title}
              </h3>
              <p
                className="text-white"
                style={textStyle(selectedExperience === project.link.slice(1))}
              >
                {project.date}
              </p>
            </div>
            <div className="w-1/2 text-right p-4 flex flex-col justify-between">
              <p
                className="text-white font-semibold"
                style={textStyle(selectedExperience === project.link.slice(1))}
              >
                {project.class}
              </p>
              <p
                className="text-white"
                style={textStyle(selectedExperience === project.link.slice(1))}
              >
                {project.technologies}
              </p>
            </div>
          </div>

          {/* Project Media Section */}
          <div className="flex">
            <div className="w-1/2 text-left p-4 flex flex-col">
              <p
                className="text-white"
                style={textStyle(selectedExperience === project.link.slice(1))}
              >
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
              {project.type === "video" ? (
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
                <img src={project.media} alt={project.title}/>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;

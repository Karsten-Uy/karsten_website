import { useState } from "react";
import { motion } from "framer-motion";
import { career, experienceContent } from "../data/experience";
import { experienceProjects } from "../data/projects";

const Experience = () => {
  const [selectedExperience] = useState(null);

  // Shadow now lives in the `pixel-shadow` CSS class; this only carries the
  // hover color transition.
  const textStyle = (isSelected) => ({
    color: isSelected ? "black" : "white",
    transition: "color 0.3s ease-in-out, text-shadow 0.3s ease-in-out",
  });

  return (
    <section className="text-left text-white mt-14 mb-10 px-10 xl:max-w-[1280px]">
      <h1 className="font-bold text-6xl mb-4 mt-10 pixel-shadow">
        {experienceContent.title}
      </h1>
      <hr className="border-t border-white-400 my-8" />

      <h2 className="font-bold text-4xl mb-4 pixel-shadow">
        {experienceContent.careerHeading}
      </h2>

      {career.map((job, index) => (
        <motion.div key={index} className="mb-6 flex flex-col">
          <div className="flex mb-4">
            <div className="w-1/2 text-left p-4 flex flex-col">
              <p className="font-semibold text-2xl pixel-shadow" style={textStyle(selectedExperience === job.company)}>
                {job.company}
              </p>
              <h3 className="italic text-lg pixel-shadow" style={textStyle(selectedExperience === job.company)}>
                {job.role}
              </h3>
              <p className="text-white pixel-shadow" style={textStyle(selectedExperience === job.company)}>
                {job.date}
              </p>
            </div>
            <div className="w-1/2 text-right p-4 flex flex-col justify-between items-end">
              <p className="text-white font-semibold pixel-shadow" style={textStyle(selectedExperience === job.company)}>
                {job.category}
              </p>
              <p className="text-white pixel-shadow" style={textStyle(selectedExperience === job.company)}>
                {job.technologies}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full text-left p-4 flex flex-col">
              <p className="text-white pixel-shadow" style={textStyle(selectedExperience === job.company)}>
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

      <h2 className="font-bold text-4xl mb-4 pixel-shadow">
        {experienceContent.projectsHeading}
      </h2>

      {experienceProjects.map((project, index) => (
        <div key={index} className="mb-6 flex flex-col">
          {/* Project Section */}
          <div className="flex mb-4">
            <div className="w-1/2 text-left p-4 flex flex-col ">
              <h3 className="font-semibold text-2xl pixel-shadow" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.title}
              </h3>
              <p className="text-white pixel-shadow" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.date}
              </p>
            </div>
            <div className="w-1/2 text-right p-4 flex flex-col justify-between">
              <p className="text-white font-semibold pixel-shadow" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.category}
              </p>
              <p className="text-white pixel-shadow" style={textStyle(selectedExperience === project.link.slice(1))}>
                {project.technologies}
              </p>
            </div>
          </div>

          {/* Project Media Section */}
          <div className="flex">
            <div className="w-1/2 text-left p-4 flex flex-col">
              <p className="text-white pixel-shadow" style={textStyle(selectedExperience === project.link.slice(1))}>
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
                  {experienceContent.projectCta}
                </a>
              </motion.div>
            </div>
            <div className="w-1/2 p-4 flex justify-end items-center">
              {project.media.type === "embed" ? (
                <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.media.src}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img src={project.media.src} alt={project.title} />
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';

const PostFooterHome = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredJob, setHoveredJob] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset button state after 200ms
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <section className={`${styles.paddingY} bg-transparent`}>
        <div className={`${styles.boxWidth} flex flex-wrap`}>
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-white text-left mb-4">
            <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
              Programming the sounds of tomorrow
            </h2>
            <p className="text-lg" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
              I specialize in engineering innovative solutions and experiences, with unwavering dedication to excellence that resonate with audiences.
            </p>
          </div>
          
          {/* Button Section */}
          <div className="w-full md:w-1/2 flex items-center justify-end mb-4">
            <Link 
              to="/about" // Link to the About page
              onClick={handleButtonClick}
              className={`inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold transition-transform duration-300 ${
                isClicked ? 'scale-95' : 'hover:scale-105'
              }`}
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-t border-gray-400 mb-8" /> {/* Solid line between sections */}

      <section className="text-center">
        {/* What I Do Section */}
        <h2 className="font-bold text-white text-3xl mb-6" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
          What I Do
        </h2>
        <div className="flex flex-wrap justify-center gap-0 px-4">
          {[
            {
              title: 'UI/UX design',
              class: 'Design intuitive and stunning interfaces that enhance user experiences',
              logo: '/path/to/uiux-logo.png', // Path to the logo image
              link: '/uiux' // Link for UI/UX design
            },
            {
              title: 'Development',
              class: 'Bring to life innovative ideas with the latest technology',
              logo: '/path/to/development-logo.png', // Path to the logo image
              link: '/development' // Link for Development
            },
            {
              title: 'Automation',
              class: 'Streamline workflows by automating repetitive tasks and processes',
              logo: '/path/to/automation-logo.png', // Path to the logo image
              link: '/automation' // Link for Automation
            },
            {
              title: 'Audio Engineering',
              class: 'Create soundscapes and tools for enjoyable audio experiences',
              logo: '/path/to/audio-engineering-logo.png', // Path to the logo image
              link: '/audio-engineering' // Link for Audio Engineering
            }
          ].map((item, index) => (
            <Link to={item.link} key={index} className="w-full lg:w-1/4 px-2 py-2 relative block">
              <div className="bg-blue-300 text-black rounded-lg shadow-md py-2">
                <div className="flex items-start mb-4">
                  <img src={item.logo} alt={`${item.title} Logo`} className="w-12 h-12 ml-3" />
                </div>
                <div>
                  <h3 className="text-left font-bold text-xl mb-2 ml-3 text-white">{item.title}</h3>
                  <p className="text-left mb-5 ml-3 text-white">{item.class}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-t border-gray-400 my-8" /> {/* Solid line between sections */}

      <section className="text-left mb-8 text-white">
        {/* Career Section */}
        <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
          Career
        </h2>
        <Link
          to="/full-stack-developer"
          className="mb-6 flex flex-wrap relative block"
          onMouseEnter={() => setHoveredJob('full-stack')}
          onMouseLeave={() => setHoveredJob(null)}
        >
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold text-xl">Full Stack Software Developer - Innovation and Automation</h3>
            <p>May 2024 - Present</p>
          </div>
          <div className="w-full md:w-1/2 text-right">
            <p className="text-white">Automation and Development</p>
            <p className="text-white">C#, Blue Prism, Outsystems</p>
          </div>
          {hoveredJob === 'full-stack' && (
            <div
              className="absolute bg-black text-white p-4 rounded-lg shadow-lg"
              style={{ top: mousePosition.y - 60, left: mousePosition.x - 150, width: '500px', transform: 'translate(-50%, -100%)' }}
            >
              <p>
                As a Full Stack Software Developer, I focus on creating innovative solutions and automating processes across various platforms. My role involves leveraging cutting-edge technologies to drive efficiency and enhance user experiences.
              </p>
            </div>
          )}
        </Link>

        {/* Projects Section */}
        <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
          Projects
        </h2>
        {[
          {
            title: 'Bass-Drum pad',
            date: 'May 2024',
            class: 'Development and Audio Engineering',
            technologies: 'C++, Arduino, MIDI',
            description: 'A responsive drum pad designed to enhance live performances by integrating seamless MIDI control with real-time audio processing.',
            link: '/bass-drum-pad' // Link for Bass-Drum pad
          },
          {
            title: 'KirbEqualizer',
            date: 'November 2023 – December 2023',
            class: 'Development and Audio Engineering',
            technologies: 'C++, JUCE, DSP',
            description: 'A custom audio equalizer plugin tailored for studio environments, offering precision sound shaping with a user-friendly interface.',
            link: '/kirbequalizer' // Link for KirbEqualizer
          },
          {
            title: 'Kirbeats Project',
            date: 'July 2022 – Present',
            class: 'Audio Engineering',
            technologies: 'Studio One 5, Ableton, Adobe Suite',
            description: 'An ongoing music production project focused on creating and engineering high-quality beats for diverse genres and artists.',
            link: '/kirbeats-project' // Link for Kirbeats Project
          },
          {
            title: 'Portfolio Website',
            date: 'December 2023 - Present',
            class: 'Web and Mobile App Development',
            technologies: 'React, Tailwind CSS, JavaScript',
            description: 'A personal portfolio website designed to showcase professional projects and skills, featuring a modern UI/UX design and responsive layout.',
            link: '/portfolio-website' // Link for Portfolio Website
          },
        ].map((project, index) => (
          <Link 
            to={project.link}
            key={index}
            className="mb-6 flex flex-wrap relative block"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="w-full md:w-1/2">
              <h3 className="font-semibold text-xl text-white">
                {project.title}
              </h3>
              <p>{project.date}</p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <p className="text-white">{project.class}</p>
              <p className="text-white">{project.technologies}</p>
            </div>
            {hoveredProject === index && (
              <div
                className="absolute bg-black text-white p-4 rounded-lg shadow-lg"
                style={{ top: mousePosition.y - 60, left: mousePosition.x - 150, width: '500px', transform: 'translate(-50%, -100%)' }}
              >
                <p>{project.description}</p>
              </div>
            )}
          </Link>
        ))}
      </section>

      <div className="text-right">
        <Link 
          to="/experience"
          onClick={handleButtonClick}
          className={`inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold transition-transform duration-300 ${
            isClicked ? 'scale-95' : 'hover:scale-105'
          }`}
        >
          View experiences
        </Link>
      </div>

      <hr className="border-t border-gray-400 my-8" /> {/* Solid line between sections */}

    </div>
  );
};

export default PostFooterHome;

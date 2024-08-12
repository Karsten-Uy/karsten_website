import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import { TechLogosCarousel } from './PostFooterComponents';


const PostFooterHome = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const tooltipRef = useRef(null);

  const tooltips = {
    'full-stack': 'As a Full Stack Software Developer, I focus on creating innovative solutions and automating processes across various platforms.',
    'bass-drum-pad': 'A responsive drum pad designed to enhance live performances by integrating seamless MIDI control with real-time audio processing.',
    'kirbequalizer': 'A custom audio equalizer plugin tailored for studio environments, offering precision sound shaping with a user-friendly interface.',
    'kirbeats-project': 'An ongoing music production project focused on creating and engineering high-quality beats for diverse genres and artists.',
    'portfolio-website': 'A personal portfolio website designed to showcase professional projects and skills, featuring a modern UI/UX design and responsive layout.'
  };

  const projects = [
    { title: 'Bass-Drum pad', date: 'May 2024', class: 'Development and Audio Engineering', technologies: 'C++, Arduino, MIDI', description: tooltips['bass-drum-pad'], link: '/bass-drum-pad' },
    { title: 'KirbEqualizer', date: 'November 2023 – December 2023', class: 'Development and Audio Engineering', technologies: 'C++, JUCE, DSP', description: tooltips['kirbequalizer'], link: '/kirbequalizer' },
    { title: 'Kirbeats Project', date: 'July 2022 – Present', class: 'Audio Engineering', technologies: 'Studio One 5, Ableton, Adobe Suite', description: tooltips['kirbeats-project'], link: '/kirbeats-project' },
    { title: 'Portfolio Website', date: 'December 2023 - Present', class: 'Web and Mobile App Development', technologies: 'React, Tailwind CSS, JavaScript', description: tooltips['portfolio-website'], link: '/portfolio-website' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hoveredItem) {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredItem]);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
    setHoveredItem(null);
  };

  const renderTooltip = () => {
    if (!isTooltipVisible || !hoveredItem) return null;

    const tooltipWidth = 500;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    let left = tooltipPosition.x + 10;
    let top = tooltipPosition.y + 10;
  
    if (left + tooltipWidth > windowWidth) {
      left = windowWidth - tooltipWidth - 10;
    }
  
    if (top + 100 > windowHeight) {
      top = windowHeight - 110;
    }
  
    return (
      <div 
        className={`fixed bg-black text-white p-4 rounded-xl shadow-lg transition-opacity duration-300 z-50 ${isTooltipVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          left: `${left}px`, 
          top: `${top}px`,
          width: `${tooltipWidth}px`,
          maxWidth: `${tooltipWidth}px`,
        }}
        ref={tooltipRef}
      >
        {tooltips[hoveredItem]}
      </div>
    );
  };

  return (
    <div>
      <section className={`${styles.paddingY} bg-transparent`}>
        <div className={`${styles.boxWidth} flex flex-wrap`}>
          <div className="w-full md:w-1/2 text-white text-left mb-4">
            <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
              Programming the sounds of tomorrow
            </h2>
            <p className="text-lg" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
              I specialize in engineering innovative solutions and experiences, with unwavering dedication to excellence that resonate with audiences.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-end mb-4">
            <Link 
              to="/about"
              className={`inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold transition-transform duration-300`}
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-t border-gray-400 mb-8" />

      <section className="text-center">
        <h2 className="font-bold text-white text-3xl mb-6" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
          What I Do
        </h2>
        <div className="flex flex-wrap justify-center gap-0 px-4">
          {[
            { title: 'UI/UX design', class: 'Design intuitive and stunning interfaces that enhance user experiences', logo: '/path/to/uiux-logo.png', link: '/uiux' },
            { title: 'Development', class: 'Bring to life innovative ideas with the latest technology', logo: '/path/to/development-logo.png', link: '/development' },
            { title: 'Automation', class: 'Streamline workflows by automating repetitive tasks and processes', logo: '/path/to/automation-logo.png', link: '/automation' },
            { title: 'Audio Engineering', class: 'Create soundscapes and tools for enjoyable audio experiences', logo: '/path/to/audio-engineering-logo.png', link: '/audio-engineering' }
          ].map((item, index) => (
            <div className="w-full lg:w-1/4 px-2 py-2 relative block" key={index}>
              <div className="bg-blue-300 text-black rounded-lg shadow-md py-2">
                <div className="flex items-start mb-4">
                  <img src={item.logo} alt={`${item.title} Logo`} className="w-12 h-12 ml-3" />
                </div>
                <div>
                  <h3 className="text-left font-bold text-xl mb-2 ml-3 text-black">{item.title}</h3>
                  <p className="text-left mb-5 ml-3 text-black">{item.class}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-gray-400 my-8" />

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
            <p className="text-white">C#, Blue Prism, Outsystems</p>
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
      </section>

      <div className="text-center">
        <Link 
          to="/experience"
          className={`inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold transition-transform duration-300`}
        >
          View more
        </Link>
      </div>

      <hr className="border-t border-gray-400 my-8" />

      
      <TechLogosCarousel/>


      {renderTooltip()}
    </div>
  );
};

export default PostFooterHome;

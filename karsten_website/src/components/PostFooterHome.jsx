// src/components/PostFooterHome.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import { AboutHomePage, TechLogosCarousel, WhatIDo, ExperiencesHome } from './PostFooterComponents';

const PostFooterHome = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const tooltipRef = useRef(null);

  const tooltips = { //tool tips need to have a dash
    'full-stack': 'Developed web applications using React, Flask, .NET, and SQL, while deploying RPA automation solutions and managing 30+ automations to optimize processes and improve efficiency.',
    'helix-at-home': 'An Arduino Pro Micro-based MIDI controller with 9 buttons, 3 knobs, 9 LEDs, and an expression pedal, sending 30 unique MIDI control signals for seamless DAW integration.',
    'kirbequalizer': 'A custom audio equalizer plugin, offering precision sound shaping with a user-friendly interface.',
    'kirbeats-project': 'An ongoing music production project focused on creating and engineering high-quality music as well as honing musical skills.',
    'portfolio-website': 'This website which is designed to showcase professional projects and skills, featuring a modern UI/UX design and responsive layout.'
  };

  const projects = [
    { title: 'Helix at Home', date: 'November 2024 - Present', class: 'Development and Audio Engineering', technologies: 'C++, Arduino, MIDI', description: tooltips['helix-at-home'], link: '/bass-drum-pad', externalLink: 'https://github.com/Karsten-Uy/HaH'},
    { title: 'KirbEqualizer', date: 'November 2023 – December 2023', class: 'Development and Audio Engineering', technologies: 'C++, JUCE, DSP', description: tooltips['kirbequalizer'], link: '/kirbequalizer', externalLink: 'https://github.com/Karsten-Uy/KirbEqualizer' },
    { title: 'Kirbeats Project', date: 'July 2022 – Present', class: 'Audio Engineering', technologies: 'Studio One 5, Ableton, Adobe Suite', description: tooltips['kirbeats-project'], link: '/kirbeats-project', externalLink: 'https://www.youtube.com/channel/UCpk5lRmQTTeHq7ISLFpiwzA' },
    { title: 'Portfolio Website', date: 'December 2023 - Present', class: 'Web and Mobile App Development', technologies: 'React, Tailwind CSS, JavaScript', description: tooltips['portfolio-website'], link: '/portfolio-website', externalLink: 'https://github.com/Karsten-Uy/karsten_website' }
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
        className={`fixed bg-black text-white p-4 rounded-xl shadow-lg transition-opacity duration-300  ${isTooltipVisible ? 'opacity-100' : 'opacity-0'}`}
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
    <div className='mt-10'>
      <AboutHomePage/>

      <hr className="border-t border-gray-400 mb-8" />

      <WhatIDo/>

      <hr className="border-t border-gray-400 my-8" />

      <ExperiencesHome 
        projects={projects} 
        handleMouseEnter={handleMouseEnter} 
        handleMouseLeave={handleMouseLeave}
      />

      <hr className="border-t border-gray-400 my-8" />

      <TechLogosCarousel/>

      {renderTooltip()}
    </div>
  );
};

export default PostFooterHome;

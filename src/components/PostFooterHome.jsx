// src/components/PostFooterHome.jsx

import React, { useState, useEffect, useRef } from 'react';
import { AboutHomePage, TechLogosCarousel, WhatIDo, ExperiencesHome } from './PostFooterComponents';
import { featuredCareer } from '../data/experience';
import { featuredProjects } from '../data/projects';

const PostFooterHome = () => {
  // `hoveredItem` holds the description text shown in the floating tooltip.
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const tooltipRef = useRef(null);

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

  const handleMouseEnter = (description) => {
    setHoveredItem(description);
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
        {hoveredItem}
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
        projects={featuredProjects}
        career={featuredCareer}
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

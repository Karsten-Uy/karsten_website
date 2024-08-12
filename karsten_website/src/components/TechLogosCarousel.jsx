import React, { useEffect, useRef } from 'react';

const TechLogosCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clone the items
    const items = carousel.children;
    const itemsToClone = Array.from(items).slice(0, items.length / 2);
    itemsToClone.forEach(item => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });

    let animationId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const scrollAmount = (progress / 50) % (carousel.scrollWidth / 2);
      carousel.scrollLeft = scrollAmount;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const logos = [
    '/path/to/tech-logo-1.png',
    '/path/to/tech-logo-2.png',
    '/path/to/tech-logo-3.png',
    '/path/to/tech-logo-4.png',
    '/path/to/tech-logo-5.png',
  ];

  return (
    <div className="overflow-hidden relative">
      <div
        ref={carouselRef}
        className="flex space-x-8 whitespace-nowrap"
      >
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Tech Logo ${i + 1}`}
            className="h-16 w-auto inline-block"
          />
        ))}
      </div>
    </div>
  );
};

export default TechLogosCarousel;
import { motion } from 'framer-motion';
import { useRef } from 'react';

const FooterHome = () => {
  const scrollToTopRef = useRef(null);

  const handleScrollToTop = () => {
    if (scrollToTopRef.current) {
      scrollToTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col mt-auto bg-gray-800 text-white py-4">
      <div className="w-full flex justify-between items-center px-4">
        {/* Left Side */}
        <div className="text-sm">
          <span>websitename ©2024 - Privacy Policy</span>
        </div>

        {/* Center Placeholder */}
        <div className="hidden md:flex-grow"></div>

        {/* Right Side */}
        <div className="text-sm">
          <span>Vancouver, Canada</span>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="flex justify-center mt-4">
        <motion.button
          onClick={handleScrollToTop}
          className="bg-primary text-white py-2 px-4 rounded-full hover:bg-blue-700"
          whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: 'easeInOut' } }}
        >
          Scroll to Top
        </motion.button>
      </div>

      {/* Element to scroll to */}
      <div ref={scrollToTopRef} />
    </section>
  );
};

export default FooterHome;

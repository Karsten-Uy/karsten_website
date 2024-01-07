import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from "../style";

const buttonVariants = {
  hover: {
    scale: 1.1,
    opacity: 0.8,
  },
  tap: {
    scale: 0.9,
  },
};

const CentreBlock = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Cursor blinking effect (continues indefinitely)
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Adjust the blinking speed here (milliseconds)

    // Cleanup function
    return () => {
      clearInterval(cursorInterval);
      setShowCursor(true);
    };
  }, []);

  return (
    <section id='home' className={`flex items-center ${styles.paddingY}`}>
      <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div>
          <p
            className="font-poppins font-bold text-white mt-4 sm:mt-0 md:mr-10 md:text-[100px] text-[60px] mb-4 sm:mb-10"
          >
            Hello, I'm Karsten
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </p>
          <p className="font-poppins font-normal text-white mt-4 sm:mt-0 md:mr-10 md:text-[40px] text-[30px] mb-4 sm:mb-10">
            Welcome to my website
          </p>
        </div>

        <div className="flex justify-end mt-4 sm:mt-0">
          <Link to="/karsten_website/about">
            <motion.p
              className="font-poppins font-bold text-white md:text-[24px] text-[15px] hover:underline cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Learn more about me
            </motion.p>
          </Link>
          <Link to="/karsten_website/projects">
            <motion.p
              className="font-poppins font-bold text-white md:text-[24px] text-[15px] mx-7 hover:underline cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              See my projects
            </motion.p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CentreBlock;

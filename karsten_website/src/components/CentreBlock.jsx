import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../style';

const buttonVariants = {
  hover: {
    scale: 1.15,
    opacity: 0.8,
  },
  tap: {
    scale: 0.9,
  },
  initial: {
    scale: 1,
  },
};

const CentreBlock = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const greeting = "Hello, I'm Karsten";
    let index = 0;

    const typingInterval = setInterval(() => {
      setText(greeting.substring(0, index));
      index++;

      if (index > greeting.length) {
        clearInterval(typingInterval);
        setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500); // Adjust the blinking speed here (milliseconds)
      }
    }, 100);

    // Cleanup function
    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section id="home" className={`flex items-center ${styles.paddingY}`}>
      <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div>
          <p
            className="font-source-code-pro font-bold text-white md:mr-10 md:text-[100px] text-[60px] mb-2 sm:mb-4"  // Adjusted margin here
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            {text}
            <span style={{ opacity: showCursor ? 1 : 0 }}>I</span>
          </p>
          <p
            className="font-source-code-pro font-normal text-white md:mr-10 md:text-[40px] text-[30px] mb-4 sm:mb-6"  // Adjusted margin here
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            Welcome to my website
          </p>
        </div>

        <div className="flex justify-end"> 
          <Link to="/karsten_website/about">
            <motion.p
              className="font-source-code-pro font-bold text-white md:text-[24px] text-[15px] hover:underline cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
            >
              Learn more about me
            </motion.p>
          </Link>
          <Link to="/karsten_website/projects">
            <motion.p
              className="font-source-code-pro font-bold text-white md:text-[24px] text-[15px] mx-9 hover:underline cursor-pointer"  // Adjusted margin here
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
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

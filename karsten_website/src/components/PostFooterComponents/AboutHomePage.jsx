import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from '/src/style';

const AboutHomePage = () => {
  return (
    <section className={`${styles.paddingY} bg-transparent`}>
      <div className={`${styles.boxWidth} flex flex-wrap`}>
        <div className="w-full md:w-1/2 text-white text-left mb-4">
          <h2 className="font-bold text-3xl mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
            Programming the sounds of tomorrow
          </h2>
          <p className="px-4 text-lg" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
            I specialize in engineering innovative solutions and experiences, with unwavering dedication to excellence that resonate with audiences.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-end mb-4">
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/karsten_website/about"
              className={`inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold`}
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutHomePage;

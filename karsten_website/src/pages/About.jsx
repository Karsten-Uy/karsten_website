import React from 'react';
import { about_block } from '../constants';
import styles from '../style';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className={[styles.flexStart].join(' ')}>
      <div className={[styles.boxWidth].join(' ')}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section id='about' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <div className="flex flex-row items-center py-[60px] px-[60px] bg-discount-gradient rounded-[100px]">
                {about_block.map((block) => (
                  <div key={block.id} className="flex items-center md:flex-row flex-col">
                    <p className="font-poppins font-normal text-white md:mr-10 md:text-[30px] text-[20px] md:mb-0 mb-10">
                      {block.content}
                    </p>
                    <img
                      src={block.img}
                      alt="Description"
                      className="w-full max-w-[600px] h-auto md:max-w-full md:w-auto md:ml-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

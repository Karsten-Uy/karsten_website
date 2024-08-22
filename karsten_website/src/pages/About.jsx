import React from 'react';
import styles from '../style';
import { motion } from 'framer-motion';
import { karsten, auto, dev, sound, uiux } from '../assets'; // Import the images

const About = () => {
  return (
    <div className={`${styles.flexStart} ${styles.paddingY} ${styles.boxWidth} flex flex-col md:flex-row`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full px-4 md:px-8"
      >
        <section id='about' className="max-w-screen-xl mx-auto">
          <div className="md:flex md:items-center md:justify-between mb-12">
            <div className="flex-1 md:pr-8">
              <h2 className="text-white font-bold text-6xl mb-6" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>About me</h2>
              <p className="text-white text-[20px] mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
                I am a developer, producer, and designer who blends technical expertise with creative vision, bringing innovative projects to life through code, sound, and design.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-end">
              <img src={karsten} alt="About Me" className="w-3/4 h-auto" />
            </div>
          </div>

          <hr className="border-t border-white-400 my-8" />

          {/* "I Can Help You With" Section */}
          <div className="">
            <h3 className="text-white font-semibold text-[30px] mb-6" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }} >I can help you with</h3>
            <div className="flex flex-col gap-4">
              {[
                { title: 'Design', class: 'I create visually captivating and user-friendly designs, seamlessly integrating them with development for flawless performance and exceptional user experiences.', logo: uiux },
                { title: 'Development', class: 'I bring innovative ideas to life with the latest technology, building scalable applications with smooth animations and interactions using Next.js, React.js, GSAP, and Framer Motion.', logo: dev },
                { title: 'Audio Production', class: 'I craft immersive soundscapes and tools that deliver clear, rich, and enjoyable audio experiences.', logo: sound },
                { title: 'Integrated Package', class: 'I provide a complete solution from concept to implementation, combining design, development, and audio production into a cohesive, high-quality package.', logo: auto }
              ].map((item, index) => (
                <div key={index} className="flex flex-col bg-blue-gradient rounded-lg shadow-md py-4 px-6">
                  <div className="flex items-start mb-4">
                    <img src={item.logo} alt={`${item.title} Logo`} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-left font-bold text-xl mb-2 text-black">{item.title}</h3>
                    <p className="text-left mb-5 text-black">{item.class}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;

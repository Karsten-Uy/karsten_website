import styles from '../style';
import { motion } from 'framer-motion';
import { aboutPage } from '../data/about';

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
              <h2 className="text-white font-bold text-6xl mb-6 pixel-shadow">{aboutPage.heading}</h2>
              <p className="text-white text-[20px] mb-4 pixel-shadow">
                {aboutPage.intro}
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-end">
              <img src={aboutPage.photo} alt="About Me" className="w-3/4 h-auto" />
            </div>
          </div>

          <hr className="border-t border-white-400 my-8" />

          {/* "I Can Help You With" Section */}
          <div className="">
            <h3 className="text-white font-semibold text-[30px] mb-6 pixel-shadow">{aboutPage.helpHeading}</h3>
            <div className="flex flex-col gap-4">
              {aboutPage.helpCards.map((item, index) => (
                <div key={index} className="flex flex-col bg-blue-gradient rounded-lg shadow-md py-4 px-6">
                  <div className="flex items-start mb-4">
                    <img src={item.logo} alt={`${item.title} Logo`} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-left font-bold text-xl mb-2 text-black">{item.title}</h3>
                    <p className="text-left mb-5 text-black">{item.description}</p>
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

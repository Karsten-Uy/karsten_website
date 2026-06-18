import styles from "../style";
import { socialMedia, contactInfo } from "../data/siteConfig";
import { motion } from 'framer-motion';
import { email } from '../assets';

const Footer = () => {
  const hoverVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <section className={`${styles.flexCenter} py-4  px-8 flex-col mt-auto`}>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center ">
        {/* Resume Button with Motion */}
        <motion.div
          whileHover="hover"
          variants={hoverVariants}
          className="mb-6 sm:mb-0 z-10"
        >
          <a
            href={contactInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-primary hover:bg-blue-gradient text-xs py-2 px-4 pixel-border"
          >
            Resume
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-4 sm:mb-0 ">
          {socialMedia.map((social) => (
            <motion.div
              key={social.id}
              whileHover="hover"
              variants={hoverVariants}
              className="flex items-center bg-primary hover:bg-primary text-xs py-2 px-2 pixel-border"
            >
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.icon}
                  alt={social.link}
                  className="w-[25px] h-[25px] object-contain cursor-pointer filter "
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Email Button with Motion */}
        <motion.div
          whileHover="hover"
          variants={hoverVariants}
          className="sm:mb-0"
        >
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center text-white bg-primary hover:bg-primary text-xs py-2 px-4 pixel-border"
          >
            <img src={email} alt="Email Icon" className="w-[25px] h-[15px] mr-2" />
            {contactInfo.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;

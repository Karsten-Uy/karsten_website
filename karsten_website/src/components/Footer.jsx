import styles from "../style";
import { socialMedia } from "../constants";
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
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-2">
        {/* Resume Button with Motion */}
        <motion.div
          whileHover="hover"
          variants={hoverVariants}
          className="mb-4 md:mb-0"
        >
          <a
            href="https://docs.google.com/document/d/1HuGXyYLFlTNfW7Z0o9UG781MEd2DqA-f/edit?usp=sharing&ouid=115570478366232685539&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-black border border-white hover:bg-blue-700 text-xs py-2 px-4 rounded-full"
          >
            Resume
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-4 md:mb-0">
          {socialMedia.map((social) => (
            <motion.div
              key={social.id}
              whileHover="hover"
              variants={hoverVariants}
              className="flex items-center mb-2"
            >
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.icon}
                  alt={social.link}
                  className="w-[25px] h-[25px] object-contain cursor-pointer"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Email Button with Motion */}
        <motion.div
          whileHover="hover"
          variants={hoverVariants}
          className="mb-4 md:mb-0"
        >
          <a
            href="mailto:karsten.uy@gmail.com"
            className="flex items-center text-white bg-black border border-white hover:bg-blue-700 text-xs py-2 px-4 rounded-full"
          >
            <img src={email} alt="Email Icon" className="w-[25px] h-[15px] mr-2" />
            karsten.uy@example.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;

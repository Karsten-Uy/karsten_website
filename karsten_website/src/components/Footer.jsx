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
    <section className={`${styles.flexCenter} py-4  px-8 flex-col mt-auto`}>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center ">
        {/* Resume Button with Motion */}
        <motion.div
          whileHover="hover"
          variants={hoverVariants}
          className="mb-6 sm:mb-0 z-10"
        >
          <a
            href="https://docs.google.com/document/d/1HuGXyYLFlTNfW7Z0o9UG781MEd2DqA-f/edit?usp=sharing&ouid=115570478366232685539&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-primary border border-white hover:bg-blue-gradient text-xs py-2 px-4 rounded-lg"
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
              className="flex items-center bg-primary border border-white hover:bg-primary text-xs py-2 px-2 rounded-lg"
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
            href="mailto:karsten.uy@gmail.com"
            className="flex items-center text-white bg-primary border border-white hover:bg-primary text-xs py-2 px-4 rounded-lg"
          >
            <img src={email} alt="Email Icon" className="w-[25px] h-[15px] mr-2" />
            karsten.uy@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;

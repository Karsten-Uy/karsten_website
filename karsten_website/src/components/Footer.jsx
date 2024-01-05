import styles from "../style";
import { socialMedia } from "../constants";
import { motion } from 'framer-motion';

const Footer = () => {
  const hoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <motion.div
            key={social.id}
            whileHover="hover"
            variants={hoverVariants}
            className="hover:scale-110"
          >
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <img
                src={social.icon}
                alt={social.link}
                className={`w-[30px] h-[30px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
              />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Footer;

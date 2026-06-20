import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from '../../style';
import { aboutIntro } from '../../data/home';

const AboutHomePage = () => {
  return (
    <section className={`${styles.paddingY} bg-transparent`}>
      <div className={`${styles.boxWidth} flex flex-wrap`}>
        <div className="w-full md:w-1/2 text-white text-left mb-4">
          <h2 className="font-bold text-3xl mb-4 pixel-shadow">
            {aboutIntro.title}
          </h2>
          <p className="px-4 text-lg pixel-shadow">
            {aboutIntro.body}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-end mb-4">
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={aboutIntro.ctaTo}
              className={`inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold`}
            >
              {aboutIntro.ctaLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutHomePage;

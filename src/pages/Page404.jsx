import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../style';
import { notFound } from '../data/notFound';
import { pageFade } from '../utils/motion';

const Page404 = () => {
  return (
    <div className={styles.flexStart}>
      <div className={styles.boxWidth}>
        <motion.div {...pageFade}>
          <section className={`flex justify-center items-center ${styles.paddingY}`}>
            <div className="flex flex-col items-center xl:px-0 sm:px-16 px-6">
              <div className={`flex flex-col items-center py-[60px] px-[60px] bg-discount-gradient rounded-[10px]`}>
                <h1 className="font-source-code-pro font-bold text-white mt-4 sm:mt-0 md:text-[80px] text-[60px] mb-4 sm:mb-10 pixel-shadow">
                  {notFound.code}
                </h1>

                <p className="font-source-code-pro font-normal text-white md:text-[24px] text-[15px] mb-4 sm:mb-10 pixel-shadow">
                  {notFound.message}
                </p>

                <p className="font-source-code-pro font-normal text-white md:text-[24px] text-[15px] mb-4 sm:mb-10">
                  {notFound.before}
                  <Link
                    to={notFound.linkTo}
                    className={`text-blue-500 hover:text-blue-700 transition-colors duration-300 mr-1`}
                  >
                    {notFound.linkText}
                  </Link>
                  {notFound.after}
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Page404;

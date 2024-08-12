import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link
import styles from '../style';

const Page404 = () => {
  return (
    <div className={styles.flexStart}>
      <div className={styles.boxWidth}>
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className={`flex justify-center items-center ${styles.paddingY}`}>
            <div className="flex flex-col items-center xl:px-0 sm:px-16 px-6">
              <div className={`flex flex-col items-center py-[60px] px-[60px] bg-discount-gradient rounded-[10px]`}>
                <h1
                  className={`font-source-code-pro font-bold text-white mt-4 sm:mt-0 md:text-[80px] text-[60px] mb-4 sm:mb-10 ${styles.textShadow}`}
                >
                  404
                </h1>

                <p
                  className={`font-source-code-pro font-normal text-white md:text-[24px] text-[15px] mb-4 sm:mb-10 ${styles.textShadow}`}
                >
                  Oops! The page you’re looking for doesn’t exist.
                </p>

                <p
                  className={`font-source-code-pro font-normal text-white md:text-[24px] text-[15px] mb-4 sm:mb-10 ${styles.textShadow}`}
                >
                  You might want to check out the{' '}
                  <Link
                    to="/"
                    className={styles.homepageLink}
                    onMouseOver={(e) => Object.assign(e.target.style, styles.homepageLinkHover)}
                    onMouseOut={(e) => Object.assign(e.target.style, styles.homepageLink)}
                  >
                    homepage
                  </Link> 
                   instead.
                </p>

                <p
                  className={`font-source-code-pro font-normal text-white text-[40px] mt-4 ${styles.textShadow}`}
                >
                  😔
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

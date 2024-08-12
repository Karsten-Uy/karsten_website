import React from 'react';
import { CentreBlock } from '../components';
import styles from '../style';
import {motion} from 'framer-motion'

const Home = () => {
 

  return (
    <div className={[styles.flexStart].join(' ')}>
      <div className={[styles.boxWidth].join(' ')}>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
        >
          <CentreBlock />
        </motion.div>
        
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { KirbEqualizer, AIVocalModels, RGM} from '../components';
import styles from '../style'; 
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter} flex items-center`}>
        <div className={[styles.boxWidth].join(' ')}>
          <div className='flex flex-col items-center'>
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <RGM />
              <KirbEqualizer />
              <AIVocalModels />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

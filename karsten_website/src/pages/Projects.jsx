import React from 'react';
import { KirbEqualizer, AIVocalModels } from '../components';
import styles from '../style'; 

const Projects = () => {
  return (
    <div>
      <div className={`bg-blue-gradient ${styles.paddingX} ${styles.flexCenter} flex items-center`}>
        <div className={[styles.boxWidth].join(' ')}>
          <div className='flex flex-col items-center'>
            <KirbEqualizer />
            <AIVocalModels />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from 'react';
import { KirbEqualizer, AIVocalModels } from '../components';
import styles from '../style'; // Make sure to import your styles

const Projects = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={[styles.boxWidth].join(' ')}>
          <KirbEqualizer />
          <AIVocalModels />
        </div>
      </div>
    </div>
  );
}

export default Projects;

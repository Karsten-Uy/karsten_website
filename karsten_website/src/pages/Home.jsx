import React from 'react';
import { CentreBlock } from '../components';
import styles from '../style';

const Home = () => {
  return (
    <div className={["bg-blue-gradient", styles.flexStart].join(' ')}>
      <div className={[styles.boxWidth].join(' ')}>
        <CentreBlock />
      </div>
    </div>
  );
};

export default Home;

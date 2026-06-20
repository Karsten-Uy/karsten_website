import { motion } from 'framer-motion';
import { CentreBlock } from '../components';
import styles from '../style';
import { pageFade } from '../utils/motion';

const Home = () => {
  return (
    <div className={styles.flexStart}>
      <div className={styles.boxWidth}>
        <motion.div {...pageFade}>
          <CentreBlock />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

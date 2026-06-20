import { motion } from 'framer-motion';
import styles from '../style';
import ProjectCard from '../components/ProjectCard';
import { cardProjects } from '../data/projects';
import { pageFade } from '../utils/motion';

const Projects = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter} flex items-center`}>
        <div className={styles.boxWidth}>
          <div className='flex flex-col items-center'>
            <motion.div {...pageFade}>
              {cardProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

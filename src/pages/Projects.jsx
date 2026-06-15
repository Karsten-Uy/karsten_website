import { motion } from 'framer-motion';
import styles from '../style';
import ProjectCard from '../components/ProjectCard';
import { cardProjects } from '../data/projects';

const Projects = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter} flex items-center`}>
        <div className={[styles.boxWidth].join(' ')}>
          <div className='flex flex-col items-center'>
            <motion.div
              initial={{ opacity: 0 }} // Start with invisible
              animate={{ opacity: 1 }} // Fade in to fully visible
              exit={{ opacity: 0 }} // Fade out when unmounting
              transition={{ duration: 0.5 }} // Duration of the fade effect
            >
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

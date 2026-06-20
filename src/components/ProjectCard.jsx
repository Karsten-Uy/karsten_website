import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import play from '../assets/play.png';
import pause from '../assets/pause.png';

// One audio clip with its own play/pause state. Kept as a leaf component so each
// clip owns its own hooks (supports any number of clips per project).
const AudioClip = ({ clip, index }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    if (audioRef.current.paused || audioRef.current.ended) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`flex items-start flex-row ${index === 0 ? 'justify-end mt-6' : 'justify-center mt-10'}`}>
      <div className="rounded-full bg-button-blue p-4 mr-4 flex-grow flex items-center">
        <button onClick={toggle}>
          <img src={isPlaying ? pause : play} decoding="async" className="w-[40px]" alt="Play button" />
        </button>
        <audio ref={audioRef} src={clip.src} preload="none" onClick={toggle} />
        <p className="font-source-code-pro font-normal ml-4 text-right text-white ml-2 md:text-[24px] text-[15px]">
          {clip.label}
        </p>
      </div>
    </div>
  );
};

const AudioCard = ({ project }) => (
  <section id={project.id} className={`flex flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-col items-center py-[60px] px-[60px] bg-discount-gradient rounded-[100px]">
        <div className="flex flex-col">
          <p className="font-source-code-pro font-bold text-white mb-3 md:text-[50px] text-[24px] text-center">
            {project.title}
          </p>
          <p className="font-source-code-pro font-normal text-white md:text-[24px] text-[15px] text-center">
            {project.media.heading}
          </p>

          {project.media.clips.map((clip, index) => (
            <AudioClip key={index} clip={clip} index={index} />
          ))}

          <p className="font-source-code-pro font-normal mt-10 text-white md:text-[24px] text-[15px] text-left">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  </section>
);

const MediaCard = ({ project }) => {
  const videoRef = useRef(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleButtonClick = (link) => {
    window.open(link, '_blank');
    setButtonClicked(true);
  };

  return (
    <section id={project.id} className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col items-center py-[60px] px-[60px] bg-discount-gradient rounded-[100px]">
          <div className="flex items-center flex-col">
            <p className="font-source-code-pro font-bold text-white mb-10 md:ml-10 md:text-[50px] text-[24px]">
              {project.title}
            </p>

            {project.media.type === 'image' ? (
              <img
                src={project.media.src}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[1100px] h-auto rounded-[10px]"
              />
            ) : (
              <video
                ref={videoRef}
                src={project.media.src}
                preload="none"
                className="w-full max-w-[1100px] h-auto rounded-[10px]"
                onClick={handleVideoClick}
              />
            )}

            <p className="font-source-code-pro font-normal text-white mt-10 md:ml-10 md:text-[24px] text-[15px]">
              {project.description}
            </p>

            {project.link && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`mt-10 rounded-box py-[10px] px-[20px] ${buttonClicked ? 'bg-button-blue' : ''}`}
                onClick={() => handleButtonClick(project.link)}
              >
                <button className="button">
                  <div className="centered-text">
                    <p className="font-source-code-pro font-normal text-white md:text-[24px] text-[15px]">
                      Repository Link
                    </p>
                  </div>
                </button>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Data-driven project card. Renders the right media variant based on
// `project.media.type` ('audio' | 'video' | 'image'). Replaces the old
// KirbEqualizer / RGM / AIVocalModels components.
const ProjectCard = ({ project }) => {
  if (project.media?.type === 'audio') {
    return <AudioCard project={project} />;
  }
  return <MediaCard project={project} />;
};

export default ProjectCard;

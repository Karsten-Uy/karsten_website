import React, { useRef, useState } from 'react';
import { KirbEqualizerConts } from '../constants';
import styles from '../style';

import { motion } from 'framer-motion';

const KirbEqualizer = () => {
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
    <section id='KirbEqualizer' className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col items-center py-[60px] px-[60px] bg-discount-gradient rounded-[100px]">
          {KirbEqualizerConts.map((block) => (
            <div key={block.id} className="flex items-center flex-col">
              <p className="font-poppins font-bold text-white mb-10 md:ml-10 md:text-[50px] text-[24px]">
                {block.id}
              </p>
              <video
                ref={videoRef}
                src={block.vid}
                className='w-full max-w-[1100px] h-auto rounded-[10px]'
                onClick={handleVideoClick}
              />
              <p className="font-poppins font-normal text-white mt-10 md:ml-10 md:text-[24px] text-[15px]">
                {block.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`mt-10 rounded-box py-[10px] px-[20px] ${buttonClicked ? 'bg-button-blue' : ''}`}
                onClick={() => handleButtonClick(block.link)}
              >
                <button className="button">
                  <div className="centered-text">
                    <p className="font-poppins font-normal text-white md:text-[24px] text-[15px]">
                      Repository Link
                    </p>
                  </div>
                </button>
              </motion.button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KirbEqualizer;

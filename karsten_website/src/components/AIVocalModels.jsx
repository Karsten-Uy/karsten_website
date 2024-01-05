import React, { useRef, useState } from 'react';
import { AIVocalModelsConsts, play_button_components } from '../constants';
import styles from '../style';

const AIVocalModels = () => {
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioClick = (audioRef) => {
    if (audioRef.current.paused || audioRef.current.ended) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id='AIVocalModels' className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col items-center py-[60px] px-[60px] bg-discount-gradient rounded-[100px]">
          {AIVocalModelsConsts.map((block) => (
            <div key={block.id} className='flex items-center flex-col'>
              <p className="font-poppins font-normal text-white mb-10 md:ml-10 md:text-[50px] text-[24px]">
                {block.id}
              </p>
              <p className="font-poppins font-normal text-white md:ml-10 md:text-[24px] text-[15px]">
                {block.labelTop}
              </p>
              <div className='flex items-center flex-row'>
                <button onClick={() => handleAudioClick(audioRef1)}>
                  {isPlaying ? 
                    <img src={play_button_components.play} alt="Play" /> :
                    <img src={play_button_components.pause} alt="Pause" />
                  }
                </button>
                <audio
                  ref={audioRef1}
                  src={block.audio1}
                  onClick={() => handleAudioClick(audioRef1)}
                />
                <p className="font-poppins font-normal text-white md:ml-10 md:text-[24px] text-[15px]">
                  {block.label1}
                </p>
              </div>
              <div className='flex items-center flex-row'>
                <button onClick={() => handleAudioClick(audioRef2)}>
                  {isPlaying ? 
                    <img src={play_button_components.play} alt="Play" /> :
                    <img src={play_button_components.pause} alt="Pause" />
                  }
                </button>
                <audio
                  ref={audioRef2}
                  src={block.audio2}
                  onClick={() => handleAudioClick(audioRef2)}
                />
                <p className="font-poppins font-normal text-white md:ml-10 md:text-[24px] text-[15px]">
                  {block.label2}
                </p>
              </div>
              <p className="font-poppins font-normal text-white mt-10 md:ml-10 md:text-[24px] text-[15px]">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIVocalModels;

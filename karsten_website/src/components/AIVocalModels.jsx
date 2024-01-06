import React, { useRef, useState } from 'react';
import { AIVocalModelsConsts, play_button_components } from '../constants';
import styles from '../style';

const playButtonComponents = play_button_components[0];

const AIVocalModels = () => {
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const handleAudioClick = (audioRef, setIsPlaying) => {
    if (audioRef.current.paused || audioRef.current.ended) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const getPlayButtonImage = (isPlaying) => {
    return isPlaying ? playButtonComponents.pause : playButtonComponents.play;
  };

  return (
    <section id='AIVocalModels' className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col items-center py-[60px] px-[60px] bg-discount-gradient rounded-[100px]">
          {AIVocalModelsConsts.map((block) => (
            <div key={block.id} className='flex flex-col'>
              <p className="font-poppins font-normal text-white mb-10 md:text-[50px] text-[24px] text-center">
                {block.id}
              </p>

              <p className="font-poppins font-normal text-white md:text-[24px] text-[15px] text-center">
                {block.labelTop}
              </p>

              <div className='flex items-start flex-row justify-end mt-10'>
                <div className="rounded-full bg-button-blue p-4 mr-4 flex-grow flex items-center">
                  <button onClick={() => handleAudioClick(audioRef1, setIsPlaying1)}>
                    <img src={getPlayButtonImage(isPlaying1)} className='w-[40px]'/>
                  </button>
                  <audio
                    ref={audioRef1}
                    src={block.audio1}
                    onClick={() => handleAudioClick(audioRef1, setIsPlaying1)}
                  />
                  <p className="font-poppins font-normal ml-4 text-right text-white ml-2 md:text-[24px] text-[15px]">
                    {block.label1}
                  </p>
                </div>
              </div>

              <div className='flex items-start flex-row justify-center mt-10'>
                <div className="rounded-full bg-button-blue p-4 mr-4 flex-grow flex items-center">
                  <button onClick={() => handleAudioClick(audioRef2, setIsPlaying2)}>
                    <img src={getPlayButtonImage(isPlaying2)} className='w-[40px]'/>
                  </button>
                  <audio
                    ref={audioRef2}
                    src={block.audio2}
                    onClick={() => handleAudioClick(audioRef2, setIsPlaying2)}
                  />
                  <p className="font-poppins font-normal ml-4 text-right text-white ml-2 md:text-[24px] text-[15px]">
                    {block.label2}
                  </p>
                </div>
              </div>

              <p className="font-poppins font-normal mt-10 text-white md:text-[24px] text-[15px] text-left">
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

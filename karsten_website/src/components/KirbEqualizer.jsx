import React from 'react';
import { KirbEqualizerConts } from '../constants';
import styles from '../style';

const KirbEqualizer = () => {
  return (
      <section id='KirbEqualizer' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-col items-center py-[60px] px-[60px] bg-discount-gradient rounded-[100px]">
            {KirbEqualizerConts.map((block) => (
              <div key={block.id} className="flex items-center md:flex-row flex-col">
                <video 
                  src={block.vid}
                  className='w-full max-w-[800px] h-auto'
                  />
                <p className="font-poppins font-normal text-white mt-4 sm:mt-0 md:ml-10 md:text-[24px] text-[15px]">
                    {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default KirbEqualizer;

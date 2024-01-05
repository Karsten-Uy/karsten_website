import React from 'react';
import { about_block } from "../constants";
import styles from "../style";

const About = () => {
  return (
    <div className={["bg-blue-gradient", styles.flexStart].join(' ')}>
      <div className={[styles.boxWidth].join(' ')}>
        <section id='about' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[60px] px-[60px] bg-discount-gradient rounded-[100px]">
              {about_block.map((block) => (
                <div key={block.id} className="flex items-center md:flex-row flex-col">
                  <img
                    src={block.img}
                    alt="Description"
                    className="w-full max-w-[600px] h-auto md:max-w-full md:w-auto md:mr-4" 
                  />
                  <p className="font-poppins font-normal text-white mt-4 sm:mt-0 md:ml-10 md:text-[24px] text-[15px]">{block.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>

  );
};

export default About;

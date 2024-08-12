import React from 'react';
import { auto, dev, sound, uiux } from '../../assets';

const WhatIDo = () => {
  return (
    <section className="text-center">
        <h2 className="font-bold text-white text-3xl mb-6" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
          What I Do
        </h2>
        <div className="flex flex-wrap justify-center gap-0 px-4">
          {[
            { title: 'UI/UX design', class: 'Design intuitive interfaces that enhance user experiences', logo: uiux, link: '/uiux' },
            { title: 'Development', class: 'Bring to life innovative ideas with the latest technology', logo: dev, link: '/development' },
            { title: 'Automation', class: 'Streamline workflows by automating repetitive tasks and processes', logo: auto, link: '/automation' },
            { title: 'Audio Engineering', class: 'Create soundscapes and tools for enjoyable audio experiences', logo: sound, link: '/audio-engineering' }
          ].map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 flex ">
              <div className="flex flex-col justify-between w-full bg-primary rounded-lg shadow-md py-4 mx-2 my-2">
                <div className="flex items-start mb-4">
                  <img src={item.logo} alt={`${item.title} Logo`} className="w-12 h-12 ml-4" />
                </div>
                <div>
                  <h3 className="text-left font-bold text-xl mb-2 mx-3 text-nonclickblue">{item.title}</h3>
                  <p className="text-left mb-5 mx-3 text-nonclickblue">{item.class}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default WhatIDo;

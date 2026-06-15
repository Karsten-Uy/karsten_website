import { whatIDo } from '../../data/home';

const WhatIDo = () => {
  return (
    <section className="text-center">
        <h2 className="font-bold text-white text-3xl mb-6 pixel-shadow">
          {whatIDo.heading}
        </h2>
        <div className="flex flex-wrap justify-center gap-0 px-4">
          {whatIDo.cards.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 flex ">
              <div className="flex flex-col justify-between w-full bg-primary rounded-lg shadow-md py-4 mx-2 my-2">
                <div className="flex items-start mb-4">
                  <img src={item.logo} alt={`${item.title} Logo`} className="w-12 h-12 ml-4" />
                </div>
                <div>
                  <h3 className="text-left font-bold text-xl mb-2 mx-3 text-nonclickblue">{item.title}</h3>
                  <p className="text-left mb-5 mx-3 text-nonclickblue">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default WhatIDo;

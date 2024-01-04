import styles from "../style";
import { home_description_block } from "../constants";

const CentreBlock = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[60px] px-[60px] bg-discount-gradient rounded-[70px] mb-2">
        {home_description_block.map((block) => (
          <div key={block.id} className="flex items-center">
            <img
              src={block.img}
              alt="Description"
              style={{ width: '600px', height: '600px', marginRight: '20px' }} // Adjust the width, height, and margin as needed
            />
            <p className="font-poppins font-normal text-[35px] text-white ml-10" >{block.content}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default CentreBlock;
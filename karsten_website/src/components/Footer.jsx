import styles from "../style";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="flex flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index) => (
        <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
          <img
            src={social.icon}
            alt={social.link}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
          />
        </a>
      ))}
    </div>
  </section>
);

export default Footer;
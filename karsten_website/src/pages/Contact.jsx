import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {motion} from 'framer-motion'
import styles from '../style';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Website Email', 'template_jngaswu', form.current, 'ikqlTILyAQbKMyOWC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={["bg-blue-gradient", styles.flexStart].join(' ')}>
      <div className={[styles.boxWidth].join(' ')}>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </motion.div>
      </div>
    </div>


    
  );
};

export default Contact
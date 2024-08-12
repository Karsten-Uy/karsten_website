import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import styles from '../style';

const buttonVariants = {
  hover: {
    scale: 1.15,
    opacity: 0.8,
  },
  tap: {
    scale: 0.9,
  },
  initial: {
    scale: 1,
  },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('Website Email', 'template_jngaswu', form.current, 'ikqlTILyAQbKMyOWC')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.flexStart}>
      <div className= {[styles.boxWidth].join('flex flex-col items-center justify-center')}>
        <motion.div
          initial={{ opacity: 0 }} // Start with invisible
          animate={{ opacity: 1 }} // Fade in to fully visible
          exit={{ opacity: 0 }} // Fade out when unmounting
          transition={{ duration: 0.5 }} // Duration of the fade effect
        >
          <section id='contact' className={`flex justify-center md:flex-row flex-col ${styles.paddingY} w-full`}>
            <div className={`flex-1 flex flex-col items-center xl:px-0 sm:px-16 px-6`}>
              <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full'>
                <label
                  className="mt-2 mb-2 font-source-code-pro font-normal text-white md:text-[24px] text-[15px]"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="p-2 mb-4 w-full min-w-[300px] bg-discount-gradient border border-gray-600 rounded-lg text-white"
                />

                <label
                  className="mt-2 mb-2 font-source-code-pro font-normal text-white md:text-[24px] text-[15px]"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="p-2 mb-4 w-full min-w-[300px] bg-discount-gradient border border-gray-600 rounded-lg text-white"
                />

                <label
                  className="mt-2 mb-2 font-source-code-pro font-normal text-white md:text-[24px] text-[15px]"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="p-2 mb-4 w-full min-w-[300px] bg-discount-gradient border border-gray-600 rounded-lg text-white"
                />

                <div className={styles.formSubmitButtonContainer}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.formSubmitButton}
                    onClick={sendEmail}
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                  >
                    <div className="mt-6 rounded-box py-[8px] px-[16px]">
                      <button className={styles.button}>
                        <div className={styles.centeredText}>
                          <p
                            className="font-source-code-pro font-normal text-white md:text-[24px] text-[15px]"
                          >
                            Send
                          </p>
                        </div>
                      </button>
                    </div>
                  </motion.button>
                </div>
              </form>
            </div>

            <div className='flex flex-col md:ml-20 ml-0 md:mt-0 mt-5'>
              <div className={`flex flex-col items-center px-6 w-full`}>
                <div className="flex flex-col items-center justify-center py-[40px] px-[20px] bg-discount-gradient rounded-[10px] w-full text-center h-[400px]">
                  <h1
                    className="font-source-code-pro font-bold text-white md:text-[40px] text-[30px] mb-4"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                  >
                    Contact Me
                  </h1>

                  <p
                    className="font-source-code-pro font-normal text-white md:text-[20px] text-[15px] mb-4"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                  >
                    Welcome to the contact page! Feel free to reach out with questions, project ideas, or just to say hello
                    using the form below. I'll get back to you as soon as possible. Excited to connect!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

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
      <div className={styles.boxWidth}>
        <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <section id='about' className={`flex justify-center md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 flex flex-col items-center xl:px-0 sm:px-16 px-6`}>
              <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <label
                  className="mt-2 mb-2 font-source-code-pro font-normal text-white md:text-[24px] text-[15px]"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Name
                </label>
                <input type="text" name="user_name" />

                <label
                  className="mt-2 mb-2 font-source-code-pro font-normal text-white md:text-[24px] text-[15px]"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Email
                </label>
                <input type="email" name="user_email" />

                <label
                  className="mt-2 mb-2 font-source-code-pro font-normal text-white md:text-[24px] text-[15px]"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Message
                </label>
                <textarea name="message" />

                <div className={styles.formSubmitButtonContainer}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.formSubmitButton}
                    onClick={sendEmail}
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                  >
                    <div className="mt-6 rounded-box py-[10px] px-[20px]">
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
              <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-col items-center py-[60px] px-[60px] bg-discount-gradient rounded-[10px]">
                  <h1
                    className="font-source-code-pro font-bold text-white mt-4 sm:mt-0 md:mr-10 md:text-[50px] text-[40px] mb-4 sm:mb-10"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                  >
                    Contact Me
                  </h1>

                  <p
                    className="font-source-code-pro font-normal text-white sm:mt-0 md:mr-10 md:text-[24px] text-[15px] mb-4 sm:mb-10"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                  >
                    Welcome to the contact page! Feel free to reach out with questions, project ideas, or just to say hello
                    using the form below or using the email below. I'll get back to you as soon as possible. Excited to
                    connect!
                  </p>

                  <div className='flex items-center md:flex-row flex-col'>
                    <p
                      className="font-source-code-pro font-normal text-white mt-4 md:mr-10 mr-5 md:text-[24px] text-[15px] "
                      style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                    >
                      Phone: (604)-565-8120
                    </p>

                    <p
                      className="font-source-code-pro font-normal text-white mt-4 md:text-[24px] text-[15px] "
                      style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                    >
                      Email: karsten.uy@gmail.com
                    </p>
                  </div>
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

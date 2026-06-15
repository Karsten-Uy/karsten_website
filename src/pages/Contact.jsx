import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../style';

const ConfirmationModal = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm mx-auto"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
      <p>Your message has been sent successfully.</p>
      <button
        onClick={onClose}
        className="mt-6 px-4 py-2 bg-blue-gradient text-black rounded-lg font-semibold"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

const FailureModal = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="bg-red-500 p-8 rounded-lg shadow-lg text-center max-w-sm mx-auto text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Failed to Send</h2>
      <p>There was an issue sending your message. Please try again later.</p>
      <button
        onClick={onClose}
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true); // Disable the button during submission

    emailjs
      .sendForm('Website Email', 'template_jngaswu', form.current, 'ikqlTILyAQbKMyOWC')
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Show the success modal
          setIsFailed(false);
        },
        (error) => {
          console.error(error.text);
          setIsFailed(true); // Show the failure modal
          setIsSubmitted(false);
        }
      );
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    setIsFailed(false);
    setIsButtonDisabled(false); // Re-enable the button after the modal closes
  };

  return (
    <div className={[styles.flexStart, styles.boxWidth, styles.marginX]}>
      <div className={[styles.boxWidth].join('flex flex-col items-center justify-center')}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section
            id="contact"
            className={`flex justify-center md:flex-row flex-col items-center ${styles.paddingY} w-full`}
          >
            <div className={`flex-1 flex flex-col xl:px-0 sm:px-16 px-6`}>
              <div className={`flex flex-col items-start px-6 w-full mb-8 ${styles.paddingX}`}>
                <h1
                  className="font-source-code-pro font-bold text-white text-6xl mb-4"
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

              <form ref={form} onSubmit={sendEmail} className={[styles.paddingX, 'flex flex-col w-full']}>
                <label className="mt-2 mb-2 text-white text-[20px]">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="p-2 mb-4 w-full bg-discount-gradient border border-gray-600 rounded-lg text-white"
                  required
                />

                <label className="mt-2 mb-2 text-white text-[20px]">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="p-2 mb-4 w-full bg-discount-gradient border border-gray-600 rounded-lg text-white"
                  required
                />

                <label className="mt-2 mb-2 text-white text-[20px]">Message</label>
                <textarea
                  name="message"
                  className="p-2 mb-4 w-full bg-discount-gradient border border-gray-600 rounded-lg text-white"
                  style={{ height: '200px' }}
                  required
                />

                <div className="flex justify-center mt-6">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button
                      type="submit"
                      className={`inline-block px-6 py-3 bg-blue-gradient text-black rounded-lg text-lg font-semibold ${
                        isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={isButtonDisabled} // Disable the button
                    >
                      Send
                    </button>
                  </motion.div>
                </div>
              </form>

            </div>
          </section>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSubmitted && <ConfirmationModal onClose={handleModalClose} />}
        {isFailed && <FailureModal onClose={handleModalClose} />}
      </AnimatePresence>
    </div>
  );
};

export default Contact;

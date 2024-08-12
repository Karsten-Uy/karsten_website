import React, { useState, useEffect, useRef } from 'react';
import styles from '../style';

const CentreBlock = () => {
  const titles = [
    "Software Engineer",
    "Full Stack Developer",
    "Music Producer",
    "Lifeguard"
  ];

  const [greeting] = useState("Hello, I'm Karsten");
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const typingRef = useRef();

  useEffect(() => {
    const pauseBeforeDelete = 2000;
    const pauseBeforeNext = 2000;

    const typeTitle = () => {
      if (!deleting) {
        if (charIndex < titles[titleIndex].length) {
          setTitleText(titles[titleIndex].substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          typingRef.current = setTimeout(typeTitle, 50);
        } else {
          typingRef.current = setTimeout(() => {
            setDeleting(true);
            typeTitle();
          }, pauseBeforeDelete);
        }
      } else {
        if (charIndex > 0) {
          setTitleText(titles[titleIndex].substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          typingRef.current = setTimeout(typeTitle, 50);
        } else {
          setDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setCharIndex(0);
          typingRef.current = setTimeout(typeTitle, pauseBeforeNext);
        }
      }
    };

    typingRef.current = setTimeout(typeTitle, 25);

    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [charIndex, titleIndex, deleting]);

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlinkInterval);
  }, []);

  return (
    <section id="home" className={`relative flex items-center ${styles.paddingY}`}>
      <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div>
          <p
            className="font-source-code-pro font-bold text-white md:mr-10 md:text-[100px] text-[60px] mb-2 sm:mb-4"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            {greeting}
          </p>
          <p
            className="font-source-code-pro font-normal text-white md:mr-10 md:text-[40px] text-[30px] mb-4 sm:mb-6"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            I am a {titleText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </p>
          <p
            className="font-source-code-pro font-normal text-white md:mr-10 md:text-[40px] text-[30px] mb-4 sm:mb-12"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            based in Canada
          </p>

          <div className="w-full flex justify-left">
            <p className="text-white text-lg font-semibold mr-3" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
              Scroll down
            </p>
            <div className="mb-10 animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default CentreBlock;

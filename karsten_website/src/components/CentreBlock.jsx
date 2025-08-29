import React, { useState, useEffect, useRef } from 'react';
import styles from '../style';

const CentreBlock = () => {
  const titles = [
    "n EDA Engineer",
    " Software Engineer",
    " Full Stack Developer",
    " Music Producer",
  ];

  const [greeting] = useState("Hello, I'm Kirby");
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
    <section id="home" className={`relative flex items-start ${styles.paddingY}`}>
      <div className={`${styles.flexStart} flex-col xl:px-0`}>
        <div>
          <p
            className="text-left font-source-code-pro font-bold text-white md:mr-10 md:text-[80px] text-[50px] mb-2 sm:mb-4"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            {greeting}
          </p>
          <p
            className="font-source-code-pro font-normal text-white md:mr-10 md:text-[30px] text-[25px] mb-4 sm:mb-6"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            I am a{titleText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </p>
          <p
            className="font-source-code-pro font-normal text-white md:mr-10 md:text-[30px] text-[25px]"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            based in Canada
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default CentreBlock;

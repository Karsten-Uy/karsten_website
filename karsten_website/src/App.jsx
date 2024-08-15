import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styles from './style';
import './index.css'; // Ensure this file contains necessary styles

import Home from './pages/Home';
import About from './pages/About';
import { Navbar, Footer, PostFooterHome } from './components';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { kirbyfloating, skyBG, waterBG, rocks, grass, caveBG, wasserfallforest, cityBG, cityBG2 } from './assets';
import Page404 from './pages/Page404';

const AppContent = () => {
  
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const isAboutPage = location.pathname === '/about';
  const isExperiencePage = location.pathname === '/experience';
  const isContact = location.pathname === '/contact';

  // Background image based on page
  let backgroundImage = skyBG; // Default for the homepage

  if (isAboutPage) {
    backgroundImage = wasserfallforest;
  } else if (isExperiencePage) {
    backgroundImage = waterBG;
  } else if (isContact) {
    backgroundImage = caveBG;
  }

  const postFooterRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // State for mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const scrollToPostFooter = () => {
    if (postFooterRef.current) {
      postFooterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove); // Add mousemove listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove); // Clean up
    };
  }, []);

  return (
    <div className="relative">  {/* Add relative positioning to the main container */}

      {/* Floating GIF */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      >
        <img
          src={kirbyfloating}
          alt="Kirby Floating"
          style={{
            position: 'absolute',
            left: `${mousePos.x + 10}px`,
            top: `${mousePos.y + scrollY + 35}px`,
            transform: 'translate(-50%, -50%)',
          }}
          className="w-16 h-16" // Adjust size as needed
        />
      </div>

      <div className="bg-primary min-h-screen w-full flex flex-col relative">
        {/* Main Content Background */}
        <div
          className={['absolute inset-0', styles.paddingX, 'flex flex-col'].join(' ')}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: '',
            backgroundSize: 'cover',
            backgroundPosition: `center ${scrollY * 0.0}px`,
            zIndex: 0,
          }}
        />

        {/* Conditionally render animations and teal div on home page */}
        {isHomePage && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-teal-400 opacity-50" style={{ zIndex: 0 }} />
        )}

        {/* Navbar */}
        <div className={[styles.paddingX, styles.flexCenter, 'bg-primary flex-shrink-0 relative'].join(' ')} style={{ zIndex: 10 }}>
          <div className={[styles.boxWidth, 'mb-3'].join(' ')}>
            <Navbar />
          </div>
        </div>

        {/* Main Content */}
        <div className={['flex-grow', styles.paddingX, 'flex flex-col relative'].join(' ')}>
          <div className='flex items-center justify-center flex-grow relative'>
            <div className='relative justify-start'  style={{ zIndex: 10 }}>
              <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Page404 />} />
              </Routes>

              {/* Scroll Down Component */}
              {isHomePage && (
                <button 
                  onClick={scrollToPostFooter} 
                  className="flex hidden sm:flex"
                >
                  <p className="text-white text-base font-semibold pr-2" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
                    Scroll down
                  </p>
                  <svg
                    className="w-5 h-5 text-white animate-bounce mb-16"
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
                </button>
              )}
            </div>
          </div>
        </div>

        
        {/* Footer */}
        <div 
          className={[styles.paddingX, styles.flexStart, ''].join(' ')} 
          style={{
            backgroundImage: `url(${grass})`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%', // Ensures the height is set and width repeats
            backgroundPosition: 'center',
            height: 150,
            zIndex: 10,
            alignItems: 'flex-end'
          }} 
        >

          <div className={[styles.boxWidth].join('z-10  ')}>
            <Footer />
          </div>
        </div>




      </div>

      {/* PostFooterHome for Home Page */}
      {isHomePage && (
        <div className="">
          {/* PostFooterHome Section */}
          <div ref={postFooterRef} className="">
            <div
              className={['bg-primary', styles.flexStart].join(' ')}
              style={{
                backgroundImage: `url(${caveBG})`,
                backgroundSize: 'cover',
                backgroundPosition: `center ${scrollY * 0.0}px`,
                backgroundAttachment: 'fixed',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-teal-400 opacity-50" style={{ zIndex: 0 }} />
              
              <div className="relative flex flex-col w-full items-center">
                {/* PostFooterHome Section */}
                <div className={[styles.boxWidth, styles.paddingX, 'relative w-full px-4 sm:px-6 lg:px-8'].join(' ')} style={{ zIndex: 10 }}>
                  <PostFooterHome />
                </div>

                {/* Footer Section */}
                <div className="flex justify-center py-6 w-full px-4 sm:px-6 lg:px-8"
                style={{
                  backgroundImage: `url(${rocks})`,
                  backgroundRepeat: 'repeat-x',
                  backgroundSize: 'auto 100%', // Ensures the height is set and width repeats
                  backgroundPosition: 'center',
                  height: 130,
                  alignItems: 'flex-end'
                }} >
                  <div className={[styles.boxWidth, 'flex flex-col items-center z-10 w-full'].join(' ')}>
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center">
                      <p className="text-white text-sm text-center sm:text-left mb-2 sm:mb-0">
                        domainname ©2024 - Privacy Policy
                      </p>

                      {/* Scroll to Top Button */}
                      <div className="flex justify-center mb-2 sm:mb-0">
                        <button onClick={scrollToTop} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-white animate-bounce"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19 15l-7-7-7 7"></path>
                          </svg>
                          <p
                            className="text-white text-base font-semibold ml-2"
                            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}
                          >
                            Back to top
                          </p>
                        </button>
                      </div>

                      <p className="text-white text-sm text-center sm:text-right">
                        Vancouver, Canada
                      </p>
                    </div>

                    <div className={['block sm:hidden', styles.paddingX, styles.flexStart, 'flex-shrink-0 relative'].join(' ')}>
                      <div className={[styles.boxWidth].join(' ')} style={{ zIndex: 10 }}>
                        <Footer />
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



   

    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;

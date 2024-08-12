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
import { postfooterbg } from './assets';
import websiteBG from './assets/WebsiteBackground.png';
import Page404 from './pages/Page404';
import FooterHome from './components/FooterHome';

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  // Create a ref for the PostFooterHome component
  const postFooterRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const scrollToPostFooter = () => {
    if (postFooterRef.current) {
      postFooterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update scrollY state on window scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="bg-primary min-h-screen w-full flex flex-col relative">
        {/* Navbar */}
        <div className={[styles.paddingX, styles.flexCenter, 'flex-shrink-0'].join(' ')}>
          <div className={[styles.boxWidth, 'mb-3'].join(' ')}>
            <Navbar />
          </div>
        </div>

        {/* Main Content */}
        <div
          className={['flex-grow', styles.paddingX, 'flex flex-col relative', styles.flicker, styles.backgroundMove].join(' ')}
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${websiteBG})`,
            backgroundAttachment: 'fixed', // Parallax effect
            backgroundPosition: '0 0',
          }}
        >
          <style>{styles.flickerAnimation}</style> {/* Inject the flicker animation keyframes */}
          <style>{styles.backgroundMoveAnimation}</style> {/* Inject the background move keyframes */}

          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 opacity-70"></div>

          <div className='flex items-center justify-center flex-grow relative z-10'>
            <div className='relative z-10 justify-start'>
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
        <div className={['bg-primary hidden sm:flex', styles.paddingX, styles.flexStart, 'flex-shrink-0'].join(' ')}>
          <div className={[styles.boxWidth].join(' ')}>
            <Footer />
          </div>
        </div>
      </div>

      {/* PostFooterHome for Home Page */}
      {isHomePage && (
        <div ref={postFooterRef} className="relative z-0">
          <div
            className={['bg-primary', styles.paddingX, styles.flexStart, 'flex-shrink-0'].join(' ')}
            style={{
              backgroundImage: `url(${postfooterbg})`,
              backgroundSize: 'cover',
              backgroundPosition: `center ${scrollY * 0.04}px`, // Parallax effect
              backgroundAttachment: 'fixed', // Keep it fixed for parallax effect
            }}
          >

            <div className={[styles.boxWidth].join('')}>
              <PostFooterHome />
            </div>
          </div>

          <div className={['bg-primary', styles.paddingX, styles.flexStart, 'flex-shrink-0'].join(' ')}>
            <div className={[styles.boxWidth].join(' ')}>
              <FooterHome />
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

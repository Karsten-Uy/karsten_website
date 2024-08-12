import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styles from './style';
import './index.css'; // Ensure this file contains necessary styles

import Home from './pages/Home';
import About from './pages/About';
import { Navbar, Footer, PostFooterHome } from './components';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import websiteBG from './assets/WebsiteBackground.png';
import Page404 from './pages/Page404';
import FooterHome from './components/FooterHome';

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

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

          <div className="flex-grow flex items-center justify-center relative z-10">
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<Page404 />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <div className={['bg-primary', styles.paddingX, styles.flexStart, 'flex-shrink-0'].join(' ')}>
          <div className={[styles.boxWidth].join(' ')}>
            <Footer />
          </div>
        </div>
      </div>

      {/* PostFooterHome for Home Page */}
      {isHomePage && (
        <div className="relative z-20">
          <div className={['bg-discount-gradient', styles.paddingX, styles.flexStart, 'flex-shrink-0'].join(' ')}>
            <div className={[styles.boxWidth].join(' ')}>
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

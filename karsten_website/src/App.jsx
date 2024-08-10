import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';

import Home from './pages/Home';
import About from './pages/About';
import { Navbar, Footer } from './components';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import websiteBG from './assets/WebsiteBackground.png';
import Page404 from './pages/Page404';

const App = () => (
  <Router>
    <div className="bg-primary w-full h-screen flex flex-col relative">
      <div className={[styles.paddingX, styles.flexCenter, 'flex-shrink-0'].join(' ')}>
        <div className={[styles.boxWidth, 'mb-3'].join(' ')}>
          <Navbar />
        </div>
      </div>

      <div
        className={['flex-grow', styles.paddingX, 'flex flex-col justify-between relative', styles.flicker, styles.backgroundMove].join(' ')}
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

        <div>
          {/* This empty div will push the content down, ensuring it is centered */}
        </div>
        <div className='flex items-center justify-center flex-grow relative z-10'>
          <Routes>
            <Route path="/karsten_website/" index element={<Home />} />
            <Route path="/karsten_website/home" element={<Home />} /> 
            <Route path="/karsten_website/about" element={<About />} />
            <Route path="/karsten_website/experience" element={<Experience />} />
            <Route path="/karsten_website/projects" element={<Projects />} />
            <Route path="/karsten_website/contact" element={<Contact />} />
            <Route path="/karsten_website/*" element={<Page404 />} />
          </Routes>
        </div>
        <div>
          {/* This empty div will push the content up, ensuring it is centered */}
        </div>
      </div>

      <div className={['bg-primary', styles.paddingX, styles.flexStart, 'flex-shrink-0'].join(' ')}>
        <div className={[styles.boxWidth].join(' ')}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';

import Home from './pages/Home';
import About from './pages/About';
import { Navbar, Footer } from './components';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const App = () => (
  <Router>
    <div className="bg-primary w-full h-screen flex flex-col">
      <div className={[styles.paddingX, styles.flexCenter, 'flex-shrink-0'].join(' ')}>
        <div className={[styles.boxWidth, 'mb-3'].join(' ')}>
          <Navbar />
        </div>
      </div>

      <div className={['flex-grow bg-blue-gradient', styles.paddingX, 'flex flex-col justify-between'].join(' ')}>
        <div>
          {/* This empty div will push the content down, ensuring it is centered */}
        </div>
        <div className='flex items-center justify-center flex-grow'>
          <Routes>
            <Route path="/karsten_website/" index element={<Home />} />
            <Route path="/karsten_website/home" element={<Home />} />
            <Route path="/karsten_website/about" element={<About />} />
            <Route path="/karsten_website/experience" element={<Experience />} />
            <Route path="/karsten_website/projects" element={<Projects />} />
            <Route path="/karsten_website/contact" element={<Contact />} />
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

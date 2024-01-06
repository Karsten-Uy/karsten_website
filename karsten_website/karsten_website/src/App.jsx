import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';

import Home from './pages/Home';
import About from './pages/About';
import { Navbar, Footer } from './components';
import Projects from './pages/Projects';
import Experience from './pages/Experience'; // Uncomment when ready
import Contact from './pages/Contact';

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={[styles.paddingX, styles.flexCenter].join(' ')}>
        <div className={[styles.boxWidth, 'mb-3'].join(' ')}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/karsten_website/" index element={<Home />} />
        <Route path="/karsten_website/home" element={<Home />} />
        <Route path="/karsten_website/about" element={<About />} />
        <Route path="/karsten_website/experience" element={<Experience />} />
        <Route path="/karsten_website/projects" element={<Projects />} />
        <Route path="/karsten_website/contact" element={<Contact />} />
      </Routes>

      <div className={['bg-primary', styles.paddingX, styles.flexStart].join(' ')}>
        <div className={[styles.boxWidth].join(' ')}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;

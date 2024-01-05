// src/pages/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';

import Home from './pages/Home';
import About from './pages/About';
import { Navbar, CentreBlock, Footer } from './components';
import Projects from './pages/Projects';
import Experience from './pages/Experience' // Experience page not made yet, to do so, uncomment the expereince portion here and in the navLinks array in constants/index.js file before starting 

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">

      <div className={[styles.paddingX, styles.flexCenter].join(' ')}>
        <div className={[styles.boxWidth].join(' ')}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <div className={["bg-primary", styles.paddingX, styles.flexStart].join(' ')}>
        <div className={[styles.boxWidth].join(' ')}>
          <Footer />
        </div>
      </div>

    </div>
  </Router>
);

export default App;
import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styles from './style';
import './index.css';

import Home from './pages/Home';
import About from './pages/About';
import { Navbar, Footer, PostFooterHome, CaveStalactites } from './components';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { kirbyfloating, rocks, grass, caveBG } from './assets';
import { pageConfig, DEFAULT_PAGE, location as siteLocation } from './data/siteConfig';
import Page404 from './pages/Page404';

const AppContent = () => {

  const location = useLocation();
  // Per-route appearance comes from a single config map (see data/siteConfig.js).
  const { background: backgroundImage, showOverlay, darken, isHome: isHomePage } =
    pageConfig[location.pathname] ?? DEFAULT_PAGE;

  const postFooterRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // State for mouse position (desktop: Kirby follows the cursor).
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // On mobile Kirby is driven imperatively (requestAnimationFrame) via this ref
  // instead of by the cursor — idle drift, scroll puffs, and tap-to-attract.
  const kirbyRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Treat narrow viewports as "mobile" (matches the site's 768px breakpoint).
  // To test on a laptop, shrink the window under 768px or use DevTools device mode.
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Mobile "alive" Kirby. A single rAF loop blends three behaviors and writes the
  // result straight to the DOM (no per-frame React re-render):
  //   • idle drift  — slow horizontal sine sweep + a slower vertical bob, with
  //                   tilt/stretch from horizontal velocity so he floats (not slides);
  //   • scroll      — each scroll burst gives an occasional "puff up" pulse;
  //   • tap/drag    — pointer down/move pulls him toward the touch point, then he
  //                   eases back into idle drift ~1s after the last touch.
  // Pointer events cover both touch and mouse, so a click on a narrow laptop
  // window attracts him too — handy for testing without a touchscreen.
  useLayoutEffect(() => {
    if (!isMobile) return undefined;
    const el = kirbyRef.current;
    if (!el) return undefined;

    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const pos = { x: window.innerWidth / 2, y: window.innerHeight * 0.34 };
    const target = { x: pos.x, y: pos.y };
    let prevX = pos.x;
    let puff = 1;
    let lastPuff = 0;
    let attractUntil = 0;
    let pressed = false;
    let start;
    let raf;

    // Place him immediately so there's no first-frame flash at the origin.
    el.style.left = `${pos.x}px`;
    el.style.top = `${pos.y + window.scrollY}px`;
    el.style.transform = 'translate(-50%, -50%)';

    const attract = (x, y) => {
      target.x = x;
      target.y = y;
      attractUntil = performance.now() + 1000;
    };
    const onDown = (e) => { pressed = true; attract(e.clientX, e.clientY); };
    const onMove = (e) => { if (pressed) attract(e.clientX, e.clientY); };
    const onUp = () => { pressed = false; };
    const onScroll = () => {
      const now = performance.now();
      if (now - lastPuff > 1400) { puff = 1.28; lastPuff = now; }
    };

    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    window.addEventListener('scroll', onScroll, { passive: true });

    const frame = (now) => {
      if (start === undefined) start = now;
      const t = now - start;
      const W = window.innerWidth;
      const H = window.innerHeight;

      // Idle path: lazy horizontal sweep (~10.7s) + a slower vertical bob (~16s).
      const idleX = W / 2 + W * 0.3 * Math.sin(t / 1700);
      const idleY = H * 0.34 + 28 * Math.sin(t / 2600);

      const attracting = now < attractUntil;
      const tx = attracting ? target.x : idleX;
      const ty = attracting ? target.y : idleY;
      const ease = attracting ? 0.14 : 0.04; // snappy toward a touch, lazy in idle

      pos.x += (tx - pos.x) * ease;
      pos.y += (ty - pos.y) * ease;

      // Horizontal velocity → tilt + squash/stretch (he rounds out at the turns).
      const vx = pos.x - prevX;
      prevX = pos.x;
      const rot = clamp(vx * 1.1, -10, 10);
      const stretch = clamp(Math.abs(vx) * 0.02, 0, 0.12);

      puff += (1 - puff) * 0.05; // puff decays back to 1
      const sx = (1 + stretch) * puff;
      const sy = (1 - stretch) * puff;

      el.style.left = `${pos.x}px`;
      el.style.top = `${pos.y + window.scrollY}px`;
      el.style.transform =
        `translate(-50%, -50%) rotate(${rot.toFixed(2)}deg) scale(${sx.toFixed(3)}, ${sy.toFixed(3)})`;

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      window.removeEventListener('scroll', onScroll);
    };
  }, [isMobile]);

  // Flickering stars scattered across the header. Positions are fixed (so they
  // don't reshuffle on re-render); each twinkles on its own duration/delay.
  const headerStars = [
    { left: '5%',  top: '22%', size: 2, dur: '2.6s', delay: '0s',   color: '#eaf2ff' },
    { left: '12%', top: '58%', size: 2, dur: '3.2s', delay: '0.7s', color: '#bfe9ff' },
    { left: '20%', top: '34%', size: 3, dur: '2.2s', delay: '1.1s', color: '#eaf2ff' },
    { left: '29%', top: '64%', size: 2, dur: '3.6s', delay: '0.3s', color: '#cdebff' },
    { left: '37%', top: '26%', size: 2, dur: '2.8s', delay: '1.4s', color: '#eaf2ff' },
    { left: '46%', top: '52%', size: 3, dur: '3.0s', delay: '0.2s', color: '#bfe9ff' },
    { left: '54%', top: '30%', size: 2, dur: '2.4s', delay: '0.9s', color: '#eaf2ff' },
    { left: '62%', top: '60%', size: 2, dur: '3.4s', delay: '1.6s', color: '#cdebff' },
    { left: '70%', top: '36%', size: 2, dur: '2.6s', delay: '0.5s', color: '#eaf2ff' },
    { left: '78%', top: '56%', size: 3, dur: '3.1s', delay: '1.2s', color: '#bfe9ff' },
    { left: '86%', top: '24%', size: 2, dur: '2.9s', delay: '0.1s', color: '#eaf2ff' },
    { left: '94%', top: '50%', size: 2, dur: '3.3s', delay: '0.8s', color: '#cdebff' },
  ];

  return (
    <div className="relative">
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
          ref={kirbyRef}
          src={kirbyfloating}
          alt="Kirby Floating"
          style={
            isMobile
              ? { position: 'absolute', willChange: 'left, top, transform' }
              : {
                  position: 'absolute',
                  left: `${mousePos.x + 10}px`,
                  top: `${mousePos.y + scrollY + 35}px`,
                  transform: 'translate(-50%, -50%)',
                }
          }
          className="w-16 h-16"
        />
      </div>

      {/* Conditionally render animations and teal div on home page */}
      { showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-teal-400 opacity-50" style={{ zIndex: 1 }} />
      )}

      {/* Optional per-route darkening veil (set `darken` in siteConfig). Sits above
          the gradient overlay but below page content so the whole scene reads darker. */}
      { darken && (
        <div className="absolute inset-0" style={{ backgroundColor: `rgba(6,8,18,${darken})`, zIndex: 2 }} />
      )}

      <div className="bg-primary min-h-screen w-full flex flex-col relative">
        {/* Main Content Background */}
        <div
          className={['absolute inset-x-0 top-0 bottom-[120px] sm:bottom-[88px]', styles.paddingX, 'flex flex-col'].join(' ')}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            // Anchor the scene to its bottom and stop it around the grass line so the
            // forest at the image's bottom edge sits on the grass instead of being
            // cut by — and buried behind — the dirt strip. The slight overlap into
            // the grass keeps foliage behind the grass blades' transparent gaps.
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />
        
        {/* Navbar */}
        <div
          className={[styles.flexCenter, 'flex-shrink-0 relative'].join(' ')}
          style={{
            zIndex: 10,
            // Translucent header block that fades out at the bottom so the nav
            // stays legible while the scene still shows through. Extra bottom
            // padding pushes the fade below the logo so its lower edge is covered.
            paddingBottom: '2rem',
            backgroundImage:
              'linear-gradient(to bottom, rgba(0,4,15,0.8) 0%, rgba(0,4,15,0.7) 70%, rgba(0,4,15,0) 100%)',
          }}
        >
          {/* Flickering star field behind the nav */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
            {headerStars.map((s, i) => (
              <span
                key={i}
                className="hdr-star"
                style={{
                  left: s.left,
                  top: s.top,
                  width: s.size,
                  height: s.size,
                  background: s.color,
                  animationDuration: s.dur,
                  animationDelay: s.delay,
                }}
              />
            ))}
          </div>

          <div className={[styles.boxWidth, 'mb-3 relative'].join(' ')} style={{ zIndex: 2 }}>
            <Navbar />
          </div>
        </div>

        {/* Main Content */}
        <div className={['flex-grow flex flex-col relative justify-center'].join(' ')}>
          <div className='flex items-center justify-center flex-grow relative'>
            <div className='relative justify-start items-center'  style={{ zIndex: 5 }}>
              <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={
                  <div className=''>
                    <About />
                  </div>
                } />
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
                  <p className="text-white text-base font-semibold pr-2 pixel-shadow">
                    Scroll down
                  </p>
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
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div 
          className={[
            styles.flexStart, 
            'bg-repeat-x bg-center bg-auto h-[160px] sm:h-[120px]'
          ]} 
          style={{
            backgroundImage: `url(${grass})`,
            backgroundSize: 'auto 100%',
            zIndex: 10,
            alignItems: 'flex-end'
          }} 
        >
          <div className={[styles.boxWidth].join(' hidden sm:flex z-10')}>
            <Footer />
          </div>
        </div>
      </div>

      {/* PostFooterHome for Home Page */}
      {isHomePage && (
        <div className={[styles]}>
          <div ref={postFooterRef} >
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
                {/* Stalactites hang from the dirt footer into the cave, fading from
                    dirt-brown at the ground to cave-rock at the tips — the transition
                    between the two grounds. Sits in normal flow at the top of the cave
                    so it reserves its own space above the post-footer content. */}
                <CaveStalactites />
                {/* Extra dark veil to fade the cave backdrop a touch more. Scoped to this
                    post-footer wrapper (which is `relative`) so it does NOT leak up and
                    darken the hero / mountain background above. */}
                <div className="absolute inset-0 bg-[#08040c]/35" style={{ zIndex: 0 }} />
                {/* Match the About page's content width so the home post-footer
                    shares the same horizontal margins (w-[min(92vw,1024px)]). */}
                <div className="relative mx-auto w-[min(92vw,1024px)]" style={{ zIndex: 10 }}>
                  <PostFooterHome />
                </div>

                <div className="flex justify-center py-6 w-full px-4 sm:px-6 lg:px-8"
                style={{
                  backgroundImage: `url(${rocks})`,
                  backgroundRepeat: 'repeat-x',
                  backgroundSize: 'auto 100%',
                  backgroundPosition: 'center',
                  height: 130,
                  alignItems: 'flex-end',
                  // Sit above the cursor-following Kirby layer (zIndex 5) so the
                  // rocks occlude it — Kirby "disappears" behind the ground here.
                  position: 'relative',
                  zIndex: 6,
                }} >
                  <div className={[styles.boxWidth, 'flex flex-col items-center z-10 w-full'].join(' ')}>
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center">
                      <p className="text-white text-sm text-center sm:text-left mb-2 sm:mb-0">
                        
                      </p>

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
                          <p className="text-white text-base font-semibold ml-2 pixel-shadow">
                            Back to top
                          </p>
                        </button>
                      </div>

                      <p className="text-white text-sm text-center sm:text-right">
                        {siteLocation}
                      </p>
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
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

import { close, karstenLogo, menu } from '../assets';
import { navLinks } from '../constants';

const linkVariants = {
  hover: {
    scale: 1.1,
    opacity: 0.8,
  },
  tap: {
    scale: 0.9,
  },
};

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (title, id) => {
    setActive(title);
    setToggle(false);
    navigate(`/karsten_website/${id}`); // Update the navigation path
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative z-20">
      {/* Wrap the logo with motion.div */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/karsten_website/"> {/* Update the root link */}
          <img src={karstenLogo} alt="kirbeats" className="w-[124px]" />
        </Link>
      </motion.div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.id}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            className={`font-source-code-pro font-normal cursor-pointer text-lg sm:text-2xl ${
              active === nav.title ? 'text-white' : 'text-white'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => handleNavigation(nav.title, nav.id)}
          >
            <Link to={`/karsten_website/${nav.id}`} className={active === nav.title ? 'text-white' : 'text-white'}>
              {nav.title}
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-10 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <motion.li
                key={nav.id}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                className={`font-source-code-pro font-medium cursor-pointer text-lg sm:text-2xl ${
                  active === nav.title ? 'text-white' : 'text-white'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => handleNavigation(nav.title, nav.id)}
              >
                <Link to={`/karsten_website/${nav.id}`} className={active === nav.title ? 'text-white' : 'text-white'}>
                  {nav.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

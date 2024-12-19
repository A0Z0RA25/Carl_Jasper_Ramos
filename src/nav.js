import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from './variants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope, faUser, faLaptop } from '@fortawesome/free-solid-svg-icons';

library.add(faTwitter, faFacebook, faGithub, faCoffee, faEnvelope, faUser, faLaptop);

function Navbar({ onClickNav }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const icons = ['fa fa-house', 'fa fa-coffee', 'fa fa-user', 'fa fa-laptop', 'fa fa-envelope'];
  const navContainer = ['home', 'projects', 'about', 'skills', 'contact'];
  const paths = ['/home', '/projects', '/about', '/skills', '/contact'];

  return (
    <div className="fixed flex md:top-0 md:bottom-full bottom-0 left-0 mx-auto w-svw">
      <motion.ul
        className="flex justify-evenly border left-0 top-0 md:mb-0 backdrop-blur-3xl md:backdrop-blur-0 border-black 
         h-12 w-full items-center font-bold relative mx-auto md:h-[70px] md:border-none rounded-full 
        md:w-full text-sm md:text-[20px] md:my-auto"
        variants={fadeIn('down', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: null }}
      >
        {/* Mobile View Icons */}
        {[...new Set(icons)].map((icon, i) => (
          <li
            className={`z-10 bg-banner cursor-pointer transition md:hidden duration-300 relative text-[14px] rounded-full py-0 ${
              activeIndex === i
                ? 'text-white md:-translate-y-0 -translate-y-5 transition-all ease-linear duration-300'
                : 'text-black'
            }`}
            key={i}
          >
            <Link
              to={paths[i]}
              onClick={() => {
                setActiveIndex(i);
                onClickNav(navContainer[i]);
              }}
            >
              <FontAwesomeIcon className="px-3 py-3" icon={icon.split(' ')} />
            </Link>
          </li>
        ))}

        {/* Desktop View Links */}
        {navContainer.map((nav, index) => (
          <li
            className={`cursor-pointer font-itim font-bold md:pt-5 md:px-6 md:rounded-bl-full md:rounded-br-full z-10 hidden md:flex items-center relative text-[20px] ${
              activeIndex === index
                ? 'text-white translate-y-0 z-30 md:mt-5 md:py-10 h-[150px] bg-banner transition-all ease-linear duration-300'
                : 'text-black'
            }`}
            key={index}
          >
            <Link to={paths[index]} onClick={() => {setActiveIndex(index); onClickNav(nav);}}>
              {nav.toUpperCase()}
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Navbar;
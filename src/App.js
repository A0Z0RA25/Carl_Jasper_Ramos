import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './hero.js';
import Navbar from './nav.js';
import Projects from './projects.js';
import About from './about.js';
import Skills from './skill.js';
import Contact from './contact.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram, faHouse, faUser);

function App() {
  const [showSection, setShowSection] = useState('home');

  function handleClickSection(section) {
    setShowSection(section);
  }

  return (
    <Router>
      <div className='container bg-background md:h-full xl:h-svh w-svw h-svh md:px-[60px] px-[10px] py-[20px] md:py-0'> 
        <Navbar onClickNav={handleClickSection} />
        {showSection === "home" && <Hero />}
        {showSection === "projects" && <Projects />}
        {showSection === "about" && <About />}
        {showSection === "skills" && <Skills />}
        {showSection === "contact" && <Contact />}
      </div>
    </Router>
  );
}

export default App; 
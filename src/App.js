import './App.css';
import Hero from './components/hero.js';
import Navbar from './components/mainpage.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram, faHouse, faUser);

function App() {

  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo)
    console.log(showInfo, "working")
  }

  return (
      <BrowserRouter>
        <div className='flex md:flex-row flex-col w-screen md:h-screen min-h-screen max-h-full py-5 bg-back px-2'>
          <div>
            <Hero showInfo={showInfo} handleShowInfo={handleShowInfo} />
          </div>
          <div className='w-full'>
            <Navbar />
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App; 
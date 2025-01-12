import { Routes, Route } from 'react-router-dom';
import Projects from './projects.js';
import About from './about.js';
import Skills from './skill.js';
import Contact from './contact.js';


function Navbar() {

  const list = [
    {id: 1, name: "About", link: "/About", icon: "fa fa-user"},
    {id: 2, name: "Projects", link: "/Projects", icon: "fa fa-coffee"},
    {id: 3, name: "Contact", link: "/Contact", icon: "fa fa-envelope"},
  ]

  return (
    <div className="md:mx-5 bg-background overflow-y-scroll rounded border border-black mb-5">
        <ul className='flex z-50 md:relative fixed bottom-0 left-0 w-full justify-around mx-auto text-white md:rounded-bl-sm md:rounded-br-sm bg-banner md:w-1/2'>
          {list.map((li) => (
            <li key={li.id}><a href={li.link}>{li.name}</a></li>
          ))}
        </ul>

        <div>
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
    </div>
  );
}

export default Navbar;
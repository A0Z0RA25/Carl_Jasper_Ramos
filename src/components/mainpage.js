import { Routes, Route, Link } from 'react-router-dom';
import Projects from './projects.js';
import About from './about.js';
import Contact from './contact.js';


function Navbar() {

  const list = [
    {id: 1, name: "About", link: "/Carl_Jasper_Ramos", icon: "fa fa-user"},
    {id: 2, name: "Projects", link: "/Projects", icon: "fa fa-coffee"},
    {id: 3, name: "Contact", link: "/Contact", icon: "fa fa-envelope"},
  ]

  return (
    <div className="md:mx-5 bg-banner md:h-full max-h-screen text-white overflow-y-scroll rounded border mb-5">
        <ul className='flex items-center h-10 z-50 md:relative fixed bottom-0 left-0 w-full justify-around mx-auto text-white md:rounded-bl-sm md:rounded-br-sm bg-banner md:w-1/2'>
          {list.map((li) => (
            <Link to={li.link} key={li.id}>{li.name}</Link>
          ))}
        </ul>

        <div>
          <Routes>
            <Route path="/Carl_Jasper_Ramos" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
    </div>
  );
}

export default Navbar;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import htmlLogo from '../assets/htmlLogo.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import framer from '../assets/framer.png';
import library from '@fortawesome/fontawesome-svg-core';

function Skills(){

   const liTools = [
    {name: "HTML", img: htmlLogo},
    {name: "CSS", img: css},
    {name: "JavaScript", img: javascript},
    {name: "Tailwind", img: tailwind},
    {name: "React", img: react},
    {name: "Motion", img: framer}
   ]

    return(
        <div className='font-itim'>
            <h1 className='text-center font-semibold text-md my-2'>Tools that I use</h1>
            <div className='grid grid-cols-3 gap-1 px-1'>
                {liTools.map((tool) => (
                    <div className='flex flex-col items-center justify-center text-center'>
                        <img className='w-[50px] h-[55px]' src={tool.img} />
                        <p className='text-xs'>{tool.name}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
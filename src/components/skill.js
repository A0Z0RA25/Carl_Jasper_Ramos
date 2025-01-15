import { motion } from 'framer-motion';
import htmlLogo from '../assets/htmlLogo.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import framer from '../assets/framer.png';


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
            <motion.h1 className='text-center font-semibold text-md my-2'
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 100, y: 0}}
                        transition={{duration: 2}}
                        viewport={{once: true}}
                        >Tools that I use</motion.h1>
            <motion.div className='grid grid-cols-3 gap-1 px-1'
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 100, y: 0}}
                        transition={{duration: 2}}
                        viewport={{once: true}}>
                {liTools.map((tool, index) => (
                    <motion.div key={index} className='flex group bg-white text-black py-2 rounded flex-col items-center justify-center text-center'
                                            initial={{opacity: 0, y: 10}}
                                            animate={{opacity: 100, y: 0}}
                                            transition={{duration: 3}}
                                            viewport={{once: true}}>
                        <img alt={tool.name} className='w-[50px] h-[55px] group-hover:-translate-y-1 duration-300 ease-in-out' src={tool.img} />
                        <p className='text-xs'>{tool.name}</p>
                        <motion.hr className='border border-black w-1/2' 
                                    initial={{opacity: 0, width: 0}}
                                    animate={{opacity: 100, width: 50}}
                                    transition={{duration: 2, animation: "easeInOut"}}
                                    viewport={{once: true}}/>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills
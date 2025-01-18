import { easeIn, easeInOut, motion } from 'framer-motion';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Skills from './skill.js';




function Hero({showInfo, handleShowInfo}){

    const socMed = [
        { icon: ['fab', 'facebook'], name: 'Facebook', link: 'https://www.facebook.com/carljaspera.ramos/' },
        { icon: ['fab', 'twitter'], name: 'Twitter', link: 'https://www.facebook.com/carljaspera.ramos/' },
        { icon: ['fab', 'github'], name: 'Github', link: 'https://github.com/A0Z0RA25' },
    ];

    return(
    <motion.div className="relative text-contentCol bg-banner h-fit rounded border border-white md:mx-2 md:py-0 py-3 mb-2 w-full"
                initial={{opacity: 0}}
                animate={{opacity: 100}}
                transition={{duration: 0.5, animation: easeInOut}}>
        <div className='flex flex-col md:gap-y-10 justify-evenly md:justify-between md:py-3 md:px-2'>
            <div className='text-center'>
                <motion.h1 className='font-itim text-2xl'
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 100, y: 0}}
                            transition={{duration: 2, animation: easeInOut}}
                            viewport={{once: true}}
                            >CARL JASPER RAMOS</motion.h1>
                <motion.p className='md:text-[23px] text-center font-itim'
                          initial={{opacity: 0, y: 10}}
                          animate={{opacity: 100, y: 0}}
                          transition={{duration: 2, animation: easeInOut}}
                          viewport={{once: true}}>A student who's studying web development.</motion.p> 
            </div>
        <motion.div className={`${showInfo ? "block" : "hidden md:block"}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
            <div className='relative px-2 md:mx-0 font-itim'>
                <motion.h1 className='my-2'
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 100, y: 0}}
                    transition={{duration: 2, animation: easeInOut}}
                    viewport={{once: true}}>You can follow me:</motion.h1>

                <ul className='flex md:justify-evenly'>
                {socMed.map((soc, index) => (
                        <motion.li key={index} className='font-agrandir group font-bold shadow-md z-10 mx-2'
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 100, y: 0}}
                        transition={{duration: 2, animation: easeInOut}}
                        viewport={{once: true}}>
                                <a href={soc.link}>
                                  <FontAwesomeIcon className="px-6 group-hover:-translate-y-2 duration-300 ease-in-out group-hover:text-white py-1 group-hover:border-none" icon={soc.icon} />
                                  <hr /> 
                                </a>
                                
                        </motion.li>
                    ))}
                </ul>
            </div>
            {/* tools */}
            <Skills />
        </motion.div>
        <button className={`text-center text-xl text-white w-full my-2 font-semibold md:hidden`} onClick={() => handleShowInfo()}>
            <FontAwesomeIcon icon={showInfo ? faCaretUp : faCaretDown} />      
        </button>
        </div>
        
    </motion.div>
)
}

export default Hero
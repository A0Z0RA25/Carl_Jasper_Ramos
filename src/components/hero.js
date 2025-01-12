import myImg from '../assets/myImg.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import Skills from './skill.js';


// Add icons to library
library.add(faTwitter, faFacebook, faGithub, faCoffee, faEnvelope, faUser);

function Hero({showInfo, handleShowInfo}){

    const socMed = [
        { icon: ['fab', 'facebook'], name: 'Facebook', link: 'https://www.facebook.com/carljaspera.ramos/' },
        { icon: ['fab', 'twitter'], name: 'Twitter', link: 'https://www.facebook.com/carljaspera.ramos/' },
        { icon: ['fab', 'github'], name: 'Github', link: 'https://github.com/A0Z0RA25' },
    ];

    return(
    <div className="relative bg-background h-fit rounded border border-black md:mx-2 mb-2 w-full">
        <div className='flex flex-col md:gap-y-10 justify-evenly md:justify-between md:py-3 md:px-2'>
            <div className='text-center'>
                <motion.h1 className='font-itim'
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: true}}
                            >CARL JASPER RAMOS</motion.h1>
                <motion.p className='md:text-[23px] text-center font-itim'
                          variants={fadeIn('up', 0.2)}
                          initial="hidden"
                          whileInView={'show'}
                          viewport={{once: true}}>A student who's studying web development.</motion.p> 
            </div>
        <div className={`${showInfo ? "block" : "hidden md:block"}`}>
            <div className='relative mx-auto md:mx-0 font-itim'>
                <motion.h1 className='my-2'
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once: true}}>You can follow me:</motion.h1>

                <ul className='flex justify-evenly w-[200px]'>
                {socMed.map((soc, index) => (
                        <motion.li className='font-agrandir hover:text-white hover:bg-banner font-bold shadow-md z-10 border border-black'
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: true}}
                            whileHover={{y: -10}} 
                             key={index}>
                                <a href={soc.link}>
                                  <FontAwesomeIcon className="px-6" icon={soc.icon} />
                                  <hr class=" bg-black" />  
                                </a>
                                
                        </motion.li>
                    ))}
                </ul>
            </div>
            {/* tools */}
            <Skills />
        </div>
        <button className={`text-center border border-black w-full my-2 text-sm font-semibold md:hidden`} onClick={() => handleShowInfo()}>{showInfo ? "Close" : "Show"}</button>
        </div>
        
    </div>
)
}

export default Hero
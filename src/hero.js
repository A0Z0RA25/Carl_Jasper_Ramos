import myImg from './myImg.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from './variants.js';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';


// Add icons to library
library.add(faTwitter, faFacebook, faGithub, faCoffee, faEnvelope, faUser);

function Hero(){

    const socMed = [
        { icon: ['fab', 'facebook'], name: 'Facebook', link: 'https://www.facebook.com/carljaspera.ramos/' },
        { icon: ['fab', 'twitter'], name: 'Twitter', link: 'https://www.facebook.com/carljaspera.ramos/' },
        { icon: ['fab', 'github'], name: 'Github', link: 'https://github.com/A0Z0RA25' },
    ];

    return(
    <div className="border md:overflow-hidden overflow-scroll bg-background p-[30px] md:m-0  md:h-svh h-[90%] w-svw md:items-center flex md:flex-row md:flex-wrap flex-col 
                    md:justify-evenly border-black">
        <div className='flex flex-col justify-evenly md:justify-between md:h-[300px]'>
            <div className='text-center md:w-[600px]'>
                <motion.h1 className='text-[24px] md:text-[50px] font-itim'
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount:0.7}}
                            >CARL JASPER RAMOS</motion.h1>
                <motion.p className='md:text-[23px] text-center font-itim'
                          variants={fadeIn('up', 0.2)}
                          initial="hidden"
                          whileInView={'show'}
                          viewport={{once: false, amount:0.7}}>A highschooler who dreams to earn money in a young age by becoming a webdev.</motion.p> 
            </div>
            

            <div className='mx-auto md:mx-0 font-itim'>
                <motion.h1 className='my-2'
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once: false, amount:0.7}}>You can follow me:</motion.h1>

            <ul className='flex justify-evenly w-[200px]'>
                {socMed.map((soc, index) => (
                        <motion.li className='font-agrandir font-bold shadow-md z-10 border border-black'
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount:0.7}}
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
        </div>

        <div className='my-10 md:my-0 mx-auto'>
            <motion.img className='h-[200px] w-[250px] md:h-[400px] md:w-[450px] rounded-lg'
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount:0.7}} 
                        src={myImg} alt="" />
        </div>
    </div>
)
}

export default Hero
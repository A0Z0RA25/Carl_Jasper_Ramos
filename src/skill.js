import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { fadeIn } from './variants.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3, faGithub, faGitAlt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
library.add( faHtml5, faCss3, faJs, faGithub, faGitAlt, faCode, faReact )
function Skills(){

    return(
        <div className="border md:overflow-hidden font-itim overflow-scroll bg-background p-[30px] md:h-svh h-[85%] w-svw md:items-center flex md:flex-row md:flex-wrap flex-col 
    md:justify-evenly border-black">
            <motion.div className="text-center md:mt-10"
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount:0.7}}>
                <h1 className='text-3xl'>Skills</h1>
                <p>My Technical Level</p>
            </motion.div>
            
            <div className="border border-black md:h-fit md:w-full rounded-md text-center mx-auto my-10 px-8 pb-10">
                <h1 className='text-xl my-6'>Frontend Developer</h1>
                    <motion.ul className="grid md:grid-cols-3 gap-5 md:text-3xl text-xl text-center"
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{once: false, amount:0.7}}>
                        <li><FontAwesomeIcon icon="fa-brands fa-html5" />HTML <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-css3" />CSS <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-js" />JavaScript <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-solid fa-code" />Tailwind css <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-git-alt" />Git <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-github" />Github <hr className='border border-black w-1/2 mx-auto' /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-react" />React <hr className='border border-black w-1/2 mx-auto' /></li>
                    </motion.ul>
            </div>
        </div>
    )
}

export default Skills
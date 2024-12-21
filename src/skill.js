import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { fadeIn } from './variants.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3, faGithub, faGitAlt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
library.add( faHtml5, faCss3, faJs, faGithub, faGitAlt, faCode, faReact )
function Skills(){

    const tools = [
        {icon: 'fa-brands fa-html5', name: 'HTML5'},
        {icon: 'fa-brands fa-css3', name: 'CSS'},
        {icon: 'fa-brands fa-js', name: 'JavaScript'},
        {icon: 'fa-solid fa-code', name: 'Tailwind css'},
        {icon: 'fa-brands fa-git-alt', name: 'Git'},
        {icon: 'fa-brands fa-github', name: 'Github'},
        {icon: 'fa-brands fa-react', name: 'React'},
    ]

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
            
            <div className="border border-black md:h-fit md:w-full rounded-md text-center mx-auto my-5 px-8 pb-10">
                <h1 className='text-xl mt-4 md:my-6'>Frontend Developer</h1>
                    <motion.ul className="grid md:grid-cols-3 gap-5 md:text-3xl text-xl text-center"
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{once: false, amount:0.7}}>
                        {tools.map((tool, index) => (
                            <li key={index}><FontAwesomeIcon icon={tool.icon} />{tool.name}
                            <motion.hr  class="border border-black mx-auto bg-black"            
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '50%' }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }} /></li>
                        ))}
                    </motion.ul>
            </div>
        </div>
    )
}

export default Skills
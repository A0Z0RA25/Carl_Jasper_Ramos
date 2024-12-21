import myImg from './myImg.jpg';
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

function About(){

    return(
        <div className="border overflow-y-scroll font-itim bg-background py-[31.5px] px-2 md:h-svh h-[90%] w-svw md:items-center flex md:flex-row md:flex-wrap flex-col 
                        md:justify-evenly border-black">
            <motion.h1 className='md:mt-8 text-3xl font-bold text-left md:mx-10 w-full'
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once:true }}
                        >About Me</motion.h1>
            <div className='flex md:flex-row justify-around content-evenly items-center flex-wrap'>
                 <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once:true }}>
                    <img className='md:h-[300px] md:w-[300px] md:rounded-none mx-5 my-5 rounded-full h-[100px] w-[100px] shadow-md shadow-black' src={myImg} alt="" />
                </motion.div>
                <div className='flex text-center flex-col md:justify-evenly md:h-full md:w-[800px] h-[400px]'>
                    <motion.div className='grid justify-evenly md:grid-cols-3 gap-y-5 md:gap-y-0 mt-4 md:mt-0 gap-x-10 flex-wrap w-full'
                                variants={fadeIn('up', 0.3)}
                                initial={"hidden"}
                                whileInView={'show'}
                                viewport={{ once:true }}
                                >
                        <div className='h-full hover:-translate-y-5 transition-all ease-in-out duration-500 md:h-full rounded-md shadow-md md:px-4 md:py-2'>
                            <h1 className='text-xl font-semibold'>EXPERIENCE</h1>
                            <motion.hr  class="border-0 h-[2px] bg-black"
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }} />
                            <p className='text-sm md:text-base leading-relaxed px-2 md:px-0'>
                                I've been studying programming (web development) since 2022
                                and it's been almost three years now.
                            </p>
                        </div>
                        <div className='h-full md:h-full hover:-translate-y-5 transition-all ease-in-out duration-500 rounded-md shadow-md md:px-4 md:py-2'>
                            <h1 className='text-xl font-semibold'>EDUCATION</h1>
                            <motion.hr  class="border-0 h-[2px] bg-black"
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }} />
                            <p className='text-sm md:text-base leading-relaxed px-2 md:px-0'>
                                I'm currently a grade 12 STEM student and will graduate this 2025
                                , the course that I will take in college is Computer Science.
                            </p>
                        </div>
                        <div className='h-full md:h-full hover:-translate-y-5 transition-all ease-in-out duration-500 rounded-md shadow-md md:px-4 md:py-2'>
                            <h1 className='text-xl font-semibold'>GOAL</h1>
                            <motion.hr  class="border-0 h-[2px] bg-black"
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }} />
                            <p className='text-sm md:text-base leading-relaxed px-2 md:px-0'>
                                My goal is to finish college and to have a stable job, maybe a developer 
                                or any job that is related to technology.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div className='md:w-[700px] '
                                variants={fadeIn('up', 0.4)}
                                initial="hidden"
                                whileInView={'show'}>
                        <p className='text-left md:text-lg my-5 md:my-3'>
                        I create websites as a hobby and to practice my web development skills to gain advanced knowledge in this field.
                        </p>
                    </motion.div>
                    
                </div>
            </div>
           
        </div>
    )
}

export default About 
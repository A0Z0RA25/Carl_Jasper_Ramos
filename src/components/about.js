import { motion } from 'framer-motion';
import myImg from '../assets/myImg.jpg';

function About(){

    return(
        <motion.div className='font-itim py-2'
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 100, y: 0}}
                    transition={{duration: 2, animation: "easeInOut"}}
                    viewport={{once: true}}>
            <h1 className='text-center text-2xl font-semibold mt-2'>About Me</h1>
               
                <div className='grid md:grid-cols-4 gap-y-2 gap-x-1 mx-2 md:my-5'>
                    <div className='w-full flex flex-col justify-center text-center'>
                        <img alt="profile" className='md:w-[250px] w-[120px] h-[150px] md:h-[250px] rounded mx-auto' src={myImg} />
                        <h3>You can call me CJ</h3>
                    </div>
                    <div className='text-center bg-white text-black px-1 shadow-md rounded'>
                        <h1 className='font-semibold text-xl'>Experience</h1>
                        <motion.hr className='border border-black mx-auto' 
                                    initial={{opacity: 0, width: 0}}
                                    animate={{opacity: 100, width: 150}}
                                    transition={{duration: 2, animation: "easeInOut"}}
                                    viewport={{once: true}}/>
                        <p className='text-sm'>I've been studying programming (web development) 
                            since 2022 and it's been almost three years now.</p>
                    </div>
                    <div className='text-center bg-white text-black px-1 shadow-md rounded'>
                        <h1 className='font-semibold text-xl'>Education</h1>
                        <motion.hr className='border border-black mx-auto' 
                                    initial={{opacity: 0, width: 0}}
                                    animate={{opacity: 100, width: 150}}
                                    transition={{duration: 2, animation: "easeInOut"}}
                                    viewport={{once: true}}/>
                        <p className='text-sm'>I'm currently a grade 12 STEM student and will graduate this 2025 , the 
                            course that I will take in college is Computer Science.</p>
                    </div>
                    <div className='text-center bg-white text-black px-1 shadow-md rounded'>
                        <h1 className='font-semibold text-xl'>Goal</h1>
                        <motion.hr className='border border-black mx-auto' 
                                    initial={{opacity: 0, width: 0}}
                                    animate={{opacity: 100, width: 150}}
                                    transition={{duration: 2, animation: "easeInOut"}}
                                    viewport={{once: true}}/>
                        <p className='text-sm'>My goal is to finish college and to have a stable job, maybe a 
                            developer or any job that is related to technology.</p>
                    </div>
                </div>
            
            <div className='px-2 text-center'>
                <p>
                I create websites as a hobby and to practice my web 
                development skills to gain advanced knowledge in this field.
                </p>
            </div>
        </motion.div>
    )
}

export default About 
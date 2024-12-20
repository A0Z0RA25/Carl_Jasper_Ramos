import { motion } from 'framer-motion';
import { fadeIn } from './variants.js';
function Contact(){


    return(
        <div className="border md:overflow-hidden overflow-scroll bg-background py-[31.5px] px-2 md:h-svh h-[85%] w-svw md:items-center flex md:flex-column md:flex-wrap flex-col 
    md:justify-evenly border-black">
            <h1 className="text-center text-2xl md:mt-8">Contact Me</h1>

            <motion.form className="mx-auto border rounded-lg py-[10px] px-[10px] md:w-[600px] my-auto w-full border-black" action=""
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount:0.7}}>
                <div>
                    <label className="block" htmlFor="name">Name:</label>
                    <input className="block w-full border focus:bg-transparent focus:border-green-400 px-1 border-black bg-transparent border-t-0 border-x-0" placeholder="Enter your name" name="name" type="text" />
                </div>
                <div className="my-4">
                    <label className="block" htmlFor="email">Email:</label>
                    <input className="block w-full border border-black focus:bg-transparent bg-transparent px-1 border-t-0 border-x-0" placeholder="Enter your Email" name="email" type="text" />
                </div>
                <label htmlFor="message">message:</label>
                <textarea className="block w-full md:h-[100px] h-[150px] p-1 bg-transparent border border-black" placeholder="Enter your message" name="message" id=""></textarea>
                <button className="block bg-banner text-white md:text-10 text-sm rounded-md px-3 md:py-2 py-1 md:mx-auto md:w-1/2 my-2 mx-auto">Submit</button>
            </motion.form>
        </div>
    )
}

export default Contact
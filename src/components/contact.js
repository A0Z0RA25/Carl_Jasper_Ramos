import { motion } from 'framer-motion';
function Contact(){


    return(
        <motion.div className="font-itim px-2 md:py-0 py-5"
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 100, y: 0}}
                    transition={{duration: 1}}
                    viewport={{once: true}}>
            <h1 className="text-center text-3xl md:my-1 my-4">Contact Me</h1>

            <motion.form className="mx-auto text-center md:text-left px-2 md:border rounded-lg md:py-[10px] md:px-[10px] md:w-[400px] my-auto w-full" action=""
                         >
                <div>
                    <label className="block" htmlFor="name">Name:</label>
                    <input className="block w-full border focus:bg-transparent focus:border-green-400 px-1 border-black bg-transparent border-t-0 border-x-0" placeholder="Enter your name" name="name" type="text" />
                </div>
                <div className="md:my-3 my-10">
                    <label className="block" htmlFor="email">Email:</label>
                    <input className="block w-full border border-black focus:bg-transparent bg-transparent px-1 border-t-0 border-x-0" placeholder="Enter your Email" name="email" type="text" />
                </div>
                <label htmlFor="message">message:</label>
                <textarea className="block w-full md:h-[100px] h-[150px] p-1 bg-transparent border border-black" placeholder="Enter your message" name="message" id=""></textarea>
                <button className="block bg-banner text-white md:text-10 text-xl rounded-md px-3 md:py-2 py-1 md:mx-auto md:w-1/2 my-2 mx-auto">Submit</button>
            </motion.form>
        </motion.div>
    )
}

export default Contact
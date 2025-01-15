import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import cakeShop from '../assets/cakeShop.png';

function Projects(){

    const projectsContainer = [
        {
            id: 1,
            src: cakeShop,
            title: 'Cake Shop',
            descrip: 'A simple interactive e-commerce cake shop website.'
        },{
            id: 2,
            src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5c1d388-9881-4125-992e-051627259838/dga2j1s-dade2b5f-2c17-4c22-8205-e47b616d2ce2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1YzFkMzg4LTk4ODEtNDEyNS05OTJlLTA1MTYyNzI1OTgzOFwvZGdhMmoxcy1kYWRlMmI1Zi0yYzE3LTRjMjItODIwNS1lNDdiNjE2ZDJjZTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jfx71t0fZPBPksg0icbZewnr6-qbGQZmYqGMi2OSA4s',
            title: 'Calculator',
            descrip: 'An educatinal Website for Pre-Calculus'
        },{
            id: 3,
            src: 'https://4kwallpapers.com/images/walls/thumbs_2t/18775.jpg',
            title: 'E-commerce Website',
            descrip: 'An educatinal Website for Pre-Calculus'
        },{
            id: 4,
            src: 'https://wallpapers-clan.com/wp-content/uploads/2024/07/lo-fi-aesthetic-landscape-wallpaper-preview.jpg',
            title: 'School Year Book',
            descrip: 'An educatinal Website for Pre-Calculus'
        },{
            id: 5,
            src: 'https://4kwallpapers.com/images/walls/thumbs_2t/18775.jpg',
            title: 'E-commerce Website',
            descrip: 'An educatinal Website for Pre-Calculus'
        }
    ];

    const [disAnim, setDisAnim] = useState(projectsContainer[0].id);
    const [displayPro, setDisplayPro] = useState([projectsContainer[0]]);

    const handleProj = (x) => {
        setDisAnim(x.id)
        setDisplayPro([x]);
        console.log("working")
    }

    
    

    return(
        <motion.div className="px-5 py-3 text-center font-itim my-auto"
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 100, y: 0}}
                    transition={{duration: 1}}
                    viewport={{once: true}}>
            <h1 className="text-2xl font-bold">Projects</h1>
            <div className="w-full">
                    {displayPro.map((pro) => (
                        <div key={pro.id} className="flex md:flex-row flex-col justify-around gap-x-2 my-3 gap-y-1">
                            <div className="md:border overflow-hidden border mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.img className={`md:w-[450px] w-full h-[200px] md:h-[200px] mx-auto`}
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "100%" }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            src={pro.src}
                                            />
                            </AnimatePresence>
                            </div>
                            <div className="border px-3">
                                <h1 className="md:text-xl text-xl font-semibold">{pro.title}</h1>
                                <hr className="border md:w-[300px] mx-auto" />
                                <p className="text-lg">{pro.descrip}</p>
                            </div>
                        </div>
                    ))}
                {/* Projects */}
                <div className="flex flex-row w-[90%] mx-auto overflow-x-scroll border gap-3 p-2">
                    {projectsContainer.map((each) => (
                        <img alt={each.name} key={each.id} onClick={() => handleProj(each)} 
                            className={`w-[200px] h-[120px] mx-auto ${disAnim === each.id ? "-translate-y-28 ease-in-out duration-500 opacity-5" : "block -translate-y-0"}`}
                            src={each.src} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
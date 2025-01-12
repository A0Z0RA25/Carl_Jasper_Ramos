import { useState } from "react";
import { motion, useTime } from "framer-motion";
import { fadeIn } from "../variants";


function Projects(){

    const projectsContainer = [
        {
            id: 1,
            src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bb106c2-398b-4fbb-bf64-6a092993f2df/dhh9ds9-54fd2c60-25d3-420f-beef-c0b49d6eb4f9.jpg/v1/fill/w_1280,h_732,q_75,strp/aesthetic_pink_landscape_w__cat_desktop_wallpaper_by_airashiiiineko_dhh9ds9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvNWJiMTA2YzItMzk4Yi00ZmJiLWJmNjQtNmEwOTI5OTNmMmRmXC9kaGg5ZHM5LTU0ZmQyYzYwLTI1ZDMtNDIwZi1iZWVmLWMwYjQ5ZDZlYjRmOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8wsA1UmK-WBwoI7ZGhcRlMmbdvHPXVs3SDxWg3qgYGs',
            title: 'Educational Website(ConCalc)',
            descrip: 'An educatinal Website for Pre-Calculus'
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

    const [disAnim, setDisAnim] = useState(projectsContainer[0]);
    const [displayPro, setDisplayPro] = useState([
        {
            id: 1,
            src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bb106c2-398b-4fbb-bf64-6a092993f2df/dhh9ds9-54fd2c60-25d3-420f-beef-c0b49d6eb4f9.jpg/v1/fill/w_1280,h_732,q_75,strp/aesthetic_pink_landscape_w__cat_desktop_wallpaper_by_airashiiiineko_dhh9ds9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvNWJiMTA2YzItMzk4Yi00ZmJiLWJmNjQtNmEwOTI5OTNmMmRmXC9kaGg5ZHM5LTU0ZmQyYzYwLTI1ZDMtNDIwZi1iZWVmLWMwYjQ5ZDZlYjRmOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8wsA1UmK-WBwoI7ZGhcRlMmbdvHPXVs3SDxWg3qgYGs',
            title: 'Educational Website(ConCalc)',
            descrip: 'An educatinal Website for Pre-Calculus'
        },
    ]);

    const handleProj = (x) => {
        const targetProj = projectsContainer.filter((eachPro) => {
             return eachPro.id === x.id;
        });

        const targetAnim = projectsContainer.find((eachPro) => {
            return eachPro.id === x.id;
       });
        setDisplayPro(targetProj); 
        setDisAnim(targetAnim)
        console.log("working")
    }
    

    return(
        <div className="px-5 py-3 text-center font-itim">
            <h1 className="text-2xl font-bold">Projects</h1>
            <div className="w-full">
                    {displayPro.map((pro) => (
                        <div className="flex md:flex-row flex-col justify-around my-3 gap-y-1">
                            <div className="md:border border-black overflow-hidden border w-30 mx-auto">
                                <img className={`md:w-[300px] w-[180px] h-[120px] md:h-[200px] duration-500 ease-in-out mx-auto`} src={pro.src}/>
                            </div>
                            <div className="border border-black px-3">
                                <h1 className="md:text-xl text-sm font-semibold">{pro.title}</h1>
                                <hr className="border border-black md:w-[300px] mx-auto" />
                                <p className="text-xs">{pro.descrip}</p>
                            </div>
                        </div>
                    ))}
                {/* Projects */}
                <div className="flex flex-row w-[90%] mx-auto overflow-x-scroll border border-black gap-3 p-2">
                    {projectsContainer.map((each) => (
                        <img key={each.id} onClick={() => handleProj(each)} 
                            className={`w-[200px] h-[120px] mx-auto ${disAnim.id == each.id ? "-translate-y-28 ease-in-out duration-500 opacity-5" : "block -translate-y-0"}`}
                            src={each.src} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
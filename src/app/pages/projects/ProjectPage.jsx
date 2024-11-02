import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";


export default function ProjectPage({project, backToProjects}) {

    const [isOpen, setOpen] = useState(false)
    const [isHigher, setIsHigher] = useState(null)

    const SeeAllProjects = () => {

    }

    useEffect(() =>{
        console.log(window.innerHeight)

        // if(window.innerHeight <  950){
        //     setIsHigher()
        // } else if( window.innerHeight >  1370 && ){
            
        // }

    }, [window.innerHeight])

    return (
        <>
            {
                <button  
                    onClick={() => backToProjects()} 
                    className="text-white hover:bg-blue-300 rounded px-4 py-2 mb-4 absolute top-2 left-0"
                >
                    <ArrowLeftCircleIcon className="size-10 text-white-500" />
                </button>
            }

            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className=" rounded-lg p-5 w-full h-full grid grid-flow-row auto-rows-max "
            >
                <div className=" col-span-4     flex flex-col ">
                    <h1 className="text-5xl font-bold text-white mb-4 ">{project.name}</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2 ">{project.company}</h2>
                    <p className="text-gray-700 mb-4 text-xl font-bold">
                        {project.startDate} - {project.endDate}
                    </p>
                </div>

                <div className="col-span-4 flex-col   ">
                    <h3 className="text-3xl font-semibold text-gray-800 mt-6">Description</h3>
                    <p className="text-gray-600 mb-4 text-xl font-bold">{project.description}</p>
                </div>

                <div className="flex col-span-4 h-min   ">
                    <div className=" flex-none  w-1/6">
                        <h3 className="text-3xl font-semibold text-gray-800 mt-6">Technologies</h3>
                        <ul className="list-disc pl-5 mb-4">
                            {project.techno.map((tech) => (
                                <li key={tech.name} className="text-gray-700 text-xl   font-bold" >{tech.name} ({tech.type})</li>
                            ))}
                        </ul>
                    </div>
                    <motion.div className="flex-none h-min w-4/6 flex flex-wrap p-2 ">
                        {project.techno.map((tech, index) => (
                            <motion.div 
                                className=" m-2 ml-10 p-4 bg-white rounded-full shadow-lg flex  items-center justify-center"
                                animate={{ y: [0, -10, 0] }} 
                                transition={{ 
                                duration: 0.6 + index * 0.2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                                }}
                            > 
                            <img 
                                src={`./technos/${tech.name}.svg`} 
                                alt="Development Icon" 
                                style={{
                                height: '60px',
                                width: '60px',
                                }}
                            />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className=" p-0  flex flex-col w-4/4" >
                    <h3 className=" font-semibold text-gray-800 mt-6 text-3xl">Tâches réalisées</h3>
                    <ul className="list-disc pl-5 mb-4 w-6/6 ">
                        {project.taches.map((task, index) => (
                            <li key={index} className="text-gray-700 mt-1 font-bold text-xl" >{task.description}</li>
                        ))}
                    </ul>

                    <button>
                        Voir Plus
                    </button>
                </div>
      
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity:  1  }}
                transition={{ duration: 2 }}
                    className=" p-5 w-1/6 absolute right-6 top-0" 
                >
                    <img src={`/projects/${project.img}`} alt={project.name} className=" w-30" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity:  1  }}
                transition={{ duration: 2 }}
                className="absolute bottom-0 right-0 p-5 w-1/5"
            >
                    <img src={`/general/projects.svg`} alt={project.name} className="w-full" />
            </motion.div>

            {
            isOpen && 
            <motion.div>


            </motion.div>
            }
        </>
    );
  }
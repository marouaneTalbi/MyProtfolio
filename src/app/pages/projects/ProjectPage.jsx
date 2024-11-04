import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import Typical from 'react-typical'


export default function ProjectPage({project, backToProjects}) {

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
                className="rounded-lg p-5 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <div className="flex flex-col mb-4">
                    <h1 className="text-5xl font-bold text-white mb-4">{project.name}</h1>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.company}</h2>
                    <p className="text-gray-700 mb-4 text-xl font-bold">
                        <Typical
                            steps={['', 500, `${project.startDate} - ${project.endDate}`, 500]}
                            loop={1}
                            wrapper="p"
                        />
                    </p>
                </div>

                <div className="flex flex-col mb-0">
                    <h3 className="text-2xl font-semibold text-gray-800 mt-6">Description</h3>
                    <p className="text-gray-900 mb-4 text-l font-bold">{project.description}</p>
                </div>

                <div className="flex flex-col mb-4 h-5/6">
                    <h3 className="font-semibold text-gray-800 text-2xl">Tâches réalisées</h3>
                    <ul className="list-disc pl-5 text-gray-700 overflow-y-auto" style={{ height: '100%' }}>
                        {project.taches.map((task, index) => (
                            <li key={index} className="text-gray-900 mt-1 font-bold ">
                                {task.description}
                       
                                
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-row mb-4  ">
                    <div className="w-1/3">
                        <h3 className="text-3xl font-semibold text-gray-800 mt-6">Technologies</h3>
                        <div className="flex flex-wrap">
                            <ul className="list-disc pl-5 mb-4 overflow-auto w-full">
                                {project.techno.map((tech) => (
                                    <li key={tech.name} className="text-gray-700 font-bold">
                                        {tech.name} ({tech.type})
                                       
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <motion.div className=" w-full flex flex-wrap h-min p-0 ml-10 mt-10">
                        {project.techno.map((tech, index) => (
                            <motion.div 
                                className=" m-2 mt-5 p-2 bg-white rounded-full shadow-lg flex  items-center justify-center"
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
                                height: '40px',
                                width: '40px',
                                }}
                            />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>


            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity:  1  }}
                transition={{ duration: 2 }}
                    className=" p-5  absolute right-0 top-0" 
                >
                    <img src={`/projects/${project.img}`} alt={project.name} className="w-20" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity:  1  }}
                transition={{ duration: 2 }}
                className="absolute bottom-0 right-0 p-5 w-1/5"
            >
                    <img src={`/general/projects.svg`} alt={project.name} className="w-full" />
            </motion.div>

        </>
    );
  }
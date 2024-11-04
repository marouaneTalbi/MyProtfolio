import { motion } from "framer-motion";
import { XIcon } from '@heroicons/react/solid';
import CompanyProjectCard from "./CompanyProjectCard"

export const Modal = ({ techno, onClose }) => {
    console.log(techno);

    const esgi = {project:'esgi', name:'ESGI', icon:'esgi.webp', company:'ESGI'}
  
    
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black bg-opacity-20 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center h-full">
                    <motion.div
                        className="w-5/6 h-6/6 relative transform overflow-hidden rounded-lg bg-white bg-opacity-95 text-left shadow-xl transition-all"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button 
                            onClick={onClose} 
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 focus:outline-none"
                        >
                           <span className="text-2xl ">X</span>
                        </button>


                        <div className=" p-4 grid grid-col-3 grid-row-2 grid-flow-col gap-1">
                            <div className="flex justify-left row-start-1 row-span-1 h-min w-3/3">
                                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 shadow-lg">
                                    <motion.img 
                                        src={`./technos/${techno.icon}.svg`} 
                                        alt="Tech Icon" 
                                        className="h-24 w-24 opacity-90" 
                                        whileHover={{ scale: 1.05 }} 
                                    />
                                </div>
                            </div>

                            <div className="  row-start-2 row-span-1 h-min w-3/3 ">
                                <h1 className="text-4xl text-gray-900 mt-5">{techno.name}</h1>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900" id="modal-title">Technology Details</h3>
                                <p className="mt-2  text-gray-900">
                                    Details about this technology and its applications in your projects.
                                </p>
                            </div>

                            {
                                techno.projects && techno.projects.length > 0 && 
                                <div className="row-start-3 col-span-1  w-3/3 ">
                                    <h4 className="mt-4 text-xl font-semibold text-gray-800">Projects:</h4>
                                    <ul className="list-disc pl-5 mt-2">
                                        { techno.projects.map((project, index) => (
                                            <li key={index} className="text-gray-700">
                                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="underline ">
                                                    {project.repo}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-2 mt-2 h-50 ">
                                         <CompanyProjectCard  project={esgi} />
                                     </div>
                                </div>
                            }

                            {
                                techno.company_project && techno.company_project.length > 0 &&
                                <div className=" row-start-1 row-end-4 col-span-3 w-4/4 ">
                                <h4 className="mt-4 font-semibold text-gray-800">Company Projects:</h4>
                                <div className="flex gap-2 mt-2 h-50 ">
                                    {  techno.company_project.map((project, index) => (
                                         <CompanyProjectCard key={index} project={project} />
                                    ))}
                                </div>
                                </div>
                            }
                          
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

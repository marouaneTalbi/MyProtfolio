import { motion } from "framer-motion";
import { XIcon } from '@heroicons/react/solid';
import CompanyProjectCard from "./CompanyProjectCard"

export const Modal = ({ techno, onClose }) => {
    console.log(techno);
    
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black bg-opacity-20 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center h-full">
                    <motion.div
                        className="w-5/6 h-5/6 relative transform overflow-hidden rounded-lg bg-white bg-opacity-95 text-left shadow-xl transition-all"
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
                        <div className="p-10">
                            <div className="flex justify-left">
                                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 shadow-lg">
                                    <motion.img 
                                        src={`./technos/${techno.icon}.svg`} 
                                        alt="Tech Icon" 
                                        className="h-24 w-24 opacity-90" 
                                        whileHover={{ scale: 1.05 }} 
                                    />
                                </div>
                            </div>
                            <h1 className="text-5xl text-gray-900 mt-5">{techno.name}</h1>
                            <h3 className="mt-4 text-3xl font-semibold text-gray-900" id="modal-title">Technology Details</h3>
                            <p className="mt-2 text-xl text-gray-900">
                                Details about this technology and its applications in your projects.
                            </p>


                            {
                                techno.projects && techno.projects.length > 0 && 
                                <>
                                <h4 className="mt-4 text-3xl font-semibold text-gray-800">Projects:</h4>
                                <ul className="list-disc pl-5 mt-2">
                                    { techno.projects.map((project, index) => (
                                        <li key={index} className="text-gray-700">
                                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="underline text-xl">
                                                {project.repo}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                </>
                            }

                            {
                                techno.company_project && techno.company_project.length > 0 &&
                                <>
                                <h4 className="mt-4 text-xl font-semibold text-gray-800">Company Projects:</h4>
                                <div className="flex gap-2 mt-2 h-50 ">
                                    {  techno.company_project.map((project, index) => (
                                         <CompanyProjectCard key={index} project={project} />
                                    ))}
                                </div>
                                </>
                            }
                          
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

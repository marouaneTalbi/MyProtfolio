import { motion } from "framer-motion";
import { XIcon } from '@heroicons/react/solid';
import CompanyProjectCard from "./CompanyProjectCard"

export const Modal = ({ techno, onClose }) => {
    const esgi = {project:'esgi', name:'ESGI', icon:'esgi.webp', company:'ESGI'}

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black bg-opacity-20 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 z-10 ">
                <div className="flex items-center justify-center h-full ">
                    <motion.div
                        className="lg:w-full  h-full relative transform overflow-hidden rounded-lg bg-white bg-opacity-95 text-left shadow-xl transition-all overflow-y-auto "
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button 
                            onClick={onClose} 
                            className="absolute top-1  lg:right-2 px-2 lg:px-0  text-gray-500 hover:text-gray-900 focus:outline-none  "
                        >
                           <span className="text-2xl ">X</span>
                        </button>


                        <div className="mt-5 p-4 lg:grid lg:grid-col-3 lg:grid-span-6 lg:grid-flow-col lg:gap-1 ">
                            <div className="flex justify-left row-start-1 col-span-8 h-min w-3/3">
                                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 shadow-lg">
                                    <motion.img 
                                        src={`./technos/${techno.icon}.svg`} 
                                        alt="Tech Icon" 
                                        className="h-24 w-24 opacity-90" 
                                        whileHover={{ scale: 1.05 }} 
                                    />
                                </div>
                            </div>

                            <div className="lg:row-start-2 lg:col-span-8 h-min w-4/4 ">
                                <h1 className="text-4xl text-gray-900 mt-5 text-white">{techno.name}</h1>
                                <h3 className="mt-4 text-xl font-semi bold text-gray-900" id="modal-title">Technology Details</h3>
                                <p className="mt-2  text-gray-900 text-xs">
                                    Details about this technology and its applications in your projects.
                                </p>
                            </div>

                            {
                                techno.projects && techno.projects.length > 0 && 
                                <div className="lg:row-start-3 lg:col-span-8  w-3/3 ">
                                    <h4 className="mt-4 lg:text-xl font-semibold text-gray-800">Projects:</h4>
                                    <ul className="list-disc pl-5 mt-2">
                                        {techno.projects.map((project, index) => (
                                            <li key={index} className="text-gray-700 lg:text-sm text-xs break-words">
                                                <a href={project.repo} rel="noopener noreferrer" className="underline">
                                                    {project.repo}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex lg:gap-2 mt-4 h-50 flex-wrap  ">
                                         <CompanyProjectCard  project={esgi} />
                                     </div>
                                </div>
                            }

                            {
                                techno.company_project && techno.company_project.length > 0 &&
                                <div className="lg:row-start-1 lg:row-end-4 col-span-3 w-4/4   ">
                                <h4 className="mt-4 font-semibold text-gray-800">Company Projects:</h4>
                                <div className="flex lg:gap-2 mt-2 h-50 flex-wrap  gap-1 p-1 ">
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

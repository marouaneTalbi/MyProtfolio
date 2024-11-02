import { motion } from "framer-motion";
import { XIcon } from '@heroicons/react/solid'; // Assurez-vous d'avoir installé Heroicons

export const Modal = ({ techIcon, onClose }) => {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black bg-opacity-20 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center h-full">
                    <motion.div
                        className=" w-5/6 h-5/6 relative transform overflow-hidden rounded-lg bg-white  bg-opacity-85 text-left shadow-xl transition-all"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button 
                            onClick={onClose} 
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                           <span>X</span>
                        </button>
                        <div className="p-10">
                            <div className="flex justify-left">
                                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 shadow-lg">
                                    <motion.img 
                                        src={`./technos/${techIcon}.svg`} 
                                        alt="Tech Icon" 
                                        className="h-24 w-24 opacity-90" 
                                        whileHover={{ scale: 1.05 }} 
                                    />
                                </div>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-900" id="modal-title">Technology Details</h3>
                            <p className="mt-2 text-gray-700">
                                Details about this technology and its applications in your projects.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

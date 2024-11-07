import { motion } from "framer-motion";
import DownloadButton from "../components/DownloadButton";

export default function Resum() {
  
    return (
        <>
            <div className="absolute lg:bottom-10 lg:left-8 bottom-10 ">
                <DownloadButton />
            </div>
            <div className="flex flex-col items-center justify-center lg:justify-normal w-full h-full lg:flex lg:flex-col lg:w-full lg:h-full   lg:mb-0 mb-16">
                <h1 className="text-4xl font-bold text-center text-white mb-0 lg:mb-8 mb-8 ">CV</h1>
                <div className="flex items-center justify-center w-full lg:w-1/3 lg:p-2 bg-gray-200">
                <img 
                src={`/cv.jpg`} 
                className="object-cover w-full h-auto max-h-full" 
                alt="Mon CV" 
                />
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity:  1  }}
                transition={{ duration: 2 }}
                className="absolute lg:bottom-0 lg:right-0 lg:p-5 lg:w-1/6 bottom-0 right-0 p-0 w-1/3"
            >
                <img src={`/general/resum.svg`}  className="w-full" />
            </motion.div>
        </>
    );
  }
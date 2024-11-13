import { motion } from "framer-motion";
import DownloadButton from "../components/DownloadButton";

export default function Resum() {
  
    return (
        <>
            <div className="absolute lg:bottom-10 lg:left-8 bottom-6 ">
                <DownloadButton />
            </div>
            <div 
            className="flex flex-col items-center justify-center lg:justify-normal w-full h-full lg:flex lg:flex-col lg:w-full lg:h-full   mb-10 "
            >
                {/* <h1 className="text-4xl font-bold text-center text-white lg:mb-2 mb-4 ">CV</h1> */}
                <div 
                className="flex items-center justify-center   lg:w-2/6">
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
                className="absolute bottom-0 right-0 p-5 w-2/6 lg:w-1/6 "
            >
                <img src={`/general/resum.svg`}  className="w-full" alt="resume"/>
            </motion.div>
        </>
    );
  }
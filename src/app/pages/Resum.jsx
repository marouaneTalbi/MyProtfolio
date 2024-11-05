import { motion, useInView } from "framer-motion";
import DownloadButton from "../components/DownloadButton";

export default function Resum() {
  
    return (
        <>
                {/* <h1>Resum</h1> */}
            <div className="absolute lg:bottom-10 lg:left-8 bottom-20 ">
                <DownloadButton />
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/3 ">
                <img 
                src={`/cv.jpg`} 
                className="object-cover w-full h-auto max-h-full" 
                alt="Mon CV" 
                />
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
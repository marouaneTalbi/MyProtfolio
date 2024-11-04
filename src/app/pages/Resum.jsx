import { motion, useInView } from "framer-motion";
import DownloadButton from "../components/DownloadButton";

export default function Resum() {
  
    return (
        <>
                {/* <h1>Resum</h1> */}
                <div className="absolute bottom-10 left-9">
                    <DownloadButton />
                </div>
            <div className="flex items-center justify-center w-2/5 ">
                <img 
                src={`/cv.jpg`} 
                className="object-cover w-full h-auto  max-h-full" 
                alt="Mon CV" 
                />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity:  1  }}
                transition={{ duration: 2 }}
                className="absolute bottom-0 right-0 p-5 w-1/5"
            >
                <img src={`/general/resum.svg`}  className="w-full" />
            </motion.div>
        </>
    );
  }
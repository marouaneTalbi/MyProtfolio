import { motion, useInView } from "framer-motion";


export default function Resum() {
  
    return (
        <>
                <h1>Resum</h1>

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
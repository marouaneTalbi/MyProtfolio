import { motion } from "framer-motion";

export default function DownloadButton() {
    return (
        <div className="flex justify-center mt-5">
            <motion.a 
                href="cv.pdf"
                download
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} 
            >
                Télécharger
            </motion.a>
        </div>
    );
}

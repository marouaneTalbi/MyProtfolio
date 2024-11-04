import { motion } from "framer-motion";

export default function Contact() {
    const email = "talbi.marouane@gmail.com";
    const phone = "0769323701";
    const github = "https://github.com/marouaneTalbi";
    const linkedin = "https://linkedin.com/in/marouane-talbi";

    return (
        <>

        <div className="flex flex-col w-full h-full">

            <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="flex flex-col items-left  justify-left bg-blue-50 rounded-lg shadow-lg p-10  mx-auto w-full"
            >
                <p className="text-xl mb-2">📧 Email: {email}</p>
                <p className="text-xl mb-2">📞 Phone: {phone}</p>
                <p className="text-xl mb-2">Adresse: Corbeil-Essonnes, France 91100</p>
                
                    <p className="text-xl">
                        GitHub: <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mr-4">
                        https://github.com/marouaneTalbi
                        </a>
                    </p>
                    <p className="text-xl">
                        LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        https://www.linkedin.com/in/marouane-talbi-935776209/</a>
                    </p>
                    
            </motion.div>

        </div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute bottom-0 right-0 p-5 w-1/5"
            >
                <img src={`/general/contact.svg`} className="w-full" />
            </motion.div>
        </>
    );
}

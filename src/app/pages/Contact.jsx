export default function Contact() {
    const email = "talbi.marouane@gmail.com";
    const phone = "0769323701";
    const github = "https://github.com/marouaneTalbi";
    const linkedin = "https://linkedin.com/in/marouane-talbi";

    return (
        <>

        <div className="flex flex-col  lg:justify-normal w-full h-full lg:flex lg:flex-col lg:w-full lg:h-full mt-10 ">

            <h1 className="text-4xl font-bold text-center text-white mb-0 lg:mb-8 ">Contact</h1>

            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="flex flex-col items-left  justify-left  rounded-lg shadow-lg p-10  mx-auto w-full mt-20"
            >
                <p className="lg:text-xl text-sm lg:mb-2 ">📧 Email: {email}</p>
                <p className="lg:text-xl text-sm lg:mb-2 mt-2">📞 Phone: {phone}</p>
                <p className="lg:text-xl text-sm lg:mb-2 mt-2">Adresse: Corbeil-Essonnes, France 91100</p>
                
                    <p className="lg:text-xl text-xs lg:mb-2 mt-5">
                        GitHub: <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mr-4">
                        https://github.com/marouaneTalbi
                        </a>
                    </p>
                    <p className="lg:text-xl text-xs lg:mb-2 mt-5">
                        LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        https://www.linkedin.com/in/marouane-talbi-935776209/</a>
                    </p>
                    
            </div>

        </div>


            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute bottom-10 right-0 p-2 w-2/5 lg:bottom-0 lg:right-0 lg:p-5 lg:w-1/5"
            >
                <img src={`/general/contact.svg`} className="w-full" alt="contact" />
            </div>
        </>
    );
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const projects = [
      {
        name: "ÉTOILE",
        company: "Yomeva",
        startDate: "Septembre 2024",
        endDate: "Mars 2024",
        description: "Implémentation d'un système de notifications en temps réel pour améliorer l'interaction utilisateur. Intégration de l'IA via l'API ChatGPT.",
        img:"yomeva.png",
      },
      {
        name: "MY CONSTAT",
        company: "Foncia",
        startDate: "Septembre 2022",
        endDate: "Février 2024",
        description: "Développement d'une application mobile avec React Native. Utilisation de Docker pour la gestion des environnements.",
        img:"foncia.png",
      },
      {
        name: "MANAGER ROOM / AMADEUS",
        company: "Thales",
        startDate: "Mars 2022",
        endDate: "Septembre 2022",
        description: "Développement de composants React.js et gestion des API RESTful avec Symfony. Optimisation des performances front-end.",
        img:"thales.png",
      },
      {
        name: "ALTO TOUR",
        company: "IVIFLO",
        startDate: "Septembre 2021",
        endDate: "Mars 2022",
        description: "Développement avec Ionic Angular, amélioration continue de l'application selon les feedbacks clients.",
        img:"iviflo.png",
      }
    ];
  
    return (
      <section className="min-h-screen p-10  bg-cover bg-center backdrop-blur-lg">
        <div className="min-h-screen  flex items-center justify-center p-10 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg p-6s">

        {projects.map((project) => (
          <motion.div
              key={project.name}
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="relative w-1/4 h-full m-2 p-10 rounded-lg border-8 border-white overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
              style={{
                backgroundImage: `url(/projects/${project.img})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '800px',
                filter: 'blur(10px)',
                transition: 'filter 0.1s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'blur(0px)'; 
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'blur(10px)'; 
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-5 m-5 bg-white bg-opacity-80 rounded-lg">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <h3 className="text-md italic">{project.company}</h3>
                <p>{project.description}</p>
                <p className="text-sm text-gray-500">
                  {project.startDate} - {project.endDate}
                </p>
              </div>
        </motion.div>
        ))}
            
  


        </div>
      </section>
    );
  }
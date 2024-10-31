import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {Modal} from "../components/Modal";

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [techno, setTechno] = useState(null);

  const handleTechnoClick = (tech) => {
    console.log(tech)
    setTechno(tech);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    // setTechno(null);
  };

  const technos = [
    'laravel', 'nestjs', 'nextdotjs', 'nodedotjs', 'php', 'react', 'sass', 'symfony', 'vuedotjs', 'wordpress',
    'amazoncloudwatch', 'amazondynamodb', 'amazonec2', 'amazonecs', 'amazonrds', 'amazonroute53', 'amazons3', 'amazonwebservices',
    'angular', 'awsamplify', 'awslambda', 'css3', 'docker', 'go', 'html5', 'javascript',
  ];


  return (
    <section className="min-h-screen p-10  bg-cover bg-center backdrop-blur-lg">

      <div  className="min-h-screen  flex flex-col items-center justify-center p-10 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg p-6s">
        <div className="p-10">
          <h1 className="text-5xl text-white">SKILLS</h1>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="p-10 rounded"
        >
          <div className="flex flex-wrap justify-left mt-4 p-1 ">
            {technos.map((item, index) => (
              <motion.div 
                key={item} 
                className="m-2 ml-10 p-4 bg-white rounded-full shadow-lg flex items-center justify-center"
                onClick={() => handleTechnoClick(item)}
                style={{
                  height: 200,
                  width: 200,
                }}
                animate={{ y: [0, -10, 0] }} // Animation de rebond
                transition={{ 
                  duration: 0.6 + index * 0.2, // Durée d'animation qui augmente avec l'index
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={`./technos/${item}.svg`} 
                  alt="Development Icon" 
                  style={{
                    height: 150,
                    width: 150,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>


      {modalIsOpen && <Modal techIcon={techno} onClose={closeModal}  />}
    </section>
  );
}

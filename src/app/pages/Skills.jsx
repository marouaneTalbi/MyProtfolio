import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {Modal} from "../components/Modal";

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [techno, setTechno] = useState(null);

  const handleTechnoClick = (tech) => {
    setTechno(tech);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const technos = [
    'laravel', 'nestjs', 'nextdotjs', 'nodedotjs', 'php', 'react', 'sass', 'symfony', 'vuedotjs', 'wordpress',
    'amazoncloudwatch', 'amazondynamodb', 'amazonec2', 'amazonecs', 'amazonrds', 'amazonroute53', 'amazons3', 'amazonwebservices',
    'angular', 'awsamplify', 'awslambda', 'css3', 'docker', 'go', 'html5', 'javascript',
  ];

  const technoObjects = technos.map(techno => ({
    name: techno,
    duration: Math.floor(Math.random() * 10) + 1 
  }));
  
  return (
    <>
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
            {technoObjects.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="m-2 ml-10 p-4 bg-white rounded-full shadow-lg flex items-center justify-center"
                onClick={() => handleTechnoClick(item.name)}
                style={{
                  height: '120px',
                  width: '120px',
                }}
                animate={{ y: [0, -10, 0] }} // Animation de rebond
                transition={{ 
                  duration: 0.6 + item.duration * 0.2, // Durée d'animation qui augmente avec l'index
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={`./technos/${item.name}.svg`} 
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
      {modalIsOpen && <Modal techIcon={techno} onClose={closeModal}  />}
      </>
  );
}

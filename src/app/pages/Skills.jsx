import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {Modal} from "../components/Modal";
import {Technos} from "../mock/technos"

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

  const technoObjects = Technos.map(techno => (
    {...techno, duration: Math.floor(Math.random() * 10) + 1}

));

  console.log(technoObjects)
  
  return (
    <>
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
                onClick={() => handleTechnoClick(item)}
                style={{
                  height: '130px',
                  width: '130px',
                }}
                animate={{ y: [0, -10, 0] }} 
                transition={{ 
                  duration: 0.6 + item.duration * 0.2, 
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={`./technos/${item.icon}.svg`} 
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 right-0 p-5 w-1/5"
        >
          <img src={`/general/skills.svg`}  className="w-full" />

        </motion.div>

      {modalIsOpen && <Modal techno={techno} onClose={closeModal}  />}
      </>
  );
}

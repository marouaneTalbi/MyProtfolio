import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {Modal} from "../components/Modal";
import {Technos, } from "../mock/technos";
import {TechImages, TechnosTypes} from "../mock/technosImg";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

import ImageSlider from "../components/imageSlider/ImageSlider"

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [techno, setTechno] = useState(null);
  const [technoType, setTechnoType] = useState(null);
  const [allTechnos, setallTechnos] = useState([]);

  const handleTechnoClick = (tech) => {
    setTechno(tech);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };



  useEffect(() => {
    if(technoType) {
      const technoObjects = Technos.map(techno => (
        {...techno, duration: Math.floor(Math.random() * 10) + 1}
      ));
      const filteredTechnoObjects = technoObjects.filter((item) => item.type === technoType.type)
      setallTechnos(filteredTechnoObjects)
    }
  }, [technoType])

  return (
    <>
      { technoType &&
        <button  
            onClick={() => setTechnoType(null)} 
            className="text-white hover:bg-blue-300 rounded px-4 py-2 mb-4 absolute top-2 left-0"
        >
            <ArrowLeftCircleIcon className="size-10 text-white-500" />
        </button>
      }

      {
        technoType  ? 
        <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 2 }}
        className="p-10 rounded"
        >
        <div className="flex flex-wrap justify-left mt-4 p-1 ">
          {allTechnos && allTechnos.map((item, index) => (
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
        </motion.div>:
        <div className="grid grid-rows-2 grid-flow-col gap-1  w-full h-full g-red-500">
          {
            TechnosTypes.map((techno) =>(
                <div 
                onClick={()=>setTechnoType(techno)}
                className={`relative ${techno.style} m-1 p-5 rounded-lg border-2 border-white overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105`}>
                  <div className="absolute bottom-0 left-0 p-5 m-5 " >
                    <h1 className="text-3xl text-white font-bold">{techno.name}</h1>
                  </div> 
                  <div 
                    key={techno.name}
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity:  1  }}
                    transition={{ duration: 0.5 }}
                    style={{
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      height: '100%',
                      transition: 'filter 0.1s ease',
                    }}
                  >
                      {
                        techno.type !== 'mobile' && 
                        <ImageSlider images={TechImages[techno.type]} />
                      }
                  </div>
              </div>
            ))
          }
        </div>
      }

      {modalIsOpen && <Modal techno={techno} onClose={closeModal}  />}
     

        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 right-0 p-5 w-1/5"
        >
          <img src={`/general/skills.svg`}  className="w-full" />
        </motion.div> */}
      </>
  );
}

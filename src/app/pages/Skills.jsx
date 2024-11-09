"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {Modal} from "../components/Modal";
import {Technos, } from "../mock/technos";
import {TechImages, TechnosTypes} from "../mock/technosImg";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import ImageSlider from "../components/imageSlider/ImageSlider"

export default function Skills() {
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
            className="text-white  rounded lg:px-4 lg:py-2 mb-4 absolute lg:top-2 left-0 top-0 px-0 py-1"
        >
            <ArrowLeftCircleIcon className="size-12 text-white-500" />
        </button>
      }

      {
        technoType  ? 
        <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 2 }}
        className="lg:p-0 rounded  lg:h-4/5 h-full overflow-y-auto lg:mt-0 mt-20 h-full p-5 "
        >
        <div className="flex flex-wrap lg:justify-start justify-center lg-mt-4 lg:p-1  mb-5 lg:h-full ">
          {allTechnos && allTechnos.map((item, index) => (
            <div className=" m-1 flex  flex-col lg:ml-0  m-1 items-center ">
              <motion.div 
                key={index} 
                className="lg:m-2 m-2 p-4 bg-white rounded-full shadow-lg flex items-center justify-center lg:h-[130px] lg:w-[130px] h-[80px] w-[80px]"
                onClick={() => handleTechnoClick(item)}
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
              <h1 className="text-center text-white">{item.name}</h1>
            </div>

          ))}
        </div>
        </motion.div>:
        <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-1 flex flex-col w-full h-full lg:py-4 py-4">
          {
            TechnosTypes.map((techno) =>(
                <div 
                onClick={()=>setTechnoType(techno)}
                key={techno.name}
                className={`relative ${techno.style} m-1 lg:p-5  rounded-lg border-2 border-white overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105`}>
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
      </>
  );
}

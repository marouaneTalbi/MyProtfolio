"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Typical from 'react-typical';
import { useSidebar } from "../context/sideBarContext";
import { sections } from "../mock/technosImg";
import { useNavigate } from "react-router-dom";


export default function Welcom() {
  const [hideBloc, setHideBloc] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { setHideBar } = useSidebar();
  const navigate = useNavigate();

  const navigation = (route) => {
    navigate(route);
    setHideBar(false);  
  };

  const presentation = `Développeur Full Stack passionné, je crée des solutions web dynamiques avec React, Symfony et AWS. Toujours à la recherche de nouveaux défis, je m'engage à offrir une expérience utilisateur de qualité tout en optimisant les performances des applications.`;

  return (
    <>
      {!hideBloc && (
        <div className="flex flex-col lg:w-4/6 w-full mx-auto p-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl lg:text-6xl font-bold text-white text-center"
          >
            <Typical steps={['M', 500, 'Marouane TALBI', 500]} loop={4} wrapper="p" />
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl lg:text-4xl text-white text-center"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl text-white mt-4 text-left"
          >
            {presentation}
          </motion.p>
          <div className="flex items-center justify-center p-4 mt-4">
            <button onClick={() => setHideBloc(true)} className="neon text-2xl sm:text-3xl border-2 border-blue-500 text-white bg-transparent rounded-lg px-6 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white w-full">
              START
            </button>
          </div>
        </div>
      )}
      {hideBloc && (
        <div className="lg:grid lg:grid-rows-2 lg:gap-y-1 lg:grid-flow-col lg:gap-0 lg:w-full lg:h-full w-full h-full flex flex-col h-auto lg:py-0 py-6">
          {sections.map((section, index) => (
            <div className={`relative ${section.style} m-1 p-5 rounded-lg border-2 border-white overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105`} key={index}>
              <div className="absolute lg:bottom-0 lg:left-0 lg:p-5 lg:m-5 bottom-0 left-0 p-5 m-0">
                <h1 className="lg:text-3xl text-white font-bold">{section.name}</h1>
              </div>
              <div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundImage: `url(/general/${section.img})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  height: '100%',
                  transition: 'filter 0.1s ease',
                }}
                onClick={() => navigation(section.route)} // Navigue vers la route du section
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'blur(0px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'blur(10px)';
                }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

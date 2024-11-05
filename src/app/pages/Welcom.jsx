"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Typical from 'react-typical'
import { useNavigate } from 'react-router-dom';
import { div, use } from "framer-motion/m";
import useHideSideBar, { useSidebar } from "../context/sideBarContext"

export default function Welcom() {

  const [hideBloc, setHideBloc] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { setHideBar } = useSidebar();
  const navigate = useNavigate();

  const navigation = (route) => {
    navigate(route);
    setHideBar(true);
  };

  const getStyleOfDiv = (style) => {
    const className = `relative ${style} m-1 p-5 rounded-lg border-2 border-white overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105`
    return className;
  }

  const hideWelcomPage = () => {
    setHideBloc(true)
  }

  const sections = [

    {name:'PROJECTS', route:'/projects', img: 'projects.svg', style:'lg:row-start-1 lg:row-span-1 h-1/5 lg:h-96'},
    {name:'PARCOURS', route:'/career', img: 'teaching.svg', style:'lg:row-start-2 lg:row-span-1 h-1/5 lg:h-96'},
    {name:'SKILLS', route:'/skills', img: 'skills.svg', style:'lg:row-start-1 lg:row-span-1 h-1/5 lg:h-96'},
    {name:'RESUM', route:'/resum', img: 'resum.svg', style:'lg:row-start-2 lg:row-span-1 h-1/5 lg:h-96'},
    {name:'CONTACT', route:'/contact', img: 'contact.svg', style:'lg:row-span-3 h-1/5 lg:h-full'},
  ]

  return (

    <>
      {
          !hideBloc && 
          <div className="flex flex-col lg:w-4/6 w-full   mx-auto p-0 lg:p-4 p-4  ">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl lg:text-6xl font-bold text-white text-center"
            >
              <Typical
                steps={['M', 500, 'Marouane TALBI', 500]}
                loop={4}
                wrapper="p"
              />
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
              I'm Marouane Talbi, a passionate web developer with experience in
              building dynamic applications using modern technologies like React,
              Next.js, and more. I thrive on challenges and continuously seek to
              improve my skills and knowledge in the tech industry.
            </motion.p>
            <div className="flex items-center justify-center p-4 mt-4">
              <button onClick={hideWelcomPage} className="neon text-2xl sm:text-3xl border-2 border-blue-500 text-white bg-transparent rounded-lg px-6 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white w-full">
                START
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute bottom-0 right-0 p-0 w-3/4 lg:w-1/4"
            >
              <img src={`/general/code.svg`} className="w-full" />
            </motion.div>
          </div>

      }

      {
        hideBloc &&  
        <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-0 lg:w-full lg:h-full w-full h-full flex flex-col h-auto    ">
        {
          sections.map((section) => 
            (
              <div className={getStyleOfDiv(section.style)}>
                <div className="absolute lg:bottom-0 lg:left-0 lg:p-5 lg:m-5 bottom-0 left-0 p-5 m-0 " >
                  <h1 className="lg:text-3xl text-white font-bold">{section.name}</h1>
                </div> 
                <div 
                  key={section.name}
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
                    filter: 'blur(10px)',
                    transition: 'filter 0.1s ease',
                  }}
                  onClick={()=>navigation(section.route)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'blur(0px)'; 
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'blur(10px)'; 
                  }}>

                </div>
              </div>
            )
          )
        }
        </div>
      }









    </>
  );
}

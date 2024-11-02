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
    const className = `relative ${style} m-1 p-5 rounded-lg border-8 border-white overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105`
    return className;
  }

  const hideWelcomPage = () => {
    setHideBloc(true)
  }

  const sections = [

    {name:'PROJECTS', route:'/projects', img: 'projects.svg', style:'row-start-1 row-span-1'},
    {name:'PARCOURS', route:'/about', img: 'teaching.svg', style:'row-start-2 row-span-1'},
    {name:'SKILLS', route:'/skills', img: 'skills.svg', style:'row-start-1 row-span-1'},
    {name:'RESUM', route:'/resum', img: 'resum.svg', style:'row-start-2 row-span-1'},
    {name:'CONTACT', route:'/contact', img: 'contact.svg', style:'row-span-3'},
  ]

  return (

    <>
      {
          !hideBloc && 
          <div className="flex flex-col w-1/2 w-4/6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-8xl font-bold text-white"
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
              className="text-5xl text-white"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl text-white mt-4 w-full "
            >
            I'm Marouane Talbi, a passionate web developer with experience in 
              building dynamic applications using modern technologies like React, 
              Next.js, and more. I thrive on challenges and continuously seek to 
              improve my skills and knowledge in the tech industry.
            </motion.p>
            <div className="flex items-center justify-center p-20 mt-20" >
              <button onClick={hideWelcomPage} className="neon text-5xl border-2  border-blue-500 text-white bg-transparent rounded-lg px-6 py-5 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white w-full">
                START
              </button>
          </div>
          <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity:  1  }}
                transition={{ duration: 2 }}
                className="absolute bottom-0 right-0 p-5 w-2/6"
            >
                    <img src={`/general/code.svg`}  className="w-full" />

            </motion.div>
          </div>
      }

      {
        hideBloc &&  
        <div className="grid grid-rows-2 grid-flow-col gap-0  w-full h-full">
        {
          sections.map((section) => 
            (
              <div className={getStyleOfDiv(section.style)}>
                <div className="absolute bottom-0 left-0 p-5 m-5 " >
                  <h1 className="text-3xl text-white font-bold">{section.name}</h1>
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

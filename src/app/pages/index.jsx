"use client";

import { motion } from "framer-motion";
import Welcom from "./Welcom";
import Header from "./Header";
import SkillsSection from "./Skills";
import ProjectsSection from "./Projects";
import CareerPath from "./CareerPath";
import Resum from "./Resum";
import Contact from "./Contact";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { SidebarProvider, useSidebar } from "../context/sideBarContext";
import { useEffect, useState } from "react";

export default function Index() {
  const { hideSideBar, setHideBar } = useSidebar();
  const [showSideBar, stShowSideBar] = useState();

  useEffect(() => {
    stShowSideBar(hideSideBar)
    console.log(hideSideBar)
  }, [hideSideBar]);

  return (
      <Router>
        <div className="relative min-h-screen bg-[url('/img.jpg')] bg-cover bg-fixed bg-center flex w-full bg-cover bg-center backdrop-blur-lg">
          <div className="flex-none w-15">
            {showSideBar && <Header />}
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -250 }}
            transition={{ duration: 0.5 }}
            // className=" flex-1 bg-cover bg-center backdrop-blur-lg overflow-hidden h-screen flex items-center justify-center  sm:p-6 md:p-8 p-20">
              className="responsive-padding flex-1 bg-cover bg-center backdrop-blur-lg overflow-hidden flex items-center justify-center h-screen" >
              {
                showSideBar !== null && !showSideBar && 
                <button  
                onClick={() => setHideBar(true)} 
                className="text-white hover:bg-blue-300 rounded px-1 py-0 mb-4 absolute top-5 left-0"
              >
                <ArrowRightCircleIcon className="size-8 text-white-500" />
              </button>
              }
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -250 }}
              transition={{ duration: 1 }}
              className="w-full flex items-center justify-center overflow-hidden p-10 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg" style={{ height: '110%' }}>
      
              <Routes>
                <Route path="/" element={<Welcom />} />
                <Route path="/skills" element={<SkillsSection />} />
                <Route path="/projects" element={<ProjectsSection />} />
                <Route path="/career" element={<CareerPath />} />
                <Route path="/resum" element={<Resum />} />
                <Route path="/contact" element={<Contact />} />

              </Routes>
            </motion.div>
          </motion.div>
        </div>
      </Router>
  );
}

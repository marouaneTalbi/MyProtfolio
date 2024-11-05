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
import { Bars3Icon } from '@heroicons/react/24/solid'
import { SidebarProvider, useSidebar } from "../context/sideBarContext";
import { useEffect, useState } from "react";

export default function Index() {
  const { hideSideBar, setHideBar } = useSidebar();
  const [showSideBar, stShowSideBar] = useState();

  useEffect(() => {
    stShowSideBar(hideSideBar)
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
              className=" flex-1 bg-cover bg-center backdrop-blur-lg overflow-hidden flex items-center justify-center h-screen lg:p-20 lg:py:0 py-10" >
              {
                showSideBar !== null && !showSideBar && 
                <button  
                onClick={() => setHideBar(true)} 
                className="text-gray-400  rounded  absolute top-2 right-2 lg:left-2 bg-gray-50 h-10 w-10  flex items-center justify-center rounded-full z-50"
              >
                <Bars3Icon className="size-8 text-white-500" />
              </button>
              }
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -250 }}
              transition={{ duration: 1 }}
              className="w-full flex items-center justify-center overflow-hidden lg:p-10  bg-white bg-opacity-50 backdrop-blur-lg rounded-lg" style={{ height: '110%' }}>
      
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

import './App.css';
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CareerPath from './app/pages/career';
import Welcom from './app/pages/Welcom';
import Resum from './app/pages/Resum';
import Contact from './app/pages/Contact';
import NavBar from './app/pages/navbar';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useSidebar } from "./app/context/sideBarContext";
import { useEffect, useState } from "react";
import ProjectsSection from './app/pages/Projects';
import Skills from './app/pages/Skills';
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
  const { hideSideBar, setHideBar } = useSidebar();
  const [showSideBar, setShowSideBar] = useState();

  useEffect(() => {
    setShowSideBar(hideSideBar);
    console.log(hideSideBar)
  }, [hideSideBar]);

  return (
    <Router>
      <div className='relative min-h-screen   bg-cover bg-fixed bg-center flex w-full  '>
        <AnimatedBackground animationName="particleNetwork" />

        <div className=" w-15">
          {showSideBar && <NavBar />}
      
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -250 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-cover bg-center backdrop-blur-sm overflow-hidden flex items-center justify-center h-screen lg:p-20 lg:py:0 py-10"
        >
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
            className="w-full flex items-center justify-center overflow-hidden lg:p-10 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg"
            style={{ height: '110%' }}
          >
            <Routes>
              <Route path="/" element={<Welcom />} />
              <Route path="/career" element={<CareerPath />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/resum" element={<Resum />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<ProjectsSection />} />
            </Routes>
          </motion.div>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;

"use client";

import { motion } from "framer-motion";
import Welcom from "./Welcom";
import Header from "./Header";
import Iphone from "../components/Phone";

import SkillsSection from "./Skills";
import ProjectsSection from "./Projects";
import AboutMeSection from "./About";
import Resum from "./Resum";

import Amadeus from "../pages/projects/amadeus";
import Etoile from "../pages/projects/etoile";
import Myconstat from "../pages/projects/myconstat";
import SmartBuilding from "../pages/projects/smart-building";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function Index() {
  return (
    <Router>
    <div className="relative min-h-screen bg-[url('/img.jpg')] bg-cover bg-fixed bg-center">
      {/* <Header />  */}
        <Routes>
          <Route path="/" element={<Welcom />} />
          <Route path="/amadeus" element={<Amadeus />} />
          <Route path="/etoile" element={<Etoile />} />
          <Route path="/myconstat" element={<Myconstat />} />
          <Route path="/smartbuilding" element={<SmartBuilding />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/about" element={<AboutMeSection />} />
          <Route path="/resum" element={<Resum />} />
        </Routes>
    </div>
  </Router>
  );
}

"use client";

import { motion } from "framer-motion";
import Header from "./Header";
import Iphone from "../components/Phone";
import AboutMeSection from "./About";
import SkillsSection from "./Skills";
import ProjectsSection from "./Projects";
import Welcom from "./Welcom";

export default function Index() {
  return (
      <div className="relative min-h-screen bg-[url('/img.jpg')] bg-cover bg-fixed bg-center">
      <Header />
      <main className="flex flex-col" >
        <Welcom />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
      </main> 
    </div>
  );
}

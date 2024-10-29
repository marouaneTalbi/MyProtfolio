"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typical from 'react-typical'

export default function Welcom() {

    const presentation =`I'm Marouane Talbi, a passionate web developer with experience in 
          building dynamic applications using modern technologies like React, 
          Next.js, and more. I thrive on challenges and continuously seek to 
          improve my skills and knowledge in the tech industry.`


  return (
    <section className="min-h-screen flex items-center justify-between bg-blue-500 p-10">
      <div className="flex flex-col w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white"
        >
            <Typical
                steps={['M', 1000, 'Marouane TALBI', 500]}
                loop={4}
                wrapper="p"
            />
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl text-white"
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-white mt-4 w-full "
        >
         I'm Marouane Talbi, a passionate web developer with experience in 
          building dynamic applications using modern technologies like React, 
          Next.js, and more. I thrive on challenges and continuously seek to 
          improve my skills and knowledge in the tech industry.
        </motion.p>
      </div>

      <div>      
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
        >
            <img src="/dev1.svg" alt="Development Icon" />
        </motion.div>
      </div>
    </section>
  );
}
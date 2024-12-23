"use client";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectPage from "../components/projects/ProjectPage"
import {projects} from "../mock/projects"

export default function ProjectsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [currentProject, setCurrentPreject] = useState(null)


    const getProject = (project) => {
      setCurrentPreject(project);
    };

    const backToProjects = () => {
      setCurrentPreject(null)
    }
  
    return (
      <>
        {
          !currentProject && 
          <div className="w-full h-full flex lg:flex-row flex-col  py-12 lg:p-2 lg:py-0">
            {  
              projects.map((project, index) => (
                <div 
                  key={index}
                  className="relative lg:w-1/4 h-full m-1 p-10 lg:p-10 rounded-lg border-2 border-white overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 ">
                  <div
                      key={index}
                      ref={ref}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: inView ? 1 : 0 }}
                      transition={{ duration: 1 }}
                      className="lg:blur-lg"
                      style={{
                        backgroundImage: `url(/projects/${project.img})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        height:'100%',
                        transition: 'filter 0.1s ease',
                      }}
                      onClick={()=>getProject(project)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'blur(0px)'; 
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'blur(10px)'; 
                      }}
                    >
                  </div>
                </div>))
            }
          </div>
        }
        {
          currentProject && <ProjectPage project={currentProject} backToProjects={backToProjects}/>
        }
    </>
  );
}
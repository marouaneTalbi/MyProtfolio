import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectPage from "./projects/ProjectPage"
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
         !currentProject && projects.map((project) => (
            <div className="relative w-1/4 h-full m-1 p-10 rounded-lg border-2 border-white overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <motion.div
                  key={project.name}
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  style={{
                    backgroundImage: `url(/projects/${project.img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height:'100%',
                    filter: 'blur(10px)',
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
                  <div className="absolute bottom-0 left-0 right-0 p-2 m-5 bg-white bg-opacity-80 rounded-lg">
                    <h2 className="text-xl font-bold">{project.name}</h2>
                    <h3 className="text-md italic">{project.company}</h3>
                    <p>{project.description}</p>
                    <p className="text-sm text-gray-500">
                      {project.startDate} - {project.endDate}
                    </p>
                  </div>
              </motion.div>
            </div>
          ))}
          {
            currentProject && <ProjectPage project={currentProject} backToProjects={backToProjects}/>
          }
      </>
    );
  }
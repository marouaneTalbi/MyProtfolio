import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function ProjectPage({project, backToProjects}) {

    console.log(project)
  
    return (
        <>
            {
                <button  
                    onClick={() => backToProjects()} 
                    className="text-white hover:bg-blue-300 rounded px-4 py-2 mb-4 absolute top-2 left-0"
                >
                    <ArrowLeftCircleIcon className="size-10 text-white-500" />
                </button>
            }
            <h1>{project.name}</h1>
        </>
    );
  }
import { motion } from "framer-motion";
import { useSidebar } from "../context/sideBarContext";
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const { hideSideBar, setHideBar } = useSidebar();
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setTimeout(() => setHideBar(false), 500);
        setIsVisible(false);
    };



    const sections = [
        { name: "HOME", route: "/" },
        { name: "ABOUT", route: "/about" },
        { name: "SKILLS", route: "/skills" },
        { name: "PROJECTS", route: "/projects" },
        { name: "CONTACT", route: "/contact" },
        { name: "RESUM", route: "/resum" },

    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: -250 }} 
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -250 }} 
            exit={{ opacity: 0, x: -250 }}
            transition={{ duration: 0.5 }} 
            className="bg-gray-900 p-4 h-screen"
        >
            <button 
                onClick={handleClose} 
                className="text-white hover:bg-blue-300 rounded px-4 py-2 mb-4"
            >
                <ArrowLeftCircleIcon className="size-10 text-white-500" />
            </button>
            <motion.ul className="flex flex-col justify-end text-white font-sans p-10 mt-20">
                {sections.map((item) => (
                    <motion.li
                        key={item.name}
                        className="neon text-4xl cursor-pointer text-white hover:text-blue-400 m-3"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => navigate(item.route)}
                    >
                        {item.name}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
}

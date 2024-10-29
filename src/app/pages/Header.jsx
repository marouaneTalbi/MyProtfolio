"use client";

import { motion } from "framer-motion";

export default function Header() {
    return (
        <header className="bg-gray-900 p-4">
            <ul className="flex justify-end text-white font-sans">
                {["HOME", "CONTACT", "ABOUT"].map((item) => (
                    <motion.li
                        key={item}
                        className="text-lg cursor-pointer hover:text-blue-400 ml-3"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </header>
    );
}

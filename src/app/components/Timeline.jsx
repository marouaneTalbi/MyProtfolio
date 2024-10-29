import { motion } from "framer-motion";

export  const TimelineEntry = ({ title, date, description }) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-start mb-8"
  >
    <h3 className="text-lg font-bold text-white">{title}</h3>
    <span className="text-sm text-gray-300">{date}</span>
    <p className="text-gray-200">{description}</p>
  </motion.div>
);

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
  
    return (
      <section className="min-h-screen flex items-center justify-center bg-orange-500">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="p-10 rounded"
        >
          <h2 className="text-2xl">Projects</h2>
          <p>Check out my projects on GitHub!</p>
        </motion.div>
      </section>
    );
  }
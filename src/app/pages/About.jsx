import { motion, useInView } from "framer-motion";
import Iphone from "../components/Phone";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../../node_modules/react-vertical-timeline-component/style.min.css'
// import { AcademicCapIcon } from '@heroicons/react/solid';


import { useRef } from "react";

export default function AboutMeSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
  
    return (
      <section className="min-h-screen flex items-center justify-center bg-green-500">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="p-10 rounded"
        >
          <h2 className="text-2xl">About Me</h2>
          <p>I'm a passionate web developer with experience in building dynamic applications.</p>
        </motion.div>

        <VerticalTimeline>
            <VerticalTimelineElement
                date="2020 - 2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<AcademicCapIcon className="h-6 w-6 text-blue-500" />}
            >
                <h3>Creative Director</h3>
                <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3>Creative Director</h3>
                <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3>Creative Director</h3>
                <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<i className="fas fa-code"></i>}
            >
                <h3>Creative Director</h3>
                <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            {/* Ajoutez d'autres éléments ici */}x
        </VerticalTimeline>


        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
          transition={{ duration: 1 }}
          className="p-10 rounded"
        >
          <Iphone screenshotSrc="/phone.webp" />
        </motion.div> */}
      </section>
    );
  }
  
  
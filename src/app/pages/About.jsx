import { motion, useInView } from "framer-motion";
import Iphone from "../components/Phone";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../../node_modules/react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import { useRef } from "react";

export default function AboutMeSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
  
    return (
        <section className="flex w-full bg-green-500 p-10">
        <div className="flex-1">
            <VerticalTimeline>
                <VerticalTimelineElement
                    date="2022 - 2024"
                    iconStyle={{ background: '#fff', color: '#000' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6 text-blue-500" />}
                >
                    <h3 className="text-lg font-bold">Mastère</h3>
                    <p>INGÉNIERIE DU WEB</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2021 - 2022"
                    iconStyle={{ background: '#fff', color: '#000' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6 text-blue-500" />}
                >
                    <h3 className="text-lg font-bold">Bachelor</h3>
                    <p>INGÉNIERIE DU WEB</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

        <div className="flex-1">
            <VerticalTimeline>
                <VerticalTimelineElement
                    date="02/2024 - 09/2024"
                    iconStyle={{ background: '#fff', color: '#000' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} className="h-6 w-6 text-blue-500" />}
                >
                    <h2 className="text-lg font-bold">Yomeva</h2>
                    <h3 className="text-lg font-bold">Contrat en alternance</h3>
                    <p>Développeur Full-stack</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="09/2022 - 02/2024"
                    iconStyle={{ background: '#fff', color: '#000' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} className="h-6 w-6 text-blue-500" />}
                >
                    <h2 className="text-lg font-bold">Foncia</h2>
                    <h3 className="text-lg font-bold">Contrat en alternance</h3>
                    <p>Développeur Full-stack</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="03/2022 - 09/2022"
                    iconStyle={{ background: '#fff', color: '#000' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} className="h-6 w-6 text-blue-500" />}
                >
                    <h2 className="text-lg font-bold">Thales</h2>
                    <h3 className="text-lg font-bold">Contrat en alternance</h3>
                    <p>Développeur Full-stack</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="09/2021 - 03/2022"
                    iconStyle={{ background: '#fff', color: '#000' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} className="h-6 w-6 text-blue-500" />}
                >
                    <h2 className="text-lg font-bold">Iviflo</h2>
                    <h3 className="text-lg font-bold">Contrat en alternance</h3>
                    <p>Développeur Full-stack</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        </section>

    );
  }
  
       {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
          transition={{ duration: 1 }}
          className="p-10 rounded"
        >
          <Iphone screenshotSrc="/phone.webp" />
        </motion.div> */}
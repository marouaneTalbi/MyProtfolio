import { motion, useInView } from "framer-motion";
import Iphone from "../components/Phone";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../../node_modules/react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import { useRef } from "react";

export default function CareerPath() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
  
    return (
            <div className="flex lg:items-center lg:justify-center w-full h-full p-5 flex-col overflow-auto">
                <div className="flex-1 ">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            date="02/2024 - 09/2024"
                            iconStyle={{ background: '#fff', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} className="h-6 w-6 text-blue-500" />}
                            style={{height:150}}
                        >
                            <div >
                                <h2 className="text-lg font-bold">Yomeva</h2>
                                <h3 className="text-lg font-bold">Contrat en alternance</h3>
                                <p>Développeur Full-stack</p>
                            </div>
        
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date="09/2022 - 02/2024"
                            iconStyle={{ background: '#fff', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} className="h-6 w-6 text-blue-500" />}
                            style={{height:150}}

                        >
                            <h2 className="text-lg font-bold">Foncia</h2>
                            <h3 className="text-lg font-bold">Contrat en alternance</h3>
                            <p>Développeur Full-stack</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date="03/2022 - 09/2022"
                            iconStyle={{ background: '#fff', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} className="h-6 w-6 text-blue-500" />}
                            style={{height:150}}

                        >
                            <h2 className="text-lg font-bold">Thales</h2>
                            <h3 className="text-lg font-bold">Contrat en alternance</h3>
                            <p>Développeur Full-stack</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date="09/2021 - 03/2022"
                            iconStyle={{ background: '#fff', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} className="h-6 w-6 text-blue-500" />}
                            style={{height:150}}

                        >
                            <h2 className="text-lg font-bold">Iviflo</h2>
                            <h3 className="text-lg font-bold">Contrat en alternance</h3>
                            <p>Développeur Full-stack</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>


                </div>
                <div className="flex-1 lg:mt-10 mt-10">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            date="2022 - 2024"
                            iconStyle={{ background: '#fff', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6 text-blue-500" />}
                        >
                            <h3 className="text-lg font-bold">ESGI - Mastère</h3>
                            <p>INGÉNIERIE DU WEB</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date="2021 - 2022"
                            iconStyle={{ background: '#fff', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6 text-blue-500" />}
                        >
                            <h3 className="text-lg font-bold">ESGI - Bachelor</h3>
                            <p>INGÉNIERIE DU WEB</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
       
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity:  1  }}
                transition={{ duration: 2 }}
                className="absolute bottom-0 right-0 p-5 lg:w-1/5 w-2/5"
            >
                    <img src={`/general/teaching.svg`}  className="w-full" />


            </motion.div>
            </div>
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
import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptop } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";





export default function AboutMe() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2022-Present" iconStyle={{ background: "#e9d35b", colo: "#fff" }} icon={<FaLaptop />}>
                    <h3 className="vertical-timeline-element-title">Tata Consultancy services, Working as a Linux System Administartor</h3>
                    <p>Full Time Job</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--education" date="April 2022- June 2022" iconStyle={{ background: "#e9d35b", colo: "#fff" }} icon={<FaLaptop />}>
                    <h3 className="vertical-timeline-element-title">Cement Plant Operations: Gained hands-on experience in a cement plant
                        environment, understanding the roles and applications of various machinery crucial
                        for cement production, and learned about instrumentation and control systems to
                        optimize process flow, including detailed process flow sheets and P&ID.</h3>
                    <p>FLSmidth Project Intern</p>
                </VerticalTimelineElement>
            </VerticalTimeline>


            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2018-2022" iconStyle={{ background: "#3e497a", colo: "#fff" }} icon={<RiGraduationCapFill />}>
                    <h3 className="vertical-timeline-element-title">Completed my Bachelor of Engineering in the Stream of ‘Electronics and Instrumentation’
                        at Panimalar Engineering College under Anna University Affiliation</h3>
                    <p>Bachelor of Engineering</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2016-2018" iconStyle={{ background: "#3e497a", colo: "#fff" }} icon={<FaSchool />}>
                    <h3 className="vertical-timeline-element-title"> Completed my Higher Secondary Certificate in the Stream of Physics,
                        Chemistry and Computer Science </h3>
                    <p>Higher Secondary School Certificate.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>


        </div>
    )
}
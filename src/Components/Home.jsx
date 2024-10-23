import React from "react"
import '../Styles/AboutMe.css'
export default function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi Welcome to my Portfolio</h2>
                <div className="prompt">
                    <h2>Kumaraguru P</h2>
                    
                </div>
            </div>
            <div className="skills">
            <h1> Skills</h1>
            <ol className="List">

                <li className="item">
                    <h2>Front-End</h2>
                    <span>Proficiency in front End Frameworks Liken ReactJs, Redux, HTML, CSS, Bootstrap, React Native and Tailwind CSS</span>
                </li>
                
                <li className="item">
                    <h2>Back End</h2>
                    <span>NodeJs,Java sring, ExpressJs,GraphQl,MYSQL and MongoDB</span>
                </li>

                
                <li className="item">
                    <h2>Programming Languages</h2>
                    <span> C, C++, Core Java and Javascript</span>
                </li>
                <li className="item">
                    <h2>Cloud Services </h2>
                    <span> Microsoft Azure</span>
                </li>
                <li className="item">
                    <h2>Operating System </h2>
                    <span> Linux system administration and Shell scripting</span>
                </li>



            </ol>

        </div>
        </div>
    )
}

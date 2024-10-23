import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../Styles/Footer.css';
import { MdEmail } from "react-icons/md";




function Footer(){
    return <div className="footer">
    <div className="socialMedia">
        
    <CiInstagram />
    <FaLinkedin />
    <FaGithub  />
    <MdEmail />

    </div>
    <p></p>
    
    </div>
}
export default Footer
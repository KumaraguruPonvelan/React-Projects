import React, { useState } from "react";
import{Link} from "react-router-dom"
import "../Styles/Navbar.css";



function Navbar(){
    const[expandNavbar, setExpandNavbar]=useState(false);
    return(
        <>
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={()=>{
                    setExpandNavbar((prev)=> !prev);
                }}>
                    
            </button>

            </div>
            <div className="links">
           
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutme">About</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact Me</Link></li>
             
        
            </div>

        </div>
        </>
    )
}
export default Navbar
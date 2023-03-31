import React from "react";
import "./styles.css"
import p1 from "./assets/9.jpg"

const Navbar=()=>{
    return(
        <div className="Nav">
            
            <ul>
                <li><img src={p1} alt="logo" className="logo"></img></li>
                <li><a href="/" className="home">Home</a></li>
                <li><a href="/about" className="about">About Us</a></li>
                <li><a href="/login" className="log">Login</a></li>
                <li><a href="/signup" className="sign">Sign Up</a></li>
                <li><a href="/contact" className="contact">Contact Us</a></li>
            </ul>
        </div>
    );
}

export default Navbar
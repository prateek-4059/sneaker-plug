import React from "react";
import "./styles.css"
import image from "./assets/9.jpg"

const AboutUs = () =>{
    return(
        <div className="about">
            <img src={image} alt="image" className="image"></img>
            <h1 className="ab">About Us</h1>
            <p className="p1">Sneakerplug.in is a brand founded in 2019 out of the love and curiosity for the culture and life around Sneakers, Fashion, Art, Music and Basketball.</p>
            <p className="p1">SPI carries a heavily curated selection of all kinds of sneakers and we only deal in legit ones. Authenticity is indispensable. </p>
            <p className="p1">We at SPI are driven by our principles and committed to providing the best consumer and consignment experience.</p>
        </div>
    );
}

export default AboutUs
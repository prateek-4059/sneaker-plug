import React from "react";
import port5 from "./assets/mens-shoes.webp"
import port6 from "./assets/slippers.jpg"
import port7 from "./assets/accessory.jpg"
import "./styles.css"

const Home=()=>{
    let sty={
      color:"black"
    }
    return(
        <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={port5} className="img1" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <h5>Shoes</h5>
            <p> All types of shoes such as sports shoes, formal shoes, boots and sandals. All styles you want to choose you can search it on our shop.</p>
        </div>
        </div>
        <div className="carousel-item">
            <img src={port6} className="img1" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <h5>Slippers</h5>
        <p>Any type of slippers which you want like knitted slippers, flip flops, house slippers, slip on slippers and many other types. You can purchase any type of slippers which you want right now</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={port7} className="img1" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={sty}>
        <h5>Gents Accessories</h5>
        <p>All the accessories of gents like wallets, belts, perfumes, Sunglasses, watches and cameras and different brands of all the accessories available here.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Home
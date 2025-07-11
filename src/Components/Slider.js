import React from 'react'
import "./Slider.css"

// images  slider
import slider1 from "../assets/slider/slider (1).png"
import slider2 from "../assets/slider/slider (2).png"
import slider3 from "../assets/slider/slider (3).png"

//logo
// import logo from "../assets/logo/logo.png"

const Slider = () => {
  return (
    <div className='Slider'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <   img src={slider2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Slider
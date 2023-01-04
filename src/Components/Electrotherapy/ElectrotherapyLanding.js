import React from 'react';
import "./Electrotherapy.css"
import "animate.css";
const ElectrotherapyLanding = () => {
    return (
        <div>
             <div
        className="hero min-h-screen electrotherapy"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000"
      >
        <div className="  "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Electrotherapy</h1>
            <p className="mb-5  text-lg lg:text-xl  animate__animated  animate__fadeInLeft">
            Our electrotherapy equipments are up to date and comes from Japan, Germany and Holland.
            </p>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default ElectrotherapyLanding;
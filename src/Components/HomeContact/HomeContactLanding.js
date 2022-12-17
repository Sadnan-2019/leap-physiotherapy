import React from 'react';
import Contact from '../Contact/Contact';
import "./HomeContact.css"
const HomeContactLanding = () => {
    return (
        <div>
               <div
        className="hero min-h-screen homecontact "
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000"
      >
        <div className="  "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Contact</h1>
            {/* <p className="mb-5 text-xl">
            Our electrotherapy equipments are up to date and come from Japan, Germany and Holland.
            </p> */}
          </div>
        </div>
      </div> 
      <Contact></Contact>
        </div>
    );
};

export default HomeContactLanding;
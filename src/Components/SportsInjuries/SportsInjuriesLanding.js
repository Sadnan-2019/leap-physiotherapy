import React from "react";
import "./SportsInjuries.css";

const SportsInjuriesLanding = () => {
  return (
    <div>
      <div
        className="hero min-h-screen sports"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000"
      >
        <div className="  "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Sports Therapy</h1>
            <p className="mb-5 text-lg lg:text-xl">
              Sports injuries are injuries that occur in athletic activities or
              exercising. They can result from accidents, poor training
              technique in practice, inadequate equipment, and overuse of a
              particular body part.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsInjuriesLanding;

import React from "react";
import "./ManualTherapy.css"

const ManualTherapyLanding = () => {
  return (
    <div>
      <div
        className="hero min-h-screen manualtherapy"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000"
      >
        <div className="  "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Manual Therapy</h1>
            <p className="mb-5 text-lg lg:text-xl">
              Manual therapy, or manipulative therapy, is a physical treatment
              primarily used by physiotherapistst and manual therapist treat...{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualTherapyLanding;

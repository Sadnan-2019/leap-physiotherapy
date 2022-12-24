import React from "react";
import time from "../../assets/time management.jpg";
import Supervision from "../../assets/Supervission.jpg";
import Comforthome from "../../assets/Comfort of home.jpg";
import Personalized from "../../assets/personilized.jpg";
import increase  from "../../assets/increase scope of treatment.jpg";
import cost  from "../../assets/Cost effectiveness.jpg";
const About = () => {
  return (
    <div className="py-10">
      <div
        className="hero min-h-screen"
        // data-aos="zoom-in-up"
        // // data-aos-offset="300"
        // data-aos-delay="5000"
        // data-aos-duration="4000"
        // // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        style={{
          backgroundImage: `url(" https://atriumpt.com/wp-content/uploads/2022/03/atrium-physical-therapy-request-appointment%E2%80%94background-Las-Cruces-NM.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-5xl font-bold text-white py-12 ">Why LEAP?</h1>

            <div className="text-white 	 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className="card  border     "
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                style={{ height: "480px" }}
              >
                <figure className="">
                  <img
                    src={cost}
                    alt="Shoes"
                    className="  p-4  "
                    style={{ height: "250px", borderRadius: "25px" }}
                  />
                </figure>
                <div className=" items-center text-center text-white p-4">
                  <p className="text-[20px]">Cost Effectiveness</p>
                  <p className="text-justify	text-[15px] poppins-t">
                  There is difference between taking physiotherapy at home
                  & going to a physiotherapy center.You save money  of transport 
                  & waiting for longer time.You get service at the comfort at your home.
                  </p>
                </div>
              </div>
              <div
                className="card  border     "
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                style={{ height: "480px" }}
              >
                <figure className="">
                  <img
                    src={time}
                    alt="Shoes"
                    className="  p-4  "
                    style={{ height: "250px", borderRadius: "25px" }}
                  />
                </figure>
                <div className=" items-center text-center text-white p-4">
                  <p className="text-[20px]">Time management</p>
                  <p className="text-justify	text-[15px] poppins-t">
                    You can get service at home according to your wish.You can manage your time 
                    while giving time to the appoinment for physiotherapy service.
                  </p>
                </div>
              </div>
              <div
                className="card  border     "
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                style={{ height: "480px" }}
              >
                <figure className="">
                  <img
                    src={Supervision}
                    alt="Shoes"
                    className="  p-4  "
                    style={{ height: "250px", borderRadius: "25px" }}
                  />
                </figure>
                <div className=" items-center text-center text-white p-4">
                  <p className="text-[20px]">Supervision</p>
                  <p className="text-justify	text-[15px] poppins-t">
                    At home service one can predict improvement & progress of 
                    the physiotherapy treatment.
                  </p>
                </div>
              </div>
              <div
                className="card  border     "
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                style={{ height: "480px" }}
              >
                <figure className="">
                  <img
                    src={Comforthome}
                    alt="Shoes"
                    className="  p-4  "
                    style={{ height: "250px", borderRadius: "25px" }}
                  />
                </figure>
                <div className=" items-center text-center text-white p-4">
                  <p className="text-[20px]">Comfort of home</p>
                  <p className="text-justify	text-[15px] poppins-t">
                    The environment at home is  most  comfortable
                    for a patient as compared to the environment of the center.
                    Presence of family members during the treatment process
                    helps to boost the morale of the patient and contributes to
                    the prompt  recovery of the patient.
                  </p>
                </div>
              </div>
              <div
                className="card  border     "
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                style={{ height: "480px" }}
              >
                <figure className="">
                  <img
                    src={Personalized}
                    alt="Shoes"
                    className="  p-4  "
                    style={{ height: "250px", borderRadius: "25px" }}
                  />
                </figure>
                <div className=" items-center text-center text-white p-4">
                  <p className="text-[20px]">Personalized treatment</p>
                  <p className="text-justify	text-[15px] poppins-t">
                    Getting  physiotherapy treatment at home means you can ask 
                    question about  your problem in details with the therapist. 
                  </p>
                </div>
              </div>
              <div
                className="card  border     "
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                style={{ height: "480px" }}
              >
                <figure className="">
                  <img
                    src={increase}
                    alt="Shoes"
                    className="  p-4  "
                    style={{ height: "250px", borderRadius: "25px" }}
                  />
                </figure>
                <div className=" items-center text-center text-white p-4">
                  <p className="text-[20px]">Increased scope of treatment</p>
                  <p className="text-justify	text-[15px] poppins-t">
                  At a physiotherapy center the load of the patient is more than 
                  at a home service.One can discuss about personilized service provided by a 
                  therapists.Each complain can be addressed individually .So there is  
                  an increase in scope of treatment.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

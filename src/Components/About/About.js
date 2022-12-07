import React from "react";
import time from "../../assets/time management.jpg";
import Supervision from "../../assets/Supervission.jpg";
import Comforthome from "../../assets/Comfort of home.jpg";
import Personalized from "../../assets/personilized.jpg";
import increase  from "../../assets/increase scope of treatment.jpg";
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
                    src="http://www.dhakaspecializedhomephysiotherapy.com/img/about/Cost%20effectiveness.jpg"
                    alt="Shoes"
                    className="  p-4  "
                    style={{ height: "250px", borderRadius: "25px" }}
                  />
                </figure>
                <div className=" items-center text-center text-white p-4">
                  <p className="text-[20px]">Cost Effectiveness</p>
                  <p className="text-justify	text-[15px] poppins-t">
                    Though some physiotherapists tend to charge more for
                    providing their services at home, it is still cost effective
                    in comparison to visiting a physiotherapy center. It is
                    mainly because your travel costs are saved. Moreover, your
                    travel might require an ambulance depending upon your
                    condition. Such costs can be avoided if you avail
                    physiotherapy at home.
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
                    A lot of time can be saved by opting for physiotherapy at
                    home. Also, time plays an important role in treating
                    conditions like acute pain and stress. Thus, treatment at
                    home helps a lot.
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
                    Availing for physiotherapy treatment at home helps the
                    patient and his/her family to keep track of the treatment
                    process and to ensure that the patient is getting proper
                    physiotherapy care or not.
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
                    The environment at home is considered to be more comfortable
                    for a patient as compared to the environment of the clinic.
                    Presence of family members during the treatment process
                    helps to boost the morale of the patient and contributes to
                    the speedy recovery of the patient.
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
                    Availing physiotherapy treatment at home means you get to
                    discuss your problem in details with the doctor. You can
                    also coordinate with your physiotherapist depending on your
                    current condition.
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
                    Opting for a private physiotherapist at home also tends to
                    increase the scope of the treatment process. Generally, in a
                    clinic, a large number of patients are present and the
                    physiotherapist is not able to devote enough time towards
                    each patient. Thus, opting for physiotherapy care at home
                    helps the physiotherapist to give enough attention to an
                    individual patient which in turn helps in better recovery of
                    the patient.
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

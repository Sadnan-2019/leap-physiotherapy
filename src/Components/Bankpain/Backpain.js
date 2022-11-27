import React from "react";
import pain from "../../assets/pain.webp";

const Backpain = () => {
  return (
    <div>
      <div className="py-10 px-10">
        <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  bg-base-100 shadow-xl">
          {/* <img src={pain} alt="Album" /> */}
          <div className="sm:h-80  sm:w-5/6 lg:w-5/6 h-96">
            {/* <img src="https://idiary.in/Images/snap2.jpg" alt="Album" /> */}

            {/* <iframe
              src="https://youtu.be/vQgG_TKtpU0"
              title="Corporate Video Production Marketing Videos - How To Make Great Marketing Videos"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="sm:h-80 sm:w-5/6 lg:w-5/6 h-96 "
            ></iframe> */}
            <iframe
              width="546"
              height="307"
              src="https://www.youtube.com/embed/vQgG_TKtpU0"
              title="London Physiotherapy & Wellness Clinic"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div
            className="card-body"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="card-title font-bold">Physiotherapy</h2>
            <h2 className="card-title font-bold">
              In Clinic, At Home, Virtual
            </h2>
            <p>
              Our highly qualified and experienced teams use the most up-to-date
              techniques to swiftly and smoothly repair your body, with the goal
              of long-term wellness. They will help you identify any potential
              underlying causes such as diet, exercise, and posture. Book a
              session with our physio today and bounce back better.
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn  "
                style={{ backgroundColor: "#3E84DC", color: "white" }}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backpain;

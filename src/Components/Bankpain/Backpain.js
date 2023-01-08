import React from "react";
import "./Backpain.css"
const Backpain = () => {
  return (
    <div>
      <div className="py-10 px-10">
         
       <div className="  mt-10">
        <div className="  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2      py-10 items-center justify-items-center  drop-shadow-2xl text-[#536E9B]   p-4 ">
          <div className="sm:h-80  sm:w-5/6 lg:w-5/6 h-96">
          

            <iframe
              src="https://www.youtube.com/embed/vQgG_TKtpU0"
              title="Corporate Video Production Marketing Videos - How To Make Great Marketing Videos"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="sm:h-80 sm:w-5/6 lg:w-5/6 h-96 "
            ></iframe>
          </div>

          <div
            className="card-body pain"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* <h2 className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]
             lg:text-[43px] md:text-[30px] font-bold   leading-10	">
              Physiotherapy
            </h2> */}
            <h2 className=" lg:text-[43px] md:text-[30px] font-bold   leading-10 text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]	">
             LEAP Physiotherapy & Rehabilitation Center Provides
            </h2>
{/*              
            <p className=" max-w-lg  lg:text-[20px] md:text-[20px]      ">
            Our highly qualified and experienced teams use the most up-to-date
              techniques to swiftly and smoothly repair your body, with the goal
              of long-term wellness. They will help you identify any potential
              underlying causes such as diet, exercise, and posture. Book a
              session with our physio today and bounce back better.
            </p> */}
            <p className="text-justify text-lg  ">
            Qualified and experienced team uses the most up-to-date
              technology to  precisely and smoothly repair your body, with the goal
              of long-term wellness. They will help you identify any potential
              underlying causes such as diet, exercise and posture. Book a
              session with our physiotherapist today and enjoy healthy life.
        </p>
            {/* <div className="card-actions  ">
              <button className="btn bg-neutral  " style={{ color: "white" }}>
                About More
              </button>auty
            </div> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Backpain;

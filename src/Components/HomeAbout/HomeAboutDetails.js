import React from "react";
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
const HomeAboutDetails = () => {
  return (
    <div>
      <div className="py-10 px-10">
        <div className="  mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2      py-10 items-center justify-items-center  drop-shadow-2xl text-[#536E9B]   p-4 ">
            <div className="sm:h-80  sm:w-5/6 lg:w-5/6 h-96">
               <img src={about1} alt/>
            </div>

            <div
              className="card-body"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2
                className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]
               lg:text-[35px] md:text-[30px] font-bold   leading-10	"
              >
                LEAP Physiotherapy - Since 2016,
              </h2>
              
              {/*              
              <p className=" max-w-lg  lg:text-[20px] md:text-[20px]      ">
              Our highly qualified and experienced teams use the most up-to-date
                techniques to swiftly and smoothly repair your body, with the goal
                of long-term wellness. They will help you identify any potential
                underlying causes such as diet, exercise, and posture. Book a
                session with our physio today and bounce back better.
              </p> */}
              <p className="text-justify font-medium ">
                Top-class latest and evidence-based physiotherapy treatment from
                the comfort of your own home. Service is provided by highly
                qualified and certified professional physiotherapists, who are
                Registered by BPA (Bangladesh Physio Therapy Association). and
                WCPT (World Confederation for Physical Therapy) in Dhaka city.
              </p>
              {/* <div className="card-actions  ">
                <button className="btn bg-neutral  " style={{ color: "white" }}>
                  About More
                </button>auty
              </div> */}
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2      py-10 items-center justify-items-center  drop-shadow-2xl text-[#536E9B]   p-4 ">
            

            <div
              className="card-body"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2
                className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]
               lg:text-[35px] md:text-[30px] font-bold   leading-10	"
              >
                What is LEAP Physiotherapy?
              </h2>
              
              {/*              
              <p className=" max-w-lg  lg:text-[20px] md:text-[20px]      ">
              Our highly qualified and experienced teams use the most up-to-date
                techniques to swiftly and smoothly repair your body, with the goal
                of long-term wellness. They will help you identify any potential
                underlying causes such as diet, exercise, and posture. Book a
                session with our physio today and bounce back better.
              </p> */}
              <p className="text-justify font-medium ">
                Top-class latest and evidence-based physiotherapy treatment from
                the comfort of your own home. Service is provided by highly
                qualified and certified professional physiotherapists, who are
                Registered by BPA (Bangladesh Physio Therapy Association). and
                WCPT (World Confederation for Physical Therapy) in Dhaka city.
              </p>
              {/* <div className="card-actions  ">
                <button className="btn bg-neutral  " style={{ color: "white" }}>
                  About More
                </button>auty
              </div> */}
            </div>
            <div className="sm:h-80  sm:w-5/6 lg:w-5/6 h-96">
               <img src={about2} alt/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutDetails;

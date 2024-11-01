import React from "react";
import physio from "../../assets/servicephysio.png";
import rehabilitation from "../../assets/rehabilitation.png";
import chest from "../../assets/chest-press.png";
import injury from "../../assets/injury.png";
import postoperative from "../../assets/postoperative.png";
import Child from "../../assets/Child.png";
import therapy from "../../assets/therapy.png";
import "./Services.css"

const Services = () => {
  return (
    <div>
      <div className="py-10 services">
        <div className=" ">
          <h2
            className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7]      text-3xl text-center  py-8 font-bold poppins-b sm:text-4xl "
            // style={{ color: "#536E9B" }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-0   lg:px-12 gap-10    py-[25px] items-center justify-items-center ">
          <div
            className="shadow-2xl shadow-blue-800 hover:  transition duration-500 hover:scale-110 
             bg-gradient-to-r from-[#052f61]  to-[#2622B7] 
             h-4/5 lg:h-3/4   w-screen  md:w-3/4 lg:w-5/6  flex items-center justify-center  	 gap-5      border    p-10"
            // data-aos="fade-up-right"
            // data-aos-offset="300"
            // data-aos-delay="5000"
            // data-aos-duration="3000"
            style={{
              borderRadius: "25px",
              color: "white",
            }}
          >
            <div
              className=""
              data-aos="fade-right  "
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              {" "}
              <img src={physio} className="w-96   lg:h-36 " alt="" />{" "}
            </div>
            <div
              className=" text-white"
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <h2 className="text-xs   lg:text-2xl font-bold ">
                {" "}
                Physiotherapy{" "}
              </h2>
              <p className="text-xs lg:text-[15px]  ">
                Experience the best physiotherapy services at LEAP to improve
                function, reduce symptoms & prevent future complications.
              </p>
              {/* <div className="card-actions justify-end  mt-5">
                <a href="/physiotherapy">
                <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
                  </a>
              </div> */}
            </div>
          </div>
          <div
            className="shadow-2xl shadow-blue-800 hover:  transition duration-500 hover:scale-110 
             bg-gradient-to-r from-[#052f61]  to-[#2622B7] h-4/5 lg:h-3/4    
              w-screen md:w-3/4	 lg:w-5/6     flex items-center justify-center	 gap-5          border   p-10"
            style={{
              backgroundColor: "white",
              borderRadius: "25px",
            }}
          >
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              {" "}
              <img
                src={rehabilitation}
                className="w-96   lg:h-36 "
                alt=""
              />{" "}
            </div>
            <div
              className="text-white "
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <h2 className="text-xs lg:text-2xl font-bold ">Rehabilitation</h2>
              <p className=" text-xs lg:text-[15px]  ">
                Rehabilitation aims to improve function, reduce symptoms and
                ascertain the wellbeing of people with complex injuries and
                conditions affecting the brain and nervous system.
              </p>
              {/* <div className="card-actions justify-end  mt-5">
               <a href="/rehabilitation">
               <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
               </a>
              </div> */}
            </div>
          </div>
          <div
            className="hover:  transition duration-500 hover:scale-110 shadow-2xl
             shadow-blue-800  bg-gradient-to-r from-[#052f61]  to-[#2622B7]  h-4/5 lg:h-3/4     w-screen	
             md:w-3/4  lg:w-5/6    flex items-center justify-center	 gap-5       border   p-10"
            style={{
              borderRadius: "25px",
            }}
          >
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              {" "}
              <img
                src={chest}
                className="w-96   lg:h-36 "
                alt=""
              />{" "}
            </div>
            <div
              className=" text-white"
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <h2 className="text-xs lg:text-2xl font-bold">Chest Physio</h2>
              <p className="text-xs lg:text-[15px]  ">
                Respiratory physiotherapy helps treat, educate and advise people
                who have problems with their lungs and heart.
              </p>
              {/* <div className=" card-actions justify-end  mt-5">
                <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div> */}
            </div>
          </div>

          <div
            className="hover:  transition duration-500 hover:scale-110
             shadow-2xl shadow-blue-800 bg-gradient-to-r from-[#052f61]  to-[#2622B7] 
             h-4/5 lg:h-3/4     w-screen	 md:w-3/4  lg:w-5/6       flex items-center justify-center	 gap-5       border   p-10"
            style={{
              borderRadius: "25px",
            }}
          >
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              {" "}
              <img
                src={injury}
                className="w-96   lg:h-36  "
                alt=""
              />{" "}
            </div>
            <div
              className="text-white "
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <span className="text-xs lg:text-2xl font-bold">
                Sporting Injuries & Pain
              </span>
              <p className="text-xs lg:text-[15px]  ">
                Restoring normal function post-injury and pain management of
                acute or chronic conditions
              </p>
              {/* <div className="card-actions justify-end   mt-5">
                <a href="/sports-injuries">
                  
                <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
                  </a>
              </div> */}
            </div>
          </div>
          <div
            className="shadow-2xl shadow-blue-800 hover:  transition duration-500 hover:scale-110 
            bg-gradient-to-r from-[#052f61]  to-[#2622B7] h-4/5 lg:h-3/4     w-screen	 md:w-3/4 lg:w-5/6   
                 flex items-center justify-center	 gap-5      border   p-10"
            style={{
              borderRadius: "25px",
            }}
          >
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              {" "}
              <img
                src={postoperative}
                className="w-96   lg:h-36  "
                alt=""
              />{" "}
            </div>
            <div
              className="text-white "
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <h2 className="text-xs lg:text-2xl font-bold">
                Pre & Post Surgery
              </h2>
              <p className="text-xs lg:text-[15px]  ">
                A plan to prepare for surgery, optimize strength, function and
                mobility afterwards.
              </p>
              {/* <div className="card-actions justify-end   mt-5">
                <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div> */}
            </div>
          </div>
          <div
            className=" hover:  transition duration-500 hover:scale-110 shadow-2xl shadow-blue-800  
            bg-gradient-to-r from-[#052f61]  to-[#2622B7] h-4/5 lg:h-3/4     w-screen	 md:w-3/4  lg:w-5/6  
                  flex items-center justify-center	 gap-5        border   p-10"
            style={{
              borderRadius: "25px",
            }}
          >
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              {" "}
              <img
                src={Child}
                className="w-96   lg:h-36  "
                alt=""
              />{" "}
            </div>
            <div
              className="text-white "
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <h2 className="text-xs lg:text-2xl font-bold">Paediatrics</h2>
              <p className="text-xs lg:text-[15px]  ">
                Life enrichment activity program team of paediatric therapists
                are here to support babies, children and teenagers aged 0 – 19.
              </p>
              {/* <div className="card-actions justify-end   mt-5">
                <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div> */}
            </div>
          </div>
          <div
            className="shadow-2xl hover:  transition duration-500 hover:scale-110 
             shadow-blue-800  bg-gradient-to-r from-[#052f61]  to-[#2622B7] h-4/5 lg:h-3/4   
               w-screen  md:w-3/4  lg:w-5/6         flex items-center justify-center	 gap-5       border   p-10"

            style={{
              borderRadius: "25px",
            }}
          >
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              {" "}
              <img
                src={therapy}
                className="w-96   lg:h-36  "
                alt=""
              />{" "}
            </div>
            <div
              className="text-white "
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000"
            >
              <h2 className="text-xs lg:text-2xl font-bold">Other Therapies</h2>
              <p className="text-xs lg:text-[15px]  ">
                Learn more about Music Therapy, Speech and Language Therapy,
                Neuropsychology and Occupational Therapy
              </p>
              {/* <div className="card-actions justify-end   mt-5">
                <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

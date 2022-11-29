import React from "react";
import physio from "../../assets/servicephysio.png";

const Services = () => {
  return (
    <div>
      <div className="py-10">
        <div className=" ">
          <h2
            className="text-3xl text-center  py-10 font-bold poppins-b sm:text-4xl"
            style={{ color: "#3E84DC" }}
          >
            Our Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-12 gap-10    py-[25px] items-center justify-items-center">
          <div
            className="  bg-gradient-to-r from-[#034ca7]  to-[#5f7499]    w-5/6 flex items-center justify-center	 gap-5      shadow-2xl shadow-white-1000/50 border    p-10"

            
            // data-aos="fade-up-right"
            // data-aos-offset="300"
            // data-aos-delay="5000"
            // data-aos-duration="3000"
            style={{
              
              borderRadius: "25px",
              color: "white",
              height: "200px",
            }}
          >
            <div className="">
              {" "}
              <img src={physio} className="w-62 h-36 " alt="" />{" "}
            </div>
            <div className=" text-white"   >
              <h2 className="text-2xl font-bold "> Physiotherapy </h2>
              <p className="text-[15px]">
                Experience the best physiotherapy services at LEAP to improve
                function,reduce symptoms & prevent future complications.
              </p>
              <div className="card-actions justify-end  mt-5">
                <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div
            className=" bg-gradient-to-r from-[#034ca7]  to-[#5f7499]   w-5/6     flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10"
            style={{
              backgroundColor: "white",
              borderRadius: "25px",
            
              height: "200px",
            }}
          >
            <div>
              {" "}
              <img
                src="https://www.rehabphysiolondon.com/wp-content/uploads/2019/06/Neuro.png   "
                className="w-62 h-36 "
                alt=""
              />{" "}
            </div>
            <div className="text-white ">
              <h2 className="text-2xl font-bold ">Rehabilitation</h2>
              <p className="text-[15px]">
                Rehabilitation   aims to improve function, reduce symptoms
                and ascertain the wellbeing of people with complex injuries and
                conditions affecting the brain and nervous system.
              </p>
              <div className="card-actions justify-end  mt-5">
              <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div
            className=" bg-gradient-to-r from-[#034ca7]  to-[#5f7499]   w-5/6     flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10"
            style={{
              backgroundColor: "white",
              borderRadius: "25px",
              color: "#3E84DC",
              height: "200px",
            }}
          >
            <div>
              {" "}
              <img
                src="https://www.rehabphysiolondon.com/wp-content/uploads/2019/06/Respiratory.png "
                className="w-62 h-36  "
                alt=""
              />{" "}
            </div>
            <div className=" text-white">
              <h2 className="text-2xl font-bold ">Chest Physio</h2>
              <p className="text-[15px]">
                Respiratory physiotherapy helps treat, educate and advise people
                who have problems with their lungs and heart.
              </p>
              <div className=" card-actions justify-end  mt-5">
              <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div
            className=" bg-gradient-to-r from-[#034ca7]  to-[#5f7499]  w-5/6      flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10"
            style={{
              backgroundColor: "white",
              borderRadius: "25px",
              
              height: "200px",
            }}
          >
            <div>
              {" "}
              <img
                src="https://www.rehabphysiolondon.com/wp-content/uploads/2019/06/Sports-Injuries.png "
                className="w-62 h-36 "
                alt=""
              />{" "}
            </div>
            <div className="text-white ">
              <h2 className="text-2xl font-bold ">Sporting Injuries & Pain</h2>
              <p className="text-[15px]">
                Restoring normal function post-injury and pain management of
                acute or chronic conditions
              </p>
              <div className="card-actions justify-end   mt-5">
              <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
           
          <div
            className=" bg-gradient-to-r from-[#034ca7]  to-[#5f7499]   w-5/6     flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   px-10"
            style={{
              backgroundColor: "white",
              borderRadius: "25px",
             
              height: "200px",
            }}
          >
            <div>
              {" "}
              <img
                src="https://www.rehabphysiolondon.com/wp-content/uploads/2019/06/Orthopaedic.png "
                className="w-62 h-36 "
                alt=""
              />{" "}
            </div>
            <div className="text-white ">
              <h2 className="text-2xl font-bold ">Pre & Post Surgery</h2>
              <p className="text-[15px]">
                A plan to prepare for surgery, optimize strength, function and
                mobility afterwards.
              </p>
              <div className="card-actions justify-end   mt-5">
              <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-[#034ca7]  to-[#5f7499]    w-5/6     flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   px-10"
            style={{
              backgroundColor: "white",
              borderRadius: "25px",
              
              height: "200px",
            }}
          >
            <div>
              {" "}
              <img
                src="https://www.rehabphysiolondon.com/wp-content/uploads/2020/09/Paediatrics-Icon.png "
                className="w-62 h-36 "
                alt=""
              />{" "}
            </div>
            <div className=" text-white">
              <h2 className="text-2xl font-bold ">Paediatrics</h2>
              <p className="text-[15px]">
                Life enrichment activity program team of paediatric therapists
                are here to support babies, children and teenagers aged 0 – 19.
              </p>
              <div className="card-actions justify-end   mt-5">
              <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div
            className=" w-5/6  bg-gradient-to-r from-[#034ca7]  to-[#5f7499]      flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   px-10"
            style={{
              backgroundColor: "white",
              borderRadius: "25px",
              
              height: "200px",
            }}
          >
            <div>
              {" "}
              <img
                src="https://www.rehabphysiolondon.com/wp-content/uploads/2020/01/OtherTherapies.png "
                className="w-62 h-36 "
                alt=""
              />{" "}
            </div>
            <div className="text-white ">
              <h2 className="text-2xl font-bold ">Other Therapies</h2>
              <p className="text-[15px]">
                Learn more about Music Therapy, Speech and Language Therapy,
                Neuropsychology and Occupational Therapy
              </p>
              <div className="card-actions justify-end   mt-5">
              <button
                  className="btn btn-sm  "
                  style={{ backgroundColor: "#3E84DC" }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

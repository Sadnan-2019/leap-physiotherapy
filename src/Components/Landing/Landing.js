import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      {/* <section className="   h-auto landing  "  >
      <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid lg:grid-cols-1 grid-cols-1 gap-5">
        <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
          <div className="hidden lg:flex items-center gap-2   lg:bg-gray-100 w-fit px-3 rounded-full py-2 border-[1px]  lg:border-gray-200 mb-5">
            <p className="hidden lg:block px-2 py-[2px] text-white lg:rounded-full  " style={{backgroundColor: "#453364" }}>
              $
            </p>
            <p className='hidden lg:block text-sm '>Discover the easiest way to get our service!</p>
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="md:text-[43px] font-bold text-[20px] text-left poppins-b "
            style={{ lineHeight: "120%",color:"#453364" }}
          >
            HealthCare At Home Bangladesh
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t    "
            style={{ lineHeight: "120%",color:"#453364" }}>
            First ever one stop high quality healthcare solution at your home in bangladesh.
          </p>
          
          <div className='flex items-center mt-2 font-bold'>
          < FaPhoneVolume  className="lg:text-2xl text-[20px] " style={{  color:"#453364" }}/>
          <span className="lg:text-2xl text-[20px] "style={{ color:"#453364" }} > Call Now: 01619848555</span>
        </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex  gap-4 mt-10 text-center"
          >
            <Link
              className="hidden  md:inline-flex items-center   md:px-8 md:py-3  border   rounded hover:bg-transparent active:text-primary focus:outline-none focus:ring transition ease-in-out delay-150  text-white hover:text-black"
              to="/" style={{backgroundColor: "#453364" }}
            >
              <span className="text-sm font-medium"> Get Started </span>
              <BsArrowRight className="text-lg ml-2" />
            </Link>

          
          </div>
        </div>
    
      </div>
    </section>       */}

      <div className="   landing">
        <div className=" "></div>
        <div className="   text-neutral-content">
          <div className=" ">
            <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid lg:grid-cols-1 grid-cols-1 gap-5">
              <div className="sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0">
                {/* <div className="hidden lg:flex items-center gap-2   lg:bg-gray-100 w-fit px-3 rounded-full py-2 border-[1px]  lg:border-gray-200 mb-5">
                  <p
                    className="hidden lg:block px-2 py-[2px] text-white lg:rounded-full  "
                    style={{ backgroundColor: "#453364" }}
                  >
                    $
                  </p>
                  <p className="hidden lg:block text-sm ">
                    Discover the easiest way to get our service!
                  </p>
                </div> */}
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="md:text-[43px] font-bold text-[20px] text-left poppins-b "
                  style={{ lineHeight: "120%", color: "#001E36" }}
                >
                  Welcome to The LEAP Physiotherapy
                </p>

                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t    "
                  style={{ lineHeight: "120%", color: "#001E36" }}
                >
                  Be seen by a Consultant expert in our physiotherapy center & get the best physiotherapy in the country.
                  We have state of the art equipments & qualified professionals to
                  heal your pain & suffering.
                </p>

                {/* <div className="flex items-center mt-2 font-bold">
                  <FaPhoneVolume
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "#CB052F" }}
                  />
                  <span
                    className="lg:text-2xl text-[20px] "
                    style={{ color: "#CB052F" }}
                  >
                    {" "}
                    Call Now: 01619848555
                  </span>
                </div> */}

                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="flex  gap-4 mt-10 text-center"
                >
                  <Link
                    className="hidden  md:inline-flex items-center   md:px-8 md:py-3  border   rounded hover:bg-transparent active:text-primary focus:outline-none focus:ring transition ease-in-out delay-150  text-white hover:text-black"
                    to="/"
                    style={{ backgroundColor: "#3E84DC", color: "white" }}
                  >
                    <span className="text-sm font-medium"> More</span>
                    <BsArrowRight className="text-lg ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

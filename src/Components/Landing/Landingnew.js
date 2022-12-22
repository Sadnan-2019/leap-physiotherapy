import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landingnew.css";
import "animate.css";

const Landingnew = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,

    autoplay:"true",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="  px-7 py-7">
        <Slider {...settings}>
          <div className=" ">
            <div className="hero    sm:min-h-screen-0 lg:min-h-screen landingone">
              <div className="  bg-opacity-60 "></div>
              <div className="hero-content text-center text-neutral-content lg:text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                  >
                    Welcome to The{" "}
                  </h1>
                  <h1
                    className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                  >
                    LEAP Physiotherapy{" "}
                  </h1>
                  <p className="lg:mb-5 animate__animated animate__fadeInRight">
                    We have state of the art equipments & qualified
                    professionals to heal your pain & suffering.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="hero      sm:min-h-screen-0 lg:min-h-screen landingtwo">
              <div className="  sm:bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content lg:text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                  >
                    Welcome to The{" "}
                  </h1>
                  <h1
                    className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                  >
                    Passive Exercise
                  </h1>
                  <p className="lg:mb-5 animate__animated animate__fadeInRight">
                    Some Physical Conditions Need to be Treated by Passive
                    Exercise. Stroke Induced Paralysis is One of Them.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="hero      sm:min-h-screen-0 lg:min-h-screen landingthree">
              <div className="  bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content lg:text-neutral-content">
                <div className="max-w-md">
                  {/* <h1 className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"  data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000">Welcome to The </h1> */}
                  <h1
                    className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                  >
                    Shortwave Diathermy
                  </h1>
                  <p className="lg:mb-5 animate__animated animate__fadeInRight">
                    This Machine is Used to Give Deep Heat to the inflamed
                    Tissues of the Body. It Improves Circulation thus Enhances
                    Healing Process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="hero      sm:min-h-screen-0 lg:min-h-screen landingfour">
              <div className="  sm:bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content lg:text-neutral-content">
                <div className="max-w-md">
                  {/* <h1 className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"  data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000">Welcome to The </h1> */}
                  <h1
                    className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="5000"
                    data-aos-duration="3000"
                  >
                    Active Exercise
                  </h1>
                  <p className="lg:mb-5 animate__animated animate__fadeInRight">
                    Active Exercise Improves Function, Increases Capability &
                    Boosts Up. Physical & Mental Wellbeing. It can reduce the
                    risk of many   diseases.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=" ">
   <div
         className="hero      sm:min-h-screen-0 lg:min-h-screen landingfour"
              
       >
         <div className="  bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content lg:text-neutral-content">
           <div className="max-w-md">
             <h1 className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"  data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000">Welcome to The </h1>
             <h1 className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"   data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000">Active Exercise</h1>
             <p className="lg:mb-5 animate__animated animate__fadeInRight">
             Acitive Exercise Improves Function,Increases Capability & Boosts Up 
               Physical & Mental Wellbeing.
             </p>
            </div>
         </div>
       </div>
   </div> */}

          {/* <div className=" ">
   <div
         className="hero      sm:min-h-screen-0 lg:min-h-screen landingfour"
              
       >
         <div className="  bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content lg:text-neutral-content">
           <div className="max-w-md">
             <h1 className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"  data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000">Welcome to The </h1>
             <h1 className="lg:mb-5 sm:text-2xl lg:text-4xl font-bold"   data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000">Active Exercise</h1>
             <p className="mb-6 lg:mb-8 animate__animated animate__fadeInRight">
             Acitive Exercise Improves Function,Increases Capability & Boosts Up 
               Physical & Mental Wellbeing.
             </p>
            </div>
         </div>
       </div>
   </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Landingnew;

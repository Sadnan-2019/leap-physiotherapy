import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landingnew.css"

const Landingnew = () => {

    var settings = {
    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      
        autoplay:"true",
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



    return (
        <div>
     <div className="  px-7 py-7">


     <Slider {...settings}>
     
    
   
    
   <div className=" ">
   <div
         className="hero min-h-screen"
         style={{
           backgroundImage: `url("https://t4.ftcdn.net/jpg/02/57/00/79/360_F_257007919_4J2jQTuOlxXBxCu4gj1at3BS3PHdb9LV.jpg")`,
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-5xl font-bold">Welcome to The LEAP Physiotherapy</h1>
             <p className="mb-5">
             Be seen by a Consultant expert in our physiotherapy center & get the best physiotherapy in the country.
                  We have state of the art equipments & qualified professionals to
                  heal your pain & suffering.
             </p>
             <button className="btn btn-primary">Get Started</button>
           </div>
         </div>
       </div>
   </div>
   
     
      <div className="">
      <div
         className="hero min-h-screen"
         style={{
           backgroundImage: `url("https://rebalancerehab.in/wp-content/uploads/2021/01/slide4-3.png")`,
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
             <p className="mb-5">
               Provident cupiditate voluptatem et in. Quaerat fugiat ut
               assumenda excepturi exercitationem quasi. In deleniti eaque
               aut repudiandae et a id nisi.
             </p>
             <button className="btn btn-primary">Get Started</button>
           </div>
         </div>
       </div>
     
      </div>
     
       <div className="">
       <div
         className="hero min-h-screen"
         style={{
           backgroundImage: `url("https://www.spectrumphysio.info/physio/uploads/2018/07/spectrum-physio-slider-4.jpg")`,
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
             <p className="mb-5">
               Provident cupiditate voluptatem et in. Quaerat fugiat ut
               assumenda excepturi exercitationem quasi. In deleniti eaque
               aut repudiandae et a id nisi.
             </p>
             <button className="btn btn-primary">Get Started</button>
           </div>
         </div>
       </div>
       </div>
     
     
      <div className="">
      <div
         className="hero min-h-screen"
         style={{
           backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJEF-t3dDAu_oK3OEPppUBgExgFu7HP5HVw&usqp=CAU")`,
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
             <p className="mb-5">
               Provident cupiditate voluptatem et in. Quaerat fugiat ut
               assumenda excepturi exercitationem quasi. In deleniti eaque
               aut repudiandae et a id nisi.
             </p>
             <button className="btn btn-primary">Get Started</button>
           </div>
         </div>
       </div>
      </div>
      
      
   </Slider>
     </div>
    </div>
    );
};

export default Landingnew;
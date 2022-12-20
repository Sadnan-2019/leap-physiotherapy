import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landingnew.css"
import 'animate.css';

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
           backgroundImage: `url("https://i.ibb.co/QP33199/slider1.jpg")`,
         }}
       >
         <div className="hero-overlay bg-opacity-o"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-4xl font-bold"  data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000">Welcome to The </h1>
             <h1 className="mb-5 text-4xl font-bold"  data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="5000"
              data-aos-duration="3000">LEAP Physiotherapy </h1>
             <p className="mb-5 animate__animated animate__fadeInRight">
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
             <h1 className="mb-5 text-4xl font-bold">Passive Exercise</h1>
             <p className="mb-5">
               Some Physical Conditions Need to be Treated by Passive Exercise.
               Stroke Induced Paralysis is One of Them.
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
           backgroundImage: `url("https://content.jdmagicbox.com/comp/pune/s5/020pxx20.xx20.120804115010.l4s5/catalogue/dr-raut-s-shree-physiotherapy-and-slimming-center-dhayari-pune-physiotherapists-qgfipbx67v.jpg?clr=")`,
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-4xl font-bold">Shortwave Diathermy</h1>
             <p className="mb-5">
                This Machine is Used to Give Deep Heat to the inflamed Tissues of the Body.
                It Improves Circulation thus Enhances Healing Process.
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
           backgroundImage: `url("https://www.indica.today/wp-content/uploads/2022/06/History-of-Asana-and-Exercise-in-India.jpg")`,
         }}
       >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
           <div className="max-w-md">
             <h1 className="mb-5 text-4xl font-bold">Active Exercise</h1>
             <p className="mb-5">
               Acitive Exercise Improves Function,Increases Capability & Boosts Up 
               Physical & Mental Wellbeing.
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
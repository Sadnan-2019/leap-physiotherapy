import React from 'react';
import "./Physiotherapy.css"
import "animate.css";
import { Typewriter } from 'react-simple-typewriter'
const PhysiotherapyLanding = () => {
  const handleType = (count ) => {
    // access word count number
    console.log(count)}
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
    return (
        <div>
        <div
   className="hero min-h-screen physiotherapy"
   data-aos="fade-down"
   data-aos-offset="300"
   data-aos-delay="5000"
   data-aos-duration="3000"
 >
   <div className="  "></div>
   <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md">
     
       <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Physiotherapy</h1>
       <h1  className='mb-5 text-2xl lg:text-xl font-bold'>
     Physiotherapy{' '}
        <span className='mb-5 text-lg lg:text-xl animate__animated animate__fadeInRight  ' >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['are highly qualified health professionals who work in partnership with their patients to help people get better and stay well', ]}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorBlinking={true}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1> 
     </div>
   </div>
 </div> 
   </div>
    );
};

export default PhysiotherapyLanding;
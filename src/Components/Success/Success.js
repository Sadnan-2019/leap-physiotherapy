import React from 'react';
import { useState } from 'react';
import { useSpring,animated } from 'react-spring';

const Success = () => {


    function Number({n}) {



        const [flip, set] = useState(false)
        const { number } = useSpring({
          reset: true,
          reverse: flip,
          from: { number: 0 },
          number: n,
          delay: 1000,
          config:  { mass: 1, tension: 20,  friction: 10},
          onRest: () => set(!flip),
        })
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    }




    return (
        <div  >

        {/* <h1>{Number (8)}</h1>    */}
         <div
          className="grid grid-cols-1 py-10 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="stats ">
            <div className="stat">
              <div className="stat-figure  " style={{ color: "#453364" }}>
               <p>bangladesh</p>
              </div>
              <div className="stat-value  " style={{ color: "#453364" }}>
                
                <Number n={500}/>
              </div>
              <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
                Successful recovery stories
              </div>
              
              {/* <div className="stat-desc text-1xl font-bold">
                21% more than last month
              </div> */}
            </div>
            <div className="stat">
              <div className="stat-figure  " style={{ color: "#453364" }}>
               
              </div>
              <div className="stat-value  " style={{ color: "#453364" }}>
                2000+
              </div>
              <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
              HealthCare related man power in our platform
              </div>
              
              {/* <div className="stat-desc text-1xl font-bold">
                21% more than last month
              </div> */}
            </div>
  
           
  
            {/* <div className="stat">
              <div className="stat-figure  " style={{ color: "#453364" }}>
             
              </div>
              <div
                className="stat-value "
                style={{ color: "#453364" }}
              >
                500+
              </div>
              <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
                HealthCare related man power in our platform
              </div>
              
             
            </div> */}
          
            <div className="stat">
              <div className="stat-figure  " style={{ color: "#453364" }}>
               
              </div>
              <div className="stat-value  " style={{ color: "#453364" }}>
                3000+
              </div>
              <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
                Medical assistant
              </div>
              
            
            </div>
            <div className="stat">
              <div className="stat-figure  " style={{ color: "#453364" }}>
               
              </div>
              <div className="stat-value  " style={{ color: "#453364" }}>
                150+
              </div>
              <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
                Physiotherapists
              </div>
              
            
            </div>
            <div className="stat">
              <div className="stat-figure  " style={{ color: "#453364" }}>
               
              </div>
              <div className="stat-value  " style={{ color: "#453364" }}>
                200+
              </div>
              <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
  Nurses
              </div>
              
            
            </div>
            <div className="stat">
              <div className="stat-figure  " style={{ color: "#453364" }}>
               
              </div>
              <div className="stat-value  " style={{ color: "#453364" }}>
                250+
              </div>
              <div className="text-[18px] font-bold" style={{ color: "#453364" }}>
                Caregivers
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    );
};

export default Success;
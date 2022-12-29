import React from 'react';
import { useState } from 'react';
import { useSpring,animated } from 'react-spring';
import "./Success.css";

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
    function Number2({n}) {



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
    function Number3({n}) {



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
          <div className="stats success text-white successtext">
            <div className="stat">
              <div className="stat-figure  "  >
               {/* <p>bangladesh</p> */}
              </div>
              <div className="stat-value flex  "  >
                
                <Number n={500} /><span>+</span>
              </div>
              <div className="text-[18px] font-bold"  >
                Successful recovery stories
              </div>
              
              {/* <div className="stat-desc text-1xl font-bold">
                21% more than last month
              </div> */}
            </div>
            <div className="stat">
              {/* <div className="stat-figure  "  >
               
              </div> */}
              <div className="stat-value flex  "  >
              <Number2 n={2000}  /><span>+</span>
              </div>
              <div className="  text-[18px] font-bold"  >
             LEAP related man power in our platform
              </div>
              
              {/* <div className="stat-desc text-1xl font-bold">
                21% more than last month
              </div> */}
            </div>
  
           
  
          
          
            <div className="stat">
              <div className="stat-figure  "  >
               
              </div>
              <div className="stat-value flex "  >
                <Number3 n={150}></Number3><span>+</span>
              </div>
              <div className="text-[18px] font-bold"  >
              Equipments
              </div>
              
            
            </div>
            <div className="stat">
              <div className="stat-figure  " >
               
              </div>
              <div className="stat-value flex "  >
              <Number3 n={200}></Number3><span>+</span>
              </div>
              <div className="text-[18px] font-bold"  >
                Physiotherapists
              </div>
              
            
            </div>
            <div className="stat">
              <div className="stat-figure  "  >
               
              </div>
              <div className="stat-value flex  "  >
              <Number3 n={100}></Number3><span>+</span>
              </div>
              <div className="text-[18px] font-bold"  >
              Physician
              </div>
              
            
            </div>
            {/* <div className="stat">
              <div className="stat-figure  "  >
               
              </div>
              <div className="stat-value  "  >
                250+
              </div>
              <div className="text-[18px] font-bold"  >
                Caregivers
              </div>
              
            
            </div> */}
          </div>
        </div>
      </div>
    );
};

export default Success;
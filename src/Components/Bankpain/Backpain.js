import React from "react";
import pain from "../../assets/pain.webp";

const Backpain = () => {
  return (
    <div>
      <div className="py-10 px-10">
        <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  bg-base-100 shadow-xl">
         
            <img src={pain} alt="Album" />
           
          <div className="card-body" data-aos="fade-right"
                  data-aos-duration="1000">
            <h2 className="card-title font-bold">
              PRIVATE BACK & SPINE TREATMENTS & SURGERY
            </h2>
            <p>
              Back pain is extremely common and may affect you at any time in
              your life. It may happen when you lift objects or fall – or simply
              for no reason at all. Although most episodes will be short, some
              don’t go away. When this happens, getting the right help as
              quickly as possible allows you to get on with living again. If you
              have a bad back, our team of back pain experts in London can
              diagnose your condition, explain your options and help you to
              recover quickly. We have everything under one roof at our back
              pain clinic. Working as a team, we have one aim – your recovery.
            </p>
            <div className="card-actions justify-end">
              <button className="btn  " style={{ backgroundColor: "#3E84DC", color: "white" }}>Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backpain;

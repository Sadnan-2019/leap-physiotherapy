import React from "react";
import electrone from "../../assets/rehabilitation1.jpg";
import electrotwo from "../../assets/rehabilitation2.jpg";
import electrothree from "../../assets/rehabilitation3.jpg";
// import electrothree from "../../assets/rehabilitation3.jpg";
import rehabilitation3 from "../../assets/manipulation9.jpg";
import rehabilitation4 from "../../assets/rehabilitation4.jpg";
const RehabilitationDetails = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-1  justify-center items-center    gap-12  px-12    py-6  ">
        <p className="text-justify font-medium ">
          Rehabilitation describes specialized healthcare dedicated to
          improving, maintaining or restoring physical strength, cognition and
          mobility with maximized results. Typically, rehabilitation helps
          people gain greater independence after illness, injury or surgery.
          Rehabilitation can also be explained as the process of helping an
          individual achieve the highest level of function, independence, and
          quality of life possible. Rehabilitation does not reverse or undo the
          damage caused by disease or trauma, but rather helps restore the
          individual to optimal health, functioning, and well-being.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  justify-center items-center    gap-12  px-10  ">
        <div className="justify-center items-center">
          <p className="text-2xl font-medium text-justify py-2 ml-3">
            Physiotherapy Rehabilitation
          </p>
          <p className=" font-medium text-justify py-2 ml-3">
            Physiotherapy rehabilitation aims to optimise patient function and
            well-being, to help integrate that patient back into their chosen
            lifestyle activities whether at home, work or leisure.
            Rehabilitation should focus on changes to functional disability and
            lifestyle restrictions based on the patient’s own goals for
            functional improvement. Rehabilitation can be used for recovery from
            injury or disease and also for the management of long-term
            conditions (e.g. Parkinsons and MS). Rehabilitation should start as
            soon as possible to speed recovery. The programs that combine many
            different components are likely to be most effective.
          </p>
           
        </div>

        <div className=" grid grid-cols-2 gap-8 mt-[50px] py-6 ">
          <img src={electrone} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrotwo} className="w-64 h-44  rounded-lg" alt="" />
          <img src={electrothree} className="w-64  h-44  rounded-lg" alt="" />
          <img src={rehabilitation4} className="w-64 h-44 rounded-lg" alt="" />
    
        </div>
      </div>
    </div>
  );
};

export default RehabilitationDetails;

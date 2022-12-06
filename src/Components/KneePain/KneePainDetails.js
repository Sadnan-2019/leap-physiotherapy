import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import electrone from "../../assets/knee2.jpg";
import electrotwo from "../../assets/knee3.jpg";
import electrothree from "../../assets/knee4.jpg";
import electrofour from "../../assets/knee5.jpeg";
const KneePainDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 px-10   ">
        <p className="text-2xl font-medium text-justify   ml-3 py-6">
          Knee Pain
        </p>
        <p className=" font-medium text-justify py-2 ml-3  ">
          The knee is a sensitive area of your body and one that is prone to
          injury doing almost any activity. Our initial treatments will focus on
          decreasing pain and swelling in your affected knee. Our physiotherapy
          team may begin range-of-motion exercises, with the goal of helping you
          swiftly regain full movement in your knee. We may also give you
          exercises to improve the strength of your knee muscles. As your
          symptoms ease and strength improves, we may also provide specialized
          exercises to improve knee stability.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  justify-center items-center    gap-12  px-10  ">
        <div className="justify-center items-center">
          <p className="text-2xl font-medium text-justify py-2 ml-3">
          Common knee problem:
          </p>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Osteoarthritis of knee

            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Patellar tendonitis
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            ACL/PCL injury
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            MCL/LCL injury
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Meniscus injury
            </p>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-8   py-6 ">
          <img src={electrone} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrotwo} className="w-64 h-44  rounded-lg" alt="" />
          <img src={electrothree} className="w-64  h-44  rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default KneePainDetails;

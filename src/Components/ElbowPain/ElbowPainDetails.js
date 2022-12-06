import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import electrone from "../../assets/elbow1.jpeg";
import electrotwo from "../../assets/elbow2.jpeg";
import electrothree from "../../assets/elbow3.webp";
import electrofour from "../../assets/elbow4.jpg";
const ElbowPainDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 px-10   ">
        <p className="text-2xl font-medium text-justify   ml-3 py-6">
          Elbow Pain
        </p>
        <p className=" font-medium text-justify py-2 ml-3  ">
          Elbow pain can be caused by many problems. A common cause in adults is
          tendinitis. This is inflammation and injury to the tendons, which are
          soft tissues that attach muscle to bone. People who play racquet
          sports are most likely to injure the tendons on the outside of the
          elbow. This condition is commonly called tennis elbow. Golfers are
          more likely to injure the tendons on the inside of the elbow. Other
          common causes of elbow tendinitis are gardening, playing baseball,
          using a screwdriver, or overusing your wrist and arm. Our
          physiotherapist may suggest ways to protect the elbow during your
          activities. Our overall goal is to help your elbow injury heal as soon
          as possible.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  justify-center items-center    gap-12  px-10  ">
        <div className="justify-center items-center">
          <p className="text-2xl font-medium text-justify py-2 ml-3">
            The common problem of  Elbow Pain:
          </p>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Tennis elbow
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Golfer elbow
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Bursitis
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Tendonitis
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Tendon rupture
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Ulna nerve irritation
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

export default ElbowPainDetails;

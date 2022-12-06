import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import electrone from "../../assets/neck1.jpg";
import electrotwo from "../../assets/neck2.png";
import electrothree from "../../assets/neck3.png";
import electrofour from "../../assets/neck4.jpg";
const NeckPainDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 px-10   ">
        <p className="text-2xl font-medium text-justify   ml-3 py-6">
          Neck pain
        </p>
        <p className=" font-medium text-justify py-2 ml-3  ">
          Physiotherapy can optimize the health of your neck and in some cases,
          prolong the need for surgery. Our physiotherapy programs are often
          prescribed for several weeks for patients with neck pain. Our therapy
          sessions are designed to help erase pain and to improve your activity,
          strength, posture, and function.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  justify-center items-center    gap-12  px-10  ">
        <div className="justify-center items-center">
          <p className="text-2xl font-medium text-justify py-2 ml-3">
            We treat:  
          </p>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Cervical spondylosis
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Cervicogenic headache
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Postural problem
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Weak neck muscles
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md  font-medium text-justify py-2 ml-3">
            Cervical disc prolaps(PID)
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Wry neck
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Thoracic outlet syndrome
{" "}
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Spinal stenosis
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
              Degenerative disc disease
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

export default NeckPainDetails;

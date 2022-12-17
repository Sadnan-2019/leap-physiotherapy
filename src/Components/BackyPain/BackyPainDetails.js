import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import electrone from "../../assets/backpainone.jpg";
import electrotwo from "../../assets/backpain2.jpg";
import electrothree from "../../assets/backpain3.jpg";
import electrofour from "../../assets/backpain4.jpg";

const BackyPainDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 px-10   ">
        <p className="text-2xl font-medium text-justify   ml-3 py-6">
          Back Pain
        </p>
        <p className=" font-medium text-justify py-2 ml-3  ">
          Our qualified physiotherapist designs programs to Treatment a
          particular back condition and to help you prevent future back pain
          problems from reoccurring. Our treatment focus first on relieving
          pain, improving your back movement, and fostering healthy posture.
          There is a great deal of scientific evidence that physiotherapy is
          beneficial for back pain.
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
            Lumber spondylosis

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
            Prolaps lumber intervertibral disc(PLID)
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Piriformis syndrome
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md  font-medium text-justify py-2 ml-3">
            Spinal stenosis
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Spondylitis
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Spondylisthesis            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Ankylosing spondylitis
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

export default BackyPainDetails;

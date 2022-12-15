import React from "react";
import { AiFillStar, AiOutlineCaretRight } from "react-icons/ai";
import electrone from "../../assets/electroone.jpg";
import electrotwo from "../../assets/electrotwo.jpg";
import electrothree from "../../assets/electrothree.jpg";
import electrofour from "../../assets/electro4.jpg";
const ElectrotherapyDetails = () => {
  return (
    <div>
      {/* <p className="text-2xl  mt-6 ml-6 text-center">Our Equipment</p>   */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 px-12     gap-5 py-6    items-center justify-center ">
        <div className="justify-center items-center">
          <p className="text-2xl font-medium text-justify py-5 ml-3">
            Electrotherapy gives good results for acute and chronic pain by
            modifying the impulse, leading to pain relief.
          </p>

          

          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-[15px] font-medium text-justify py-2 ml-3">
              Fully computerized both Lumber/Pelvic and Cervical traction unit
              from MINATO, Japan.
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-[15px] font-medium text-justify py-2 ml-3">
              SWD (Short Wave Diathermy) unit from Enraf-Noneus, Holland
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-[15px] font-medium text-justify py-2 ml-3">
              MWD (Micro Wave Diathermy) unit from Enraf-Noneus, Holland
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-[15px] font-medium text-justify py-2 ml-3">
              UST (Ultrasound Therapy) unit from Enraf-Noneus, Holland and
              Metron, Australia
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-[15px] font-medium text-justify py-2 ml-3">
              Wax bath/Paraphin bath therapy unit from Germany
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-[15px] font-medium text-justify py-2 ml-3">
            IRR (Infra Red Ray) unit from Germany
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-[15px] font-medium text-justify py-2 ml-3">
            IFT (Interferential Therapy) unit from Enraf-Noneus, Holland
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-[15px] font-medium text-justify py-2 ml-3">
            TENS (Transcunenius Electrical Nerve Stimulation) unit from Enraf-Noneus, Holland
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-[15px] font-medium text-justify py-2 ml-3">
            Muscles Stimulator unit from Enraf-Noneus, Holland
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-[15px] font-medium text-justify py-2 ml-3">
            LESER therapy unit from Metron, Australia
            </p>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-8 justify-center items-center">
          <img src={electrone} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrotwo} className="w-64 h-44  rounded-lg" alt="" />
          <img src={electrothree} className="w-64  h-44  rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ElectrotherapyDetails;

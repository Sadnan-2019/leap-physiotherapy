import React from "react";
import electrone from "../../assets/electroone.jpg";
import electrotwo from "../../assets/electrotwo.jpg";
import electrothree from "../../assets/electrothree.jpg";
import electrofour from "../../assets/electro4.jpg";
import { AiFillStar, AiOutlineCaretRight } from "react-icons/ai";
const SportsInjuriesDetails = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center       gap-12  px-12  py-6 ">
        <div className=" ">
          <p className="text-2xl font-medium text-justify py-2 ml-3">
            Sports injuries are injuries that occur in athletic activities or
            exercising. They can result from accidents, poor training technique
            in practice, inadequate equipment, and overuse of a particular body
            part.
          </p>
          <p className="text-2xl font-medium text-justify py-2 ml-3">
          The seven most common sports injuries are:
          </p>

          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
            Ankle sprain.

            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
            Groin pull.


            </p>
          </div>
         

          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
            Hamstring strain.

            </p>
          </div>
          
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
            Shin splints.

            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
            Knee injury: Patellofemoral syndrome — injury resulting from the repetitive movement of your kneecap against your thigh bone.
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
            Knee injury: ACL/PCL/MCL/LCLtear.

            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
            Tennis elbow (epicondylitis)

            </p>
          </div>
           
        </div>

        <div className=" grid grid-cols-2 gap-8  justify-center items-center ">
          <img src={electrone} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrotwo} className="w-64 h-44  rounded-lg" alt="" />
          <img src={electrothree} className="w-64  h-44  rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
          {/* <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default SportsInjuriesDetails;

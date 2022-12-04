import React from "react";
import electrone from "../../assets/electroone.jpg";
import electrotwo from "../../assets/electrotwo.jpg";
import electrothree from "../../assets/electrothree.jpg";
import electrofour from "../../assets/electro4.jpg";
import { AiOutlineCaretRight } from "react-icons/ai";
const TherapeuticExerciseDetails = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2      gap-12  px-10  ">
        <div className="justify-center items-center">
          <p className="text-2xl font-medium text-justify mt-12 ml-3">
            Therapeutic exercise -
          </p>
          <p className="  font-medium text-justify py-2 ml-3">
            Therapeutic exercises refers to a wide range of physical activities
            that focuses on restoring and maintaining strength, endurance,
            flexiblity, stability and balance. The goal of therapeutic exercises
            is to return an injured patient to a fully functioning, pain-free
            state. Our physiotherapist begins by conducting a thorough
            evaluation of an individual’s physical capabilities through both a
            medical history and physical assessment. Physiotherapist then uses
            his/her knowledge to shape a treatment care plan containing a
            slowly-progressing exercise program that is appropriate to each
            individual’s needs. Physiotherapist monitors progress, assists with
            some physical movements and continuously modifies the plan as the
            client recovers.
          </p>
          <p className="text-2xl font-medium text-justify py-2 ml-3">
            We provide for:
          </p>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
              Strengthening
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
            Range of motion exercise

            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
            Stretching exercise

            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-xl font-medium text-justify py-2 ml-3">
            Balancing exercise

            </p>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-8 mt-[50px] py-6 ">
          <img src={electrone} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrotwo} className="w-64 h-44  rounded-lg" alt="" />
          <img src={electrothree} className="w-64  h-44  rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TherapeuticExerciseDetails;

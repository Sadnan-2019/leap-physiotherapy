import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import electrone from "../../assets/shoulder1.jpg";
import electrotwo from "../../assets/sholder2.jpg";
import electrothree from "../../assets/shoulder2.jpg";
import electrofour from "../../assets/shoulder3.webp";
const ShoulderPainDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 px-10   ">
        <p className="text-2xl font-medium text-justify   ml-3 py-6">
          Shoulder Pain
        </p>
        <p className=" font-medium text-justify py-2 ml-3  ">
          The shoulder has a wide and versatile range of motion. When something
          goes wrong with your shoulder, it hampers your ability to move freely
          and can cause a great deal of pain and discomfort. The shoulder joint
          is the most mobile joint in the body. It moves the shoulder forward
          and backward. It also allows the arm to move in a You can injure your
          shoulder by performing manual labor, playing sports, or even by
          repetitive movement. Certain diseases can bring about pain that
          travels to the shoulder. These include diseases of the cervical spine
          of the neck, as well as liver, heart, or gallbladder disease. You’re
          more likely to have problems with your shoulder as you grow older. It
          is especially common after age 60. This is because the soft tissues
          surrounding the shoulder tend to degenerate with age. After evaluating
          your condition, our physiotherapy team will use various treatments to
          ease spasm and pain increase range of motion.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  justify-center items-center    gap-12  px-10  ">
        <div className="justify-center items-center">
          <p className="text-2xl font-medium text-justify py-2 ml-3">
          The common problem of shoulder joint:


          </p>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Shoulder capsulitis/frozen shoulder
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Subacromion bursitis
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Subdeltoid bursitis
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Bicef tendonitis etc.
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

export default ShoulderPainDetails;

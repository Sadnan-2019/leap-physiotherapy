import React from "react";
import { AiFillStar, AiOutlineCaretRight } from "react-icons/ai";
import electrone from  "../../assets/electroone.jpg"
import electrotwo from  "../../assets/electrotwo.jpg"
import electrothree from  "../../assets/electrothree.jpg"
import electrofour from  "../../assets/electro4.jpg"
const ElectrotherapyDetails = () => {
  return (
    <div>
      {/* <p className="text-2xl  mt-6 ml-6 text-center">Our Equipment</p>   */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2      gap-5   px-5 mt-[100px] ">
     <div className="justify-center items-center">
        <p className="text-2xl font-medium text-justify py-5 ml-3">Electrotherapy gives good result for acute and chronic pain by modifying the impulse which leads to relief of pain.</p>

     <div className="flex justify-center items-center gap-2  ">
        
        <div>
            
          <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
          <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
          <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
          <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
          <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
          <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
          <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
          <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
          <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
          <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
        </div>
        <div className=" ">
       <ul>
        <li>

        <p className=" ">
            Fully computerized both Lumber/Pelvic and Cervical traction unit
            from MINATO, Japan
          </p>
          <p>
          SWD (Short Wave Diathermy) unit from Enraf-Noneus, Holland

          </p>
          <p>
          MWD (Micro Wave Diathermy) unit from Enraf-Noneus, Holland

          </p>
          <p>
          UST (Ultrasound Therapy) unit from Enraf-Noneus, Holland and Metron, Australia

          </p>
          <p>
          Wax bath/Paraphin bath therapy unit from Germany

          </p>
          <p>
          IRR (Infra Red Ray) unit from Germany

          </p>
          <p>
          IFT (Interferential Therapy) unit from Enraf-Noneus, Holland

          </p>
          <p>
          TENS (Transcunenius Electrical Nerve Stimulation) unit from Enraf-Noneus, Holland

          </p>
          <p>
          Muscles Stimulator unit from Enraf-Noneus, Holland

          </p>
          <p>
          LESER therapy unit from Metron, Australia

          </p>
        </li>
       </ul>
        </div>
      </div>
     </div>

      
      <div className=" grid grid-cols-2 gap-8">
        <img src={electrone} className="w-64 h-44 rounded-lg" alt=""/>
        <img src={electrotwo} className="w-64 h-44  rounded-lg" alt=""/>
        <img src={electrothree} className="w-64  h-44  rounded-lg" alt=""/>
        <img src={electrofour} className="w-64 h-44 rounded-lg" alt=""/>
      </div>













      </div>
    </div>
  );
};

export default ElectrotherapyDetails;

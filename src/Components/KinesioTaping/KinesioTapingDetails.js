import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import electrone from "../../assets/kniotaping.jpg";
import electrotwo from "../../assets/kniotaping2.jpeg";
import electrothree from "../../assets/kniotaping.3jpg.jpg";
import electrofour from "../../assets/kniotaping5.jpeg";
import five from "../../assets/kniotaping5.jpg";
// import { AiOutlineCaretRight } from "react-icons/ai";

const KinesioTapingDetails = () => {
  return (
    <div>

        <div className="grid grid-cols-1 px-10   ">
        <p className="text-2xl font-medium text-justify   ml-3 py-6">
          Kinesio Taping
 
          </p>
          <p className=" font-medium text-justify py-2 ml-3  ">
            Kinesiology tape is a thin, stretchy, elastic cotton strip with an
            acrylic adhesive. Therapeutic kinesiology tape that can benefit a
            wide variety of musculoskeletal and sports injuries, plus
            inflammatory conditions. Kinesiology tape is almost identical to
            human skin in both thickness and elasticity, which allows kinesio
            tape to be worn without binding, constricting or restriction of your
            movement. Kinesiology tape is an that is used for treating athletic
            injuries and a variety of physical disorders..
          </p>



        </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  justify-center items-center    gap-12  px-10  ">
        <div className="justify-center items-center">
          
          <p className="text-2xl font-medium text-justify py-2 ml-3">
          Kinesio Tape May Help
          </p>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Muscle Strains 
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Ligament Sprains

            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Bruisingor Haematoma

            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Muscle Weakness
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md  font-medium text-justify py-2 ml-3">
            Hypotonia – Low Muscle Tone
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Joint Alignment and Maltracking

            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Joint instability or Hypermobility
            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Poor Posture: Round Shoulders, Slouched Spine

            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Scapular Instability (SICK)


            </p>
          </div>
          <div className="flex items-center justify-start">
            <span>
              <AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight>
            </span>
            <p className="text-md font-medium text-justify py-2 ml-3">
            Post-fracturesupport 



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

export default KinesioTapingDetails;

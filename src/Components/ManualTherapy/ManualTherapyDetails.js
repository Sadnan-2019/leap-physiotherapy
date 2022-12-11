import React from "react";
import electrone from "../../assets/electroone.jpg";
import electrotwo from "../../assets/electrotwo.jpg";
import electrothree from "../../assets/electrothree.jpg";
import electrofour from "../../assets/electro4.jpg";
import { AiFillStar, AiOutlineCaretRight } from "react-icons/ai";

const ManualTherapyDetails = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-1  justify-center items-center    gap-12  px-12    mt-[50px]  py-6  ">
        <p className="text-justify font-medium  ">
          <span className="text-blue-800 font-bold">Manual therapy, or manipulative therapy,</span> 
          
          
          is a physical treatment
          primarily used by physiotherapistst and manual therapist treat
          musculoskeletal pain and disability; it most commonly includes
          kneading and manipulation of muscles, joint mobilization and joint
          manipulation. The three most notable forms of manual therapy are
          manipulation, mobilization and massage. Manipulation is the artful
          introduction of a rapid rotational, shear or distraction force into an
          articulation. Manipulation is often associated with an audible popping
          sound caused by the instantaneous breakdown of gas bubbles that form
          during joint cavitation.[citation needed] Mobilization is a slower,
          more controlled process of articular and soft-tissue (myofascial)
          stretching intended to improve bio-mechanical elasticity. Massage is
          typically the repetitive rubbing, stripping or kneading of myofascial
          tissues to principally improve interstitial fluid dynamics.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center       gap-12  px-12  py-6 ">
        <div className="justify-center items-center">
          <p className="text-2xl font-medium text-justify py-2  ">
          We have Qualified and skilled Manual Therapist who assessment you carefully and treat you softly accurately. Our Manual therapy service are-


          </p>

       <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-lg font-medium text-justify py-2 ml-3">
           Manipulation

          </p>
       </div>
      <div className="  ml-12">
      <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-md font-medium text-justify py-2 ml-3">
          Joint Manipulation


          </p>
       </div>
       <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-md font-medium text-justify py-2 ml-3">
          Visceral Manipulation


          </p>
       </div>
      </div>

      <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-lg font-medium text-justify py-2 ml-3">
          Mobilization

          </p>
       </div>
       <div className="  ml-12">
      <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-md font-medium text-justify py-2 ml-3">
          Joint Mobilization


          </p>
       </div>
       <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-md font-medium text-justify py-2 ml-3">
          Muscular Mobilization


          </p>
       </div>
       <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-md font-medium text-justify py-2 ml-3">
          Visceral Mobilization


          </p>
       </div>
      </div>
      <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className=" text-md font-medium text-justify py-2 ml-3">
          Myofacial Release


          </p>
       </div>
      <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-md font-medium text-justify py-2 ml-3">
          Therapeutic Massage


          </p>
       </div>
      <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-md font-medium text-justify py-2 ml-3">
          Positional Release


          </p>
       </div>
      <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-md font-medium text-justify py-2 ml-3">
          DTFM(Deep Transverse Friction Massage)

          </p>
       </div>
      <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-md font-medium text-justify py-2 ml-3">
          Trigger point Release

          </p>
       </div>
      <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-md font-medium text-justify py-2 ml-3">
          Postural Training


          </p>
       </div>
        </div>

        <div className=" grid grid-cols-2 gap-8   ">
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

export default ManualTherapyDetails;

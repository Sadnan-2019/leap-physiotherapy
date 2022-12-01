import React from "react";
import electrone from "../../assets/electroone.jpg";
import electrotwo from "../../assets/electrotwo.jpg";
import electrothree from "../../assets/electrothree.jpg";
import electrofour from "../../assets/electro4.jpg";
import { AiFillStar, AiOutlineCaretRight } from "react-icons/ai";

const ManualTherapyDetails = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-1  justify-center items-center    gap-12  px-12 mt-[50px]  py-6 text-xl font-semibold">
        <p className="text-justify  ">
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

      <div className="grid sm:grid-cols-1 lg:grid-cols-2      gap-12  px-10 mt-[50px] ">
        <div className="justify-center items-center">
          <p className="text-2xl font-medium text-justify py-2 ml-3">
          We have Qualified and skilled Manual Therapist who assessment you carefully and treat you softly accurately. Our Manual therapy service are-


          </p>

       <div className="flex items-center justify-start"> 
       
       <span><AiOutlineCaretRight className="text-2xl text-blue-900"></AiOutlineCaretRight></span>
          <p className="text-xl font-medium text-justify py-2 ml-3">
           Manipulation

          </p>
       </div>
      <div className="bg-red-400 ml-12">
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
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Musculoskeletal – prevents and treats clients with musculoskeletal
            conditions such as neck and back pain. Techniques include addressing
            underlying problems, preventing strain and injury, and prescribing
            exercises and other interventions to promote mobility.
          </p>
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Orthopaedic – helps patients prevent or manage acute or chronic
            orthopaedic conditions such as osteoarthritis, rheumatoid arthritis
            and amputations. Physiotherapists also help patients prepare for or
            rehabilitate from orthopaedic surgery, or another orthopaedic
            hospital admissions.
          </p>
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Occupational health – supports the health and wellbeing of workers,
            reduces safety risks in the workplace, prevents and manages injuries
            and diseases, and support workers in returning to work.
          </p>
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Cardiorespiratory – prevents, rehabilitates and supports people
            living with, or at risk of diseases and injuries affecting the heart
            and lungs, such as heart disease or asthma. Physiotherapists help
            patients prepare for or recover from surgery, and prescribe
            exercises and other interventions to improve quality of life.
          </p>
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Cancer, palliative care and lymphoedema – addresses a range of
            patient needs, including treating, managing or preventing fatigue,
            pain, muscle and joint stiffness, and deconditioning.
          </p>
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Continence and women’s health – manages and prevents incontinence
            and pelvic floor dysfunction in men, women and children.
            Physiotherapists work in areas including pregnancy, birth,
            post-partum care, breastfeeding, menopause, bedwetting, prolapse,
            loss of bladder or bowel control, and with men living with or
            recovering from prostate cancer.
          </p>
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Neurology – promotes movement and quality of life in patients who
            have had severe brain or spinal cord damage from trauma, or who
            suffer from neurological diseases such as stroke, Parkinson’s
            disease and multiple sclerosis.
          </p>
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Paediatric (supporting infants and children) – aims to prevent
            conditions such as plagiocephally (misshapen head) or support a
            child’s development such as addressing milestone delays with sitting
            and walking, clumsiness, or hyperactivity.
          </p>
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Sports – prevents, diagnoses and treats musculoskeletal and sporting
            injuries among all types of people, from professional athletes.
          </p>
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Acupuncture and dry needling – which helps to manage both chronic
            and acute conditions such as sprains and strains, spinal
            dysfunction, arthritis and neurological conditions.
          </p>
        </div>

        <div className=" grid grid-cols-2 gap-8 mt-[50px] ">
          <img src={electrone} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrotwo} className="w-64 h-44  rounded-lg" alt="" />
          <img src={electrothree} className="w-64  h-44  rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
        </div>
      </div>


    </div>
  );
};

export default ManualTherapyDetails;

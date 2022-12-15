import React from "react";
import electrone from "../../assets/physio1.jpg";
import electrotwo from "../../assets/physio2.webp";
import electrothree from "../../assets/physio3.jpg";
import electrofour from "../../assets/physio4.jpg";
import physio5 from "../../assets/PHYSIO6.webp";
import physio7 from "../../assets/physio7.jpg";
import physio8 from "../../assets/physio8.jpg";
import { AiFillStar, AiOutlineCaretRight } from "react-icons/ai";
const PhysiotherapyDetails = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-1  justify-center items-center    gap-12  px-12 mt-[50px]  py-6 ">
        <p className="font-medium text-justify ">
          Physiotherapists are highly qualified health professionals who work in
          partnership with their patients to help people get better and stay
          well. Physiotherapists also work closely with GPs and other health
          clinicians to plan and manage treatment. Using advanced techniques and
          evidence-based care, physiotherapists assess, diagnose, treat and
          prevent a wide range of health conditions and movement disorders.
          Physiotherapy helps repair damage, reduce stiffness and pain, increase
          mobility and improve quality of life. Physiotherapy extends from
          health promotion to injury prevention, acute care, rehabilitation,
          maintenance of functional mobility, chronic disease management,
          patient and carer education and occupational health.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  items-center justify-center    gap-12  px-10  ">
        <div className="justify-center items-center">
          <p className="text-2xl font-medium text-justify py-2 ml-3">
            Why Physiotherapy needs for-
          </p>
          <p className="text-sm font-medium text-justify py-2 ml-3">
            Pain – manages or prevents pain and its impact on function in
            patients using a psychologically informed and interdisciplinary
            approach. Physiotherapists work with other health and social-care
            professionals to manage pain at the acute stage of an injury or
            condition, including through identifying psychosocial risk factors
            that may lead to chronicity.
          </p>
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

        <div className=" grid grid-cols-2 gap-8  ">
          <img src={electrone} className="w-64 h-44 rounded-lg" alt="" />
          <img src={electrotwo} className="w-64 h-44  rounded-lg" alt="" />
          <img src={electrothree} className="w-64  h-44  rounded-lg" alt="" />
          <img src={electrofour} className="w-64 h-44 rounded-lg" alt="" />
          <img src={physio5} className="w-64 h-44 rounded-lg" alt="" />
          <img src={physio7} className="w-64 h-44 rounded-lg" alt="" />
          <img src={physio8} className="w-64 h-44 rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PhysiotherapyDetails;

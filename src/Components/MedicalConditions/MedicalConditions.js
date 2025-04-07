import React from "react";
import Marquee from "react-fast-marquee";
import Tightnessmuscle from "../../assets/Tightness Of Muscle.jpg";
import  Arthritis from "../../assets/Arthritis.avif";
import posturalsyndrome from "../../assets/posturalsyndrome.jpg";
import FrozenShoulder from "../../assets/Frozen Shoulder.webp";
import   GolfersElbow from "../../assets/Golfers Elbow.jpg";
import    LumberSpondylitis from "../../assets/Lumber Spondylitis.jpg";
import    AcuteWryNeck from "../../assets/Acute Wry Neck.jfif";
import  TennisElbow from "../../assets/Tennis Elbow.jpg";
import  NerveProblem from "../../assets/Nerve Problem.jpeg";
import  ReferredPain from "../../assets/Referred Pain.jpg";
import  Osteoarthritis from "../../assets/Osteoarthritis.jpg";
import   AnySportsInjury from "../../assets/Any Sports Injury.jpg";
import "./MedicalConditions.css";

const MedicalConditions = () => {
  return (
    <div className="conditions">
      <div className="py-12 mx-8 md:mx-16 lg:mx-24">
        <h2
          className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-xl text-center   font-bold poppins-b lg:text-4xl  "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          We Treat the following Medical Conditions{" "}
        </h2>
        
      </div>
      <Marquee gradientColor={false} speed={80} gradient={false} play={true}>
        <div className="mx-10 ">
          <img
            src={Arthritis}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Arthritis
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={FrozenShoulder}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Frozen Shoulder
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={GolfersElbow}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Golfers Elbow
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={LumberSpondylitis}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Lumber Spondylitis
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={AcuteWryNeck}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Acute Wry Neck
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={Tightnessmuscle}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Tightness Of Muscle
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={TennisElbow}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Tennis Elbow
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={posturalsyndrome}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Postural Syndrome
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={NerveProblem}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Nerve Problem
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={ReferredPain}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Referred Pain
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={Osteoarthritis}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Osteoarthritis
          </p>
        </div>
        <div className="mx-10 ">
          <img
            src={AnySportsInjury}
            alt="Shoes"
            className="rounded-full w-52"
          />
          <p className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2">
            Any Sports Injury
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default MedicalConditions;

import React from 'react';
import Marquee from 'react-fast-marquee';
import Tightnessmuscle from "../../assets/Tightness Of Muscle.jpg"
import posturalsyndrome from "../../assets/posturalsyndrome.jpg"
import "./MedicalConditions.css"

const MedicalConditions = () => {
    return (
        <div className='conditions'>
            <div className=" md:mx-16 lg:mx-24 mx-8 py-12">
        <h2 className="text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-xl text-center   font-bold poppins-b lg:text-4xl  " data-aos="fade-up"
            data-aos-duration="1000" >
        We Treat the following Medical Conditions        </h2>
        {/* <h1
            className="  w-64 h-1 rounded-lg mt-2 mb-4 mx-auto"
            style={{ backgroundColor: "#453364" }}
          ></h1> */}
      </div>
      <Marquee   gradientColor={false} speed={80} gradient={false} play={true}>
        <div className="  	  	 mx-10">
          <img
            src="https://img.medscapestatic.com/pi/features/slideshow-slide/rheumatoid-arthritis-6006748/update2022/fig1.jpg "
            alt="Shoes"
            className="w-52   rounded-full"
          />
          <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Arthritis</p>
        </div>
        <div className="       	  mx-10">
          <img
          src="https://dynamichealth.je/wp-content/uploads/2015/12/Shoulder-pain.jpg"
            alt="Shoes"
            className="  w-52  rounded-full  "
          />
          <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Frozen Shoulder</p>
        </div>
        <div className="     	 mx-10 ">
          <img
            src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2001582.jpg"
            alt="Shoes"
            className="  w-52 rounded-full    "
          />
           <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Golfers Elbow</p>
        </div>
        <div className="     	 mx-10 ">
          <img
            src="https://ayurshiayurveda.com/wp-content/uploads/2022/08/5-Lumbar-Spondylosis.jpg"
            alt="Shoes"
            className=" w-52  rounded-full    "
          />
          <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Lumber Spondylitis</p>
        </div>
        <div className="     	 mx-10 ">
          <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YNR6vTPyjxjhE8YvAptDYyQ4kTrqxtzv8KFqvaQEbU7uLVxTmIBFT1wnGriB2dpj2ac&usqp=CAU"
            alt="Shoes"
            className="   w-52   rounded-full  "
          />
          <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Acute Wry Neck</p>
        </div>
        <div className="      	 mx-10 ">
          <img
            src={Tightnessmuscle}
            alt="Shoes"
            className=" w-52   rounded-full    "
          />
          <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Tightness Of Muscle</p>
        </div>
        <div className="     	 mx-10 ">
          <img
           src="https://assets.ct-ortho.com/wp-content/uploads/2019/11/01174328/tennis-elbow-resized.jpg"
            alt="Shoes"
            className=" w-52    rounded-full "
          />
           <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Tennis Elbow</p>
          
        </div>
        <div className=" 	 mx-10     ">
          <img
            src={posturalsyndrome}
            alt="Shoes"
            className=" w-52     rounded-full  "
          />
          <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Postural Syndrome</p>
        </div>
        <div className=" 	 mx-10     ">
          <img
           src="https://winsantor.com/wp-content/uploads/64547937_l-1-scaled.jpeg"
            alt="Shoes"
            className=" w-52  rounded-full      "
          />
          <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Nerve Problem</p>
        </div>
        <div className=" 	 mx-10     ">
          <img
           src="https://walterroadchiropractic.com.au/wp-content/uploads/2020/03/chiropractic-1024x681-696x463-1.jpg"
            alt="Shoes"
            className=" w-52  rounded-full       "
          />
           <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Referred Pain</p>
        </div>
        <div className=" 	 mx-10     ">
          <img
           src="https://blogs.nottingham.ac.uk/msk/files/2020/03/Hand-OA-2-e1583155339224.jpg"
            alt="Shoes"
            className=" w-52  rounded-full         "
          />
                     <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Osteoarthritis</p>
        </div>
        <div className=" 	 mx-10     ">
          <img
           src="https://www.homage.sg/wp-content/uploads/2020/11/bigstock-Knee-Injuries-Sport-Woman-Wit-354877691-e1609312492149.jpg"
            alt="Shoes"
            className=" w-52 rounded-full         "
          />
          <p className='text-transparent   bg-clip-text bg-gradient-to-r from-[#034ca7] to-[#2622B7] text-center font-bold text-xl py-2'>Any Sports Injury</p>
        </div>
        
       
      

      </Marquee>
        </div>
    );
};

export default MedicalConditions;
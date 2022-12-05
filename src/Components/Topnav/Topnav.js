import React from 'react';
import logo from "../../assets/leaplogo.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
 
import sub from "../../assets/sub.png"
import schs from "../../assets/schs.png"
import { FaFacebookSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';

const Topnav = () => {
    return (
        <div>
            
            <div className="flex   flex-col md:flex-row  justify-between px-10	 lx:px-12    items-center ">
        <div>
          <img  src={logo} className="w-32" alt="" />
          {/* <button  className="bg-red-400">        <a href="https://api.whatsapp.com/send?phone=01892409715" >Send Message</a></button> */}

        </div>
        <div className="grid grid-cols-3 justify-items-center items-center gap-12  ">
           
          <div
            className="flex items-center font-bold     gap-2"
            style={{ color: "white" }}
          >
            <div>
              <MdOutlinePhonelinkRing className="text-[10px] lg:text-2xl  text-[#38639F]    " />
            </div>
            <div className='text-[#38639F]  '>
              <p className="text-[10px] lg:text-xs 	">
                01619848555  
              </p>
              <p className="text-[10px] lg:text-xs  	 	">01619848555  </p>
            </div>
          </div>
          <div
            className="flex items-center font-bold    gap-2"
            style={{ color: "white" }}
          >
            <div>
              <HiOutlineMailOpen className="text-[10px] lg:text-2xl  	text-[#38639F]  " />
            </div>
            <div className='text-[#38639F]'>
              <p className="text-[10px] lg:text-xs     	">
                Email us
              </p>
              <p className="text-[10px] lg:text-xs	 	">info@leap.com.bd</p>
            </div>
          </div>
          <div
            className="   lg:flex items-center font-bold    gap-2"
            style={{ color: "white" }}
          >
             <div className="flex justify-items-center items-center gap-2  text-[#38639F]">
          <FaFacebookSquare className="text-lg ml-2  " />
          <BsLinkedin className="text-lg ml-2  " />
          <TiSocialTwitter className="text-lg ml-2  " />
          <TiSocialInstagram className="text-lg ml-2  " />
          </div>
          </div>
        </div>
      </div>
            </div>
       
    );
};

export default Topnav;

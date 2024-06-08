import React from "react";
import dr1 from "../../assets/teamAVATER.jpg"
import "./Team.css"
const Team = () => {
  return (
    <div className=" team mb-10     bg-gradient-to-r from-[#034ca7]  to-[#2622B7]  ">
      <div className=" md:mx-16 lg:mx-24 mx-8  ">
        <h2 className="text-3xl text-center py-12  font-bold poppins-b sm:text-4xl text-white">
          Meet Our Team
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5  px-0   lg:px-12      py-[25px] items-center justify-items-center   " >
        <div class="         w-screen  lg:w-5/6  ">
          <div class="overflow-hidden   aspect-video w-full lg:w-full   h-96 cursor-pointer rounded-xl relative group ">
            <div class=" rounded-xl z-50 w-screen lg:w-full opacity-0 bg-red-400 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              {/* <div className="  ">
              <div class="bg-gradient-to-r from-[#034ca7]  to-[#5f7499]  transform-gpu w-screen   lg:w-96    p-6 space-y-3 text-sm lg:text-xl group-hover:opacity-100   group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div class="font-bold">Jessie Watsica Bangladesh</div>

                  <div class=" text-sm font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio dolores error  
                  </div>
                </div>
              </div> */}
            </div>
            <img
              alt=""
              class="sm:w-full h-96    lg:w-full lg:h-56  aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src= {dr1}
            />
          </div>
        </div>
        <div class="     bg-gradient-to-br bg-red-600 w-screen  lg:w-5/6  ">
          <div class="overflow-hidden   aspect-video w-full lg:w-full   h-96 cursor-pointer rounded-xl relative group  ">
            <div class=" rounded-xl z-50 w-screen  lg:w-full opacity-0 bg-red-400 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              {/* <div className="  ">
              <div class=" bg-gradient-to-r from-[#034ca7]  to-[#5f7499] transform-gpu w-screen   lg:w-96    p-6 space-y-3 text-sm lg:text-xl group-hover:opacity-100 bg-green-500 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div class="font-bold">Jessie Watsica Bangladesh</div>

                  <div class=" text-sm font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio dolores error  
                  </div>
                </div>
              </div> */}
            </div>
            <img
              alt=""
              class="sm:w-full h-96    lg:w-full lg:h-56  aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src= {dr1}
            />
          </div>
        </div>
        <div class="     bg-gradient-to-br bg-red-600 w-screen  lg:w-5/6  ">
          <div class="overflow-hidden   aspect-video w-full lg:w-full   h-96 cursor-pointer rounded-xl relative group  ">
            <div class=" rounded-xl z-50 w-screen  lg:w-full opacity-0 bg-red-400 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              {/* <div className="  ">
              <div class="bg-gradient-to-r from-[#034ca7]  to-[#5f7499] transform-gpu w-screen   lg:w-96   p-6  space-y-3 text-sm lg:text-xl group-hover:opacity-100 bg-green-500 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div class="font-bold">Jessie Watsica Bangladesh</div>

                  <div class=" text-sm font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio dolores error  
                  </div>
                </div>
              </div> */}
            </div>
            <img
              alt=""
              class="sm:w-full h-96    lg:w-full lg:h-56  aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src= {dr1}
            />
          </div>
        </div>









       
        

 
 
      </div>
    </div>
  );
};

export default Team;

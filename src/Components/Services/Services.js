import React from 'react';

const Services = () => {
     return (
          <div>
               <div className="py-10" >
               <div className=" ">
          <h2 className="text-3xl text-center   font-bold poppins-b sm:text-4xl" style={{color:"#CB052F"}}>
            Our Services
          </h2>
        </div>

<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mx-10 gap-10    py-8'>

<div className="      flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10" style={{backgroundColor:"white",borderRadius:"25px"}}>
  <img src="https://www.rehabphysiolondon.com/wp-content/uploads/2019/06/Neuro.png " className='w-32' alt="Movie"/> 
  <div className=" ">
    <h2 className=" ">Neuro Rehab</h2>
    <p>Focused on helping conditions of the nervous system</p>
    <div className=" ">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
<div className="      flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10" style={{backgroundColor:"white",borderRadius:"25px"}}>
  <img src="https://www.rehabphysiolondon.com/wp-content/uploads/2019/06/Respiratory.png" className='w-32' alt="Movie"/> 
  <div className=" ">
    <h2 className=" ">Chest Physio</h2>
    <p>Respiratory physiotherapy helps treat, educate and advise people who have problems with their lungs and heart</p>
    <div className=" ">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>

</div>

               </div>
          </div>
     );
};

export default Services;
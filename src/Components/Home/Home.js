
import React from 'react';
import Backpain from '../Bankpain/Backpain';
import Landing from '../Landing/Landing';
import Landingnew from '../Landing/Landingnew';
import MedicalConditions from '../MedicalConditions/MedicalConditions';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
           <Landingnew/> 
           <MedicalConditions></MedicalConditions>
           <Services/>
           {/* <Backpain/> */}
          </div>
     );
};

export default Home;
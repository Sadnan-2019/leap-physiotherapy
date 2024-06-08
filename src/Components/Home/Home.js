
import React from 'react';
import About from '../About/About';
import Backpain from '../Bankpain/Backpain';
import Contact from '../Contact/Contact';
import HomeTeam from '../HomeTeam/HomeTeam';
// import Landing from '../Landing/Landing';
// import Landing from '../Landing/Landing';
import Landingnew from '../Landing/Landingnew';
import MedicalConditions from '../MedicalConditions/MedicalConditions';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Success from '../Success/Success';
// import Team from '../Team/Team';
// import Type from '../Type/Type';

const Home = () => {
     return (
          <div>
           <Landingnew/> 
           {/* <Landing></Landing> */}
           {/* <Type></Type> */}
           <MedicalConditions></MedicalConditions>
           <Services/>
           <Review></Review>
           {/* <Backpain/> */}
           <About></About>
           <Success></Success>
           {/* <Team></Team> */}
           <HomeTeam></HomeTeam>
           <Contact></Contact>

          </div>
     );
};

export default Home;
import React from 'react';
import Backpain from '../Bankpain/Backpain';
import Landing from '../Landing/Landing';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
           <Landing/> 
           <Services/>
           <Backpain/>
          </div>
     );
};

export default Home;
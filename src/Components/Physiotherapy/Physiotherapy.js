import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
// import ElectrotherapyDetails from '../Electrotherapy/ElectrotherapyDetails';
import PhysiotherapyDetails from './PhysiotherapyDetails';
import PhysiotherapyLanding from './PhysiotherapyLanding';

const Physiotherapy = () => {
    return (
        <div>
          <PhysiotherapyLanding></PhysiotherapyLanding>  
          
           <PhysiotherapyDetails></PhysiotherapyDetails>
           <Review></Review>
           <Team></Team>
        </div>
    );
};

export default Physiotherapy;
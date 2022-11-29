import React from 'react';
import Review from '../Review/Review';
import ElectrotherapyDetails from './ElectrotherapyDetails';
import ElectrotherapyLanding from './ElectrotherapyLanding';
import Team from '../Team/Team';

const Electrotherapy = () => {
    return (
        <div>
            <ElectrotherapyLanding></ElectrotherapyLanding>
            <ElectrotherapyDetails></ElectrotherapyDetails>
            <Review></Review>
            <Team></Team>
          
        </div>
    );
};

export default Electrotherapy;


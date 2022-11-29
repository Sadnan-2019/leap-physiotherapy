import React from 'react';
import Review from '../Review/Review';
import ElectrotherapyDetails from './ElectrotherapyDetails';
import ElectrotherapyLanding from './ElectrotherapyLanding';


const Electrotherapy = () => {
    return (
        <div>
            <ElectrotherapyLanding></ElectrotherapyLanding>
            <ElectrotherapyDetails></ElectrotherapyDetails>
            <Review></Review>
          
        </div>
    );
};

export default Electrotherapy;


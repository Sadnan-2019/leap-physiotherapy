import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
import KneePainDetails from './KneePainDetails';
import KneePainLanding from './KneePainLanding';

const KneePain = () => {
    return (
        <div>
         <KneePainLanding></KneePainLanding> 
         <KneePainDetails></KneePainDetails>
         <Review></Review>
         <Team></Team>  
        </div>
    );
};

export default KneePain;
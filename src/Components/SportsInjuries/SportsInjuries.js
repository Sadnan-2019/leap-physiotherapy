import React from 'react';
import Review from '../Review/Review';
import SportsInjuriesDetails from './SportsInjuriesDetails';
import SportsInjuriesLanding from './SportsInjuriesLanding';
import Team from '../Team/Team';


const SportsInjuries = () => {
    return (
        <div>
           <SportsInjuriesLanding></SportsInjuriesLanding> 
           <SportsInjuriesDetails></SportsInjuriesDetails>
           <Review></Review>
           <Team></Team>
           
        </div>
    );
};

export default SportsInjuries;
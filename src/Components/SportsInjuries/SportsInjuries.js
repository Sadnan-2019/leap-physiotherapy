import React from 'react';
import SportsInjuriesDetails from './SportsInjuriesDetails';
import SportsInjuriesLanding from './SportsInjuriesLanding';

const SportsInjuries = () => {
    return (
        <div>
           <SportsInjuriesLanding></SportsInjuriesLanding> 
           <SportsInjuriesDetails></SportsInjuriesDetails>
        </div>
    );
};

export default SportsInjuries;
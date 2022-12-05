import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
import BackyPainDetails from './BackyPainDetails';
import BackyPainLanding from './BackyPainLanding';

const BackyPain = () => {
    return (
        <div>
            <BackyPainLanding></BackyPainLanding>
            <BackyPainDetails></BackyPainDetails>
            <Review></Review>
            <Team></Team>
        </div>
    );
};

export default BackyPain;
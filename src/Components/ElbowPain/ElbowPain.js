import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
import ElbowPainDetails from './ElbowPainDetails';
import ElbowPainLanding from './ElbowPainLanding';

const ElbowPain = () => {
    return (
        <div>
            <ElbowPainLanding></ElbowPainLanding>
            <ElbowPainDetails></ElbowPainDetails>
            <Review></Review>
            <Team></Team>
        </div>
    );
};

export default ElbowPain;
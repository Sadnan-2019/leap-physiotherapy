import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
import ShoulderPainDetails from './ShoulderPainDetails';
import ShoulderPainLanding from './ShoulderPainLanding';

const ShoulderPain = () => {
    return (
        <div>
            <ShoulderPainLanding></ShoulderPainLanding>
            <ShoulderPainDetails></ShoulderPainDetails>
            <Review></Review>
            <Team></Team>
        </div>
    );
};

export default ShoulderPain;
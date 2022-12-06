import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
import NeckPainDetails from './NeckPainDetails';
import NeckPainLanding from './NeckPainLanding';

const NeckPain = () => {
    return (
        <div>
            <NeckPainLanding></NeckPainLanding>
            <NeckPainDetails></NeckPainDetails>
            <Review></Review>
            <Team></Team>
        </div>
    );
};

export default NeckPain;
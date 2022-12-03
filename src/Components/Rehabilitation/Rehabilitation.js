import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
import RehabilitationDetails from './RehabilitationDetails';
import RehabilitationLanding from './RehabilitationLanding';
const Rehabilitation = () => {
    return (
        <div>
            <RehabilitationLanding></RehabilitationLanding>
            <RehabilitationDetails></RehabilitationDetails>
            <Review></Review>
            <Team></Team>
        </div>
    );
};

export default Rehabilitation;
import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
import ManualTherapyDetails from './ManualTherapyDetails';
import ManualTherapyLanding from './ManualTherapyLanding';

const ManualTherapy = () => {
    return (
        <div>
            <ManualTherapyLanding></ManualTherapyLanding>
            <ManualTherapyDetails></ManualTherapyDetails>
            <Review></Review>
            <Team></Team>
        </div>
    );
};

export default ManualTherapy;
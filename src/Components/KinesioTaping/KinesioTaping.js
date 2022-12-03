import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
import KinesioTapingDetails from './KinesioTapingDetails';
import KinesioTapingLanding from './KinesioTapingLanding';

const KinesioTaping = () => {
    return (
        <div>
            <KinesioTapingLanding></KinesioTapingLanding>
            <KinesioTapingDetails></KinesioTapingDetails>
            <Review></Review>
            <Team></Team>
        </div>
    );
};

export default KinesioTaping;
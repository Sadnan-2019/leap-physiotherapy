import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
import DryneedlingAcupunctureDetails from './DryneedlingAcupunctureDetails';
import DryneedlingAcupunctureLanding from './DryneedlingAcupunctureLanding';

const DryneedlingAcupuncture = () => {
    return (
        <div>
            <DryneedlingAcupunctureLanding></DryneedlingAcupunctureLanding>
            <DryneedlingAcupunctureDetails></DryneedlingAcupunctureDetails>
            <Review></Review>
            {/* <Team></Team> */}
        </div>
    );
};

export default DryneedlingAcupuncture;
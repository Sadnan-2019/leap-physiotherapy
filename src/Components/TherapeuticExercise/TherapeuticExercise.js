import React from 'react';
import Review from '../Review/Review';
import Team from '../Team/Team';
import TherapeuticExerciseDetails from './TherapeuticExerciseDetails';
import TherapeuticExerciseLanding from './TherapeuticExerciseLanding';

const TherapeuticExercise = () => {
    return (
        <div>
            <TherapeuticExerciseLanding></TherapeuticExerciseLanding>
            <TherapeuticExerciseDetails></TherapeuticExerciseDetails>
            <Review></Review>
            <Team></Team>
        </div>
    );
};

export default TherapeuticExercise;
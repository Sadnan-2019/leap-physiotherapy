import React from 'react';
import Team from '../Team/Team';
import MeetTeamLanding from './MeetTeamLanding';
import TeamMember from './TeamMember';
// import Team from '../Team/Team';
const MeetTeam = () => {
     return (
          <div>
               <MeetTeamLanding></MeetTeamLanding>
               {/* <TeamMember></TeamMember> */}
               <Team></Team>
               
          </div>
     );
};

export default MeetTeam;
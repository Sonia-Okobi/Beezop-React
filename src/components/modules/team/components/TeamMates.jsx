import React from 'react';
import { teams } from '../../../../constant/teams';
import TeamMate from '../../../ui/organisms/teamMate/TeamMate';

export default function TeamMates() {
  return (
    <div className="team-page__team-mates app-container">
      <div className="team-page__team-mates__content app-container__section">
        {teams.map((team, index) => {
          return (
            <TeamMate
              key={index}
              background={team.background}
              name={team.name}
              role={team.role}
              twitter={team.twitter}
              linkedIn={team.linkedIn}
              about={team.about}
            />
          );
        })}
      </div>
    </div>
  );
}

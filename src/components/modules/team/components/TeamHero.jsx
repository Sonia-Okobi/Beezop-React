import React from 'react';
import '../../../pages/team/index.scss';

export default function TeamHero() {
  return (
    <div className="team-page__team-hero  hero app-container">
      <div className="team-page__team-hero__content app-container__section">
        <h1 className="hero-heading heading-sm">Meet the team</h1>
        <p className="team-description description-sm">
          Our mission is to make your business easier to run and scale. We are
          combining our skills and experience to make this happen in a simple
          and delightful way.
        </p>
      </div>
    </div>
  );
}

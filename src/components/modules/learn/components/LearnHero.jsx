import React from 'react';
import '../../../pages/learn/index.scss';

export default function LearnHero() {
  return (
    <div className="learn-page__learn-hero hero app-container">
      <div className="learn-page__learn-hero__content app-container__section">
        <h1 className="hero-heading heading-sm">
          Master the Beezop basics in 10 minutes
        </h1>
        <p className="description-sm learn-description">
          We created these short tutorial videos to show you how to perform
          tasks in Beezop.
        </p>
      </div>
    </div>
  );
}

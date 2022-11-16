import React from 'react';
import '../../../pages/home/index.scss';
import dashboard from '../../../../assets/images/dashboard.png';

export default function HomeHero() {
  return (
    <>
      <div className="home-page__home-hero hero app-container">
        <div className="app-container__section home-page__home-hero__content">
          <h1 className="hero-heading">
            Document and share your business processes easily
          </h1>
          <p className="hero-description">
            Nobody likes to read manuals. But we all love to check things off a
            list. Beezop helps you share your processes in a way you and your
            team will love. Through checklists.
          </p>
        </div>
      </div>

      <div className="app-container home-page__home-dashboard">
        <div className="app-container__section">
          <img
            className="home-page__home-hero__content__dashboard"
            src={dashboard}
            alt="Dashboard"
          />
          <div className="home-page__home-hero__content__try-free">
            <a href="/signuppage" className="base-button--primary try-button">
              Try Beezop for FREE
            </a>
            <p>**No credit card required, cancel any time**</p>
          </div>
        </div>
      </div>
    </>
  );
}

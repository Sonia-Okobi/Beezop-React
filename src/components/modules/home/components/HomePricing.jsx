import React from 'react';
import '../../../pages/home/index.scss';

export default function HomePricing() {
  return (
    <div className="home-page__home-pricing app-container" id='pricing'>
      <div className="home-page__home-pricing__content app-container__section">
        <div className="home-page__home-pricing__content__header">
          <p className="home-page__home-pricing__content__header__tag tag-btn tag">
            <span className="gradient">PRICING</span>
          </p>
          <h3 className="home-page__home-pricing__content__header__heading">
            Affordable plans to choose from
          </h3>
        </div>
        <div className="home-page__home-pricing__content__cards">
          <div className="subscription-package">
            <h3 className="subscription-package__price">₦9,900</h3>
            <p className="subscription-package__duration">per month</p>
            <p className="subscription-package__description">
              ₦99,000 annually (save ₦19,800)
            </p>
            <div className="subscription-package__offers">
                <p className="offer">Up to 20 team members</p>
                <p className="offer">1 manager account</p>
                <p className="offer">1 manager account</p>
            </div>
          </div>
          <div className="subscription-package">
          <h3 className="subscription-package__price">₦9,900</h3>
            <p className="subscription-package__duration">per month</p>
            <p className="subscription-package__description">
              ₦99,000 annually (save ₦19,800)
            </p>
            <div className="subscription-package__offers">
                <p className="offer">Up to 20 team members</p>
                <p className="offer">1 manager account</p>
                <p className="offer">1 manager account</p>
            </div>
          </div>
          <div className="subscription-package">
          <h3 className="subscription-package__price">₦9,900</h3>
            <p className="subscription-package__duration">per month</p>
            <p className="subscription-package__description">
              ₦99,000 annually (save ₦19,800)
            </p>
            <div className="subscription-package__offers">
                <p className="offer">Up to 20 team members</p>
                <p className="offer">1 manager account</p>
                <p className="offer">1 manager account</p>
            </div>
          </div>
        </div>
        <div className="home-page__home-pricing__content__button">
          <a
            href="https://calendly.com/beezop/onboarding"
            className="base-button--primary"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import '../../../pages/support/index.scss';

export default function SupportHero() {
  return (
    <div className="support-page__support-hero hero app-container">
      <div className="support-page__support-hero__content app-container__section">
        <h1 className='heading-sm hero-heading'>We are ready to help, always</h1>
        <p class="support-description description-sm">
          You can <a href="/learnpage" className='underline'>Watch tutorials</a> or
          send us a message through this form, to get detailed help:
        </p>
      </div>
    </div>
  );
}

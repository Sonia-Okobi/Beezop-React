import React from 'react';
import logo from '../../../../assets/images/logo--tablet.png';
import './index.scss';

export default function TryFree() {
  return (
      <div className="try-free app-container">
        <div className="app-container__section">
          <img src={logo} alt="logo" />
          <h3>Start using Beezop for FREE</h3>
          <a href="/signuppage" className="base-button--inverted">
            <span className="gradient">Try Beezop Now</span>
          </a>
        </div>
      </div>
  );
}

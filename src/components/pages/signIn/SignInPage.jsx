import React from 'react';
import './index.scss';
import logo from '../../../assets/svg/full-logo-white.svg';
import illustration from '../../../assets/images/signin.png';
import eye from '../../../assets/svg/eye.svg';
import unsee from '../../../assets/svg/un-see.svg';
import BaseInput from '../../ui/molecules/baseInput/BaseInput';
import BaseButton from '../../ui/atoms/baseButton/BaseButton';
import usePassword from '../../../hooks/usePassword';

export default function SignInPage() {
  const [click, toggle] = usePassword();

  return (
    <div className="signin-page">
      <div className="illustration">
        <div className="illustration__heading">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <p>
            Every time you document your processes, you make your business
            stronger, more efficient, and less stressful to run.
          </p>
        </div>
        <img
          src={illustration}
          alt="Illustation"
          className="side-illustration"
        />
      </div>
      <div className="signin-page__logo">
        <a href="/">
          <svg
            width="32"
            height="35"
            viewBox="0 0 32 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.96053 0C4.96413 0 3.96801 0.000296444 2.9716 0H2.8392C1.95788 0.00148222 1.3854 0.0358712 0.692849 0.764827C0.145031 1.34082 0.00293579 1.98677 0 3.07828V3.13074V30.5915V30.6381V32.1606C0.0182019 32.6189 0.0704621 33.044 0.201398 33.3888C0.460922 34.0703 1.03046 34.6371 1.78379 34.8568C2.60962 35.0975 6.52009 34.962 7.75166 34.962C7.75166 23.797 13.6138 11.4321 26.0974 11.4146C26.6555 11.4134 26.9911 11.4804 27.5829 11.4804V11.5456C26.7174 11.5456 24.8603 12.108 24.0206 12.4492C14.681 16.2466 11.3046 25.533 11.3046 34.962C13.4791 34.962 15.6542 34.962 17.8288 34.962C20.5074 34.962 23.1334 35.2066 25.3949 34.3834C26.3728 34.0273 27.7861 33.2738 28.5039 32.5656C29.2669 31.8135 29.2933 31.9095 30.0657 30.8815C30.7665 29.9485 30.7979 29.6391 31.2644 28.7468C31.3167 28.5517 31.42 28.3267 31.4987 28.089C32.4455 25.2235 32.018 21.9911 30.4253 19.568C29.532 18.2094 28.958 17.8996 28.6803 17.4813C28.9671 17.0488 29.675 16.6184 30.6191 15.0653C30.7031 14.9271 30.807 14.7267 30.8733 14.6085C31.2471 13.9403 31.6895 12.6107 31.8286 11.8545C32.1266 10.2356 32.0597 8.25478 31.4394 6.67236C30.6082 4.55101 29.5484 2.99557 27.5952 1.68321C25.886 0.535082 24.3157 0.128064 22.6446 0.000296733H17.6441C13.7492 0.000296733 9.85456 0.000296733 5.95995 0.000296733L5.96053 0Z"
              fill="url(#paint0_linear)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="3.86467"
                y1="28.9898"
                x2="28.3564"
                y2="6.24718"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0977DE"></stop>
                <stop offset="0.639216" stop-color="#0590E5"></stop>
                <stop offset="1" stop-color="#01AAED"></stop>
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
      <div className="auth">
        <div className="auth__form">
          <div className="auth__form__heading">
            <h3 className="auth__form__heading__title">Sign in</h3>
            <p className="auth__form__heading__description">
              Welcome back to Beezop
            </p>
          </div>
          <form>
            <BaseInput
              type="email"
              name="emailAddress"
              label="Email address"
              className="signin-input"
            />
            <div className="password-text">
              {click ? (
                <BaseInput
                  type="text"
                  name="password"
                  label="Password"
                  className="signin-input"
                />
              ) : (
                <BaseInput
                  type="password"
                  name="password"
                  label="Password"
                  className="signin-input"
                />
              )}

              <button type="button" onClick={toggle} className="eye">
                {click ? <img src={unsee} alt="" /> : <img src={eye} alt="" />}
              </button>
            </div>
            <a className="password" href="/forgetpasswordpage">
              Forgot Password?
            </a>
            <BaseButton className="signin-button">
              SIGN IN TO YOUR ACCOUNT
            </BaseButton>
            <p className="base-text">
              Not yet on Beezop?{' '}
              <a className="underline" href="/signuppage">
                Create an account now
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

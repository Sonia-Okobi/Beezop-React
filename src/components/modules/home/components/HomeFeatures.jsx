import React, { useEffect, useRef, useState } from 'react';
import phone from '../../../../assets/svg/app.svg';
import '../../../pages/home/index.scss';

export default function HomeFeatures() {
  const [prevButtonDisable, setPrevButtonDisable] = useState(false);
  const sliderRef = useRef();

  const goToNext = () => {
    sliderRef.current.scrollTo(sliderRef.current.scrollLeft + 350, 0);
    checkDisabled();
  };

  const goToPrev = () => {
    sliderRef.current.scrollTo(sliderRef.current.scrollLeft - 350, 0);
    checkDisabled();
  };

  const checkDisabled = () => {
    setTimeout(() => {
      console.log(sliderRef.current.scrollLeft);
      if (sliderRef.current.scrollLeft <= 0) setPrevButtonDisable(true);
      else setPrevButtonDisable(false);
    }, [500]);
  };

  useEffect(() => {
    checkDisabled();
  }, []);

  return (
    <div className="home-page__home-features app-container" id="features">
      <div className="home-page__home-features__content app-container__section">
        <div className="home-page__home-features__content__phone">
          <img src={phone} alt="Phone" />
        </div>
        <div className="home-page__home-features__content__slider-wrapper">
          <div className="home-page__home-features__content__slider-wrapper__header">
            <div className="text">
              <p className="tag tag-btn">
                <span className="gradient">FEATURES</span>
              </p>
              <p className="text__title">5 reasons you’ll love Beezop</p>
            </div>
            <div className="controls">
              <button
                className="slider-left"
                onClick={goToPrev}
                disabled={prevButtonDisable}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.9375 1.09375C5.625 1.40625 5.65625 1.875 5.9375 2.1875L9.71875 5.75H0.75C0.3125 5.75 0 6.09375 0 6.5V7.5C0 7.9375 0.3125 8.25 0.75 8.25H9.71875L5.9375 11.8438C5.65625 12.1562 5.65625 12.625 5.9375 12.9375L6.625 13.625C6.9375 13.9062 7.40625 13.9062 7.6875 13.625L13.7812 7.53125C14.0625 7.25 14.0625 6.78125 13.7812 6.46875L7.6875 0.40625C7.40625 0.125 6.9375 0.125 6.625 0.40625L5.9375 1.09375Z"
                    fill="#232340"
                  ></path>
                </svg>
              </button>
              <button className="slider-right" onClick={goToNext}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.9375 1.09375C5.625 1.40625 5.65625 1.875 5.9375 2.1875L9.71875 5.75H0.75C0.3125 5.75 0 6.09375 0 6.5V7.5C0 7.9375 0.3125 8.25 0.75 8.25H9.71875L5.9375 11.8438C5.65625 12.1562 5.65625 12.625 5.9375 12.9375L6.625 13.625C6.9375 13.9062 7.40625 13.9062 7.6875 13.625L13.7812 7.53125C14.0625 7.25 14.0625 6.78125 13.7812 6.46875L7.6875 0.40625C7.40625 0.125 6.9375 0.125 6.625 0.40625L5.9375 1.09375Z"
                    fill="#232340"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="home-page__home-features__content__slider-wrapper__slider"
            ref={sliderRef}
          >
            <div className="slider-item">
              <div className="slider-item__content">
                <p className="index">1</p>
                <p className="title">
                  Processes that people will actually follow
                </p>
                <p className="description">
                  No more bulky documents. Transform processes into checklists
                  that can be followed step-by-step.
                </p>
              </div>
            </div>

            <div className="slider-item">
              <div className="slider-item__content">
                <p className="index">2</p>
                <p className="title">Onboard and train new employees faster</p>
                <p className="description">
                  With your processes easier to digest and follow, new employees
                  can start adding value right away.
                </p>
              </div>
            </div>

            <div className="slider-item">
              <div className="slider-item__content">
                <p className="index">3</p>
                <p className="title">
                  Get more time to focus on work that matters
                </p>
                <p className="description">
                  Spend less time explaining how things are done. Your processes
                  are accessible to your team anytime, anywhere.
                </p>
              </div>
            </div>

            <div className="slider-item">
              <div className="slider-item__content">
                <p className="index">4</p>
                <p className="title">Run your business with peace of mind</p>
                <p className="description">
                  With your processes on Beezop, work no longer gets scattered
                  when a team member leaves or goes on vacation.
                </p>
              </div>
            </div>

            <div className="slider-item">
              <div className="slider-item__content">
                <p className="index">5</p>
                <p className="title">Achieve mastery in minutes, not hours</p>
                <p className="description">
                  Beezop is easy to learn and use. And with our mobile-friendly
                  interface, you can create and share processes on the go.
                </p>
              </div>
            </div>

            <div className="slider-item fake">
              <div className="slider-item__content">
                <p className="index">5</p>
                <p className="title">Achieve mastery in minutes, not hours</p>
                <p className="description">
                  Beezop is easy to learn and use. And with our mobile-friendly
                  interface, you can create and share processes on the go.
                </p>
              </div>
            </div>

            <div className="slider-item fake">
              <div className="slider-item__content">
                <p className="index">5</p>
                <p className="title">Achieve mastery in minutes, not hours</p>
                <p className="description">
                  Beezop is easy to learn and use. And with our mobile-friendly
                  interface, you can create and share processes on the go.
                </p>
              </div>
            </div>
          </div>
          <div className="home-page__home-features__content__slider-wrapper__button">
            <a
              href="https://calendly.com/beezop/onboarding"
              className="base-button--primary"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

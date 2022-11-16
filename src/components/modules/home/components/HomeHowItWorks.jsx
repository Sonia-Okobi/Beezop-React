import React from 'react';
import '../../../pages/home/index.scss';
import play from '../../../../assets/svg/icon-play--big.svg';
import useModal from '../../../../hooks/useModal';
import VideoModal from '../../../ui/organisms/videoModal/VideoModal';

export default function HomeHowItWorks() {
    const url = 'https://www.youtube.com/embed/li2NjoMXll8';
    const [modalVisible, openModal, closeModal] = useModal();
  return (
    <>
      <div className="home-page__home-how-it-works app-container" id='howitworks'>
        <div className="app-container__section home-page__home-how-it-works__content">
          <p className="tag home-tag">HOW IT WORKS</p>
          <p className="heading">See for yourself</p>
        </div>
      </div>
      <div className={`home-page__home-how-it-works__content__thumbnail app-container ${modalVisible ? openModal : closeModal}`}>
        <div className="app-container__section">
          <div className="home-page__home-how-it-works__content__thumbnail__text">
            <button onClick={openModal}>
              <img src={play} alt="Play Icon" />
            </button>
            <p>
              This 2-minute video shows you how Beezop works in a business. Can
              you relate?
            </p>
          </div>
        </div>
      </div>
      <VideoModal close={closeModal} open={modalVisible} url={url}/>
    </>
  );
}

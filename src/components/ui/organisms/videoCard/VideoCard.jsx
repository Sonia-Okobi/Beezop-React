import './index.scss';
import play from '../../../../assets/svg/icon-play--big.svg';
import VideoModal from '../videoModal/VideoModal';
import useModal from '../../../../hooks/useModal';

export default function VideoCard({ description, url }) {
  const [modalVisible, openModal, closeModal] = useModal();
  return (
    <>
      <div className={`video-card ${modalVisible ? openModal : closeModal}`}>
        <div className="video-card__thumbnail">
          <button
            onClick={openModal}
            className="video-card__thumbnail__play-btn"
          >
            <img src={play} alt="Play Button" />
          </button>
        </div>
        <p className="video-card__title">{description}</p>
        <button onClick={openModal} className="play-btn">
          <span className="gradient">Play Video</span>
        </button>
      </div>
      <VideoModal open={modalVisible} close={closeModal} url={url} />
    </>
  );
}

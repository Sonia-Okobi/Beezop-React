import React from 'react';
import './index.scss';

export default function VideoModal({close, open, url}) {
    if (!open) return null;
  return (
    <div className="video-modal">
      <div className="video-modal__content">
        <div className="video-modal__content__header">
          <p>Beezop makes business easier</p>
          <button onClick={close} className="close-btn">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15"
                cy="15"
                r="14.5"
                fill="white"
                stroke="#1d114633"
              ></circle>
              <path
                d="M18.3337 11.6667L11.667 18.3334M11.667 11.6667L18.3337 18.3334"
                stroke="#232340"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="video-modal__content__video">
            <iframe src={url} frameborder="0" title='video-elt'></iframe>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import '../../../pages/learn/index.scss';
import {videos} from '../../../../constant/videos'
import VideoCard from '../../../ui/organisms/videoCard/VideoCard';

export default function LearnVideos() {
  return (
    <div className='learn-page__learn-videos app-container'>
        <div className="learn-page__learn-videos__content app-container__section">
            {videos.map((video, index) => {
                return(
                    <VideoCard key={index} description={video.description} url={video.url}/>
                )
            })}
        </div>
    </div>
  )
}

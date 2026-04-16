'use client';
import { useRef } from 'react';
import useVideoAutoPause from '@/hooks/useVideoAutoPause';
import NativePlyr from '../NativePlyr';
import VideoWrapper from './VideoWrapper';

export default function VideoPanel({ videos, layout, category }) {
  const videoRefs = useRef([]);
  useVideoAutoPause(videoRefs);

  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex && video && !video.paused) {
        video.pause();
      }
    });
  };

  if (layout === 'portrait') {
    return (
      <div className="w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 mx-4 lg:mx-[10dvw] xl:mx-[16dvw] relative overflow-hidden">
          {videos.map((video, index) => (
            <div key={index} className="video-wrapper lg:w-[17dvw] xl:w-[15dvw] mt-4 lg:mt-[8dvh]">
              <VideoWrapper>
                <NativePlyr
                  src={video.src}
                  thumbnail={video.thumbnail}
                  onPlay={() => handlePlay(index)}
                  forwardRef={(el) => (videoRefs.current[index] = el)}
                  ariaLabel="Video showcase by Ahmed Digital"
                  title="Professional video by Ahmed Digital"
                />
              </VideoWrapper>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[5dvh] mx-[10dvw]">
          {videos.map((video, index) => (
            <div key={index} className="video-wrapper lg:w-[25dvw] xl:w-[30dvw]">
              <VideoWrapper>
                <NativePlyr
                  src={video.src}
                  thumbnail={video.thumbnail}
                  onPlay={() => handlePlay(index)}
                  forwardRef={(el) => (videoRefs.current[index] = el)}
                  ariaLabel="Video showcase by Ahmed Digital"
                  title="Professional video by Ahmed Digital"
                />
              </VideoWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

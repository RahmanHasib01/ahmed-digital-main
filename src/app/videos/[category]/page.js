'use client';

import { useEffect, useState, useRef, use } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import NativePlyr from '@/components/client/NativePlyr';
import VideoWrapper from '@/components/client/VideosComponent/VideoWrapper';
import useVideoAutoPause from '@/hooks/useVideoAutoPause';

export default function CategoryPage({ params }) {
  const { category } = use(params);
  const slug = decodeURIComponent(category);
  const [videos, setVideos] = useState(null);
  const [layout, setLayout] = useState('landscape');
  const videoRefs = useRef([]);

  useVideoAutoPause(videoRefs);

  useEffect(() => {
    fetch('/api/videos')
      .then((r) => r.json())
      .then((data) => {
        if (data[slug]) {
          setVideos(data[slug].videos);
          setLayout(data[slug].layout);
        }
      });
  }, [slug]);

  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex && video && !video.paused) {
        video.pause();
      }
    });
  };

  if (!videos) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <p className="text-white/50 font-poppins">Loading...</p>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-4">
        <p className="text-white/50 font-poppins">No videos in this category yet.</p>
        <Link href="/" className="text-[#7e56dc] font-poppins hover:underline">Go back</Link>
      </div>
    );
  }

  const isPortrait = layout === 'portrait';

  return (
    <div className="min-h-screen bg-[#050505] pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-poppins text-sm mb-6"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1
          className="text-white font-poppins font-bold capitalize"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          {slug}
        </h1>
        <p className="text-white/40 font-poppins text-sm mt-2">
          {videos.length} video{videos.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Videos grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          className={
            isPortrait
              ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6'
              : 'grid grid-cols-1 md:grid-cols-2 gap-6'
          }
        >
          {videos.map((video, index) => (
            <div key={index}>
              <VideoWrapper>
                <NativePlyr
                  src={video.src}
                  thumbnail={video.thumbnail}
                  onPlay={() => handlePlay(index)}
                  forwardRef={(el) => (videoRefs.current[index] = el)}
                  ariaLabel={`${slug} video by Ahmed Digital`}
                  title={`${slug} video by Ahmed Digital`}
                />
              </VideoWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

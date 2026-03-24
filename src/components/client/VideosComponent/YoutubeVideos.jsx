'use client';

import { useRef } from "react";
import useVideoAutoPause from "@/hooks/useVideoAutoPause";
import NativePlyr from "../NativePlyr";
import VideoWrapper from "./VideoWrapper";

const YoutubeVideos = () => {
    const videos = [
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002196/AD%20Videos/youtube/youtube-cafe-review-food_ja84ob.mp4",
            thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535277/PartyVlog_fzzrlu.jpg"
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002204/AD%20Videos/youtube/youtube-travel-vlog-canada-highlights_tijxcy.mp4",
            thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535282/TourVlog_jbffsh.jpg"
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002220/AD%20Videos/youtube/youtube-travel-vlog-usa-toronto-washingtonhighlights_mymxdw.mp4",
            thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535280/SeaBeach_ymakdn.jpg"
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002212/AD%20Videos/youtube/youtube-travel-vlog-picnic-toronto-canada-highlights_silklq.mp4",
            thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535281/PicnicDay_xxz4yp.jpg"
        }
    ];


    const videoRefs = useRef([]);
    useVideoAutoPause(videoRefs);

    const handlePlay = (currentIndex) => {
        videoRefs.current.forEach((video, index) => {
            if (index !== currentIndex && video && !video.paused) {
                video.pause();
            }
        });
    };

    const videoSchema = (src) => ({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "YouTube Videos for Clients",
        "description": "This is a featured video edited by Ahmed Digital.",
        // "thumbnailUrl": "https://ahmeddigital.com/default-thumbnail.jpg",
        "uploadDate": "2025-08-01",
        "contentUrl": `https://ahmeddigital.com${src}`,
        "publisher": {
            "@type": "Organization",
            "name": "Ahmed Digital",
            "logo": {
                "@type": "ImageObject",
                "url": 'https://ahmeddigital.com/photos/AHMED.png'
            }
        }
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(videos.map(videoSchema)),
                }}
            />
            <div className="w-full flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-[10dvw] mt-[5dvh]">
                    {videos.map((video, index) => (
                        <div key={index} className="video-wrapper lg:w-[25dvw] xl:w-[30dvw]">
                            <VideoWrapper>
                                <NativePlyr
                                    src={video.src}
                                    thumbnail={video.thumbnail}
                                    onPlay={() => handlePlay(index)}
                                    forwardRef={(el) => (videoRefs.current[index] = el)}
                                    ariaLabel="YouTube video editing showcase by Ahmed Digital"
                                    title="Professional YouTube video editing by Ahmed Digital"
                                />
                            </VideoWrapper>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default YoutubeVideos;

'use client'
import { useRef } from "react";
import useVideoAutoPause from "@/hooks/useVideoAutoPause";
import NativePlyr from "../NativePlyr";
import VideoWrapper from "./VideoWrapper";

const AdsVideos = () => {
    const videos = [
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002212/AD%20Videos/ads/best-podcast-video-trailer_ptbqx6.mp4",
            thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535244/Podcast_Studio_Promo_Video_gvhkg2.jpg"
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002156/AD%20Videos/ads/Orthodontic-video-sales-letter_h0fwdt.mp4",
            thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535229/Dentist_Clinic_Advertisements_llzllv.jpg"
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002161/AD%20Videos/ads/real-estate-vide-sales-letter_kkxil2.mp4",
            thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535244/Informative_Content_r1ywns.jpg"
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002155/AD%20Videos/ads/grocery-ugc-online-video-sales-letter_dshvav.mp4",
            thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535248/Vegmove_Marketing_Video_xjl70b.jpg"
        }
    ];


    const videoRefs = useRef([]);

    useVideoAutoPause(videoRefs);

    // ✅ Play only one video at a time
    const handlePlay = (currentIndex) => {
        videoRefs.current.forEach((video, index) => {
            if (index !== currentIndex && video && !video.paused) {
                video.pause();
            }
        });
    };

    return (
        <div className="w-full  flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[5dvh] mx-[10dvw]">
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
    );
};

export default AdsVideos;

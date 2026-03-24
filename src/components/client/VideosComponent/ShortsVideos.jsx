'use client'
import { useRef } from "react";
import useVideoAutoPause from "@/hooks/useVideoAutoPause";
import NativePlyr from "../NativePlyr";
import VideoWrapper from "./VideoWrapper";

const ShortVideos = () => {
const videos = [
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002217/AD%20Videos/shorts/shortform-instagram-reels-fitness-tips_hgryrg.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535287/Reel_With_Music.mp4.00_00_26_12.Still001_hbplkz.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002180/AD%20Videos/shorts/shortform-facebook-quick-tutorial-language-course_unvbni.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535266/5_Similar_Russian_English_Words_BQ_mdrssb.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002181/AD%20Videos/shorts/Reel_3_1_qxztbc.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535269/Reel_3_1.mp4.00_00_00_00.Still001_bc2wss.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002181/AD%20Videos/shorts/shortform-tiktok-commercial-ad-2025_rtdbcd.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535271/ROGO_Sept_Intake.mp4.00_00_04_28.Still001_anx4u8.jpg"
    }
];


    const videoRefs = useRef([]);

    // ✅ Custom Hook for auto-pause when out of view
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
        <div className="w-full h-[100dvh] ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mx-[3dvw] lg:mx-[10dvw] xl:mx-[16dvw] relative overflow-hidden">
                {videos.map((video, index) => (
                    <div key={index} className="video-wrapper lg:w-[17dvw] xl:w-[15dvw] mt-[8dvh]">
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

export default ShortVideos;

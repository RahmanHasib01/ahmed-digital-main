'use client'
import { useRef } from "react";
import useVideoAutoPause from "@/hooks/useVideoAutoPause";
import NativePlyr from "../NativePlyr";
import VideoWrapper from "./VideoWrapper";

const MotionVideos = () => {
const videos = [
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002167/AD%20Videos/motion/motiongraphics-animated-logo-intro_gnkw3v.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535264/Logo_Reveal_Final_4k.mp4.00_00_10_33.Still001_iklava.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002168/AD%20Videos/motion/motiongraphics-explainer-video-product-promo_m7b5xm.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535265/Welcome_Viola_Final.mp4.00_00_03_43.Still001_xwiabf.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002170/AD%20Videos/motion/motiongraphics-infographic-data-visual_mqf6rd.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535262/Early_Bird_Final_corrected.mp4.00_00_02_43.Still001_wotbd7.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002174/AD%20Videos/motion/motiongraphics-wedding-invitation-animation_xhihul.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002174/AD%20Videos/motion/motiongraphics-wedding-invitation-animation_xhihul.mp4"
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
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:mx-[10dvw] xl:mx-[14dvw] relative overflow-hidden">
                {videos.map((video, index) => (
                    <div key={index} className="video-wrapper w-[45dvw] lg:w-[18dvw] xl:w-[17dvw] mt-[5dvh] lg:mt-[15dvh] mx-auto">
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

export default MotionVideos;

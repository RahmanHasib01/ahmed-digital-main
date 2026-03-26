'use client'
import { useRef } from "react";
import useVideoAutoPause from "@/hooks/useVideoAutoPause";
import NativePlyr from "../NativePlyr";
import VideoWrapper from "./VideoWrapper";

const OtherVideos = () => {
const videos = [
    // 1 from Motion
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002167/AD%20Videos/motion/motiongraphics-animated-logo-intro_gnkw3v.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535264/Logo_Reveal_Final_4k.mp4.00_00_10_33.Still001_iklava.jpg"
    },
    // 1 from Edu
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002163/AD%20Videos/edu/Educational-labguage-Course-lesson-1_j9erpc.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535248/Learning_Content_02_ybrklp.jpg"
    },
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

    return (
        <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[5dvh] mx-[10dvw]">
                {videos.map((video, index) => (
                    <div key={index} className="video-wrapper lg:w-[25dvw] xl:w-[30dvw]">
                        <VideoWrapper>
                            <NativePlyr
                                src={video.src}
                                thumbnail={video.thumbnail}
                                onPlay={() => handlePlay(index)}
                                forwardRef={(el) => (videoRefs.current[index] = el)}
                                ariaLabel="Video editing showcase by Ahmed Digital"
                                title="Professional video editing by Ahmed Digital"
                            />
                        </VideoWrapper>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherVideos;

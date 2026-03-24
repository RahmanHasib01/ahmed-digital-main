'use client'
import { useRef } from "react";
import useVideoAutoPause from "@/hooks/useVideoAutoPause";
import NativePlyr from "../NativePlyr";
import VideoWrapper from "./VideoWrapper";

const EduVideos = () => {
const videos = [ 
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002163/AD%20Videos/edu/Educational-labguage-Course-lesson-1_j9erpc.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535248/Learning_Content_02_ybrklp.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002159/AD%20Videos/edu/Educational-labguage-Course-lesson-3_dacnrh.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535246/Learning_Content_01_qcwlqf.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002162/AD%20Videos/edu/Educational-labguage-Course-lesson-4_ikk5yw.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535250/Learning_Content_03_ayuael.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002157/AD%20Videos/edu/Educational-labguage-Course-lesson-2_kooupo.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535253/Learning_Content_04_nmq1wv.jpg"
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

export default EduVideos;



'use client'
import { useRef } from "react";
import useVideoAutoPause from "@/hooks/useVideoAutoPause";
import NativePlyr from "../NativePlyr";
import VideoWrapper from "./VideoWrapper";

const ShortFormVideos = () => {
    const videos = [
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/q_auto/f_auto/v1776330448/Vid_2_Satlas_e0n7t3.mp4",
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/q_auto/f_auto/v1776330433/Video_3_Qclee_thw3bc.mp4",
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/q_auto/f_auto/v1776330433/Video_1_Tiny_Fish_djesfg.mp4",
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/q_auto/f_auto/v1776330450/Video_4_Khaos_muzymj.mp4",
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

    return (
        <div className="w-full h-[100dvh] ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mx-[3dvw] lg:mx-[10dvw] xl:mx-[16dvw] relative overflow-hidden">
                {videos.map((video, index) => (
                    <div key={index} className="video-wrapper lg:w-[17dvw] xl:w-[15dvw] mt-[8dvh]">
                        <VideoWrapper>
                            <NativePlyr
                                src={video.src}
                                onPlay={() => handlePlay(index)}
                                forwardRef={(el) => (videoRefs.current[index] = el)}
                                ariaLabel="Short form video showcase by Ahmed Digital"
                                title="Professional short form video by Ahmed Digital"
                            />
                        </VideoWrapper>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShortFormVideos;

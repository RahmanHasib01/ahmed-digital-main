'use client'
import { useRef } from "react";
import useVideoAutoPause from "@/hooks/useVideoAutoPause";
import NativePlyr from "../NativePlyr";
import VideoWrapper from "./VideoWrapper";

const BusinessPromoVideos = () => {
    const videos = [
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/q_auto/f_auto/v1776329530/Video_1_Manuele_Dental_nb7lnm.mp4",
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/q_auto/f_auto/v1776329520/Video_2_Lederman_gxag8u.mp4",
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/q_auto/f_auto/v1776329534/Video_3_Flow_mpx3sh.mp4",
        },
        {
            src: "https://res.cloudinary.com/dyoeyaaej/video/upload/q_auto/f_auto/v1776329520/Video_4_Hennessy_debfjx.mp4",
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
        <div className="w-full  flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[5dvh] mx-[10dvw]">
                {videos.map((video, index) => (
                    <div key={index} className="video-wrapper lg:w-[25dvw] xl:w-[30dvw]">
                        <VideoWrapper>
                            <NativePlyr
                                src={video.src}
                                onPlay={() => handlePlay(index)}
                                forwardRef={(el) => (videoRefs.current[index] = el)}
                                ariaLabel="Business promo video showcase by Ahmed Digital"
                                title="Professional business promo video by Ahmed Digital"
                            />
                        </VideoWrapper>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusinessPromoVideos;

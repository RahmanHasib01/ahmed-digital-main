'use client'
import { useRef } from "react";
import useVideoAutoPause from "@/hooks/useVideoAutoPause";
import NativePlyr from "../NativePlyr";
import VideoWrapper from "./VideoWrapper";

const EventsVideos = () => {
const videos = [
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002257/AD%20Videos/events/event-marathon-run-2025-highlights_dsfzot.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535258/Marathon_Event_Video_rn7knn.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002235/AD%20Videos/events/event-get-together-run-2025-highlights_vfooqx.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535256/Get_Together_Party_Video_wzpink.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002214/AD%20Videos/events/event-startup-conference-2025-keynote_kaoyvd.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535254/Corporate_Event_Video_ou1f5u.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002214/AD%20Videos/events/event-startup-conference-2025-keynote_kaoyvd.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535260/Mohanaagar_Maratthon_Event_yme0ef.jpg"
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

export default EventsVideos;



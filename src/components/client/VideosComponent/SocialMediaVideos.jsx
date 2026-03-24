'use client'
import { useRef } from "react";
import useVideoAutoPause from "@/hooks/useVideoAutoPause";
import NativePlyr from "../NativePlyr";
import VideoWrapper from "./VideoWrapper";

const SocialMediaVideos = () => {
const videos = [
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002222/AD%20Videos/socials/socialmedia-linkedin-article-video-networkingtips_qxznoj.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535273/21st_Corrected_3.mp4.00_00_04_03.Still001_fnteoh.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002207/AD%20Videos/socials/socialmedia-instagram-story-fall-fashion_v0rvae.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535274/TGPARRAGA_Final_1.mp4.00_00_00_00.Still001_wxifjw.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002188/AD%20Videos/socials/funny-clip-editing-socialmedia-instagram-story_fau2x1.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535272/oardefault_phxvrl.jpg"
    },
    {
        src: "https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002187/AD%20Videos/socials/orthodontics-dental-socialmedia-instagram-story_pwqjpo.mp4",
        thumbnail: "https://res.cloudinary.com/dyoeyaaej/image/upload/v1756535278/Video_1_Revised_2.mp4.00_00_14_26.Still001_uq4ntb.jpg"
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
        <div className="w-full h-[110dvh]">
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 mt-[5dvh] lg:mt-[15dvh] mx-[5dvw] lg:mx-[12dvw] xl:mx-[14dvw] relative overflow-hidden ">

                {videos.map((video, index) => (
                    <div key={index} className="videowrapper w-[40dvw] lg:w-[16dvw] h-auto relative overflow-hidden rounded-xl my-[5dvh] lg:my-auto mx-auto">
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

export default SocialMediaVideos;

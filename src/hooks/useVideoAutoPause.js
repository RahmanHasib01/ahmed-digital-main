'use client'
import { useEffect } from "react";

const useVideoAutoPause = (videoRefs) => {
    useEffect(() => {
        // Snapshot the array so cleanup uses the same nodes that were observed
        const videos = videoRefs.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if (!entry.isIntersecting && !video.paused) {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        videos.forEach((video) => {
            if (video) observer.observe(video);
        });

        return () => {
            videos.forEach((video) => {
                if (video) observer.unobserve(video);
            });
        };
    }, [videoRefs]);

};

export default useVideoAutoPause;

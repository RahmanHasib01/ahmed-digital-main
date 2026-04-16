'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Fullscreen, Minimize, Volume2, VolumeX } from 'lucide-react';

export default function VideoWrapper({ children }) {
    const wrapperRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isFs, setIsFs] = useState(false);

    const getVideo = () => wrapperRef.current?.querySelector('video');

    const toggleMute = useCallback(() => {
        const v = getVideo();
        if (!v) return;
        v.muted = !v.muted;
        setIsMuted(v.muted);
    }, []);

    const enterFullscreen = useCallback(() => {
        // Fullscreen the Plyr container so controls stay visible
        const plyrContainer = wrapperRef.current?.querySelector('.plyr');
        const target = plyrContainer || getVideo();
        if (!target) return;
        if (target.requestFullscreen) target.requestFullscreen();
        else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
    }, []);

    const exitFullscreen = useCallback(() => {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }, []);

    useEffect(() => {
        const onChange = () => setIsFs(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', onChange);
        return () => document.removeEventListener('fullscreenchange', onChange);
    }, []);

    return (
        <div ref={wrapperRef} className="relative rounded-lg overflow-hidden">
            {children}

            {/* Controls */}
            <div className="mt-1 flex justify-center gap-1">
                <button
                    onClick={toggleMute}
                    className="p-1.5 lg:px-[1.5dvw] lg:py-[0.3dvw] bg-gray25 text-white rounded hover:bg-tertiary transition flex items-center justify-center"
                >
                    {isMuted ? <VolumeX size={12} strokeWidth={1.5} /> : <Volume2 size={12} strokeWidth={1.5} />}
                </button>
                <button
                    onClick={isFs ? exitFullscreen : enterFullscreen}
                    className="p-1.5 lg:px-[1.5dvw] lg:py-[0.3dvw] bg-gray25 text-white rounded hover:bg-tertiary transition flex items-center justify-center"
                >
                    {isFs ? <Minimize size={12} strokeWidth={1.5} /> : <Fullscreen size={12} strokeWidth={1.5} />}
                </button>
            </div>
        </div>
    );
}

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

    const btnClass =
        'px-[1.5dvw] py-[0.3dvw] text-[1dvw] bg-gray25 text-white rounded hover:bg-tertiary transition flex gap-2 items-center';

    return (
        <div ref={wrapperRef} className="relative rounded-lg overflow-hidden">
            {children}

            {/* Controls (desktop only) */}
            <div className="hidden lg:block">
                <div className="mt-2 text-center flex justify-center gap-2">
                    <button onClick={toggleMute} className={btnClass}>
                        {isMuted ? <VolumeX size={16} strokeWidth={1.5} /> : <Volume2 size={16} strokeWidth={1.5} />}
                    </button>
                    {!isFs ? (
                        <button onClick={enterFullscreen} className={btnClass}>
                            <Fullscreen size={16} strokeWidth={1.5} />
                        </button>
                    ) : (
                        <button onClick={exitFullscreen} className={btnClass}>
                            <Minimize size={16} strokeWidth={1.5} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

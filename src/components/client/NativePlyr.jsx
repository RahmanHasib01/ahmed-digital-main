'use client';

import { useEffect, useRef, useState } from 'react';
import 'plyr/dist/plyr.css';

export default function NativePlyr({ src, onPlay, forwardRef, thumbnail, ariaLabel, title }) {
    const internalRef = useRef(null);
    const playerRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);

    // Lazy load video when visible
    useEffect(() => {
        if (!internalRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.25 }
        );

        observer.observe(internalRef.current);

        return () => observer.disconnect();
    }, []);

    // Initialize Plyr
    useEffect(() => {
        if (!shouldLoad || !internalRef.current) return;

        const isMobile = window.matchMedia('(max-width: 640px)').matches;

        import('plyr').then((module) => {
            const Plyr = module.default;

            playerRef.current = new Plyr(internalRef.current, {
                fullscreen: { enabled: isMobile },
                controls: ['play', 'progress', 'volume'], // desired controls
            });

            // Wait until container exists
            const container = playerRef.current?.elements?.container;
            if (container) {
                // Hide controls initially
                container.classList.add('plyr--hidden-controls');

                // Show controls after first play
                internalRef.current?.addEventListener('play', () => {
                    container?.classList.remove('plyr--hidden-controls');
                });
            }

            return () => playerRef.current.destroy();
        });

        if (forwardRef) forwardRef(internalRef.current);
    }, [shouldLoad, forwardRef]);

    return (
        <div className="relative w-full h-auto">
            <video
                ref={internalRef}
                className="w-full h-auto rounded-lg"
                playsInline
                onPlay={(e) => {
                    if (onPlay) onPlay(e);
                    setShowPlayButton(false); // ✅ Hide play button whenever video starts playing
                }}
                aria-label={ariaLabel}
                title={title}
                preload={shouldLoad ? 'auto' : 'none'}
                poster={thumbnail}
            >
                {shouldLoad && <source src={src} type="video/mp4" />}
            </video>

            {showPlayButton && (
                <button
                    onClick={() => {
                        internalRef.current?.play();
                    }}
                    className="absolute inset-0 m-auto lg:w-[4dvw] w-[14dvw] lg:h-[3dvw] h-[4.25dvh] bg-[#4335de] rounded-full flex items-center justify-center z-10 text-black text-[6dvw] lg:text-[1.5dvw]"
                >
                    ▶
                </button>
            )}
        </div>
    );
}

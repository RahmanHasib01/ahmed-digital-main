'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { Fullscreen } from 'lucide-react';

export default function VideoWrapper({ children }) {
    const wrapperRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const backdropRef = useRef(null);

    const enterFullscreen = () => {
        const el = wrapperRef.current;
        const rect = el.getBoundingClientRect();
        const videoEl = el.querySelector('video');
        const videoRect = videoEl?.getBoundingClientRect();
        const isReel = videoRect && videoRect.height > videoRect.width;
        // Set initial state (absolute in flow)
        gsap.set(el, {
            position: 'fixed',
            top: rect.top + window.scrollY + rect.height / 2,
            left: rect.left + rect.width / 2,
            xPercent: -50,
            yPercent: -50,
            scale: 1,
            zIndex: 99999,
        });

        // Animate to fullscreen center with scale
        gsap.to(el, {
            // top: '50%',
            top: () => scrollY + window.innerHeight / 2,
            left: '50%',
            scale: isReel ? 0.5 : 1.25,
            // duration: 0.3,
            ease: 'power2.out',
            zIndex: 99999,
        });

        gsap.to(backdropRef.current, {
            opacity: 1,
            display: 'block',
            duration: 0.3,
        });

        setIsFullscreen(true);
    };

    const exitFullscreen = () => {
        const el = wrapperRef.current;

        gsap.to(el, {
            scale: 1,
            top: 0,
            left: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.set(el, {
                    clearProps: 'all',
                });
            },
        });

        gsap.to(backdropRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                backdropRef.current.style.display = 'none';
            },
        });

        setIsFullscreen(false);
    };

    // ESC key handler
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape' && isFullscreen) {
                exitFullscreen();
            }
        };

        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isFullscreen]);

    return (
        <>
            {/* Backdrop */}
            <div
                ref={backdropRef}
                className="fixed inset-0 bg-black/80 opacity-0 hidden z-[9990]"
                onClick={exitFullscreen}
            ></div>

            <div
                ref={wrapperRef}
                className="relative transition-all rounded-lg overflow-hidden "
            >

                {children}

                {/* Fullscreen Button */}
                {!isFullscreen && (
                    <div className='hidden lg:block'>
                        <div className="mt-2 text-center flex justify-center">
                            <button
                                onClick={enterFullscreen}
                                className="px-[1.5dvw] py-[0.3dvw] text-[1dvw] bg-gray25 text-white rounded hover:bg-tertiary transition flex gap-2"
                            >
                                <Fullscreen size={16} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                )}

                {/* Close Button */}
                {isFullscreen && (
                    <button
                        onClick={exitFullscreen}
                        className="absolute top-2 right-2 z-[9999] bg-red-600 text-white px-2 py-1 text-sm rounded hover:bg-red-700"
                    >
                        ✕
                    </button>
                )}
            </div>

        </>
    );
}

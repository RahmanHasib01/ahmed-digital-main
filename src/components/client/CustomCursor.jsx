'use client'

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Hide on touch devices
        const touch = window.matchMedia('(hover: none)').matches;
        setIsMobile(touch);
        if (touch) return;

        const cursor = cursorRef.current;

        // 💫 Cursor movement
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY - 5,
                duration: 0,
                ease: 'power2.out',
            });
        };

        // 📏 Scale up on hover
        const onMouseEnter = () => {
            gsap.to(cursor, {
                scale:0.7,
                duration: 0.4,
                ease: 'power2.out',
            });
        };

        const onMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out',
            });
        };

        // 💥 Click pulse
        const onClick = () => {
            gsap.fromTo(
                cursor,
                { scale: 1.5 },
                {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power1.out',
                }
            );
        };

        // 🖱️ Attach listeners
        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('click', onClick);

        const hoverTargets = document.querySelectorAll('a, button, .cursor-hover');
        hoverTargets.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        // Hide cursor in fullscreen mode
        const handleFullscreen = () => {
            if (document.fullscreenElement) {
                cursor.style.display = 'none';
            } else {
                cursor.style.display = '';
            }
        };
        document.addEventListener('fullscreenchange', handleFullscreen);

        // 🧹 Cleanup
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('click', onClick);
            document.removeEventListener('fullscreenchange', handleFullscreen);
            hoverTargets.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    if (isMobile) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-5 h-5 bg-gradient-to-t from-tertiary via-tertiary to-gray-700 rounded-full pointer-events-none z-[999] transform -translate-x-1/2 -translate-y-1/2"
        ></div>
    );
};

export default CustomCursor;

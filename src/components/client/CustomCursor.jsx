'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const glowRef   = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const glow   = glowRef.current;

        // Cursor + glow movement
        const moveCursor = (e) => {
            // Dot snaps instantly
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY - 5,
                duration: 0,
            });
            // Glow follows with a soft lag
            gsap.to(glow, {
                x: e.clientX,
                y: e.clientY - 5,
                duration: 0.18,
                ease: 'power2.out',
            });
        };

        // Scale on hover
        const onMouseEnter = () => {
            gsap.to(cursor, { scale: 0.7, duration: 0.4, ease: 'power2.out' });
            gsap.to(glow,   { scale: 1.6, opacity: 0.85, duration: 0.4, ease: 'power2.out' });
        };

        const onMouseLeave = () => {
            gsap.to(cursor, { scale: 1,   duration: 0.4, ease: 'power2.out' });
            gsap.to(glow,   { scale: 1,   opacity: 0.55, duration: 0.4, ease: 'power2.out' });
        };

        // Click pulse
        const onClick = () => {
            gsap.fromTo(cursor, { scale: 1.5 }, { scale: 1, duration: 0.2, ease: 'power1.out' });
            gsap.fromTo(glow,   { scale: 2.2, opacity: 0.9 }, { scale: 1, opacity: 0.55, duration: 0.5, ease: 'power2.out' });
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('click', onClick);

        const hoverTargets = document.querySelectorAll('a, button, .cursor-hover');
        hoverTargets.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('click', onClick);
            hoverTargets.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Glow halo — larger, blurred, trails behind */}
            <div
                ref={glowRef}
                className="fixed top-0 left-0 pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(126,86,220,0.55) 0%, rgba(126,86,220,0.18) 50%, transparent 75%)',
                    filter: 'blur(6px)',
                    opacity: 0.55,
                }}
            />
            {/* Original dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-5 h-5 bg-gradient-to-t from-tertiary via-tertiary to-gray-700 rounded-full pointer-events-none z-[999] transform -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
};

export default CustomCursor;

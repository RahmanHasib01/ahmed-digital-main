'use client';
import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Marquee = ({ text }) => {
    const marqueeRef = useRef();
    const animationRef = useRef(null);
    const lastScrollY = useRef(0);
    const currentDirection = useRef(1); // 1 = left, -1 = right

    // Scroll listener to update animation direction
    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            const newDirection = y > lastScrollY.current ? 1 : -1;

            // Only change if direction really changed
            if (newDirection !== currentDirection.current) {
                currentDirection.current = newDirection;

                // Reverse the direction using timeScale
                if (animationRef.current) {
                    animationRef.current.timeScale(newDirection);
                }
            }

            lastScrollY.current = y;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initialize GSAP marquee
    useGSAP(() => {
        const textWidth = marqueeRef.current.scrollWidth / 2;

        animationRef.current = gsap.to(marqueeRef.current, {
            x: `-=${textWidth}`,
            duration: 10,
            ease: 'none',
            repeat: -1,
        });

        // Set initial direction
        animationRef.current.timeScale(currentDirection.current);
    }, []);

    return (
        <div className="overflow-hidden whitespace-nowrap h-[15dvh] lg:h-[35vh] flex items-center">
            <div
                ref={marqueeRef}
                className="flex text-white/90 text-[10dvw] lg:text-[8dvw] font-bold"
            >
                <span className="pr-[5vw]">{text}</span>
                <span className="pr-[5vw]">{text}</span>
            </div>
        </div>
    );
};

export default Marquee;

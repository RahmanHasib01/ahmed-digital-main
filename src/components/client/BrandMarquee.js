'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const BrandMarquee = ({ brands }) => {
    const marqueeRef = useRef();
    const animationRef = useRef(null);
    const lastScrollY = useRef(0);
    const currentDirection = useRef(1); // 1 = left, -1 = right

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            const newDirection = y > lastScrollY.current ? 1 : -1;
            if (newDirection !== currentDirection.current) {
                currentDirection.current = newDirection;
                if (animationRef.current) {
                    animationRef.current.timeScale(newDirection);
                }
            }
            lastScrollY.current = y;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        const textWidth = marqueeRef.current.scrollWidth / 2;

        animationRef.current = gsap.to(marqueeRef.current, {
            x: `-=${textWidth}`,
            duration: 20,
            ease: 'none',
            repeat: -1,
        });

        animationRef.current.timeScale(currentDirection.current);
    }, []);

    return (
        <div className="overflow-hidden whitespace-nowrap w-full h-[7dvh] lg:h-[8dvh] flex items-center">
            <div ref={marqueeRef} className="flex gap-[3dvw] text-white/90 text-[3.5dvw] lg:text-[1.5dvw] bg-black font-normal uppercase">
                {brands.concat(brands).map((name, index) => (
                    <span key={index}>{name}</span>
                ))}
            </div>
        </div>
    );
};

export default BrandMarquee;

'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FeaturedWork = () => {
    const topTitleRef = useRef()
    const bottomTitleRef = useRef()
    const triggerRef = useRef()

    useEffect(() => {
        // Set initial hidden state so elements don't flash on load
        gsap.set(topTitleRef.current,    { x: '-80%', opacity: 0 });
        gsap.set(bottomTitleRef.current, { x:  '80%', opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: 'top 85%',
                end: 'center 55%',
                scrub: 0.6,           // ties animation directly to the scroll wheel
            },
        });
        tl.to(topTitleRef.current,    { x: '0%', opacity: 1, ease: 'power3.out', duration: 1 }, 0)
          .to(bottomTitleRef.current, { x: '0%', opacity: 1, ease: 'power3.out', duration: 1 }, 0);

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div
            id="work"
            ref={triggerRef}
            className="relative w-full flex flex-col items-center justify-center overflow-hidden py-12"
            style={{
                background: 'linear-gradient(135deg, #0a0a0a 0%, #200f48 50%, #0a0a0a 100%)',
                minHeight: '20vh',
            }}
        >
            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(#7e56dc 1px, transparent 1px), linear-gradient(90deg, #7e56dc 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 text-center leading-none">
                <div
                    ref={topTitleRef}
                    className="font-poppins font-extrabold text-transparent"
                    style={{
                        fontSize: 'clamp(3rem, 9vw, 9rem)',
                        WebkitTextStroke: '1px rgba(255,255,255,0.7)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    FEATURED
                </div>
                <div
                    ref={bottomTitleRef}
                    className="font-poppins font-extralight text-white"
                    style={{
                        fontSize: 'clamp(3rem, 9vw, 9rem)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    WORK
                </div>
            </div>
        </div>
    )
}

export default FeaturedWork

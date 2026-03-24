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
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: '40% bottom',
                end: 'bottom bottom',
                toggleActions: 'play none none none',
            },
        });
        tl.fromTo(topTitleRef.current, { x: '-80%', opacity: 0 }, { x: '0', opacity: 1, ease: 'power3.out', duration: 0.9 }, 0)
          .fromTo(bottomTitleRef.current, { x: '80%', opacity: 0 }, { x: '0', opacity: 1, ease: 'power3.out', duration: 0.9 }, 0);
    }, []);

    return (
        <div
            id="work"
            ref={triggerRef}
            className="relative w-full flex flex-col items-center justify-center overflow-hidden py-24"
            style={{
                background: 'linear-gradient(135deg, #0a0a0a 0%, #200f48 50%, #0a0a0a 100%)',
                minHeight: '35vh',
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
                <h1
                    ref={topTitleRef}
                    className="font-poppins font-extrabold text-transparent"
                    style={{
                        fontSize: 'clamp(3rem, 9vw, 9rem)',
                        WebkitTextStroke: '1px rgba(255,255,255,0.7)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    FEATURED
                </h1>
                <h1
                    ref={bottomTitleRef}
                    className="font-poppins font-extralight text-white"
                    style={{
                        fontSize: 'clamp(3rem, 9vw, 9rem)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    WORK
                </h1>
            </div>
        </div>
    )
}

export default FeaturedWork

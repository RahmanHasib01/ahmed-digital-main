"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Template({ children }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Ensure we handle transitions smoothly.
        const ctx = gsap.context(() => {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full relative min-h-screen" style={{ opacity: 0 }}>
            {children}
        </div>
    );
}

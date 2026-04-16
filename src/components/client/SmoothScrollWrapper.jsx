"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollWrapper({ children }) {
    const wrapperRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        let smoother;
        try {
            smoother = ScrollSmoother.create({
                wrapper: wrapperRef.current,
                content: contentRef.current,
                smooth: 1.5,
                effects: true,
                media:"(min-width: 768px)"
            });
        } catch {
            // ScrollSmoother requires GSAP Club plugin — skip gracefully
        }

        return () => smoother?.kill();
    }, []);

    return (
        <div ref={wrapperRef} id="smooth-wrapper">
            <div ref={contentRef} id="smooth-content">
                {children}
            </div>
        </div>
    );
}

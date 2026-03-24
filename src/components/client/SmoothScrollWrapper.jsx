"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export default function SmoothScrollWrapper({ children }) {
    const wrapperRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 1.5,
            effects: true,
            media:"(min-width: 768px)"
        });

        return () => smoother.kill(); // cleanup on unmount
    }, []);

    return (
        <div ref={wrapperRef} id="smooth-wrapper">
            <div ref={contentRef} id="smooth-content">
                {children}
            </div>
        </div>
    );
}

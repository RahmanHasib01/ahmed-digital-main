"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function LoaderWrapper({ children }) {
    const [loading, setLoading] = useState(true);
    const loaderRef = useRef(null);
    const textRef = useRef(null);
    const barRef = useRef(null);

    useEffect(() => {
        if (loading) {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                onComplete: () => {
                    setTimeout(() => setLoading(false), 100);
                },
            });

            // Initial states
            gsap.set(textRef.current, { opacity: 0, y: 50, letterSpacing: "0.5em" });
            gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });

            // Animation sequence
            tl.to(textRef.current, {
                opacity: 1,
                y: 0,
                letterSpacing: "0.1em",
                duration: 1.2,
            })
                // First expand
                .to(barRef.current, { scaleX: 1, duration: 1 }, "-=0.6")
                // Contract back (to right)
                .to(barRef.current, { scaleX: 0, transformOrigin: "right center", duration: 1 })
                // Expand again (to left)
                .to(barRef.current, { scaleX: 1, transformOrigin: "left center", duration: 1 })
                // Contract again
                .to(barRef.current, { scaleX: 0, transformOrigin: "right center", duration: 1 })
                // Now exit
                .to(textRef.current, { opacity: 0, y: -30, duration: 0.8 }, "-=0.6")
                .to(loaderRef.current, { opacity: 0, duration: 1 }, "-=0.3");
        }
    }, [loading]);


    return (
        <div className="relative">
            {children}

            {loading && (
                <div
                    ref={loaderRef}
                    className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999] overflow-hidden"
                >
                    {/* Shiny bar */}
                    <div
                        ref={barRef}
                        className="w-[200px] h-[4px] bg-gradient-to-r from-[#7e56dc] via-[#391985] to-[#7e56dc] rounded-full mb-8 origin-left scale-x-0"
                    ></div>

                    {/* Agency Name */}
                    <h1
                        ref={textRef}
                        className="text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-[#0f172a] via-white to-[#0f172a] tracking-widest opacity-0 translate-y-12"
                    >
                        AHMED DIGITAL .
                    </h1>
                </div>
            )}
            
        </div>
    );
}
'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
    const paragraphRef = useRef(null);

    // Your paragraph text split into words
    const paragraphText = `We began with a passion for video editing before it became a business. Over time, we learned how powerful a well-made video can be to help others share their stories.
    if there is a story to tell, we are ready to bring it to life.`;

    // Split the paragraph into words and return array of spans
    const words = paragraphText.split(' ').map((word, i) => (
        <span key={i} className="word inline-block mr-[0.3ch] whitespace-nowrap">{word}</span>
    ));

    useEffect(() => {
        const wordsElems = paragraphRef.current.querySelectorAll('.word');

        gsap.set(wordsElems, { color: "#262626" }); // initial color

        gsap.to(wordsElems, {
            scrollTrigger: {
                trigger: paragraphRef.current,
                start: "top 90%",
                end: "50% 50%",
                scrub: 1,
                // markers: true, // uncomment to debug triggers
            },
            color: "#ffff", // indigo-600 color
            stagger: {
                each: 0.1,
                from: "start",
                ease: "power1.out"
            },
            ease: "none"
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='h-[77dvh] w-full flex'>
            <div className="left-section w-[40%]">
                <div className="text mt-[5dvh] lg:mt-[10dvh]">
                    <h1 className='text-[6dvw] lg:text-[3dvw]'>Our Story</h1>
                    <button className='text-[2dvw] lg:text-[1.2dvw] lg:mt-[5dvh] border border-tertiary rounded-3xl px-[1dvw]'>
                        More About Us
                    </button>
                </div>
            </div>

            <div className="right-section w-[60%]">
                <div
                    ref={paragraphRef}
                    className="texts mt-[5dvh] lg:mt-[10dvh] ml-[5dvw] lg:ml-0 text-[3dvw] lg:text-[1.75dvw] font-poppins font-light tracking-wider"
                >
                    {words}
                </div>
            </div>
        </div>
    );
};

export default OurStory;

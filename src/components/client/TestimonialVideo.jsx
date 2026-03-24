'use client'
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import useVideoAutoPause from "@/hooks/useVideoAutoPause"; // adjust path if needed

const testimonials = [
    {
        video: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002197/AD%20Videos/testimonial/5_Product_Reel_hhl2t6.mp4',
        quote: 'Ahmed Digital is the most reliable editing partner you could ask for your content creation ventures.',
    },
    {
        video: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002197/AD%20Videos/testimonial/5_Product_Reel_hhl2t6.mp4',
        quote: 'Ahmed Digital is the most reliable editing partner you could ask for your content creation ventures.',
    },

];

export default function TestimonialVideo() {
    const videoRefs = useRef([]);

    // Use the custom hook
    useVideoAutoPause(videoRefs);

    useEffect(() => {
        // Reset the refs array on render
        videoRefs.current = videoRefs.current.slice(0, testimonials.length);
    }, []);

    if (!testimonials.length) return null;

    return (
        <section className="w-full bg-black text-white py-20 flex flex-col items-center">
            {/* Heading */}
            <p className="tracking-widest lg:text-[1.2dvw] sm:text-sm text-[#4335de] uppercase mb-1">
                Client Testimonials
            </p>
            <h2 className="font-semibold text-accent leading-tight text-3xl sm:text-4xl lg:text-5xl mb-14 text-center">
                <span className="block">What Our Clients Say</span>
            </h2>

            {/* Carousel wrapper */}
            <div className="relative flex items-center w-full max-w-[90vw] justify-center">
                <Swiper
                    modules={[Navigation]}
                    loop
                    navigation={{ prevEl: ".swiper-prev-btn", nextEl: ".swiper-next-btn" }}
                    className="testimonial-swiper w-[260px] sm:w-[300px] lg:w-[20dvw]"
                >
                    {testimonials.map(({ video, quote, poster }, i) => (
                        <SwiperSlide key={i} className="flex flex-col items-center">
                            <video
                                src={video}
                                poster={poster}
                                controls
                                controlsList="nodownload nofullscreen noremoteplayback"
                                playsInline
                                className="rounded-lg w-full h-auto shadow-lg hide-fullscreen"
                                ref={(el) => (videoRefs.current[i] = el)}
                            />
                            <p className="font-semibold tracking-wider text-center text-[1dvw] font-Poppins-ExtraLight text-white/60 lg:text-md max-w-3xl mt-10">
                                “{quote}”
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <button
                    className="swiper-prev-btn hidden lg:block absolute lg:left-80 -translate-x-1/2 lg:-translate-x-full p-3 lg:p-4 rounded-full bg-gray25 hover:bg-secondary backdrop-blur-md"
                    aria-label="Previous testimonial"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    className="swiper-next-btn hidden lg:block absolute lg:right-80 translate-x-1/2 lg:translate-x-full p-3 lg:p-4 rounded-full bg-gray25 hover:bg-secondary backdrop-blur-md"
                    aria-label="Next testimonial"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

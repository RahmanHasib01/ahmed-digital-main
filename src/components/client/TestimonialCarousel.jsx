"use client";
import React from "react";
import TestimonialCard from "../static/TestimonialCard";

const testimonials = [
    {
        name: "Jane Doe",
        handle: "jane_d",
        message: "Ahmed Digital is the most reliable editing partner you could ask for. They truly get the vision.",
        image: "https://i.pravatar.cc/150?img=1",
        color: "#f5f0c8",
        rotate: "-2deg",
    },
    {
        name: "John Smith",
        handle: "johnsmith",
        message: "They brought my vision to life with incredible creativity. Would not go anywhere else.",
        image: "https://i.pravatar.cc/150?img=2",
        color: "#fce4ec",
        rotate: "1.5deg",
    },
    {
        name: "Amira Khan",
        handle: "amira_k",
        message: "Highly recommend. Professional, on time, and the output quality is consistently excellent.",
        image: "https://i.pravatar.cc/150?img=3",
        color: "#e8f5e9",
        rotate: "-1deg",
    },
    {
        name: "David Lee",
        handle: "davidl",
        message: "The quality and communication were top-notch. My engagement went up 5x after their edits.",
        image: "https://i.pravatar.cc/150?img=4",
        color: "#ede7f6",
        rotate: "2.5deg",
    },
    {
        name: "Emily Carter",
        handle: "emilyc",
        message: "Their attention to detail was incredible. Felt like they were part of my own team.",
        image: "https://i.pravatar.cc/150?img=5",
        color: "#fff8e1",
        rotate: "-1.5deg",
    },
    {
        name: "Liam Wright",
        handle: "liamw",
        message: "Would definitely work with them again. Fast, creative, and they always deliver.",
        image: "https://i.pravatar.cc/150?img=6",
        color: "#fbe9e7",
        rotate: "0.5deg",
    },
];

const TestimonialCarousel = () => {
    return (
        <div className="w-full bg-black py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-[#7e56dc] text-xs tracking-[0.25em] uppercase font-poppins mb-4">
                        What Clients Say
                    </p>
                    <h2
                        className="text-white font-poppins"
                        style={{
                            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        The editing partner creatives{' '}
                        <span className="italic font-extralight" style={{ color: '#cfeb6c' }}>
                            actually want.
                        </span>
                    </h2>
                </div>

                {/* Sticky-note grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;

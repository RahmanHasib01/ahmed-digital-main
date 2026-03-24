import React from 'react';
import VideoWrapper from './VideosComponent/VideoWrapper';
import NativePlyr from './NativePlyr';

const About = () => {
    return (
        <div id="about" className="w-full bg-black py-20 lg:py-32 px-6 lg:px-16 relative overflow-hidden">
            {/* Subtle background glow */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(126,86,220,0.12) 0%, transparent 70%)',
                    transform: 'translate(30%,-30%)',
                }}
            />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                {/* Left — editorial headline */}
                <div className="flex-1">
                    <p className="text-[#7e56dc] text-xs tracking-[0.25em] uppercase font-poppins mb-6">
                        About Us
                    </p>
                    <h2
                        className="text-white font-poppins mb-8 leading-tight"
                        style={{
                            fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Your creative<br />
                        process is{' '}
                        <span
                            className="italic font-extralight"
                            style={{ color: '#cfeb6c' }}
                        >
                            changing.
                        </span>
                        <br />
                        Take back control.
                    </h2>
                    <p className="text-white/45 font-poppins font-light leading-relaxed text-base lg:text-lg max-w-md">
                        Tired of posting videos that don't get attention? Ahmed Digital helps you craft
                        scroll-stopping content that actually converts — handled end-to-end by editors
                        who care about your growth.
                    </p>
                    <a
                        href="https://cal.com/ahmeddigital/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-black px-6 py-3 rounded-full transition-all hover:scale-105"
                        style={{ background: '#cfeb6c' }}
                    >
                        Checkout What We Do →
                    </a>
                </div>

                {/* Right — showreel video */}
                <div className="flex-1 w-full max-w-xl lg:max-w-none aspect-video rounded-2xl overflow-hidden"
                    style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 16px 64px rgba(0,0,0,0.6)' }}
                >
                    <VideoWrapper>
                        <NativePlyr
                            src="https://res.cloudinary.com/dyoeyaaej/video/upload/v1757355188/Best_Video_Editing_USA_CANADA_AUSTRALIA_d2fekv.mp4"
                        />
                    </VideoWrapper>
                </div>
            </div>
        </div>
    );
};

export default About;

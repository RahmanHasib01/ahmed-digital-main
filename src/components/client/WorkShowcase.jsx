"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import YoutubeVideos from './VideosComponent/YoutubeVideos';
import AdsVideos from './VideosComponent/AdsVideos';
import ShortVideos from './VideosComponent/ShortsVideos';
import MotionVideos from './VideosComponent/MotionVideos';
import SocialMediaVideos from './VideosComponent/SocialMediaVideos';
import EventsVideos from './VideosComponent/EventVideos';
import EduVideos from './VideosComponent/EduVideos';

const categories = [
    "youtube", "ads & vsl", "shorts", "motions", "social media", "events", "edu contents",
];

// JSX elements defined once at module level — never re-created
const PANELS = {
    'youtube':      <YoutubeVideos />,
    'ads & vsl':    <AdsVideos />,
    'shorts':       <ShortVideos />,
    'motions':      <MotionVideos />,
    'social media': <SocialMediaVideos />,
    'events':       <EventsVideos />,
    'edu contents': <EduVideos />,
};

const WorkShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState('youtube');

    // Track which tabs have ever been visited — once visited, they stay mounted forever
    const [mountedTabs, setMountedTabs] = useState(() => new Set(['youtube']));

    const selectedIndex = categories.indexOf(selectedCategory);

    const handleSelect = useCallback((cat) => {
        setSelectedCategory(cat);
        setMountedTabs(prev => {
            if (prev.has(cat)) return prev; // already mounted — return same ref, no re-render
            const next = new Set(prev);
            next.add(cat);
            return next;
        });
    }, []);

    const goNext = () => handleSelect(categories[(selectedIndex + 1) % categories.length]);
    const goPrev = () => handleSelect(categories[(selectedIndex - 1 + categories.length) % categories.length]);

    return (
        <section id="work-section" className="min-h-screen bg-black w-full relative overflow-hidden pt-8 pb-20">

            {/* Heading */}
            <div className="text-center mb-10 px-6">
                <p className="text-[#7e56dc] text-xs tracking-[0.25em] uppercase font-poppins mb-3">Portfolio</p>
                <h2
                    className="text-white font-poppins"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                    It's your work,{' '}
                    <span className="italic font-extralight" style={{ color: '#cfeb6c' }}>supercharged.</span>
                </h2>
            </div>

            {/* Category pill tabs */}
            <div className="flex justify-center items-center gap-2 flex-wrap px-4 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleSelect(cat)}
                        className="px-4 py-1.5 rounded-full text-xs font-poppins font-semibold tracking-wider uppercase transition-all duration-200"
                        style={{
                            background: selectedCategory === cat ? '#cfeb6c' : 'rgba(255,255,255,0.06)',
                            color: selectedCategory === cat ? '#000' : 'rgba(255,255,255,0.6)',
                            border: selectedCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Prev / Next arrows */}
            <button
                onClick={goPrev}
                className="absolute hidden lg:flex left-6 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full text-white z-10"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
                <ChevronLeft size={18} />
            </button>
            <button
                onClick={goNext}
                className="absolute hidden lg:flex right-6 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full text-white z-10"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
                <ChevronRight size={18} />
            </button>

            {/*
              Lazy-mount + keep-alive panels.
              - First visit: mounts the panel (Plyr initializes once).
              - Subsequent visits: CSS display toggle only — zero re-initialization, instant switch.
            */}
            {categories.map(cat => (
                <div
                    key={cat}
                    style={{ display: selectedCategory === cat ? 'block' : 'none' }}
                    aria-hidden={selectedCategory !== cat}
                >
                    {mountedTabs.has(cat) && PANELS[cat]}
                </div>
            ))}
        </section>
    );
};

export default WorkShowcase;

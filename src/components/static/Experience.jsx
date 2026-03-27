'use client'
import React from 'react'

const stats = [
    { number: '5', label: 'Regions', sub: 'all over the world', bg: '#cfeb6c', text: '#000' },
    { number: '50+', label: 'Brands', sub: 'served and growing', bg: '#1a1a1a', text: '#fff' },
    { number: '100+', label: 'Clients', sub: 'we call family', bg: '#fff', text: '#000' },
    { number: '500+', label: 'Projects', sub: 'completed over the years', bg: '#391985', text: '#fff' },
    { number: '5x', label: 'Growth', sub: 'engagement boost avg.', bg: '#1a1a1a', text: '#fff' },
];

const Experience = () => {
    return (
        <div className="w-full bg-black py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-[#7e56dc] text-xs tracking-[0.25em] uppercase font-poppins mb-3">By the numbers</p>
                    <h2
                        className="text-white font-poppins"
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
                    >
                        We want your brand{' '}
                        <span className="italic font-extralight" style={{ color: '#cfeb6c' }}>to go viral</span>
                        {' '}with us.
                    </h2>
                </div>

                {/* Stats bento grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="rounded-2xl p-5 flex flex-col justify-between"
                            style={{ background: stat.bg, minHeight: '140px' }}
                        >
                            <p
                                className="font-poppins font-extrabold leading-none"
                                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: stat.text }}
                            >
                                {stat.number}
                            </p>
                            <div>
                                <p className="font-poppins font-bold text-sm" style={{ color: stat.text }}>{stat.label}</p>
                                <p className="font-poppins font-light text-xs mt-0.5" style={{ color: stat.text, opacity: 0.6 }}>{stat.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience

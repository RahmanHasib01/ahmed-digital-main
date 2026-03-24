'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import OurStory from '../static/OurStory'
import OurMission from '../static/OurMission'
import OurPromise from '../static/OurPromise'

const AboutSection = () => {
    const [selected, setSelected] = useState('OUR STORY')
    const contentRef = useRef(null)

    const renderContent = () => {
        switch (selected) {
            case 'OUR STORY':
                return <OurStory />
            case 'OUR MISSION':
                return <OurMission />
            case 'OUR PROMISE':
                return <OurPromise />
        }
    }

    useEffect(() => {
        if (!contentRef.current) return
        gsap.fromTo(contentRef.current, {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
        })
    }, [selected])

    return (
        <div id='about' className='h-[60svh] lg:h-[100dvh] w-full bg-black text-white py-10'>
            <div className="content mx-auto">
                <div className="navigator mb-8">
                    <div className='w-[90vw] lg:w-[40vw] h-[4dvh] lg:h-[8dvh] rounded-full border-1 border-tertiary mx-auto flex justify-evenly items-center backdrop-blur-md bg-white/5'>
                        {['OUR STORY', 'OUR MISSION', 'OUR PROMISE'].map((label) => (
                            <button
                                key={label}
                                onClick={() => setSelected(label)}
                                className={`transition-all duration-300 ease-in-out px-4 py-1 rounded-full text-sm lg:text-base
                                ${selected === label ? 'bg-tertiary text-black' : 'text-white hover:bg-white/10'}`}>
                                {label.replace('OUR ', '')}
                            </button>
                        ))}
                    </div>
                </div>

                <div ref={contentRef} className='transition-opacity duration-300 mx-[10vw] lg:mx-[15vw]'>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default AboutSection

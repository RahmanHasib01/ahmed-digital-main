'use client'

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Hand, Target, Building2, PlaySquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef();
  const videoWrapperRef = useRef();
  const videoPerspectiveRef = useRef();
  const bottomContentRef = useRef();

  useEffect(() => {
    // 3D Video Scroll effect
    const ctx = gsap.context(() => {
      // Set initial 3D transform for the video container
      gsap.set(videoPerspectiveRef.current, {
        rotationX: 35,
        rotationZ: -5,
        scale: 0.85,
        transformPerspective: 1000,
        boxShadow: "0 20px 40px rgba(91, 69, 254, 0.4)" // Purple glow
      });

      // Animate to flat 2D as user scrolls
      gsap.to(videoPerspectiveRef.current, {
        rotationX: 0,
        rotationZ: 0,
        scale: 1,
        boxShadow: "0 0px 0px rgba(91, 69, 254, 0)",
        ease: "none",
        scrollTrigger: {
          trigger: videoWrapperRef.current,
          start: "top 70%",
          end: "top 10%",
          scrub: 1,
        }
      });

      // Fade in bottom content
      gsap.fromTo(bottomContentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: bottomContentRef.current,
            start: "top 80%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#050505] overflow-hidden pt-32 pb-20 font-poppins text-white">
      {/* Background radial glow */}
      <div 
        className="absolute inset-x-0 top-0 h-[800px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle at 50% 20%, rgba(91,69,254,0.15) 0%, transparent 60%)' }} 
      />

      {/* Top Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center mt-10">
        <h1 className="leading-tight mb-4 tracking-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          <span className="text-[#888] font-medium block mb-2">Get More Leads</span>
          <span className="font-bold">Using Quality Video Content</span>
        </h1>

        <p className="text-[#a0a0a0] max-w-2xl text-base sm:text-lg font-light mb-8">
          We help entrepreneurs and businesses with Done-For-You organic content systems that generate leads on autopilot.
        </p>

        {/* Avatars */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <div className="flex -space-x-3">
            <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Sarah" alt="Ahmed Digital Happy Client Sarah" className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#200f48] object-cover" />
            <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Marcus" alt="Ahmed Digital Happy Client Marcus" className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#200f48] object-cover" />
            <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Priya" alt="Ahmed Digital Happy Client Priya" className="w-10 h-10 rounded-full border-[#050505] bg-[#200f48] object-cover" />
            <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Jake" alt="Ahmed Digital Happy Client Jake" className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#200f48] object-cover" />
          </div>
          <div className="text-left text-sm max-w-[200px] sm:max-w-none text-center sm:text-left">
            <p className="font-semibold text-white/90">Loved by 500+ Businesses worldwide.</p>
            <p className="text-[#888]">Our Clients Speak for Us</p>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="https://cal.com/ahmeddigital/15min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
          style={{ background: '#4b4ac8', boxShadow: '0 4px 14px 0 rgba(75,74,200,0.39)' }}
        >
          Book A Call <ArrowUpRight size={18} />
        </a>
      </div>

      {/* 3D Scrolling Video Wrapper */}
      <div ref={videoWrapperRef} className="relative z-20 mt-16 sm:mt-24 max-w-4xl mx-auto px-4 perspective-container" style={{ perspective: '1200px' }}>
        <div 
          ref={videoPerspectiveRef} 
          className="w-full aspect-video rounded-2xl overflow-hidden relative" 
          style={{ background: '#111' }}
        >
          <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-10"></div>
          {/* Main Hero Video */}
          <video
            src="https://res.cloudinary.com/dyoeyaaej/video/upload/v1757355188/Best_Video_Editing_USA_CANADA_AUSTRALIA_d2fekv.mp4"
            autoPlay muted loop playsInline preload="auto"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div ref={bottomContentRef} className="relative z-10 mt-24 sm:mt-40 px-4 sm:px-6 text-center max-w-6xl mx-auto flex flex-col items-center">
        
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 z-10 relative leading-tight">
          Tired of video content that simply exists?<br className="hidden sm:block"/>
          Let's craft <span className="italic font-light">scroll-stopping</span> stories that <span className="relative inline-block">get results.<svg className="absolute w-[110%] h-3 -bottom-2 -left-[5%] text-[#cfeb6c]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M2 6.5C48 2.5 137 -1.5 198.5 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg></span>
        </h2>

        {/* Features / Services Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl z-10 relative mb-16">
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-[#4b4ac8] bg-[#0a0a0a] transition hover:shadow-[0_0_20px_rgba(75,74,200,0.3)]">
            <Hand size={32} className="text-white mb-4" />
            <h4 className="text-white font-bold text-lg mb-1">Short-Form Content</h4>
            <p className="text-[#888] text-sm">Viral Reels, TikToks,<br/>Shorts.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-[#4b4ac8] bg-[#0a0a0a] transition hover:shadow-[0_0_20px_rgba(75,74,200,0.3)]">
            <Target size={32} className="text-white mb-4" />
            <h4 className="text-white font-bold text-lg mb-1">Marketing & Ads</h4>
            <p className="text-[#888] text-sm">High-conversion VSLs &<br/>Social Ads.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-[#4b4ac8] bg-[#0a0a0a] transition hover:shadow-[0_0_20px_rgba(75,74,200,0.3)]">
            <Building2 size={32} className="text-white mb-4" />
            <h4 className="text-white font-bold text-lg mb-1">Professional Niche</h4>
            <p className="text-[#888] text-sm">Real Estate & Corporate<br/>Videos.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-[#4b4ac8] bg-[#0a0a0a] transition hover:shadow-[0_0_20px_rgba(75,74,200,0.3)]">
            <PlaySquare size={32} className="text-white mb-4" />
            <h4 className="text-white font-bold text-lg mb-1">Long-Form Content</h4>
            <p className="text-[#888] text-sm">YouTube Videos &<br/>Tutorials.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-8 w-full max-w-3xl z-10 relative">
          <div className="flex flex-col items-center">
            <h3 className="text-[#7e56dc] text-4xl sm:text-5xl font-bold mb-1">200<span className="text-2xl">%</span></h3>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">More Engagement</p>
            <p className="text-[#888] text-xs">Viral-Edge Edits</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[#7e56dc] text-4xl sm:text-5xl font-bold mb-1">5<span className="text-2xl min-w-4 text-center">x</span></h3>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">More Reach</p>
            <p className="text-[#888] text-xs">Targeted Distribution</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[#7e56dc] text-4xl sm:text-5xl font-bold mb-1">50<span className="text-2xl">%</span></h3>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">More Leads</p>
            <p className="text-[#888] text-xs">Automated Growth Systems</p>
          </div>
        </div>
      </div>
    </section>
  );
}

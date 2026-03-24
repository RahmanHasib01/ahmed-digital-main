'use client'

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// float class + animation-delay assigned per card for organic randomness
const THUMBS_DESKTOP = [
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002153/AD%20Videos/best-video-editing-service_bxclwk.mp4',        float: 'hero-float-a', delay: '0s',    style: { top: '6%',    left: '3%',    height: '200px', width: '148px', '--r': '-4deg'  } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1757355188/Best_Video_Editing_USA_CANADA_AUSTRALIA_d2fekv.mp4',        float: 'hero-float-c', delay: '1.1s',  style: { top: '4%',    left: '20%',   height: '150px', width: '120px', '--r': '2deg'   } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002153/AD%20Videos/best-video-editing-service_bxclwk.mp4',        float: 'hero-float-b', delay: '0.5s',  style: { top: '4%',    right: '18%',  height: '170px', width: '130px', '--r': '-2deg'  } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1757355188/Best_Video_Editing_USA_CANADA_AUSTRALIA_d2fekv.mp4',        float: 'hero-float-d', delay: '2s',    style: { top: '4%',    right: '2%',   height: '200px', width: '148px', '--r': '5deg'   } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002153/AD%20Videos/best-video-editing-service_bxclwk.mp4',        float: 'hero-float-b', delay: '0.8s',  style: { top: '46%',   left: '1%',    height: '180px', width: '140px', '--r': '-6deg'  } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1757355188/Best_Video_Editing_USA_CANADA_AUSTRALIA_d2fekv.mp4',        float: 'hero-float-a', delay: '1.5s',  style: { top: '52%',   right: '1%',   height: '190px', width: '145px', '--r': '4deg'   } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002153/AD%20Videos/best-video-editing-service_bxclwk.mp4',        float: 'hero-float-c', delay: '0.3s',  style: { bottom: '5%', left: '12%',   height: '160px', width: '128px', '--r': '3deg'   } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1757355188/Best_Video_Editing_USA_CANADA_AUSTRALIA_d2fekv.mp4',        float: 'hero-float-d', delay: '1.8s',  style: { bottom: '4%', right: '12%',  height: '160px', width: '128px', '--r': '-3deg'  } },
];

const THUMBS_MOBILE = [
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002153/AD%20Videos/best-video-editing-service_bxclwk.mp4',        float: 'hero-float-a', delay: '0s',    style: { top: '5%',    left: '3%',    height: '140px', width: '105px', '--r': '-6deg'  } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1757355188/Best_Video_Editing_USA_CANADA_AUSTRALIA_d2fekv.mp4',        float: 'hero-float-d', delay: '0.7s',  style: { top: '8%',    right: '4%',   height: '130px', width: '98px',  '--r': '5deg'   } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1757355188/Best_Video_Editing_USA_CANADA_AUSTRALIA_d2fekv.mp4',        float: 'hero-float-b', delay: '1.2s',  style: { top: '30%',   left: '1%',    height: '120px', width: '90px',  '--r': '8deg'   } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002153/AD%20Videos/best-video-editing-service_bxclwk.mp4',        float: 'hero-float-c', delay: '0.4s',  style: { top: '32%',   right: '2%',   height: '125px', width: '95px',  '--r': '-4deg'  } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1757355188/Best_Video_Editing_USA_CANADA_AUSTRALIA_d2fekv.mp4',        float: 'hero-float-a', delay: '1.6s',  style: { bottom: '8%', left: '5%',    height: '135px', width: '100px', '--r': '3deg'   } },
  { src: 'https://res.cloudinary.com/dyoeyaaej/video/upload/v1755002153/AD%20Videos/best-video-editing-service_bxclwk.mp4',        float: 'hero-float-d', delay: '0.9s',  style: { bottom: '10%',right: '3%',   height: '130px', width: '98px',  '--r': '-7deg'  } },
];

export default function HeroSection() {
  const headlineRef = useRef();
  const brandRef    = useRef();
  const sectionRef  = useRef();

  useEffect(() => {
    // Headline → brand name crossfade on scroll (lightweight, opacity only)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: '20% top',
        end: '40% top',
        scrub: true,
      },
    });
    tl.fromTo(headlineRef.current, { opacity: 1 }, { opacity: 0, duration: 0.5 })
      .fromTo(brandRef.current,    { opacity: 0 }, { opacity: 1, duration: 0.8 }, '>-0.2');

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const Card = ({ thumb, mobileOnly }) => {
    const { src, float, delay, style } = thumb;
    const { '--r': rotate, ...posStyle } = style;

    return (
      <div
        className={`absolute overflow-hidden rounded-xl ${float} ${mobileOnly ? 'lg:hidden' : 'hidden lg:block'}`}
        style={{
          ...posStyle,
          '--r': rotate,
          border: '1.5px solid rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          background: '#111',
          animationDelay: delay,
        }}
      >
        <video
          src={src}
          autoPlay muted loop playsInline preload="none"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(126,86,220,0.18) 0%, transparent 70%)' }}
      />

      {/* Desktop floating cards */}
      {THUMBS_DESKTOP.map((thumb, i) => (
        <Card key={`d${i}`} thumb={thumb} mobileOnly={false} />
      ))}

      {/* Mobile floating cards */}
      {THUMBS_MOBILE.map((thumb, i) => (
        <Card key={`m${i}`} thumb={thumb} mobileOnly={true} />
      ))}

      {/* Centre headline */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
        <div ref={headlineRef}>
          <h1
            className="text-white font-poppins leading-tight mb-4"
            style={{ fontSize: 'clamp(1.75rem, 5.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            We Create Stories<br />
            <span className="italic font-extralight" style={{ color: '#cfeb6c' }}>That Go Viral.</span>
          </h1>
          <p className="text-white/45 text-sm lg:text-lg font-light mb-8 tracking-wide">
            Scroll-stopping content for brands that mean business.
          </p>
          <a
            href="https://cal.com/ahmeddigital/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105 text-sm lg:text-base"
            style={{ background: '#cfeb6c' }}
          >
            Book a Call →
          </a>
        </div>

        {/* Brand name fades in as headline fades out */}
        <div ref={brandRef} className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none select-none">
          <h2 className="font-poppins font-bold text-white" style={{ fontSize: 'clamp(1.2rem, 6vw, 6rem)', letterSpacing: '-0.03em' }}>
            AHMED<span className="font-extralight"> DIGITAL</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

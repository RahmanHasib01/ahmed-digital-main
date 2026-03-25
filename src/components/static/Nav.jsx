'use client'
import React, { useEffect, useRef } from 'react';
import { useScrollToSection } from '@/hooks/useScrollTo';

function NavBar() {
    const navRef = useRef(null);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        let ticking = false;

        const update = () => {
            const isScrolled = window.scrollY > 60;
            const isMobile = window.innerWidth < 640;

            if (isScrolled) {
                nav.style.width = isMobile ? '92%' : '88%';
                nav.style.maxWidth = '1100px';
                nav.style.padding = isMobile ? '0.5rem 1rem' : '0.6rem 1.5rem';
                nav.style.borderRadius = '9999px';
                nav.style.background = 'rgba(10,10,10,0.82)';
                nav.style.backdropFilter = 'blur(20px)';
                nav.style.webkitBackdropFilter = 'blur(20px)';
                nav.style.border = '1px solid rgba(255,255,255,0.08)';
                nav.style.boxShadow = '0 4px 32px rgba(0,0,0,0.45)';
                nav.style.top = '1rem';
            } else {
                nav.style.width = '100%';
                nav.style.maxWidth = '100%';
                nav.style.padding = isMobile ? '1rem' : '1rem 2rem';
                nav.style.borderRadius = '0';
                nav.style.background = 'transparent';
                nav.style.backdropFilter = 'none';
                nav.style.webkitBackdropFilter = 'none';
                nav.style.border = 'none';
                nav.style.boxShadow = 'none';
                nav.style.top = '0';
            }

            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        const onResize = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize, { passive: true });
        // Initial setup
        update();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const links = [
        { label: 'About',   action: () => useScrollToSection('#about') },
        { label: 'Work',    action: () => useScrollToSection('#work') },
        { label: 'Contact', href: 'https://cal.com/ahmeddigital/15min' },
    ];

    return (
        <nav
            ref={navRef}
            style={{
                position: 'fixed',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 99,
                width: '100%',
                maxWidth: '100%',
                padding: '1rem 2rem',
                borderRadius: 0,
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                /* Only animate structural properties — never left/transform */
                transition: 'width 0.45s cubic-bezier(0.4,0,0.2,1), max-width 0.45s cubic-bezier(0.4,0,0.2,1), padding 0.35s ease, border-radius 0.45s cubic-bezier(0.4,0,0.2,1), background 0.3s ease, box-shadow 0.3s ease, top 0.35s ease',
                willChange: 'width, border-radius, background',
            }}
        >
            {/* Logo */}
            <span className="text-white font-poppins font-semibold text-sm sm:text-base tracking-wide select-none whitespace-nowrap shrink-0">
                ahmed<span className="hidden sm:inline">digital</span><span style={{ color: '#cfeb6c' }}>.</span>
            </span>

            {/* Nav links */}
            <ul className="flex items-center gap-3 sm:gap-7 text-white/70 text-[11px] sm:text-sm font-poppins font-light ml-auto sm:ml-0">
                {links.map(({ label, action, href }) => (
                    <li key={label}>
                        {href ? (
                            <a href={href} target="_blank" rel="noopener noreferrer"
                               className="hover:text-white transition-colors whitespace-nowrap">
                                {label}
                            </a>
                        ) : (
                            <span onClick={action}
                                  className="hover:text-white transition-colors whitespace-nowrap"
                                  style={{ cursor: 'pointer' }}>
                                {label}
                            </span>
                        )}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <a
                href="https://cal.com/ahmeddigital/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold text-[11px] sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:scale-105 whitespace-nowrap shrink-0 ml-3 sm:ml-4"
                style={{ background: '#cfeb6c', transition: 'transform 0.2s ease', display: 'inline-block' }}
            >
                Let's Talk →
            </a>
        </nav>
    );
}

export default NavBar;

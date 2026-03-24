import React from 'react';

const CTASection = () => {
    return (
        <div
            className="w-full flex flex-col items-center justify-center text-center px-6 py-32 relative overflow-hidden"
            style={{ background: '#0a0a0a' }}
        >
            {/* Background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(207,235,108,0.06) 0%, transparent 70%)',
                }}
            />

            <p className="text-[#7e56dc] text-xs tracking-[0.25em] uppercase font-poppins mb-6 relative z-10">
                Ready?
            </p>
            <h2
                className="text-white font-poppins relative z-10 mb-6"
                style={{
                    fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.05,
                }}
            >
                Ready to go{' '}
                <span className="italic font-extralight" style={{ color: '#cfeb6c' }}>viral?</span>
            </h2>
            <p className="text-white/40 font-poppins font-light text-lg mb-10 relative z-10 max-w-md">
                Let's build something scroll-stopping together.
            </p>
            <a
                href="https://cal.com/ahmeddigital/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-pulse relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins font-semibold text-black transition-all duration-300 hover:scale-105"
                style={{ background: '#cfeb6c', fontSize: '1.05rem', borderRadius: '9999px' }}
            >
                Book a Call →
            </a>
        </div>
    );
};

export default CTASection;

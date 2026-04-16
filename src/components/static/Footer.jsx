'use client'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-black" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>

            {/* Top links row */}
            <div className="px-6 sm:px-10 lg:px-16 pt-14 pb-10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand blurb */}
                    <div className="col-span-2 sm:col-span-2 lg:col-span-1">
                        <p className="font-poppins font-semibold text-[#cfeb6c] text-xs tracking-widest uppercase mb-3">
                            Do it once. Do it right.
                        </p>
                        <p className="text-white/35 text-sm font-poppins font-light leading-relaxed">
                            Premium video editing for creators and brands that demand results.
                        </p>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <p className="text-[#7e56dc] text-xs tracking-[0.2em] uppercase font-poppins mb-4">Sitemaps</p>
                        <ul className="space-y-2 text-white/60 text-sm font-poppins font-light">
                            <li><span className="hover:text-white transition-colors cursor-pointer">About</span></li>
                            <li><span className="hover:text-white transition-colors cursor-pointer">Home</span></li>
                            <li><span className="hover:text-white transition-colors cursor-pointer">Work</span></li>
                            <li>
                                <a href="https://cal.com/ahmeddigital/15min" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <p className="text-[#7e56dc] text-xs tracking-[0.2em] uppercase font-poppins mb-4">Socials</p>
                        <ul className="space-y-2 text-white/60 text-sm font-poppins font-light">
                            {[
                                ['Facebook',   'https://www.facebook.com/share/1FBCAjnTue/'],
                                ['LinkedIn',   'https://www.linkedin.com/company/ahmeddigital247/posts/?feedView=all'],
                                ['Instagram',  'https://www.instagram.com/ahmed.digital247?igsh=MWNpYTEzaGs3ZTB1Yw=='],
                                ['YouTube',    'https://www.youtube.com/@ahmeddigital247?si=KR7TUltrmSGQpZkf'],
                                ['X (Twitter)','https://x.com/AhmedDigit247?t=WGt2vBvIjwEu386iF3rudg&s=09'],
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-[#7e56dc] text-xs tracking-[0.2em] uppercase font-poppins mb-4">Get in touch</p>
                        <p className="text-white/80 text-sm font-poppins font-medium mb-2">Tanvir</p>
                        <a href="mailto:mdtanvirahmed310@gmail.com" className="text-white/60 text-sm font-poppins hover:text-white transition-colors break-all block mb-2">
                            mdtanvirahmed310@gmail.com
                        </a>
                        <a href="https://wa.me/8801318157393" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm font-poppins hover:text-white transition-colors">
                            WhatsApp: +8801318157393
                        </a>
                    </div>
                </div>
            </div>

            {/* Giant logotype */}
            <div className="overflow-hidden px-4 sm:px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div
                    className="text-white/10 select-none text-center hover:text-white/15 transition-colors duration-500 font-poppins font-extrabold"
                    style={{
                        fontSize: 'clamp(2rem, 10vw, 10rem)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        padding: '1rem 0',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'clip',
                    }}
                >
                    AHMED DIGITAL
                </div>
                <p className="text-white/20 text-xs font-poppins text-center pb-4">
                    © 2025 ahmeddigital · all rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer

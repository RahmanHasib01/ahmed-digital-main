import React from 'react';

const brands = [
  'BAIROBI', 'BETTER BOVINE', 'SPOTLIGHT ATTIERS', 'VIOLA PROPERTIES',
  'HUWA', 'VEG MOVE', 'ROGO', 'AHMED DIGITAL',
  'BAIROBI', 'BETTER BOVINE', 'SPOTLIGHT ATTIERS', 'VIOLA PROPERTIES',
  'HUWA', 'VEG MOVE', 'ROGO', 'AHMED DIGITAL',
];

const ClientLogoStrip = () => {
  return (
    <div
      className="w-full bg-[#0a0a0a] py-7 overflow-hidden"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Tagline */}
      <p className="text-center text-white/30 text-xs tracking-[0.22em] uppercase mb-5 font-poppins">
        Trusted by brands that demand the best
      </p>

      {/* Single row — scrolls left */}
      <div className="overflow-hidden">
        <div className="marquee-track-left">
          {brands.map((brand, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-5 text-white/40 font-poppins font-semibold text-xs tracking-[0.18em] uppercase whitespace-nowrap shrink-0"
            >
              {brand}
              <span className="text-[#7e56dc] text-base leading-none">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoStrip;

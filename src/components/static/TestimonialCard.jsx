import React from "react";

const TestimonialCard = ({ name, handle, message, image, color, rotate }) => {
    return (
        <div
            className="sticky-card"
            style={{
                background: color || '#f5f0c8',
                transform: `rotate(${rotate || '0deg'})`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.03)';
                e.currentTarget.style.boxShadow = '8px 12px 32px rgba(0,0,0,0.45)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = `rotate(${rotate || '0deg'})`;
                e.currentTarget.style.boxShadow = '4px 6px 18px rgba(0,0,0,0.35)';
            }}
        >
            <p className="text-black/80 text-sm leading-relaxed font-poppins font-normal mb-6">
                "{message}"
            </p>
            <div className="flex items-center gap-3">
                <img
                    src={image}
                    alt={name}
                    className="w-9 h-9 rounded-full object-cover"
                    style={{ border: '2px solid rgba(0,0,0,0.12)' }}
                />
                <div>
                    <p className="text-black font-semibold text-sm font-poppins">{name}</p>
                    <p className="text-black/45 text-xs font-poppins">@{handle}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;

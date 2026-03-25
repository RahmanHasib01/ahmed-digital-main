"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    company: "Viola Properties",
    quote: "Ahmed Digital transformed our property listings — the videos are cinematic, professional, and genuinely drive inquiries. An absolute game-changer for our marketing.",
    name: "Sarah Thompson",
    role: "Head of Marketing",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Sarah",
  },
  {
    company: "HUWA Brand",
    quote: "Working with Ahmed Digital feels effortless. They captured our brand story with precision and style. Our social engagement tripled since we started collaborating.",
    name: "Marcus Lee",
    role: "Creative Director",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Marcus",
  },
  {
    company: "VEG Kitchen",
    quote: "Ahmed Digital is the most reliable editing partner you could ask for. Fast, creative, and they always nail the vibe. Our reels have never looked better.",
    name: "Priya Nair",
    role: "Brand Manager",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Priya",
  },
  {
    company: "FitLife Studio",
    quote: "The fitness content they edit for us is electric. Every reel feels scroll-stopping and authentic — exactly what we needed to grow our online community.",
    name: "Jake Morrison",
    role: "CEO & Founder",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Jake",
  },
  {
    company: "Rogo Academy",
    quote: "Our course promo videos went from boring slideshow to genuinely compelling content. Students actually share the videos — that says everything.",
    name: "Amina Khalil",
    role: "Director of Growth",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Amina",
  },
  {
    company: "NextStep Realty",
    quote: "Every deadline. Every time. Ahmed Digital never misses. Our real estate walkthrough content has become our #1 lead generation channel.",
    name: "David Chen",
    role: "Sales Director",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=David",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="w-full py-20 md:py-28" style={{ background: "#0a0a0a" }}>
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <p
          className="uppercase tracking-widest text-xs font-semibold mb-3"
          style={{ color: "#7e56dc", letterSpacing: "0.2em" }}
        >
          Testimonials
        </p>
        <h2
          className="font-poppins font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl"
          style={{ color: "#ffffff" }}
        >
          Trusted by Brands
          <br />
          <span className="font-extralight italic" style={{ color: "#cfeb6c" }}>
            That Demand the Best
          </span>
        </h2>
      </div>

      {/* Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          loop={false}
          centeredSlides={true}
          slidesPerView={1.12}
          spaceBetween={20}
          breakpoints={{
            640:  { slidesPerView: 1.2,  spaceBetween: 24 },
            1024: { slidesPerView: 1.35, spaceBetween: 32 },
            1280: { slidesPerView: 1.5,  spaceBetween: 40 },
          }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className="rounded-2xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500"
                  style={{
                    background: "#111111",
                    boxShadow: isActive
                      ? "0 20px 60px rgba(126,86,220,0.1), 0 4px 16px rgba(0,0,0,0.6)"
                      : "0 4px 16px rgba(0,0,0,0.4)",
                    minHeight: "280px",
                    opacity: isActive ? 1 : 0.4,
                    transform: isActive ? "scale(1)" : "scale(0.96)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Company */}
                  <p
                    className="font-poppins font-semibold text-sm tracking-wider uppercase mb-6"
                    style={{ color: "#7e56dc" }}
                  >
                    {t.company}
                  </p>

                  {/* Quote */}
                  <p
                    className="font-poppins text-lg md:text-xl leading-relaxed flex-1 mb-8"
                    style={{ color: "#f3f4f6", fontWeight: 300 }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Person */}
                  <div
                    className="flex items-center gap-4 pt-6"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="rounded-full object-cover flex-shrink-0"
                      style={{ width: "48px", height: "48px", background: "#200f48" }}
                    />
                    <div>
                      <p className="font-poppins font-semibold text-sm" style={{ color: "#ffffff" }}>
                        {t.name}
                      </p>
                      <p className="font-poppins text-xs" style={{ color: "#a1a1aa" }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-5 mt-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={current === 0}
          className="flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            width: "40px",
            height: "40px",
            background: current === 0 ? "rgba(255,255,255,0.04)" : "#200f48",
            color: current === 0 ? "#555" : "#fff",
            cursor: current === 0 ? "not-allowed" : "pointer",
            border: "none",
          }}
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="font-poppins text-sm font-medium" style={{ color: "#a1a1aa" }}>
          {current + 1} / {testimonials.length}
        </span>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={current === testimonials.length - 1}
          className="flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            width: "40px",
            height: "40px",
            background: current === testimonials.length - 1 ? "rgba(255,255,255,0.04)" : "#200f48",
            color: current === testimonials.length - 1 ? "#555" : "#fff",
            cursor: current === testimonials.length - 1 ? "not-allowed" : "pointer",
            border: "none",
          }}
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

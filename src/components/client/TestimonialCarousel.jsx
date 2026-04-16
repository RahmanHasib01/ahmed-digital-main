"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Liam O'Connor",
    role: "Australia",
    quote: "Communication was seamless and the turnaround was lightning fast. The final video felt exactly like our brand's voice.",
    avatar: "/client-images/liam o'connor.jfif",
  },
  {
    name: "Sarah Jenkins",
    role: "USA",
    quote: "The motion graphics added a level of professionalism we didn't even know we were missing. Highly recommended for any project.",
    avatar: "/client-images/sarah.jfif",
  },
  {
    name: "Lukas Schmidt",
    role: "Germany",
    quote: "Working with him was a breeze. He took our rough ideas and transformed them into a high-converting social media ad.",
    avatar: "/client-images/lukas.jfif",
  },
  {
    name: "Chlo\u00e9 Dubois",
    role: "France",
    quote: "Reliable, creative, and technically skilled. He handled our massive batch of files without breaking a sweat or missing a deadline.",
    avatar: "/client-images/chole.jfif",
  },
  {
    name: "Ethan Walker",
    role: "Australia",
    quote: "The storytelling in the long-form edit was masterfully done. He kept the audience engaged from the first second to the last.",
    avatar: "/client-images/ethan.jfif",
  },
  {
    name: "Maya Rodriguez",
    role: "USA",
    quote: "I've worked with many editors, but his eye for pacing and rhythm is rare. A true partner in our creative process.",
    avatar: "/client-images/maya.jfif",
  },
  {
    name: "Leon Fischer",
    role: "Germany",
    quote: "Expertly handled our corporate project with a clean, sophisticated style. The feedback from our executive team was overwhelmingly positive.",
    avatar: "/client-images/leon.jfif",
  },
  {
    name: "Am\u00e9lie Laurent",
    role: "France",
    quote: "He is a powerhouse when it comes to post-production. The color grading and audio mix were absolutely flawless on this one.",
    avatar: "/client-images/amile.jfif",
  },
  {
    name: "Jack Harrison",
    role: "Australia",
    quote: "Exceptional work on our short-form content. He understands how to stop the scroll and keep viewers watching until the end.",
    avatar: "/client-images/jack.jfif",
  },
  {
    name: "David Miller",
    role: "USA",
    quote: "Proactive and insightful. He didn't just follow the script; he made creative suggestions that significantly improved the final product.",
    avatar: "/client-images/david.jfif",
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
          Client Testimonials
        </p>
        <h2
          className="font-poppins font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl"
          style={{ color: "#ffffff" }}
        >
          Hear what they’re

          <br />
          <span className="font-extralight italic" style={{ color: "#cfeb6c" }}>
            Saying about me
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
            640: { slidesPerView: 1.2, spaceBetween: 24 },
            1024: { slidesPerView: 1.35, spaceBetween: 32 },
            1280: { slidesPerView: 1.5, spaceBetween: 40 },
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

'use client'
import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "What is Ahmed Digital?",
    answer: "Ahmed Digital is a premium video editing agency specializing in high-impact, scroll-stopping content. Our team provides 'Done-For-You' organic content systems designed to help businesses and creators grow their influence and generate leads on autopilot through expert storytelling and viral-ready production."
  },
  {
    question: "What types of video editing services do you offer?",
    answer: "We offer a comprehensive range of video post-production services including viral reels for Instagram and TikTok, YouTube long-form editing, real estate showcase videos, corporate event recaps, and high-conversion Video Sales Letters (VSLs) for paid advertising campaigns."
  },
  {
    question: "Do you provide video editing for real estate agents?",
    answer: "Yes, real estate is one of our core niches. We create professional properties showcase videos that highlight key features and tell a story about the home, helping agents attract more serious buyers and build a premier local brand."
  },
  {
    question: "How long does your video editing process take?",
    answer: "Our standard turnaround time is 24 to 48 hours for short-form content and 3 to 5 business days for long-form YouTube videos. We prioritize both speed and quality to ensure your content calendar remains consistent and impactful."
  },
  {
    question: "Can your edits help me go viral?",
    answer: "While virality depends on various factors, our editing style is specifically engineered for high retention. We use strategic pacing, engaging captions, and scroll-stopping hooks that are proven to increase viewer watch time and boost discoverability across social platforms."
  }
]

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="w-full bg-[#050505] py-24 px-6 sm:px-10 lg:px-16 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[#cfeb6c] text-xs tracking-[0.2em] uppercase font-poppins mb-4">Common Questions</h2>
                    <h3 className="text-white text-3xl sm:text-5xl font-poppins font-bold">Frequently Asked <span className="text-[#7e56dc]">Questions</span></h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden transition-all duration-300"
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className="text-white font-poppins font-medium text-lg group-hover:text-[#7e56dc] transition-colors">
                                    {faq.question}
                                </span>
                                <div className="ml-4 flex-shrink-0 text-white/40">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            
                            {openIndex === index && (
                                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <p className="text-white/60 font-poppins font-light leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQSection

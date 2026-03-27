import Head from 'next/head';
import Script from 'next/script';

import HeroSection from "@/components/client/HeroSection";
import ClientLogoStrip from "@/components/static/ClientLogoStrip";
import FeaturedWork from "@/components/client/FeaturedWork";
import TestimonialCarousel from "@/components/client/TestimonialCarousel";
import Footer from "@/components/static/Footer";
import Experience from "@/components/static/Experience";
import About from '@/components/client/About';
import WorkShowcase from "@/components/client/WorkShowcase";
import CTASection from "@/components/static/CTASection";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ahmed Digital",
  "url": "https://ahmeddigital.com",
  "logo": "https://ahmeddigital.com/photos/AHMED.png",
  "description": "Ahmed Digital is a video editing agency offering services for reels, YouTube, ads, promos, real estate, and tutorial videos.",
  "sameAs": [
    "https://www.facebook.com/share/1FBCAjnTue/",
    "https://www.linkedin.com/company/ahmeddigital247/posts/?feedView=all",
    "https://www.instagram.com/ahmed.digital247",
  ]
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmed Digital | Trusted Video Editing Services for USA & Canada</title>
        <meta name="description" content="Expert video editing for YouTube, ads, reels, real estate, promos, and corporate videos. Trusted by American businesses for viral marketing videos." />
        <meta name="keywords" content="video editing USA, reels editor, promo video editing, real estate video editor" />
        <link rel="canonical" href="https://ahmeddigital.com" />
        <meta property="og:title" content="Ahmed Digital | Trusted Video Editing Services" />
        <meta property="og:description" content="We create stories that you want to tell." />
        <meta property="og:url" content="https://ahmeddigital.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmed Digital | Trusted Video Editing Services" />
        <meta name="twitter:description" content="We create stories that you want to tell." />
      </Head>

      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        <HeroSection />
        <About />
        <FeaturedWork />
        <WorkShowcase />
        <TestimonialCarousel />
        <Experience />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}

import HeroSection from "@/components/client/HeroSection";
import ClientLogoStrip from "@/components/static/ClientLogoStrip";
import FeaturedWork from "@/components/client/FeaturedWork";
import TestimonialCarousel from "@/components/client/TestimonialCarousel";
import Footer from "@/components/static/Footer";
import Experience from "@/components/static/Experience";
import About from '@/components/client/About';
import WorkShowcase from "@/components/client/WorkShowcase";
import CTASection from "@/components/static/CTASection";

// Schema.org Structured Data
const schemaData = [
  {
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
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Video Editing Services",
    "provider": {
      "@type": "Organization",
      "name": "Ahmed Digital"
    },
    "description": "High-quality video editing for TikTok reels, YouTube, corporate ads, and tutorials.",
    "areaServed": ["US", "CA", "GB", "AU"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Video Editing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Short-Form Content (Reels, TikToks)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing & Ad Videos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Long-Form YouTube Content"
          }
        }
      ]
    }
  }
];

export default function Home() {
  return (
    <>
      <script
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

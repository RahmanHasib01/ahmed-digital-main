import HeroSection from "@/components/client/HeroSection";
import ClientLogoStrip from "@/components/static/ClientLogoStrip";
import FeaturedWork from "@/components/client/FeaturedWork";
import TestimonialCarousel from "@/components/client/TestimonialCarousel";
import Footer from "@/components/static/Footer";
import Experience from "@/components/static/Experience";
import About from '@/components/client/About';
import WorkShowcase from "@/components/client/WorkShowcase";
import CTASection from "@/components/static/CTASection";
import FAQSection from "@/components/static/FAQSection";

// Schema.org Structured Data
const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ahmed Digital",
    "url": "https://ahmeddigital.com",
    "logo": "https://ahmeddigital.com/favicon.ico",
    "description": "Ahmed Digital is a premium video editing agency specializing in high-impact, scroll-stopping content for reels, YouTube, ads, and real estate.",
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
    "description": "High-quality video post-production for TikTok reels, YouTube content, corporate ads, and tutorials.",
    "areaServed": ["US", "CA", "GB", "AU"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Video Editing Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Short-Form Content (Reels, TikToks, Shorts)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing & Ad Videos (VSLs)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Showcase Videos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Long-Form YouTube Content Strategy"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Ahmed Digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ahmed Digital is a premium video editing service specializing in high-impact, scroll-stopping content. I provide 'Done-For-You' organic content systems designed to help businesses and creators grow their influence."
        }
      },
      {
        "@type": "Question",
        "name": "What video editing services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I offer viral reels for Instagram and TikTok, YouTube long-form editing, real estate showcase videos, corporate event recaps, and high-conversion Video Sales Letters (VSLs)."
        }
      },
       {
        "@type": "Question",
        "name": "Do you provide video editing for real estate agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, real estate is one of my core niches. I create professional properties showcase videos that highlight key features and help agents build a premier local brand."
        }
      }
    ]
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
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}

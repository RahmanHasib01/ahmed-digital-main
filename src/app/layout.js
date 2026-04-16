import "./globals.css";
import NavBar from "@/components/static/Nav";
import SmoothScrollWrapper from "@/components/client/SmoothScrollWrapper";
import { Poppins } from "next/font/google";
import CustomCursor from "@/components/client/CustomCursor";
import Script from "next/script";
import LoaderWrapper from "@/components/client/LoaderWrapper";
import { Suspense } from 'react';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200','500', '600', '700',],
  variable: '--font-poppins'
});

export const metadata = {
  metadataBase: new URL('https://ahmeddigital.com'),
  title: 'Ahmed Digital | Video Editing Agency for Reels, Ads & Real Estate Videos',
  description:
    'Professional video editing for reels, YouTube, ads, VSLs, real estate, and corporate videos. Serving USA clients with viral marketing videos.',
  keywords: 'video editing agency, reels editing, real estate video editor, YouTube video editor, marketing videos, USA video editor, video production',
  openGraph: {
    title: 'Ahmed Digital | Video Editing Agency for Reels & Ads',
    description: 'I create scroll-stopping stories that convert. Professional video editing for businesses and creators.',
    url: 'https://ahmeddigital.com',
    siteName: 'Ahmed Digital',
    images: [
      {
        url: '/photos/AHMED.png',
        width: 1200,
        height: 630,
        alt: 'Ahmed Digital Video Editing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Digital | Professional Video Editing Agency',
    description: 'Transform your content with viral-edge video editing. Specializing in Reels, Ads, and YouTube.',
    images: ['/photos/AHMED.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://ahmeddigital.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <div className="custom-cursor">
          <LoaderWrapper>
            <CustomCursor />
            <Suspense fallback={null}>
              <NavBar />
            </Suspense>
            <SmoothScrollWrapper>
              {children}
            </SmoothScrollWrapper>
          </LoaderWrapper>
        </div>

        {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D2PGN9Z0XZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-D2PGN9Z0XZ');
        `}
        </Script>
      </body>
    </html>
  );
}

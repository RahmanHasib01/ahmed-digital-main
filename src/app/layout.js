import "./globals.css";
import NavBar from "@/components/static/Nav";
import SmoothScrollWrapper from "@/components/client/SmoothScrollWrapper";
import { Poppins } from "next/font/google";
import CustomCursor from "@/components/client/CustomCursor";
import Script from "next/script";
import LoaderWrapper from "@/components/client/LoaderWrapper";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200','500', '600', '700',],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'Ahmed Digital | Video Editing Agency for Reels, Ads & Real Estate Videos',
  description:
    'Professional video editing for reels, YouTube, ads, VSLs, real estate, and corporate videos. Serving USA clients with viral marketing videos.',
  keywords: 'video editing agency, reels editing, real estate video editor, YouTube video editor, marketing videos, USA video editor',
  openGraph: {
    title: 'Ahmed Digital | Video Editing Agency',
    description: 'We create stories that you want to tell.',
    url: 'https://ahmeddigital.com',
    siteName: 'Ahmed Digital',
    images: [
      {
        url: 'https://ahmeddigital.com/photos/AHMED.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
            <NavBar />
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

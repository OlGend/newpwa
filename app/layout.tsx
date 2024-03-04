import { Analytics } from "@vercel/analytics/react";
import { TheHeader } from "@/components/TheHeader";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { TheFooter } from "@/components/TheFooter";
import RandomWindow from "@/components/random/RandomWindow";
// import BannerWindow from "@/components/banner/BannerWindow";
import Script from "next/script";

const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  title:
  "Bonus XXXCasinoGuru: Your Comprehensive Source for Casino Reviews and Insights",
  description:
    "Welcome to Bonus XXXCasinoGuru, your ultimate destination for comprehensive casino reviews and invaluable insights. Whether you're a seasoned gambler or just starting your casino journey, we're here to guide you through the world of online casinos. Our expert team meticulously reviews casinos, covering game variety, bonuses, payment options, security, and more. With our in-depth analysis and unbiased recommendations, you can make informed decisions and elevate your gaming experience. Explore our extensive database, stay updated with the latest trends, and embark on a rewarding casino adventure with Bonus XXXCasinoGuru.",
    manifest: "/manifest.json",
    openGraph: {
      type: "website",
      siteName: APP_NAME,
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      description: APP_DESCRIPTION,
    },
    twitter: {
      card: "summary",
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      description: APP_DESCRIPTION,
    },
    // <link rel="apple-touch-icon" href="/icons/ios.png" />
};

export const viewport: Viewport = {
  themeColor: "#ffffff"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Next PWA" />
        <link rel="apple-touch-icon" sizes="72x72" href="./logo72x72.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="./logo192x192.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="./logo384x384.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="./logo512x512.png" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </head>
      <body>
        {/* <RandomWindow /> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R5MZ7TVJRB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R5MZ7TVJRB');
          `}
        </Script>
        <Script id="hotjar">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3873571,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        <TheHeader />

        <main>
          {children}
          <Analytics />
        </main>
        <TheFooter />
      </body>
    </html>
  );
}

"use client"
import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { TheHeader } from "@/components/TheHeader";
import "./globals.css";
import { TheFooter } from "@/components/TheFooter";
import RandomWindow from "@/components/random/RandomWindow";
import Script from "next/script";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      // Здесь вы можете сохранить событие для дальнейшего использования
      // Например, сохранить его в состояние компонента или глобальное состояние
      console.log("Перехвачено событие beforeinstallprompt");
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);
  return (
    <html lang="en">
      <head>

      </head>
      <body>
   
        {/* <RandomWindow /> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-R5MZ7TVJRB" strategy="afterInteractive" />
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

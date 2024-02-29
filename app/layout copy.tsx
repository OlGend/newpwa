"use client"
import { useEffect } from 'react';
import Script from "next/script";
import { TheHeader } from "@/components/TheHeader";
import { TheFooter } from "@/components/TheFooter";
import "./globals.css";
// Другие импорты...

export default function RootLayout({ children }: { children: React.ReactNode; }) {
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
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-R5MZ7TVJRB" strategy="afterInteractive" />
      {/* Другие Script компоненты */}
      <TheHeader />
      <main>
        {children}
        {/* Analytics или любой другой компонент */}
      </main>
      <TheFooter />
    </>
  );
}



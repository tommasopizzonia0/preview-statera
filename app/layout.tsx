import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/ui/header";
import { BackToTop } from "@/components/ui/back-to-top";
import { NutritionBackdrop } from "@/components/ui/nutrition-backdrop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Statera | Il gestionale per nutrizionisti",
  description: "Clienti, misurazioni, piani alimentari, agenda e report in un unico ambiente professionale.",
  icons: {
    icon: "/statera-favicon.png?v=1",
    shortcut: "/statera-favicon.png?v=1",
    apple: "/statera-favicon.png?v=1",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      {/* suppressHydrationWarning: estensioni del browser (es. ColorZilla) iniettano
          attributi nel body prima di React e causano falsi warning di hydration. */}
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white antialiased`}>
        <NutritionBackdrop />
        <Header />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importazione dei componenti UI
import { Header } from "@/components/ui/header";
import { GreenShader } from "@/components/ui/green-shader";
import { BackToTop } from "@/components/ui/back-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Statera | L'Eccellenza Nutrizionale",
  description: "Piattaforma Luxury per Nutrizionisti d'Élite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen relative bg-transparent`}
      >
        {/* La GreenShader ha -z-50 e fixed. Rimarrà dietro tutto */}
        <GreenShader />

        {/* L'Header ha z-50. Rimarrà sopra tutto */}
        <Header />
        
        {/* Contenitore principale con z-index per stare sopra la shader */}
        <main className="relative z-10">
          {children}
        </main>

        <BackToTop />
      </body>
    </html>
  );
}
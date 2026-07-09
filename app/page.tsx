"use client";
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { AuroraText } from "@/components/ui/aurora-text";
import { FeaturesGrid } from "@/components/ui/features-grid";
import { StatsSection } from "@/components/ui/statsSection";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  // Variabile definita per evitare errori di compilazione
  const appScreenshotUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop";

  const primaryGreen = "text-[#059669]"; // Verde Statera per contrasto
  const textDark = "text-slate-900";     // Testo quasi nero

  return (
    /* bg-white solido senza trasparenze per un look pulito */
    <main className="w-full bg-white flex flex-col items-center relative min-h-screen">

      {/* SEZIONE HERO */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-8 text-center z-10">
        <h1 className={`${textDark} text-5xl md:text-7xl font-extrabold tracking-tighter mb-6`}>
          <AuroraText className="text-[#059669]">STATERA</AuroraText><br />
          La Piattaforma per <br />
          Nutrizionisti d&apos;<AuroraText className="text-[#10b981]">Élite&nbsp;</AuroraText>
        </h1>

        <p className={`${primaryGreen} max-w-2xl mx-auto text-xl md:text-2xl font-medium mb-12`}>
          Eleva la tua pratica. Precisione millimetrica nella gestione dei pazienti, design sofisticato per la tua immagine.
        </p>

        <button className="group relative flex items-center justify-center px-10 py-4 mx-auto overflow-hidden font-bold text-lg border-2 border-[#10b981] rounded-full text-[#10b981] hover:text-white transition-all duration-300">
          <span className="absolute inset-0 w-full h-full bg-[#10b981] transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0 z-0"></span>
          <span className="relative z-10 pointer-events-none">Richiedi una Demo</span>
        </button>
      </div>

      {/* CONTAINER MACBOOK */}
      <div className="w-full relative flex flex-col items-center overflow-hidden bg-white">
        <MacbookScroll
          src={appScreenshotUrl}
          showGradient={false}
          title={
            <span className={`${textDark} font-bold text-3xl`}>
              Visualizza la <AuroraText>Preview</AuroraText> <br />
              Della Tua Nuova Dashboard
            </span>
          }
          badge={<div className="bg-[#059669] text-white px-3 py-1 rounded-full text-xs font-bold shadow">PREMIUM</div>}
        />
      </div>

      {/* SEZIONI FEATURES E STATS */}
      <div className="w-full relative z-30 -mt-20 bg-white">
        <FeaturesGrid />
        <StatsSection />
      </div>

      {/* SEZIONE DETTAGLI FINALE */}
      <div className="w-full bg-slate-50 py-24 border-t border-slate-200 relative z-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { title: "Gestione Pazienti", desc: "Cartelle cliniche digitali complete e intuitive." },
            { title: "Piani Alimentari", desc: "Generazione rapida con database Alimenti Luxury." },
            { title: "Analisi Avanzata", desc: "Monitoraggio progressi con grafici sofisticati." },
          ].map((feat, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500 group">
              <h3 className={`${textDark} text-2xl font-bold mb-3 group-hover:text-[#10b981] transition-colors`}>
                {feat.title}
              </h3>
              <p className={`${primaryGreen} text-lg opacity-80`}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { AuroraText } from "@/components/ui/aurora-text";
import { FeaturesGrid } from "@/components/ui/features-grid";
import { StatsSection } from "@/components/ui/statsSection";
import { PricingSection } from "@/components/ui/pricing-section";
import { StateraLampSection } from "@/components/lamp-demo";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  // Variabile definita per evitare errori di compilazione
  const appScreenshotUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=1200&auto=format&fit=crop";

  const primaryGreen = "text-[#059669]"; // Verde Statera per contrasto
  const textDark = "text-slate-900";     // Testo quasi nero
  const pricingData = {
    title: "Il piano giusto per la tua crescita.",
    subtitle: "Strumenti professionali, semplici da adottare. Parti dal piano più adatto al tuo studio e scala quando vuoi.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: "€19",
        frequency: "/ mese",
        description: "Per chi inizia.",
        features: [
          "Gestione clienti e fascicoli",
          "Schede alimentari e misurazioni",
          "Report PDF di base",
          "Fino a 30 clienti",
        ],
        buttonText: "Inizia ora",
        buttonLink: "/contatti",
      },
      {
        id: "pro",
        name: "Pro",
        price: "€39",
        frequency: "/ mese",
        description: "Per il professionista.",
        features: [
          "Tutto di Starter",
          "Agenda, promemoria e motore clinico",
          "Calcoli TDEE, macro e micro",
          "Report multi-sessione illimitati",
        ],
        buttonText: "Richiedi una demo",
        buttonLink: "/contatti",
        isFeatured: true,
      },
      {
        id: "studio",
        name: "Studio",
        price: "€79",
        frequency: "/ mese",
        description: "Per studi e team che lavorano insieme.",
        features: [
          "Tutto di Pro",
          "Multi-utente con ruoli e permessi",
          "Branding avanzato",
          "Supporto prioritario",
        ],
        buttonText: "Parla con noi",
        buttonLink: "/contatti",
      },
    ],
  };

  return (
    /* bg-white solido senza trasparenze per un look pulito */
    <main className="statera-page-background w-full flex flex-col items-center relative min-h-screen">

      {/* SEZIONE HERO */}
      <div className="max-w-7xl mx-auto px-5 pt-28 pb-8 text-center z-10 sm:pt-32">
        <h1 className={`${textDark} text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6`}>
          <AuroraText className="text-[#059669]">STATERA</AuroraText><br />
          La Piattaforma per <br />
          Nutrizionisti d&apos;<AuroraText className="text-[#10b981]">Élite&nbsp;</AuroraText>
        </h1>

        <p className={`${primaryGreen} max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-medium mb-9 sm:mb-12`}>
          Eleva la tua pratica. Precisione millimetrica nella gestione dei pazienti, design sofisticato per la tua immagine.
        </p>

        <a href="/contatti" className="group relative flex w-fit items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 mx-auto overflow-hidden font-bold text-base sm:text-lg border-2 border-[#10b981] rounded-full text-[#10b981] hover:text-white transition-all duration-300">
          <span className="absolute inset-0 w-full h-full bg-[#10b981] transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0 z-0"></span>
          <span className="relative z-10 pointer-events-none">Richiedi una Demo</span>
        </a>
      </div>

      {/* CONTAINER MACBOOK */}
      <div className="w-full relative flex flex-col items-center overflow-hidden bg-white/75">
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
      <div className="performance-section w-full relative z-30 -mt-8 bg-white/80 md:-mt-20">
        <FeaturesGrid />
        <StatsSection />
      </div>

      <div className="performance-section w-full">
        <StateraLampSection />
      </div>

      <div className="performance-section w-full">
        <PricingSection data={pricingData} />
      </div>

      {/* SEZIONE DETTAGLI FINALE */}
      <div className="performance-section w-full bg-slate-50/90 py-16 sm:py-24 border-t border-slate-200 relative z-20">
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

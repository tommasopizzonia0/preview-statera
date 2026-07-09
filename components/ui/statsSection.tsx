"use client";

import ScrollFloat from "@/components/ui/scroll-float";

export const StatsSection = () => {
  // Ho rimosso i placeholder precedenti con valori più professionali
  const stats = [
    { label: "Precisione", value: "99.9%", desc: "Calibrazione millimetrica per ogni singolo piano alimentare." },
    { label: "Pazienti", value: "10k+", desc: "La community dei migliori professionisti della nutrizione." },
    { label: "Efficienza", value: "x2", desc: "Meno tempo alla scrivania, più tempo dedicato ai tuoi pazienti." }
  ];

  const textDark = "text-slate-900";
  const primaryGreen = "text-[#059669]";

  return (
    /* bg-white per coerenza con il resto della pagina */
    <section className="py-40 px-8 max-w-7xl mx-auto bg-white">
      {/* INTESTAZIONE SEZIONE */}
      <div className="mb-32">
        <ScrollFloat
          animationDuration={0.8}
          stagger={0.03}
          scrollStart="top bottom-=10%"
          scrollEnd="bottom center"
          // Verde Statera acceso per il sottotitolo
          textClassName="text-[#059669] text-sm font-bold uppercase tracking-[0.3em]"
          containerClassName="mb-4"
        >
          I numeri dell'eccellenza
        </ScrollFloat>

        <ScrollFloat
          animationDuration={1.2}
          ease="power4.out"
          stagger={0.04}
          scrollStart="top bottom-=10%"
          scrollEnd="bottom center"
          // Testo scuro per lo sfondo bianco
          textClassName={`${textDark} text-5xl md:text-7xl font-light leading-tight`}
        >
          Prestazioni senza compromessi.
        </ScrollFloat>
      </div>

      <div className="space-y-40">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            // Bordo scuro leggero invece di bianco/10
            className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-16 group transition-all"
          >
            <div className="max-w-2xl">
              {/* LABEL DELLA STATISTICA */}
              <ScrollFloat
                animationDuration={0.7}
                stagger={0.02}
                scrollStart="top bottom-=5%"
                containerClassName="mb-6"
                // Verde leggermente opaco che si accende al passaggio del mouse
                textClassName="text-[#059669] text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity"
              >
                {stat.label}
              </ScrollFloat>
              
              {/* VALORE (L'ELEMENTO PIÙ VISIBILE) */}
              <ScrollFloat
                animationDuration={1.5}
                ease="back.out(1.7)" 
                scrollStart="top bottom-=5%"
                scrollEnd="bottom center"
                stagger={0.1}
                containerClassName="mb-4"
                // Valore in nero profondo per un impatto "luxury"
                textClassName={`text-7xl md:text-[11rem] font-black leading-none ${textDark} tracking-tighter`}
              >
                {stat.value}
              </ScrollFloat>
            </div>

            <div className="md:max-w-xs mt-8 md:mt-0 md:text-right">
              {/* DESCRIZIONE */}
              <ScrollFloat
                animationDuration={1}
                stagger={0.01}
                scrollStart="top bottom-=5%"
                // Grigio scuro per la descrizione
                textClassName="text-slate-500 text-lg md:text-xl font-medium leading-relaxed group-hover:text-slate-900 transition-colors"
              >
                {stat.desc}
              </ScrollFloat>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
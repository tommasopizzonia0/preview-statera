"use client";
import React from "react";
import { AuroraText } from "@/components/ui/aurora-text";
// Importazione del bottone stateful che gestisce i caricamenti
import { Button } from "@/components/ui/stateful-button";
import { BackButton } from "@/components/back-button";
import { Footer } from "@/components/ui/footer";

export default function ContattiPage() {
  const textDark = "text-slate-900";
  const primaryGreen = "text-[#059669]";

  // Funzione per gestire l'invio del form (API mock)
  const handleSendRequest = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Richiesta inviata all'élite Statera");
        resolve(true);
      }, 4000); // 4 secondi come richiesto dalla demo dello stateful button
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8 relative flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm">
      <div className="w-full max-w-7xl mb-8 flex justify-start">
        <BackButton />
      </div>
      {/* INTESTAZIONE */}
      <div className="text-center mb-12 relative z-10">
        <p className={`${primaryGreen} uppercase font-bold tracking-widest text-sm mb-3`}>
          Supporto d'Élite
        </p>
        <h1 className={`${textDark} text-4xl md:text-6xl font-black mb-6 tracking-tight`}>
          Mettiti in <AuroraText>Contatto</AuroraText>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
          Siamo pronti a trasformare il modo in cui gestisci i tuoi pazienti.
          Compila il modulo sottostante per richiedere l'accesso esclusivo a Statera.
        </p>
      </div>

      {/* FORM CONTAINER (Glassmorphism Chiaro) */}
      <div className="w-full max-w-2xl relative p-8 md:p-12 rounded-3xl bg-white/80 border border-slate-200 backdrop-blur-xl z-10 shadow-2xl shadow-emerald-500/10">
        <form className="space-y-6 flex flex-col">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">
                Nome e Cognome
              </label>
              <input
                id="name"
                type="text"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#059669]/20 focus:border-[#059669] transition-all"
                placeholder="Dr. Mario Rossi"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">
                Email Professionale
              </label>
              <input
                id="email"
                type="email"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#059669]/20 focus:border-[#059669] transition-all"
                placeholder="mario.rossi@studio.it"
              />
            </div>
          </div>

          {/* Oggetto */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">
              Argomento
            </label>
            <div className="relative">
              <select
                id="subject"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#059669]/20 focus:border-[#059669] transition-all appearance-none cursor-pointer"
              >
                <option value="info">Richiesta Informazioni</option>
                <option value="demo">Prenota una Demo</option>
                <option value="support">Supporto Tecnico</option>
                <option value="other">Altro</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4L6 8L10 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Messaggio */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">
              Messaggio
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#059669]/20 focus:border-[#059669] transition-all resize-none"
              placeholder="Come possiamo aiutarti a raggiungere l'eccellenza?"
            ></textarea>
          </div>

          {/* STATEFUL BUTTON ADATTATO */}
          <div className="mt-4 w-full">
            <Button
              onClick={handleSendRequest}
              className="w-full bg-[#059669] hover:bg-[#047857] text-white font-black text-lg py-7 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)] hover:shadow-[0_0_30px_rgba(5,150,105,0.4)]"
            >
              Invia Richiesta
            </Button>
          </div>
        </form>
        {/* FOOTER */}
      </div>
      <Footer />

    </div>
  );
}
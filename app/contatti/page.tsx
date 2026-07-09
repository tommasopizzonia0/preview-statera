"use client";
import React, { useRef } from "react";
import { AuroraText } from "@/components/ui/aurora-text";
// Importazione del bottone stateful che gestisce i caricamenti
import { Button } from "@/components/ui/stateful-button";
import { BackButton } from "@/components/back-button";
import { Footer } from "@/components/ui/footer";

export default function ContattiPage() {
  const textDark = "text-slate-900";
  const primaryGreen = "text-[#059669]";
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendRequest = async () => {
    const form = formRef.current;
    if (!form || !form.reportValidity()) {
      throw new Error("Compila tutti i campi obbligatori.");
    }

    const data = new FormData(form);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(data.entries())),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error ?? "Invio non riuscito.");
    }

    form.reset();
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
        <form ref={formRef} className="space-y-6 flex flex-col" onSubmit={(event) => event.preventDefault()}>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Sito web</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">
                Nome e Cognome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
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
                name="email"
                type="email"
                required
                autoComplete="email"
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
                name="subject"
                defaultValue="demo"
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
              name="message"
              rows={5}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#059669]/20 focus:border-[#059669] transition-all resize-none"
              placeholder="Come possiamo aiutarti a raggiungere l'eccellenza?"
            ></textarea>
          </div>

          {/* STATEFUL BUTTON ADATTATO */}
          <div className="mt-4 w-full">
            <Button
              type="button"
              onClick={handleSendRequest}
              className="w-full bg-[#059669] hover:bg-[#047857] text-white font-black text-lg py-7 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)] hover:shadow-[0_0_30px_rgba(5,150,105,0.4)]"
            >
              Invia Richiesta
            </Button>
            <p className="mt-3 text-center text-xs text-slate-500">
              La richiesta verrà inviata direttamente al team Statera.
            </p>
          </div>
        </form>
        {/* FOOTER */}
      </div>
      <Footer />

    </div>
  );
}

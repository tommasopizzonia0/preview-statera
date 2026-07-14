"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { getConsent, isConsentBannerVisible, openConsentBanner, setConsent, subscribeToConsent } from "@/lib/meta-pixel";

// Banner di consenso ai cookie: finché l'utente non sceglie, il Meta Pixel
// non viene caricato. La scelta è salvata in localStorage e può essere
// rivista in qualsiasi momento dalla pagina /privacy.
export const CookieConsent = () => {
  const visible = useSyncExternalStore(subscribeToConsent, isConsentBannerVisible, () => false);

  if (!visible) return null;

  const choose = (value: "granted" | "denied") => {
    const wasGranted = getConsent() === "granted";
    setConsent(value);
    // Revoca del consenso: ricarica per scaricare lo script del Pixel già attivo.
    if (value === "denied" && wasGranted) window.location.reload();
  };

  return (
    <div role="dialog" aria-label="Preferenze cookie" className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_rgba(2,6,23,0.18)] sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-black text-slate-950">Cookie e tracciamento</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Usiamo il Meta Pixel per misurare le nostre campagne. Si attiva solo se accetti.
            Dettagli nella{" "}
            <Link href="/privacy" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">
              Privacy &amp; Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="min-h-11 cursor-pointer rounded-full border border-slate-300 bg-white px-5 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="min-h-11 cursor-pointer rounded-full bg-slate-950 px-6 text-sm font-black text-white transition-colors hover:bg-emerald-700"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
};

// Pulsante per riaprire il banner (usato nella pagina privacy).
export const CookiePreferencesButton = () => (
  <button
    type="button"
    onClick={openConsentBanner}
    className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-slate-300 bg-white px-5 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
  >
    Gestisci preferenze cookie
  </button>
);

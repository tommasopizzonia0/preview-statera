// Helper per il Meta Pixel: gestione del consenso e wrapper tipizzati su fbq.
// Il Pixel viene caricato solo dopo consenso esplicito (vedi components/ui/meta-pixel.tsx).

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

const CONSENT_KEY = "statera-cookie-consent";

export type ConsentValue = "granted" | "denied";

const CONSENT_CHANGE_EVENT = "statera:consent-change";
const CONSENT_OPEN_EVENT = "statera:consent-open";

// True quando l'utente ha chiesto di rivedere le preferenze (es. da /privacy).
let bannerRequested = false;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function setConsent(value: ConsentValue) {
  bannerRequested = false;
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

// Riapre il banner (es. dal pulsante "Gestisci preferenze" nella privacy policy).
export function openConsentBanner() {
  bannerRequested = true;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

export function isConsentBannerVisible(): boolean {
  return bannerRequested || getConsent() === null;
}

// Store esterno per useSyncExternalStore: notifica i componenti quando
// cambia il consenso o viene richiesta la riapertura del banner.
export function subscribeToConsent(callback: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  window.addEventListener(CONSENT_OPEN_EVENT, callback);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
    window.removeEventListener(CONSENT_OPEN_EVENT, callback);
  };
}

export function trackPageView() {
  window.fbq?.("track", "PageView");
}

// L'eventID permette a Meta di deduplicare l'evento browser con quello
// inviato dal server via Conversions API (stesso ID = un solo Lead contato).
export function trackLead(eventId: string) {
  window.fbq?.("track", "Lead", {}, { eventID: eventId });
}

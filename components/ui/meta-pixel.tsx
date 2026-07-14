"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { META_PIXEL_ID, getConsent, subscribeToConsent, trackPageView } from "@/lib/meta-pixel";

// Carica lo snippet del Meta Pixel solo dopo il consenso ai cookie di marketing.
// Con l'App Router il PageView automatico scatta solo al primo caricamento:
// i cambi rotta client-side vanno tracciati a mano osservando il pathname.
export const MetaPixel = () => {
  const consent = useSyncExternalStore(subscribeToConsent, getConsent, () => null);
  const enabled = consent === "granted" && Boolean(META_PIXEL_ID);
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    // Il primo PageView lo invia lo snippet stesso: qui tracciamo solo le navigazioni successive.
    if (lastTrackedPath.current === null) {
      lastTrackedPath.current = pathname;
      return;
    }
    if (lastTrackedPath.current !== pathname) {
      lastTrackedPath.current = pathname;
      trackPageView();
    }
  }, [enabled, pathname]);

  if (!enabled) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
    </Script>
  );
};

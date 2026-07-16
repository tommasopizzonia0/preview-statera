"use client";

import { useEffect, useRef } from "react";

// Video dimostrativo: parte in automatico (muto) solo quando entra nel
// viewport e si mette in pausa quando esce, per non consumare risorse
// e non distrarre mentre si legge il resto della pagina.
export const DemoVideo = ({ src, label, className }: { src: string; label: string; className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // play() può essere rifiutato (es. risparmio energetico): non è un errore.
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className={className}
    />
  );
};

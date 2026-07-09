"use client";
import React, { useEffect, useState } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const words = ["Torna", "Su"];

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-[100] flex items-center w-[140px] h-[56px] overflow-hidden bg-transparent cursor-pointer group transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Linea decorativa sotto (il :before del CSS) */}
      <div className="absolute bottom-2 left-0 w-full h-[2px] bg-[#10b981] origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />

      {/* Testo Originale (quello che sale) */}
      <div className="absolute inset-0 flex items-center">
        {words.map((word, i) => (
          <span
            key={`text-${i}`}
            className="text-[#10b981] text-lg font-bold uppercase ml-1 transition-all duration-300 group-hover:-translate-y-[60px]"
          >
            {word}
          </span>
        ))}
      </div>

      {/* Testo Clone (quello che entra dal basso) */}
      <div className="absolute inset-0 flex items-center">
        {words.map((word, i) => (
          <span
            key={`clone-${i}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
            className="text-[#10b981] text-lg font-bold uppercase ml-1 opacity-0 translate-y-[60px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          >
            {word}
          </span>
        ))}
      </div>

      {/* Icona Freccia */}
      <svg
        className="absolute right-0 w-6 h-6 text-[#10b981] -rotate-90 transition-all duration-300 group-hover:-translate-y-2"
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </button>
  );
};
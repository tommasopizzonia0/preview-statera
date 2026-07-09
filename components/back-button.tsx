"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="group flex h-10 w-28 items-center justify-center bg-white/80 border border-slate-200 rounded-xl tracking-wider transition-all duration-200 cursor-pointer hover:-translate-y-0.5 hover:shadow-[5px_5px_15px_#e2e2e2,-5px_-5px_15px_#ffffff] active:scale-95 z-50 shadow-sm"
    >
      <svg
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="mr-1.5 transition-all duration-400 group-hover:-translate-x-1.5 text-slate-900"
      >
        <path
          fill="currentColor"
          d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"
        />
      </svg>
      <span className="text-slate-900 font-bold text-sm">Home</span>
    </button>
  );
};
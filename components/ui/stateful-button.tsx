"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Loader2, Check, AlertCircle } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => Promise<unknown>;
  children: React.ReactNode;
}

export const Button = ({ onClick, children, className, ...props }: ButtonProps) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInternalClick = async () => {
    if (status !== "idle") return;

    setStatus("loading");
    try {
      await onClick();
      setStatus("success");
      // Torna allo stato normale dopo 2 secondi dal successo
      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      setStatus("error");
      console.error("Errore durante l'invio:", error);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <button
      {...props}
      onClick={handleInternalClick}
      disabled={status === "loading" || status === "success"}
      className={cn(
        "relative flex cursor-pointer items-center justify-center transition-all duration-300 disabled:cursor-not-allowed",
        status === "success" ? "bg-emerald-600" : "",
        className
      )}
    >
      {/* Testo Originale - Visibile solo se IDLE */}
      <span className={cn(
        "transition-all duration-300 flex items-center gap-2",
        status !== "idle" ? "opacity-0 scale-90" : "opacity-100 scale-100"
      )}>
        {children}
      </span>

      {/* Stato LOADING - Spinner */}
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-white" />
        </div>
      )}

      {/* Stato SUCCESS - Icona Check */}
      {status === "success" && (
        <div className="absolute inset-0 flex items-center justify-center gap-2" aria-live="polite">
          <Check className="h-6 w-6 text-white animate-in zoom-in duration-300" />
          <span>Richiesta inviata</span>
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center gap-2" aria-live="assertive">
          <AlertCircle className="h-6 w-6 text-white" />
          <span>Invio non riuscito. Riprova</span>
        </div>
      )}
    </button>
  );
};

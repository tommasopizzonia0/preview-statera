// components/ui/green-shader.tsx
"use client";
import React from "react";

export const GreenShader = () => {
  return (
    // Forziamo un background nero puro sul contenitore fisso
    <div 
      className="fixed inset-0 overflow-hidden" 
      style={{ background: '#000000', zIndex: -50 }}
    >
      {/* Luci soffuse verdi */}
      <div 
        className="absolute inset-0 animate-pulse-slow"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, #059669 0%, transparent 50%),
            radial-gradient(circle at 85% 75%, #064e3b 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, #022c22 0%, transparent 70%)
          `,
          filter: "blur(100px)",
        }}
      />
      
      {/* Riduciamo l'opacità del noise per non scurire troppo */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />
    </div>
  );
};